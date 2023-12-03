import { useMemo } from "react";

const Card = ({
  postTheVideoValue = "Enter a task.",
  postTheVideoPlaceholder,
  cardBoxSizing,
  frameDivBoxSizing,
  postTheVideoDisplay,
  frameDivBoxSizing1,
}) => {
  const cardStyle = useMemo(() => {
    return {
      boxSizing: cardBoxSizing,
    };
  }, [cardBoxSizing]);

  const frameDivStyle = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const postTheVideoStyle = useMemo(() => {
    return {
      display: postTheVideoDisplay,
    };
  }, [postTheVideoDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing1,
    };
  }, [frameDivBoxSizing1]);

  return (
    <div
      className="self-stretch rounded-lg bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-center p-4 gap-[8px] border-[1px] border-solid border-gainsboro-100 [&_.card]:hover:flex [&_.card-content-parent]:hover:flex [&_.card-content]:hover:flex [&_.card-heading]:hover:flex [&_.post-the-video]:hover:flex [&_.simple-buttons]:hover:flex [&_.vector-wrapper]:hover:flex [&_.vector-icon1]:hover:flex [&_.wrapper]:hover:flex [&_.icon]:hover:flex [&_.card-child]:hover:flex"
      style={cardStyle}
    >
      <div
        className="card-content-parent self-stretch flex flex-row items-center justify-center py-1.5 px-0 relative gap-[33px] sm:hidden sm:hover:flex"
        style={frameDivStyle}
      >
        <div className="card-content self-stretch flex-1 flex flex-row items-center justify-start z-[0]">
          <div className="card-heading self-stretch flex-1 flex flex-row items-center justify-start">
            <input
              className="post-the-video [border:none] font-inter text-sm bg-[transparent] flex-1 relative tracking-[-0.2px] font-bold text-black text-left"
              placeholder={postTheVideoPlaceholder}
              type="text"
              value={postTheVideoValue}
              style={postTheVideoStyle}
            />
          </div>
        </div>
        <button
          className="simple-buttons cursor-pointer p-0 bg-white my-0 mx-[!important] absolute top-[3.1px] right-[-0.3px] rounded-10xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] box-border w-[88px] h-[29px] hidden flex-row items-center justify-center z-[1] border-[1px] border-solid border-gainsboro-100 hover:flex"
          autoFocus={true}
          disabled={false}
        >
          <div
            className="vector-wrapper self-stretch flex-1 flex flex-row items-center justify-center border-r-[1px] border-solid border-gainsboro-200"
            style={frameDiv1Style}
          >
            <img
              className="vector-icon1 relative w-[11.9px] h-[12.7px]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="wrapper flex-1 flex flex-row items-center justify-center">
            <img className="icon relative w-7 h-[5px]" alt="" src="/.svg" />
          </div>
        </button>
      </div>
      <textarea className="card-child [border:none] bg-[transparent] self-stretch h-[38px] overflow-hidden shrink-0" />
    </div>
  );
};

export default Card;
