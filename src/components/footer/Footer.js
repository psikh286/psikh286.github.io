
import twitter from "../../img/twitter.svg";
import gitHub from "../../img/github.svg";
import linkedIn from "../../img/linkedin.svg";

import './footer.css';

const Footer = () => {


    return ( 
        <footer className="footer">
			<div className="footer__container">
				<div className="footer__wrapper">
					<div className="social">
						<a href="https://twitter.com/alan_berberov" target="_blank" rel="noreferrer">
							<img className="footer__icon" src={twitter} alt="Link" />
						</a>
						<a href="https://github.com/psikh286" target="_blank" rel="noreferrer">
							<img className="footer__icon" src={gitHub} alt="Link" />
						</a>
						<a href="https://www.linkedin.com/in/alan-berberov-53844027a/" target="_blank" rel="noreferrer">
							<img className="footer__icon" src={linkedIn} alt="Link" />
						</a>
					</div>
					<div className="copyright">
						<a href="mailto:alan@berberov.dev">alan@berberov.dev</a>
					</div>
				</div>
			</div>
		</footer>
     );
}
 
export default Footer;