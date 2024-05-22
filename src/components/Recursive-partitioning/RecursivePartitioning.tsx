/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Split from "react-split";
import generateHexColor from "./utils/generateHexColor";

const RecursivePartitioning = ({ initialColor, onRemove }: any) => {
  const [isSplit, setIsSplit] = useState(false);
  const [direction, setDirection] = useState("");
  const [colors, setColors] = useState([initialColor, generateHexColor()]);
  const [childKeys, setChildKeys] = useState([0, 1]);

  const handleSplit = (dir: any) => {
    setDirection(dir);
    setIsSplit(true);
  };

  const handleRemove = () => {
    onRemove();
  };

  if (!isSplit) {
    return (
      <div className="flex justify-center items-center h-full w-full flex-wrap gap-3" style={{ backgroundColor: colors[1] }}>
        <div>
          <button className="buttonStyle bg-teal-600" onClick={() => handleSplit("vertical")}>
            V
          </button>
          <button className="buttonStyle bg-teal-600" onClick={() => handleSplit("horizontal")}>
            H
          </button>
          <button className="buttonStyle bg-red-600" onClick={handleRemove}>
            -
          </button>
        </div>
      </div>
    );
  }

  return (
    <Split
      direction={direction === "horizontal" ? "horizontal" : "vertical"}
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: `${direction === "horizontal" ? "row" : "column"}`,
      }}
      sizes={[50, 50]}
      minSize={100}
      gutterSize={10}
      gutterStyle={(dimension, index) => ({ height: "0", width: "0" })}
      snapOffset={10}
      cursor={direction === "horizontal" ? "col-resize" : "row-resize"}
    >
      <RecursivePartitioning
        initialColor={colors[0]}
        onRemove={() => {
          setChildKeys([childKeys[1]]);
          setIsSplit(false);
        }}
      />
      <RecursivePartitioning
        initialColor={colors[1]}
        onRemove={() => {
          setChildKeys([childKeys[0]]);
          setIsSplit(false);
        }}
      />
    </Split>
  );
};

export default RecursivePartitioning;
