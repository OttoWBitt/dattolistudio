import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/LOGO_KD.jpg" alt="Dattoli Studio" />
            <p>Arquitetura & Interiores</p>
            <p>Salvador, Bahia — Atuação nacional</p>
          </div>

          <nav className="footer__links" aria-label="Links do rodapé">
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/noticias">Notícias</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <div className="footer__social">
            <a
              href="https://instagram.com/dattolistudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dattoli Studio"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Dattoli Studio Arquitetura LTDA · CNPJ 51.723.425/0001-60 · Salvador, Bahia
          </p>
          <p>
            © {new Date().getFullYear()} Karine Dattoli · Todos os direitos reservados ·{' '}
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
