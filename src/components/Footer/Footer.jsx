import React , {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "./footer.css";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function Footer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if(value===0){
      navigate("/");
    }else if(value===1){
      navigate("/bookmark");
    }else if(value===2){
      navigate("/search");
    }
  },[value,navigate]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="footerstyle"
        style={{ backgroundColor:"#E2F9E1" ,display:"flex" , justifyContent:"space-around" , border:"1px solid black"}}
      >
        <BottomNavigationAction style={{color : "black"}} label="LISTING" icon={<HomeIcon />} />
        <BottomNavigationAction style={{color : "black"}} label="BOOKMARKS" icon={<BookmarkIcon />} />
        <BottomNavigationAction style={{color : "black"}} label="SEARCH" icon={<ManageSearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
