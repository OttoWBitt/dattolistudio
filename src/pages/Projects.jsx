import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import '../styles/projects.css'

const categories = ['Todos', 'Residencial', 'Comercial']

function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Fechar">✕</button>

        {project.coverImage ? (
          <img className="modal__image" src={project.coverImage} alt={project.title} />
        ) : (
          <div className="modal__image-placeholder">
            <span>Imagens em breve</span>
          </div>
        )}

        <div className="modal__body">
          <p className="modal__meta">
            {project.category} · {project.location} · {project.year}
          </p>
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__description">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="page-wrapper">
      <SEO
        title="Projetos"
        description="Portfólio do Dattoli Studio — projetos residenciais e comerciais em Salvador, Bahia e em todo o Brasil. Arquitetura e interiores de pequeno e médio porte."
      />
      <section className="projects-header section">
        <div className="container">
          <p className="section-label">Portfólio</p>
          <h1 className="section-title">Projetos</h1>
          <div className="projects-filter" role="group" aria-label="Filtrar por categoria">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="projects-grid">
        {filtered.length > 0 ? (
          filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))
        ) : (
          <div className="projects-empty" style={{ gridColumn: '1 / -1' }}>
            <p>Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  )
}
