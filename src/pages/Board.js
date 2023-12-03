import { useState, useCallback } from "react";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import KanbanLane from "../components/KanbanLane";

const Board = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <div
        className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center cursor-pointer"
        onClick={openDrawer}
      >
        <div className="self-stretch rounded-xl bg-white h-[509.8px] flex flex-row items-center justify-start p-10 box-border">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start py-0 px-[45px] gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <input
                  className="[border:none] font-inter text-[32px] bg-[transparent] flex-1 relative font-bold text-black text-left"
                  placeholder="Notion Board"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <input
                  className="[border:none] font-inter text-sm bg-[transparent] flex-1 relative tracking-[0.1px] text-dimgray text-left"
                  placeholder="A board to keep track of personal tasks."
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-white flex flex-row items-center justify-start gap-[24px] md:flex-col">
              <KanbanLane
                frame="/frame.svg"
                toDoPlaceholder="To-do"
                buttonDisabled={`{false}`}
              />
              <KanbanLane
                toDoAlignSelf="stretch"
                frameDivJustifyContent="flex-start"
                frame="/svg.svg"
                frameIconOverflow="hidden"
                frameIconFlexShrink="0"
                toDoPlaceholder="In Progress"
                toDoColor="#337ea9"
                cardContainerHeight="unset"
                cardContainerBoxSizing="border-box"
                cardContainerFlex="1"
              />
              <KanbanLane
                toDoAlignSelf="stretch"
                frameDivJustifyContent="flex-start"
                frame="/frame2.svg"
                frameIconOverflow="unset"
                frameIconFlexShrink="unset"
                toDoPlaceholder="Complete"
                toDoColor="#448361"
                cardContainerHeight="unset"
                cardContainerBoxSizing="border-box"
                cardContainerFlex="1"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[509.8px] overflow-hidden shrink-0" />
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Board;
