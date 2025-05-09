
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarCheck, Clock, Plus, Calendar, ChevronRight, AlertTriangle, Check, Star, Dog, Cat, Fish } from "lucide-react";
import PetCard from "@/components/PetCard";
import EventCard from "@/components/EventCard";
import { mockPets, mockHealthChecks, mockFeedingSchedules, mockVetAppointments } from "../mock/mockData";
import { format, isToday, isTomorrow, addDays, isSameDay } from "date-fns";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  const [selectedPet, setSelectedPet] = useState(mockPets[0]?.id || "");
  
  const today = new Date();
  const nextFiveDays = Array.from({ length: 5 }).map((_, i) => addDays(today, i));
  
  // Get upcoming events
  const upcomingHealthChecks = mockHealthChecks
    .filter(hc => !hc.completed && new Date(hc.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
    
  const upcomingVetAppointments = mockVetAppointments
    .filter(apt => !apt.completed && new Date(apt.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Get events for selected pet or all pets if none selected
  const filteredHealthChecks = selectedPet 
    ? upcomingHealthChecks.filter(hc => hc.petId === selectedPet)
    : upcomingHealthChecks;
    
  const filteredVetAppointments = selectedPet
    ? upcomingVetAppointments.filter(apt => apt.petId === selectedPet)
    : upcomingVetAppointments;
  
  // Format day label
  const formatDayLabel = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'EEE');
  };

  // Get events for calendar
  const getEventsForDay = (date: Date) => {
    const events = [
      ...mockHealthChecks.filter(hc => isSameDay(new Date(hc.date), date)),
      ...mockVetAppointments.filter(apt => isSameDay(new Date(apt.date), date))
    ];
    
    if (selectedPet) {
      return events.filter(event => 'petId' in event && event.petId === selectedPet);
    }
    
    return events;
  };

  const selectedPetObj = selectedPet ? mockPets.find(p => p.id === selectedPet) : null;

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Welcome Back!</h1>
            <p className="text-muted-foreground">Manage your pets' health and schedules</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Plus className="mr-1 h-4 w-4" />
              Add New Pet
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockPets.map(pet => (
            <div className="transition-all duration-300" key={pet.id}>
              <PetCard 
                pet={pet} 
                active={selectedPet === pet.id}
                onClick={() => setSelectedPet(pet.id === selectedPet ? "" : pet.id)}
              />
            </div>
          ))}
          <Card className="flex flex-col items-center justify-center h-full min-h-[180px] border-dashed transition-transform duration-200 hover:scale-105 bg-gray-50/50 hover:bg-white">
            <Button variant="ghost" className="h-full w-full flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-pet-soft-blue flex items-center justify-center">
                <Plus className="h-6 w-6 text-pet-blue" />
              </div>
              <span className="font-medium">Add New Pet</span>
            </Button>
          </Card>
        </div>

        {selectedPetObj && (
          <Card className="bg-gradient-to-r from-pet-soft-blue to-pet-soft-purple border-none shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur flex items-center justify-center flex-shrink-0">
                  {selectedPetObj.type === 'dog' && <Dog className="h-10 w-10 text-pet-blue" />}
                  {selectedPetObj.type === 'cat' && <Cat className="h-10 w-10 text-purple-500" />}
                  {selectedPetObj.type === 'fish' && <Fish className="h-10 w-10 text-green-500" />}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">{selectedPetObj.name}'s Dashboard</h2>
                  <p className="text-sm mb-4">{selectedPetObj.breed} • {selectedPetObj.age} years old</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Health Status</span>
                        <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded-full">Good</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Weight</span>
                        <span className="text-xs">{(Math.random() * 20).toFixed(1)} kg</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Activity</span>
                        <span className="text-xs">Above Average</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-gray pb-6">
              <CardTitle className="flex items-center">
                <CalendarCheck className="mr-2 h-5 w-5 text-pet-blue" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Health checks and vet appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="health">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="health">Health Checks</TabsTrigger>
                    <TabsTrigger value="vet">Vet Appointments</TabsTrigger>
                  </TabsList>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-1 h-4 w-4" />
                    Schedule New
                  </Button>
                </div>
                
                <TabsContent value="health" className="space-y-4 mt-0">
                  {filteredHealthChecks.length > 0 ? (
                    filteredHealthChecks.map(check => (
                      <EventCard
                        key={check.id}
                        title={check.title}
                        date={new Date(check.date)}
                        type="health"
                        description={check.notes}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12 bg-pet-soft-gray/30 rounded-lg">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pet-soft-green mb-3">
                        <CalendarCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No upcoming health checks</h3>
                      <p className="text-muted-foreground mb-4">Stay on top of your pet's health with regular check-ups</p>
                      <Button variant="outline">Schedule a health check</Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="vet" className="space-y-4 mt-0">
                  {filteredVetAppointments.length > 0 ? (
                    filteredVetAppointments.map(apt => (
                      <EventCard
                        key={apt.id}
                        title={apt.reason}
                        date={new Date(apt.date)}
                        type="vet"
                        description={apt.clinicName}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12 bg-pet-soft-gray/30 rounded-lg">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pet-soft-purple mb-3">
                        <Dog className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No upcoming vet appointments</h3>
                      <p className="text-muted-foreground mb-4">Regular vet visits keep your pets happy and healthy</p>
                      <Button variant="outline">Schedule a vet appointment</Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-white to-pet-soft-blue pb-6">
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-pet-blue" />
                Feeding Schedule
              </CardTitle>
              <CardDescription>Today's feeding times</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedPet ? (
                <div className="space-y-4">
                  {mockFeedingSchedules
                    .filter(fs => fs.petId === selectedPet)
                    .map(schedule => (
                      <div key={schedule.id} className="bg-pet-soft-blue/50 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                            {selectedPetObj?.type === 'dog' && <Dog className="h-6 w-6 text-pet-blue" />}
                            {selectedPetObj?.type === 'cat' && <Cat className="h-6 w-6 text-purple-500" />}
                            {selectedPetObj?.type === 'fish' && <Fish className="h-6 w-6 text-green-500" />}
                          </div>
                          <div>
                            <h3 className="font-medium">{mockPets.find(p => p.id === schedule.petId)?.name}</h3>
                            <p className="text-xs text-muted-foreground">{schedule.foodType}</p>
                          </div>
                        </div>
                        
                        <div className="text-sm">
                          <p className="flex justify-between mb-1">
                            <span className="font-medium">Portion:</span>
                            <span>{schedule.portionSize}</span>
                          </p>
                          
                          <div className="mt-3">
                            <p className="font-medium mb-2">Feeding Times:</p>
                            <div className="space-y-2">
                              {schedule.times.map((time, i) => (
                                <div key={i} className="flex items-center justify-between bg-white rounded-md px-3 py-2">
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 text-pet-blue mr-2" />
                                    <span>{time}</span>
                                  </div>
                                  <Button variant="outline" size="sm" className="h-8">
                                    <Check className="mr-1 h-3 w-3" />
                                    Mark Fed
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-pet-soft-gray/30 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pet-soft-blue mb-3">
                    <Clock className="h-6 w-6 text-pet-blue" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Select a pet</h3>
                  <p className="text-muted-foreground mb-4">Choose a pet above to view their feeding schedule</p>
                </div>
              )}
              <Button variant="outline" className="w-full mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Manage Feeding Schedules
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-white to-pet-soft-gray pb-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Upcoming Calendar</CardTitle>
                <CardDescription>Next 5 days at a glance</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Calendar className="mr-2 h-4 w-4" />
                View Full Calendar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {nextFiveDays.map((date, index) => {
                const events = getEventsForDay(date);
                const isToday = index === 0;
                
                return (
                  <Card key={index} className={`overflow-hidden border ${isToday ? 'ring-2 ring-pet-blue/20' : ''}`}>
                    <div className={`${isToday ? 'bg-pet-blue' : 'bg-gray-100'} text-${isToday ? 'white' : 'gray-700'} p-2 text-center`}>
                      <p className="text-sm font-medium">{formatDayLabel(date)}</p>
                      <p className="text-xs">{format(date, 'MMM d')}</p>
                    </div>
                    <div className="p-2 h-[120px] overflow-auto">
                      {events.length > 0 ? (
                        <div className="space-y-1">
                          {events.map((event, i) => {
                            const eventType = 'title' in event ? 'health' : 'vet';
                            const title = 'title' in event ? event.title : event.reason;
                            const bgColor = eventType === 'health' ? 'bg-green-100 border-green-200' : 'bg-purple-100 border-purple-200';
                            const textColor = eventType === 'health' ? 'text-green-800' : 'text-purple-800';
                            
                            return (
                              <div 
                                key={i} 
                                className={`text-xs p-2 rounded border ${bgColor} ${textColor} flex items-center gap-1`}
                              >
                                {eventType === 'health' ? 
                                  <CalendarCheck className="h-3 w-3 flex-shrink-0" /> : 
                                  <Dog className="h-3 w-3 flex-shrink-0" />}
                                <span className="truncate">{title}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-xs text-muted-foreground">
                          No events
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-pet-soft-purple to-purple-100 border-none shadow p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <AlertTriangle className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-medium mb-2">Pet Health Tips</h3>
                <p className="text-sm mb-4">Regular exercise and a balanced diet can add years to your pet's life.</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="bg-white/50 hover:bg-white">View All Tips</Button>
                <ChevronRight className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-r from-pet-soft-green to-green-100 border-none shadow p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <Calendar className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-medium mb-2">Vaccination Reminders</h3>
                <p className="text-sm mb-4">Stay up-to-date with your pet's vaccination schedule.</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="bg-white/50 hover:bg-white">View Schedule</Button>
                <ChevronRight className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-r from-pet-soft-blue to-blue-100 border-none shadow p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <Star className="h-8 w-8 text-pet-blue mb-4" />
                <h3 className="text-lg font-medium mb-2">Premium Features</h3>
                <p className="text-sm mb-4">Unlock advanced health tracking and personalized recommendations.</p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline" className="bg-white/50 hover:bg-white">Learn More</Button>
                <ChevronRight className="h-5 w-5 text-pet-blue" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
