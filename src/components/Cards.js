import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Take a look at these tasty desserts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           {/* lemon mar */}
           <CardItem
              src='../images/lemonM.jpg'
              text='Lemon Meringue Pie!'
              label='Maybe Price?'
              path='/services'
            />
            {/* deserst 2 */}
            <CardItem
              src='../images/cookieCake.jpg'
             text='Cookie cake!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/services'
            />
          </ul>
            {/* dessert 3 */}
          <ul className='cards__items'>
            <CardItem
              src='../images/reesesCookie.jpg'
             text='Reeses Peanut Butter Cookies!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/services'
            />
            {/* dessert 4 */}
            <CardItem
              src='...'
              text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/Products'
            />
            {/* dessert 5  */}
            <CardItem
              src='...'
              text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;