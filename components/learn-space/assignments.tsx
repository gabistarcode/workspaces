import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { CheckSquare } from "lucide-react";

interface Assignment {
  id: number;
  name: string;
  count: number;
}

// Placeholder data (replace with actual data fetching logic)
const assignmentsToGrade: Assignment[] = [
  { id: 1, name: "AI Ethics Essay", count: 5 },
  { id: 2, name: "Linear Algebra Problem Set", count: 3 },
  { id: 3, name: "Algorithm Implementation", count: 7 },
];

const AssignmentsToGradeCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckSquare className="mr-2 h-6 w-6" />
          Assignments to Grade
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {assignmentsToGrade.map((assignment) => (
            <div key={assignment.id} className="flex justify-between items-center mb-2">
              <span>{assignment.name}</span>
              <Badge variant="destructive">{assignment.count} to grade</Badge>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AssignmentsToGradeCard;