import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './routes/slices/store';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './index.scss'
import MainMenu from './routes/mainMenu/MainMenu';
import NotFound from './routes/notFound/NotFound';
import Reading from './routes/reading/Reading';
import DailyCard from './routes/dailyCard/DailyCard';
import Dairy from './routes/dairy/Dairy';
import Library from './routes/library/Library';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainMenu />,
    errorElement: <NotFound />,
	},
  {
    path: 'reading' ,
    element: <Reading />,
  },
  {
    path: 'dailycard' ,
    element: <DailyCard />,
  },
  {
    path: 'dairy' ,
    element: <Dairy />,
  },
  {
    path: 'library' ,
    element: <Library />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
