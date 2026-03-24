type IDsaData = {
  TOPICS: string[];
};

export default function Dsa({ data }: { data: IDsaData }) {
  return (
    <div id="dsa" className="w-full">
      <h2 className="font-medium text-primary/90 text-base">
        Data Structures & Algorithms.
      </h2>
      <ul className="flex flex-wrap gap-2 mt-4 font-normal text-primary/90 text-base">
        <li className=" py-1 text-sm rounded-md bg-muted text-primary/90 items-end grid  sm:grid-cols-[170px_1fr]">
          <p>Topics practiced:</p>
          <p className="text-muted-foreground text-[#71717a] dark:text-[#a1a1aa] text-sm">
            {data.TOPICS.join(", ")}
          </p>
        </li>
      </ul>
    </div>
  );
}
