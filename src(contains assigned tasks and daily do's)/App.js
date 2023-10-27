import React from "react";
import Header from "./Component(Day3and4)/Header";
import Body from "./Component(Day3and4)/Body";
import Footer from "./Component(Day3and4)/Footer";
import Bootstrap from "./Component(Day3and4)/Bootstrap";
import Footer2 from "./Component(Day3and4)/Footer2";
import Header2 from "./Component(Day3and4)/Header2";
import Body2 from "./Component(Day3and4)/Body2";
const App=()=>{
  return(
    <>
    <Bootstrap/>
    <Header />
    <Body/>
    <Footer/>
    <Header2 />
    <Body2/>
    <Footer2/>
    
    </>
  );
};
export default App;
// import React from "react";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Navbar from "./Component/Navbar";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// function App(){
//   return (
//     <>
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route element={<Home />} path="/"/>
//       <Route element={<Contact />} path="/contact"/>
//       <Route element={<About />} path="/about"/>
//       <Route element={<Login/>} path="/login"/>
//       <Route element={<Signup/>} path="/signup"/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }
// export default App;
