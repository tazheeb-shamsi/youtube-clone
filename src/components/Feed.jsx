import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos();

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" },background:'#F8F8FF' }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },         
          boxShadow: "0px 10px 0px 0px rgba(0, 0, 0, 0.2)",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ mt: 1.5, color: "#3d3d3d" }}
        >
          Copyright 2022 , YouTube-Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb="2"
          sx={{ color: "black", mb: 1.5 }}
        >
          {selectedCategory}
          <span style={{ color: "#ff0000" }}> Videos</span>
        </Typography>
        <Videos videos = {videos} />
      </Box>
    </Stack>
    </>
  );
};

export default Feed;
