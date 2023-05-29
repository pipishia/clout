import 'antd/dist/reset.css';
import './App.css';
import 'antd/dist/reset.css'
import Home from './pages/home';
import Activity from './pages/Activity'
import Login from './pages/login'
import Register from "./pages/register"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
<<<<<<< HEAD

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();

// import { feedProducts } from "./api";
// feedProducts();
=======
import {Provider} from 'react-redux'
import store from './redux/store';
>>>>>>> 48578a216b2734a4693e1566f1711450138ee9ad
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;