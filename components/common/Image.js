export default function ResponsiveImage(props) {
  return (
    <section
      className={"responsive-image" + (props.showshadow ? " add-shadow" : "")}
    >
      <img
        className="w-full"
        alt={props.alt}
        layout="responsive"
        width="128"
        height="72"
        {...props}
      />
    </section>
  );
}
