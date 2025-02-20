import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

export default function ImageLoader({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${style}`}>
      <img
        src={src}
        alt={alt}
        className={` ${style} ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 flex animate-spin items-center justify-center">
          <TbFidgetSpinner />
        </div>
      )}
    </div>
  );
}
