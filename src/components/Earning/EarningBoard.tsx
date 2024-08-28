"use client";
import React from "react";
import EarningSlider from "./EarningSlider";

const EarningBoard = () => {
  const [earning, setEarning] = React.useState(15000);
  const [follower, setFollower] = React.useState(10);
  const [product, setProduct] = React.useState(1);

  React.useEffect(() => {
    let val: number = product * 15 * (follower * 100);
    setEarning(val);
  }, [follower, product]);

  const numToText = (val: number): string => {
    let newVal = `${val}`;
    let result: string = "";
    let flag = newVal.length - 4;
    for (let i: number = newVal.length - 1; i >= 0; i--) {
      if (flag === i) {
        result = "," + result;
        flag -= 2;
      }
      result = newVal.charAt(i) + result;
    }

    return result;
  };
  return (
    <div className="flex md:flex-row flex-col justify-center items-center w-full h-fit py-3 md:gap-0 gap-6">
      <div className="flex flex-col justify-around items-center md:w-[60vw] w-[90vw] gap-5">
        <div className="w-full flex flex-col justify-center  items-center md:items-start gap-2">
          <h1 className="text-start text-lg font-semibold">
            What kind of influencer are you?
          </h1>
          <input
            type="text"
            className="w-3/4 rounded-lg border border-secondary-text outline-none px-3 py-2 text-lg"
            placeholder="Select influencer type?"
          />
        </div>
        <div className="flex flex-col justify-center  items-center md:items-start w-full gap-4">
          <h1 className="text-start text-lg font-semibold">
            How many followers do you have?
          </h1>
          <EarningSlider
            rangemin={10}
            rangemax={1000}
            value={follower}
            setValue={setFollower}
          />
          <div className="w-3/4">
            <p className="mx-auto w-fit text-center px-5 py-2 bg-green-600 rounded-3xl text-lg font-semibold border border-secondary shadow-xl">
              {follower} K
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center md:items-start w-full gap-4">
          <h1 className="text-start text-lg font-semibold">
            How many products do you list monthly?
          </h1>
          <EarningSlider
            rangemin={1}
            rangemax={100}
            value={product}
            setValue={setProduct}
          />
          <div className="w-3/4">
            <p className="mx-auto w-[90px] text-center px-4 py-2 bg-green-600 rounded-3xl text-lg font-semibold border border-secondary shadow-xl">
              {product}
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[30vw] w-[90vw] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-center font-semibold text-xl">Monthly Earning</h1>
          <p className="text-center font-semibold text-3xl">
            ₹ {numToText(earning)}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-center font-semibold text-xl">Yearly Earning</h1>
          <p className="text-center font-semibold text-3xl">
            ₹ {numToText(earning * 12)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarningBoard;
