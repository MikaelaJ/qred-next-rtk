"use client";

import { Profile } from "@/app/components/profile/Profile";
import { useParams } from "next/navigation";

export default function ProfilePage() {

  const params = useParams();
  const userId = params.userId;

  const userIdNumber = parseInt(userId as string, 10);
  if (isNaN(userIdNumber)) {
    return <div>Invalid user ID</div>;
  }
  return (
    <div className="flex flex-col container max-w-6xl justify-center">
      <h1 className="flex text-center justify-center py-16">Edit user profile</h1>
      <section className="flex justify-center">
      <Profile userId={userIdNumber} />
      </section>
    </div>
  );
};
