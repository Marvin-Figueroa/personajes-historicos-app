import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { CharacterQuery } from "../App";

interface Props {
  onPageChange: (event: PaginatorPageChangeEvent) => void;
  characterQuery: CharacterQuery;
  itemsCount: number;
}

const Pagination = ({ onPageChange, characterQuery, itemsCount }: Props) => {
  return (
    <div className="card">
      <Paginator
        first={(characterQuery.pageNumber - 1) * characterQuery.pageSize}
        rows={characterQuery.pageSize}
        totalRecords={itemsCount}
        rowsPerPageOptions={[8, 12, 16, 20, 50]}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;
