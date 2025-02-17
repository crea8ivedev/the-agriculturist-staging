import clsx from "clsx";

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
  style,
}) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight font-display",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-2xl md:text-3xl",
        className
      )}
      style={style}
    >
      {children}
    </Comp>
  );
}
