import { Paginator } from "primereact/paginator";
import useCharactersAppStore from "../state/store";

interface Props {
  itemsCount: number;
}

const Pagination = ({ itemsCount }: Props) => {
  const characterQuery = useCharactersAppStore((s) => s.characterQuery);
  const setPageNumber = useCharactersAppStore((s) => s.setPageNumber);
  const setPageSize = useCharactersAppStore((s) => s.setPageSize);

  return (
    <div className="card">
      <Paginator
        first={(characterQuery.pageNumber - 1) * characterQuery.pageSize}
        rows={characterQuery.pageSize}
        totalRecords={itemsCount}
        rowsPerPageOptions={[8, 12, 16, 20, 50]}
        onPageChange={(event) => {
          setPageNumber(event.page + 1), setPageSize(event.rows);
        }}
      />
    </div>
  );
};

export default Pagination;
