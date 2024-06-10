import { UserList } from "@/app/components/admin/UserList";

export default function VerifyPage() {
  return (
    <section className="flex-col max-w-4xl container justify-center">
     <h3 className="flex text-4xl font-poppins font-bold justify-center">Users list</h3>
      <UserList/>
    </section>
  );
}
