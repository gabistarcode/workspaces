import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface Course {
  id: number;
  name: string;
  time: string;
}

// Placeholder data (replace with actual data fetching logic)
const upcomingCourses: Course[] = [
  { id: 1, name: "Introduction to AI", time: "10:00 AM" },
  { id: 2, name: "Advanced Mathematics", time: "2:00 PM" },
  { id: 3, name: "Data Structures", time: "4:30 PM" },
];

const UpcomingCoursesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="mr-2 h-6 w-6" />
          Upcoming Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {upcomingCourses.map((course) => (
            <div key={course.id} className="flex justify-between items-center mb-2">
              <span>{course.name}</span>
              <Badge>{course.time}</Badge>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default UpcomingCoursesCard;