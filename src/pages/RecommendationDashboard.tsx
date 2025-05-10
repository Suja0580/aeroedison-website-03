
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCourses, mockCategories, mockLearningPaths } from "../mock/mockEducationData";
import DashboardHeader from "@/components/recommendation/DashboardHeader";
import LearningProgress from "@/components/recommendation/LearningProgress";
import RecommendedCourses from "@/components/recommendation/RecommendedCourses";
import CategoryBrowser from "@/components/recommendation/CategoryBrowser";
import LearningPathsSection from "@/components/recommendation/LearningPathsSection";
import TrendingCourses from "@/components/recommendation/TrendingCourses";
import SkillCards from "@/components/recommendation/SkillCards";
import { Star } from "lucide-react";

const RecommendationDashboard = () => {
  // Get recommended courses
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
        {/* Header Section */}
        <DashboardHeader />

        {/* Learning Progress */}
        <Card className="bg-gradient-to-r from-pet-soft-blue to-pet-soft-purple border-none shadow">
          <CardContent className="pt-6">
            <LearningProgress />
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
            <RecommendedCourses courses={recommendedCourses} />
          </CardContent>
        </Card>

        {/* Browse by Category */}
        <Card className="border-none shadow-md">
          <CardHeader className="bg-gradient-to-r from-white to-pet-soft-blue/20 pb-6">
            <CategoryBrowser categories={mockCategories} courses={mockCourses} />
          </CardHeader>
        </Card>

        {/* Learning Paths & Trending Now */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-green/30 pb-6">
              <LearningPathsSection learningPaths={mockLearningPaths} />
            </CardHeader>
          </Card>
          
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-orange/30 pb-6">
              <TrendingCourses courses={trendingCourses} />
            </CardHeader>
          </Card>
        </div>

        {/* Skills Section */}
        <SkillCards />
      </div>
    </div>
  );
};

export default RecommendationDashboard;
