import Link from "next/link";

export default function HomeButton() {
  return (
    <div className="flex m-4 justify-between items-center">
      <Link href={"/"} className="p-2 border rounded">
        Home
      </Link>
    </div>
  );
}
