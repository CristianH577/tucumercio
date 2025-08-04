import { SvgLogo } from "../assets/svgs/svgsLogos";

export default function Logo({
  className,
  classes = { svg: "", text: "" },
}: {
  className?: string;
  classes?: { svg?: string; text?: string };
}) {
  return (
    <div
      className={"flex items-center gap-1" + (className ? " " + className : "")}
    >
      <SvgLogo
        className={
          "h-8 w-fit stroke-warning" + (classes.svg ? " " + classes.svg : "")
        }
      />
      <span
        className={
          "font-semibold text-warning" +
          (classes.text ? " " + classes.text : "")
        }
      >
        Tucumercio
      </span>
    </div>
  );
}
