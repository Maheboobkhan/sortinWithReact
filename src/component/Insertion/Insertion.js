import React, { useState, useRef } from "react";
import "../Insertion/Insertion.css";

const Insertion = () => {
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
    let temp = ele1.innerHTML;
    ele1.innerHTML = ele2.innerHTML;
    ele2.innerHTML = temp;

    let high = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = high;

    ele2.style.backgroundColor = "white";

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  const Sort = async () => {
    let i, j;
    for (i = 1; i < arr.length; i++) {
      for (j = i; j > 0; j--) {
        let first = take.current.children[j - 1];
        let second = take.current.children[j];
        second.style.backgroundColor = "yellow";
        first.style.backgroundColor = "crimson";
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });

        if (Number(second.innerHTML) < Number(first.innerHTML)) {
          await swap(first, second);
          if (j == 1) {
            first.style.backgroundColor = "white";
          } else {
            first.style.backgroundColor = "yellow";
          }
        } else {
          take.current.children[j].style.backgroundColor = "white";
          take.current.children[j - 1].style.backgroundColor = "white";
          break;
        }
      }
    }
    for (i = 0; i < arr.length; i++) {
      take.current.children[i].style.backgroundColor = "greenyellow";
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Insertion Sort</h1>
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
                  transition: "0.3s all",
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

export default Insertion;
