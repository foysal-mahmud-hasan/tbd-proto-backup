import React, { useRef } from "react";
import ReactToPrint from 'react-to-print';
import {
    rem, Modal, List, ThemeIcon, Box, Grid, useMantineTheme,
    Paper, Flex, Text, Button, Title,
    GridCol,
    Container,
    ScrollArea
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import { useOutletContext } from "react-router-dom";

import {
    IconDeviceFloppy,
    IconPrinter
} from "@tabler/icons-react";

import { useSelector } from "react-redux";
import TableInvoice from "./TableInvoice";




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
function FormComp(props) {
    const { t, i18n } = useTranslation();
    const showEntityData = useSelector((state) => state.crudSlice.showEntityData)
    const theme = useMantineTheme();
    const { isOnline, mainAreaHeight } = useOutletContext();

    const closeModel = () => {
        props.setCustomerViewModel(false)
    }
    const printRef = useRef(null);


    return (
        <>
            <div ref={printRef}>
                {/* <div id="print-area"> */}
                <Box mt={`sm`} ml={`xs`}>
                    <Title order={5} >{t('InvoiceDetails')}</Title>
                    {/* <Text fz={`sm`}>Select a customer from the list to </Text> */}
                </Box>
                <Box bg={`white`} mt={`lg`}></Box>
                < Paper m={`xs`} style={{ border: '1.5px solid #e0e0e0' }} mb={`xs`}>
                    <Box mt={`sm`} ml={`sm`}>
                        <Box >
                            <Title order={5} size="h6" style={{ textAlign: 'left', fontSize: '12' }}>{t('CustomerDetails')}</Title>
                        </Box>
                        <Grid gutter={1} mt={`xs`}>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Customer')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Mobile')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Address')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Created')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>

                        {/* Payment Details */}
                        <Box >
                            <Title order={5} size="h6" mt={`md`} style={{ textAlign: 'left', fontSize: '12' }}>{t('PaymentDetails')}</Title>
                        </Box>
                        <Grid gutter={1} mt={`xs`}>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('TotalBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('DiscountBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('DueBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentStatus')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>
                        {/* Payment Method */}
                        <Box >
                            <Title order={5} size="h6" mt={`md`} style={{ textAlign: 'left', fontSize: '12' }}>{t('PaymentDetails')}</Title>
                        </Box>

                        <Grid gutter={1} mt={`xs`} >
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Process')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentMethod')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('SalesBy')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4} mb={`sm`}>
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('ConfirmedBy')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Box>
                </Paper>

                <TableInvoice />
            </div>
            <Grid
                m={`xs`}
                mt={`md`}
                gutter="lg"
                columns={2}
                justify="end"
                align="center"
            >
                <Button
                    size="xs"
                    color={`indigo.6`}
                    type="submit"
                    mt={`lg`}
                    id="EntityFormSubmit"
                    leftSection={<IconPrinter size={16} />}

                >

                    <ReactToPrint
                        trigger={() => (
                            <Flex direction={`column`} gap={0}>
                                <Text fz={14} fw={400}>
                                    {t("Print")}
                                </Text>
                            </Flex>
                        )}
                        content={() => printRef.current}
                    />


                </Button>
            </Grid>
        </>

    );
}

export default FormComp;
