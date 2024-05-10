import PopularService from "../components/PopularService";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-264px)]">
            <Slider></Slider>
            <PopularService></PopularService>
        </div>
    );
};

export default Home;