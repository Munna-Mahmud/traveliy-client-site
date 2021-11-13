import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth()
    const { servicesId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);

    const handleTourBooking = (id) => {


        const tourId = id;
        const userName = foundDetails?.name;
        const email = user?.email;
        const img = foundDetails?.img;
        const Duration = foundDetails?.Duration;

        const tourDetails = { tourId, userName, email, img, Duration }
    

        fetch('https://travel-agen.herokuapp.com/datas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')

                }
            })
    }

    useEffect(() => {
        fetch('https://travel-agen.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, [servicesId])
    console.log(servicesDetails)

    const foundDetails = servicesDetails.find(service => service.id == servicesId)
    console.log(foundDetails?._id)

    return (
        <div className="container d-flex justify-content-center " style={{ marginTop: "6rem" }}>
            <Card style={{ width: '30rem' }} className="border-0">
                <Card.Img variant="top" style={{}} src={foundDetails?.img} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{foundDetails?.name}</Card.Title>
                    <Card.Text>
                        <h4>Book Now: {foundDetails?.price}</h4>
                        {foundDetails?.Details}
                    </Card.Text>
                    <button className="btn btn-primary" onClick={() => handleTourBooking(foundDetails?._id)}>Booking</button>

                </Card.Body>
            </Card>

        </div >
    );
};

export default Booking;