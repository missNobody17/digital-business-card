import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <div className="footer">
        <div className='footer--item-container'>
            <FontAwesomeIcon className='footer--icon' icon={faTwitter} />
            <FontAwesomeIcon className='footer--icon' icon={faFacebook} />
            <FontAwesomeIcon className='footer--icon' icon={faInstagram} />
            <FontAwesomeIcon className='footer--icon' icon={faLinkedin} />
            <FontAwesomeIcon className='footer--icon' icon={faGithub} />
        </div>
    </div>
  )
}