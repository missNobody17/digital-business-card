import { About } from './About';
import './Card.css'
import {Info} from './Info';
import {Interest} from './Interest';
import { Footer } from './Footer';

export function Card() {
  return (
    <div className="card">
      <Info/>
      <Interest/>
      <About/>
      <Footer/>
    </div>
  )
}

