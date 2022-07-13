
import logo from '../../recursos/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/henrique-alves-20a241241/">Henrique Alves</a>
                </p>
            </div>
        </header>
    )

}

export default Header
