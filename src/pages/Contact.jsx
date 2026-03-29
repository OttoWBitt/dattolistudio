import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { EMAILJS_CONFIG } from '../config/emailjs'
import '../styles/contact.css'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [consented, setConsented] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!consented) return

    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      setStatus('success')
      formRef.current.reset()
      setConsented(false)
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page-wrapper">
      <SEO
        title="Contato"
        description="Entre em contato com o Dattoli Studio. Solicite orçamento de projeto de arquitetura ou avaliação de imóvel. Salvador, Bahia — atendimento nacional."
      />

      {/* HEADER */}
      <section className="contact-header section">
        <div className="container">
          <p className="section-label">Entre em contato</p>
          <h1 className="section-title">Contato</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-body__inner">

            {/* INFO */}
            <div>
              <p className="contact-info__label">Localização</p>
              <p className="contact-info__value">Salvador, Bahia<br />Atuação nacional</p>

              <div className="contact-info__divider" />

              <p className="contact-info__label">E-mail</p>
              <p className="contact-info__value">
                <a href="mailto:contato@dattolistudio.com.br">
                  contato@dattolistudio.com.br
                </a>
              </p>

              <p className="contact-info__label">Instagram</p>
              <p className="contact-info__value">
                <a
                  href="https://instagram.com/dattolistudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dattolistudio
                </a>
              </p>

              <div className="contact-info__divider" />

              <p className="contact-info__label">CNPJ</p>
              <p className="contact-info__value" style={{ fontSize: '0.9rem' }}>
                51.723.425/0001-60<br />
                Dattoli Studio Arquitetura LTDA
              </p>
            </div>

            {/* FORM */}
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from_name">Nome *</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="from_email">E-mail *</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(71) 9 0000-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Selecione</option>
                    <option value="Orçamento de Projeto">Orçamento de Projeto</option>
                    <option value="Avaliação de Imóvel">Avaliação de Imóvel</option>
                    <option value="Trabalhe Conosco">Trabalhe Conosco</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Descreva brevemente seu projeto ou demanda..."
                  required
                />
              </div>

              {/* LGPD consent */}
              <div className="form-consent">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consented}
                  onChange={e => setConsented(e.target.checked)}
                  required
                />
                <label htmlFor="consent">
                  Li e concordo com a{' '}
                  <Link to="/politica-de-privacidade">Política de Privacidade</Link>{' '}
                  e autorizo o uso dos meus dados para retorno de contato.
                </label>
              </div>

              {status === 'success' && (
                <p className="form-success">
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              )}
              {status === 'error' && (
                <p className="form-error">
                  Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato
                  por e-mail.
                </p>
              )}

              <div className="form-submit">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={!consented || status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
