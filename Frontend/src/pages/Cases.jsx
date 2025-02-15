
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "../components/Navbar";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [myCases, setMyCases] = useState([]);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
        console.log("Role:", decodedToken.role);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (role) {
      fetchCases();
    }
  }, [role]);

  const fetchCases = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/cases/list_cases", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const allCases = response.data;
      const user = jwtDecode(token);

      if (role === "lawyer") {
        setCases(allCases.filter((c) => c.status === "pending"));
      } else {
        setCases(allCases);
      }
    } catch (error) {
      console.error("Error fetching cases:", error.response?.data?.detail || error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyCases = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const user = decoded.sub;
      console.log("User:", user);
      const response = await axios.get(`http://localhost:8000/cases/user_cases/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyCases(response.data);
    } catch (error) {
      console.error("Error fetching my cases:", error.response?.data?.detail || error.message);
    }
  };

  const acceptCase = async (caseId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:8000/cases/${caseId}/accept`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCases();
    } catch (error) {
      console.error("Error accepting case:", error.response?.data?.detail || error.message);
    }
  };

  const updateCaseStatus = async (caseId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8000/cases/${caseId}/update_status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchMyCases();
    } catch (error) {
      console.error("Error updating case status:", error.response?.data?.detail || error.message);
    }
  };

  return (
    <div>
      <Navbar/>
      <div>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ marginTop:10 }}>
        {role === "client" ? "My Cases" : "Available Cases"}
      </Typography>

      {role === "lawyer" && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ mb: 2, backgroundColor: "purple" }}
          onClick={() => {
            fetchMyCases(); // Fetch only assigned cases when opening "My Cases"
            setOpen(true);
          }}
        >
          My Cases
        </Button>
      )}

      {role === "client" && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={() => navigate("/create-case")}
        >
          + Add Case
        </Button>
      )}

      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : cases.length > 0 ? (
        cases.map((caseItem) => (
          <Card key={caseItem.id} sx={{ mb: 2, p: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="primary">{caseItem.title}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>{caseItem.description}</Typography>
              <Typography variant="subtitle2" color="textSecondary">Status: {caseItem.status}</Typography>

              {role === "lawyer" && caseItem.status === "pending" && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => acceptCase(caseItem.id)}
                >
                  Take Case
                </Button>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          No cases to be displayed.
        </Typography>
      )}

      {/* My Cases Dialog for Lawyers */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>My Cases</DialogTitle>
        <DialogContent>
          {myCases.length > 0 ? (
            myCases.map((caseItem) => (
              <Card key={caseItem.id} sx={{ mb: 2, p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="primary">{caseItem.title}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>{caseItem.description}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">Status: {caseItem.status}</Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={caseItem.status}
                      onChange={(e) => updateCaseStatus(caseItem.id, e.target.value)}
                    >
                      <MenuItem value="in progress">In Progress</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                      <MenuItem value="closed">Closed</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No cases assigned yet.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Container>
    </div>
    </div>
  );
};

export default Cases;
