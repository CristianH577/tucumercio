import SearchIcon from "@mui/icons-material/Search";

export default function CardHome({
  title = "",
  text = "",
  classes = { img: "" },
  IconImg = SearchIcon,
}) {
  return (
    <article className="p-4 min-[500px]:gap-6 grid min-[500px]:grid-cols-3 max-w-[800px]">
      <IconImg
        className={
          "text-warning !w-full !max-w-96 !h-fit xs:!w-1/2 min-[500px]:!w-full drop-shadow-sm drop-shadow-black/60" +
          (classes.img ? " " + classes.img : "")
        }
      />

      <div className="min-[500px]:col-span-2 min-[500px]:py-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <br />
        <p>{text}.</p>
      </div>
    </article>
  );
}
