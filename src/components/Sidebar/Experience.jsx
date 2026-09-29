import { CollapsibleSection } from "./general/CollapsibleSection";

import { useState } from "react";

const emptyForm = { position: "", company: "", from: "", to: "" };
const newResp = () => ({ id: crypto.randomUUID(), text: "" });

export function Experience({ addExperience }) {
  const [form, setForm] = useState(emptyForm);
  const [responsibilities, setResponsibilities] = useState([newResp()]);

  function handleField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const addResponsibility = () => {
    setResponsibilities((prev) => [...prev, newResp()]);
  };

  const changeResponsibility = (id, text) => {
    setResponsibilities((prev) =>
      prev.map((r) => (r.id === id ? { ...r, text } : r)),
    );
  };

  const removeResponsibility = (id) => {
    setResponsibilities((prev) =>
      prev.length === 1 ? [newResp()] : prev.filter((r) => r.id !== id),
    );
  };

  const handleUpdate = () => {
    const cleaned = responsibilities.filter((r) => r.text.trim() !== "");

    if (!form.position.trim() && !form.company.trim()) return;

    addExperience({
      id: crypto.randomUUID(),
      ...form,
      responsibilities: cleaned,
    });

    setForm(emptyForm);
    setResponsibilities([newResp()]);
  };

  return (
    <CollapsibleSection title="Experience">
      <div>
        <p className="input-description">Position</p>
        <input
          className="input-element name-input"
          placeholder="Input your position"
          name="position"
          value={form.position}
          onChange={handleField}
        />
      </div>

      <div>
        <p className="input-description">Company name</p>
        <input
          className="input-element name-input"
          placeholder="Input company name here"
          name="company"
          value={form.company}
          onChange={handleField}
        />
      </div>

      <div className="input-description">
        <p>Main responsibilities</p>

        {responsibilities.map((r) => (
          <div className="resp-row"  key={r.id}>
            <textarea
              className="input-element-desc"
              value={r.text}
              onChange={(e) => changeResponsibility(r.id, e.target.value)}
              placeholder="Activities you were involved in"
            />
            <button
              type="button"
              className="delete-btn"
              aria-label="Delete responsibility"
              onClick={() => removeResponsibility(r.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="add-button"
        onClick={addResponsibility}
      >
        Add Responsibility
      </button>

      <div>
        <div className="study-year-container">
          <p className="from">From</p>
          <input
            className="date-input"
            placeholder="Mon Year"
            name="from"
            value={form.from}
            onChange={handleField}
          />
          <p className="to">To</p>
          <input
            className="date-input"
            placeholder="Mon Year"
            name="to"
            value={form.to}
            onChange={handleField}
          />
        </div>
      </div>
      <button className="update-button" type="button" onClick={handleUpdate}>
        update
      </button>
    </CollapsibleSection>
  );
}
