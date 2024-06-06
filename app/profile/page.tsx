"use client"
import { usePathname } from 'next/navigation'
import { Profile } from "../components/profile/Profile";


export default function ProfilePage() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col container max-w-6xl justify-center">
      <h1 className="flex text-center justify-center py-16">Welcome to your profile page</h1>
      <section className="flex justify-center">
      <Profile userId={7}/>
      </section>
    </div>
  );
}

