import Head from 'next/head'
import { useState, useEffect } from 'react'
import ImageCard from '../componenets/ImageCard'
import ImageSearch from '../componenets/ImageSearch'


const Home = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        const data = await res.json()
        setImages(data.hits)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchImages()
  }, [term])

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={text => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> :
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      }

    </div>
  )
}

export default Home
