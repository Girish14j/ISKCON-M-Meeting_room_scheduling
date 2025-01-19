import React from 'react'
import './Summary.css'
import {X,PinIcon,TimerIcon,Ticket,BadgeAlert,CalendarDays} from 'lucide-react'

const Summary = () => {
  return (
    <div className='godzilla'>
      <div className='info'>
        <div>
        <p className='step'>
            Step 3 of 3
        </p>
        <h2 className='indicate'>
            Finalize your Booking
        </h2>
        </div>
        <div className='cross'>
            <button className="icon-button">
                        <X />
            </button>
        </div>
        </div>
        <div>
        <div className='mini-godzilla'>
        <section className='summary'>
            <article>
            <div className='summary-wrap'>
                <figure>
                    <img className='hero' src="https://www.iskconpune.com/wp-content/uploads/2023/01/chandan-yatra1-1200x1200.jpg" alt="" />
                </figure>
                <div className='summary-view'>
                    <h2 className='header'>
                        Meeting Hall 101
                    </h2>
                    <p className='icon-text'>
                        <PinIcon /> Ground Floor, Building A
                    </p>
                    <br />
                    <p className='icon-text'>
                        <CalendarDays /> 16th Jan Sunday 
                    </p>
                    <br />
                    <p className='icon-text'>
                        <TimerIcon /> 3:00pm to 4:30pm 
                    </p>
                    <br />
                    <p className='icon-text'>
                        <Ticket /> Scriptural Readings
                    </p>
                    <br />
                    <hr />
                    <p className='icon-text'>
                        <BadgeAlert /> Terms and Conditions
                    </p>
                    <button className='fwd'>
                        <a href='#' className='continue'>
                            Continue
                            <span className='sr-only'>
                                about this is some title
                            </span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg> */}
                        </a>
                    </button>
                </div>
            </div>
          </article>
        </section>
       </div>
      </div>
    </div>
  )
}

export default Summary
