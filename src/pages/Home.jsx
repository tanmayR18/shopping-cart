import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const API_URL = "https://fakestoreapi.com/products"

const Home = () => {

    const [loading, setloading] = useState(false)
    const [posts, setPosts] = useState([])

    async function fetchProductData() {

      setloading(true)
      try{
        
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data)

      } catch(err) {
        console.log("Error occured while fetching data")
        setPosts([])
      }
      setloading(false)
    }
    
    useEffect(() => {
      fetchProductData();
    },[])

  return (
    <div>
    
    {
      loading ? <Spinner/> : 
      posts.length > 0 ? 
      (<div
      className=' grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-x-5 space-y-10 min-h-[80vh]'
      >
        {
          posts.map( (post) => (
            <Product key={post.id} post = {post} />
          ))
        }
      </div>) : 
      (<div
      className='flex flex-col gap-2 justify-center items-center h-[calc(100vh-5rem)]'
      >
        <img 
        className='w-32 h-32 '
        src='not-found.png'/>
        <p
        className='font-bold text-green-600 leading-3'
        >No Data Found</p>
      </div>)
    }

    </div>
  )
}

export default Home