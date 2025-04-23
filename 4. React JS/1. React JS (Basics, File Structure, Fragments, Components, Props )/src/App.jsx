import "./App.css";
import Card from "./components/Card";
import image_1 from "./assets/images/1.jpg";
import image_2 from "./assets/images/2.jpg";
import image_3 from "./assets/images/3.jpg";
import image_4 from "./assets/images/4.jpg";
import image_5 from "./assets/images/5.jpg";
import vite from "../public/vite.svg";
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
      <Card
        image={image_1}
        image_alt_text="Person 2 Image"
        user_name="Mubashir Tariq"
        user_role="Mobile App Developer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 3 Image"
        user_name="Zeeshan Ahmed"
        user_role="HR Manager"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 4 Image"
        user_name="Hamza Saeed"
        user_role="React Developer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 5 Image"
        user_name="Bilal Asif"
        user_role="Data Analyst"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_1}
        image_alt_text="Person 6 Image"
        user_name="Ahmed Nawaz"
        user_role="Backend Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 7 Image"
        user_name="Rizwan Ali"
        user_role="QA Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_3}
        image_alt_text="Person 8 Image"
        user_name="Omer Farooq"
        user_role="Network Administrator"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 9 Image"
        user_name="Fahad Khan"
        user_role="Marketing Expert"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 10 Image"
        user_name="Tariq Javed"
        user_role="DevOps Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 11 Image"
        user_name="Zain Abbas"
        user_role="Business Analyst"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_3}
        image_alt_text="Person 12 Image"
        user_name="Bilal Raza"
        user_role="Cybersecurity Expert"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_1}
        image_alt_text="Person 13 Image"
        user_name="Imran Haider"
        user_role="AI Specialist"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 14 Image"
        user_name="Yasir Bashir"
        user_role="Frontend Developer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 15 Image"
        user_name="Sohail Khan"
        user_role="Full Stack Developer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_1}
        image_alt_text="Person 16 Image"
        user_name="Shahzaib Ali"
        user_role="Graphic Designer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 17 Image"
        user_name="Owais Ali"
        user_role="Product Owner"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_3}
        image_alt_text="Person 18 Image"
        user_name="Fahad Jamil"
        user_role="Project Manager"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 19 Image"
        user_name="Nashit Akram"
        user_role="Game Developer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 20 Image"
        user_name="Shahbaz Ahmad"
        user_role="SEO Specialist"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 21 Image"
        user_name="Salman Khalid"
        user_role="Technical Writer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_3}
        image_alt_text="Person 22 Image"
        user_name="Asif Mahmood"
        user_role="Cloud Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_1}
        image_alt_text="Person 23 Image"
        user_name="Kashif Ali"
        user_role="Systems Analyst"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 24 Image"
        user_name="Rameez Aslam"
        user_role="Database Admin"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 25 Image"
        user_name="Hassan Javed"
        user_role="IT Manager"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_3}
        image_alt_text="Person 26 Image"
        user_name="Kamran Gill"
        user_role="Web Designer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_1}
        image_alt_text="Person 27 Image"
        user_name="Junaid Iqbal"
        user_role="Software Architect"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_2}
        image_alt_text="Person 28 Image"
        user_name="Muneeb Tariq"
        user_role="Social Media Manager"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_5}
        image_alt_text="Person 29 Image"
        user_name="Kamran Bashir"
        user_role="Tech Support Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={image_4}
        image_alt_text="Person 30 Image"
        user_name="Faisal Aslam"
        user_role="Machine Learning Engineer"
        description="Lorem ipsum dolor sit amet..."
      />
      <Card
        image={vite}
        image_alt_text="Person 30 Image"
        user_name="Vite"
        user_role="For React Development"
        description="Lorem ipsum dolor sit amet..."
      />
    </div>
  );
}

export default App;
