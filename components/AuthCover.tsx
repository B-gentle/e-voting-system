import Image from "next/image";
import Link from "next/link";

export default function AuthCover({
  children,
  illustration = "/auth-Illustration.png",
}: {
  children: React.ReactNode;
  illustration?: string;
}) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Left illustration */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute top-6 left-6">
          <Image src="/dotgrid.png" alt="" width={40} height={40} />
        </div>
        <Link href="/">
        <Image
          src={illustration}
          alt="Auth illustration"
          width={400}
          height={400}
          className="z-10"
          priority
        />
        </Link>
        <div className="absolute bottom-6 right-6">
          <Image src="/dotgrid.png" alt="" width={40} height={40} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center px-4 py-8 form-bg">
        {children}
      </div>
    </div>
  );
}