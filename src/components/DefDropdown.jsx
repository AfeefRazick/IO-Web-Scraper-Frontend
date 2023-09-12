/* eslint-disable react/prop-types */

import { v4 } from "uuid";

export const DefDropdown = ({ list }) => {
  return (
    <div className="px-10 ">
      <select className="px-5 text-lg font-semibold custom-scroll bg-carblue h-10 rounded-md">
        {list.map((listItem) => (
          <>
            <option
              className="text-lg hover:bg-gray-300 hover:text-black text-white font-semibold custom-scroll"
              key={v4()}
              value={listItem.link}
            >
              {listItem.category}
            </option>
            {/* <option key={v4()} className="text-xs" disabled="disabled"></option> */}
          </>
        ))}
      </select>
    </div>
  );
};
