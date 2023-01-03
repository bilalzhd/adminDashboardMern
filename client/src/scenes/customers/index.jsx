import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { columns } from "./columns";
const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery(); 
    
    return (
    <Box m="1.5rem 2.5rem">
        <Header title="CUSTOMERS" subtitle="List of all the customers"/>
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
            rows={data || []}
            columns={columns}
        />
        </Box>
    </Box>
    )
}
export default Customers;