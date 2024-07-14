import "./Footer.css"

const Footer = (props) =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.twitter.com/joselmuziotti" target="blank">
                <img src="/img/rrss/x.png" alt="X (Twitter)" />
            </a>
            <a href="https://www.github.com/joselmuziotti" target="blank">
                <img src="/img/rrss/github.png" alt="Github" />
            </a>
            <a href="https://discordapp.com/users/joselmuziotti" target="blank">
                <img src="/img/rrss/discord.png" alt="Discord" />
            </a>
            <a href="mailto:joselmuziotti@gmail.com?subject=Hola!%20trabajemos%20juntos.%20=)&body=Me%20gustaria%20trabajar%20contigo%20en%20mi%20proyecto." target="blank">
                <img src="/img/rrss/gmail.png" alt="Gmail" />
            </a>
            <a href="https://wa.me/56962290260?text=Hola!%20trabajemos%20juntos.%20=)" target="blank">
                <img src="/img/rrss/whatsapp.png" alt="Whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/joselmuziotti/" target="blank">
                <img src="/img/rrss/linkedin.png" alt="LinkedIn" />
            </a>
        </div>
            <img src="/img/Logo.png" alt="Org" />
            <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer;