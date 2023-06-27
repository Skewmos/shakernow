import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/HomePage';

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
