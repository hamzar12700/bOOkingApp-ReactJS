import "./home.css";
import Navbar from "../../component/Navbar/Navbar";
import Headers from "../../Component/Headers/Headers";
import Featured from "../../Component/Featured/Featured";
import PropertyList from "../../Component/property_List/PropertyList";
import FeaturedProperties from "../../Component/featuredProperties/FeaturedProperties";
import MailList from "../../Component/MailList/MailList";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guest love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
