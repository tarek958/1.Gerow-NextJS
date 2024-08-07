import { useState } from 'react';
export default function Contact() {
   
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        telephone: '',
        message: ''
      });
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
    
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
    
          const result = await response.json();
          if (result.success) {
            setStatus('Data saved successfully');
            setFormData({
              name: '',
              company: '',
              email: '',
              telephone: '',
              message: ''
            });
          } else {
            setStatus('Failed to save data');
          }
        } catch (error) {
          console.error('Error:', error);
          setStatus('Failed to save data');
        }
      };
    return (
        <>
            <section className="contact-area contact-bg" data-background="/assets/img/bg/contact_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-content">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">CONTACTEZ-NOUS</span>
                                    <h2 className="title tg-element-title">PARLONS DE
VOTRE PROJET</h2>
                                </div>
                                <p>Les maitres mots qui nous définissent sont la réactivité, la convivialité et enfin le professionnalisme.</p>
                                <p>Notre équipe de consultants s’engage à faciliter vos démarches de recrutements, formations et plus globalement dans vos projets liés aux ressources humaines.</p>
                                <p>C’est pour cela que nos procédures sont définies très précisément et permettent de vous garantir un service des plus complets.</p>
                            
                            </div>
                        </div>
                        <div className="col-lg-7">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  type="text"
                  name="name"
                  placeholder="Prénom & Nom *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  type="text"
                  name="company"
                  placeholder="Enterprise *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  type="text"
                  name="telephone"
                  placeholder="Téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-grp">
                <textarea
                  name="message"
                  placeholder="Votre message en quelques mots *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit">Envoyer</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
                    </div>
                </div>
                <div className="contact-shape">
                    <img src="/assets/img/images/contact_shape.png" alt="" />
                </div>
            </section>
        </>
    )
}
