
import { Button } from "@/components/ui/button";
import { Bookmark, Compass } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-display font-bold">Learning Hub</h1>
        <p className="text-muted-foreground">Personalized recommendations for your learning journey</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">
          <Bookmark className="mr-1 h-4 w-4" />
          Saved Courses
        </Button>
        <Button>
          <Compass className="mr-1 h-4 w-4" />
          Explore
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
