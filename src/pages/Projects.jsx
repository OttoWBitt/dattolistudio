import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import projects from '../data/projects'
import '../styles/projects.css'

const categories = ['Todos', 'Residencial', 'Comercial']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = (activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory)
  ).sort((a, b) => b.year - a.year)

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

      <h2 className="sr-only">
        {activeCategory === 'Todos' ? 'Todos os projetos' : `Projetos — ${activeCategory}`}
      </h2>

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
          <div className="projects-empty">
            <p>Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}
