import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Layout from "./AppLayout.tsx";
import ProductForm, {IProduct} from '../forms/ProductForm';
import ProductList from '../lists/ProductList';
import GuaranteeForm, {IGuarantee} from '../forms/GuaranteeForm';
import GuaranteeList from '../lists/GuaranteeList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MedicalActList, {IMedicalAct} from "../lists/MedicalActsList.tsx";
import MedicalActForm from "../forms/MedicalActForm.tsx";
import ProcessForm, {IProcess} from "../forms/ProcessForm.tsx";
import ProcessList from "../lists/ProcessList.tsx";
import ProcessStepTypeInsured from "../forms/ProcessStepTypeInsured.tsx";
import {product, selectProduct, setProductList} from "@app-redux/slices/productSlice.ts";
import {useAppDispatch, useAppSelector} from "@app-redux/reduxHooks.ts";

export default function PageDashboard() {
    // State to manage the list of products and guarantees
    // const [products, setProducts] = useState<IProduct[]>([]);
    const [guarantees, setGuarantees] = useState<IGuarantee[]>([]);
    const [medicalActs, setMedicalActs] = useState<IMedicalAct[]>([]);
    const [processes, setProcesses] = useState<IProcess[]>([]);
    // const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    // TODO: use redux for state management
    const {list: products, selected: selectedProduct} = useAppSelector(product);
    const dispatch = useAppDispatch();

    // Function to handle product creation
    // Function to handle product creation
    const handleProductSubmit = (product: IProduct) => {
        dispatch(setProductList([...products, product]));
        // Update local storage with the new products
        // localStorage.setItem('products', JSON.stringify([...products, product]));
    };

    // Function to handle guarantee creation
    const handleGuaranteeSubmit = (guarantee: IGuarantee) => {
        setGuarantees([...guarantees, guarantee]);
        // Update local storage with the new guarantees
        // localStorage.setItem('guarantees', JSON.stringify([...guarantees, guarantee]));
    };

    // Function to handle medical act creation
    const handleMedicalActSubmit = (medicalAct: IMedicalAct) => {
        setMedicalActs([...medicalActs, medicalAct]);
        // Update local storage with the new medical acts
        // localStorage.setItem('medicalActs', JSON.stringify([...medicalActs, medicalAct]));
    };

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
                                            <Typography variant="h6" gutterBottom>
                                                Create Product
                                            </Typography>
                                            <ProductForm onSubmit={handleProductSubmit}
                                                         existingGuarantees={guarantees.map(g => g.name)}/>
                                        </Paper>
                                    </Grid>
                                    {/* Product List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                            <Typography variant="h6" gutterBottom>
                                                Product List
                                            </Typography>
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
                                            <GuaranteeForm onSubmit={handleGuaranteeSubmit}
                                                           existingMedicalActs={medicalActs.map(ma => ma.name)}/>
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
                                            <MedicalActForm onSubmit={handleMedicalActSubmit}/>
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
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                              aria-controls="quotation-demo-panel-content"
                                              id="quotation-demo-panel-header">
                                <Typography variant="h5">Quotation Demo Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {
                                        !selectedProduct ? (
                                            <Grid item xs={6}>
                                                <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
                                                    <Typography variant="h6" gutterBottom>
                                                        Product List
                                                    </Typography>
                                                    <ProductList products={products} onItemClick={handleProductClick}/>
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
