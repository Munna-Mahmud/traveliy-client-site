import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail';

const UsersDetails = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://travel-agen.herokuapp.com/tourdatas')
            .then(result => result.json())
            .then(data => setUsers(data))

    }, [])

    return (
        <div className="container mt-5" >
            <div className="row" style={{marginTop:"5rem"}}>
                <div className="col-md-12">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Avater</th>
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Id</th>
                                {/* <th scope="col">Title</th> */}
                            </tr>
                        </thead>
                        <tbody>
                           {
                               users.map(user => <UserDetail user={user}  key={user._id} ></UserDetail> )
                           }
                           
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default UsersDetails;