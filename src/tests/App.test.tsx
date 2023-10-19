import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from 'vitest'
import userEvent from "@testing-library/user-event";
import { App } from "../App";

test("Renders the Header heading", () => {
	render(<App />);
	const headingElement = screen.getByText("Reserve Table");
	expect(headingElement).toBeInTheDocument();

	const reserveButton = screen.getByTestId("reservation-button");
	fireEvent.click(reserveButton);

	const headingElementNew = screen.getByText("Choose Date");
	expect(headingElementNew).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
	render(<App />);
	const reserveButton = screen.getByTestId("reservation-button");
	fireEvent.click(reserveButton);

	const timeInput = screen.getByLabelText("Choose Time");
	expect(timeInput).toBeInTheDocument();

});

test("Initialize/Update Date", () => {
	render(<App />);
	const reserveButton = screen.getByTestId("reservation-button");
	fireEvent.click(reserveButton);

	const dateInput = screen.getByLabelText("Choose Date");
	userEvent.type(dateInput, "2021-10-10");
	expect(dateInput).toHaveValue("2021-10-10");
});

test("Initialize/Update Occasion", () => {
	render(<App />);
	const reserveButton = screen.getByTestId("reservation-button");
	fireEvent.click(reserveButton);

	const occasionInput = screen.getByLabelText("Occasion");
	expect(occasionInput).toBeInTheDocument();
});

test("Initialize/Update Guests", () => {
	render(<App />);
	const reserveButton = screen.getByTestId("reservation-button");
	fireEvent.click(reserveButton);

	const guestInput = screen.getByLabelText("Number of Guests");
	userEvent.type(guestInput, "3");
	expect(guestInput).toHaveValue("3");
});