import "react-dropdown/style.css";
import { IndustrySelector } from "./components/IndustrySelector";
import { useState } from "react";
import { productList, serviceList } from "./data/dropdownCategories";
import { useGetCompanies } from "./hooks/useGetCompanies";
import { IoArrowDownCircle } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";

function App() {
  const [state, setState] = useState({
    selected: null,
    isScraping: false,
  });

  const getCompanies = useGetCompanies(state, setState);

  return (
    <>
      <div className="bg-background py-4 px-5 md:px-15 sm:px-10 text-white w-full min-h-screen flex flex-col items-center">
        <h1 className="py-5 leading-tight font-poppins w-[17ch] mx-auto sm:w-auto font-semibold text-center text-[clamp(28px,6vw,48px)]">
          Industry Outreach <span className="hidden sm:inline">-</span>{" "}
          <span className="text-[clamp(22px,4vw,48px)] sm:text-[clamp(24px,6vw,48px)]">
            Web Scraper
          </span>
        </h1>

        <p className="text-center">
          Scrapes the export companies in Sri lanka for a given Industry.
        </p>
        <p className="text-center leading-loose">
          Click <span className="button-55 rounded-sm mx-1">GET COMPANIES</span>{" "}
          to download csv
        </p>

        <h3 className="text-xl pt-8 text-center text-[#4CE0B3] ">
          Choose the Industry
        </h3>

        <div className="w-full pt-4 pb-2 md:pb-20 flex flex-col md:flex-row">
          <IndustrySelector
            isSelected={productList.find(
              (category) => category.label === state?.selected?.category
            )}
            type="Products"
            state={state}
            setState={setState}
            list={productList}
          />

          <IndustrySelector
            isSelected={serviceList.find(
              (category) => category.label === state?.selected?.category
            )}
            type="Services"
            state={state}
            setState={setState}
            list={serviceList}
          />
        </div>

        {state.selected && !state.isScraping && (
          <IoArrowDownCircle className="animate-bounce text-4xl" />
        )}
        <p className="text-lg leading-loose"> {state.selected?.category} </p>

        <button
          className="!bg-greenish flex items-center !text-black button-54 rounded-md"
          onClick={getCompanies}
        >
          {state.isScraping ? (
            <>
              <AiOutlineLoading className="mr-2 inline animate-spin" />
              Scraping Data...
            </>
          ) : (
            "Get Companies"
          )}
        </button>
      </div>
    </>
  );
}

export default App;
