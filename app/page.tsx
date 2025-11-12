"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/coupon", {
      method: "POST",
    });
    fetch("/api/coupon", {
      method: "POST",
    });
    fetch("/api/coupon", {
      method: "POST",
    });
    fetch("/api/coupon", {
      method: "POST",
    });
    fetch("/api/coupon", {
      method: "POST",
    });
    fetch("/api/coupon", {
      method: "POST",
    });
  }, []);

  return (
    <div>
      <Link href={"/a"} prefetch={true}>
        A
      </Link>
      <Link href={"/b"} prefetch={true}>
        B
      </Link>
      <Link href={"/c"} prefetch={true}>
        C
      </Link>
      <Link href={"/d"} prefetch={true}>
        D
      </Link>
      <Image src={"/image.png"} alt="Example image" width={100} height={100} />
    </div>
  );
}
