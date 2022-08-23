import "../css/detail.css";

function Detail(prop) {
  console.log(prop);
  if (prop.select !== null) {
    return (
      <div className="detail">
        <div className="container">
          <label>
            <span className="material-icons">radio_button_unchecked</span>
            <span className="title">{prop.select.content}</span>
            <span className="material-icons">star_border</span>
          </label>
        </div>
        <div className="links">
          <span className="material-icons">input</span>
          <span
            className="material-icons"
            onClick={() => {
              prop.deleteID(prop.select.id);
            }}
          >
            delete_outline
          </span>
        </div>
      </div>
    );
  }
}

export default Detail;
