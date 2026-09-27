import "./GeneralInformation.css";

export function GeneralInformation({ generalInfo }) {
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

      <div className="info-photo"></div>

      <div className="other-info">
        <div>{generalInfo.email || "yourname@gmail.com"}</div>
        <div>{generalInfo.location || "City, State"}</div>
        <div>{generalInfo.phone || "+234 000 000 000"}</div>
      </div>
    </div>
  );
}
