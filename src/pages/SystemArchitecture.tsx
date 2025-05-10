
import { Helmet } from "react-helmet";
import SystemArchitectureDiagram from "@/components/recommendation/SystemArchitectureDiagram";
import { Card, CardContent } from "@/components/ui/card";

const SystemArchitecture = () => {
  return (
    <div className="container py-8 max-w-6xl">
      <Helmet>
        <title>System Architecture | Personalized Recommendation System</title>
      </Helmet>
      
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">System Architecture</h1>
        
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed mb-4">
              The Personalized Recommendation System is designed as a modular, scalable architecture that 
              collects user data, processes it, and generates personalized course recommendations using 
              multiple filtering techniques.
            </p>
            
            <h2 className="text-xl font-semibold mb-2 mt-6">Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-pet-soft-blue/20">
                <h3 className="font-medium mb-2">Recommendation Engine</h3>
                <p className="text-muted-foreground">Uses collaborative filtering, content-based filtering, and hybrid models to generate personalized recommendations.</p>
              </div>
              <div className="p-4 rounded-lg bg-pet-soft-green/20">
                <h3 className="font-medium mb-2">Data Collection Layer</h3>
                <p className="text-muted-foreground">Gathers user activity, feedback, and performance data to continuously improve recommendations.</p>
              </div>
              <div className="p-4 rounded-lg bg-pet-soft-purple/20">
                <h3 className="font-medium mb-2">Application Services</h3>
                <p className="text-muted-foreground">Provides APIs for user management, course delivery, feedback collection, and notifications.</p>
              </div>
              <div className="p-4 rounded-lg bg-pet-soft-orange/20">
                <h3 className="font-medium mb-2">Analytics & Reporting</h3>
                <p className="text-muted-foreground">Enables data-driven decisions with dashboards for administrators and instructors.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <SystemArchitectureDiagram />
        
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Architecture Workflow</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li><strong>User Interaction:</strong> Users interact with the system through web or mobile interfaces.</li>
              <li><strong>Data Collection:</strong> User activities, preferences, and feedback are continuously collected.</li>
              <li><strong>Data Processing:</strong> Raw data is cleaned, transformed, and enriched with features.</li>
              <li><strong>Recommendation Generation:</strong> Multiple algorithms analyze the processed data to generate personalized recommendations.</li>
              <li><strong>Service Delivery:</strong> Application services deliver the recommendations through various user touchpoints.</li>
              <li><strong>Performance Analysis:</strong> Analytics tools monitor system performance and recommendation effectiveness.</li>
            </ol>
            
            <h2 className="text-xl font-semibold mb-4 mt-8">System Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Scalability</h3>
                <p className="text-sm text-muted-foreground">Handles growing user base and content catalog</p>
              </div>
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Modularity</h3>
                <p className="text-sm text-muted-foreground">Components can be updated independently</p>
              </div>
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Adaptability</h3>
                <p className="text-sm text-muted-foreground">Algorithm mix adjusts to changing user needs</p>
              </div>
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">Continuously improves from usage data</p>
              </div>
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Personalization</h3>
                <p className="text-sm text-muted-foreground">Tailors experiences to individual users</p>
              </div>
              <div className="border p-3 rounded-md">
                <h3 className="font-medium mb-1">Observability</h3>
                <p className="text-sm text-muted-foreground">Easy monitoring and improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemArchitecture;
