import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
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
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName) {
        toast.error('Prénom et nom de famille sont requis.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.email || !formData.telephone) {
        toast.error('Email et numéro de téléphone sont requis.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Format d\'email invalide.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep === 3) {
      if (!formData.password) {
        toast.error('Le mot de passe est requis.');
        return;
      }

      try {
        const response = await axios.post('http://148.113.194.169:5000/api/users/signup', formData);
        if (response.status === 201) {
          toast.success('Utilisateur créé avec succès !');
          setTimeout(() => {
            router.push('/signin');
          }, 1000);
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Échec de l’inscription. Veuillez réessayer.');
        }
      }
    }
  };

  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh',marginTop:'5%' }}>
      <MDBCard style={{ maxWidth: '900px', width: '100%', borderRadius: '15px' }}>
        <MDBRow className="g-0">
          <MDBCol md="5" className="d-none d-md-block">
            <MDBCardImage
              src="/assets/signup.png"
              alt="Sign Up Image"
              className="rounded-start"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </MDBCol>
          <MDBCol md="7">
            <MDBCardBody className="d-flex flex-column">

              {/* Stepper */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className={`d-flex flex-column align-items-center ${currentStep === 1 ? 'text-primary' : 'text-muted'}`}>
                  <MDBIcon fas icon="user" size="2x" />
                  <div className="step-bar mt-2" style={{ width: '50px', height: '5px', backgroundColor: currentStep >= 1 ? '#1266f1' : '#e0e0e0' }}></div>
                </div>
                <div className={`d-flex flex-column align-items-center ${currentStep === 2 ? 'text-primary' : 'text-muted'}`}>
                  <MDBIcon fas icon="envelope" size="2x" />
                  <div className="step-bar mt-2" style={{ width: '50px', height: '5px', backgroundColor: currentStep >= 2 ? '#1266f1' : '#e0e0e0' }}></div>
                </div>
                <div className={`d-flex flex-column align-items-center ${currentStep === 3 ? 'text-primary' : 'text-muted'}`}>
                  <MDBIcon fas icon="lock" size="2x" />
                  <div className="step-bar mt-2" style={{ width: '50px', height: '5px', backgroundColor: currentStep === 3 ? '#1266f1' : '#e0e0e0' }}></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                <MDBRow>
                    <MDBCol md='12'>
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
                    <MDBCol md='12'>
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
                )}

                {currentStep === 2 && (
                  <>
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
                  </>
                )}

                {currentStep === 3 && (
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
                )}

                {error && <div className="text-danger mb-3">{error}</div>}

                <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                  {currentStep > 1 && (
                    <button className="btn btn-secondary w-20 mb-2 mb-md-0" type="button" onClick={handlePreviousStep}>
                      Précédent
                    </button>
                  )}
                  {currentStep < 3 && (
                    <button className="btn btn-primary w-20" type="button" onClick={handleNextStep}>
                      Suivant
                    </button>
                  )}
                  {currentStep === 3 && (
                    <button className="btn btn-primary w-20" type="submit">S'inscrire</button>
                  )}
                </div>
              </form>

              <div className="text-center mt-auto">
                <p>Déjà un compte ? <Link href="/signin">Se connecter</Link></p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <ToastContainer />
    </MDBContainer>
  );
}

export default Signup;
