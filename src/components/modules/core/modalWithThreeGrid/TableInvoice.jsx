import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { forwardRef } from 'react';
import {
    Group,
    Box,
    ActionIcon, Text, Grid, Button, Flex, Table,
    TableTr
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconEye, IconEdit, IconTrash, IconPrinter } from "@tabler/icons-react";
import { DataTable } from 'mantine-datatable';
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import {
    editEntityData,
    getIndexEntityData,
    setFetching, setFormLoading,
    setInsertType,
    showEntityData
} from "../../../../store/core/crudSlice.js";
import KeywordSearch from "../../filter/KeywordSearch";
import { modals } from "@mantine/modals";
import { deleteEntityData } from "../../../../store/core/crudSlice";


const data = [
    {
        "id": "01",
        "Name": "Tablet Tofacent 5 5 mg",
        "SalesPrice": "35",
        "Quantity": "60",
        "SubTotal": "2,100"
    },
    {
        "id": "02",
        "Name": "Pregaba ER Capsule 82.5mg Opsonin Pharma Limited",
        "SalesPrice": "25",
        "Quantity": "30",
        "SubTotal": "750"
    },
    {
        "id": "03",
        "Name": "Capsule Indomet SR 75 mg",
        "SalesPrice": "4.2",
        "Quantity": "60",
        "SubTotal": "252"
    },
    {
        "id": "04",
        "Name": "Tablet Tofacent 5 5 mg",
        "SalesPrice": "10",
        "Quantity": "60",
        "SubTotal": "600"
    },
    {
        "id": "05",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "06",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "07",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "08",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "09",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "10",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "11",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "12",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "13",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "14",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "15",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "16",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "24",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "17",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "18",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "19",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "20",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "21",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "22",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "id": "23",
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    }
]



function TableInvoice(props) {

    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 500; //TabList height 104

    const [newClientViewModel, setNewClientViewModel] = useState(false)

    const fetching = useSelector((state) => state.crudSlice.fetching)
    const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword)
    const indexData = useSelector((state) => state.crudSlice.indexEntityData)
    const customerFilterData = useSelector((state) => state.crudSlice.customerFilterData);
    const tableRef = useRef();



    useEffect(() => {
        setTimeout(() => {
            dispatch(setFetching(false))
        }, 1000)
    })

    useEffect(() => {
        const value = {
            url: 'core/customer',
            param: {
                term: searchKeyword,
                name: customerFilterData.name,
                mobile: customerFilterData.mobile,
                // page: page,
                // offset: perPage
            }
        }
        dispatch(getIndexEntityData(value))
    }, [fetching]);

    const rows = data.map((data) => (
        <Table.Tr key={data.id}>
            <Table.Td>{data.Name}</Table.Td>
            <Table.Td>{data.SalesPrice}</Table.Td>
            <Table.Td>{data.Quantity}</Table.Td>
            <Table.Td>{data.SubTotal}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>


            <div ref={tableRef} >
                <Box m={`xs`}>
                    <Table withTableBorder={true} withColumnBorders={true}>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Sales Price</Table.Th>
                                <Table.Th>Quantity</Table.Th>
                                <Table.Th>Sub-Total</Table.Th>
                                {/* <Table.Th>Element name</Table.Th>
                            <Table.Th>Symbol</Table.Th>
                            <Table.Th>Atomic mass</Table.Th> */}
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                        {/*<Table.Caption>Scroll page to see sticky thead</Table.Caption>*/}
                    </Table>
                </Box>
                {/* <Box >
                    <Box bg={`white`} >
                        <Box >
                            <DataTable
                                key={'id'}
                                // withTableBorder
                                records={data}
                                columns={[
                                    {
                                        accessor: 'index',
                                        title: 'S/N',
                                        textAlignment: 'right',
                                        render: (item) => (data.indexOf(item) + 1)
                                    },
                                    { accessor: 'Name', title: "Name", key: 'name' },
                                    { accessor: 'SalesPrice', title: "Sales Price", key: 'price' },
                                    { accessor: 'Quantity', title: "Quantity", key: 'quan' },
                                    { accessor: 'SubTotal', title: "Sub-Total", key: 'sub' },
                                ]}
                                fetching={fetching}
                                loaderSize="xs"
                                loaderColor="grape"
                                height={height}
                            />
                        </Box>
                    </Box>
                </Box > */}



            </div>
            {/*<ReactToPrint*/}
            {/*    bodyClass="print-agreement"*/}
            {/*    content={() => {*/}
            {/*        const content1 = props.myCommon.current;*/}
            {/*        const content2 = tableRef.current*/}

            {/*        // const printContent = `${content1} ${content2}`*/}
            {/*        print(content2)*/}
            {/*    }*/}
            {/*    }*/}
            {/*    // content={() => ref.current}*/}
            {/*    trigger={() => (*/}
            {/*        <Button*/}
            {/*            variant="filled">*/}
            {/*            Print*/}
            {/*        </Button>*/}
            {/*    )}*/}
            {/*/>*/}
        </>
    );
}

export default TableInvoice;