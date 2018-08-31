import React, { Component } from 'react'
// import Helmet from 'react-helmet'
import data from '@groceristar/groceristar-fetch/chickenKyiv';

// import {
//   Button, Modal, ModalHeader, ModalBody,
//   ModalFooter, Form, FormGroup, Label, Input
// } from 'reactstrap'

import EditRecipeModal from './components/EditRecipeModal/EditRecipeModal'
import AddRecipeModal  from './components/AddRecipeModal/AddRecipeModal'

import NavBar  from './components/NavBar/NavBar'
import RCard   from './components/RCard/RCard'
import Example from './components/Jimbotron/Jimbotron'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      ingredients: [],
    }
  }

  componentDidMount() {
    let currentRecipes     = Object.keys(window.localStorage);
    let currentIngredients = Object.values(window.localStorage);
    this.setState({
      recipes: currentRecipes,
      ingredients: currentIngredients,
    })
    console.log(this.state.recipes);
  }

  renderCards(){

  return data.getRecipe().map((item) =>
    <div key={item.title} className="col-md-4">
      <RCard />
    </div>
  );

  }

  render() {
    const { recipes } = this.state;
    const { ingredients } = this.state;
    let i=0;

    return (
      <div className="App container-fluid">
        {/*<NavBar />
        <hr />
        <Example /> */}
        <div className="container" id="recipe-box">
          {recipes.map(recipe =>
            <div className="recipe container align-content-center" key={recipe}>
              <h5 className="recipeName">
                {recipe}
              </h5>
              <p className="recipeIngredients">
                {ingredients[recipes.indexOf(recipe)]}
              </p>
              <div className="editButton">
                <EditRecipeModal className={recipe} i={i++}
                  recipe={recipe}
                  ingredients={ingredients[recipes.indexOf(recipe)]}/>
              </div>
            </div>)}
        </div>
        <AddRecipeModal />

        <div className="container">
          <div className="row">
            {this.renderCards()}
          </div>
          </div>



      </div>
    );
  }
}

export default App;
