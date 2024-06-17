import { forwardRef, HTMLProps } from "react";

const Footer = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div className="page-footer" ref={ref}>
        Footer
      </div>
    );
  }
);

export default Footer;