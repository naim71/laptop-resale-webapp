import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-primary mt-5">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
      position="top-right"
      reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
