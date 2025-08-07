const html = document.querySelector('html')
//botoes
const focoBotao = document.querySelector('.app__card-button--foco')
const curtoBotao = document.querySelector('.app__card-button--curto')
const longoBotao = document.querySelector('.app__card-button--longo')
const botaoStartPause = document.querySelector('#start-pause')
const botoes = document.querySelectorAll('.app__card-button')
const iniciarOuPausarBotao = document.querySelector('#start-pause span')
const alterarIconePlay = document.querySelector('.app__card-primary-butto-icon')

const imagem = document.querySelector('.app__image')
const timer = document.querySelector('#timer')
const title = document.querySelector('.app__title')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

let tempoEmSegundos = 1500
let intervaloId = null

const duracaoFoco = 1500
const duracaoCurto = 300
const duracaoLongo = 900

musica.loop = true
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    }else {
        musica.pause()
    }
})

focoBotao.addEventListener('click', () => {
    tempoEmSegundos = 1500
    alterContexto('foco')
    focoBotao.classList.add('active')
})

curtoBotao.addEventListener('click', () => {
    tempoEmSegundos = 300
    alterContexto('descanso-curto')
    curtoBotao.classList.add('active')
    
})

longoBotao.addEventListener('click', () => {
    tempoEmSegundos = 900
    alterContexto('descanso-longo')
    longoBotao.classList.add('active')
})

function alterContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            title.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break
        case 'descanso-curto':
            title.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!.</strong>
            `
            break
        case 'descanso-longo':
            title.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break
        default:
            break
    }
}

const conteagemRegressiva = () => {
    if(tempoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert('tempo finalizado')
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar()
        return
    }
    tempoEmSegundos -= 1
    mostrarTempo()
    iniciarOuPausarBotao.textContent = 'Pausar'
    alterarIconePlay.setAttribute('src', '/imagens/pause.png')
}

botaoStartPause.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(conteagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBotao.textContent = 'Começar'
    alterarIconePlay.setAttribute('src', '/imagens/play_arrow.png')
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoFormatado}`
}

mostrarTempo()