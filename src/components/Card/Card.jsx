import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLocation } from 'react-router-dom'
import CardItem from '../CardItem/CardItem'

gsap.registerPlugin(ScrollTrigger);

const projetos = [
  {
    id: 1,
    nomeProjeto: "Sistema de Prontuário Eletrônico",
    descricaoProjeto: "Um sistema completo de prontuário eletrônico desenvolvido para facilitar o gerenciamento de informações de alunos por professores. O sistema oferece recursos avançados para registro, organização e acesso rápido aos dados dos estudantes.",
    link: "https://pi-prontuario-eletronico.vercel.app/",
    ano: "2025 — 2026",
    github: "https://github.com/eduardoberettarod/PI-prontuario-eletronico",
    tags: ["React", "CSS", "JS"],
    img: "/image/prontuario/prontuario-eletronico.png",
    imgLogo: "/image/prontuario/prontuario-eletronicoLogo.svg"
  },

  {
    id: 2,
    nomeProjeto: "Portfólio V1",
    descricaoProjeto: "Uma landing page de portfolio pessoal criada para apresentar projetos e habilidades. Esta versão inicial demonstra conhecimentos em desenvolvimento front-end com foco em design responsivo e experiência do usuário.",
    link: "https://portfolio-eb-react.vercel.app/",
    ano: "2025",
    github: "https://github.com/eduardoberettarod/Portfolio-EB-react",
    tags: ["React", "CSS", "JS"],
    img: "/image/portfolio/portfolio.png",
    imgLogo: "/image/portfolio/portfolioLogo.svg"
  },

  {
    id: 3,
    nomeProjeto: "Pokédex Simples",
    descricaoProjeto: "Uma landing page de portfolio pessoal criada para apresentar projetos e habilidades. Esta versão inicial demonstra conhecimentos em desenvolvimento front-end com foco em design responsivo e experiência do usuário.",
    link: "https://aula-react-pokemon.vercel.app/",
    ano: "2025",
    github: "https://github.com/eduardoberettarod/aula-react-pokemon",
    tags: ["React", "CSS", "JS"],
    img: "/image/pokemon/pokemon.png",
    imgLogo: "/image/pokemon/pokemonLogo.png"
  },

  {
    id: 4,
    nomeProjeto: "CyberLab",
    descricaoProjeto: "Uma landing page de portfolio pessoal criada para apresentar projetos e habilidades. Esta versão inicial demonstra conhecimentos em desenvolvimento front-end com foco em design responsivo e experiência do usuário.",
    link: "https://aula-react-pokemon.vercel.app/",
    ano: "2025",
    github: "https://github.com/eduardoberettarod/aula-react-pokemon",
    tags: ["React", "CSS", "JS"],
    img: "/image/cyberlab/cyberlab.png",
    imgLogo: "/image/cyberlab/cyberlabLogo.svg"
  }

]


const Card = () => {

  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils.toArray(".card-project").forEach((card) => {

        gsap.from(card, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "sine.out",

          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          }
        });

      });

    }, containerRef);

    return () => ctx.revert();

  }, [location.pathname]);

  return (
    <div className="row g-4" ref={containerRef}>
      {projetos.map((p) => (
        <div
          key={p.id}
          className="col-12 col-md-6 col-lg-4 cards-project"
        >
          <CardItem projeto={p} />
        </div>
      ))}
    </div>
  )
}

export default Card
