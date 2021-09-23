import {
    Button,
    createTheme,    
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import "./Search.css";
  
  import SearchIcon from "@material-ui/icons/Search";
  import { useEffect, useState } from "react";
  import {useSelector} from 'react-redux'
  import axios from "axios";
  
  import SingleContent from "../../SingleContent/SingleContent";
  import CustomPagination from "../../Pagination/CustomPagination";
  
  const Search = () => {

    const favorites = useSelector((state) => state.favoriteReducer)    
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [contents, setContents] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
  
    const darkTheme = createTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fff",
        },
      },
    });
  
    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            process.env.REACT_APP_API_KEY
          }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        setContents(data.results);
        setNumOfPages(data.total_pages);
      
      } catch (error) {
        //handle error here
        // console.error(error);
      }
    };

    let findId = (id) => {
        
      const index = favorites.findIndex((favorite) => favorite.id === id);
     
      if (index < 0)
          return false
      else    
          return true
    }

    const handleSearch = (e) => {      
      let query = e.target.value
      if (query.length === 0){
        setSearchText('')
      }else{
        setSearchText(query)
      }     

    }
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
      
    }, [searchText]);
  
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => handleSearch(e)}
            />
            {/* <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button> */}
          </div>
       
        </ThemeProvider>
        <div className="search__contents">
          
          
          {contents &&
            contents.map((content) => (
              <SingleContent isFavorite={findId(content.id)} movie={content} movieid={content.id} key={content.id} 
              />
            ))}
          {contents.length === 0 ?
            (<div className="search__contentsImagePlaceholder">
            <img src={`${process.env.PUBLIC_URL}/assets/search.svg`} alt="" />
          </div>) : ''}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
  };
  
  export default Search;