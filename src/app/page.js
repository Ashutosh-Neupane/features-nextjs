import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section className="flex-1 flex flex-col justify-center items-center text-center p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Site 🚀</h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover our features and what we offer.
          </p>
          <Link
            href="/feature"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Features
          </Link>
        </section>
      </main>
    </>
  );
}
