const INITIAL_STATE={
    sections:[{
        title: 'Vegetable Section',
        imageUrl: 'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'Meat',
        imageUrl: 'https://images.pexels.com/photos/5774154/pexels-photo-5774154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'Beverage',
        imageUrl: 'https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'Breads',
        imageUrl: 'https://images.pexels.com/photos/2227775/pexels-photo-2227775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'Dairy',
        imageUrl: 'https://media.istockphoto.com/photos/various-fresh-dairy-products-picture-id544807136',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export default directoryReducer;