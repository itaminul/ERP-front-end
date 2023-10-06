// import TopNav from './components/layouts/TopNav';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppLayout from './components/layouts/Layout';
import LoginPage from './components/layouts/LoginPage';
import Test from './components/Test';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </AppLayout>
      </Provider>
      ;
    </>
  );
};

export default App;
