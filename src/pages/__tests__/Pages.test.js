import { render, screen, waitFor } from "../../utils/test-utils"
import Pages from ".."


it('Renders the connected app with initialState', async () => {
    render(<Pages />, { initialState: { 
        users: {
        data: [{
            login: "OPAAA",
            node_id: "OPAAA",
              }]
            } 
        }})

    await waitFor(() => {
        expect(screen.getByText(/OPAAA/i)).toBeInTheDocument()
      })
  })