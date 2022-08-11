import "./Today.css";

function Today() {
  var now = new Date();
  var todayMonth = now.getMonth() + 1;
  var todayDate = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  var todayDay = week[now.getDay()];

  return (
    <main className="today">
      <div className="main_title">
        <a href="/">
          <span className="material-icons">menu</span>
        </a>
        <h3 className="drag">오늘 할 일</h3>
        <a href="/">
          <span className="material-icons">more_horiz</span>
        </a>
      </div>
      <p className="date drag">
        {todayMonth}월 {todayDate}일, {todayDay}요일
      </p>
    </main>
  );
}

export default Today;
