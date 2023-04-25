import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [listOfStudents, setListOfStudents] = useState([]);
  const [name, setName] = useState("")
  const [year, setYear] = useState(0)
  const [major, setMajor] = useState("")
  const [nameDotNumber, setNameDotNumber] = useState("") 

  useEffect(() => {
    Axios.get("http://localhost:3001/getStudents").then((response) => {
      setListOfStudents(response.data);
    });
  }, [])  

  const createUser = () => {
    Axios.post("http://localhost:3001/createStudent", {
      name,
      year,
      major,
      nameDotNumber,
    }).then((response) => {
      setListOfStudents([...listOfStudents, {
        name,
        year,
        major,
        nameDotNumber,
      }])
    });
  };

  return (
    <div className="App">
      <div className="studentDisplay">
        {listOfStudents.map((student) => {
          return (
            <div>
              <h2>Name: {student.name}</h2>
              <h2>Year: {student.year}</h2>
              <h2>Major: {student.major}</h2>
              <h2>Name.Number: {student.nameDotNumber}</h2>
            </div>
          )
        }
        
        )}
        <div>
          <input type="text" placeholder="Name" onChange={(event) => {
            setName(event.target.value);
          }}
          />
          <input type="text" placeholder="Year" onChange={(event) => {
            setYear(event.target.value);
          }}
          />
          <input type="text" placeholder="Major" onChange={(event) => {
            setMajor(event.target.value);
          }}
          />
          <input type="text" placeholder="Name.Number" onChange={(event) => {
            setNameDotNumber(event.target.value);
          }}
          />
          <button onClick={createUser}>Create User</button>
        </div>


      </div>
    </div>
  );
}

export default App;
