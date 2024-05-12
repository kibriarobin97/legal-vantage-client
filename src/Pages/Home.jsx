import { Helmet } from "react-helmet-async";
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import MeetLawyer from "../components/MeetLawyer";
import Faq from "../components/Faq";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Helmet>
                <title>Home | Legal-Vantage</title>
            </Helmet>
            <Slider></Slider>
            <PopularService></PopularService>
            <ChooseUs></ChooseUs>
            <MeetLawyer></MeetLawyer>
            <Faq></Faq>
        </div>
    );
};

export default Home;