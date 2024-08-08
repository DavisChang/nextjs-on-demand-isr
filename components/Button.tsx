import React, { SetStateAction, useEffect, useRef, useState } from "react";

// use type: clear and explicit
import { type Color } from "../lib/types";

// type alias
type ButtonComponentProps = React.ComponentPropsWithoutRef<"button">;

// interface & interface extending
interface ButtonProps extends ButtonComponentProps {
  // Union Type
  color: Color;
  // CSSProperties
  style: React.CSSProperties;
  // Record
  borderRadius: Record<string, number>;
  // Tuple
  padding: [number, number, number, number];
  // onClick Function
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // Children
  children: React.ReactNode;

  // jsx element
  icon: JSX.Element;

  // react setter function
  setCount: React.Dispatch<SetStateAction<number>>;
}

type User = {
  sessionId: string;
  name: string;
  age: number;
};

// The Guest does not have a name or age yet.
// You can remove something from User
type Guest = Omit<User, "name" & "age">;

// More specifically these strings (readonly)
const buttonTextOptions = ["option1", "option2", "option3"] as const;

// Generics (<T,> for tsx function)
const convertToArray = <T,>(value: T): T[] => {
  return [value];
};
// Generics (<T> for function)
function convertToArray2<T>(value: T): T[] {
  return [value];
}

export default function Button({
  children,
  type,
  borderRadius,
  setCount,
  ...rest
}: ButtonProps) {
  // After fetching, the user data will no longer be null.
  const [user, setUser] = useState<User | Guest | null>(null);
  // The user may be null, so you should use optional chaining.
  const userName = user?.name;
  const guestSessionId = user?.sessionId;

  // useRef
  const ref = useRef<HTMLButtonElement>(null);

  // useEffect
  useEffect(() => {
    // assert to typescript it's going to be this type
    const previousButtonColor = localStorage.getItem("buttonColor") as Color;
  });

  const onClick = () => {
    // Generics
    convertToArray(10);
    convertToArray("Hello");

    // Generics for function
    convertToArray2(10);
    convertToArray2("Hello");
  };

  return (
    <button ref={ref} type={type} {...rest}>
      <div>{userName}</div>
      {children}
    </button>
  );
}
