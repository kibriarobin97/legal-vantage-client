import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Purchase = () => {

    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {_id, name, photo, cost, providerEmail, providerName} = service;

    const handleBookingService = async e => {
        e.preventDefault()

        const form = e.target;

        const serviceId = form.serviceId.value;
        const serviceName = form.serviceName.value;
        const ServicePhoto = form.photo.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const cost = form.cost.value;
        const takingDate = form.date.value;
        const instruction = form.instruction.value;
        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const status = "Pending";

        const bookingService = {
            serviceId, serviceName, ServicePhoto, userEmail, userName, cost, takingDate, instruction, providerName, providerEmail, status
        }
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingService)
            console.log(data)
            toast.success('Booking successfully')
        }
        catch(err){
            console.log(err)
            toast.error(err.message)
        }

    }

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Purchase | Legal-Vantage</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-xl font-semibold capitalize text-center my-4 underline text-black">Booking Service</h2>

                <form onSubmit={handleBookingService}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black font-medium" >ServiceId</label>
                            <input disabled type="text" name="serviceId" defaultValue={_id} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-black font-medium" >Service Name</label>
                            <input type="text" name="serviceName" defaultValue={name} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-black font-medium">Service Image</label>
                            <input type="text" name="photo" defaultValue={photo} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-black font-medium" >User Email</label>
                            <input type="email" name="userEmail" defaultValue={user?.email} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-black font-medium" >User Name</label>
                            <input type="text" name="userName" defaultValue={user?.displayName} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-black font-medium" >Cost</label>
                            <input type="number" name="cost" defaultValue={cost} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-black font-medium" >Taking Date</label>
                            <input type="date" name="date" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-black font-medium">Special Instruction</label>
                            <textarea id="bio" name="instruction" placeholder="Instruction" className="w-full p-2 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 border border-gray-200 dark:border-gray-300"></textarea>
                        </div>
                        <div>
                            <label className="text-black font-medium" >Provider Name</label>
                            <input type="text" name="providerName" defaultValue={providerName} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-black font-medium" >Provider Email</label>
                            <input type="email" name="providerEmail" defaultValue={providerEmail} disabled className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Confirm Booking" className="px-8 py-2.5 leading-5 text-white duration-300 bg-[#83B582] rounded-md hover:bg-orange-400 cursor-pointer" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Purchase;