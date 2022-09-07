import React, { useState, useRef } from "react";
import "../Selection/Selection.css";

const Selection = () => {
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

  // swap
  const swap = (ele1, ele2) => {
    return new Promise((resolve) => {
      let temp = ele1.innerHTML;
      ele1.innerHTML = ele2.innerHTML;
      ele2.innerHTML = temp;

      let high = ele1.style.height;
      ele1.style.height = ele2.style.height;
      ele2.style.height = high;
    });
  };

  // sorting Array
  const Sort = async () => {
    let i, j, min_idx;
    for (i = 0; i < arr.length - 1; i++) {
      min_idx = i;
      take.current.children[i].style.backgroundColor = "yellow";
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      for (j = i + 1; j < arr.length; j++) {
        take.current.children[j].style.backgroundColor = "red";
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500);
        });
        if (
          Number(take.current.children[j].innerHTML) <
          Number(take.current.children[min_idx].innerHTML)
        ) {
          min_idx = j;
        }
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500);
        });
        take.current.children[j].style.backgroundColor = "white";
      }
      // take.current.children[min_idx].style.backgroundColor = "yellow";
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 500);
      // });
      take.current.children[min_idx].style.transform = "rotate(40deg)";
      take.current.children[min_idx].style.backgroundColor = "orange";
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 700);
      });
      take.current.children[min_idx].style.transform = "rotate(-40deg)";
      take.current.children[min_idx].style.backgroundColor = "orange";

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 700);
      });
      take.current.children[min_idx].style.transform = "rotate(0deg)";

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 700);
      });

      swap(take.current.children[i], take.current.children[min_idx]);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      take.current.children[i].style.backgroundColor = "greenyellow";
      take.current.children[min_idx].style.backgroundColor = "white";
      take.current.children[i].style.backgroundColor = "greenyellow";
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    }
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    });
    take.current.children[i].style.backgroundColor = "greenyellow";
  };

  return (
    <>
      <div className="main-container">
        <h1>Selection Sort</h1>
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

export default Selection;
