import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Header from '../Header/Header';

const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const Dictionary = lazy(() => import('../../pages/Dictionary/Dictionary'));
const Recommend = lazy(() => import('../../pages/Recommend/Recommend'));
const Training = lazy(() => import('../../pages/Training/Training'));

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to={'/dictionary'} />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/recommend" element={<Recommend />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
