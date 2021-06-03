import React, {useState} from 'react';
import classes from './SortCards.module.css'

const SortCards = () => {

  const [cardsList, setCardsList] = useState(
    [
      {id:1, order: 3, text: '3'},
      {id:2, order: 1, text: '1'},
      {id:3, order: 2, text: '2'},
      {id:4, order: 4, text: '4'},
    ]
  )

  const [draggableCard, setDraggableCard] = useState(null)


  function dragStartHandler(e, card) {
    console.log('start', card)
    setDraggableCard(card)
  }

  function dragEndHandler(e) {
    e.target.style.backgroundColor = '#adb5bd'
  }

  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.backgroundColor = '#6c757d'
  }

  function dropHandler(e, card) {
    e.preventDefault()
    console.log(' drop', card)
    e.target.style.backgroundColor = '#adb5bd'

    setCardsList(cardsList.map((curCard)=>{
      if (curCard.id === card.id) {
        return {...curCard, order: draggableCard.order}
      }
      if (curCard.id === draggableCard.id) {
        return {...curCard, order: card.order}
      }
      return curCard
    }))
  }

  const sortCards = (a, b) => {
    if ( a.order > b.order ) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Sort of Cards
      </div>
      <div className={classes.list}>
        {
          cardsList.sort(sortCards).map(card =>
            <div
              key={card.id}
              className={classes.card}
              draggable={true}
              onDragStart={(e)=>{dragStartHandler(e, card)}}
              onDragLeave={(e)=>{dragEndHandler(e)}}
              onDragEnd={(e)=>{dragEndHandler(e)}}
              onDragOver={(e)=>{dragOverHandler(e)}}
              onDrop={(e)=>{dropHandler(e, card)}}
            >
              <div>
                Card
              </div>
              <div>
                {card.text}
              </div>
            </div>
          )
        }

      </div>


    </div>
  );
};

export default SortCards;
