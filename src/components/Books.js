import React,{useRef,useLayoutEffect} from 'react';
import napoleon from '../img/napoleon.jpg'
import wiedzmin from '../img/wiedzmin.jpg'
import harry from '../img/harry.jpg'
import wladca from '../img/wladca.jpg'

function Books() {
  useLayoutEffect(()=>{
    bookRef.current.style.height=window.innerHeight+"px"
  })
  const bookRef=useRef()


  return <div className="bookContainer" ref={bookRef}>
      <h1 className="h1TitleBook">Hi this page is dedicated to my favourites books </h1>
      <div className="bookExample" style={{marginTop:"5%"}}>
        <img src={napoleon} className="bookImg" alt="book1"></img>
        <div className="describe">
         <h2 className="titleBook" style={{marginLeft:"1%"}}> Outwitting the Devil</h2>
         <p className="describeBook" style={{marginLeft:"1%"}}>Napoleon Hill wrote this book in 1938, just after publication of his all-time bestseller, Think and Grow Rich. This powerful tale has never been published, considered too controversial by his family and friends.
Using his legendary ability to get to the root of human potential, Napoleon Hill digs deep to identify the greatest obstacles we face in reaching personal goals: fear, procrastination, anger, and jealousy, as tools of the Devil. These hidden methods of control can lead us to ruin, and Hill reveals the seven principles of good that will allow us to triumph over them and succeed.


Annotated and edited for a contemporary audience by Rich Dad, Poor Dad and Three Feet from Gold co-author Sharon Lechter, this book is profound, powerful, resonant, and rich with insight</p>
</div>
      </div>
      <div className="bookExample" style={{marginTop:"5%"}}>
        <img src={wiedzmin} className="bookImg" alt="book1"></img>
        <div className="describe">
         <h2 className="titleBook" style={{marginLeft:"1%"}}>Blood of Elves</h2>
         <p className="describeBook" style={{marginLeft:"1%"}}>I’m a Witcher: an artificially created mutant. I kill monsters for money. I defend children when their parents pay me to. If Nilfgaardian parents pay me, I’ll defend Nilfgaardian children. And even if the world lies in ruin – which doesn’t seem likely to me – I’ll carry on killing monsters in the ruins of this world until some monster kills me. That is my fate, my reason, my life and my attitude to the world.’</p>
</div>
      </div>
      <div className="bookExample" style={{marginTop:"5%"}}>
        <img src={harry} className="bookImg" alt="book1"></img>
        <div className="describe">
         <h2 className="titleBook" style={{marginLeft:"1%"}}>Harry Potter and the Philosopher's Stone</h2>
         <p className="describeBook" style={{marginLeft:"1%"}}>Harry Potter and the Philosopher’s Stone by J. K. Rowling is a book about bravery and courage. As Professor Albus Dumbledore, the Headmaster at Hogwarts School of Witchcraft and Wizardry, says “It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”</p>
</div>
      </div>
      <div className="bookExample" style={{marginTop:"5%"}}>
        <img src={wladca} className="bookImg" alt="book1"></img>
        <div className="describe">
         <h2 className="titleBook" style={{marginLeft:"1%"}}>The Lord of the Rings: The Two Towers</h2>
         <p className="describeBook" style={{marginLeft:"1%"}}>Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria; and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs.

Now they continue their journey alone down the great River Anduin – alone, that is, save for the mysterious creeping figure that follows wherever they go.

To celebrate the release of the first of Peter Jackson’s two-part film adaptation of The Hobbit, THE HOBBIT: AN UNEXPECTED JOURNEY, this second part of The Lord of the Rings is available for a limited time with an exclusive cover image from Peter Jackson’s award-winning trilogy.</p>
</div>
      </div>
    <div className="footer"></div>
  </div>;
}

export default Books;
