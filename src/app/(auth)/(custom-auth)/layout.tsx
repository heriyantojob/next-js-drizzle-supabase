

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  //return <NonAuthLayout withNavbar>{children}</NonAuthLayout>;
  return (
    <div>
      {children}
      
    </div>
  )
  
    
}
