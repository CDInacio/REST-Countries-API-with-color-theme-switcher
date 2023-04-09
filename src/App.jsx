import { useContext, useEffect, useState } from "react";

import Card from "./components/Card";
import Input from "./components/Input";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState("All");
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const [params] = useState(["name", "capital"]);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  function handleChooseContinent(continent) {
    setContinent(continent);
  }

  function handleQuery(query) {
    setQuery(query);
  }

  function handleSearch(countries) {
    return countries.filter((item) => {
      if (item.region === continent) {
        return item?.name.common
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase());
      } else if (continent === "All") {
        return item?.name.common
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase());
      }
    });
  }

  // // get xountry by capital and name
  // function handleSearch(countries) {
  //   return countries.filter((item) => {
  //     if (item.region === continent) {
  //       return params.some((param) =>
  //         item[param]?.toString().toLowerCase().includes(query.toLowerCase())
  //       );
  //     } else if (continent === "All") {
  //       return params.some((param) =>
  //         item[param]?.toString().toLowerCase().includes(query.toLowerCase())
  //       );
  //     }
  //   });
  // }

  return (
    <div className="container px-6 mx-auto pb-10">
      <Input onQuery={handleQuery} onChooseContinent={handleChooseContinent} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16 mt-10">
        {loading ? (
          <p>loading...</p>
        ) : (
          handleSearch(countries).map((data) => (
            <Card
              flag={data.flags.png}
              name={data.name.official}
              population={data.population}
              region={data.region}
              capital={data.capital}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
