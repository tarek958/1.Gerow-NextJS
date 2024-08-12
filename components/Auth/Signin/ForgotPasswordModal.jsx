import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";

function ForgotPasswordModal({ show, handleClose }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("L'email est requis.");
      return;
    }

    try {
      const response = await axios.post("http://148.113.194.169:5000/api/users/forgot-password", { email });
      if (response.status === 200) {
        toast.success('Email de réinitialisation du mot de passe envoyé.');
        handleClose(); // Close the modal after success
      }
    } catch (error) {
      console.error('Échec :', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Échec de la réinitialisation du mot de passe. Veuillez réessayer.');
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mot de passe oublié</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Entrez votre email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ForgotPasswordModal;
