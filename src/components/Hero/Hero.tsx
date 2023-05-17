import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
import wonderCar from '../../assets/lotties/wonder-car.json';
import CloudinaryUploadWidget from "../../utils/CloudinaryWidget.js";
import gas from '../../assets/images/gas.jpeg';

export default function Hero() {
    return (
        <>
            <div className='container herocontainer'>
                <div className='row'>
                    <section className='col herotext'>
                        <h2>Plan your trip now</h2>
                        <h1>Save&nbsp; 
                       <span className='herotextmoney'>money&nbsp;</span>
                            and the&nbsp;
                            <span className='herotextenvironment'>environment&nbsp;</span>
                            with our car rental</h1>
                        <h3>Rent the car of your dreams at an unbeatable price, unlimited miles, flexible pick-up options and more.</h3>
                        <div className='herobuttongroup'>
                            <button type="button" className="btn btn-success bookridebutton">Book a Ride</button>
                            <button type="button" className="btn btn-secondary learnmorebutton">Learn More</button>
                        </div>

                    </section>
                </div>
                <div className='container'>
                    <div className='row'>
                        <section className='heroimagesection'>
                            <Lottie animationData={wonderCar}
                                loop={true}/> {/* <img src={gas}></img> */}
                            {/* <CloudinaryUploadWidget /> */} </section>
                    </div>
                </div>
            </div>
        </>
    )
}
