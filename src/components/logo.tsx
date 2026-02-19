import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={className ?? "flex items-center gap-3"}>
      <Image src="/logo.svg" alt="Qgenetics logo" width={34} height={34} priority />
      <span className="text-base font-extrabold tracking-tight sm:text-lg">Qgenetics</span>
    </div>
  );
}
