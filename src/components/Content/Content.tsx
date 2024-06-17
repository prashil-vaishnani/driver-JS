import { forwardRef, HTMLProps } from "react";

const Content = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div className="page-content" ref={ref}>
        Content
      </div>
    );
  }
);

export default Content;
