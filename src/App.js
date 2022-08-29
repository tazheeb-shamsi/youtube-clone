import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//! components
import {Feed, Navbar, SearchFeed, VideoDetails, ChannelDetails} from './components'


const App = () => (
   <BrowserRouter>
      <Box>
         <Navbar/>
         <Routes>
            <Route path="/" exact element={<Feed/>} />
            <Route path="/video/:id" exact element={<VideoDetails/>} />
            <Route path="/channel/:id" exact element={<ChannelDetails/>} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed/>} />
         </Routes>
      </Box>
   </BrowserRouter>
)


export default App