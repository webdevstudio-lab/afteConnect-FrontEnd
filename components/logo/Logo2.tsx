import { Fingerprint } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo2 = (props: { url?: string; size?: string; fontSize?: string }) => {
  const { url = "/", size = "40px", fontSize = "24px" } = props;
  return (
    <div className="flex flex-row space-x-1 items-center">
      <div
        className="flex items-center justify-center
  sm:justify-start
    "
      >
        <Link
          href={url}
          className="
            rounded-lg flex items-center border-1 dark:border-gray-100
             justify-center bg-gradient-to-br from-blue-400 to-blue-900 to-90%
              "
          style={{ width: size, height: size }}
        >
          <span
            className="font-bold text-gray-50"
            style={{ fontSize: fontSize }}
          >
            <Fingerprint />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Logo2;
