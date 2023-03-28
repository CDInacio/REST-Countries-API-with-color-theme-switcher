import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import data from "../data/data.json";

export default function Detail() {
  const navigate = useNavigate();

  const { country } = useParams();

  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCountryData(data[0]);
      });
  }, [country]);

  function handleGoBack() {
    navigate("/");
  }

  return (
    <div className="container mx-auto px-6">
      <button
        onClick={handleGoBack}
        className="shadow-lg mt-10 bg-dark-blue dark:bg-white dark:text-very-dark-blue1 flex justify-center hover:bg-very-dark-blue1 transition duration-150  text-white py-2 px-6 rounded-sm"
      >
        <BsArrowLeft />
        <span className="ml-2">Back</span>
      </button>
      <div className="mt-20 flex flex-col lg:flex-row ">
        {!loading ? (
          <>
            <div className="shadow-xl min-w-[300px] max-w-[600px] h-[300px]">
              <img
                src={countryData?.flags?.png}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-white dark:text-very-dark-blue1 mt-10 lg:mt-0 lg:ml-20">
              <h1 className="text-2xl font-bold mb-8">
                {countryData?.name?.common}
              </h1>
              <div className="flex flex-col lg:flex-row">
                <ul>
                  <li className="mb-3">
                    Native Name:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.name?.common}
                    </span>
                  </li>
                  <li className="mb-3">
                    Population:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.population}
                    </span>
                  </li>
                  <li className="mb-3">
                    Region:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.region}
                    </span>
                  </li>
                  <li className="mb-3">
                    Sub Region:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.subregion}
                    </span>
                  </li>
                  <li className="mb-3">
                    Capital:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.capital}
                    </span>
                  </li>
                  <li className="mb-3">
                    Population:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData?.population}
                    </span>
                  </li>
                </ul>
                <ul className="mt-10 lg:mt-0 lg:ml-20">
                  <li className="flex mb-3">
                    Currencies:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData.currencies
                        ? Object.keys(countryData.currencies)
                        : "Unknown"}
                    </span>
                  </li>
                  <li className="flex mb-3">
                    Languages:{" "}
                    <span className="ml-1 opacity-70">
                      {countryData.languages
                        ? Object.keys(countryData.languages)[0]
                        : "Unknown"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}
