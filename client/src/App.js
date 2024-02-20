import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import Home from './components/homeuser/Home';


function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"/user",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
