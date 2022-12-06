import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetail,
  Feed,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  // const [data, setData] = useState([])
  // console.log(data)
  // useEffect(async () => {
  //   const { data } = await axios.get("https://applicationfeedbackservice-dev.m-devsecops.com/backend/app/list",
  //               {
  //                   headers: {
  //                       "Authorization": `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3MDI1ODA1MywiaWF0IjoxNjcwMjQwMDUzfQ.Rdu7ndwKEDh8tFlHViUeLJrWj7a3v1k7882vdZrU_XvEHNCCKSSfy0ErA4aqu-hsMTLEZWUB7KyucCqRvvQOag`
  //                   }, 
                 
  //     })
         
  //   setData(data)
  // },[])
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  )
}

export default App;
