import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    axios
      .get("https://min-tattoo-ver2-ntaj.vercel.app/Email")
      .then((res) => {
        console.log(res);
        if (res.data.onSuccess) {
          setEmail(res.data.email);
          console.log("Success");
        } else {
          console.log("Error");
        }
      })
      .catch((err) => console.log("Errr"));
  }, []);

  return (
    <div className="App">
      {email.map((e, index) => (
        <div key={index}>{e.email}</div>
      ))}
    </div>
  );
}

export default App;
