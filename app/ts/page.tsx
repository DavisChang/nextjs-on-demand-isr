"use client";
import { useState } from "react";
import Button from "../../components/Button";
import Button2 from "../../components/Button2";
import ChatInput from "../../components/chatInput/ChatInput";
export default function Ts() {
  const [count, setCount] = useState(0);

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("onClickHandler", e);
  };
  const icon = <i></i>;

  const handleSend = (message: string) => {
    console.log("handleSend:", message);
  };
  return (
    <div>
      <h2>TS</h2>
      <hr />
      <div>
        <h3>Button</h3>
        <Button
          type="button"
          color="red"
          style={{ fontSize: 20 }}
          borderRadius={{
            topLeft: 5,
            topRight: 5,
          }}
          padding={[20, 30, 20, 30]}
          onClick={onClickHandler}
          icon={icon}
          setCount={setCount}
        >
          Click Me {count}
        </Button>
      </div>
      <hr />
      <div>
        <h3>Button2</h3>
        <Button2 countValue={1} countHistory={[1, 2, 3]} />
        <Button2 countValue={"A"} countHistory={["A", "B", "C"]} />
      </div>
      <hr />
      <div>
        <h3>ChatInput | Created by ChatGPT</h3>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
