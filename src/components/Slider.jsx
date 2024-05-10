
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
// import 'animate.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {

    return (
        <div className='my-5 relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={
                    { delay: 2000 }
                }
                className="mySwiper "

            >
                <SwiperSlide className='relative'>
                    <img className='object-cover md:max-h-[500px] w-full' src="https://i.ibb.co/VNr1jtf/scott-graham-OQMZw-Nd3-Th-U-unsplash.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover bg-bottom md:max-h-[500px] w-full' src="https://i.ibb.co/s62Zt3y/gavel-with-books-old-wooden-desk.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover md:max-h-[500px] w-full' src="https://i.ibb.co/nsMNJvV/tingey-injury-law-firm-y-Cd-PU73k-GSc-unsplash.jpg" alt="" />

                </SwiperSlide>
            </Swiper>
            <div className='absolute top-0 bottom-0 z-10 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] md:bg-opacity-40 p-5 w-full md:max-h-[500px]'>
                <div className='text-white text-xl md:text-3xl font-bold text-center mt-40 space-y-3'>
                    <h3 className='leading-10'>Empower Your Legal Journey with <span className='text-[#83B582]'>Legal-Vantage</span><br /> Your Trusted Partner in Legal Solutions</h3>
                    <a href="#service">
                    <button className='btn bg-orange-400 hover:bg-[#83B582] duration-300 border-none text-white font-bold mt-4'>Get Services</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;