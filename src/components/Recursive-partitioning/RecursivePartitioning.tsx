/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Split from "react-split";
import generateHexColor from "./utils/generateHexColor";
import { Resizable, ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const RecursivePartitioning = ({ initialColor, onRemove }: any) => {
  const [isSplit, setIsSplit] = useState(false);
  const [direction, setDirection] = useState("");
  const [colors] = useState([initialColor, generateHexColor()]);
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
        flexDirection: `${direction === "horizontal" ? "column" : "row"}`,
      }}
      sizes={[50, 50]}
      minSize={100}
      gutterSize={10}
      gutterStyle={() => ({ height: "0", width: "0" })}
      snapOffset={10}
      cursor={direction === "horizontal" ? "col-resize" : "row-resize"}
    >
      <ResizableBox width={500} height={500} className="w-full h-full" draggableOpts={{ grid: [25, 25] }}>
        <RecursivePartitioning
          initialColor={colors[0]}
          onRemove={() => {
            setChildKeys([childKeys[1]]);
            setIsSplit(false);
          }}
        />
      </ResizableBox>
      <ResizableBox width={500} height={500} className="w-full h-full" draggableOpts={{ grid: [25, 25] }}>
        <RecursivePartitioning
          initialColor={colors[1]}
          onRemove={() => {
            setChildKeys([childKeys[0]]);
            setIsSplit(false);
          }}
        />
      </ResizableBox>
    </Split>
  );
};

export default RecursivePartitioning;
