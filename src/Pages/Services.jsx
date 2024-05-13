import AllServiceCard from "../components/AllServiceCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/all-services?search=${search}`
            )
            setServices(data)
        }
        getData()
    }, [search])

    const handleSearch = e => {
        e.preventDefault()

        const text = e.target.search.value;
        setSearch(text)
    }

    if (services.length === 0) {
        return <div className="min-h-[calc(100vh-264px)]">
            <form onSubmit={handleSearch}>
                <fieldset className="w-32 mx-auto my-5 space-y-1">
                    <div className="flex">
                        <input type="text" name="search" id="search" placeholder="Search" className="flex flex-1 px-1 text-left border rounded-l-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" />
                        <input type="submit" value="Search" className="flex items-center px-4 py-3 sm:text-sm cursor-pointer rounded-r-md bg-orange-400 text-white font-semibold" />
                    </div>
                </fieldset>
            </form>
            <div className="flex justify-center items-center lg:mt-20">
                <Helmet>
                    <title>Services | Legal-Vantage</title>
                </Helmet>
                <h3 className="text-3xl font-bold text-center text-gray-400 text-opacity-70">No Service Found</h3>
            </div>
        </div>
    }

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Services | Legal-Vantage</title>
            </Helmet>

            <form onSubmit={handleSearch}>
                <fieldset className="w-32 mx-auto my-5 space-y-1">
                    <div className="flex">
                        <input type="text" name="search" id="search" placeholder="Search" className="flex flex-1 px-1 text-left border rounded-l-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" />
                        <input type="submit" value="Search" className="flex items-center px-4 py-3 sm:text-sm cursor-pointer rounded-r-md bg-orange-400 text-white font-semibold" />
                    </div>
                </fieldset>
            </form>

            <div>
                {
                    services.map((service, idx) => <AllServiceCard
                        key={service._id}
                        service={service}
                        idx={idx}
                    ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;