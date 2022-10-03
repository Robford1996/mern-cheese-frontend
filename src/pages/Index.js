import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    countryOfOrigin: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      image: "",
      countryOfOrigin: "",
    });
  };

  const loaded = () => {
    return props.cheese.map((cheeses) => (
      <div key={cheeses._id} className="cheeses">
        <Link to={`/cheese/${cheeses._id}`}>
          <h1>{cheeses.name}</h1>
        </Link>
        <img src={cheeses.image} alt={cheeses.name} />
        <h3>{cheeses.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheeses ? loaded() : loading()}
    </section>
  );
}

export default Index;
