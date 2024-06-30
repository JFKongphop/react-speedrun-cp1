import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Header } from './components/Layout/Header';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  )
}

export default App;
