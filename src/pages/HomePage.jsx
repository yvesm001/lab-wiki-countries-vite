import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  async function getCountries() {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );

      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      { countries ? (
        countries.map((country) => (
            <div key={country._id}>
                <Link to={`/${country.alpha3Code}`}>
                <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                <h3>{country.name.official}</h3>
                </Link>
            </div>
        ))
      ) : (
        <p>No countries yet</p>
      )
      }
    </div>
  );
}
export default HomePage;

