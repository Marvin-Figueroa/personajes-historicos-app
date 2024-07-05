import { Skeleton } from "primereact/skeleton";

const CharacterDetailSkeleton = () => {
  return (
    <div className="px-4 flex flex-column md:flex-row md:justify-content-between w-full gap-5">
      <div className="flex flex-column justify-content-between flex-order-1 md:flex-order-0 w-full gap-4">
        <div className="card flex flex-wrap  align-items-center gap-4">
          <Skeleton height="3rem" width="70%"></Skeleton>
          <Skeleton height="2rem" width="40%"></Skeleton>
        </div>
        <div className="flex flex-wrap align-items-center gap-3">
          <Skeleton height=".7rem" width="90%"></Skeleton>
          <Skeleton height=".7rem" width="90%"></Skeleton>
          <Skeleton height=".7rem" width="90%"></Skeleton>
          <Skeleton height=".7rem" width="90%"></Skeleton>
        </div>
        <div className="card flex flex-wrap align-items-center gap-4">
          <Skeleton height="1.5rem" width="50%"></Skeleton>
          <Skeleton height="1.5rem" width="50%"></Skeleton>
          <Skeleton height="1.5rem" width="50%"></Skeleton>
        </div>
      </div>
      <div className="flex justify-content-center flex-order-0 md:flex-order-1 w-4">
        <Skeleton height="100%"></Skeleton>
      </div>
    </div>
  );
};

export default CharacterDetailSkeleton;
