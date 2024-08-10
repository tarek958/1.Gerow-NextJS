import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Layout from "@/components/layout/Layout"
export default function PostDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchPostDetails();
        }
    }, [id]);

    const fetchPostDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/signin');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const res = await fetch(`http://148.113.194.169:5000/api/posts/${id}`, config);
            const data = await res.json();
            setPost(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch post details:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Chargement...</span>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning text-center" role="alert">
                    Aucun message trouvé
                </div>
            </div>
        );
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
            <div className="container " style={{marginTop:"10%",marginBottom:"5%"}}>
                <div className="card shadow-lg " >
                    <div className="card-header bg-primary text-white text-center"  >
                        <h1 className="card-title">{post.contract}</h1>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Agence</h5>
                            <p className="card-text">{post.agence}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Agence</h5>
                            <p className="card-text">{post.descriptionDuPoste}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Ville</h5>
                            <p className="card-text">{post.ville}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Région</h5>
                            <p className="card-text">{post.region}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Conditions et Avantages</h5>
                            <p className="card-text">{post.conditionsEtAvantages}</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-2 text-muted">Présentation de l'Entreprise</h5>
                            <p className="card-text">{post.presentationDeLEntreprise}</p>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                    <button
    className=" btn-primary"
    
    onClick={() => {
        localStorage.setItem('selectedCompany', post.agence); 
        router.push('/index-5#candidature'); 
    }}
>
    Postuler
</button>

                    </div>
                </div>
                </div >
        </Layout>
    </>
    );
}
