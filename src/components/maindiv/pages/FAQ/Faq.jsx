import React from 'react';
import './faq.css';
import Quest from './Quest';
import { Question1, Question2, Question3, Question4, Question5, Question6 } from '../../../../Constance';
function Faq() {
  return (
    <div className='faq fullwidth'>
      <h1>Frequently Asked Questions</h1>
      <Quest Question={Question1}/>
      <Quest Question={Question2} />
      <Quest Question={Question3} />
      <Quest Question={Question4} />
      <Quest Question={Question5} />
      <Quest Question={Question6} />


    </div>
  )
}

export default Faq
