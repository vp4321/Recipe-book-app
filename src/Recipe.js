import React from 'react'
import {  Card, CardContent, CardMedia, Grid,Typography } from '@material-ui/core';
import UseStyles from './styles';

const Recipe = ({ title, calories, image, ingredients }) => {

    const classes = UseStyles();
    return (
        <Grid item xs={12} sm={6} md={4} l={4} data-aos="zoom-in-up" >
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                        Calories
                    </Typography>
                    <Typography color="textSecondary">
                        {calories}
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                        Ingredients
                    </Typography>
                    <Typography variant="h8" color="textSecondary" >
                        <ol>
                            {ingredients.map((ingredient) => {
                                return <li>{ingredient.text}</li>
                            })}
                        </ol>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>


    )
}

export default Recipe

    // < div className = { style.recipe } >
    //         <h1>{title}</h1>
    //         <img className={style.image} src={image} alt="" />

    //         <h2>Calories</h2>
    //         <p>{calories}</p>
    //         <ol>
    //             {ingredients.map((ingredient) => {
    //                 return <li >{ingredient.text}</li>
    //             })}
    //         </ol>
    //     </ >
