import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateService = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const service = useLoaderData()

    const {_id, name, photo, area, cost, description } = service;

    const handleUpdateService = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const area = form.area.value;
        const cost = form.cost.value;
        const description = form.description.value;
        const providerName = user?.displayName;
        const providerEmail = user?.email;
        const providerPhoto = user?.photoURL

        const updateService = { name, photo, area, cost, description, providerEmail, providerName, providerPhoto }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/services/${_id}`, updateService)
            console.log(data)
            toast.success('Service Data Updated Successfully!')
            navigate('/manage-service')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="min-h-[calc(100vh-264px)]">
            <form
                onSubmit={handleUpdateService}
                className="container flex flex-col mx-auto space-y-12">
                <fieldset className="p-5 rounded-md shadow-sm">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="" className="text-sm text-black font-semibold">Service Name</label>
                            <input id="" name="name" defaultValue={name} type="text" placeholder="Service name" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm text-black font-semibold">Photo URL</label>
                            <input id="email" name="photo" defaultValue={photo} type="text" placeholder="Photo URL" className="w-full rounded-md p-1 focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm text-black font-semibold">Service Area</label>
                            <input id="address" name="area" defaultValue={area} type="text" placeholder="Area/Location" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm text-black font-semibold">Service Cost</label>
                            <input id="city" name="cost" defaultValue={cost} type="number" placeholder="Service cost" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm text-black font-semibold">Description</label>
                            <textarea id="bio" name="description" defaultValue={description} placeholder="Description" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full">
                            <input type="submit" className="btn btn-block bg-[#83B582] text-white hover:bg-orange-400 duration-300" value="Updated Service" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateService;