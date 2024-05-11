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
            `${
              import.meta.env.VITE_API_URL
            }/all-services?search=${search}`
          )
          setServices(data)
        }
        getData()
      }, [ search ])

    const handleSearch = e => {
        e.preventDefault()

        const text = e.target.search.value;
        setSearch(text)
    }

    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Service | Legal-Vantage</title>
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