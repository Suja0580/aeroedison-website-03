
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/types";
import { Category } from "@/types";

interface CategoryBrowserProps {
  categories: Category[];
  courses: Course[];
}

const CategoryBrowser = ({ categories, courses }: CategoryBrowserProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory
    ? courses.filter(course => course.categories.includes(selectedCategory))
    : courses;

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Browse by Category</h2>
          <p className="text-sm text-muted-foreground">Explore courses in different subject areas</p>
        </div>
        <Button variant="outline" size="sm">
          <LayoutGrid className="mr-2 h-4 w-4" />
          View All
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6 mt-6">
        <Button 
          variant={selectedCategory === "" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("")}
        >
          All
        </Button>
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center"
          >
            <category.icon className="mr-1 h-4 w-4" />
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCourses.slice(0, 8).map(course => (
          <CourseCard key={course.id} course={course} compact />
        ))}
      </div>
    </>
  );
};

export default CategoryBrowser;
