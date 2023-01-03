import { useGetUserPerformanceQuery } from "state/api";
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { columns } from "./columns";
import CustomColumnMenu from 'components/CustomColumnMenu';

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector(state => state.global.userId)
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Performance" subtitle="Track your affiliate sales performance here" />
      <Box mt="40px" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border: 'none'
        },
        "& .MuiDataGrid-cell": {
          borderBottom: 'none'
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[200],
          borderBottom: 'none'
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.dark,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: 'none'
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: theme.palette.secondary[200] + '!important',
        }
      }}>
        <DataGrid
          loading={isLoading || !data}
          getRowId={row => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu
          }}
        />
      </Box>
    </Box>
  )
}

export default Performance