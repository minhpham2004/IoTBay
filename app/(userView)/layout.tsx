import { Navbar, NavLink } from "@/components/Navbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/orders">Your current order</NavLink>
        <NavLink href="/profile">Your Profile</NavLink>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
