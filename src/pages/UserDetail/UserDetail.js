import React from 'react';
import AuthProvider from '../AuthProvider/AuthProvider';

const UserDetail = (props) => {


    
    const {tourId, email, _id, userName, img } =props.user

    console.log(props)

    const userDetailsDelete= (id) =>{
        // console.log(id)
        const uri =`https://travel-agen.herokuapp.com/data/${id}`;
        fetch(uri,{
            method: "Delete"
        }).then( res => res.json()).then(data => {
            if( data.deletedCount == 1){
                alert("Success Fully Deleted")
            }
        });
     }
    return (
        <tr>
            <td><img style={{height:"50px", width:"50px", borderRadius:"50%"}} src={img} alt="" /></td>
            <td> {email}</td>
            <td> {userName}</td>
            <td> {_id}</td>
            <td><div className="btn btn-warning">Edit</div></td>
            <td><button className="btn btn-danger text-center" onClick={ ()=> userDetailsDelete(_id)}>Trash</button></td>
            
            
        </tr>
    );
};

export default UserDetail;