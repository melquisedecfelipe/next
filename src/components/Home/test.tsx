import { render } from 'utils/testUtils'

import Home from '.'

describe('<Home />', () => {
  it('should render the home', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })
})
