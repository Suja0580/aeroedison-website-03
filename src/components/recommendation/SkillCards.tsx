
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Star, Bookmark, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SkillCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gradient-to-r from-pet-soft-purple to-purple-100 border-none shadow p-6">
        <div className="flex flex-col h-full justify-between">
          <div>
            <GraduationCap className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Skill Assessment</h3>
            <p className="text-sm mb-4">Evaluate your current skills to get more tailored recommendations.</p>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" className="bg-white/50 hover:bg-white">Take Assessment</Button>
            <ChevronRight className="h-5 w-5 text-purple-600" />
          </div>
        </div>
      </Card>
      
      <Card className="bg-gradient-to-r from-pet-soft-green to-green-100 border-none shadow p-6">
        <div className="flex flex-col h-full justify-between">
          <div>
            <Star className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Learning Goals</h3>
            <p className="text-sm mb-4">Set personal learning goals and track your progress over time.</p>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" className="bg-white/50 hover:bg-white">Set Goals</Button>
            <ChevronRight className="h-5 w-5 text-green-600" />
          </div>
        </div>
      </Card>
      
      <Card className="bg-gradient-to-r from-pet-soft-blue to-blue-100 border-none shadow p-6">
        <div className="flex flex-col h-full justify-between">
          <div>
            <Bookmark className="h-8 w-8 text-pet-blue mb-4" />
            <h3 className="text-lg font-medium mb-2">Saved for Later</h3>
            <p className="text-sm mb-4">Access your bookmarked courses and learning resources.</p>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" className="bg-white/50 hover:bg-white">View Saved</Button>
            <ChevronRight className="h-5 w-5 text-pet-blue" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillCards;
