import { useState } from "react";
import { CollapsibleSection } from "./general/CollapsibleSection";

const emptyForm = { qualification: "", school: "", from: "", to: "" };

export function Education({ setEducation }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleUpdate = () => {
    if (!form.qualification && !form.school) return;

    setEducation((prev) => [...prev, { id: crypto.randomUUID(), ...form }]);
    setForm(emptyForm);
  };

  return (
    <CollapsibleSection title="Education">
      <div>
        <p className="input-description">Qualification</p>
        <input
          className="input-element name-input"
          placeholder="Input your degree"
          onChange={handleChange("qualification")}
          value={form.qualification}
        />
      </div>

      <div>
        <p className="input-description">School</p>
        <input
          className="input-element name-input"
          placeholder="Generic college"
          onChange={handleChange("school")}
          value={form.school}
        />
      </div>

      <div>
        <p className="input-description">Year of study</p>

        <div className="study-year-container">
          <p className="from">From</p>
          <input
            className="date-input"
            placeholder="Mon, Year"
            onChange={handleChange("from")}
            value={form.from}
          />
          <p className="to">To</p>
          <input
            className="date-input"
            placeholder="Mon, Year"
            onChange={handleChange("to")}
            value={form.to}
          />
        </div>
      </div>

      <button className="update-button" onClick={handleUpdate}>
        update
      </button>
    </CollapsibleSection>
  );
}
