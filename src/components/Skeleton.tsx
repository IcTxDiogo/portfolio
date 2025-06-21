interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export default function Skeleton({
  className = "",
  width = "100%",
  height = "1rem",
  rounded = false,
}: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${
        rounded ? "rounded-full" : "rounded"
      } ${className}`}
      style={{ width, height }}
    />
  );
}

// Skeleton específicos para componentes
export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <Skeleton height="1.5rem" width="60%" className="mb-4" />
      <Skeleton height="1rem" width="40%" className="mb-6" />
      <div className="space-y-2">
        <Skeleton height="1rem" width="100%" />
        <Skeleton height="1rem" width="80%" />
        <Skeleton height="1rem" width="90%" />
      </div>
      <div className="mt-6 flex gap-2">
        <Skeleton height="1.5rem" width="4rem" rounded />
        <Skeleton height="1.5rem" width="5rem" rounded />
        <Skeleton height="1.5rem" width="3rem" rounded />
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-6 lg:mb-0 lg:flex-1">
          <Skeleton height="1.5rem" width="40%" className="mb-2" />
          <Skeleton height="1rem" width="100%" className="mb-2" />
          <Skeleton height="1rem" width="80%" className="mb-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton height="1.5rem" width="4rem" rounded />
            <Skeleton height="1.5rem" width="5rem" rounded />
            <Skeleton height="1.5rem" width="6rem" rounded />
          </div>
        </div>
        <div className="text-center lg:text-right">
          <Skeleton height="1rem" width="8rem" className="mb-2" />
          <Skeleton height="2.5rem" width="7rem" />
        </div>
      </div>
    </div>
  );
}
