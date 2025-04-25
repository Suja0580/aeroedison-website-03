
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Clock, Plus, Trash2 } from "lucide-react";
import { mockPets } from "../mock/mockData";
import { toast } from "sonner";

const FeedingSchedule = () => {
  const navigate = useNavigate();
  const [selectedPetId, setSelectedPetId] = useState("");
  const [foodType, setFoodType] = useState("");
  const [portionSize, setPortionSize] = useState("");
  const [feedingTimes, setFeedingTimes] = useState<string[]>(["08:00", "18:00"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPetId || !foodType || !portionSize || feedingTimes.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Add feeding schedule (in a real app, this would be an API call)
    toast.success("Feeding schedule created successfully!");
    
    // Navigate back to dashboard
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const addFeedingTime = () => {
    setFeedingTimes([...feedingTimes, ""]);
  };

  const updateFeedingTime = (index: number, value: string) => {
    const updated = [...feedingTimes];
    updated[index] = value;
    setFeedingTimes(updated);
  };

  const removeFeedingTime = (index: number) => {
    setFeedingTimes(feedingTimes.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-8 max-w-2xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Plan Feeding Schedule</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pet">Select Pet</Label>
                <Select value={selectedPetId} onValueChange={setSelectedPetId}>
                  <SelectTrigger id="pet">
                    <SelectValue placeholder="Choose a pet" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPets.map((pet) => (
                      <SelectItem key={pet.id} value={pet.id}>
                        {pet.name} ({pet.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="foodType">Food Type</Label>
                <Input 
                  id="foodType" 
                  placeholder="E.g., Dry kibble, wet food, etc."
                  value={foodType} 
                  onChange={(e) => setFoodType(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portionSize">Portion Size</Label>
                <Input 
                  id="portionSize" 
                  placeholder="E.g., 1 cup, 50 grams, etc."
                  value={portionSize} 
                  onChange={(e) => setPortionSize(e.target.value)}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Feeding Times</Label>
                
                {feedingTimes.map((time, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="time"
                        value={time}
                        onChange={(e) => updateFeedingTime(index, e.target.value)}
                      />
                    </div>
                    {feedingTimes.length > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFeedingTime(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={addFeedingTime}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Another Time
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  We'll send you reminders at these times to feed your pet
                </p>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">Create Feeding Schedule</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default FeedingSchedule;
