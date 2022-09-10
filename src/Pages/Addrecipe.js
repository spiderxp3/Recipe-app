import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { useState } from "react";
const AddRecipe = () => {
  const [recipiename, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const colRef = collection(db, "recipe");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      recipiename,
      ingredients,
      preparation,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/addedrecipe");
    e.reset();
  };
  return (
    <div className="add-form">
      <h3
        style={{
          textAlign: "center",
          color: "#d65a31",
          marginTop: "25px",
        }}
      >
        Add Recipie
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Dish Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="dish name..."
            value={recipiename}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <input
            type="text"
            className="form-control"
            placeholder="dish name..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preparation</label>
          <textarea
            required
            placeholder="Preparation Steps ..."
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
