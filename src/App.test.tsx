import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

/* 
Type of Query	|  0 Matches  |	1 Match |	>1 Matches | Retry (Async/Await)

getBy...	    | error |	Return ele | Throw error | No
queryBy...	  | null	Return element	Throw error	No
findBy...	    |Throw error	Return element	Throw error	Yes
Multiple Elements				
getAllBy...	  |Throw error	Return array	Return array	No
queryAllBy...	|Return []	Return array	Return array	No
findAllBy...	|Throw error	Return array	Return array	Yes
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("First test check", () => {
	test("Test whether true is true", () => {
		expect(true).toEqual(true);
	});
});

describe("Counter App", () => {
	// Render any react component
	const {queryByTestId, queryByRole, queryByText } = render(<App/>);

	// Get element which has "data-testid" attribute value
	const count = queryByTestId("count-value"); 
	// Get button element which has "name" attribute value
	const incButton = queryByRole("button", {name: "/increment/"});
	const decButton = queryByText("/decrement/");

	test("Is all elements are there? ", () => {
		expect(count).toBeInTheDocument();
		expect(incButton).toBeInTheDocument();
		expect(decButton).toBeInTheDocument();
	});

	test("Increament counter. ", () => {
		const currentValue = parseInt(count?.textContent || "");

		if (incButton) {
			fireEvent.click(incButton);
		}

		expect(count).toHaveTextContent((currentValue + 1).toString());
	});

	test("Decreament counter. ", () => {
		const currentValue = parseInt(count?.textContent || "");

		if (incButton) {
			fireEvent.click(incButton);
		}

		expect(count).toHaveTextContent((currentValue - 1).toString());
	});

});

