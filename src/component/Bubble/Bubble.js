import React, { useState, useRef } from "react";
import "../Bubble/Bubble.css";

const Bubble = () => {
  const [arr, setArr] = useState([]);
  const take = useRef();

  // generating Array
  const genArr = () => {
    take.current.style.border = "1px solid white";
    let l = [];
    for (let i = 0; i < 10; i++) {
      let rand = Math.floor(Math.random() * 100);
      l.push(rand);
    }
    setArr(l);
  };

  const swap = (ele1, ele2) => {
    return new Promise((resolve) => {
      let temp = ele1.innerHTML;
      ele1.innerHTML = ele2.innerHTML;
      ele2.innerHTML = temp;
      let high = ele1.style.height;
      ele1.style.height = ele2.style.height;
      ele2.style.height = high;

      setTimeout(() => {
        resolve("resolved");
      }, 1000);
    });
  };

  // for sorting
  const Sort = async () => {
    let d = take.current.children;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        let first = take.current.children[j];
        let second = take.current.children[j + 1];

        take.current.children[j].style.backgroundColor = "yellow";
        take.current.children[j + 1].style.backgroundColor = "yellow";

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });

        if (Number(first.innerHTML) > Number(second.innerHTML)) {
          await swap(first, second);
        }

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });

        take.current.children[j].style.backgroundColor = "white";
      }

      take.current.children[arr.length - i - 1].style.backgroundColor =
        "greenyellow";
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Bubble Sort</h1>
        <div ref={take} className="container">
          {arr.map((ele, id) => {
            return (
              <div
                className="label"
                style={{
                  height: `${4 * ele}px`,
                  // width: "30px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  transition: "1.5s all",
                }}
              >
                {ele}
              </div>
            );
          })}
        </div>
        <div className="t-btn">
          <button className="gen" onClick={genArr}>
            GenerateArray
          </button>
          <button className="sort" onClick={Sort}>
            SortArray
          </button>
        </div>
      </div>
    </>
  );
};

export default Bubble;
