import React from "react";
import { useState } from "react";

function Show(props) {
  const id = props.match.params.id;
  const cheese = props.cheese;
  const cheeses = cheese.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(cheeses);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCheese(editForm, cheeses._id);
    props.history.push("/");
  };

  const removeCheeses = () => {
    props.deleteCheese(cheeses._id);
    props.history.push("/");
  };

  return (
    <div className="cheeses">
      <h1>{cheeses.name}</h1>
      <h2>{cheeses.countryOfOrigin}</h2>
      <img src={cheeses.image} alt={cheeses.name} />
      <button id="delete" onClick={removeCheeses}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  );
}

export default Show;
