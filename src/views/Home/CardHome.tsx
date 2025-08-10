import SearchIcon from "@mui/icons-material/Search";

export default function CardHome({
  title = "",
  text = "",
  classes = { img: "" },
  IconImg = SearchIcon,
}) {
  return (
    <article className="p-4 sm:gap-6 grid sm:grid-cols-3 max-w-[800px]">
      <IconImg
        className={
          "text-warning !w-full !max-w-96 !h-fit xs:!w-1/2 sm:!w-full drop-shadow-sm drop-shadow-black/60 max-sm:place-self-center" +
          (classes.img ? " " + classes.img : "")
        }
      />

      <div className="sm:col-span-2 sm:py-4 max-sm:text-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <br />
        <p>{text}.</p>
      </div>
    </article>
  );
}
