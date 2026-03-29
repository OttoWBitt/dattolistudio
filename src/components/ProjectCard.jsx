import '../styles/project-card.css'

export default function ProjectCard({ project, onClick }) {
  const { title, category, year, location, coverImage } = project

  return (
    <article
      className="project-card"
      onClick={() => onClick && onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Ver projeto: ${title}`}
      onKeyDown={e => e.key === 'Enter' && onClick && onClick(project)}
    >
      {coverImage ? (
        <img
          className="project-card__image"
          src={coverImage}
          alt={title}
          loading="lazy"
        />
      ) : (
        <div className="project-card__placeholder">
          <span>Imagem em breve</span>
        </div>
      )}
      <div className="project-card__overlay">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__meta">
          {category} · {location} · {year}
        </p>
      </div>
    </article>
  )
}
