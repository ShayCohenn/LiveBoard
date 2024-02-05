import Navbar from "./_components/Navbar";
import OrgSidebar from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";

type props = {
  children: React.ReactNode;
};

const layout = (props: props) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
