
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Bookmark, 
  ChevronRight, 
  Clock, 
  Code, 
  Compass, 
  GraduationCap, 
  LayoutGrid, 
  LineChart,
  Plus, 
  Star, 
  TrendingUp 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import { mockCourses, mockCategories, mockLearningPaths } from "../mock/mockEducationData";

const RecommendationDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory
    ? mockCourses.filter(course => course.categories.includes(selectedCategory))
    : mockCourses;

  // Get recommended courses (simplified logic - in reality would use more complex algorithm)
  const recommendedCourses = mockCourses
    .filter(course => course.recommended)
    .slice(0, 3);
    
  // Get trending courses
  const trendingCourses = [...mockCourses]
    .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
    .slice(0, 4);

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
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

        {/* Learning Progress */}
        <Card className="bg-gradient-to-r from-pet-soft-blue to-pet-soft-purple border-none shadow">
          <CardContent className="pt-6">
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
          </CardContent>
        </Card>

        {/* Recommended for You Section */}
        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-white to-pet-soft-gray pb-6">
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-5 w-5 text-pet-blue" />
              Recommended for You
            </CardTitle>
            <CardDescription>Based on your interests and learning history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
              {recommendedCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <Button variant="outline" className="w-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              View All Recommendations
            </Button>
          </CardContent>
        </Card>

        {/* Browse by Category */}
        <Card className="border-none shadow-md">
          <CardHeader className="bg-gradient-to-r from-white to-pet-soft-blue/20 pb-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Browse by Category</CardTitle>
                <CardDescription>Explore courses in different subject areas</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <LayoutGrid className="mr-2 h-4 w-4" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={selectedCategory === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("")}
              >
                All
              </Button>
              {mockCategories.map(category => (
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
          </CardContent>
        </Card>

        {/* Learning Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-green/30 pb-6">
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                Learning Paths
              </CardTitle>
              <CardDescription>Structured course sequences to master a skill</CardDescription>
            </CardHeader>
            <CardContent>
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
                    {mockLearningPaths
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
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-orange/30 pb-6">
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
                Trending Now
              </CardTitle>
              <CardDescription>Popular among learners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingCourses.map((course, index) => (
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
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
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
      </div>
    </div>
  );
};

export default RecommendationDashboard;
