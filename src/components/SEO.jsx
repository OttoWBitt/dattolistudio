import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://dattolistudio.com.br'

// Atualiza <title>, meta description, canonical e Open Graph/Twitter por página — importante para SEO e AISEO
export default function SEO({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title
      ? `${title} — Dattoli Studio | Arquitetura & Interiores, Salvador BA`
      : 'Dattoli Studio | Arquitetura & Interiores, Avaliação de Imóveis — Salvador, Bahia'
    const finalDescription = description || defaultDescription
    const canonicalUrl = `${SITE_URL}${location.pathname}`

    document.title = fullTitle

    const setMeta = selector => {
      const el = document.querySelector(selector)
      return el
    }

    setMeta('meta[name="description"]')?.setAttribute('content', finalDescription)

    setMeta('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)

    setMeta('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    setMeta('meta[property="og:title"]')?.setAttribute('content', fullTitle)
    setMeta('meta[property="og:description"]')?.setAttribute('content', finalDescription)

    setMeta('meta[name="twitter:title"]')?.setAttribute('content', fullTitle)
    setMeta('meta[name="twitter:description"]')?.setAttribute('content', finalDescription)
  }, [title, description, location.pathname])

  return null
}

const defaultDescription =
  'Dattoli Studio — escritório de arquitetura e interiores em Salvador, Bahia. ' +
  'Projetos residenciais e comerciais e avaliação técnica de imóveis. Atuação nacional.'
