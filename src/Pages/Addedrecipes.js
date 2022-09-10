import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddedRecipes = ({ isAuth }) => {
  const [recipes, setRecipes] = useState([]);
  const colRef = collection(db, "recipe");
  const navigate = useNavigate();

  const deleteRecipe = async (id) => {
    const postDoc = doc(db, "recipe", id);
    await deleteDoc(postDoc);
  };

  const submit = () => {
    navigate("/home");
  };

  const submit_again = () => {
    navigate("/addrecipe");
  };

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(colRef);
      setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, [colRef]);
  return (
    <div className="added">
      <h2
        style={{
          color: "#eeee",
          marginTop: "20px",
        }}
      >
        Added Recipes
      </h2>
      <div
        className="btn"
        style={{
          display: "block",
          margin: "auto",
        }}
      >
        <button
          style={{
            backgroundColor: "#D65A31",
            color: "#EEEEEE",
            border: "0",
            width: "100px",
            height: "35px",
            borderRadius: "10px 0 10px 0",
          }}
          onClick={submit}
        >
          Home
        </button>
        <button
          style={{
            backgroundColor: "#D65A31",
            color: "#EEEEEE",
            border: "0",
            width: "100px",
            height: "35px",
            borderRadius: "10px 0 10px 0",
            marginTop: "5px",
          }}
          onClick={submit_again}
        >
          Add
        </button>
      </div>

      <div className="inner">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="card"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                margin: "10px",
                border: "3px solid orange",
                flexWrap: "wrap",
                width: "20rem",
                flex: "0 0 33.333333%",
              }}
            >
              <div className="card-body">
                <h3
                  className="card-title"
                  style={{
                    color: "#d65a31",
                  }}
                >
                  {recipe.recipiename}
                </h3>
                <h6>Recipe By : {recipe.author.name}</h6>
                <h5
                  className="card-subtitle"
                  style={{
                    marginTop: "2px",
                    color: "#D65A31",
                  }}
                >
                  {recipe.ingredients}
                </h5>
                <p
                  className="card-text"
                  style={{
                    wordWrap: "break-word",
                    marginTop: "5px",
                  }}
                >
                  {recipe.preparation}
                </p>
                {isAuth && recipe.author.id === auth.currentUser.uid && (
                  <button
                    className="btn btn-danger"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      deleteRecipe(recipe.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddedRecipes;
