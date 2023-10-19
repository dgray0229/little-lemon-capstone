import { useEffect, useState, lazy } from 'react';

export interface IMenuProps {
}

export function Menu () {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes () {
    try {
      const response = await fetch('../recipes.json');
      const data = await response.json();
      setRecipes(data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className='menu-container'>
      <div>
        <h2>This weeks specials!</h2>
        <button>Order Now</button>
      </div>
      <div className='cards'>
        {recipes.map(({ id, image, title, name, description, price }) => (
          <div className='menu-items' key={id}>
            <img src={image} alt={name} />
            <div className='menu-content'>
              <div className='heading'>
                <h3>{title}</h3>
                <p>{price}</p>
              </div>
              <p>{description}</p>
              <button className='order-button'>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

