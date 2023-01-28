import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays informations about the repository", () => {
  const repositories = {
    language: "Javascript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repositories}/>);

  for (let key in repositories) {
    const value = repositories[key]
    const element = screen.getByText(new RegExp(value))
    expect(element).toBeInTheDocument();
  }
});
