import './sponsors.css';
import React from 'react';
import alliance_logo from './media/alliance_robotics_logo.png';
import hydrotech_logo from './media/hydrotech_logo.png';
import belcan_logo from './media/belcan_logo.svg';
import eightyacres_logo from './media/eightyacres_logo.png';
import polezero_logo from './media/polezero_logo.png';
import yaskawa_logo from './media/yaskawa_logo.png';
import pg_logo from './media/pg_logo.png';




function Sponsors() {
    return (
    <>
        <head>
        </head>
        <body className = 'sponsors-body'>
            <div className='sponsors-section' id='container1'>
                <p className='title-text'>
                Respawn Robotics Sponsors
                </p>
            </div>
            <div className='sponsors-section' id='container2'>
                <h2 className='why-sponsor'>
                Why Sponsor?
                </h2>
                <p className='smaller-text'>
                Sponsoring the team helps us change the lives of our students. Your money will go toward operating costs, competition entry fees, 
                travel costs, and much more.
                </p>
            </div>
            <div className='sponsors-section' id='container1'>
                <h2 className='larger-text'>
                    Diamond ($20,000+)
                </h2>
            </div>
            <div className='sponsors-section' id='container2'>

            </div>
            <div className ='sponsors-section' id='container1'>
                <h2 className='larger-text'>
                    Platinum ($10,000+)
                </h2>
            </div>
            <div className='sponsors-section' id='container2'>
                <img src={hydrotech_logo} alt='Hydrotech' id='hydrotech'></img>
            </div>
            <div className='sponsors-section' id='container1'>
                <h2 className='larger-text'>
                    Gold ($5000+)
                </h2>
            </div>
            <div className='sponsors-section' id='container2'>
                <div id="logoContainer">
                    <img src={alliance_logo} alt="Alliance Robotics" id='logo'></img>
                    <img src={polezero_logo} alt="Pole Zero" id='logo'></img>
                    <img src={belcan_logo} alt="Belcan Engineering" id='logo'></img>
                </div>

            </div>
            <div className='sponsors-section' id='container1'>
                <h2 className='larger-text'>
                    Silver ($2500+)
                </h2>
            </div>
            <div className='sponsors-section' id='container2'>
            </div>
            <div className='sponsors-section' id='container1'>
                <h2 className='larger-text'>
                    Bronze (Any Amount)
                </h2>
            </div>
            <div className='sponsors-section' id='container2'>
                <div id="logoContainer">
                    <img src={pg_logo} alt='P&G CORE' id='logo'></img>
                    <img src={yaskawa_logo} alt="Yaskawa" id='logo'></img>
                    <img src={eightyacres_logo} alt="80 Acres Farms" id='logo'></img>
                </div>
            </div>
        </body>
    </>
  );
}

export default Sponsors;