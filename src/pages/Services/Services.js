import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://travel-agen.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setServices(data));
            
    }, [])

    return (
        <div id="services">
            <p className="text-center mt-5 text-danger"> _______________TRAVEL OFFER & DISCOUNT</p>
            <h1 className=" fw-bold mt-5" style={{color:"darkblue"}}>SPECIAL TRAVEL SERVICES</h1>
            <p className="text-center p-5 ">Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis  aliquid blandit, <br />  blandit torquent,  odit placeat. Adipiscing repudiandae eius cursus? <br /> Nostrum magnis maxime curae placeat.</p>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;