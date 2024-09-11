import twitter from "../../img/linkLogos/twitter.svg";
import gitHub from "../../img/linkLogos/github.svg";
import linkedIn from "../../img/linkLogos/linkedin.svg";

import './footer.css';

const Footer = () => {


    return ( 
        <footer className="footer">
			<div className="footer_socials">
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
			<a className="footer__email" href="mailto:alan@berberov.dev">alan@berberov.dev</a>
		</footer>
     );
}
 
export default Footer;