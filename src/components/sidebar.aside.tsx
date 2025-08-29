// sidebar.aside.tsx
"use client";
import { menu, SideProps } from "./sidebar";

export default function SidebarAside({
  activeSection,
  setActiveSection,
}: SideProps) {
  return (
    <aside className="hidden lg:block md:w-fit">
      <nav
        className="sticky top-6 flex flex-col gap-2 outline rounded-md p-4 
                   min-h-[250px] items-stretch justify-center mx-auto"
      >
        {menu.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-300
                ${isActive ? "text-blue-600 dark:text-blue-300 font-semibold" : ""}
                hover:font-semibold`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
