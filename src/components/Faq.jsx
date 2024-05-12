
const Faq = () => {
    return (
        <div className="my-14 md:flex justify-center items-center gap-5 p-3">
            <div className="md:w-1/2">
                <div className="mb-5 space-y-3">
                    <h3 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-bold">About <span className="text-[#83B582]">Legal Vantage</span></h3>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Legal Vantage is a premier law firm dedicated to providing exceptional legal services to individuals and businesses alike. With a team of experienced attorneys, we offer a wide range of legal expertise across various practice areas, including corporate law, litigation, intellectual property, employment law, real estate, estate planning, immigration, and family law.
                    </p>
                </div>
                <div>
                    <h3 data-aos="fade-up" data-aos-delay="500" className="text-[#83B582] text-2xl font-bold underline mb-2">Subscribe</h3>
                    <fieldset className="w-60 space-y-1">
                        <div data-aos="fade-up" data-aos-delay="600" className="flex">
                            <input type="email" name="email" id="" placeholder="Email" className="flex flex-1 p-2 border focus:ring-inset border-gray-500 text-black" />
                            <button className="flex items-center font-medium text-white px-3 pointer-events-none bg-[#83B582] cursor-pointer">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-bold my-5">Frequently <span className="text-[#83B582]">Ask Questions</span></h3>
                <div className="join join-vertical w-full">
                    <div data-aos="fade-up" data-aos-delay="300" className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What types of legal cases does Legal Vantage handle?
                        </div>
                        <div className="collapse-content">
                            <p>At Legal Vantage, we pride ourselves on our diverse range of legal expertise, allowing us to handle a wide variety of legal cases across multiple practice areas.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I schedule a consultation with one of your lawyers
                        </div>
                        <div className="collapse-content">
                            <p>Scheduling a consultation with one of our lawyers at Legal Vantage is simple and convenient. You can initiate the process by reaching out to us through our website contact form or by giving us a call directly.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="700" className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What sets Legal Vantage apart from other law firms?
                        </div>
                        <div className="collapse-content">
                            <p>At Legal Vantage, our clients are our top priority. We take the time to listen to their needs, understand their goals, and tailor our legal strategies to achieve the best possible outcome for each individual case.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="900" className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How does Legal Vantage handle client confidentiality and privacy?
                        </div>
                        <div className="collapse-content">
                            <p>Legal Vantage takes client confidentiality and privacy very seriously. We adhere to strict confidentiality protocols to ensure that all client information remains secure and protected.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;