import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../styles/about.css'

export default function About() {
  return (
    <main className="page-wrapper">
      <SEO
        title="Sobre"
        description="Karine Dattoli — arquiteta e urbanista em Salvador, Bahia. Fundadora do Dattoli Studio. Especialista em projetos e avaliação de imóveis. Avaliadora credenciada pelo TJBA. Atuação nacional."
      />

      {/* HERO / BIO */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__inner">

            <div className="about-hero__content">
              <p className="about-hero__label">Sobre</p>
              <h1 className="about-hero__title">Karine Dattoli</h1>

              <p className="about-hero__intro">
                Karine Dattoli está à frente do Dattoli Studio, com base em Salvador e
                atuação em diferentes regiões do Brasil. Sua arquitetura se constrói a
                partir de uma abordagem precisa, onde forma, função e materialidade são
                tratadas com igual rigor.
              </p>
              <p className="about-hero__text">
                Com olhar atento às singularidades de cada projeto, desenvolve espaços que
                revelam uma estética contida e atemporal, conduzida pelo equilíbrio entre
                proporção, luz e uso. Cada solução parte de uma escuta cuidadosa, traduzindo
                de forma sutil as particularidades de quem habita o espaço. O resultado são
                ambientes que se afirmam sem excessos, com identidade clara e permanência.
              </p>
              <p className="about-hero__text">
                O escritório também atua na avaliação de imóveis, oferecendo suporte técnico
                a clientes e instituições em decisões patrimoniais.
              </p>

              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <Link to="/contato" className="btn btn--primary">Fale conosco</Link>
              </div>
            </div>

            <div className="about-hero__image-wrap">
              <img
                className="about-hero__image"
                src="/Foto_KarineDattoli.jpg"
                alt="Karine Dattoli"
              />
              <p className="about-hero__image-credit">
                Foto:{' '}
                <a href="https://instagram.com/paolayrenato_" target="_blank" rel="noopener noreferrer">
                  @paolayrenato_
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="about-services">
        <div className="container">
          <p className="section-label">Áreas de atuação</p>
          <h2 className="section-title">O que o estúdio faz</h2>
          <div className="about-services__grid">

            <div>
              <div className="about-service__number">01</div>
              <h3 className="about-service__title">Projetos de Arquitetura & Interiores</h3>
              <p className="about-service__text">
                Projetos residenciais e comerciais em qualquer escala — do estudo de
                viabilidade ao acompanhamento de obra. Trabalhamos com escuta ativa,
                processos claros e compromisso com o prazo e o orçamento do cliente.
                Atendemos clientes em Salvador, no restante da Bahia e em todo o Brasil.
              </p>
            </div>

            <div>
              <div className="about-service__number">02</div>
              <h3 className="about-service__title">Avaliação de Imóveis</h3>
              <p className="about-service__text">
                Laudos técnicos de avaliação mercadológica conforme normas ABNT, para
                fins de inventário, compra e venda, locação, garantia bancária, partilha
                em divórcio e perícia judicial. Atendemos pessoas físicas, jurídicas e
                o poder judiciário, com sigilo, precisão e fundamentação técnica adequada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="about-info section">
        <div className="container">
          <div className="about-info__grid">
            <div className="about-info__item">
              <p className="about-info__label">Sede</p>
              <p className="about-info__value">Salvador, Bahia</p>
            </div>
            <div className="about-info__item">
              <p className="about-info__label">Atuação</p>
              <p className="about-info__value">Nacional</p>
            </div>
            <div className="about-info__item">
              <p className="about-info__label">CNPJ</p>
              <p className="about-info__value">51.723.425/0001-60</p>
            </div>
            <div className="about-info__item">
              <p className="about-info__label">Registro</p>
              <p className="about-info__value">CAU — Conselho de Arquitetura e Urbanismo</p>
            </div>
            <div className="about-info__item">
              <p className="about-info__label">Serviços</p>
              <p className="about-info__value">Projetos · Avaliação de Imóveis</p>
            </div>
            <div className="about-info__item">
              <p className="about-info__label">Credenciamentos</p>
              <p className="about-info__value">TJBA — Avaliadora judicial<br />Avaliações imobiliárias para instituições financeiras</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
