import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) => {
  // debugger;
  return (
    <div className="col-md-8">
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const petId = parseInt(ownProps.match.params.petId);
  const pet = state.pets.find((pet, idx) => pet.id === petId);

  if (pet) {
    console.log(pet);// {id: 3, name: "Sparky", description: "Orange cat with a laid back attitude"}
    console.log({ pet }); // pet: {id: 3, name: "Sparky", description: "Orange cat with a laid back attitude"}
    return { pet };
  } else {
    return { pet: {} };
  };
};

export default connect(mapStateToProps)(PetsShow);
