
import { ModeToggle } from "@/components/header";
import Profile from "@/components/profile";
import Footer from "@/components/sections/footer";
import SidebarMenu from "@/components/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Konten utama */}
      <div className="flex justify-end p-1">
        <ModeToggle/>
      </div>
      <div className="flex-grow pb-20 md:pb-0">
        
        <Profile />
        <div className="flex flex-col">
          <SidebarMenu />
        </div>
      </div>
      <Footer />
    </main>
  );
}
