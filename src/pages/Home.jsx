import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import projects from '../data/projects'
import '../styles/home.css'

function pickRandomProjects(n) {
  return [...projects].sort(() => Math.random() - 0.5).slice(0, n)
}

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState(() => pickRandomProjects(3))
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedProjects(pickRandomProjects(3))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="page-wrapper">
      <SEO
        title={null}
        description="Dattoli Studio — arquitetura, interiores e avaliação de imóveis em Salvador, Bahia. Projetos residenciais e comerciais e laudos técnicos para pessoas físicas, jurídicas e poder judiciário. Atuação nacional."
      />

      {/* ── HEADER ── */}
      <section className="home-header section">
        <div className="container">
          <p className="section-label">Dattoli Studio</p>
          <h1 className="section-title">Seu espaço, sua história, nosso traço</h1>
          <p className="home-header__subtitle">
            Projetos residenciais, comerciais e avaliação técnica de imóveis, com
            atuação em todo o Brasil.
          </p>
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
          {featuredProjects.map((project, i) => (
            <div className="featured-projects__slot" key={i}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: 'absolute' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <ProjectCard project={project} onClick={setSelectedProject} />
                </motion.div>
              </AnimatePresence>
            </div>
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
            <img
              className="home-about__image"
              src="/FOTO%20DE%20ESCRITORIO.jpg"
              alt="Escritório Dattoli Studio"
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

    </main>
  )
}
