export default function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div
      id="skills"
      className="w-full border-t border-gray-800 pt-4 dark:border-gray-500"
    >
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Technical skills.
      </h2>

      <ul className="flex flex-col gap-2 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="items-end grid  sm:grid-cols-[170px_1fr]">
            <p>{key}:</p>
            <p className="text-muted-foreground text-[#71717a] dark:text-[#a1a1aa] text-sm">
              {value.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
