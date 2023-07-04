export const metadata = {
  title: "My Properties",
  description: "My Properties",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return <>{children}</>;
};

export default RootLayout;
