import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from './views/Blog'
import BlogsPage from './views/BlogsPage';
import NavBar from './components/NavBar';
const App = () => {

  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/blogs/" element={<BlogsPage />}>
          
        </Route>
        <Route path="blogs/blog/:id" element={<Blog />}></Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App