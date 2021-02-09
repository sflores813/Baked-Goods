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
            <CardItem
              src='../img/lemonM.jpg'
              text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/products'
            />
            <CardItem
              src='...'
             text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../imgs/lemonM.jpg'
             text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/products'
            />
            <CardItem
              src='...'
              text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/products'
            />
            <CardItem
              src='...'
              text='enter a dessert!'
              label='depends on what kind of dessert (cake,pie,cookie)'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;