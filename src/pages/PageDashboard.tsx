import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Layout from "./AppLayout.tsx";
import ProductForm, { IProduct } from '../forms/ProductForm';
import ProductList from '../lists/ProductList';
import GuaranteeForm, { IGuarantee } from '../forms/GuaranteeForm';
import GuaranteeList from '../lists/GuaranteeList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PageDashboard() {
    // State to manage the list of products and guarantees
    const [products, setProducts] = useState<IProduct[]>([]);
    const [guarantees, setGuarantees] = useState<IGuarantee[]>([]);

    // Function to handle product creation
    const handleProductSubmit = (product: IProduct) => {
        setProducts([...products, product]);
    };

    // Function to handle guarantee creation
    const handleGuaranteeSubmit = (guarantee: IGuarantee) => {
        setGuarantees([...guarantees, guarantee]);
    };

    return (
        <Layout>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Product Section */}
                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="product-panel-content"
                                id="product-panel-header"
                            >
                                <Typography variant="h5">Product Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Product Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                            <Typography variant="h6" gutterBottom>
                                                Create Product
                                            </Typography>
                                            <ProductForm onSubmit={handleProductSubmit} existingGuarantees={guarantees.map(g => g.name)} />
                                        </Paper>
                                    </Grid>
                                    {/* Product List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                            <Typography variant="h6" gutterBottom>
                                                Product List
                                            </Typography>
                                            <ProductList products={products} />
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
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="guarantee-panel-content"
                                id="guarantee-panel-header"
                            >
                                <Typography variant="h5">Guarantee Section</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Guarantee Form */}
                                    <Grid item xs={6}>
                                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                            <Typography variant="h6" gutterBottom>
                                                Create Guarantee
                                            </Typography>
                                            <GuaranteeForm onSubmit={handleGuaranteeSubmit} existingMedicalActs={[]} />
                                        </Paper>
                                    </Grid>
                                    {/* Guarantee List */}
                                    <Grid item xs={6}>
                                        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                            <Typography variant="h6" gutterBottom>
                                                Guarantee List
                                            </Typography>
                                            <GuaranteeList guarantees={guarantees} />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}
