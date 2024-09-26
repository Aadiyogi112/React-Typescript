type PositionH = "left" | "right" | "center";
type PositionV = "top" | "bottom" | "middle";

type ToastProps = {
  position: Exclude<`${PositionH}-${PositionV}`, "center-center"> | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position is-{position}</div>;
};
