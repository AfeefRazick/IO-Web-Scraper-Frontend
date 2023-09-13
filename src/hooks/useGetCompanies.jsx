import { useCallback } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useDownloadCSV } from "./useDownloadCSV";

export const useGetCompanies = (state, setState) => {
  const downloadCSV = useDownloadCSV();

  const getCompanies = useCallback(async () => {
    setState((prev) => ({ ...prev, isScraping: true }));
    const response = await axiosInstance.post("/companies", {
      category: state.selected.category,
      link: state.selected.link,
    });

    if (response.data) {
      downloadCSV(response?.data?.csvFile, response?.data?.filename);
    }
    console.log(response);
    setState((prev) => ({ ...prev, isScraping: false }));
  }, [downloadCSV, state.selected, setState]);
  return getCompanies;
};
