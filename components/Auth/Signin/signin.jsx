import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'; 
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      toast.error("L'email et le mot de passe sont requis.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Format d'email invalide.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Connexion réussie');
        localStorage.setItem('token', response.data.token); // Save token to localStorage
        setTimeout(() => {
          router.push('/');
        }, 500);
      }
    } catch (error) {
      console.error('Échec :', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message); // Show backend error message
      } else {
        toast.error('Échec de la connexion. Veuillez réessayer.');
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
            <MDBInput
              wrapperClass='mb-4'
              label='Adresse email'
              id='formControlLg'
              type='email'
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Mot de passe'
              id='formControlLg'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="text-danger mb-3">{error}</div>}

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
              <a href="!#">Mot de passe oublié ?</a>
            </div>

            <button className="btn btn-primary mb-4 w-20" type="submit">Se connecter</button>
            <div className="text-center mt-4">
              <p>Vous n'avez pas de compte ? <Link href="/signup">S'inscrire</Link></p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <ToastContainer />
    </MDBContainer>
  );
}

export default Signin;
