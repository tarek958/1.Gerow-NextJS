import React, { useEffect,useState, useRef } from 'react';
import axios from 'axios';
import StepWizard from 'react-step-wizard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";




export default function Contact() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState('');
  const [errors, setErrors] = useState({});
  const wizardRef = useRef(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [fileError, setFileError] = useState('');
  const generatedFilename ="";
  const validateFile = (file) => {
    if (!file) {
      toast.error('Veuillez sélectionner un fichier PDF.');
      setIsFileValid(false);
      return false;
    }
    if (file.type !== 'application/pdf') {
      toast.error('Le fichier doit être au format PDF.');
      setIsFileValid(false);
      return false;
    }
    setFileError('');
    setIsFileValid(true); 
    return true;
  };
 
  const handleFileChangeWithValidation = (event) => {
    const file = event.target.files[0];
    if (validateFile(file)) {
      handleFileChange(event);
      handleFileChangeUpload(event);
    }else {
      console.log("nott Trueee")
      setIsFileValid(false);
    }
  };


  const validateFields = () => {
    const newErrors = {};

    if (!user?.title) newErrors.title = "Veuillez sélectionner une civilité.";
    if (!user?.lastName) newErrors.lastName = "Veuillez entrer un nom.";
    if (!user?.firstName) newErrors.firstName = "Veuillez entrer un prénom.";
    if (!user?.telephone) newErrors.phone = "Veuillez entrer un numéro de portable.";
    if (!user?.email) newErrors.email = "Veuillez entrer une adresse e-mail.";

 
    Object.values(newErrors).forEach((error) => {
      toast.error(error);
    });

   
    return Object.keys(newErrors).length === 0;
  };


  const handleNextStep = () => {
    console.log("Nott passsedvalidationnn")
    if (validateFields()) {
      console.log("passsedvalidationnn")
      wizardRef.current.nextStep();
    }
  };
  const company = localStorage.getItem('selectedCompany');
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
       

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
        const userData = response.data;
        setUser(userData);
        setFormData((prevFormData) => ({
          ...prevFormData,
          lastName: userData.lastName,
          firstName: userData.firstName,
          phone: userData.telephone,
          email: userData.email,
        }));
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
  
  useEffect(() => {

    fetchUserData();
  }, []);

  
  const [formData, setFormData] = useState({
    title: '',
    lastName: '',
    firstName: '',
    filename: generatedFilename, 
    phone: '',
    email: '',
    comments: '',
    company: company,
    cvUpload: null,
    education: [{ degree: '', institution: '', year: '' }],
    experience: [{ jobTitle: '', company: '', duration: '' }],
  });
  
  const generateFilename = (file) => {
    const timestamp = Date.now(); 
    const fileExtension = file.name.split('.').pop(); 
    const generatedFilename = `${timestamp}.${fileExtension}`; 
    return generatedFilename;
  };

  const uploadPdf = async (file, generatedFilename) => {
    const formData = new FormData();
    formData.append('cvUpload', file);
    formData.append('filename', generatedFilename);

    try {
      const response = await fetch('http://148.113.194.169:4000/upload_cv', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = generatedFilename; 
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleInputChangeText = (e) => {
    
    if (user) {
      const updatedUser = {
        ...user,
        [e.target.name]: e.target.value,
      };
     
      setUser(updatedUser);
    }
  };
  
  const handleFileChangeUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const generatedFilename = generateFilename(selectedFile);
      console.log(generateFilename)
      setFile(selectedFile);
      setFormData((prevFormData) => ({
        ...prevFormData,
        filename: generatedFilename, 
      }));
      uploadPdf(selectedFile, generatedFilename);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const generatedFilename = generateFilename(selectedFile);
      setFile(selectedFile);
      setFormData((prevFormData) => ({
        ...prevFormData,
        cvUpload: selectedFile,
        filename: generatedFilename, 
      }));
      uploadPdf(selectedFile, generatedFilename);
    }
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setFormData({ ...formData, experience: updatedExperience });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { degree: '', institution: '', year: '' }],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { jobTitle: '', company: '', duration: '' }],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'cvUpload') {
        if (formData.cvUpload) {
          data.append(key, formData.cvUpload);
        }
      } else if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://148.113.194.169:5000/api/files/upload', {
        method: 'POST',
        body: data,
        
      });

      const result = await response.json();
      toast.success(result.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    }
  };

  return (
    <section className="contact-area contact-bg" data-background="/assets/img/bg/contact_bg.jpg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="contact-content">
              <div className="section-title mb-30 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">CONTACT</span>
                <h2 className="title tg-element-title">CANDIDATURE SPONTANÉE</h2>
              </div>
              <p>Vous êtes en recherche d’emploi et souhaitez trouver le job de vos rêves avec l’accompagnement d’experts des ressources humaines ? Envoyez-nous votre CV dès aujourd’hui ! Tous les CV sont lus et analysés attentivement.</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
              <StepWizard ref={wizardRef}>
                  <Step1
                    handleInputChange={handleInputChange}
                    handleInputChangeText={handleInputChangeText}
                    handleNextStep={handleNextStep}
                    user={user}
                  />
                  <Step2
                    education={formData.education}
                    handleEducationChange={handleEducationChange}
                    addEducation={addEducation}
                
                  />
                  <Step3
                    experience={formData.experience}
                    handleExperienceChange={handleExperienceChange}
                    addExperience={addExperience}
                  
                  />
                  <Step4 handleFileChange={handleFileChange}
                   handleFileChangeUpload={handleFileChangeUpload}
                   handleFileChangeWithValidation={handleFileChangeWithValidation}
                   isFileValid={isFileValid}
                   />
                </StepWizard>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-shape">
        <img src="/assets/img/images/contact_shape.png" alt="" />
      </div>
      
    </section>
  );
}

const Step1 = ({ handleInputChange, handleNextStep, errors = {}, user, handleInputChangeText }) => {
  return (
    <div>
      <h3>Étape 1: Informations personnelles</h3>
      <div className="form-grp">
        <label htmlFor="titleSelect">Civilité</label>
        <select
          id="titleSelect"
          className="form-select"
          name="title"
          onChange={(event) => {
            handleInputChangeText(event);
            handleInputChange(event);
           
          }}
         
          value={user?.title || ''}
          
        >
          <option value="">Sélectionnez...</option>
          <option value="Mme">Mme</option>
          <option value="M.">M.</option>
        </select>
     
      </div>
      <div className="form-grp">
        <label htmlFor="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          className="form-select"
          name="lastName"
          value={user?.lastName || ''}
          onChange={handleInputChangeText}
          required
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      <div className="form-grp">
        <label htmlFor="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          className="form-select"
          name="firstName"
          placeholder="Prénom *"
          value={user?.firstName || ''}
          onChange={handleInputChange}
          required
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>
      <div className="form-grp">
        <label htmlFor="phone">Portable</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-select"
          placeholder="Portable *"
          value={user?.telephone || ''}
          onChange={handleInputChange}
          required
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-select"
          placeholder="Email *"
          value={user?.email || ''}
          onChange={handleInputChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-grp">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          className="form-select"
          placeholder="Comments"
          onChange={handleInputChange}
        />
      </div>
      <button type="button" style={{ width: 'auto', marginBottom: '5px' }} onClick={handleNextStep}>
        Next
      </button>
    </div>
  );
};



const Step2 = ({ education, handleEducationChange, addEducation,goToStep  }) => (
  <div>
    <h3>Étape 2: Éducation</h3>
    {education.map((edu, index) => (
      <div key={index} className="form-grp">
        <label htmlFor={`degree-${index}`}>Degré</label>
        <input
          type="text"
          id={`degree-${index}`}
          name="degree"
          value={edu.degree}
          placeholder="Degré"
          onChange={(e) => handleEducationChange(index, e)}
        />
        <label htmlFor={`institution-${index}`}>Institution</label>
        <input
          type="text"
          id={`institution-${index}`}
          name="institution"
          value={edu.institution}
          placeholder="Institution"
          onChange={(e) => handleEducationChange(index, e)}
        />
        <label htmlFor={`year-${index}`}>Année</label>
        <input
          type="text"
          id={`year-${index}`}
          name="year"
          value={edu.year}
          placeholder="Année"
          onChange={(e) => handleEducationChange(index, e)}
        />
      </div>
    ))}
    <button type="button" style={{width:'auto', marginRight:'5%'}}  onClick={addEducation}>Ajouter une autre éducation</button>
    <button type="button" style={{width:'auto', marginRight:'5px'}}  onClick={() => goToStep(1)}>précédent</button>
    <button type="button" style={{width:'auto'}}  onClick={() => goToStep(3)}>Suivant</button>
  </div>
);

const Step3 = ({ experience, handleExperienceChange, addExperience, goToStep  }) => (
  <div>
    <h3>Étape 3: L'expérience professionnelle</h3>
    {experience.map((exp, index) => (
      <div key={index} className="form-grp">
        <label htmlFor={`jobTitle-${index}`}>Titre d'emploi</label>
        <input
          type="text"
          id={`jobTitle-${index}`}
          name="jobTitle"
          value={exp.jobTitle}
          placeholder="Titre d'emploi"
          onChange={(e) => handleExperienceChange(index, e)}
        />
        <label htmlFor={`company-${index}`}>Entreprise</label>
        <input
          type="text"
          id={`company-${index}`}
          name="company"
          value={exp.company}
          placeholder="Entreprise"
          onChange={(e) => handleExperienceChange(index, e)}
        />
        <label htmlFor={`duration-${index}`}>Durée</label>
        <input
          type="text"
          id={`duration-${index}`}
          name="duration"
          value={exp.duration}
          placeholder="Durée"
          onChange={(e) => handleExperienceChange(index, e)}
        />
      </div>
    ))}
    <button type="button" style={{width:'auto', marginRight:'5%'}}  onClick={addExperience}>Ajouter une autre expérience</button>
    <button type="button" style={{width:'auto', marginRight:'5px'}}  onClick={() => goToStep(2)}>précédent</button>
    <button type="button" style={{width:'auto'}}  onClick={() => goToStep(4)}>Suivant</button>
  </div>
);

const Step4 = ({ handleFileChange, handleFileChangeUpload, handleFileChangeWithValidation, isFileValid }) => (
  <div>
    <h3>Étape 4: Télécharger CV</h3>
    <div className="form-grp">
      <label htmlFor="cvUpload">Télécharger CV</label>
      <input
        type="file"
        id="cvUpload"
        name="cvUpload"
        accept=".pdf"
        onChange={(event) => {
          handleFileChange(event);
          handleFileChangeWithValidation(event);
          handleFileChangeUpload(event);
        }}
      />

      {!isFileValid && <span className="error-message" style={{ color: 'red', marginBottom: '10px' }}>Veuillez télécharger votre CV en fichier PDF valide.</span>}
    </div>
    <button
      type="submit"
      style={{ width: 'auto' }}
      disabled={!isFileValid} 
    >
      Soumettre
    </button>
  </div>
);

