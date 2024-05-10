import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const PopularService = () => {

    const services = useLoaderData()    

    return (
        <div className="">
            <h3 className="text-2xl font-bold text-center my-10">Popular Service</h3>
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
            }
        </div>
    );
};

export default PopularService;