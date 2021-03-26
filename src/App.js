import React, { useEffect, useState, useCallback } from 'react'
import { Container, Paper, InputBase, IconButton, Grid, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import UseStyles from './styles';
import AOS from "aos";
import "aos/dist/aos.css";
import Recipe from "./Recipe"
require('dotenv').config();

const App = () => {
  // const APP_ID = "f00204a6";
  // const APP_KEY = "3da77f8ed5b5416148f8be652cdaccdd"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(`chicken`);
  const {REACT_APP_API_ID,REACT_APP_API_KEY} = process.env;

  const getRecipes = useCallback(async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`);
    
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    return;
  }, [query])
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  useEffect(() => {
    getRecipes();
  }, [query, getRecipes])

  const updateSearch = (e) => {

    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();

    setQuery(search);
    setSearch("");
  }

  const classes = UseStyles();
  AOS.init();

  return (
    <>
      <Toolbar data-aos="fade-down-right">
        <MenuBookIcon style={{ color: "#ffff", fontSize: 40, marginRight: "20px" }} />
        <Typography className={classes.title} variant="h6" noWrap>
          Recipe-Book
          </Typography>
        <Paper component="form" className={classes.paper} onSubmit={getSearch} data-aos="fade-left">
          <InputBase
            className={classes.input}
            placeholder="Search some recipe..."
            inputProps={{ 'aria-label': 'search recipe' }}
            value={search}
            onChange={updateSearch}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>



      <main>
        <Container className={classes.cardGrid} maxWidth="md" maxWidth={false}>
          <Grid container spacing={5} >
            {recipes.map((recipe) => {
              return <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}

              />
            })}

          </Grid>
        </Container>
      </main>



      {/* <div className="recipe">
      {recipes.map((recipe)=>{
        return <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      })}
      
      </div> */}


    </>
  )
}

export default App
