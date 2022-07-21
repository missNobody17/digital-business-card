import './Info.css';
import girl from '../assets/card.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Info() {
  return (
    <div className="info">
        <img src={girl} className="info--image"/>
        <div className='info-container'>
            <h1 className="info--title">Abbey Aveline</h1>
            <h5 className='info--job'>Frontend Developer</h5>
            <p className='info--website'>abbey.website</p>
            <button className='info--button'><FontAwesomeIcon icon={faEnvelope} /> Email</button>
        </div>
    </div>
  )
}
