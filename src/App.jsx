import "@fontsource/jetbrains-mono";
import Navbar from "./navbar";
import Card from "./card";

export default function App() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f084b] via-[#5f4b8b] to-transparent" />

      {/* Soft bluish bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#c8d8f5] to-transparent" />

      {/* Optional subtle blur */}
      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/5" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <h1 className="font-mono font-bold text-3xl text-white px-32 pb-4 pt-20 rounded-lg shadow-lg">
          hi, i'm arshia!
        </h1>
        <Card />
      </div>
    </div>
  );
}
