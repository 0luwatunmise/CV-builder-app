import { CollapsibleSection } from "./general/CollapsibleSection";

export function Experience() {
  return (
    <CollapsibleSection title="Experience">
      <div>
        <p className="input-description">Company name</p>
        <input
          className="input-element name-input"
          placeholder="Input company name here"
        />
      </div>

      <div>
        <p className="input-description">Position</p>
        <input
          className="input-element name-input"
          placeholder="Input your position"
        />
      </div>

      <div className="input-description">
        <p>Main responsibilities</p>
        <textarea
          className="input-element-desc"
          placeholder="Activities you were involved in"
        />
      </div>

      <div>
        <div className="study-year-container">
          <p className="from">From</p>
          <input className="date-input" placeholder="MMMM/YYYY" />
          <p className="to">To</p>
          <input className="date-input" placeholder="MMMM/YYYY" />
        </div>
      </div>
      <button className="update-button">update</button>
    </CollapsibleSection>
  );
}
