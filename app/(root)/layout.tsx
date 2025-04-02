import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Behnam" ,lastName:'Sep'}; // Simulating a logged-in user. In a real application, this would be fetched from a global state or context.
  return (
    <main className="flex w-full h-screen font-inter">
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
