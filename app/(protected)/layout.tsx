import Navbar from "@/components/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 w-full flex flex-col gap-y-10 items-center justify-center bg-muted">
        {children}
      </div>
    </>
  );
}

export default ProtectedLayout;