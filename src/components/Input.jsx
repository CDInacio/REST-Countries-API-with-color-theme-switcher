import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Input({ onChooseContinent, onQuery }) {
  return (
    <div className="pt-10 flex flex-col 2xl:flex-row justify-start lg:justify-between text-white">
      <div className="py-3 dark:text-dark-grey relative w-full 2xl:w-2/3  bg-dark-blue dark:bg-white duration-300 rounded-md shadow-md ">
        <input
          maxLength={20}
          onChange={(e) => onQuery(e.target.value)}
          className=" h-full px-12"
          placeholder="Search for a country..."
        />
        <BsSearch
          size={15}
          className="text-white dark:text-dark-grey absolute top-0 bottom-0 left-5 my-auto"
        />
      </div>
      <div className="mt-10 2xl:mt-0 ">
        <select
          onChange={(e) => onChooseContinent(e.target.value)}
          className="cursor-pointer hover:bg-very-dark-blue1 py-3 px-4 bg-dark-blue dark:bg-white dark:hover:bg-very-light-grey duration-300 dark:text-very-dark-blue2 shadow-md rounded-sm"
          name="continent"
        >
          <option className="" value="All">
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
