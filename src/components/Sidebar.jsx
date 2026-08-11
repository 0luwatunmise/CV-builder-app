import "./Sidebar.css";

export function Sidebar() {
  return (
    <>
      <div className="info-bar">
        <div className="general-info">
          <div className="info-header">General Information</div>
          <div>
            <p className="input-description">Full name</p>
            <input
              className="input-element"
              placeholder="Input your name here"
            />
          </div>

          <div>
            <p className="input-description">Title</p>
            <input
              className="input-element"
              placeholder="Developer"
            />
          </div>

          <div>
            <p className="input-description">Location</p>
            <input className="input-element" placeholder="Lagos, Nigeria" />
          </div>
          <div>
            <p className="input-description">Email</p>
            <input className="input-element" placeholder="Input your mail here" />
          </div>
          <div>
            <p className="input-description">Phone No</p>
            <input className="input-element" placeholder="+234 000 000 000" />
          </div>

          <div>
            <p className="input-description">Education</p>
            <input className="input-element" placeholder="Generic College" />
          </div>

          <div className="input-description">
            <p>Describe yourself</p>
            <input className="input-element-desc"
            contenteditable="true" placeholder="Briefly describe yourself" />
          </div>


          <div>
            <p className="input-description">Work Experience</p>
            <input className="input-element-desc"
            contenteditable="true" placeholder="Project's you've worked on" />
          </div>
        </div>
      </div>
    </>
  );
}
