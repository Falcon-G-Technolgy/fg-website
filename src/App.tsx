import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/acceuil/homePage"
import AboutPage from "./pages/about/aboutPage"
import RealisationPage from "./pages/realisations/realisationPage"
import ExpertisesPage from "./pages/expertises/expertisesPage"
import BlogPage from "./pages/blog/blogPage"
import ContactPage from "./pages/contact/contactPage"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/a-propos',
    element: <AboutPage/>
  },
  {
    path:'/realisations',
    element: <RealisationPage/>
  },  
  {
    path:'/expertises',
    element: <ExpertisesPage/>
  },  
  {
    path:'/blog',
    element: <BlogPage/>
  },  
  {
    path:'/contact',
    element: <ContactPage/>
  },
])
function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
