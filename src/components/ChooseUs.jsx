import success from "../assets/success.png";
import trust from "../assets/trust.png";
import lawyer from "../assets/lawyer.png";
import badge from "../assets/badge.png";

const ChooseUs = () => {
    return (
        <div className="my-14">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KhTJdpR/krakenimages-376-KN-ISpl-E-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full flex-col md:flex-col lg:flex-row flex justify-center items-center gap-5 text-neutral-content">
                    <div className="w-full lg:w-1/2 p-2 text-center lg:text-left">
                        <h1 data-aos="fade-up" className="text-3xl font-bold mb-3">Why Client Choose Us !</h1>
                        <p data-aos="fade-up" data-aos-delay="300" className="">At Legal Vantage, we pride ourselves on being the preferred choice for individuals and businesses seeking exceptional legal services. Our unwavering commitment to client satisfaction, combined with our expertise, integrity, and personalized approach, sets us apart in the legal industry.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 w-full lg:w-1/2 p-2">
                        <div data-aos="fade-down-right" data-aos-duration="1000" className="flex justify-center items-center gap-2">
                            <div className="border-2 p-4 flex items-center justify-center"><img src={success} alt="" className="w-16 h-16 bg-orange-400 p-2" /></div>
                            <div>
                                <h3 className="font-bold text-xl">89%</h3>
                                <p>SUCCESSFUL CASE</p>
                            </div>
                        </div>
                        <div data-aos="fade-down-left" data-aos-duration="1000" className="flex justify-center items-center gap-2">
                            <div className="border-2 p-4 flex items-center justify-center"><img src={trust} alt="" className="w-16 h-16 bg-orange-400 p-2" /></div>
                            <div>
                                <h3 className="font-bold text-xl">560</h3>
                                <p>TRUSTED CLIENTS</p>
                            </div>
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="1000" className="flex justify-center items-center gap-2 lg:mr-2">
                            <div className="border-2 p-4 flex items-center justify-center"><img src={lawyer} alt="" className="w-16 h-16 bg-orange-400 p-2" /></div>
                            <div>
                                <h3 className="font-bold text-xl">120</h3>
                                <p>EXPERT LAWYERS</p>
                            </div>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="flex justify-center items-center gap-2 lg:mr-[18px]">
                            <div className="border-2 p-4 flex items-center justify-center"><img src={badge} alt="" className="w-16 h-16 bg-orange-400 p-2" /></div>
                            <div>
                                <h3 className="font-bold text-xl">150</h3>
                                <p>GET'S AWARDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;