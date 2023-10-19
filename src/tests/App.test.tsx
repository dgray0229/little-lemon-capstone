import { render } from "@testing-library/react";
import { expect, test } from 'vitest'

import { App } from "../App";

test("Renders the navigation", () => {
	render(<App />);
	const navElement = document.querySelector("nav");
	expect(navElement).toBeInTheDocument();
});

test("Renders the footer", () => {
	render(<App />);
	const navElement = document.querySelector("footer");
	expect(navElement).toBeInTheDocument();
});
test("Renders the menu", () => {
	render(<App />);
	const navElement = document.querySelector(".menu-container");
	expect(navElement).toBeInTheDocument();
});
test("Renders the main", () => {
	render(<App />);
	const navElement = document.querySelector("main");
	expect(navElement).toBeInTheDocument();
});
