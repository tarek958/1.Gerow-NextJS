import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ForgotPasswordModal from './ForgotPasswordModal';

function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!email) {
        toast.error("L'email est requis.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Format d'email invalide.");
        return;
      }

      setCurrentStep(2); // Move to the next step
    }
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 2) {
      if (!password) {
        toast.error("Le mot de passe est requis.");
        return;
      }

      try {
        const response = await axios.post("http://148.113.194.169:5000/api/users/signin", {
          email,
          password,
        });

        if (response.status === 200) {
          toast.success('Connexion réussie');
          localStorage.setItem('token', response.data.token);
          setTimeout(() => {
            router.push('/');
          }, 500);
        }
      } catch (error) {
        console.error('Échec :', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Échec de la connexion. Veuillez réessayer.');
        }
      }
    }
  };

  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' ,paddingTop:'5%'}}>
      <MDBCard style={{ maxWidth: '900px', width: '100%', borderRadius: '15px' }}>
        <MDBRow className="g-0">
          <MDBCol md="5" className="d-none d-md-block">
            <MDBCardImage
              src="/assets/signup.png"
              alt="Professional Image"
              className="rounded-start"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </MDBCol>
          <MDBCol md="7">
            <MDBCardBody className="d-flex flex-column">

              {/* Stepper */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className={`d-flex flex-column align-items-center ${currentStep === 1 ? 'text-primary' : 'text-muted'}`}>
                  <MDBIcon fas icon="envelope" size="2x" />
                  
                  <div className="step-bar mt-2" style={{ width: '50px', height: '5px', backgroundColor: currentStep >= 1 ? '#1266f1' : '#e0e0e0' }}></div>
                </div>
                <div className={`d-flex flex-column align-items-center ${currentStep === 2 ? 'text-primary' : 'text-muted'}`}>
                  <MDBIcon fas icon="lock" size="2x" />
                  
                  <div className="step-bar mt-2" style={{ width: '50px', height: '5px', backgroundColor: currentStep === 2 ? '#1266f1' : '#e0e0e0' }}></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Adresse email'
                    id='formControlLg'
                    type='email'
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                )}

                {currentStep === 2 && (
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Mot de passe'
                    id='formControlLg'
                    type='password'
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}

                {error && <div className="text-danger mb-3">{error}</div>}

                <div >
                  {currentStep === 1 && (
                    <div className="d-flex justify-content-end">
                    <button className="btn btn-primary w-20" type="button" onClick={handleNextStep}>
                      Suivant
                    </button>
                  </div>
                  
                  )}
                  {currentStep === 2 && (
                    <div className='d-flex flex-column flex-md-row justify-content-between mb-4'>
                      <div>
                        <button className="btn btn-secondary w-100 mb-2 mb-md-0" type="button" onClick={handlePreviousStep}>
                          Précédent
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-primary w-100" type="submit">Se connecter</button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
              <div className="text-start mt-auto" style={{marginBottom:'5%'}}>
                        <a href="#" onClick={handleForgotPasswordClick}>Mot de passe oublié ?</a>
                      </div>
              <div className="text-center mt-auto">
                <p>Vous n'avez pas de compte ? <Link href="/signup">S'inscrire</Link></p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <ForgotPasswordModal show={showForgotPasswordModal} handleClose={handleCloseForgotPasswordModal} />
      <ToastContainer />
    </MDBContainer>
  );
}

export default Signin;
