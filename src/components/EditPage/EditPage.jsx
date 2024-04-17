import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table/dist";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllMovies } from "../../redux/selectors";
import { getAllMovies } from "../../redux/thunk";
import { toast } from "react-toastify";

const EditPage = () => {
  const movies = useSelector(selectAllMovies);
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getAllMovies())
        .unwrap()
        .catch((err) => toast.error(err));
    }
  }, [dispatch, movies.length]);

  useEffect(() => {
    let data = [];
    movies.map((movie) => {
      const movieObj = {
        title: movie.title,
        director: movie.director,
        description: movie.description,
        rating: movie.rating,
        id: movie._id,
      };
      data.push(movieObj);
    });
    setTableData(data);
    console.log(data);
  }, [movies]);

  const handleSaveRow = ({ exitEditingMode, row, values }) => {
    console.log(values);
    tableData[row.index] = values;
    setTableData([...tableData]);
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
      {
        header: "Id",
        accessorKey: "id",
      },
    ],
    []
  );

  //   const table = useMaterialReactTable({
  //     columns,
  //     data: tableData,
  //     initialState: { columnVisibility: { id: false } },
  //     enableEditing: true,
  //   });

  return (
    <div>
      EditPage
      {/* <MaterialReactTable
        table={table}
        columns={columns}
        data={table.rows}
        editingMode="row"
        onEditingRowSave={handleSaveRow}
      /> */}
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableEditing
        onEditingRowSave={handleSaveRow}
      ></MaterialReactTable>
    </div>
  );
};

export default EditPage;
