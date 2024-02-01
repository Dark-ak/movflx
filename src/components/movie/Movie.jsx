
import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import api from "../../utilities/api"
import Details from './Details'
import Popular from '../content/Popular'
import Footer from '../Footer'

const Movie = () => {

  const navigate = useNavigate();
  const { type } = useLocation().state
  const { movieId } = useParams()
  const [data, setData] = useState()
  const [bg, setBg] = useState("")

  useEffect(() => {
    api.find(type, movieId).then(
      response => {
        console.log(response.data)
        setData(response.data)
        setBg(`https://image.tmdb.org/t/p/original/${response.data.backdrop_path}`)
      }
    )
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  return (
    <div>
      <div className='h-fit lg:h-screen  md:h-fit bg-cover px-8 py-5' style={{ backgroundImage: `linear-gradient(rgba(31, 30, 36, 0.5), rgba(31, 30, 36, 0.8)), url('${bg}')` }}>
        <div onClick={() => navigate("/")} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>

        <Details data={data} type={type}/>
      </div>
      <Popular />
      <Footer />
    </div>
  )
}

export default Movie