import React from 'react';

function Content() {
  return (
    <>
      <div className="pl-40 pr-40 pt-20 pb-20">
        <div className="flex gap-10">
          <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" className="w-full" />
          <span>
            <h1>About Catering</h1>
            <h2>Tradition since 1889</h2>
            <p>
              The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We only use seasonal ingredients.
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </span>
        </div>
        <hr />
        <div className="pl-40 pr-40 pt-20 pb-20">
          <div className="flex gap-10">
            <div className='mt-10'>
              <h1>Our Menu</h1>
              <span className='mt-30'><h1>Bread Basket</h1>
              <p className='mt-10'>Assortment of fresh baked fruit breads and muffins 5.50</p>
              </span>
              <span className='mt-30'><h1>Honey Almond Granola with Fruits</h1>
              <p className='mt-10'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
              </span>
              <span className='mt-30'><h1>Belgian Waffle</h1>
              <p className='mt-10'>Vanilla flavored batter with malted flour 7.50</p>
              </span>
              <span className='mt-30'><h1>Scrambled eggs</h1>
              <p className='mt-10'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
              </span>
              <span className='mt-30'><h1>Blueberry Pancakes</h1>
              <p className='mt-10'>With syrup, butter and lots of berries 8.50</p>
              </span>
            </div>
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
