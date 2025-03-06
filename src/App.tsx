import './assets/normalize.css'
import './assets/index.css'
import './assets/shared.css'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

function App():React.JSX.Element {
  return (
    <>
      <Header/>
      <RouterProvider router={Router} />
      <Footer />
    </>
  )
}

export default App
