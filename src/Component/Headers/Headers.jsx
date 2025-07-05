import { MdFlight } from "react-icons/md";
import "./headers.css";
import { FaBed, FaCar } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns"; 
import { useNavigate } from "react-router-dom";

const Headers = ({type}) => {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleSearch() {
navigate('/hotel' , {state:{destination , date , options}})
  }

  const handler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? prev[name] + 1 : prev[name] > 1 ? prev[name] - 1 : 1, 
      };
    });
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className={type === "list" ? 'headerContainer listMode' : "headerContainer" }>
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stay</span>
          </div>

          <div className="headerListItem">
            <MdFlight />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <MdFlight />
            <span>Car rent</span>
          </div>

          <div className="headerListItem">
            <MdFlight />
            <span>Attraction</span>
          </div>

          <div className="headerListItem">
            <FaCar />
            <span>Airport taxis</span>
          </div>
        </div>

      {type !== 'list' &&

<>
        <h1 className="headerTitle">A lifetime of discounts ? It's Genius</h1>
        <p className="headerDesc">
          Get reward for your travel - unlock of 10% or with a free lamaBooking
          account{" "}
        </p>

        <button className="headerBtn">Sign / Register</button>

        <div className="searchParent">
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="headerIcon" />
              <input
              onChange={e=>setDestination(e.target.value)}
                type="text"
                placeholder="where are you going"
                className="headerSearchInput"
              />
            </div>
          </div>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <SlCalender className="headerIcon" />
              <div
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </div>
              {openDate && (
                <DateRange
                minDate={new Date()}
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
          </div>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <IoIosMan className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
                {`${options.adult} adult . ${options.children} children . ${options.room} room `}
                {openOptions && <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionsCounterButton"
                        onClick={() => handler("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionsCounterButton"
                        onClick={() => handler("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button   


                        disabled={options.children <= 0}

                        className="optionsCounterButton"
                        onClick={() => handler("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionsCounterButton"
                        onClick={() => handler("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        className="optionsCounterButton"
                        onClick={() => handler("room", "d")}
                        disabled={options.room <= 1}
                        
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionsCounterButton"
                        onClick={() => handler("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
              }

              </span>
            </div>
          </div>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch} >Search </button>
            </div>
          </div>
        </div>
              </>
    } 
      </div>
    </div>
  );
};

export default Headers;
