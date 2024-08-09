import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'; 
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, telephone, password } = formData;

    // Basic client-side validation
    if (!firstName || !lastName || !email || !telephone || !password) {
      toast.error('Tous les champs sont requis.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Format d\'email invalide.');
      return;
    }

    try {
      const response = await axios.post('http://148.113.194.169:5000/api/users/signup', formData);
      console.log(response);
      
      if (response.status === 201) { 
        toast.success('Utilisateur créé avec succès !');
        setTimeout(() => {
          router.push('/signin');
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message); // Show backend error message
      } else {
        toast.error('Échec de l’inscription. Veuillez réessayer.');
      }
    }
  };

  return (
    <MDBContainer fluid className="p-3 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol col='8' md='6' className='d-flex justify-content-center'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Image de téléphone" />
        </MDBCol>

        <MDBCol col='2' md='4'>
          <MDBCol col='2' md='40' className="p-3 my-3 d-flex justify-content-center align-items-center">
            <img src="https://www.atlantis-conseil.fr/j9Ch0H/uploads/2020/05/AtlantisConseil-Logo-V2-170-1.png" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
          </MDBCol>

          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Prénom'
                  id='formControlLg'
                  type='text'
                  size="lg"
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Nom de famille'
                  id='formControlLg'
                  type='text'
                  size="lg"
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              wrapperClass='mb-4'
              label='Adresse email'
              id='formControlLg'
              type='email'
              size="lg"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Numéro de téléphone'
              id='formControlLg'
              type='text'
              size="lg"
              name='telephone'
              value={formData.telephone}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Mot de passe'
              id='formControlLg'
              type='password'
              size="lg"
              name='password'
              value={formData.password}
              onChange={handleChange}
            />

            {error && <div className="text-danger mb-3">{error}</div>}

            <button className="btn btn-primary mb-4 w-20" type="submit">S'inscrire</button>
            <div className="text-center mt-4">
              <p>Déjà un compte ? <Link href="/signin">Se connecter</Link></p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <ToastContainer />
    </MDBContainer>
  );
}

export default Signup;
