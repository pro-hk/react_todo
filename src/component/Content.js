function Content() {
  // 컨텐트 관리
  const contents = [
    { id: 1, content: "abcd", type: "작업" },
    { id: 2, content: "abcd", type: "작업" },
  ];

  const ContentList = () =>
    contents.map((i) => (
      <li key={i.id}>
        <span className="material-icons check">radio_button_unchecked</span>
        <div className="content">
          <p>{i.content}</p>
          <span>{i.type}</span>
        </div>
        <span className="material-icons">star_border</span>
      </li>
    ));
  // 컨텐트 end

  return (
    <ul className="contents">
      <ContentList />
    </ul>
  );
}

export default Content;
