import "./comment.css";

export function Comment(props) {
  const { name, time, text, btnClickCallback } = props;
  return (
    <li>
      <div className={`comment_block comment_blue`}>
        <div className={`comment_header comment_blue`}>
          <div className="comment_header_info">
            <span className={`comment_author comment_blue`}>{name}</span>
            <span className="comment_time">{time}</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 64"
            width="24"
            height="24"
            onClick={btnClickCallback}
          >
            <title>Trash Can</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M42.48,64h-29a6,6,0,0,1-6-5.5L4,16H52L48.46,58.5A6,6,0,0,1,42.48,64Z"
                />
                <path
                  className="cls-2"
                  d="M52,8H38V6a6,6,0,0,0-6-6H24a6,6,0,0,0-6,6V8H4a4,4,0,0,0-4,4v4H56V12A4,4,0,0,0,52,8ZM22,6a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2V8H22Z"
                />
                <path
                  class="cls-2"
                  d="M28,58a2,2,0,0,1-2-2V24a2,2,0,0,1,4,0V56A2,2,0,0,1,28,58Z"
                />
                <path
                  class="cls-2"
                  d="M38,58h-.13A2,2,0,0,1,36,55.88l2-32a2,2,0,1,1,4,.25l-2,32A2,2,0,0,1,38,58Z"
                />
                <path
                  class="cls-2"
                  d="M18,58a2,2,0,0,1-2-1.87l-2-32a2,2,0,0,1,4-.25l2,32A2,2,0,0,1,18.13,58Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="comment_text">{text}</div>
      </div>
    </li>
  );
}
