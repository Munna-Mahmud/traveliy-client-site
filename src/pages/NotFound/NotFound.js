import React from 'react';
import { Card } from 'react-bootstrap';
import error from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div >
            <Card>
                <Card.Img variant="top" src={error} />
            </Card>
            <br />
        </div>
    );
};

export default NotFound;