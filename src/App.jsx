import { useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchPosts } from './api/api'

function App() {

  // Making a query using useQuery Hook
  const {data, isLoading, error, isError, status} =useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  console.log( {data}, {isLoading}, {status});

  return (
    <>
      <h1>Subscribe to Roadside Coder</h1>
    </>
  )
}

export default App
