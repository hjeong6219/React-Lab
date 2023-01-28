import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

function renderComponent() {
  const repositories = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: {
      login: "facebook",
    },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repositories} />
    </MemoryRouter>
  );

  return { repositories };
}

test("shows a link to the github homepage", async () => {
  const { repositories } = renderComponent();

  await screen.findByRole("img", { name: "Javascript" });

  const link = screen.getByRole("link", {
    name: /github repository/i,
  });
  expect(link).toHaveAttribute("href", repositories.html_url);
});

test("shows a file icon with the appropriate icon", async () => {
  const { repositories } = renderComponent();

  const icon = await screen.findByRole("img", { name: "Javascript" });
  expect(icon).toHaveClass("js-icon");
});

test("shows a link to the code editor page", async () => {
  const { repositories } = renderComponent();

  await screen.findByRole("img", {
    name: "Javascript",
  });
  const link = await screen.findByRole("link", {
    name: new RegExp(repositories.owner.login),
  });
  expect(link).toHaveAttribute(
    "href",
    `/repositories/${repositories.full_name}`
  );
});
