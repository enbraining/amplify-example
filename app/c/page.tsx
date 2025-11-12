"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div>
      <p>C</p>
      <Image src={"/image.png"} alt="Example image" width={100} height={100} />
    </div>
  );
}
