import "../css/detail.css";
import Star from "./Star";

function Detail(prop) {
  if (prop.select !== null) {
    return (
      <div className="detail">
        <div className="container">
          <label>
            <span className="material-icons">radio_button_unchecked</span>
            <span className="title">{prop.select.content}</span>
            <Star star={prop.star} />
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
