import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export function Menu () {
  const [recipes, setRecipes] = useState([]);

  function handleOrder(id: string) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "All our items are delicious, we just want to make sure you want this one!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#495e57',
      cancelButtonColor: '#d44545',
      confirmButtonText: 'Yes, order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Ordered!',
          'Your order is processing.',
          'success'
        )
      }
    })

  }
  async function fetchRecipes () {
    try {
      const response = await fetch('/recipes.json');
      const data = await response.json();
      setRecipes(data);
    }
    catch(error: unknown) {
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
      </div>
      <div className='cards'>
        {recipes && recipes.map(({ id, image, title, name, description, price }) => (
          <div className='menu-items' key={id}>
            <img src={image} alt={name} />
            <div className='menu-content'>
              <div className='heading'>
                <h3>{title}</h3>
                <p>{price}</p>
              </div>
              <p>{description}</p>
              <button className='order-button' onClick={() => handleOrder(id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

