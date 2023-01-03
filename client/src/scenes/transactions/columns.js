export const columns = [
    {
        field: '_id',
        headerName: 'ID',
        flex: 1
    },
    {
        field: 'userId',
        headerName: 'User ID',
        flex: 1
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        flex: 1
    },
    {
        field: 'products',
        headerName: 'No of Products',
        sortable: false,
        renderCell: params => params.value.length,
        flex: 0.5
    },
    {
        field: 'cost',
        headerName: 'Cost',
        flex: 1,
        renderCell: params => `$${Number(params.value).toFixed(2)}`
    },
]