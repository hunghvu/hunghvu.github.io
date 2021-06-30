import React from 'react';


/* Receive props: backgroundColor */
const ProjectsComponent = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <div className="d-flex justify-content-center" style={{ paddingBottom: 20 }}>
        <div className="animated-underline">
          <h2>Projects</h2>
        </div>
      </div>

    </div>
  );
}

export default ProjectsComponent;
