import Headers from "../../../Component/Headers/Headers";
import Navbar from "../../../component/Navbar/Navbar";
import MailList from "../../../component/MailList/MailList";
import Footer from "../../../component/Footer/Footer";

import "./hotel.css";
import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdCancel } from "react-icons/md";

const Hotel = () => {

  const [slideNumber , setSlideNumber] = useState(0)
  const [open , setOpen] = useState(false)
  let photos = [
    {
      images:
        "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
    },
     {
      images:
        "https://imgs.search.brave.com/_4TZ02SWg-3SpwkAGzgSIxIH9s8vgxwGNWXM58lDDGo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5Lzg1Lzgw/LzM2MF9GXzU3OTg1/ODA4N19UZWtVSndk/c01tQVVJa09xN09v/ZEttc0l2ZjRsSldS/ci5qcGc",
    },
    {
      images:
        "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
    },
    {
      images:
        "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
    },
    {
      images:
        "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
    },
    {
      images:
        "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
    },
  ];

function handleOption(i) {
  setSlideNumber(i)
  setOpen(true)
}


function handleMove(direction) {
  let newSlideNumber ;
  if (direction=== 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
      
  }

  setSlideNumber(newSlideNumber)
}

  return (
    <div>
      <Navbar />
      <Headers type="list" />
      <div className="hotelContainer">
      {open &&  <div className="slider">
        <MdCancel className="close" onClick={()=>setOpen(false)} />
        <GrLinkPrevious className="arrow" onClick={()=>handleMove('l')} />
<div className="sliderWrapper">
  <img src={photos[slideNumber].images} alt="" className="sliderImg" />
</div>
<GrLinkNext className="arrow" onClick={()=>handleMove('r')} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNo">Reserve or</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photos,i) => (
              <div className="hotelImagesWrapper">
                <img onClick={()=>handleOption(i)} src={photos.images} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krabow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krabow ,
                Tower Street Apartment has accomodations with air conditioning
                and free WiFi. The units come with hardwoood floors and feature
                a fully equiped kitchmette with a micwave , a flat-screen Tv,
                and a private bathroom with shower and a hairdryer . A fridge is
                also offered\, as well as an electric tea pot and a coffe
                machine.Popular points of interest near the aprtment include
                Cloth Hall , Main Market Square ans Town Hall Tower. The nearest
                airport is John Paul IT international krab-balance
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect</h1>
              <span>Located in the reak heart of Krabow , this property has an excellent location score of 9.8</span>
              <h2>
                <b>$954</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>

        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
