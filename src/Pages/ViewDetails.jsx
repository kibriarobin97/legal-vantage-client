import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const services = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-264px)] my-10">
            <div className="w-full p-4 shadow-md">
                <div className="space-y-4">
                    <div className="space-y-2 w-full">
                        <img src={services?.photo} alt="" className="block object-cover object-center w-full rounded-md h-80 bg-gray-500" />

                    </div>
                    <div className="flex items-center">
                        <div className="space-y-3 p-2 flex-1">
                            <h2 className="text-2xl font-bold">Service Details:</h2>
                            <h3 className="text-xl font-semibold">{services?.name}</h3>
                            <p className="font-semibold">Cost: ${services?.cost}</p>
                            <p className="leading-snug"><span>Description:</span>{services?.description}</p>
                            <button className="btn text-white font-bold bg-[#83B582] hover:bg-orange-400 duration-300">Book Now</button>
                        </div>
                        <div className='border-l-2 px-5 my-2'>
                            <h2 className='text-2xl font-bold text-gray-600 '>
                                Provider Details:
                            </h2>
                            <div className='flex flex-col items-center gap-5'>
                                <div className='rounded-full object-cover overflow-hidden w-20 h-20'>
                                    <img src={services?.providerPhoto} alt='' />
                                </div>
                                <div>
                                    <p className='mt-2 font-bold text-gray-600 '>Name: {services?.providerName}</p>
                                    <p className='font-bold text-gray-600 '>Email: {services?.providerEmail}</p>
                                    <p className="font-semibold">Service Area: {services?.area}</p>
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