import { Provider } from "react-redux";

const WithProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default WithProvider;
