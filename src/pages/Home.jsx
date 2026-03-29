import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import '../styles/home.css'

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <main className="page-wrapper" style={{ paddingTop: 0 }}>
      <SEO
        title={null}
        description="Dattoli Studio — arquitetura, interiores e avaliação de imóveis em Salvador, Bahia. Projetos residenciais e comerciais e laudos técnicos para pessoas físicas, jurídicas e poder judiciário. Atuação nacional."
      />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Apresentação Dattoli Studio">

        {/* Coluna esquerda — imagem, menos protagonismo */}
        <div className="hero__left" aria-hidden="true">
          <div className="hero__image-placeholder">
            <span>Foto em breve</span>
          </div>
        </div>

        {/* Coluna direita — todo o conteúdo */}
        <div className="hero__right">

          {/* Logo da marca */}
          <img
            className="hero__logo"
            src="/LOGO_KD3.png"
            alt="Karine Dattoli — Arquitetura & Interiores"
            onError={e => { e.currentTarget.src = '/LOGO_KD.jpg' }}
          />

          {/* Bloco central */}
          <div className="hero__body">    

            {/* H2 — o que faz e onde, com palavras-chave de SEO */}
            <h2 className="hero__h2">
              Projetos residenciais e comerciais · Avaliação de imóveis<br />
              Salvador, Bahia — Atuação nacional
            </h2>

            {/* Resumo em prosa — contexto para o visitante e para IAs */}
            <p className="hero__summary">
              Escritório de arquitetura e interiores sediado em Salvador, Bahia.
              Desenvolvemos projetos com rigor técnico e realizamos laudos de
              avaliação mercadológica de imóveis para pessoas físicas, jurídicas
              e poder judiciário em todo o Brasil.
            </p>

            {/* Serviços — lista escaneável, boa para SEO e leitura rápida */}
            <ul className="hero__services" aria-label="Serviços oferecidos">
              <li className="hero__service-item">Projetos Residenciais</li>
              <li className="hero__service-item">Projetos Comerciais</li>
              <li className="hero__service-item">Avaliação Técnica de Imóveis</li>
            </ul>

            {/* CTAs — próximos passos claros */}
            <div className="hero__ctas">
              <Link to="/projetos" className="btn btn--primary">Ver portfólio</Link>
              <Link to="/contato" className="btn btn--outline">Fale conosco</Link>
            </div>

          </div>

          {/* Rodapé da hero */}
          <div className="hero__footer">
            <span className="hero__location">Salvador · Bahia · Brasil</span>
            <div className="hero__scroll" aria-hidden="true">
              <span>Scroll</span>
              <div className="hero__scroll-line" />
            </div>
          </div>

        </div>

      </section>

      {/* ── SERVIÇOS ── */}
      <section className="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="services__header">
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>O que fazemos</p>
            <h2 className="section-title" id="services-heading" style={{ color: 'var(--color-white)' }}>
              Áreas de atuação
            </h2>
          </div>
          <div className="services__grid">

            <div className="service-card">
              <div className="service-card__icon" />
              <h3 className="service-card__title">Projetos de Arquitetura</h3>
              <p className="service-card__text">
                Desenvolvemos projetos residenciais e comerciais em qualquer escala,
                do conceito à entrega. Cada projeto é uma resposta singular ao
                cliente, ao programa e ao lugar — com rigor técnico e atenção ao detalhe.
              </p>
              <Link to="/projetos" className="link-arrow">Ver projetos</Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon" />
              <h3 className="service-card__title">Avaliação de Imóveis</h3>
              <p className="service-card__text">
                Laudos técnicos de avaliação mercadológica para pessoas físicas,
                jurídicas e poder judiciário. Atendemos inventário, compra e venda,
                locação, garantias e perícias judiciais — com precisão, sigilo e
                respaldo técnico-normativo (ABNT).
              </p>
              <Link to="/contato" className="link-arrow">Solicitar avaliação</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJETOS EM DESTAQUE ── */}
      <section className="featured-projects" aria-labelledby="featured-heading">
        <div className="container">
          <div className="featured-projects__header">
            <div>
              <p className="section-label">Portfólio</p>
              <h2 className="section-title" id="featured-heading">Projetos selecionados</h2>
            </div>
            <Link to="/projetos" className="link-arrow">Ver todos</Link>
          </div>
        </div>
        <div className="featured-projects__grid" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
          {featuredProjects.map(project => (
            <Link to="/projetos" key={project.id} style={{ display: 'block' }}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </section>

      {/* ── SOBRE TEASER ── */}
      <section className="home-about" aria-labelledby="about-heading">
        <div className="container">
          <div className="home-about__inner">
            <div>
              <p className="section-label home-about__label">Sobre o estúdio</p>
              <h2 className="home-about__title" id="about-heading">
                Arquitetura com propósito,<br />escuta e precisão técnica
              </h2>
              <p className="home-about__text">
                O Dattoli Studio é um escritório de arquitetura sediado em Salvador, Bahia,
                com atuação em projetos residenciais e comerciais e em avaliações técnicas
                de imóveis para clientes em todo o Brasil.
              </p>
              <Link to="/sobre" className="btn btn--outline-white">Conheça o estúdio</Link>
            </div>
            <div className="home-about__image-placeholder" aria-hidden="true">
              <span>Foto em breve</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
