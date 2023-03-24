import { Link } from "react-router-dom";
import data from "../data/data.json";

export default function Card({ flag, name, population, region, capital }) {
  return (
    <div className="bg-dark-blue hover:bg-very-dark-blue1 dark:bg-white duration-300  rounded-sm overflow-hidden shadow-md">
      <img
        src={flag}
        alt="country flag"
        className="object-cover w-full h-[150px] over"
      />
      <div className="px-5 py-10 text-white dark:text-very-dark-blue2 duration-300">
        <Link to={`/${name}`}>
          <h3 className="mb-5 font-bold">{name}</h3>
        </Link>
        <div className="font-light">
          <ul>
            <li className="flex">
              Population:
              <span className="ml-1 opacity-70">{population}</span>
            </li>
            <li className="flex">
              Region:
              <span className="ml-1 opacity-70">{region}</span>
            </li>
            <li className="flex">
              Capital:
              <span className="ml-1 opacity-70">{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
