import { useState } from "react";


export function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="section">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`chevron ${isOpen ? "open" : ""}`}>▸</span>
      </div>
      <div className={`section-content ${isOpen ? "" : "collapsed"}`}>
        {children}
      </div>
    </div>
  );
}
