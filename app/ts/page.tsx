"use client";
import { useState } from "react";
import Button from "../../components/Button";
import Button2 from "../../components/Button2";
export default function Ts() {
  const [count, setCount] = useState(0);

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("onClickHandler", e);
  };
  const icon = <i></i>;

  return (
    <div>
      TS
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
    </div>
  );
}
