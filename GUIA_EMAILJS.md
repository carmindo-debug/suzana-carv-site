# 📧 Guia de Configuração - Formulário de Contato com EmailJS

## O que foi implementado

Um **formulário de contato funcional** na página de contato que permite aos visitantes enviar mensagens diretamente pelo site. O formulário foi integrado com o serviço **EmailJS**, que é gratuito e não requer servidor backend.

## ✅ O que já foi feito

1. ✅ Instalação da dependência `@emailjs/browser`
2. ✅ Criação do componente `FormContato` com validação
3. ✅ Estilo completo e responsivo
4. ✅ Feedback de sucesso/erro para o usuário
5. ✅ Integração na página de contato
6. ✅ Variáveis de ambiente configuradas no `.env.local`

## 🔧 Próximos passos (IMPORTANTE)

### 1️⃣ Criar conta no EmailJS (GRÁTIS)

1. Acesse: **https://www.emailjs.com/**
2. Clique em **"Sign Up Free"**
3. Crie uma conta (pode usar Google)
4. Verifique seu email

### 2️⃣ Configurar Serviço de Email

1. No dashboard do EmailJS, clique em **"Email Services"**
2. Clique em **"Add Service"**
3. Escolha **"Gmail"** (ou outro email)
4. Siga as instruções para conectar sua conta de email
5. **Copie o Service ID** (exemplo: `service_abc123def`)
6. Salve em um lugar seguro

### 3️⃣ Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. **Copie este template exato:**

```
Nome do Template: Contact Form
Service ID: [seu service id do passo anterior]

TEMPLATE HTML:
Olá Suzana,

Você recebeu uma nova mensagem de contato:

Nome: {{name}}
Email: {{email}}
Telefone: {{phone}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Responda diretamente para: {{email}}
```

4. **Copie o Template ID** (exemplo: `template_abc123def`)
5. Salve em um lugar seguro

### 4️⃣ Obter Public Key

1. Clique no ícone de perfil (canto superior direito)
2. Vá em **"Account"**
3. Procure por **"Public Key"** na seção de segurança
4. **Copie a Public Key** (exemplo: `abc123def456789`)

### 5️⃣ Atualizar .env.local

Abra o arquivo `src/.env.local` e substitua:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxx          # Cole seu Service ID aqui
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx        # Cole seu Template ID aqui
VITE_EMAILJS_PUBLIC_KEY=abc123def456789        # Cole sua Public Key aqui
```

### 6️⃣ Testar

1. Abra o site na sua máquina
2. Vá até a página de contato
3. Preencha o formulário
4. Clique em "Enviar mensagem"
5. Você deve receber um email automaticamente

## 📋 Estrutura do Formulário

O formulário coleta:
- **Nome** (obrigatório)
- **Email** (obrigatório)
- **Telefone** (opcional)
- **Assunto** (opcional)
- **Mensagem** (obrigatório)

## 🎯 Recursos

✅ Validação de campos obrigatórios
✅ Feedback visual (sucesso/erro)
✅ Estado de carregamento durante envio
✅ Link alternativo para WhatsApp
✅ Responsivo (mobile/desktop)
✅ Acessibilidade completa

## 🚀 Limite Gratuito do EmailJS

- **500 emails por mês** (plano gratuito)
- Depois é só atualizar para pago se precisar (a partir de $9/mês)

## 🛠️ Troubleshooting

### ❌ "Erro ao enviar sua mensagem"
- Verifique se as credenciais estão corretas no `.env.local`
- Reinicie o servidor de desenvolvimento
- Verifique o console do navegador para mensagens de erro

### ❌ "Email não chegando"
- Verifique se o Service ID está ativo no dashboard
- Verifique spam/lixo eletrônico
- Teste sem reload da página (disable browser cache)

### ❌ "CORS error"
- Isso é normal no EmailJS - a biblioteca já trata isso
- Se ainda tiver problema, adicione sua URL à lista branca no EmailJS

## 📝 Notas

- As chaves no `.env.local` são públicas por design do EmailJS (seguro)
- A Public Key pode ser vista no código sem problemas
- O Email não é exposto publicamente
- Recomenda-se usar filtro de rate-limiting no backend se escalar

## 🔐 Segurança

- As credenciais estão em `.env.local` (não commitado no git)
- EmailJS tem proteção contra spam
- Adicione validação CAPTCHA se receber muitos spams (opcional)

---

**Próximo passo**: Acesse emailjs.com e configure suas credenciais! 🚀
