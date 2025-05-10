
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Code, LineChart, LayoutGrid } from "lucide-react";
import { LearningPath } from "@/types";

interface LearningPathsSectionProps {
  learningPaths: LearningPath[];
}

const LearningPathsSection = ({ learningPaths }: LearningPathsSectionProps) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <BookOpen className="mr-2 h-5 w-5 text-green-600" />
        <h2 className="text-xl font-bold">Learning Paths</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Structured course sequences to master a skill</p>
      
      <Tabs defaultValue="development">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="development">Web Development</TabsTrigger>
            <TabsTrigger value="data">Data Science</TabsTrigger>
            <TabsTrigger value="design">UX Design</TabsTrigger>
          </TabsList>
        </div>
        
        {["development", "data", "design"].map(path => (
          <TabsContent key={path} value={path} className="space-y-4 mt-0">
            {learningPaths
              .filter(p => p.category === path)
              .map(learningPath => (
                <Card key={learningPath.id} className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-full bg-${path === "development" ? "pet-soft-blue" : path === "data" ? "pet-soft-purple" : "pet-soft-green"} flex items-center justify-center mt-1`}>
                          {path === "development" ? 
                            <Code className="h-5 w-5 text-pet-blue" /> : 
                            path === "data" ? 
                              <LineChart className="h-5 w-5 text-purple-500" /> : 
                              <LayoutGrid className="h-5 w-5 text-green-500" />
                          }
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{learningPath.title}</h3>
                          <p className="text-sm text-muted-foreground">{learningPath.description}</p>
                          <div className="flex items-center mt-2">
                            <Badge variant="outline" className="mr-2">
                              {learningPath.level}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {learningPath.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Path
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default LearningPathsSection;
