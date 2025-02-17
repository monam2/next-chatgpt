import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  item: {
    id: string;
    href: string;
    icon: ReactNode;
    label: string;
  };
};

export default function SidebarItem({ item }: Props) {
  const { id, href, icon, label } = item;
  return (
    <Link
      href={href}
      className="flex items-center justify-between text-sm p-3 group hober:text-white hober:bg-white/10 rounded-lg"
    >
      <div>
        {icon} {label}
      </div>
      <div>드롭다운 메뉴</div>
    </Link>
  );
}
