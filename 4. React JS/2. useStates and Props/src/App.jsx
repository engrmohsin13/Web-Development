import "./App.css";
import Card from "./components/card";
import image_3 from "./assets/images/perfume (1).jpg";

function App() {
  return (
    <div className="cardContainer">
      <Card
        image={image_3}
        image_alt_text="Person 1 Image"
        user_name="Ali Raza"
        user_role="UI/UX Designer"
        description="Lorem ipsum dolor sit amet..."
      />
    </div>
  );
}

export default App;
