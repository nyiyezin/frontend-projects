import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Dictionary } from "@/components/Dictionary";
import { persistor, store } from "@/redux/store";
import GlobalStyles from "./styles/Global.styled";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Dictionary />
      </PersistGate>
    </Provider>
  );
}
