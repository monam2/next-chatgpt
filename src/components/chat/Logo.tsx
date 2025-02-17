import { BASE_URL } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={BASE_URL} className="flex items-end gap-2">
      <Image
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
      ></Image>
    </Link>
  );
}
