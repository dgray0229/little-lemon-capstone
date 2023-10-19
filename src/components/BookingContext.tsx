import React, { createContext, useMemo, useReducer } from 'react';

export interface IBookingContextProps {
    children: React.ReactNode;
}

interface Reservation {
    date: string;
    times: string;
    guests: string;
    occasion: string;
    submitted: boolean;
    availableTimes: string[];
}
interface BookingValue extends Reservation {
    dispatch: React.Dispatch<Action>;
}

interface Action {
    type: ActionType;
    payload: unknown;
}

export enum ActionType {
    DATE = 'DATE',
    TIME = 'TIME',
    GUESTS = 'GUESTS',
    OCCASION = 'OCCASION',
    SET_TIMES = 'SET_TIMES',
    SET_GUESTS = 'SET_GUESTS',
    SUBMIT_FORM = 'SUBMIT_FORM',
    FETCH_RESERVATIONS = 'FETCH_RESERVATIONS',
}

const initialState: Reservation = {
    date: '',
    times: '',
    guests: '',
    occasion: '',
    submitted: false,
    availableTimes: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
};

function reducer(reservation: Reservation, action: Action): Reservation {
    switch (action.type) {
        case ActionType.SET_TIMES:
            return { ...reservation, times: action.payload } as Reservation;
        case ActionType.SET_GUESTS:
            return { ...reservation, guests: action.payload } as Reservation;
        case ActionType.SUBMIT_FORM:
            return { ...reservation, submitted: true } as Reservation;
        default:
            return reservation;
    }
}

export const BookingContext = createContext({} as BookingValue);

export function BookingProvider ({ children }: IBookingContextProps) {
    const [reservation, dispatch] = useReducer<React.Reducer<Reservation, Action>>(reducer, initialState);
    const bookingValue: BookingValue = useMemo(() => ({ ...reservation, dispatch }), [reservation]);

    return (
        <BookingContext.Provider value={bookingValue}>
            {children}
        </BookingContext.Provider>
    );
}

