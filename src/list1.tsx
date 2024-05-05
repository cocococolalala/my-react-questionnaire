import type { FC } from "react";
import "./list1.css";

const List1: FC = () => {
  const questionList = [
    { id: "q1", title: "问卷1", isPublished: true },
    { id: "q2", title: "问卷2", isPublished: false },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: false },
  ];

  function edit(id: string) {
    console.log("edit", id);
  }

  return (
    <div>
      <h1>问卷列表页1</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question;
          return (
            <div key={id} className="item">
              <strong>{title}</strong>
              &nbsp;
              {isPublished ? (
                <span style={{ color: "green" }}>已发布</span>
              ) : (
                <span style={{ color: "red" }}>未发布</span>
              )}
              <button
                onClick={() => {
                  edit(id);
                }}
              >
                编辑问卷
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List1;
