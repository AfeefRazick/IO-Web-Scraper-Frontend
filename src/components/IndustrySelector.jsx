/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";

export const IndustrySelector = ({ list, state, setState }) => {
  const selectOption = (e) => {
    setState((prev) => ({
      ...prev,
      selected: { link: e.value, category: e.label },
    }));
  };

  return (
    <div className="w-full pb-10 md:px-10">
      <h2 className="text-2xl">Products</h2>

      <Dropdown
        onChange={selectOption}
        options={list}
        value={list[0]}
        placeholder={"Select an Industry"}
        menuClassName="custom-scroll !rounded-md"
        controlClassName="!rounded-md"
        className="mt-4"
      />
    </div>
  );
};
