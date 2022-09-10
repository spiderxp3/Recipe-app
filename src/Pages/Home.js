import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/addrecipe");
  };
  const submit_again = () => {
    navigate("/addedrecipe");
  };
  return (
    <div className="home">
      <h1
        style={{
          color: "#eeeeee",
          fontSize: "3 rem",
        }}
      >
        All Recipes
      </h1>
      <button
        style={{
          backgroundColor: "#D65A31",
          color: "#EEEEEE",
          border: "0",
          width: "100px",
          height: "35px",
          borderRadius: "0 10px 0 10px",
        }}
        onClick={submit}
      >
        Add
      </button>
      <button
        style={{
          backgroundColor: "#D65A31",
          color: "#EEEEEE",
          border: "0",
          width: "100px",
          height: "35px",
          borderRadius: "0 10px 0 10px",
          margin: "10px",
        }}
        onClick={submit_again}
      >
        Added
      </button>
    </div>
  );
};

export default Home;
