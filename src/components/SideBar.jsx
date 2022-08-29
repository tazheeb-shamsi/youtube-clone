import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      borderRadius: '4px', 
      background: 	'#F8F8FF',     
    }}
    style={{ boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.1)"}}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{ background: category.name === selectedCategory && "#ff0000" }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "black" : "#ff0000",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
