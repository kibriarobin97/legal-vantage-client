import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllServiceCard = ({ service }) => {

    const { _id, service_image, service_name, service_description, service_area, service_price } = service;

    return (
        <div className="max-w-6xl mx-auto flex shadow-md my-8">
            <img src={service_image} alt="" className="object-cover object-center w-1/3 h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{service_name}</h2>
                    <p className="">{service_description.substring(0, 100)}...</p>
                    <p className="font-semibold">Cost: ${service_price}</p>
                    <p className="font-semibold">Area: {service_area}</p>
                </div>
                <Link to={`/service-details/${_id}`} type="button" className="flex items-center text-white justify-center w-full p-3 font-bold tracking-wide rounded-md bg-[#83B582] hover:bg-orange-400 duration-300">Service Details</Link>
            </div>
            <div className='border-l-2 px-5 my-2'>
                <p className='mt-6 text-sm font-bold text-gray-600 '>
                    Provider Details:
                </p>
                <div className='flex items-center gap-5'>
                    <div>
                        <p className='mt-2 text-sm  text-gray-600 '>Name: </p>                  
                    </div>
                    <div className='rounded-full object-cover overflow-hidden w-20 h-20'>
                        <img src="" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

AllServiceCard.propTypes = {
    service: PropTypes.object
}

export default AllServiceCard;