import React, { Fragment } from "react";

const Chat = (props: any) => {
  return (
    <Fragment>
      <div
        className={`bg-white my-5 rounded-[10px] w-fit max-w-[86%] ${
          props.item.bot ? "" : "my-own"
        }`}
      >
        <div className="p-[10px] custom-shadow">
          <p className="text-sm font-normal leading-[21px]">
            {props.item.text}
          </p>
          <span className="text-xs leading-5 font-light text-[#797979] block text-right">
            18.03
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
