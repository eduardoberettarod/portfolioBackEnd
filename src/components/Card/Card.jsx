import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLocation } from 'react-router-dom'
import CardItem from '../CardItem/CardItem'
import projetos from './dados/dados.json'

gsap.registerPlugin(ScrollTrigger);

const Card = () => {

  const containerRef = useRef(null)
  const location = useLocation()

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils.toArray(".card-project").forEach((card) => {

        gsap.from(card, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "sine.out",

          scrollTrigger: {
            trigger: card,
            start: "top 82%",
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