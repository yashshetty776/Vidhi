import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { default as jwt_decode } from 'jwt-decode';
import axios from 'axios';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    // Decode token to get username
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const decoded = jwt_decode(token);
        const username = decoded.sub;

        // Fetch profile using username from token
        axios.get(`http://localhost:8000/users/profile/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.error('Error fetching profile:', error);
        });
    }, [navigate]);

    return (
        <Box 
            sx={{ 
                minHeight: '100vh', 
                backgroundColor: grey[900], 
                color: grey[100], 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: 2
            }}
        >
            <Card 
                sx={{ 
                    maxWidth: 400, 
                    backgroundColor: grey[800], 
                    color: grey[100], 
                    borderRadius: 2, 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)' 
                }}
            >
                <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar 
                        sx={{ 
                            bgcolor: deepPurple[500], 
                            width: 100, 
                            height: 100, 
                            margin: '0 auto', 
                            fontSize: 40 
                        }}
                    >
                        {userData.username?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography variant="h4" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                        {userData.username}
                    </Typography>
                    <Typography variant="body1" sx={{ color: grey[400] }}>
                        {userData.full_name}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        Location: {userData.location}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Profile;