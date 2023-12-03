import { useMemo } from "react";
import Card from "./Card";

const KanbanLane = ({
  toDoValue = "Task",
  toDoAlignSelf,
  frameDivJustifyContent,
  frame,
  frameIconOverflow,
  frameIconFlexShrink,
  toDoPlaceholder,
  toDoColor,
  buttonDisabled,
  cardContainerHeight,
  cardContainerBoxSizing,
  cardContainerFlex,
}) => {
  const toDoStyle = useMemo(() => {
    return {
      alignSelf: toDoAlignSelf,
    };
  }, [toDoAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  const frameIconStyle = useMemo(() => {
    return {
      overflow: frameIconOverflow,
      flexShrink: frameIconFlexShrink,
    };
  }, [frameIconOverflow, frameIconFlexShrink]);

  const toDo1Style = useMemo(() => {
    return {
      color: toDoColor,
    };
  }, [toDoColor]);

  const cardContainerStyle = useMemo(() => {
    return {
      height: cardContainerHeight,
      boxSizing: cardContainerBoxSizing,
      flex: cardContainerFlex,
    };
  }, [cardContainerHeight, cardContainerBoxSizing, cardContainerFlex]);

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center text-left text-sm text-darkslategray-400 font-inter md:flex-[unset] md:self-stretch"
      style={toDoStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <div
          className="flex flex-row items-center justify-center gap-[7px]"
          style={frameDiv2Style}
        >
          <img
            className="relative w-4 h-4"
            alt=""
            src={frame}
            style={frameIconStyle}
          />
          <input
            className="[border:none] font-medium font-inter text-xs bg-[transparent] relative leading-[21px] text-gray text-left"
            placeholder={toDoPlaceholder}
            type="text"
            value={toDoValue}
            style={toDo1Style}
          />
          <div className="relative leading-[21px] flex items-center w-2 h-4 shrink-0">
            0
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-1 bg-gray-50 rounded-md flex flex-col items-start justify-start"
          autoFocus={false}
          disabled={buttonDisabled}
        >
          <img
            className="relative w-3 h-3 overflow-hidden shrink-0"
            alt=""
            src="/frame1.svg"
          />
        </button>
      </div>
      <div
        className="self-stretch rounded-xl h-[288.8px] flex flex-col items-start justify-start p-3 box-border"
        style={cardContainerStyle}
      >
        <Card postTheVideoPlaceholder="Enter To Do Item" />
      </div>
    </div>
  );
};

export default KanbanLane;
