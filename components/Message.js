import React from "react";

function Message() {
  return (
    <div className="bg-indigo-600 dark:bg-indigo-950">
      <div className=" md:w-4/6 sm:w-full mx-auto text-center p-3 text-white">
        Made with ☕ and 💻 by{" "}
        <a className="underline decoration-white/40 hover:decoration-white" href="https://blogtheorem.com">
          blogtheorem
        </a>
      </div>
    </div>
  );
}

export default Message;
