import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  link,
} from "react-router-dom"
import Home from './Components/Home';
import Counter from './Components/Counter';
import Video from './Components/Video';
import Todolist from './Components/Todolist';
import { Provider } from 'react-redux';
import store from './stote/store';
import Counts from './Components/Counts';
import Todolists from './Components/Todolists';
import Products from './Components/Products';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
    {
      path:"/home",
      element: <Home></Home>
    },
    {
      path:"/counter",
      element: <Counter></Counter>
    },
    {
      path:"/video",
      element: <Video></Video>
    },
    {
      path:"/todolist",
      element: <Todolist></Todolist>
    },
    {
      path:"/counts",
      element: <Counts></Counts>
    },
    {
      path:"/todolists",
      element: <Todolists></Todolists>
    },
    {
      path:"/products",
      element: <Products></Products>
    },
  ]}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}>
<RouterProvider router={router}/> </Provider> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
