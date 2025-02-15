import React from 'react';
import { Container, Box, Typography, Paper, CardMedia, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Home = () => {
    // Hardcoded news data with images
    const news = [
        {
            title: 'Legal Rights Awareness',
            description: 'Learn about your legal rights and how to protect them.',
            imageUrl: 'https://static-bestcolleges.tosshub.com/2024/News/XowH0khykHQkMndHLS1uHYx6CkRNfYBkcBG5R0XT.jpg'
        },
        {
            title: 'Court Proceedings Simplified',
            description: 'Understand the process of court hearings and legal procedures.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2upBu-ne_g4cVybU5M-LnnkF48q3oSrxCQA&s'
        },
        {
            title: 'Empowering Justice',
            description: 'Providing equal access to justice for all communities.',
            imageUrl: 'data:image/png;base64,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'
        }
    ];

    return (
        <Container sx={{ minHeight: 'calc(100vh - 64px - 64px)', pt: 2 }}> 
            {/* Hero Section */}
            <Box 
                sx={{ 
                    textAlign: 'center', 
                    mt: 10, 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1500&q=80)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    color: '#333', 
                    py: 20, // Increased for more prominent display
                    borderRadius: 2 
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Legal Aid Platform
                </Typography>
                <Typography variant="h6" color="inherit" gutterBottom>
                    Empowering Justice for All
                </Typography>
            </Box>

            {/* News Carousel with Hardcoded Images */}
            <Box sx={{ mt: 5, mx: 'auto', width: '80%' }}> {/* Reduced width for better focus */}
                <Carousel 
                    navButtonsAlwaysVisible 
                    autoPlay={false} 
                    indicators={false} 
                    NextIcon={<ArrowForwardIos />} 
                    PrevIcon={<ArrowBackIos />}
                >
                    {news.map((item, index) => (
                        <Paper 
                            key={index} 
                            sx={{ 
                                textAlign: 'center', 
                                background: '#f5f5f5', 
                                borderRadius: 2,
                                overflow: 'hidden'
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.imageUrl}
                                alt={item.title}
                                sx={{ 
                                    height: '350px',  // Reduced height for compact look
                                    objectFit: 'fill', 
                                    width: '100%' 
                                }}
                            />
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default Home;