import { CSSProperties, ReactNode } from "react";

export interface StackProps {
  gap?: CSSProperties["gap"];
  children: ReactNode;
}
export const Stack = ({ gap = "16px", children }: StackProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
      }}
    >
      {children}
    </div>
  );
};
