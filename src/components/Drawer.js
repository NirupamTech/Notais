import { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const Drawer = ({ onClose }) => {
  const [
    dropdownButtonSimpleTextOAnchorEl,
    setDropdownButtonSimpleTextOAnchorEl,
  ] = useState(null);
  const dropdownButtonSimpleTextOOpen = Boolean(
    dropdownButtonSimpleTextOAnchorEl
  );
  const handleDropdownButtonSimpleTextOClick = (event) => {
    setDropdownButtonSimpleTextOAnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextOClose = () => {
    setDropdownButtonSimpleTextOAnchorEl(null);
  };
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="bg-white shadow-[0px_0px_0px_1px_rgba(15,_15,_15,_0.02),_0px_3px_6px_rgba(15,_15,_15,_0.03),_0px_9px_24px_rgba(15,_15,_15,_0.06)] w-[548px] h-full overflow-hidden flex flex-col items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-smi text-darkslategray-200 font-inter"
      data-animate-on-scroll
    >
      <div className="flex-1 w-[702px] overflow-hidden flex flex-row items-start justify-between">
        <div className="w-[702px] h-[309px] flex flex-col items-start justify-start pt-[38px] px-0 pb-[594.6099853515625px] box-border gap-[5px]">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[55px] z-[1]">
            <div className="flex flex-col items-start justify-start py-2.5 px-0">
              <input
                className="[border:none] font-inter text-[31px] bg-[transparent] relative leading-[38.4px] font-bold text-darkslategray-100 text-left"
                placeholder="Enter Title"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-2.5 px-[55px] gap-[17px] z-[0]">
            <div className="self-stretch h-[109px] flex flex-col items-center justify-between">
              <div className="self-stretch flex flex-row items-center justify-start gap-[181px]">
                <div className="w-16 flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start justify-start py-[3px] px-0">
                    <img
                      className="relative w-[15.5px] h-[10.2px]"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <div className="h-[17.8px] overflow-hidden flex flex-col items-center justify-between pt-0 pb-[0.7999992370605469px] pr-[1.029998779296875px] pl-0 box-border">
                    <div className="relative leading-[16.8px]">Assign</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <input
                    className="[border:none] font-inter text-smi bg-[transparent] relative leading-[21px] text-darkslategray-400 text-left"
                    placeholder="Empty"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[0.3999992311000824px] gap-[147px]">
                  <div className="w-[90px] flex flex-row items-center justify-start gap-[6px]">
                    <div className="overflow-hidden flex flex-row items-start justify-start">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="/frame3.svg"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[0.7999992370605469px]">
                      <div className="relative leading-[16.8px]">Status</div>
                    </div>
                  </div>
                  <div>
                    <Button
                      id="button-Choose Status"
                      aria-controls="menu-Choose Status"
                      aria-haspopup="true"
                      aria-expanded={
                        dropdownButtonSimpleTextOOpen ? "true" : undefined
                      }
                      onClick={handleDropdownButtonSimpleTextOClick}
                      color="primary"
                    >
                      Choose Status
                    </Button>
                    <Menu
                      anchorEl={dropdownButtonSimpleTextOAnchorEl}
                      open={dropdownButtonSimpleTextOOpen}
                      onClose={handleDropdownButtonSimpleTextOClose}
                    >
                      <MenuItem onClick={handleDropdownButtonSimpleTextOClose}>
                        Not Started
                      </MenuItem>
                      <MenuItem onClick={handleDropdownButtonSimpleTextOClose}>
                        Working
                      </MenuItem>
                      <MenuItem onClick={handleDropdownButtonSimpleTextOClose}>
                        Testing
                      </MenuItem>
                      <MenuItem onClick={handleDropdownButtonSimpleTextOClose}>
                        Completed
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[0.3999992311000824px] gap-[129px]">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="overflow-hidden flex flex-row items-start justify-start">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="/frame4.svg"
                      />
                    </div>
                    <div className="self-stretch w-[94px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-0 pb-[0.7999992370605469px] pr-[0.48000335693359375px] pl-0 box-border">
                      <div className="relative leading-[16.8px]">
                        Created for
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <input
                      className="[border:none] font-inter text-smi bg-[transparent] relative leading-[21px] text-darkslategray-100 text-left"
                      placeholder="May 3, 2023 12:17 PM"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[0.3999992311000824px] gap-[142px]">
                <div className="w-[102.2px] h-[21px] flex flex-row items-center justify-start gap-[6px]">
                  <div className="overflow-hidden flex flex-row items-start justify-start">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/frame5.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0">
                    <div className="relative leading-[16.8px]">Created at</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <input
                    className="[border:none] font-inter text-smi bg-[transparent] relative leading-[21px] text-darkslategray-100 text-left"
                    placeholder="May 3, 2023 12:17 PM"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="h-[21px] flex flex-col items-center justify-between p-2.5 box-border">
              <div className="relative bg-darkslategray-300 w-[509px] h-px" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-center justify-start py-[61px] px-[88px] text-[40px] text-black1">
        <div className="relative">
          <p className="m-0">
            <b>Hello</b>
          </p>
          <p className="m-0 text-[16px] font-light">this is Markdown here :)</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
