import React from 'react'
import './hero.css'

export default function Hero() {
    return (
        <>
        <div className='herocontainer'>
            <section className='herotext'>
            <h2>Plan your trip now</h2>
            <h1>Save <d className='herotextmoney'>money</d> and the <d className='herotextenvironment'>environment</d> with our car rental</h1>
            <h3>Rent the car of your dreams at an unbeatable price, unlimited miles, flexible pick-up options and more.</h3>
            <div className='herobuttongroup'>
            <button type="button" className="btn btn-success bookridebutton">Book a Ride</button>
            <button type="button" className="btn btn-secondary">Learn More</button>
            </div>
            </section>

            <section className='heroimagesection'>
                <img className='heroimage' src='./hero.jpeg'></img>
            </section>
        </div>
        </>
    )
}
