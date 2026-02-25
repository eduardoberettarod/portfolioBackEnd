import { useRef, useEffect } from "react"
import gsap from "gsap"
import "./Loader.css"
import Logo from "/image/logo-white.svg"

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null)
    const logoRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete()
            }
        })


        gsap.set(textRef.current,
            { opacity: 0 })

        gsap.set(logoRef.current,
            {
                opacity: 0,
                x: 0
            })

        // 1️⃣ Logo aparece no centro
        tl.to(logoRef.current, {
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
        })

        // 2️⃣ Pequena pausa
        tl.to({}, { duration: 0.6 })

                tl.to(
            logoRef.current,
            {
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            },
            "<"
        )

        // 3️⃣ Nome entra da direita
        tl.fromTo(
            textRef.current,
            { x: 100 },
            {
                x: -67.5,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        )

        // 5️⃣ Pequena pausa
        tl.to({}, { duration: 1 })

        tl.call(() => {
            if (onComplete) onComplete()
        })

        // 6️⃣ Fade out geral
        tl.to(loaderRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })

    }, [onComplete])

    return (
        <div className="loader-container" ref={loaderRef}>
            <div className="loader-content">
                <img ref={logoRef} src={Logo} alt="Logo" />
                <span ref={textRef}>Eduardo Beretta</span>
            </div>
        </div>
    )
}

export default Loader