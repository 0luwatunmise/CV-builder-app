import { CollapsibleSection } from "./general/CollapsibleSection";

export function GeneralInformation({ generalInfo, setGeneralInfo }) {
  const handleChange = (param) => (event) => {
    const value = event.target.value;
    setGeneralInfo({ ...generalInfo, [param]: value });
    console.log(value);
  };

  return (
    <CollapsibleSection title="General Information">
      <div>
        <p className="input-description">First name</p>
        <input
          className="input-element name-input"
          placeholder="Input your name here"
          onChange={handleChange("firstName")}
        />
      </div>

      <div>
        <p className="input-description">Middle name</p>
        <input
          className="input-element name-input"
          placeholder="Input your middle name here"
          onChange={handleChange("middleName")}
        />
      </div>

      <div>
        <p className="input-description">Last name</p>
        <input
          className="input-element name-input"
          placeholder="Input your last name here"
          onChange={handleChange("lastName")}
        />
      </div>

      <p>
        <label className="input-description">
          Upload profile image
          <input type="file" accept="image/*" hidden />
        </label>
      </p>

      <div>
        <p className="input-description">Role</p>
        <input
          className="input-element"
          placeholder="Input your role here"
          onChange={handleChange("role")}
        />
      </div>

      <div className="input-description">
        <p>Describe yourself</p>
        <textarea
          className="input-element-desc"
          placeholder="Briefly describe yourself"
          onChange={handleChange("description")}
        />
      </div>

      <div>
        <p className="input-description">Email</p>
        <input
          className="input-element"
          placeholder="Input your mail here"
          onChange={handleChange("email")}
        />
      </div>

      <div>
        <p className="input-description">Location</p>
        <input
          className="input-element"
          placeholder="Lagos, Nigeria"
          onChange={handleChange("location")}
        />
      </div>

      <div>
        <p className="input-description">Phone No</p>
        <input
          className="input-element"
          placeholder="+234 000 000 000"
          onChange={handleChange("phone")}
        />
      </div>
    </CollapsibleSection>
  );
}
