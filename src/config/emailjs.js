// =============================================
// CONFIGURAÇÃO EMAILJS
// =============================================
// 1. Crie uma conta gratuita em https://www.emailjs.com/
// 2. Crie um "Email Service" (Gmail, Outlook etc.) e copie o Service ID
// 3. Crie um "Email Template" com as variáveis:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
//    e copie o Template ID
// 4. Em "Account > API Keys", copie sua Public Key
// 5. Substitua os valores abaixo pelos seus dados reais

export const EMAILJS_CONFIG = {
  serviceId: 'SEU_SERVICE_ID',
  templateId: 'SEU_TEMPLATE_ID',
  publicKey: 'SUA_PUBLIC_KEY',
}
