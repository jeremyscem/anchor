import "@testing-library/jest-dom";

describe("Page", () => {
  it("renders a heading", () => {
    render(<QuizPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
