import React, { useEffect, useState } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function CheckoutItem() {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    const viewCarts = async () => {
        const response = await axios.get('http://localhost:5000/carts');
        setUsers(response.data);
    }

    useEffect(() => {
        viewCarts();
    }, []);


    const solvedData = async(event, solveId) => {
    
        await axios.put(`http://localhost:5000/carts/solved/${solveId}`, {});
        const response = await axios.get('http://localhost:5000/carts');
        setUsers(response.data);
    }

    return (
        <div className='container mt-5'>
            <h1 className='is-size-3 has-text-centered'>Welcome Back Admin {name}</h1>
            <table className='table is-striped is-fullwidth has-text-left'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID Pembeli</th>
                        <th>Barang</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        if (user.status === 'unsolved') {
                            return <>
                                <tr key={user.id}>
                                    <td>{user.buyer_name}</td>
                                    <td>{user.buyer_id}</td>
                                    <td>Kaca: {user.kaca}<br/>Skincare: {user.skincare}<br/>Plastik: {user.plastic}</td>
                                    <td><button className='button is-danger is-light' onClick={(e) => solvedData(e, user.id)}>Arrived</button></td>
                                </tr>
                            </>
                        }

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CheckoutItem;