import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ActionType, BookingContext } from './BookingContext';

export function BookingForm () {
  const { dispatch, ...reservation } = useContext(BookingContext);
  const navigate = useNavigate();
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    dispatch({type: ActionType.SUBMIT_FORM});
  }
  useEffect(() => {
    if (reservation.submitted) {
      navigate('/confirmed');
      dispatch({type: ActionType.RESET});
    }
  }, [dispatch, navigate, reservation.submitted]);
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose Date</label>
            <input id="book-date" value={reservation.date} type='date' required onChange={(e) => dispatch({ type: ActionType.SET_DATE, payload: e.target.value })} />
          </div>
          <div>
            <label htmlFor="book-time">Choose Time</label>
            <select id="book-time" value={reservation.times} onChange={(e) => dispatch({ type: ActionType.SET_TIMES, payload: e.target.value })}>
              {
                reservation.availableTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="book-guests">Number of Guests</label>
            <input id="book-guests" value={reservation.guests} type='number' min="1" max="8" required onChange={(e) => dispatch({ type: ActionType.SET_GUESTS, payload: e.target.value })} />
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion</label>
            <select id="book-occasion" value={reservation.occasion} onChange={(e) => dispatch({ type: ActionType.SET_TIMES, payload: e.target.value })}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="date">Date</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='btnReceive'>
            <input type='submit' aria-label="submit" value='Make Your Reservation' />
          </div>
        </fieldset>
      </form>

    </section>
  );
}
