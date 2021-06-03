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

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Sort of Cards
      </div>
      <div className={classes.list}>
        {
          cardsList.map(card =>
              <div className={classes.card}>
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
