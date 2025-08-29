import { menu, SideProps } from "./sidebar";

export default function DockerMobile({ activeSection, setActiveSection }: SideProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border dark:border-gray-700 shadow-lg z-50 lg:hidden flex justify-around py-2 px-4 rounded-full max-w-md w-[95%]">
      {menu.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`transition-colors ${
              isActive
                ? "text-blue-500"
                : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={item.name}
            title={item.name}
          >
            {item.icon}
          </button>
        );
      })}
    </div>
  );
}
