import { useRouter } from 'next/router'
import { render, waitFor } from "@testing-library/react";
import DefaultPage from "@/components/DefaultPage";

jest.mock('next/router', () => ({
   useRouter() {
      return {
         pathname: '/',
      }
   },
}))

describe('/components/DefaultPage', () => {
   it("should render the class according to the current route", async () => {
      const { getByTestId, queryByTestId } = render(<DefaultPage children />);

      const component = getByTestId("generalContent");
      const componentQuery = queryByTestId("generalContent");
      const { pathname } = useRouter();

      if (pathname === "/") {
         await waitFor(() => {
            expect(component).toHaveClass("bgBlue");
            expect(componentQuery).not.toHaveClass("bgWhite");
         });
      } else {
         await waitFor(() => {
            expect(componentQuery).not.toHaveClass("bgBlue");
            expect(component).toHaveClass("bgWhite");
         });
      }
   });
});
