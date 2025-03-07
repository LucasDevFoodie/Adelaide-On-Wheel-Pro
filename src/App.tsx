import './assets/normalize.css'
import './assets/index.css'
import './assets/shared.css'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  RoutesParams } from './router'

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {RoutesParams.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
