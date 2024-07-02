import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";

const CharacterCardSkeleton = () => {
  return (
    <Card
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#2F2F2F",
      }}
      title={<Skeleton height="1rem" width="100%"></Skeleton>}
      subTitle={<Skeleton height=".7rem" width="10rem"></Skeleton>}
      footer={
        <div className="card flex justify-content-center align-items-center gap-3">
          <Skeleton height="2rem"></Skeleton>
          <Skeleton height="2rem"></Skeleton>
        </div>
      }
      header={<Skeleton width="100%" height="250px"></Skeleton>}
    >
      <div className="card flex flex-wrap justify-content-center align-items-center gap-2">
        <Skeleton height=".7rem" width="100%"></Skeleton>
        <Skeleton height=".7rem" width="100%"></Skeleton>
        <Skeleton height=".7rem" width="100%"></Skeleton>
        <Skeleton height=".7rem" width="100%"></Skeleton>
      </div>
    </Card>
  );
};

export default CharacterCardSkeleton;
