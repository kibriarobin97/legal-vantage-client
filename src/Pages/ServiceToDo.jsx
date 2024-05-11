import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const ServiceToDo = () => {

    const { user } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/booked/${user?.email}`)
        setServices(data)
    }

    const handleStatus = (e) => {
        console.log(e.target.value)
        // const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/booked/${id}`)
        // console.log(data)
        
    }

    if (services.length === 0) {
        return <div className="min-h-[calc(100vh-264px)] flex justify-center items-center">
            <Helmet>
                <title>Service to Do</title>
            </Helmet>
            <h3 className="text-3xl font-bold text-center text-gray-400 text-opacity-70">No Service Found</h3>
        </div>
    }

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <div className="min-h-[calc(100vh-264px)] my-10">
                <Helmet>
                    <title>Service to Do</title>
                </Helmet>
                <div className="p-2 sm:p-4 text-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="bg-gray-500">
                                <tr className="text-left">
                                    <th className="p-3 ">Service Name</th>
                                    <th className="p-3 ">Taking Date</th>
                                    <th className="p-3 ">Cost</th>
                                    <th className="p-3 ">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <tr key={service._id} className="border-b border-opacity-20">
                                        <td className="p-3 text-black">
                                            <p>{service?.serviceName}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p>{service?.takingDate}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p>${service?.cost}</p>
                                        </td>
                                        <td className="p-3">
                                                <select onChange={handleStatus} value='' name="status" id="" className="py-2 px-3 font-semibold rounded-md bg-orange-400 text-white w-32 text-center">
                                                    <option value="Pending">Pending</option>
                                                    <option value="Working">Working</option>
                                                    <option value="Complete">Complete</option>
                                                </select>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        {/* <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center text-black">Update Status</h3>
                                <div className="modal-action">
                                    <form
                                    onSubmit={handleStatusUpdate}
                                    method="dialog" className="flex justify-center items-center gap-5 w-full mx-auto">
                                        <select name="status" id="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700">
                                            <option value="">Pending</option>
                                            <option value="">Working</option>
                                            <option value="">Complete</option>
                                        </select>
                                        <input type="submit" value="Update" className="btn bg-orange-400 text-white font-semibold hover:bg-orange-500 duration-300"/>
                                    </form>
                                </div>
                            </div>
                        </dialog> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceToDo;