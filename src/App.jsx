import { useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchPosts } from './api/api'
import Postlists from './components/Postlists'

function App() {


  return (
    <>
      <Postlists/>
    </>
  )
}

export default App
