import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios directly
import Framework from "./components/home/Framework";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

function App() {
  const [tikLink, setTikLink] = useState('');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://tikwm.com/api/?url=${tikLink}`); // Adjust the URL and payload as needed
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tikLink]);
  console.log(data);

  const handleInputChange = (e) => {
    setTikLink(e.target.value); // Update tikLink state with input value
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    // Trigger fetchData via useEffect when tikLink changes
  };

  return (
    <div className="bg-errie-black min-h-screen after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
      {/* header */}
      <Header onChange={handleInputChange} onSubmit={handleInputSubmit}/>
      <Analytics />
      <main className="relative z-0">
        <Router>
          <Framework data={data} error={error} loading={loading}/>
        </Router>
      </main>
      {/* footer  */}
      <Footer />
    </div>
  );
}

export default App;
