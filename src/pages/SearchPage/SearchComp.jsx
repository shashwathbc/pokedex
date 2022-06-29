import React from 'react';
import TextField from '@mui/material/TextField';
import "./search.css";
import Button  from '@mui/material/Button';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const SearchComp = () => {
  return (
    <div>
        <span className="pageTitle">SEARCH PAGE</span>
        <div className="search">
        <TextField   style={{flex: 1}}
          className = "searchBox"
          label="search"
          variant="filled"
          />
          <Button  variant="contained" style={{marginLeft : 10}}  ><SavedSearchIcon /> </Button>
        </div>
      </div>
  )
}

export default SearchComp