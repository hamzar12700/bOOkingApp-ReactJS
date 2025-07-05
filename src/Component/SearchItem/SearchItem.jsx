import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj7ZYzTQC6B6aZQ3jpWyolvPjjD21n2HBXQ&s" className='siItem' alt="" />

    <div className="siDesc">
        <h1 className='siTitle'>Tower Street Apartment</h1>
        <span className='siDistance' >500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siiSubtitle">Studio Apartment with Air conditionig</span>
        <span className="siFeatures">Entire studio + 1 , so locj in this great price today</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later , so lock in this great price today</span>
        </div>    
    <div className="siDetail">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailText">
            <span className="siPrice">$123</span>
            <span className="siTextOp">Include taxes and fee</span>
            <button className='siCheckButton'>see availablity</button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem