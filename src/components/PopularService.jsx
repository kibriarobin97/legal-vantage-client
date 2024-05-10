import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const PopularService = () => {

    const services = useLoaderData()

    return (
        <div id="service" className="">
            <h3 className="text-2xl font-bold text-center my-10">Popular Service</h3>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
            <div className="flex justify-center items-center mb-10">
                <Link to='/services' className="btn bg-orange-400 hover:bg-[#83B582] duration-300 text-white font-bold">Show All</Link>
            </div>
        </div>
    );
};

export default PopularService;