import "react-dropdown/style.css";
import { IndustrySelector } from "./components/IndustrySelector";
import { useState } from "react";
import { productList, serviceList } from "./data/dropdownCategories";
import { axiosInstance } from "./api/axiosInstance";
import { useDownloadCSV } from "./hooks/useDownloadCSV";

function App() {
  const [state, setState] = useState({
    selected: { link: undefined, category: undefined },
  });
  const downloadCSV = useDownloadCSV();

  // set loading state button circling 'scraping data...'
  // information top of lists
  // settin active selector next to button category name
  const getCompanies = async () => {
    const response = await axiosInstance.post("/companies", {
      category: state.selected.category,
      link: state.selected.link,
    });

    if (response.data) {
      downloadCSV(response?.data?.csvFile, response?.data?.filename);
    }
    console.log(response);
  };

  return (
    <>
      <div className="bg-background py-4 px-5 md:px-15 sm:px-10 text-white w-full min-h-screen flex flex-col items-center">
        <h1 className="py-5 leading-tight font-poppins w-[17ch] mx-auto sm:w-auto font-semibold text-center text-[clamp(28px,6vw,48px)]">
          Industry Outreach <span className="hidden sm:inline">-</span>{" "}
          <span className="text-[clamp(22px,4vw,48px)] sm:text-[clamp(24px,6vw,48px)]">
            Web Scraper
          </span>
        </h1>

        <div className="w-full pt-10 pb-60 flex flex-col md:flex-row">
          <IndustrySelector
            state={state}
            setState={setState}
            list={productList}
          />

          <IndustrySelector
            state={state}
            setState={setState}
            list={serviceList}
          />
        </div>

        <button className="button-54 rounded-md" onClick={getCompanies}>
          Get Companies
        </button>
      </div>
    </>
  );
}

export default App;
