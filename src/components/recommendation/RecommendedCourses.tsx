
import { Button } from "@/components/ui/button";
import { Star, TrendingUp } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/types";

interface RecommendedCoursesProps {
  courses: Course[];
}

const RecommendedCourses = ({ courses }: RecommendedCoursesProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Button variant="outline" className="w-full">
        <TrendingUp className="mr-2 h-4 w-4" />
        View All Recommendations
      </Button>
    </>
  );
};

export default RecommendedCourses;
