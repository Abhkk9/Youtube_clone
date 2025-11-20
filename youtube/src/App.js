import { Provider } from "react-redux";
import Body from "./componets/Body";
import Header from "./componets/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
    <div>
       <Header/>
    <Body/>
    </div>    
   
    
    </Provider>
    
   
  );
}

export default App;
