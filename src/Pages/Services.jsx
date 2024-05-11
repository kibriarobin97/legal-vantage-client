import { useLoaderData } from "react-router-dom";
import AllServiceCard from "../components/AllServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {

    const services = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Service | Legal-Vantage</title>
            </Helmet>
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