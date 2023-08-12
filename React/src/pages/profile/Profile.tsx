import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {

    var token: any

    useEffect(() => {
        console.log('ki')
        token = localStorage.getItem('token')
        if (token) {
            getProfile();
        }
    }, [])

    const HttpInstanceImage = axios.create({
        baseURL: 'http://localhost:4000/user',
        headers: {
            'Accept': '*/*',
            'token': localStorage.getItem('token'),
        }
    })

    const getProfile = () => {
        console.log('ki')
        HttpInstanceImage.get('/profile').then((response: any) => {
            console.log(response.data)
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <div>
            <div className="profile-container" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div className="profile-avatar">
                    <img src={'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='} alt="Avatar" />
                </div>
                <div className="profile-info">
                    <div className="profile-field">
                        <h1><span>Tarun</span></h1>
                    </div>
                    <div className="profile-field">
                        <h1><span>Tarun.email.com</span></h1>
                        <button onClick={()=>localStorage.removeItem('token')}>Remove Token</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
