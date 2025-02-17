import { BASE_URL, CHAT_ROUTES } from "@/constants/routes";
import Logo from "./Logo";
import { MessageSquare, Plus } from "lucide-react";
import SidebarItem from "./SidebarItme";

const DUMMY_ITEMS = [
  {
    id: "new",
    label: "새로운 대화",
    icon: <Plus />,
    href: BASE_URL,
  },
  {
    id: "1",
    label:
      "새로운 긴 대화 예시입니다. 새로운 긴 대화 예시입니다. 새로운 긴 대화 예시입니다.",
    icon: <MessageSquare />,
    href: `${CHAT_ROUTES.CONVERSATION}/1`,
  },
  {
    id: "2",
    label: "일반 대화 메시지입니다.",
    icon: <MessageSquare />,
    href: `${CHAT_ROUTES.CONVERSATION}/2`,
  },
];

export default function Sidebar() {
  return (
    <nav className="h-full p-3 bg-black flex-col text-white">
      <div className="flex-1 overflow-y-auto">
        <Logo />
        <div className="flex flex-col gap-2 mt-10">
          {DUMMY_ITEMS.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>로그아웃 버튼</div>
    </nav>
  );
}
