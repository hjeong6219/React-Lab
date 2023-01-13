import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Yellow', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
    ];

    const config = [
        {
            label: 'Name',
            render: (data) => data.name,
            sortValue: (data) => data.name,
        },
        {
            label: 'Color',
            render: (data) => <div className={`p-3 m-2 ${data.color}`}></div>
        },
        {
            label: 'Score',
            render: (data) => data.score,
            sortValue: (data) => data.score,
        },
    ];

    const keyFn = (data) => {
        return data.name;
    };

    return  (
        <div>
            <SortableTable data={ data } config={ config } keyFn={ keyFn } />
        </div>
    );
}

export default TablePage