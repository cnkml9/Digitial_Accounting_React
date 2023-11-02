// eslint-disable-next-line react/prop-types
import PropTypes from "prop-types";

const ContentHeaderComponent = (props) => {
  const { description, dontUse=false } = props;
  return (
    <>
      <div style={{paddingTop: dontUse ? (""):("60px")}}>
        <section className="content-header" style={{ position: "relative" }}>
          <div className="container-fluid">
            <div className="row mb-2">
              <div className={dontUse ? (""): ("col-sm-6")}>
                <h1>{description}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
ContentHeaderComponent.prototype = {
  description: PropTypes.string.isRequired,
};

export default ContentHeaderComponent;
