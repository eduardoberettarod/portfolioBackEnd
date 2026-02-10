// Card.jsx
import React from 'react'
import CardItem from '../CardItem/CardItem'

const projetos = [
  {
    id: 1,
    nomeProjeto: "Sistema de Prontuário Eletrônico",
    descricaoProjeto: "Um sistema completo de prontuário eletrônico desenvolvido para facilitar o gerenciamento de informações de alunos por professores. O sistema oferece recursos avançados para registro, organização e acesso rápido aos dados dos estudantes.",
    link: "https://pi-prontuario-eletronico.vercel.app/",
    ano: "2025 — 2026",
    github: "https://github.com/eduardoberettarod/PI-prontuario-eletronico",
    tags: ["React", "CSS", "JS"],
    img: "/image/cyberlab/cyberlab.png",
    imgLogo: "/image/cyberlab/cyberlabLogo.svg"
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
]

const Card = () => {
  return (
    <div className="cards-container">
      {projetos.map((p) => (
        <CardItem key={p.id} projeto={p} />
      ))}
    </div>
  )
}

export default Card
