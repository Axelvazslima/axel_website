import { useState, useEffect } from "react";

type DeviceProps = {
  mobileContent?: React.ReactNode;
  notebookContent?: React.ReactNode;
};

const DeviceAwareComponent = ({ mobileContent, notebookContent }: DeviceProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on load and resize
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // Detect if it's mobile (less than 768px)
    };

    checkDevice(); // Initial check
    window.addEventListener("resize", checkDevice); // Recheck on resize

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Render mobile content if it's a mobile device, otherwise render notebook content
  return <>{isMobile ? mobileContent : notebookContent}</>;
};

export default DeviceAwareComponent;
