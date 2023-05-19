import React from "react";

const Induvidualvisits = () => {
  return (
    <div className="w-1/2 m-auto pb-20">
      <span className="text-3xl font-bold text-[#2c4a9a]">
        Services In Package For Individual Customers
      </span>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Type of Services</th>
              <th>Number of Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Electrical & Electronics Maintenance</th>
              <td>18</td>
            </tr>
            <tr>
              <th>Plumbing Maintenance</th>
              <td>10</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Computer System Maintenance (Hardware & Software)</th>
              <td>8</td>
            </tr>
            <tr>
              <th>Carpenter Services</th>
              <td>6</td>
            </tr>
            <tr>
              <th>Cleaning Solutions</th>
              <td>4</td>
            </tr>
            <tr>
              <th>F.M.O Review</th>
              <td>Half Yearly Premises Audit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Induvidualvisits;
