import React from 'react';
import { findByRole, findByTestId, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe("First test check", () => {
	test("Test whether true is true", () => {
		expect(true).toEqual(true);
	});
});

describe("Counter App", () => {
	test("Is all elements are there? ", async () => {
		const {findByTestId, queryByText } = render(<App/>);

		const count = await findByTestId("count-value");
		const decButton = queryByText("Decrement");
		const incButton = queryByText("Increment");

		expect(count).toBeInTheDocument();
		expect(incButton).toBeInTheDocument();
		expect(decButton).toBeInTheDocument();
	});

	test("Increament counter. ", async() => {
		const {findByTestId, queryByText } = render(<App/>);

		const count = await findByTestId("count-value");
		const incButton = queryByText("Increment");

		const currentValue = parseInt(count?.textContent || "");

		if (incButton) {
			fireEvent.click(incButton);
		}

		expect(count).toHaveTextContent((currentValue + 1).toString());
	});

	test("Decreament counter. ", async () => {
		const {findByTestId, queryByText } = render(<App/>);

		const count = await findByTestId("count-value");
		const decButton = queryByText("Decrement");

		const currentValue = parseInt(count?.textContent || "");

		if (decButton) {
			fireEvent.click(decButton);
		}

		expect(count).toHaveTextContent((currentValue - 1).toString());
	});
});

