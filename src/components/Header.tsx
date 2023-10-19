import { Link } from "react-router-dom";
import bannerImg from '../assets/images/restaurantfood.jpg';

export function Header () {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" role="button"><button data-testid="reservation-button">Reserve Table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt="A waiter holding a tray of food." />
                </div>
            </section>
        </header>
    );
}
