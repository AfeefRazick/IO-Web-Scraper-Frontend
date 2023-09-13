/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";

export const IndustrySelector = ({ isSelected, list, type, setState }) => {
  const selectOption = (e) => {
    setState((prev) => ({
      ...prev,
      selected: { link: e.value, category: e.label },
    }));
  };

  return (
    <div className="w-full pb-6 md:px-10">
      <h2 className="text-2xl text-center">{type}</h2>

      <Dropdown
        onChange={selectOption}
        options={list}
        value={list[0]}
        placeholder={"Select an Industry"}
        menuClassName="custom-scroll  !rounded-md"
        controlClassName={`!rounded-md !px-4 ${
          isSelected ? "!bg-greenish !text-black !border-greenish" : ""
        }`}
        className={`!mt-4`}
      />
    </div>
  );
};
