import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/auth/register'
import LoginPage from './pages/auth/login'
import PasswordResetPage from './pages/auth/password-reset'
import Home from './pages/home/home'
import BoxCreate from './pages/box-create/box-create'
import BoxDone from './pages/box-create/box-done'
import MyBox from './pages/my-box/my-box'

function App() {
  return (
    <>
      <nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/create-box" element={<BoxCreate />} />
        <Route path="/box-created" element={<BoxDone />} />

        <Route path="/box">
          <Route index element={<MyBox />} />
          <Route path="settings" element={<h1>Настройки коробки</h1>} />
          <Route path="participants" element={<h1>Участники</h1>} />
          <Route path="my-card" element={<h1>Моя карточка</h1>} />
          <Route path="my-giftee" element={<h1>Мой подопечный</h1>} />
        </Route>

        <Route path="/whose-santa" element={<h1>Кто чей Санта?</h1>} />
        <Route path="/profile" element={<h1>Профиль</h1>} />

        <Route path="/boxes" element={<h1>Коробки</h1>}>
          <Route index element={<h1>Коробки</h1>} />
          <Route path="mine" element={<h1>Мои коробки</h1>} />
          <Route path="public" element={<h1>Публичные коробки</h1>} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
