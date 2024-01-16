import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import MasterDetailPage from "./components/CourseDetail/MasterDetailPage";
// import CreateCourse from "./components/CreateCourse/CreateCourse";
import ModalComponent from "./components/Enrollment/ModalComponent";
import Counter from "./components/CounterAPP/counter";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fuild ">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/home/detail-page/:title" element={<MasterDetailPage />} /> */}
            <Route path="/home/detail-page" element={<MasterDetailPage />} />
            <Route
              path="home/detail-page/enrollment"
              element={<ModalComponent />}
            />
            {/* <Route path="/home/create-course" element={<CreateCourse/>}/> */}
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
