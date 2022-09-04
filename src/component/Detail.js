import React from "react";
import "../css/detail.css";
import Star from "./Star";

function Detail(prop) {
  // const [updateContent, setUpdateContent] = useState("");
  if (prop.selectTodo !== null && prop.open) {
    return (
      <div className={"detail "}>
        <div className="container">
          <div className="step">
            <label>
              <span className="material-icons">radio_button_unchecked</span>
              <input
                type="text"
                value={prop.selectTodo.todo}
                onChange={(e) => {
                  console.log(e.target.value);
                  prop.onUpdate(e.target.value);
                  // prop.onUpdate(prop.content);
                }}
              />
              <span className="title">{prop.selectTodo.todo}</span>
              <Star content={prop.selectTodo} />
            </label>
            <label className="addStep">
              <span className="material-icons">radio_button_unchecked</span>
              <span>단계 추가</span>
            </label>
          </div>
          <div>
            <label>
              <span className="material-icons">wb_sunny</span>
              <span>나의 하루에 추가됨</span>
            </label>
          </div>
          <div>
            <label>
              <span className="material-icons">wb_sunny</span>
              <span>미리 알림</span>
            </label>
            <label>
              <span className="material-icons">wb_sunny</span>
              <span>기한 설정</span>
            </label>
            <label>
              <span className="material-icons">wb_sunny</span>
              <span>반복</span>
            </label>
          </div>
          <div>
            <label>
              <span className="material-icons">wb_sunny</span>
              <span>범주 선택</span>
            </label>
          </div>
          <div>
            <label>
              <span className="material-icons">wb_sunny</span>
              <input type="file" />
            </label>
          </div>
          <div>
            <textarea placeholder="메모 추가"></textarea>
          </div>
          <div className="links">
            <span className="material-icons" onClick={() => prop.onClose()}>
              input
            </span>
            <span>{prop.selectTodo.date}</span>
            <span
              className="material-icons"
              onClick={() => {
                prop.onDeleteID(prop.selectTodo._id);
              }}
            >
              delete_outline
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
