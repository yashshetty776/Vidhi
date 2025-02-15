import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic:
      "https://via.placeholder.com/150", // Replace with user's profile pic URL
  };

  const handleEditProfile = () => {
    alert("Edit Profile Clicked!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={user.profilePic}
          alt="Profile Picture"
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {user.email}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditProfile}
            >
              Edit Profile
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
