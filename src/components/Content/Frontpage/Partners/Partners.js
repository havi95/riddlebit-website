import React from 'react';
import './Partners.css';

const Partners = () => (
    <div id='partners' className='content-wrapper'>
        <div className='content-section content-width-md partners-content'>
            <h1>Partners</h1>
            <div className='partner-cards'>
                <a href='https://work-work.no/'>
                <img className='partner-image'
                    src='https://i.imgur.com/NB71jSt.png'
                    alt='Work-Work logo'
                />
                </a>
            </div>
        </div>
    </div>
);

export default Partners;