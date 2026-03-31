import { Link } from 'react-router-dom'
import '../styles/privacy.css'

export default function Privacy() {
  return (
    <main className="page-wrapper">
      <div className="privacy-page">
        <div className="container">
          <Link to="/" className="privacy-back">Voltar ao início</Link>

          <h1>Política de Privacidade</h1>
          <p className="privacy-date">Última atualização: março de 2026</p>

          <h2>1. Responsável pelo Tratamento dos Dados</h2>
          <p>
            Dattoli Studio Arquitetura LTDA, inscrita no CNPJ sob o nº 51.723.425/0001-60,
            com sede em Salvador, Bahia, é a controladora dos dados pessoais coletados
            neste site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
          </p>
          <p>
            Encarregada (DPO): Karine Dattoli<br />
            Contato: <a href="mailto:contato@dattolistudio.com.br">contato@dattolistudio.com.br</a>
          </p>

          <h2>2. Dados Coletados</h2>
          <p>
            Este site coleta, exclusivamente por meio do formulário de contato, os seguintes
            dados pessoais:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone (opcional)</li>
            <li>Assunto da mensagem</li>
            <li>Conteúdo da mensagem</li>
          </ul>

          <h2>3. Finalidade do Tratamento</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para responder à solicitação
            enviada pelo titular — seja orçamento de projeto, avaliação de imóvel, candidatura
            a vaga ou outro contato. Os dados não são utilizados para fins de marketing,
            criação de perfis ou compartilhamento com terceiros.
          </p>

          <h2>4. Base Legal (LGPD, Art. 7º)</h2>
          <p>
            O tratamento é realizado com base no consentimento expresso do titular (inciso I)
            e no legítimo interesse do controlador para responder às solicitações recebidas
            (inciso IX), conforme a finalidade declarada acima.
          </p>

          <h2>5. Armazenamento e Segurança</h2>
          <p>
            As mensagens enviadas pelo formulário são transmitidas via EmailJS, serviço
            terceirizado de envio de e-mail, diretamente à caixa de entrada do escritório.
            Este site não armazena dados pessoais em servidores próprios. A comunicação é
            realizada por meio de conexão segura (HTTPS).
          </p>

          <h2>6. Cookies e Dados de Desempenho</h2>
          <p>
            Este site utiliza um cookie técnico de consentimento (<code>kd_cookie_consent</code>),
            armazenado localmente no navegador do usuário, com a finalidade de registrar a
            escolha do visitante em relação ao aviso de cookies.
          </p>
          <p>
            Ao acessar este site, coletamos automaticamente dados anônimos de desempenho e
            experiência do usuário por meio do Grafana Faro (Grafana Labs), com base no
            legítimo interesse do controlador (LGPD, Art. 7º, IX). São coletadas informações
            como número de acessos, tempo de carregamento de página e erros de JavaScript —
            sem identificar o usuário individualmente e sem armazenar dados pessoais.
          </p>

          <h2>7. Direitos do Titular</h2>
          <p>
            Nos termos da LGPD (Art. 18), o titular dos dados tem direito a:
          </p>
          <ul>
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Portabilidade dos dados</li>
            <li>Revogação do consentimento</li>
          </ul>
          <p>
            Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
            <a href="mailto:contato@dattolistudio.com.br">contato@dattolistudio.com.br</a>.
            O prazo de resposta é de até 15 dias úteis.
          </p>

          <h2>8. Retenção dos Dados</h2>
          <p>
            Os dados são retidos pelo tempo necessário para atender à solicitação do titular
            ou pelo prazo legalmente exigido. Após esse período, são descartados de forma segura.
          </p>

          <h2>9. Alterações nesta Política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada a qualquer momento. A data da
            última revisão está indicada no topo deste documento. Recomendamos que o titular
            verifique periodicamente esta página.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para dúvidas sobre esta política ou sobre o tratamento de seus dados:{' '}
            <a href="mailto:contato@dattolistudio.com.br">contato@dattolistudio.com.br</a>
          </p>
        </div>
      </div>
    </main>
  )
}
