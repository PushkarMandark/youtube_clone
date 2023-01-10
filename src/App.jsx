import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Routes path="/" exact element={<Feed />} />
        <Routes path="/vedio/:id" exact element={<VideoDetail />} />
        <Routes path="/channel/:id" exact element={<ChannelDetail />} />
        <Routes path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
