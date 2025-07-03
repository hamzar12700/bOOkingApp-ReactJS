import "./list.css";
import Navbar from "../../component/Navbar/Navbar";
import Headers from "../../Component/Headers/Headers";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";


const List = () => {

  const location = useLocation()

  // console.log(location);
  const [destination , setDestination] = useState(location.state.destination)
   const [date , setDate] = useState(location.state.date)
    const [options , setOptions] = useState(location.state.options)
  
  return (
    <div>
      <Navbar />
      <Headers type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>

             <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
        <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                          date[0].endDate,
                          "MM/dd/yyyy"
                        )}`}</span>

                        <DateRange onChange={item=>setDate(item.selection)} minDate={new Date()} />

                        
            </div>

             <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
