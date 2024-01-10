import Navbar from "@/components/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        {children}
      </div>
    </>
  );
}

export default ProtectedLayout;