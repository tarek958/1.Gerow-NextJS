import React, { useEffect,useState } from 'react';
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
  const company = localStorage.getItem('selectedCompany');
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
       

        const decoded = jwtDecode(token); // jwtDecode should be used as default import
        const userId = decoded.id;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `http://localhost:5000/api/users/${userId}`,
          config
        );
        setUser(response.data);
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
    filename: '', // This will be updated with the generated filename
    phone: '',
    email: '',
    comments: '',
    company: company,
    cvUpload: null,
    education: [{ degree: '', institution: '', year: '' }],
    experience: [{ jobTitle: '', company: '', duration: '' }],
  });
  
  const generateFilename = (file) => {
    const timestamp = Date.now(); // Current timestamp
    const fileExtension = file.name.split('.').pop(); // Extract the file extension
    const generatedFilename = `${timestamp}.${fileExtension}`; // Generate the filename
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
        a.download = generatedFilename; // Use the same generated filename for download
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
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleFileChangeUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const generatedFilename = generateFilename(selectedFile);
      setFile(selectedFile);
      setFormData((prevFormData) => ({
        ...prevFormData,
        filename: generatedFilename, // Update the filename in the formData state
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
        filename: generatedFilename, // Update the filename in the formData state
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
      const response = await fetch('http://localhost:5000/api/files/upload', {
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
                <StepWizard>
                  <Step1
                    handleInputChange={handleInputChange}
                    handleInputChangeText={handleInputChangeText}
                    nextStep={() => {}}
                    user={user}
                  />
                  <Step2
                    education={formData.education}
                    handleEducationChange={handleEducationChange}
                    addEducation={addEducation}
                    prevStep={() => {}}
                    nextStep={() => {}}
                  />
                  <Step3
                    experience={formData.experience}
                    handleExperienceChange={handleExperienceChange}
                    addExperience={addExperience}
                    prevStep={() => {}}
                    nextStep={() => {}}
                  />
                  <Step4 handleFileChange={handleFileChange} handleFileChangeUpload={handleFileChangeUpload}/>
                </StepWizard>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-shape">
        <img src="/assets/img/images/contact_shape.png" alt="" />
      </div>
      <ToastContainer/>
    </section>
  );
}

const Step1 = ({ handleInputChange, nextStep ,user, handleInputChangeText }) => {
  return(
  <div>
    <h3>Étape 1: Informations personnelles</h3>
    <div className="form-grp">
      <label htmlFor="titleSelect">Civilité</label>
      <select id="titleSelect" className="form-select" name="title" onChange={handleInputChange} required>
        <option value="">Sélectionnez...</option>
        <option value="Mme">Mme</option>
        <option value="M.">M.</option>
      </select>
    </div>
    <div className="form-grp">
      <label htmlFor="lastName">Nom</label>
      <input type="text" id="lastName" name="lastName"  value={user && user.lastName} onChange={(event) =>{handleInputChangeText(event); handleInputChange(event);}} required />
    </div>
    <div className="form-grp">
      <label htmlFor="firstName">Prénom</label>
      <input type="text" id="firstName" name="firstName" placeholder="Prénom *" value={user && user.firstName} onChange={handleInputChange} required />
    </div>
    <div className="form-grp">
      <label htmlFor="phone">Portable</label>
      <input type="tel" id="phone" name="phone" placeholder="Portable *" value={user && user.telephone} onChange={handleInputChange} required />
    </div>
    <div className="form-grp">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Email *" value={user && user.email} onChange={handleInputChange} required />
    </div>
    <div className="form-grp">
      <label htmlFor="comments">Comments</label>
      <textarea id="comments" name="comments" placeholder="Comments" onChange={handleInputChange} />
    </div>
    <button type="button" style={{width:'auto', marginBottom:'5px'}}  onClick={nextStep}>Next</button>
  </div>
  )
  };


const Step2 = ({ education, handleEducationChange, addEducation, prevStep, nextStep }) => (
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
    <button type="button" style={{width:'auto', marginRight:'5px'}}  onClick={prevStep}>précédent</button>
    <button type="button" style={{width:'auto'}}  onClick={nextStep}>Suivant</button>
  </div>
);

const Step3 = ({ experience, handleExperienceChange, addExperience, prevStep, nextStep }) => (
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
    <button type="button" style={{width:'auto', marginRight:'5px'}}  onClick={prevStep}>précédent</button>
    <button type="button" style={{width:'auto'}}  onClick={nextStep}>Suivant</button>
  </div>
);

const Step4 = ({ handleFileChange ,handleFileChangeUpload}) => (
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
          handleFileChangeUpload(event);
        }}
    
      />
      
    </div>
    <button style={{width:'auto'}}  type="submit">Soumettre</button>
    
  </div>
);
