import { useLoaderData } from "react-router-dom";
import AllServiceCard from "../components/AllServiceCard";

const Services = () => {

    const services = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <div>
                {
                    services.map(service => <AllServiceCard
                    key={service._id}
                    service={service}
                    ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;