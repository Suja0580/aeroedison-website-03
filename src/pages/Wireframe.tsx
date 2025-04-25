
import React from 'react';
import { Card } from '@/components/ui/card';

const Wireframe = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Dashboard Wireframe */}
      <section>
        <h2 className="text-xl font-bold mb-4">Dashboard Layout</h2>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b-2 border-dashed border-gray-300">
            <div className="w-32 h-8 bg-gray-200 rounded" />
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="flex gap-4">
            {/* Sidebar */}
            <div className="w-64 h-[600px] border-r-2 border-dashed border-gray-300 p-4">
              <div className="space-y-4">
                <div className="w-full h-10 bg-gray-200 rounded" />
                <div className="w-full h-10 bg-gray-200 rounded" />
                <div className="w-full h-10 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 space-y-6">
              {/* Welcome + Button */}
              <div className="flex justify-between items-center">
                <div className="w-48 h-8 bg-gray-200 rounded" />
                <div className="w-32 h-10 bg-gray-200 rounded" />
              </div>

              {/* Pet Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4 h-40">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full" />
                      <div className="space-y-2">
                        <div className="w-24 h-4 bg-gray-200 rounded" />
                        <div className="w-20 h-4 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Upcoming Events Card */}
                <div className="col-span-2">
                  <Card className="p-4">
                    <div className="space-y-4">
                      <div className="w-48 h-6 bg-gray-200 rounded" />
                      <div className="space-y-2">
                        <div className="w-full h-16 bg-gray-100 rounded" />
                        <div className="w-full h-16 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </Card>
                </div>
                {/* Feeding Schedule Card */}
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="w-40 h-6 bg-gray-200 rounded" />
                    <div className="space-y-2">
                      <div className="w-full h-12 bg-gray-100 rounded" />
                      <div className="w-full h-12 bg-gray-100 rounded" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Calendar */}
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="w-32 h-6 bg-gray-200 rounded" />
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded p-2">
                        <div className="w-full h-6 bg-gray-200 rounded mb-2" />
                        <div className="space-y-1">
                          <div className="w-full h-4 bg-gray-200 rounded" />
                          <div className="w-3/4 h-4 bg-gray-200 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Registration Wireframe */}
      <section>
        <h2 className="text-xl font-bold mb-4">Pet Registration Form</h2>
        <div className="max-w-lg mx-auto border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="w-48 h-6 bg-gray-200 rounded" />
              <div className="space-y-4">
                <div className="w-full h-10 bg-gray-100 rounded" />
                <div className="w-full h-10 bg-gray-100 rounded" />
                <div className="w-full h-10 bg-gray-100 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-10 bg-gray-100 rounded" />
                  <div className="w-full h-10 bg-gray-100 rounded" />
                </div>
                <div className="w-full h-10 bg-gray-200 rounded" />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Wireframe;
