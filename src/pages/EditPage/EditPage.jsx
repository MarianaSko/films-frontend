import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllMovies } from "../../redux/selectors";
import { editMovie, getAllMovies } from "../../redux/thunk";
import { toast } from "react-toastify";
import { MaterialReactTable } from "material-react-table/dist";
import { useNavigate } from "react-router-dom/dist";

const EditPage = () => {
  const movies = useSelector(selectAllMovies);
  const [tableData, setTableData] = useState([]);
  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getAllMovies())
        .unwrap()
        .catch((err) => toast.error(err));
    }
  }, [dispatch, movies.length]);

  useEffect(() => {
    let data = [];
    let ids = [];
    movies.forEach((movie) => {
      const movieObj = {
        title: movie.title,
        director: movie.director,
        description: movie.description,
        rating: movie.rating,
      };
      data.push(movieObj);
      ids.push(movie._id);
    });
    setTableData(data);
    setIds(ids);
  }, [movies]);

  const handleSaveRow = ({ exitEditingMode, row, values }) => {
    const updatedTableData = [...tableData];
    updatedTableData[row.index] = values;

    const updatedIds = [...ids];
    const editedMovieId = ids[row.index];
    updatedIds[row.index] = editedMovieId;

    setTableData(updatedTableData);
    setIds(updatedIds);

    values.id = editedMovieId;

    const newData = {
      title: values.title,
      director: values.director,
      description: values.description,
      rating: values.rating,
    };

    dispatch(editMovie({ newData, editedMovieId }))
      .unwrap()
      .then(() => {
        toast.success("Movie details were successfully edited");
        navigate(`/`);
      })
      .catch((err) => toast.error(err));

    exitEditingMode();
  };

  const columns = useMemo(
    () => [
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Director",
        accessorKey: "director",
      },
      {
        header: "Description",
        accessorKey: "description",
      },
      {
        header: "Rating",
        accessorKey: "rating",
      },
    ],
    []
  );

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableEditing
        onEditingRowSave={handleSaveRow}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "rgba(52, 112, 255, 0.5)",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            backgroundColor: "rgba(52, 112, 255, 0.5)",
          },
        }}
        muiTableBodyRowProps={{
          sx: {
            borderRadius: "8px",
            boxShadow: "none",
          },
        }}
        muiBottomToolbarProps={{
          sx: {
            backgroundColor: "rgba(52, 112, 255, 0.5)",
          },
        }}
        muiTopToolbarProps={{
          sx: {
            backgroundColor: "rgba(52, 112, 255, 0.5)",
          },
        }}
      ></MaterialReactTable>
    </div>
  );
};

export default EditPage;
