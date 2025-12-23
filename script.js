const bancoDeCartas = [
    {
        id: "mae", 
        nome: "mãe", 
        senha: "cazuza", 
        titulo: "mamãe,",
        texto: `a distância física pode ser grande, mas é insignificante perto do tamanho da saudade e do amor que sentimos por você. obrigado por ser nosso porto seguro. feliz natal!`,
        imagem: "/image/mae.jpg",
        assinatura: "suas filhas, duda e capitu"
    },
    {
        id: "justin", 
        nome: "justin", 
        senha: "cristiane", 
        titulo: "justin,",
        texto: `i can't express how meaningful it is for me to see my mom so happy with someone who is so kind and gentle. you are truly part of the family. we're waiting for you here, merry christmas!`,
        imagem: "/image/justin.jpg",
        assinatura: "duda"
    },
    {
        id: "arian",
        nome: "arian",
        senha: "chata",
        titulo: "oi mo",
        texto: `nenhum presente debaixo da árvore supera a sorte de ter você ao meu lado todos os dias. dividir a vida com você é o meu melhor momento. feliz natal!`,
        imagem: "/image/mo.png",
        assinatura: "sua mo"
    },
    {
        id: "to",
        nome: "tó",
        senha: "helcio",
        titulo: "tó,",
        texto: `obrigada por ser esse alicerce firme ao nosso lado. eu não seria a mulher que sou hoje se não fossem seus ensinamentos e seu amor. feliz natal!`,
        imagem: "/image/to.jpg",
        assinatura: "sua primeirA netA"
    }, 
    {
        id: "aline",
        nome: "tia aline",
        senha: "leandro",
        titulo: "tia aline,",
        texto: `obrigada por ser meu apoio incondicional e por sua presença constante durante toda a minha vida. você é essencial para mim. feliz natal!`,
        imagem: "/image/aline.jpg",
        assinatura: "sua sobrinha favorita"
    },
    {
        id: "clarice",
        nome: "clarice",
        senha: "taylor",
        titulo: "claricinha",
        texto: `te acompanhar crescer é um privilégio imenso na minha vida, o mundo é pequeno para o seu brilho. feliz natal!`,
        imagem: "/image/clarice.jpg",
        assinatura: "sua prima favorita"
    },
    {
        id: "leandro",
        nome: "leandro",
        senha: "aline",
        titulo: "leandro,",
        texto: `obrigada por aumentar nossa família e deixar ela muito mais legal, ainda mais quando você tá desembarcado rsrs. feliz natal!`,
        imagem: "/image/leandro.jpg",
        assinatura: "sua sobrinha favorita"
    },
    {
        id: "murilo",
        nome: "murilo",
        senha: "chato",
        titulo: "murilo",
        texto: `eu sei que você me ama e adora quando eu estou em bicas, a implicância é uma forma de amor bobinho. feliz natal!`,
        imagem: "/image/murilo.jpg",
        assinatura: "sua prima favorita"
    },
    {
        id: "mauro",
        nome: "tio mauro",
        senha: "brasil",
        titulo: "tio mauro",
        texto: `eu admiro profundamente a sua força e a sua coragem de sempre começar de novo, você é uma inspiração de resiliência. feliz natal!`,
        imagem: "/image/mauro.jpg",
        assinatura: "sua primeira sobrinha"
    },
    {
        id: "harley",
        nome: "harley",
        senha: "steam",
        titulo: "harley",
        texto: `eu gosto muito de você e sinto saudades de você pequenininho. feliz natal!`,
        imagem: "/image/harley.jpg",
        assinatura: "sua primeira prima"
    },
    {
        id: "lucas",
        nome: "lucas",
        senha: "dota",
        titulo: "lucas",
        texto: `ter crescido com você fez minha infância mais feliz. obrigada por ser meu irmão e meu amigo pra vida toda. feliz natal!`,
        imagem: "/image/lucas.jpg",
        assinatura: "sua melhor irmã"
    },
    {
        id: "mari",
        nome: "mari",
        senha: "maquiagem",
        titulo: "mari",
        texto: `obrigada por estar sempre ao lado do meu irmão e cuidar dele (parabéns, você foi a guerreira escolhida por deus para essa batalha, rs). feliz natal!`,
        imagem: "/image/mari.jpg",
        assinatura: "sua melhor nora"
    },
    {
        id: "rosa",
        nome: "rosa",
        senha: "açai",
        titulo: "senhora rosa,",
        texto: `muchas gracias por todo el cariño, y en especial por traer al mundo el gran amor de mi vida. ¡feliz navidad!`,
        imagem: "/image/rosa.png",
        assinatura: "interrogación"
    },
    {
        id: "kennet",
        nome: "kennet",
        senha: "açai",
        titulo: "kennet,",
        texto: `gracias por acompañarme, por ser un fanboy y por compartir el gusto por las cosas extrañas (jejejejeje). ¡es genial tenerte como familia, feliz navidad!`,
        imagem: "/image/kennet.png",
        assinatura: "interrogación"
    },
    {
        id: "ramon",
        nome: "ramon",
        senha: "maromba",
        titulo: "ramon,",
        texto: `sempre que penso em você, fico feliz por ter ganhado mais um irmão pela vida, conta sempre comigo. feliz natal!`,
        imagem: "/image/ramon.jpg",
        assinatura: "sua hermana do peru"
    },
    {
        id: "raphael",
        nome: "raphael",
        senha: "carro",
        titulo: "raphael,",
        texto: `que 2026 realize todos seus sonhos, te traga muito amor, paz, esperança e saúde. feliz natal!`,
        imagem: "/image/raphael.jpg",
        assinatura: "duda"
    },
    {
        id: "huesny",
        nome: "huesny",
        senha: "raphael",
        titulo: "huesny,",
        texto: `te desejo muito amor, paz, saúde e esperança para 2026. feliz natal!`,
        imagem: "/image/huesny.jpg",
        assinatura: "duda"
    },
    {
        id: "padrinho",
        nome: "padrinho",
        senha: "flamengo",
        titulo: "padrinho,",
        texto: `obrigada por se fazer tão presente na minha vida e nunca deixar que me faltasse o amor e a imagem de um pai. feliz natal!`,
        imagem: "/image/padrinho.jpg",
        assinatura: "dudinha"
    },
    {
        id: "dindinha",
        nome: "dindinha",
        senha: "praia",
        titulo: "dindinha,",
        texto: `obrigada por ser essa mulher incrível que sempre foi minha maior referência de como eu quero ser quando crescer. feliz natal!`,
        imagem: "/image/dindinha.jpg",
        assinatura: "dudinha"
    },
    {
        id: "kaua",
        nome: "kaua",
        senha: "iphone",
        titulo: "kauã,",
        texto: `obrigada por marcar uma das melhores épocas da minha vida e me dar a alegria de ser irmã mais velha. tenho orgulho de você. feliz natal!`,
        imagem: "/image/kaua.jpg",
        assinatura: "duda"
    },
    {
        id: "sara",
        nome: "sara",
        senha: "cabofrio",
        titulo: "sara,",
        texto: `obrigada por cuidar com tanto carinho de quem eu amo e por ter somado tanto na nossa grande família. feliz natal!`,
        imagem: "/image/sara.jpg",
        assinatura: "duda"
    },
    {
        id: "kaiky",
        nome: "kaiky",
        senha: "joaquim",
        titulo: "kaiky,",
        texto: `obrigada por sempre trazer alegria e luz para todos os lugares onde você chega. só quem se arrisca vive o extraordinário. feliz natal!`,
        imagem: "/image/kaiky.jpg",
        assinatura: "duda"
    },
    {
        id: "morgana",
        nome: "morgana",
        senha: "madalena",
        titulo: "morgana,",
        texto: `te desejo muito amor e sucesso para 2026! que venha o tão sonhado CRM (e depois o casamento!). feliz natal!`,
        imagem: "/image/morgana.jpg",
        assinatura: "duda"
    },
    {
        id: "emma",
        nome: "emma",
        senha: "roblox",
        titulo: "emma,",
        texto: `gracias por darme la oportunidad de conocerte y verte crecer como una niña tan linda y dulce. siempre te extraño, ¡feliz navidad!`,
        imagem: "/image/emma.png",
        assinatura: "duda"
    },
    {
        id: "jeremy",
        nome: "jeremy",
        senha: "chato",
        titulo: "jeremy,",
        texto: `gracias por todo el cariño y por elegir cuidarme y ser como un hermano mayor para mi. ¡feliz navidad!`,
        imagem: "/image/jeremy.png",
        assinatura: "interrogación"
    },
    {
        id: "marlon",
        nome: "marlon",
        senha: "alianza",
        titulo: "marlon,",
        texto: `gracias por todo el cariño y por abrazar a nuestras familias como si fueran una sola. ¡feliz navidad!`,
        imagem: "/image/marlon_jessica.png",
        assinatura: "duda"
    },
    {
        id: "jessica",
        nome: "jessica",
        senha: "friends",
        titulo: "jessy,",
        texto: `gracias por todo el cariño y por ser siempre tan linda. estoy muy contenta de que ahora seamos familia. ¡feliz navidad!`,
        imagem: "/image/marlon_jessica.png",
        assinatura: "duda"
    },
    {
        id: "karina",
        nome: "karina y lulu",
        senha: "luciana",
        titulo: "karina y luciana,",
        texto: `estoy muy emocionada de conocerlas en persona y que podamos disfrutar de mucho tiempo juntas. ¡feliz navidad!`,
        imagem: "/image/lulu.png",
        assinatura: "duda"
    },
];
const hubScreen = document.getElementById('hub-screen');
const letterScreen = document.getElementById('letter-screen');
const passwordModal = document.getElementById('password-modal');
const gridCartas = document.querySelector('.grid-cartas');
const errorMsg = document.getElementById('error-msg');
const passwordInput = document.getElementById('password-input');

const cartaTitulo = document.getElementById('carta-titulo');
const cartaTexto = document.getElementById('carta-texto');
const cartaImg = document.getElementById('carta-img');
const cartaAssinatura = document.getElementById('carta-assinatura');

let cartaSelecionada = null; 

function criarEnvelopes() {
    bancoDeCartas.forEach(carta => {
        const div = document.createElement('div');
        div.className = 'mini-envelope';
        div.innerHTML = `<span class="label-nome">${carta.nome}</span>`;
        div.onclick = () => abrirModal(carta);
        gridCartas.appendChild(div);
    });
}

function abrirModal(carta) {
    cartaSelecionada = carta;
    errorMsg.classList.add('hidden');
    passwordInput.value = '';
    passwordModal.classList.remove('hidden');
    passwordInput.focus();
}

function fecharModal() {
    passwordModal.classList.add('hidden');
    cartaSelecionada = null;
}

function verificarSenha() {
    const senhaDigitada = passwordInput.value;

    if (senhaDigitada === cartaSelecionada.senha) {
        preencherCarta(cartaSelecionada);
        fecharModal();
        irParaCarta();
    } else {
        errorMsg.classList.remove('hidden');
        document.querySelector('.modal-box').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
    }
}

function preencherCarta(dados) {
    cartaTitulo.innerText = dados.titulo;
    cartaTexto.innerHTML = dados.texto; 
    cartaImg.src = dados.imagem;
    cartaAssinatura.innerText = dados.assinatura;
}

function irParaCarta() {
    hubScreen.classList.add('hidden');
    letterScreen.classList.remove('hidden');
}

function voltarParaHub() {
    document.getElementById('envelope-container')?.classList.remove('open'); 
    document.getElementById('envelope').parentElement.parentElement.classList.remove('open'); 
    
    letterScreen.classList.add('hidden');
    hubScreen.classList.remove('hidden');
}

const envelopeWrapper = document.getElementById('envelope');
const container = document.getElementById('letter-screen');

envelopeWrapper.addEventListener('click', () => {
    container.classList.add('open');
});


function createSnowflake() {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');

    const startLeft = Math.random() * window.innerWidth; 
    const size = Math.random() * 5 + 3; 
    const duration = Math.random() * 5 + 5; 
    const opacity = Math.random() * 0.5 + 0.3; 

    flake.style.left = startLeft + 'px';
    flake.style.width = size + 'px';
    flake.style.height = size + 'px';
    flake.style.opacity = opacity;
    flake.style.animationDuration = duration + 's';

    document.body.appendChild(flake);

    setTimeout(() => {
        flake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 200);

const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

audio.volume = 0.4; 

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = "🎵"; 
        musicBtn.classList.remove('paused');
    } else {
        audio.pause();
        musicBtn.innerHTML = "🔇"; 
        musicBtn.classList.add('paused');
    }
}

musicBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleMusic();
});

window.addEventListener('load', () => {
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay bloqueado pelo navegador. Aguardando interação.");
            
            document.body.addEventListener('click', function iniciarMusica() {
                audio.play();
                musicBtn.innerHTML = "🎵";
                document.body.removeEventListener('click', iniciarMusica);
            }, { once: true });
        });
    }
});

window.onload = criarEnvelopes;