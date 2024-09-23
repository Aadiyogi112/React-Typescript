type HeadingProp = {
  children: string;
};

export const Heading = (props: HeadingProp) => {
  return <h1>{props.children}</h1>;
};
