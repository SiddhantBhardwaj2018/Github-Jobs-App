import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';
import SearchBar from './SearchBar';

function App() {

  const [posts, setPosts] = useState([]);
  const [searchItems,setSearchItems] = useState({"description":"Python","location":"","time":"full_time"})
  const [loading,setLoading] = useState(false)

  console.log(posts.length);

  useEffect(() => {

    var link = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchItems['description']}&location=${searchItems['location']}&full_time=${searchItems['time']}`  

    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(link,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setPosts(res.data);
      setTimeout(() => {setLoading(false)},2000)
    }

    fetchPosts()
    setSearchItems('')
  },[searchItems])

  return (
    <div className="App">
      <div className="container my-4">
      <h2>GitHub Jobs Search</h2>
        <SearchBar setSearchItems = {setSearchItems} />
        <Posts posts={posts} loading={loading} />
      </div>
    </div>
  );
}

export default App;
