import UserPage from "./pages/UserPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserPage />
      </Provider>
    </>
  );
}

export default App;
