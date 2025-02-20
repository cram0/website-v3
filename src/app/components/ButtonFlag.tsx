import { RiExternalLinkLine } from "react-icons/ri";

export default function ButtonFlag({
  flag,
  label,
  url,
}: {
  flag: string;
  label: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-15 flex-row items-center justify-between overflow-hidden rounded-xl bg-yellow-200/10 text-yellow-200 transition-all hover:bg-yellow-200/20"
    >
      <img
        src={`https://flagcdn.com/${flag}.svg`}
        alt={label}
        width={60}
        className="absolute -left-3 h-full w-32 skew-x-12 object-cover"
      />
      <div className="flex w-full flex-row items-center justify-end gap-4">
        <span className="font-oxanium hidden text-xl sm:block">{label}</span>
        <span className="font-oxanium block text-xl sm:hidden">
          {label.slice(0, 2).toUpperCase()}
        </span>
        <RiExternalLinkLine className="mr-6 h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}
