import "./GeneralInformation.css";

export function GeneralInformation({ generalInfo }) {
  const photo = generalInfo.photo;
  return (
    <div className="general-info-container">
      <div className="general-info">
        <p className="info-greeting">HELLO, I'M</p>

        <h2 className="info-name">
          {generalInfo.firstName || "JOHN"} <br />
          {generalInfo.middleName || "DOE"} <br />
          {generalInfo.lastName || "JACKSON"}
        </h2>

        <p className="info-role">{generalInfo.role || "Software Developer"}</p>

        <p className="info-desc">
          {generalInfo.description ||
            "I craft clean, modern, and user-focused websites that help brands stand out and connect with the right audience."}
        </p>
      </div>

      <div
        className="info-photo"
        style={photo ? { backgroundImage: `url(${photo})` } : undefined}
      ></div>
    </div>
  );
}
