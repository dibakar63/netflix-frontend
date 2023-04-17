import React, { useEffect,useState } from 'react'
import './home.scss'
import axios from 'axios';
import {FaPlay} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'


const api_key='a32d0d0385bc16e0bc527b3c5b97ac52';
const url='https://api.themoviedb.org/3';
const upcoming='upcoming'
const imgUrl='https://image.tmdb.org/t/p/original'
const nowplaying='now_playing';
const toprated='top_rated';
const popular='popular';
const Card=({img})=>(

    <div className='card'>
    <img src={img} className='img' alt='cover'/>
    </div>
)
const Row=({title,arr=[{
    
}]})=>{
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='card-item'>
            {arr.map((item,index)=>
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>)
            }
            
            </div>
        </div>
    )
}
const Home = () => {
    const [upcomingMovies,setUpcomingMovies]=useState([])
    const [popularMovies,setPopolarMovies]=useState([])
    const [topratedMovies,setUTopratedMovies]=useState([])
    const [nowplayingmovies,setUNowPlayingMovies]=useState([])
    
    useEffect(()=>{
        const fetchUpcomingData=async()=>{
          const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${api_key}&language=en-US&page=2`)
          setUpcomingMovies(results)
          console.log(results)
          
        }
        const fetchPopularData=async()=>{
            const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${api_key}`)
            setPopolarMovies(results)
            console.log(results)
            
          }
          const fetchTopratedData=async()=>{
            const {data:{results}}=await axios.get(`${url}/movie/${toprated}?api_key=${api_key}`)
            setUTopratedMovies(results)
            console.log(results)
            
          }
          const fetchNowplayingData=async()=>{
            const {data:{results}}=await axios.get(`${url}/movie/${nowplaying}?api_key=${api_key}`)
            setUNowPlayingMovies(results)
            console.log(results)
            
          }
        fetchUpcomingData();
        fetchNowplayingData();
        fetchPopularData();
        fetchTopratedData();
    },[])
  return (
    <section className='home'>
        <div className='banner' style={{backgroundImage:popularMovies[0] ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
        : 'black'}} >
        
        {popularMovies[0] && (
            <span className='title'>{popularMovies[0].original_title }</span>     )
        }
        {popularMovies[0] && (
            <p className='para'>{popularMovies[0].overview }</p>     )
        }
        <div className='button'>
            <button><FaPlay/>Play</button>
            <button>Mylist<AiOutlinePlus/></button>
        </div>
            
        </div>
        <Row title={'Upcoming Movies'} arr={upcomingMovies}/>
        <Row title={'Now Playing Movies'} arr={nowplayingmovies}/>
        <Row title={'Top Rated Movies'} arr={topratedMovies}/>
        <Row title={'Popular Movies'} arr={popularMovies}/>
        
    </section>
  )
}

export default Home
