import MainButton from "@/components/custom/MainButton";
import MainHeader from "@/components/MainHeader";
import MainSubheader from "@/components/MainSubheader";

export default function Home() {
  return (
    <main className="">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <MainHeader />
        <MainSubheader/>
        <div className="flex flex-row -ml-20">
          <MainButton label="about me" />
          <MainButton label="projects" />
          <MainButton label="contact" />
        </div>
      </div>
    </main>
  );
}
