// src/components/NewsFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Button, Container, Grid } from '@mui/material';
import Navbar from './Navbar';

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const token = localStorage.getItem('token');  // Get token from localStorage
                const response = await axios.get('http://127.0.0.1:8000/news/scrape', {
                    headers: {
                        Authorization: `Bearer ${token} ` // Attach token in Authorization header
                    }
                });
                setNews(response.data.news);  // Access the news array inside the response data
            } catch (error) {
                console.error(error);
                setError('Failed to fetch news');
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
        <Container sx={{ mt: 10 }}>  {/* Adjusted marginTop to 10 */}
            <Typography variant="h3" gutterBottom sx={{ marginTop: 5 }}>  {/* Adjusted marginTop to 5 */}
                News Feed
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {news.length > 0 ? (
                <Grid container spacing={4}>
                    {news.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                sx={{ 
                                    height: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    backgroundColor: '#f5f5f5',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    borderRadius: '15px'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {item.headline}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        href={item.article_link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Container>
        </div>
        </div>
    );
};

export default NewsFeed;