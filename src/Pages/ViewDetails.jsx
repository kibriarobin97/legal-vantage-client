import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const services = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-264px)] my-10">
            <div className="w-full p-4 shadow-md">
                <div className="space-y-4">
                    <div className="space-y-2 w-full">
                        <img src={services?.service_image} alt="" className="block object-cover object-center w-full rounded-md h-80 bg-gray-500" />

                    </div>
                    <div className="flex items-center">
                        <div className="space-y-3 p-2 flex-1">
                            <h2 className="text-2xl font-bold">Service Details:</h2>
                            <h3 className="text-xl font-semibold">{services?.service_name}</h3>
                            <p className="font-semibold">Cost: ${services?.service_price}</p>
                            <p className="leading-snug"><span>Description:</span>{services?.service_description}</p>
                            <button className="btn text-white font-bold bg-[#83B582] hover:bg-orange-400 duration-300">Book Now</button>
                        </div>
                        <div className='border-l-2 px-5 my-2'>
                            <h2 className='text-2xl font-bold text-gray-600 '>
                                Provider Details:
                            </h2>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <p className='mt-2 text-sm font-bold text-gray-600 '>Name: </p>
                                    <p className="font-semibold">Service Area: {services?.service_area}</p>
                                </div>
                                <div className='rounded-full object-cover overflow-hidden w-20 h-20'>
                                    <img src="" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;