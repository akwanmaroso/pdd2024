import Link from "next/link";
import { navLists } from "@/constants";

type SidebarItemProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarItem = ({ setShowSidebar }: SidebarItemProps) => {
  return (
    <ul className="mt-4 flex flex-col gap-6 px-2">
      {navLists.map((nav) => (
        <Link key={nav.id} href={nav.navigate_url}>
          <li
            className="text-pdd-light/60 hover:text-pdd-purple"
            onClick={() => setShowSidebar(false)}
          >
            {nav.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarItem;
