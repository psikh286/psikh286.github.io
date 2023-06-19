
import twitter from "../../img/twitter.svg";
import gitHub from "../../img/github.svg";
import linkedIn from "../../img/linkedin.svg";

import './footer.css';

const Footer = () => {


    return ( 
        <footer className="footer">
			<div className="footer__container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://twitter.com/alan_berberov" target="_blank" rel="noreferrer">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/psikh286" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/alan-berberov-53844027a/" target="_blank" rel="noreferrer">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<a href="mailto:info@berberov.dev">info@berberov.dev</a>
					</div>
				</div>
			</div>
		</footer>
     );
}
 
export default Footer;