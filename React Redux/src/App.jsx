import { ToastContainer } from "react-toastify";
import "./APP.css"
import AppRedux from "./Redux/AppRedux";

function App() {
  return (
    <>
      <div className="appContainer">
        {/* ---------Redux---------- */}
        <AppRedux />
      </div>
      <ToastContainer />
    </>
  )
}

export default App;