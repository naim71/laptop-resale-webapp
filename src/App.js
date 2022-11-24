import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-primary mt-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
