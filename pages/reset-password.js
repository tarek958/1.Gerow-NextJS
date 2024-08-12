// pages/reset-password.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query; // Get the token from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post("http://148.113.194.169:5000/api/users/reset-password", { 
        token, 
        password 
      });

      if (response.status === 200) {
        toast.success('Mot de passe réinitialisé avec succès.');
        setTimeout(() => {
          router.push('/signin'); 
        }, 2000);
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      toast.error('Échec de la réinitialisation du mot de passe. Le lien de réinitialisation est peut-être invalide ou expiré.');
    }
  };

  return (
    <div className="container text-center">
        <div className="row justify-content-center">
            <div className="col-12 col-md-6">
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className="mb-4">Réinitialiser le mot de passe</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nouveau mot de passe</label>
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirmer le mot de passe</label>
                                <input 
                                    type="password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    required 
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Réinitialiser le mot de passe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  );
}
