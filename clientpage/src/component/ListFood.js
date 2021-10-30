import React, { Component } from "react";
import '../style/ListFood.css'
import Grid from "@material-ui/core/Grid";
import { ShoppingCartOutlined } from "@material-ui/icons";

export default class ListFood extends Component{
    render() {
        const { foods, setFood } = this.props
        return (
            <div>
                <Grid container spacing={3}>
                    {foods.map((food) => (
                        <Grid item key={food.id} xs={12} sm={6} md={4} lg={3}>
                            <Food food={food} setFood={setFood}></Food>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

class Food extends Component{
    render() {
        const {food, setFood} = this.props
        return (
            <div className="Food" onClick={() => setFood(food.id)}>
                <img src={food.image} alt={food.name} />
                <h3 className="NameFood">{food.name}</h3>
                <div className="BottomFood">
                    <span className="Price"> $ {food.price}</span>
                    <ShoppingCartOutlined className="IconCart" fontSize="small"/>
                </div>
            </div>
        );
    }
}