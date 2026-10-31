import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Brian Timba | All rights reserved</p>
      </div>
    </footer>
  );
}