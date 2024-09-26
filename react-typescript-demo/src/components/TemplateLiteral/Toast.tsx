type PositionH = "left" | "right" | "center";
type PositionV = "top" | "bottom" | "middle";

type ToastProps = {
  position: `${PositionH}-${PositionV}`;
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position is-{position}</div>;
};
