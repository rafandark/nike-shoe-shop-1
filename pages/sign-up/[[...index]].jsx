import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <SignUp/>
        </div>
      </div>
    </div>
  );
}