import { Link } from "react-router-dom"; 
import bannerImg from '../assets/images/restaurantfood.jpg';
export interface IHeaderProps {
}

export function Header () {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button aria-label='Reserve a Table'>Reserve Table</button>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt="A waiter holding a tray of food." />
                </div>
            </section>
        </header>
    );
}
