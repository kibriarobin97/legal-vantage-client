import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";


const ServiceToDo = () => {

    const { user } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/booked/${user?.email}`, { withCredentials: true })
        setServices(data)
    }

    const handleStatus = async (_id, status) => {
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/booked-service/${_id}`, { status })
        console.log(data)
        getData()

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
                                    <th className="p-3 ">Client Email</th>
                                    <th className="p-3 ">Taking Date</th>
                                    <th className="p-3 ">Cost</th>
                                    <th className="p-3 ">Status</th>
                                    <th className="p-3 ">Update Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <tr key={service._id} className="border-b border-opacity-20">
                                        <td className="p-3 text-black">
                                            <p className="font-medium">{service?.serviceName}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p className="font-medium">{service?.userEmail}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p className="font-medium">{service?.takingDate}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p className="font-medium">${service?.cost}</p>
                                        </td>
                                        <td className="p-3 text-black">
                                            <p className={`inline-flex font-medium items-center px-3 py-1 rounded-full gap-x-2 ${service?.status === 'Pending' &&
                                                'bg-yellow-100/70 text-yellow-500'
                                                } ${service?.status === 'Working' &&
                                                'bg-blue-100/70 text-blue-500'
                                                } ${service?.status === 'Complete' &&
                                                'bg-emerald-100/70 text-emerald-600'
                                                } `}>{service?.status}</p>
                                        </td>
                                        <td className="p-3">
                                            <details className="bg-orange text-black ">
                                                <summary className="flex justify-center items-center gap-1 cursor-pointer font-medium">Update <FaEdit /></summary>
                                                <ul className="p-2 z-50">
                                                    <li className="hover:bg-orange-400 hover:text-white font-medium"><button onClick={() => handleStatus(service?._id, 'Working')}>Working</button></li>
                                                    <li className="hover:bg-orange-400 hover:text-white font-medium"><button onClick={() => handleStatus(service?._id, 'Complete')}>Complete</button></li>
                                                </ul>
                                            </details>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceToDo;