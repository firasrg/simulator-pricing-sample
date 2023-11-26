import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Layout from "./AppLayout";
import ProductForm, {IProduct} from '../forms/ProductForm';
import ProductList from '../lists/ProductList';
import GuaranteeForm from '../forms/GuaranteeForm';
import GuaranteeList from '../lists/GuaranteeList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MedicalActList from "../lists/MedicalActsList";
import MedicalActForm from "../forms/MedicalActForm";
import ProcessForm, {IProcess} from "../forms/ProcessForm";
import ProcessList from "../lists/ProcessList";
import ProcessStepTypeInsured from "../forms/ProcessStepTypeInsured";
import {product, selectProduct, setProductList} from "@app-redux/slices/productSlice";
import {useAppDispatch, useAppSelector} from "@app-redux/reduxHooks";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {guarantee, setGuaranteeList} from "@app-redux/slices/guaranteeSlice";
import {medicalAct, setMedicalActList} from "@app-redux/slices/medicalActSlice";

export default function PageDashboard() {

    const [processes, setProcesses] = useState<IProcess[]>([]);

    const {list: products, selected: selectedProduct} = useAppSelector(product);
    const {list: guarantees} = useAppSelector(guarantee);
    const {list: medicalActs} = useAppSelector(medicalAct);

    const dispatch = useAppDispatch();

    // Function to handle process creation
    const handleProcessSubmit = (process: IProcess) => {
        setProcesses([...processes, process]);
        // Update local storage with the new processes
        // localStorage.setItem('processes', JSON.stringify([...processes, process]));
    };

    const handleProductClick = (product: IProduct) => {
        dispatch(selectProduct(product));
    };

    return (
        <Layout>
            <Toolbar/>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Grid container spacing={3}>
                    {/* Product Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="product-panel-content"
                                id="product-panel-header"
                            >
                                <Typography variant="h5">Product Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Product Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>Create Product</Typography>
                                            <ProductForm
                                                onSubmit={() => dispatch(setProductList([...products, product]))}
                                                existingGuarantees={guarantees.map(g => g.name)}
                                            />
                                        </Paper>
                                    </Grid>
                                    {/* Product List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>Product List</Typography>
                                            <ProductList products={products}/>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    {/* Guarantee Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="guarantee-panel-content"
                                id="guarantee-panel-header"
                            >
                                <Typography variant="h5">Guarantee Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Guarantee Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Create Guarantee
                                            </Typography>
                                            <GuaranteeForm
                                                onSubmit={() => dispatch(setGuaranteeList([...guarantees, guarantee]))}
                                                existingMedicalActs={medicalActs.map(ma => ma.name)}
                                            />
                                        </Paper>
                                    </Grid>
                                    {/* Guarantee List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Guarantee List
                                            </Typography>
                                            <GuaranteeList guarantees={guarantees}/>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    {/* Medical Act Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="medical-act-panel-content"
                                id="medical-act-panel-header"
                            >
                                <Typography variant="h5">Medical Act Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Medical Act Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Create Medical Act
                                            </Typography>
                                            <MedicalActForm onSubmit={() => dispatch(setMedicalActList([...medicalActs, medicalAct]))}/>
                                        </Paper>
                                    </Grid>
                                    {/* Medical Act List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Medical Act List
                                            </Typography>
                                            <MedicalActList medicalActs={medicalActs}/>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    {/* Process Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="process-panel-content"
                                id="process-panel-header"
                            >
                                <Typography variant="h5">Process Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Process Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Create Process
                                            </Typography>
                                            <ProcessForm onSubmit={handleProcessSubmit}/>
                                        </Paper>
                                    </Grid>
                                    {/* Process List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Process List
                                            </Typography>
                                            <ProcessList processes={processes}/>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    {/* Quotation Demo Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="quotation-demo-panel-content"
                                id="quotation-demo-panel-header"
                            >
                                <Typography variant="h5">Quotation Demo Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {
                                        !selectedProduct ? (
                                            <Grid item xs={12}>
                                                <Paper sx={{
                                                    p: 2,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: 'center'
                                                }}>
                                                    <Typography variant="h6" gutterBottom>
                                                        Select Your Path
                                                    </Typography>
                                                    <Box display={"flex"} gap={5}>
                                                        {
                                                            products.map(p => (
                                                                    <Button onClick={() => handleProductClick(p)}
                                                                            size="large"
                                                                            color={"primary"}
                                                                            style={{backgroundColor: '#62F5C868'}}>
                                                                        <Typography variant="h5" component="div">
                                                                            {p.name}
                                                                        </Typography>
                                                                    </Button>
                                                                )
                                                            )
                                                        }
                                                    </Box>
                                                </Paper>
                                            </Grid>
                                        ) : (
                                            <Grid item xs={6}>
                                                <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                                    <Typography variant="h6" gutterBottom>
                                                        Who do you want to insure?
                                                    </Typography>
                                                    <ProcessStepTypeInsured onChange={() => null}/>
                                                </Paper>
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}
