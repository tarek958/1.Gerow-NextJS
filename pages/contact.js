import Layout from "@/components/layout/Layout"
import Link from "next/link"
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
      <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="CONTACTEZ-NOUS">
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
                  <p>Prenons le temps d’échangé ensemble, pour parler de votre projet professionnel.</p>
                  <p>Contactez-nous par téléphone ou via le formulaire de contact, nous répondons sous 24h.</p>

                </div>
                <div className="footer-info">
                  <ul className="list-wrap mt-2">
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin" style={{color:"red"}}/>
                      </div>
                      <div className="content">
                        <p>IMMEUBLE PALAZZO
                          29 Avenue Simone Veil
                          06200 Nice</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" style={{color:"green"}}/>
                      </div>
                      <div className="content">
                        <Link href="tel:0489977508" style={{ color: '#96a1b7', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'blue'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                          04 89 97 75 08
                        </Link>
                                              </div>
                    </li>
                  </ul></div>
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
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5770.8933886483055!2d7.203771!3d43.680476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd1a0f4138437%3A0x68a1fe376911b6f1!2s29%20Av.%20Simone%20Veil%2C%2006200%20Nice%2C%20France!5e0!3m2!1sfr!2stn!4v1722442371923!5m2!1sfr!2stn" allowfullscreen="" loading="lazy" ></iframe>
        </div>
      </Layout>
    </>
  )
}
