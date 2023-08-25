import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-24">
    <div className="container">
      <div className="flex justify-center">
        <SignIn redirectUrl="/"/>
      </div>
    </div>
  </div>
  )
}