import { CollapsibleSection } from "./general/CollapsibleSection";

export function Education() {
  return (
    <CollapsibleSection title="Education">
      <div>
        <p className="input-description">Qualification</p>
        <input
          className="input-element name-input"
          placeholder="Input your degree"
        />
      </div>

      <div>
        <p className="input-description">School</p>
        <input
          className="input-element name-input"
          placeholder="Generic college"
        />
      </div>

      <div>
        <p className="input-description">Year of study</p>

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
