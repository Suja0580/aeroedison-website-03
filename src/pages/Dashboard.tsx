
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarCheck, Clock, Plus } from "lucide-react";
import PetCard from "@/components/PetCard";
import EventCard from "@/components/EventCard";
import { mockPets, mockHealthChecks, mockFeedingSchedules, mockVetAppointments } from "../mock/mockData";
import { format, isToday, isTomorrow, addDays, isSameDay } from "date-fns";

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

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-muted-foreground">Manage your pets' health and schedules</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Plus className="mr-1 h-4 w-4" />
              Add New Pet
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockPets.map(pet => (
            <PetCard 
              key={pet.id} 
              pet={pet} 
              active={selectedPet === pet.id}
              onClick={() => setSelectedPet(pet.id === selectedPet ? "" : pet.id)}
            />
          ))}
          <Card className="flex items-center justify-center h-full min-h-[180px] border-dashed">
            <Button variant="ghost" className="h-full w-full flex flex-col gap-2">
              <Plus className="h-8 w-8" />
              <span>Add New Pet</span>
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarCheck className="mr-2 h-5 w-5 text-pet-blue" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Health checks and vet appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="health">
                <div className="flex justify-between items-center mb-4">
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
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No upcoming health checks</p>
                      <Button variant="link" className="mt-2">Schedule a health check</Button>
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
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No upcoming vet appointments</p>
                      <Button variant="link" className="mt-2">Schedule a vet appointment</Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
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
                      <div key={schedule.id} className="bg-pet-soft-blue rounded-lg p-4">
                        <h3 className="font-medium mb-2">{mockPets.find(p => p.id === schedule.petId)?.name}</h3>
                        <div className="text-sm">
                          <p><span className="font-medium">Food:</span> {schedule.foodType}</p>
                          <p><span className="font-medium">Portion:</span> {schedule.portionSize}</p>
                          <div className="mt-2">
                            <p className="font-medium mb-1">Feeding Times:</p>
                            <div className="space-y-2">
                              {schedule.times.map((time, i) => (
                                <div key={i} className="flex items-center justify-between">
                                  <span>{time}</span>
                                  <Button variant="outline" size="sm">Mark Fed</Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Select a pet to view feeding schedule</p>
                </div>
              )}
              <Button variant="outline" className="w-full mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Manage Feeding Schedules
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Calendar</CardTitle>
            <CardDescription>Next 5 days at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {nextFiveDays.map((date, index) => {
                const events = getEventsForDay(date);
                return (
                  <Card key={index} className="overflow-hidden">
                    <div className="bg-pet-blue text-white p-2 text-center">
                      <p className="text-sm font-medium">{formatDayLabel(date)}</p>
                      <p className="text-xs">{format(date, 'MMM d')}</p>
                    </div>
                    <div className="p-2 h-24 overflow-auto">
                      {events.length > 0 ? (
                        <div className="space-y-1">
                          {events.map((event, i) => {
                            const eventType = 'title' in event ? 'health' : 'vet';
                            const title = 'title' in event ? event.title : event.reason;
                            return (
                              <div 
                                key={i} 
                                className={`text-xs p-1 rounded ${
                                  eventType === 'health' ? 'bg-green-100' : 'bg-purple-100'
                                }`}
                              >
                                {title}
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
      </div>
    </div>
  );
};

export default Dashboard;
