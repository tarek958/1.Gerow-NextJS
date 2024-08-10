"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Layout from "@/components/layout/Layout";
import {jwtDecode} from "jwt-decode";

const Settings = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found");
          window.location.href = "/signin";
          setLoading(false);
          return;
        }

        const decoded = jwtDecode(token);
        const userId = decoded.id;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `http://148.113.194.169:5000/api/users/${userId}`,
          config
        );
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const userId = decoded.id;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.put(
          `http://148.113.194.169:5000/api/users/${userId}`,
          user,
          config
        );
        toast.success("L'utilisateur a mis à jour avec succès!");
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Failed to update user");
      }
    }
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="container mt-5">
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    </div>
  );

  return (
    <Layout headerStyle={2} footerStyle={3}>
    <div className="container " style={{marginTop:"10%",marginBottom:"5%"}}>
      <ToastContainer />
      <h1 className="text-center mb-4">Paramètres de profil</h1>
      {user && (
        <div className="card shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-header bg-primary text-white">
            <h2 className="card-title text-center">Modifier le profil</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Prénom:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={user.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Nom de famille:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={user.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Téléphone:</label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  className="form-control"
                  value={user.telephone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Mettre à jour le profil</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default Settings;
