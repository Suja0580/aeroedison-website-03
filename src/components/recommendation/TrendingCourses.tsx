
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, TrendingUp } from "lucide-react";
import { Course } from "@/types";

interface TrendingCoursesProps {
  courses: Course[];
}

const TrendingCourses = ({ courses }: TrendingCoursesProps) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
        <h2 className="text-xl font-bold">Trending Now</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Popular among learners</p>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={course.id} className="flex items-start space-x-3">
            <div className="font-bold text-xl text-muted-foreground w-6 text-center">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm">{course.title}</h3>
              <p className="text-xs text-muted-foreground">{course.instructor}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs ml-1">{course.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-3 mx-2" />
                <span className="text-xs text-muted-foreground">{course.enrollmentCount.toLocaleString()} students</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4">
        <Star className="mr-2 h-4 w-4" />
        View All Trending
      </Button>
    </>
  );
};

export default TrendingCourses;
