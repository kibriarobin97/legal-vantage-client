import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllServiceCard = ({ service, idx }) => {

    const { _id, area, cost, description, photo, name, providerName, providerPhoto } = service;
    // console.log(service)
    return (
        <div
        data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'} data-aos-duration="1000"
        className="max-w-6xl mx-auto md:flex shadow-md my-8 hover:scale-[1.05] transition-all">
            <img src={photo} alt="" className="object-cover object-center md:w-1/3 w-full h-72 bg-gray-500" />
            <div className="flex flex-col flex-1 justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="">{description?.substring(0, 100)}...</p>
                    <p className="font-semibold">Cost: ${cost}</p>
                    <p className="font-semibold">Area: {area}</p>
                </div>
                <Link to={`/service-details/${_id}`} type="button" className="flex items-center text-white justify-center w-full p-3 font-bold tracking-wide rounded-md bg-[#83B582] hover:bg-orange-400 duration-300">Service Details</Link>
            </div>
            <div className='border-l-2 px-5 my-2'>
                <p className='mt-6 text-lg font-bold text-gray-600 '>
                    Provider Details:
                </p>
                <div className='flex flex-col items-center gap-5 my-5'>
                    <div className='rounded-full object-cover overflow-hidden w-20 h-20'>
                        <img src={providerPhoto} alt='' className='rounded-full' />
                    </div>
                    <div>
                        <p className='mb-3 font-semibold text-gray-600 '>Name: {providerName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllServiceCard.propTypes = {
    service: PropTypes.object,
    idx: PropTypes.number
}

export default AllServiceCard;