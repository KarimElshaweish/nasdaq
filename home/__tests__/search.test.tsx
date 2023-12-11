import { useSearch } from "../hooks";
import { renderHook } from "@testing-library/react-hooks";
import WithProvider from "../withProvider";
import configureStore from "redux-mock-store"; // ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("search", () => {
  it("update action wiht query if success", async () => {
    const initialState = {};
    const store = mockStore(initialState);

    const wrapper = ({ children }) => (
      <WithProvider reduxStore={store}>{children}</WithProvider>
    );

    const { result } = renderHook(() => useSearch(), { wrapper });
    await result.current("search");
    expect(store.getActions()[0].type).toBe("SEARCH/QUERY");
  });
});
