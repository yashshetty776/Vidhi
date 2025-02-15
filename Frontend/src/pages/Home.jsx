// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Grid, Paper, Avatar, AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Carousel from 'react-material-ui-carousel';

const Home = () => {
    const [message, setMessage] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:8000/home', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMessage(response.data.message);
                setNews(response.data.news || []);
            } catch (error) {
                console.error('Error fetching homepage data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            

            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Bandhan
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    {message ? message : 'Fetching your personalized message...'}
                </Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Carousel>
                    {news.map((item, index) => (
                        <Paper key={index} sx={{ p: 3, textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {item.description}
                            </Typography>
                        </Paper>
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default Home;