"use client"

import { Profile } from "@/app/components/profile/Profile";

export default function ProfilePage() {
    
  return (
    <div className="flex flex-col container max-w-6xl justify-center">
      <h1 className="flex text-center justify-center py-16">Your profile page</h1>
      <section className="flex justify-center">
      <Profile userId={1}/>
      </section>
    </div>
  );
}

