# NodeMailer Example
Exemplo de envio de email com Node.

## Dependências
- Restify
- Nodemailer
- Dotenv
- Nodemon

## Configuração
1. Instale as dependências do Node:

```shell
yarn install
```
2. Renomeie o arquivo `.env.example` para `.env`.
3. Configure as variáveis no arquivo `.env`:

- `APP_PORT`: porta onde a aplicação vai rodar.
- `SENDER_SERVICE`: serviço usado pelo remetente para enviar os emails (padrão: 'gmail').
- `SENDER_NAME`: nome do remetente.
- `SENDER_EMAIL`: email do remetente.
- `SENDER_PASS`: senha do email do remetente.

## Testagem
Faça uma request seguindo o exemplo abaixo:

`POST` `http://localhost:3000/email/send`

```json
{
    "to": ["adauto.inatel@gmail.com", "adauto.junior@live.com", "adauto.mendes@inatel.br"],
    "subject": "Your subject",
    "textContent": "My Content",
    "htmlContent": "<h1>My Content</h1>"
}
```

Campos:

- `to`: array com todos os destinatários.
- `subject`: assunto do email.
- `textContent`: conteúdo do email em formato texto.
- `htmlContent`: conteúdo do email em formato HTML.