import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageService = () => {

    const { user } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-service/${user?.email}`, {withCredentials: true})
        setServices(data)
    }

    const handleDelete = _id => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/services/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Service has been deleted.",
                                icon: "success"
                            });
                            const remaining = services.filter(serve => serve._id !== _id)
                            setServices(remaining)
                        }
                    })


            }
        });

    }

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Manage Service</title>
            </Helmet>
            <h3 className="text-2xl font-bold text-center my-8">My Added Service</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
                {
                    services?.map(service => <div key={service?._id} className="rounded-md shadow-md hover:scale-[1.05] transition-all">
                        <img src={service?.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">{service?.name}</h2>
                                <p className="font-semibold">Cost: ${service?.cost}</p>
                                <p className="font-semibold">Area: {service?.area}</p>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <Link to={`/service-details/${service?._id}`}>
                                    <button type="button" className="w-full p-3 font-bold tracking-wide rounded-md bg-[#83B582] text-white hover:bg-orange-400 duration-300">Details</button>
                                </Link>
                                <Link to={`/update-service/${service?._id}`}>
                                    <button className="w-full p-3 font-bold tracking-wide rounded-md bg-orange-500 text-white hover:bg-orange-600 duration-300">Update</button>
                                </Link>
                                <button onClick={() => handleDelete(service?._id)} className="w-full p-3 font-bold tracking-wide rounded-md bg-red-500 text-white hover:bg-red-600 duration-300">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;