import "./OtherInfo.css"

export function OtherInfo({ generalInfo }) {
  return (
    <>
      <div className="other-info">
        <div>{generalInfo.email || "yourname@gmail.com"}</div>
        <div>{generalInfo.location || "City, State"}</div>
        <div>{generalInfo.phone || "+234 000 000 000"}</div>
      </div>
    </>
  );
}
