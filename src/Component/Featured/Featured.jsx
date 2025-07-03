import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://www.nationalforests.org/assets/images/_1000x1000_fit_center-center_80_none/Mt.-Baker-Snoqualmie-National-Forest_Madalyne-Staab_5132_2025-05-06-171044_nmeq.jpg" alt="" className="featuredImage" />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>



         {/* <div className="featuredItem">
            <img src="https://www.nationalforests.org/assets/images/_1000x1000_fit_center-center_80_none/Mt.-Baker-Snoqualmie-National-Forest_Madalyne-Staab_5132_2025-05-06-171044_nmeq.jpg" alt="" className="featuredImage" />
            <div className="featuredTitle">
                <h1>Karachi</h1>
                <h2>123 properties</h2>
            </div>
        </div> */}


         <div className="featuredItem">
            <img src="https://www.nationalforests.org/assets/images/_1000x1000_fit_center-center_80_none/Mt.-Baker-Snoqualmie-National-Forest_Madalyne-Staab_5132_2025-05-06-171044_nmeq.jpg" alt="" className="featuredImage" />
            <div className="featuredTitle">
                <h1>Lahore</h1>
                <h2>123 properties</h2>
            </div>
        </div>


         <div className="featuredItem">
            <img src="https://www.nationalforests.org/assets/images/_1000x1000_fit_center-center_80_none/Mt.-Baker-Snoqualmie-National-Forest_Madalyne-Staab_5132_2025-05-06-171044_nmeq.jpg" alt="" className="featuredImage" />
            <div className="featuredTitle">
                <h1>Islamabad</h1>
                <h2>523 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured