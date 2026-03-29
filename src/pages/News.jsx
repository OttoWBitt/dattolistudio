import SEO from '../components/SEO'
import news, { podcast } from '../data/news'
import '../styles/news.css'

export default function News() {
  return (
    <main className="page-wrapper">
      <SEO
        title="Notícias"
        description="Karine Dattoli na mídia — cobertura da Convenção Nacional ASBEA 2025, lançamento do podcast ASBEACast e presença em veículos como Revista Projeto e Bahia Econômica."
      />

      {/* HEADER */}
      <section className="news-header section">
        <div className="container">
          <p className="section-label">Imprensa & Mídia</p>
          <h1 className="section-title">Notícias</h1>
        </div>
      </section>

      {/* ARTIGOS */}
      <section className="news-list">
        <div className="container">
          {news.map(article => (
            <article className="news-article" key={article.id}>
              <div>
                {article.image ? (
                  <img
                    className="news-article__image"
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="news-article__image-placeholder">
                    <span>{article.source}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="news-article__source">{article.source}</p>
                <p className="news-article__date">{article.dateFormatted}</p>
                <h2 className="news-article__title">{article.title}</h2>
                <p className="news-article__summary">{article.summary}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-article__link"
                  aria-label={`Ler matéria: ${article.title}`}
                >
                  Ler matéria
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PODCAST */}
      <section className="podcast-section">
        <div className="container">
          <div className="podcast-inner">
            <div>
              <p className="podcast-label">Podcast</p>
              <h2 className="podcast-title">{podcast.name}</h2>
              <p className="podcast-text">{podcast.description}</p>
              <a
                href={podcast.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-white"
                aria-label="Acessar o canal ASBEACast no YouTube"
              >
                Assistir no YouTube
              </a>
            </div>

            <div className="podcast-card">
              <div className="podcast-card__icon" aria-hidden="true" />
              <p className="podcast-card__name">{podcast.name}</p>
              <p className="podcast-card__handle">{podcast.youtubeHandle}</p>
              <p className="podcast-card__handle" style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>
                Podcast oficial da ASBEA — Associação Brasileira dos Escritórios de Arquitetura
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
