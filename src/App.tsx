import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppLayout from './components/layouts/Layout';
import LoginPage from './components/layouts/LoginPage';
import ItemIndex from './components/pages/inventory/setup/item/ItemIndex';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/item-setup" element={<ItemIndex />} />
          </Routes>
        </AppLayout>
      </Provider>
      ;
    </>
  );
};

export default App;
