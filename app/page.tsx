import CoursesCard from "@/components/learn-space/courses-card";
import Assignments from "@/components/learn-space/assignments";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <CoursesCard />
      <Assignments />
    </div>
  );
}
