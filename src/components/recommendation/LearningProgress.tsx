
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const LearningProgress = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur flex items-center justify-center flex-shrink-0">
        <GraduationCap className="h-10 w-10 text-pet-blue" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-1">Your Learning Progress</h2>
        <p className="text-sm mb-4">Continue where you left off</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Current Course</span>
              <Badge variant="success" className="text-xs">In Progress</Badge>
            </div>
            <p className="text-sm font-medium mb-1">Advanced React Patterns</p>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-right mt-1 text-muted-foreground">65% complete</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Weekly Goal</span>
              <span className="text-xs">5 hours / week</span>
            </div>
            <Progress value={40} className="h-2" />
            <p className="text-xs text-right mt-1 text-muted-foreground">2h of 5h completed</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Learning Streak</span>
              <span className="text-xs">4 days</span>
            </div>
            <Progress value={57} className="h-2" />
            <p className="text-xs text-right mt-1 text-muted-foreground">4 of 7 days this week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;
