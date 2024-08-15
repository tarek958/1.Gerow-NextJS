import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout/Layout"
import { useRouter } from 'next/router';


const FilesList = () => {
    const router = useRouter();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const token = localStorage.getItem('token');
           
        if (!token) {
          router.push('/login');
          return;
        }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
        const response = await axios.get("http://148.113.194.169:5000/api/posts/all",config);
        setFiles(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          
          router.push('/login');
        } else {
          setError("Aucune offre disponible");
          toast.error("Aucune offre disponible");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [router]);
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning text-center" role="alert">
          Aucun fichier trouvé
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Layout headerStyle={2} footerStyle={3}>
        <div className="container " style={{ marginTop: "10%", marginBottom: "5%" }}>
          {files.map((file) => (
            <div key={file.id} className="card shadow-lg mb-4">
              <div className="card-header bg-primary text-white text-center">
                <h1 className="card-title">{file.contract}</h1>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Agence</h5>
                  <p className="card-text">{file.agence}</p>
                </div>
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Description du Poste</h5>
                  <p className="card-text">{file.descriptionDuPoste}</p>
                </div>
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Ville</h5>
                  <p className="card-text">{file.ville}</p>
                </div>
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Région</h5>
                  <p className="card-text">{file.region}</p>
                </div>
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Conditions et Avantages</h5>
                  <p className="card-text">{file.conditionsEtAvantages}</p>
                </div>
                <div className="mb-3">
                  <h5 className="card-subtitle mb-2 text-muted">Présentation de l'Entreprise</h5>
                  <p className="card-text">{file.presentationDeLEntreprise}</p>
                </div>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    localStorage.setItem('selectedCompany', file.agence);
                    
                    router.push('/index-5#candidature'); 
                  }}
                >
                  Postuler
                </button>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default FilesList;
