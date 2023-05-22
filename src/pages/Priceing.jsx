import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useTitle from "../hooks/usetitle";

const Priceing = () => {
  const [region, setregion] = useState("");
  useTitle("priceing");

  const handalechange = (e) => {
    const name = e.target.value;
    setregion(name);
  };
  return (
    <div>
      <div className="bg-[#808080]">
        <Nav />
      </div>

      <div className="w-2/3 m-auto pt-20">
        <select
          className="border h-10 w-full"
          name="country"
          onChange={(e) => handalechange(e)}
          id=""
        >
          <option value="">Find Your Country</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="america">North America</option>
        </select>
        {region === "asia" && (
          <div className="mt-10">
            <h2 className="text-4xl font-bold">Asia</h2>
            <h2 className="text-3xl font-bold pt-5">Enterprise Pricing</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Standard [Monthly] </th>
                    <th>Growth [Monthly]</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>India</td>
                    <td>INR 3,20,000 </td>
                    <td>INR 6,40,000</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>Thailand</td>
                    <td>Thai B. 5,40,000 </td>
                    <td>Thai B. 10,80,000</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Singapore</td>
                    <td>SGD$ 29000 </td>
                    <td>SGD$ 58000</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Hong Kong </td>
                    <td>HK$ 3,60,000 </td>
                    <td>HK$ 7,20,000</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>United Arab Emirates </td>
                    <td>Dirham 38000 </td>
                    <td>Dirham 76000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Type of Services </th>
                    <th>Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>India</td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>INR 50000 </td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>INR 50000</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>INR 70000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>INR 50000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>INR 60000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>INR 60000</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Thailand</td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>Thai B. 100000</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>Thai B. 100000</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>Thai B. 115000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>Thai B. 100000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>Thai B. 85000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>Thai B. 85000</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Hong Kong </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>HK$ 70000</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>HK$ 70000</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>HK$ 90000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>HK$ 70000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>HK$ 60000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>HK$ 60000</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Singapore </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>SGD$ 5000</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>SGD$ 5000</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>SGD$ 6500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>SGD$ 5000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>SGD$ 5500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>SGD$ 5500</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>UAE </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>Dirham 6500</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>Dirham 6500</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>Dirham 8500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>Dirham 6500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>Dirham 7500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>Dirham 7500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-3xl font-bold pt-5 pb-5">Individual Prices</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>

                    <th>Package Cost [Yearly]</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>India</td>
                    <td>INR 9999</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>Turkey </td>
                    <td>TRY 7499</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Thailand </td>
                    <td>Thai B. 17500</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Singapore </td>
                    <td>SGD$ 1099</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Hong Kong </td>
                    <td>HK$ 6900</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>United Arab Emirates </td>
                    <td>Dirham 4900</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {region === "europe" && (
          <div className="mt-10">
            <h3 className="text-4xl font-bold">{region}</h3>
            <h2 className="text-3xl font-bold pt-10">Enterprise Pricing</h2>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Standard [Monthly] </th>
                    <th>Growth [Monthly]</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Europe Union Nations </td>
                    <td>Euro 33500 </td>
                    <td>Euro 67000</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>United Kingdom </td>
                    <td>GBP 33000 </td>
                    <td>GBP 66000</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Switzerland </td>
                    <td>- </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Denmark</td>
                    <td>- </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Sweden </td>
                    <td>- </td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Hungary </td>
                    <td>- </td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Poland </td>
                    <td>- </td>
                    <td>- </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Type of Services </th>
                    <th>Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Europe Union Nations </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>Euro 5400</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>Euro 5400</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>Euro Euro 6900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>Euro 5400</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>Euro 6400</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>Euro 5900</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>United Kingdom </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>GBP 4900</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>GBP 4900</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>GBP 6900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>GBP 4900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>GBP 6500</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>GBP 6000</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Switzerland </td>
                    <td> </td>
                    <td></td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>4</th>
                    <td>Denmark </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Sweden </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Hungary </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>poland </td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-3xl font-bold pt-5 pb-5">Individual Prices</h2>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Package Cost [Yearly]</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Europe Union Nations </td>

                    <td>Euro 950</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>United Kingdom </td>

                    <td>GBP 900</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Switzerland </td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Denmark</td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Sweden </td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Hungary </td>
                    <td>- </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Poland </td>
                    <td>- </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {region === "america" && (
          <div className="mt-10">
            <h3 className="text-4xl font-bold">{region}</h3>
            <h3 className="text-3xl font-bold pt-10">Enterprise Pricing</h3>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Standard [Monthly] </th>
                    <th>Growth [Monthly]</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Canada </td>
                    <td>CAD 43000 </td>
                    <td>CAD 86000</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>United States </td>
                    <td>US$ 45000 </td>
                    <td>US$ 90000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="bg-black">
                    <th></th>
                    <th>Country</th>
                    <th>Type of Services </th>
                    <th>Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Canada </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>CAD 6900</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>CAD 6900</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>CAD 6900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>CAD 8900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>CAD 7900</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>CAD 7900</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>United Kingdom </td>
                    <td>Electrical & Electronics Maintenance </td>
                    <td>US$ 7000</td>
                  </tr>
                  <tr className="">
                    <th></th>
                    <td></td>
                    <td>Plumbing Maintenance </td>
                    <td>US$ 7000</td>
                  </tr>{" "}
                  {/* row 3 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Computer System Maintenance </td>
                    <td>US$ 7000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Carpenter Services </td>
                    <td>US$ 9000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Cleaning Solutions </td>
                    <td>US$ 9000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td> </td>
                    <td>Landscaping Services </td>
                    <td>US$ 9000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-3xl font-bold pt-5 pb-5">Individual Prices</h3>
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                {/* head*/}
                <thead className="bg-slate-600">
                  <tr className="">
                    <th></th>
                    <th>Country</th>
                    <th>Package Cost [Yearly]
</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Canada </td>
                   
                    <td>CAD 1200
</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="">
                    <th>2</th>
                    <td>United States </td>
                  
                    <td>US$ 1350</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Priceing;
