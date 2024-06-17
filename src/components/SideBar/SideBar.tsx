import { forwardRef, HTMLProps } from "react";

const SideBar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div className="page-sidebar" ref={ref}>
        sidebar
      </div>
    );
  }
);

export default SideBar;