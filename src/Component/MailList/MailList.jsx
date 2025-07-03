import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <div className="mailHeading">
          <h1 >
            Save time , save money!
        </h1>
        <h3>
            sign up and we'll send the best deals to you
        </h3>
      </div>
        <div className="mailInput">
            <input type="email" placeholder='your email' required />
            <button>subscribe</button>
        </div>

        <div className="checkBox">
<input type="checkbox" />
<p>Send me a link to get the free Booking.com app</p>
        </div>
    </div>
  )
}

export default MailList