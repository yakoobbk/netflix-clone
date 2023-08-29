import React, {useState} from 'react'
import Ans from './Ans';
import { Question1 ,Question2, Question3, Question4, Question5, Question6 } from '../../../../Constance';
function Quest({Question}) {
    let p1;
    let p2;
  
    switch (Question) {
      case Question1:
             p1= "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.";
             p2= "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
        break;
      case Question2:
         p1= "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.";
         p2= ""
          break;
      case Question3:
         p1= "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
         p2= "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
        break;
      case Question4:
         p1= "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
         p2= ""
           break;
      case Question5:
        p1= "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
        p2= ""
          break;
      case Question6:
         p1= "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.";
         p2= "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
          break;
             
       default :
        p1= "hello world";
        p2= "hello p2";    
     
      
    }
    const[val, setVal] =useState(false)

    const toggleVal= ()=>{
     setVal(!val)
    }
  return (
    <div className='qa-wrapper'>
     <div className='q-style' onClick={toggleVal}> 
    <h2>{Question}</h2>
     <span>+</span>

    </div>


     {val ? <Ans   p1={p1} p2={p2} /> : ""}
  
    </div>
  )
}

export default Quest
