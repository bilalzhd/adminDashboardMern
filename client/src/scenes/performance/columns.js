export const columns = [
    {
        field: '_id',
        headerName: 'ID',
        flex: 1
    },
    {
        field: 'userId',
        headerName: 'User Id',
        flex: 1
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        flex: 1
    },
    {
        field: 'products',
        headerName: '# Of Products',
        flex: 1,
        sortable: false,
        renderCell: (params) => params.value.length
    },
    {
        field: 'cost',
        headerName: 'Cost',
        flex: 1,
        renderCell: params => `$${Number(params.value).toFixed(2)}`
    },
]