import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import law1 from "../assets/lawyer1.png";
import law2 from "../assets/lawyer2.jpg";
import law3 from "../assets/lawyer3.jpg";
import law4 from "../assets/lawyer4.jpg";



const MeetLawyer = () => {
    return (
        <div className="my-12">
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">Meet Our Lawyers</h3>
                <p>At Legal Vantage, our team of dedicated lawyers is at the heart of everything we do.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-44 h-44 rounded-full"><img src={law2} alt="" className="h-44 w-44 object-cover rounded-full" /></div>
                    <h3 className="text-2xl font-bold mt-2">Henry Miller</h3>
                    <p className="text-gray-500 font-medium">Criminal Lawyer</p>
                    <div className="flex items-center gap-2 mt-2">
                        <p className=""><FaSquareFacebook className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaTwitterSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaInstagramSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-44 h-44 rounded-full"><img src={law1} alt="" className="h-44 w-44 object-cover rounded-full" /></div>
                    <h3 className="text-2xl font-bold mt-2"> Loretta Lynch</h3>
                    <p className="text-gray-500 font-medium">Family Lawyer</p>
                    <div className="flex items-center gap-2 mt-2">
                        <p className=""><FaSquareFacebook className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaTwitterSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaInstagramSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-44 h-44 rounded-full"><img src={law3} alt="" className="h-44 w-44 object-cover rounded-full" /></div>
                    <h3 className="text-2xl font-bold mt-2">Jacky Brown</h3>
                    <p className="text-gray-500 font-medium">Consumer Lawyer</p>
                    <div className="flex items-center gap-2 mt-2">
                        <p className=""><FaSquareFacebook className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaTwitterSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaInstagramSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-44 h-44 rounded-full"><img src={law4} alt="" className="h-44 w-44 object-cover rounded-full" /></div>
                    <h3 className="text-2xl font-bold mt-2">Ryan Anderson</h3>
                    <p className="text-gray-500 font-medium">Civil Lawyer</p>
                    <div className="flex items-center gap-2 mt-2">
                        <p className=""><FaSquareFacebook className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaTwitterSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                        <p><FaInstagramSquare className="text-orange-400 text-3xl p-1 bg-orange-500 bg-opacity-30 rounded-md" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetLawyer;