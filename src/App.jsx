import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  // mark as read
  const [readingTime, setReadingTime] = useState(0)
  const handleReadingTime = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log('reading time clicked');
  };

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
