
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SystemArchitectureDiagram = () => {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-white to-pet-soft-blue/20 pb-6">
        <CardTitle>Personalized Recommendation System Architecture</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto py-6">
        <div className="mermaid-diagram">
          {`
          graph TD
            %% User Interface Layer
            subgraph "User Interface"
              WC["Web Client"]
              MA["Mobile App"]
            end

            %% API Gateway
            API["API Gateway / Load Balancer"]
            
            %% Application Layer
            subgraph "Application Layer"
              US["User Services"]
              CS["Course Services"]  
              FS["Feedback Service"]
              NS["Notification Service"]
            end
            
            %% Recommendation Engine
            subgraph "Recommendation Engine"
              CF["Collaborative Filtering"]
              CBF["Content-Based Filtering"]
              HM["Hybrid Model"]
              RBL["Rule-Based Logic"]
            end
            
            %% Data Collection Layer
            subgraph "Data Collection Layer"
              UA["User Activity"]
              FB["Feedback"]
              QR["Quiz Results"]
            end
            
            %% Data Processing Layer
            subgraph "ETL / Data Processing"
              DC["Data Cleaning"]
              FE["Feature Engineering"]
            end
            
            %% Centralized Data Store
            subgraph "Centralized Data Store" 
              UP["User Profiles"]
              CM["Course Metadata"]
              AL["Activity Logs"]
              CS2["Completion Stats"]
            end
            
            %% Analytics & Reporting
            subgraph "Analytics & Reporting"
              AD["Admin Dashboards"]
              II["Instructor Insights"]
              AB["A/B Testing"]
            end
            
            %% Connections
            WC --> API
            MA --> API
            API --> Application Layer
            
            US --> Recommendation Engine
            CS --> Recommendation Engine
            Application Layer <--> Centralized Data Store
            
            Data Collection Layer --> ETL
            ETL --> Centralized Data Store
            ETL --> Recommendation Engine
            
            Centralized Data Store <--> Recommendation Engine
            Centralized Data Store <--> "Analytics & Reporting"
            
            "Analytics & Reporting" --> Application Layer
            
            %% Style
            classDef uiLayer fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
            classDef apiLayer fill:#fff9c4,stroke:#f57f17,stroke-width:2px;
            classDef appLayer fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
            classDef recEngineLayer fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
            classDef dataCollectionLayer fill:#fff3e0,stroke:#e65100,stroke-width:2px;
            classDef etlLayer fill:#e8eaf6,stroke:#3949ab,stroke-width:2px;
            classDef dataStoreLayer fill:#ffebee,stroke:#c62828,stroke-width:2px;
            classDef analyticsLayer fill:#e0f2f1,stroke:#00695c,stroke-width:2px;
            
            class WC,MA uiLayer;
            class API apiLayer;
            class US,CS,FS,NS appLayer;
            class CF,CBF,HM,RBL recEngineLayer;
            class UA,FB,QR dataCollectionLayer;
            class DC,FE etlLayer;
            class UP,CM,AL,CS2 dataStoreLayer;
            class AD,II,AB analyticsLayer;
          `}
        </div>
        <div className="text-xs text-muted-foreground mt-6">
          <p className="font-medium mb-2">Diagram Legend:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="inline-block w-3 h-3 bg-[#e1f5fe] border border-[#01579b] mr-2"></span> User Interface Layer</li>
            <li><span className="inline-block w-3 h-3 bg-[#fff9c4] border border-[#f57f17] mr-2"></span> API Gateway</li>
            <li><span className="inline-block w-3 h-3 bg-[#e8f5e9] border border-[#2e7d32] mr-2"></span> Application Layer</li>
            <li><span className="inline-block w-3 h-3 bg-[#f3e5f5] border border-[#7b1fa2] mr-2"></span> Recommendation Engine</li>
            <li><span className="inline-block w-3 h-3 bg-[#fff3e0] border border-[#e65100] mr-2"></span> Data Collection Layer</li>
            <li><span className="inline-block w-3 h-3 bg-[#e8eaf6] border border-[#3949ab] mr-2"></span> ETL / Data Processing</li>
            <li><span className="inline-block w-3 h-3 bg-[#ffebee] border border-[#c62828] mr-2"></span> Centralized Data Store</li>
            <li><span className="inline-block w-3 h-3 bg-[#e0f2f1] border border-[#00695c] mr-2"></span> Analytics & Reporting</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemArchitectureDiagram;
