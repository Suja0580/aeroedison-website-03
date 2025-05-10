
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, Clock, Star } from "lucide-react";
import { useState } from "react";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

const CourseCard = ({ course, compact = false }: CourseCardProps) => {
  const [isSaved, setIsSaved] = useState(course.isSaved || false);

  const toggleSaved = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer hover:-translate-y-1 ${
        compact ? "" : "flex flex-col"
      }`}
    >
      <div className="relative">
        <img 
          src={course.imageUrl || "/placeholder.svg"} 
          alt={course.title}
          className={`w-full object-cover ${compact ? "h-32" : "h-40"}`}
        />
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
          onClick={toggleSaved}
        >
          {isSaved ? 
            <BookmarkCheck className="h-4 w-4 text-pet-blue" /> : 
            <Bookmark className="h-4 w-4" />
          }
        </Button>
        {course.recommended && !compact && (
          <Badge 
            className="absolute bottom-2 left-2 bg-pet-blue/90 text-white"
          >
            Recommended for You
          </Badge>
        )}
      </div>
      <CardContent className={`${compact ? "p-3" : "p-4"} flex-1 flex flex-col`}>
        <div className="flex items-start justify-between mb-2">
          <div className={compact ? "" : "flex-1"}>
            <h3 className={`font-medium ${compact ? "text-sm line-clamp-1" : "mb-1"}`}>
              {course.title}
            </h3>
            {!compact && (
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {course.instructor}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Star className={`text-yellow-500 fill-yellow-500 ${compact ? "h-3 w-3" : "h-4 w-4"}`} />
            <span className={`ml-1 ${compact ? "text-xs" : "text-sm"}`}>
              {course.rating}
            </span>
            <span className={`ml-1 text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
              ({course.reviewCount})
            </span>
          </div>
          
          <div className={`flex items-center text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
            <Clock className={`mr-1 ${compact ? "h-3 w-3" : "h-4 w-4"}`} />
            {course.duration}
          </div>
        </div>
        
        {!compact && (
          <div className="mt-3 space-y-2">
            <div className="flex flex-wrap gap-1">
              {course.categories.slice(0, 2).map(category => (
                <Badge key={category} variant="outline" className="text-xs">
                  {category}
                </Badge>
              ))}
              {course.categories.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{course.categories.length - 2}
                </Badge>
              )}
            </div>
            
            <Button className="w-full mt-2" size="sm">
              View Course
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
