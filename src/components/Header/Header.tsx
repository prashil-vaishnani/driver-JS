import { forwardRef, HTMLProps } from "react";

const Header = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div className="page-header" ref={ref}>
        Header
      </div>
    );
  }
);

export default Header;
