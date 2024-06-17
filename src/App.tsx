import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const driverObj = driver({
      // overlayColor: "red",
      showProgress: true,
      showButtons: ["next", "previous", "close"],
      steps: [
        {
          element: headerRef.current!,
          popover: {
            title: "header",
            description: "This is the header of application",
            onNextClick: () => {
              console.log("first");
              driverObj.moveNext();
            },
            side: "bottom",
            align: "center",
          },
        },
        {
          element: sidebarRef.current!,
          popover: {
            title: "sidebar",
            description: "This is the sidebar of application",
            side: "right",
            align: "center",
          },
        },
        {
          element: contentRef.current!,
          popover: {
            title: "content",
            description: "This is the content of application",
            side: "left",
            align: "center",
          },
        },
        {
          element: footerRef.current!,
          popover: {
            title: "footer",
            description: "This is the footer of application",
            side: "top",
            align: "center",
          },
        },
        {
          popover: {
            title: "Happy Coding",
            description:
              "And that is all, go ahead and start adding tours to your applications.",
          },
        },
      ],
      onDestroyStarted: () => {
        if (!driverObj.hasNextStep() || confirm("Are you sure?")) {
          driverObj.destroy();
        }
      },
    });
    driverObj.drive();
  }, []);

  return (
    <>
      <div className="parent">
        <div className="child">
          <Header ref={headerRef} />
        </div>
        <div className="main">
          <div className="child">
            <SideBar ref={sidebarRef} />
          </div>
          <div className="child content">
            <Content ref={contentRef} />
          </div>
        </div>
        <div className="child">
          <Footer ref={footerRef} />
        </div>
      </div>
    </>
  );
}

export default App;
