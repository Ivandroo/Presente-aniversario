
import imagem1 from '../assets/imagem1.jpeg'
import imagem2 from '../assets/imagem2.jpeg'
import imagem3 from '../assets/imagem3.jpeg'
import imagem4 from '../assets/imagem4.jpeg'
import imagem5 from '../assets/imagem5.jpeg'

import { Sparkles, Smile, Compass, BookOpen, Heart } from 'lucide-react';

export default function Menu() {

    const mensagens = [
        {
            de: "Toya Costa",
            texto: "Feliz aniversário🎊🥳 minha madrinha,que Deus te abençoe e te protege sempre que possas alcançar todos os teus objectivos, amo-te muitooooooo...❤️"
        },
        {
            de: "K7",
            texto: "Minha querida irmã, na verdade tia, mas a relação que temos é de irmãos, o amor que eu tenho por ti não está escrito, tenho-te como um espelho na minha vida, apesar das discussões, nos desentendimentos, sempre serás esta pessoa maravilhosa que eu amo, a pessoa que eu sempre vou stressar no meu dia-a-dia, amo-te muito meu amor, minha pilha, continues assim com este espírito, continues a ser esta mulher inteligente, e que não gosta de ser dependente de ninguém, amo-te, Ana.❤️"
        },
        {
            de: "Camila Comilona",
            texto: "Feliz aniversário, Ana!! (emoji de felicitação)❤️"
        },
        {
            de: "Mosquito",
            texto: "Foste a melhor pessoa que eu conheci em toda a minha vida, palavras me faltam para descrever o quão grato sou por conhecer-te. Desejo tudo de bom em tua vida, muita paz (para eu poder tirar) e saúde acima de tudo... É com grande ânimo que ecrevo este texto para te felicitar pelos 18 anos, pois, a partir de hoje, começa uma nova jornada na tua vida, espero que possamos caminhar juntos e que eu possa fazer fazer parte dos teus próximos 100 aniversários, (100 anos a te irritar? Bem fixe ya). Feliz aniversário, minha leitora favorita!!❤️"
        },
        {
            de: "Lissinha",
            texto: "Flores soltas ao vento. O amor pesa no peito.O teu sorriso é como o norte; com ele, nunca me perco.O teu amor não só me deu coragem, como também me fez desistir de pular do barco.Toda a angústia agora não passa de um barco naufragado, esquecido nas profundezas do oceano. Quem diria... A amizade é realmente tudo isso. Tudo de que eu precisava. Hoje, não tenho mais medo. Tenho com quem contar, e isso também vale para ti. Serei sempre mais uma a ajudar. E, na imensidão do mundo, saiba que, enquanto eu estiver aqui, sempre terás um lugar para onde voltar. Um lar... Não é isso que a amizade é? Casa, às vezes, é uma pessoa. Saiba que a minha sempre estará à tua espera, de portas abertas para te receber."
        }
    ]

    return (
        <div className="menu-container">

            <div className="menu-content">
                <div className="sobre-content">
                    <div className="sobre-content-text">
                        <span> <Sparkles /> Perfil especial</span>
                        <h1>Sobre a Aniversariante</h1>
                        <p>Ana Vissolela Vicente é uma menina muito especial (sem ser autista), é uma menina que carrega um sorriso muito lindo, empática, de boa energia e que sempre procura o melhor de nós. Muito devemos à ela pelas imensas coisas que ela já fez por nós. Uma menina Linda, inteligente, de coração puro (talvez não muito) e acima de tudo, muito forte...</p>
                    </div>
                    <div className="sobre-content-boxes">
                        <div className="sobre-content-box">
                            <h2> <Smile className='icon' /> Gostos e Preferências</h2>
                            <p>Livros</p>
                            <p>Músicas</p>
                            <p>Hambúrguer</p>
                            <p>Salgadinhos</p>
                            <p>Espelho</p>
                            <p>Praia / Mar</p>
                            <p>Natureza</p>
                            <p>Ouvir música dos cientes</p>
                        </div>
                        <div className="sobre-content-box">
                            <h2> <Compass className='icon'/> Sonhos e Metas</h2>
                            <p>Conhecer França</p>
                            <p>Viajar pelo mundo</p>
                            <p>Ter dois filhos e um caxico</p>
                            <p>Ser CEO de uma empresa</p>
                            <p>Ter uma biblioteca</p>
                        </div>
                        <div className="sobre-content-box">
                            <h2><BookOpen className='icon'/> Artistas e Personagens</h2>
                            <p>Freida McFadden</p>
                            <p>Billie Eilish</p>
                            <p>Dope Music</p>
                            <p>SEKETXE</p>
                            <p>Xaden</p>
                            <p>Kellan</p>
                            <p>John</p>
                        </div>
                    </div>
                </div>

                <div className="galeria-content">
                    <div className="galeria-content-title">
                        <h2>Galeria de fotos</h2>
                    </div>
                    <div className="galeria-content-boxes">
                        <div className="galeria-content-box">
                            <img src={imagem1} alt="Foto 1" />
                            <p>" Essa miúda é lindaa!..."</p>
                        </div>
                        <div className="galeria-content-box">
                            <img src={imagem2} alt="Foto 2" />
                            <p>" Eu não sei se é fanatismo..."</p>
                        </div>
                        <div className="galeria-content-box">
                            <img src={imagem3} alt="Foto 3" />
                            <p>" Olhos castanhos, pele escura... (ela é mulata, fam)"</p>
                        </div>
                        <div className="galeria-content-box">
                            <img src={imagem4} alt="Foto 4" />
                            <p>" Para mudar o teu dia, just give me a few seconds..."</p>
                        </div>
                        <div className="galeria-content-box">
                            <img src={imagem5} alt="Foto 5" />
                            <p>" Meu pedaço de céu..." </p>
                        </div>
                    </div>
                    
                </div>
                <div className="mensagens-container">
                    <div className="galeria-content-title">
                        <h2>Mensagens especiais</h2>
                    </div>
                    <div className="mensagens-content">
                        {mensagens.map((index, key) => {
                            return (
                                <div className="mensagens-content-box">
                                    <div key={key} className="mensagens-content-title">
                                        <h2><Heart className='icon'/> De: {index.de} </h2>
                                    </div>
                                    <div className="mensagens-content-text">
                                        <p>{index.texto}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div className="frases-content">
                    <div className="frases-content-box">
                        <div className="frases-content-title">
                            <h2> <Heart className='icon' /> Dedicatória <Heart /></h2>
                        </div>
                        <div className="frases-content-text">
                            <p>Dedico este site para ela que é uma das pessoas mais importantes para mim, aquela pessoa que mais amo, porque simplesmente é inefavel o bem que ela faz para mim, sua forma de ser, sua forma de agir, sua honestidade, sinceridade e brincadeiras que acabam nos conquistando, mostrando que ela é um ser de bom coração (apesar de uns gostos duvidosos). Ana é o tipo de pessoa que não nos arrependemos de ter conhecido. Uma menina cheia de sonhos, desejos e metas, determinada, e quando quer algo, hahaha, azar de quem dizer contra. Apesar de tudo, é uma pessoa muito especial nas nossas vidas. Espero que Deus te abençoe muito e que possas atingir teus objetivos, realizar teus sonhos e chegar onde queres chegar. Saiba que eu te amo muito, com carinho: <span>Mosquito!!</span> </p>
                        </div>
                        {/* <div className="frases-content-buttons">
                            <button className="frases-content-button">
                                <ArrowLeft />
                            </button>
                            <button className="frases-content-button">
                                <ArrowRight />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}