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
                Arquiteta e urbanista com sede em Salvador, Bahia, e atuação em todo o
                território nacional. Fundadora do Dattoli Studio Arquitetura, escritório
                dedicado a projetos de arquitetura e interiores e a avaliações técnicas de imóveis.
              </p>
              <p className="about-hero__text">
                Com uma trajetória marcada pela atenção às necessidades do cliente e pelo
                rigor no processo projetual, Karine desenvolve projetos residenciais e
                comerciais de pequeno e médio porte que unem funcionalidade, identidade e
                qualidade construtiva.
              </p>
              <p className="about-hero__text">
                Paralelamente à prática projetual, o escritório atua na área de avaliação
                mercadológica de imóveis, prestando serviços a clientes avulsos, escritórios
                jurídicos e instituições — com laudos precisos e respaldo técnico fundamentado
                nas normas da ABNT.
              </p>
              <p className="about-hero__text">
                Em 2025, Karine foi convocada como avaliadora credenciada pelo Tribunal de
                Justiça da Bahia (TJBA) e integrou o time de apresentadoras do ASBEACast,
                podcast oficial da Associação Brasileira dos Escritórios de Arquitetura
                (ASBEA), lançado durante a Convenção Nacional ASBEA 2025.
              </p>

              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <Link to="/contato" className="btn btn--primary">Fale conosco</Link>
              </div>
            </div>

            <div className="about-hero__image-wrap">
              <div className="about-hero__image-placeholder">
                <span>Foto de Karine</span>
              </div>
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
              <p className="about-info__label">Credenciamento</p>
              <p className="about-info__value">TJBA — Avaliadora judicial</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
