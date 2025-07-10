# 🧘‍♀️ Fokus

Fokus é um aplicativo de timer baseado na técnica Pomodoro, que ajuda a melhorar a produtividade alternando entre períodos de foco e pausas curtas ou longas. O usuário pode escolher o tempo de foco, pausar ou reiniciar o cronômetro, além de escutar uma música ambiente enquanto trabalha.

## 🚀 Funcionalidades

- ⏱ Timer com três modos:
  - Foco (25 minutos)
  - Pausa Curta (5 minutos)
  - Pausa Longa (15 minutos)
- 🔁 Contagem regressiva automática com alertas sonoros ao fim de cada ciclo.
- 🎵 Alternar música ambiente de fundo.
- 🎨 Mudança visual e textual conforme o modo selecionado (foco, pausa curta ou longa).
- 🖱 Botões para iniciar, pausar o cronômetro.

## 🧩 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## 📁 Estrutura de diretórios esperada

```plaintext
/
├── index.html
├── style.css
├── script.js
├── /imagens
│   ├── foco.png
│   ├── descanso-curto.png
│   └── descanso-longo.png
├── /sons
│   ├── luna-rise-part-one.mp3
│   ├── play.wav
│   ├── pause.mp3
│   └── beep.mp3
```

## 🧠 Lógica principal

- O tempo é definido em segundos conforme o modo escolhido.
- A função `setInterval()` atualiza o timer a cada segundo.
- O modo ativo altera o layout e exibe mensagens motivacionais específicas.
- Sons são executados ao iniciar, pausar e finalizar o tempo.
- A função `mostrarTempo()` converte os segundos em formato mm:ss.



## 📌 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fokus.git
   ```

2. Abra o arquivo `index.html` em seu navegador.

3. Escolha um modo (Foco, Curto ou Longo) e pressione "Começar".

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo como quiser.

---

Feito com a Alura por [Raynara] no curso de JavaScript.