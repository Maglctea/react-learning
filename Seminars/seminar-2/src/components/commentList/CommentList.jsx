import './commentList.css'
import { useState } from "react";
import { Comment } from "../comment/comment";

export function CommentList() {
  const [commentList, setCommentList] = useState([
    { id: 1, name: "You", text: "Это первый комментарий", time: "21:30" },
    { id: 2, name: "You", text: "Это второй комментарий", time: "21:30" },
    { id: 3, name: "You", text: "Это третий комментарий", time: "21:30" },
  ]);

  function deleteComment(comment) {
    const newCommentList = commentList.filter(
      (currentComment) => currentComment !== comment
    );
    setCommentList(newCommentList);
  }

  return (
    <ul className="commentList">
      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          text={comment.text}
          time={comment.time}
          btnClickCallback={() => deleteComment(comment)}
        />
      ))}
    </ul>
  );
}
