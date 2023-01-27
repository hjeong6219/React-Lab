[{"content":"import { screen, render } from '@testing-library/react';\r\n\r\nfunction DataForm() {\r\n  const [email, setEmail] = useState('asdf@asdf.com');\r\n\r\n  return (\r\n    <form>\r\n      <h3>Enter Data</h3>\r\n      <div data-testid=\"image wrapper\">\r\n        <img alt=\"data\" src=\"data.jpg\" />\r\n      </div>\r\n\r\n      <label htmlFor=\"email\">Email</label>\r\n      <input\r\n        id=\"email\"\r\n        value={email}\r\n        onChange={e => setEmail(e.target.value)}\r\n      />\r\n\r\n      <label htmlFor=\"color\">Color</label>\r\n      <input id=\"color\" placeholder=\"Red\" />\r\n\r\n      <button title=\"Click when ready to submit\">\r\n        Submit\r\n      </button>\r\n    </form>\r\n  );\r\n}\r\n\r\nrender(<DataForm />);","type":"code","id":"n23uv"},{"content":"test('selecting different elements', () => {\r\n  render(<DataForm />);\r\n\r\n  const elements = [\r\n    screen.getByRole('button'),\r\n    screen.getByLabelText('Email'),\r\n    screen.getByPlaceholderText('Red'),\r\n    screen.getByText('Enter Data'),\r\n    screen.getByDisplayValue('asdf@asdf.com'),\r\n    screen.getByAltText('data'),\r\n    screen.getByTitle(\"Click when ready to submit\"),\r\n    screen.getByTestId('image wrapper')\r\n\r\n\r\n  ];\r\n\r\n  for (let element in elements){\r\n    expect(element).toBeInTheDocument\r\n  }\r\n});","type":"code","id":"cai0h"}]