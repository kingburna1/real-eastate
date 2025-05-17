import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCardComponent = () => {
  return (
    
    <div className="flex flex-col w-[340px] h-[450px]  gap-5">
      <Skeleton className="h-[350px] w-full rounded-3xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
      

  );
}

export default SkeletonCardComponent;
