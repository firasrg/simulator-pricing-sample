import { useMemo, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductForm from '@forms/ProductForm';
import ProductList from '@lists/ProductList';
import GuaranteeForm from '@forms/guarantee/GuaranteeForm';
import GuaranteeList from '@lists/GuaranteeList';
import MedicalActList from '@lists/MedicalActsList';
import MedicalActForm from '@forms/MedicalActForm';
import ProcessStepTypeInsured from '@forms/steps/ProcessStepTypeInsured';
import { deleteProduct, product, setProductList } from '@app-redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@app-redux/reduxHooks';
import { guarantee, setGuaranteeList } from '@app-redux/slices/guaranteeSlice';
import { medicalAct, setMedicalActList } from '@app-redux/slices/medicalActSlice';
import Layout from './AppLayout';
import { EDashboardSection } from '@models/enums/EDashboardSection';
import { IProduct } from '@models/IProduct';
import { NULL_VALUE } from '@constants/values';

export default function PageDashboard() {
  const [expanded, setExpanded] = useState<EDashboardSection | null>(null);
  const [selectedPath, selectPath] = useState<IProduct | null>(null);

  const { list: products } = useAppSelector(product);
  const { list: guarantees } = useAppSelector(guarantee);
  const { list: medicalActs } = useAppSelector(medicalAct);

  const dispatch = useAppDispatch();

  function computeExpanded(toCompareWith: EDashboardSection) {
    return expanded === toCompareWith ? null : toCompareWith;
  }

  const guaranteesNonNullableList = useMemo(
    () => guarantees.filter((g) => g !== NULL_VALUE).map((g) => g.name) as string[],
    [guarantees]
  );

  return (
    <Layout>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Product Section */}
          <Grid item xs={12}>
            <Accordion
              expanded={EDashboardSection.PRODUCTS === expanded}
              onChange={() => setExpanded(computeExpanded(EDashboardSection.PRODUCTS))}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="product-panel-content"
                id="product-panel-header">
                <Typography variant="h5">Product Section</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {/* Product Form */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        Create Product
                      </Typography>
                      <ProductForm
                        onSubmit={(newProduct) => dispatch(setProductList([...products, newProduct]))}
                        existingGuarantees={guaranteesNonNullableList}
                      />
                    </Paper>
                  </Grid>
                  {/* Product List */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        Product List
                      </Typography>
                      <ProductList
                        products={products}
                        onDelete={(productName) => dispatch(deleteProduct(productName))}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* Guarantee Section */}
          <Grid item xs={12}>
            <Accordion
              expanded={EDashboardSection.GUARANTEES === expanded}
              onChange={() => setExpanded(computeExpanded(EDashboardSection.GUARANTEES))}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="guarantee-panel-content"
                id="guarantee-panel-header">
                <Typography variant="h5">Guarantee Section</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {/* Guarantee Form */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        Create Guarantee
                      </Typography>
                      <GuaranteeForm
                        onSubmit={(newGuarantee) => dispatch(setGuaranteeList([...guarantees, newGuarantee]))}
                        existingMedicalActs={medicalActs.map((ma) => ma.name)}
                      />
                    </Paper>
                  </Grid>
                  {/* Guarantee List */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
          {/* Medical Act Section */}
          <Grid item xs={12}>
            <Accordion
              expanded={EDashboardSection.MEDICAL_ACTS === expanded}
              onChange={() => setExpanded(computeExpanded(EDashboardSection.MEDICAL_ACTS))}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="medical-act-panel-content"
                id="medical-act-panel-header">
                <Typography variant="h5">Medical Act Section</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {/* Medical Act Form */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        Create Medical Act
                      </Typography>
                      <MedicalActForm
                        onSubmit={(newMedicalAct) => dispatch(setMedicalActList([...medicalActs, newMedicalAct]))}
                      />
                    </Paper>
                  </Grid>
                  {/* Medical Act List */}
                  <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" gutterBottom>
                        Medical Act List
                      </Typography>
                      <MedicalActList medicalActs={medicalActs} />
                    </Paper>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* Quotation Demo Section */}
          <Grid item xs={12}>
            <Accordion
              expanded={EDashboardSection.DEMO === expanded}
              onChange={() => setExpanded(computeExpanded(EDashboardSection.DEMO))}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="quotation-demo-panel-content"
                id="quotation-demo-panel-header">
                <Typography variant="h5">Quotation Demo Section</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {!selectedPath ? (
                    <Grid item xs={12}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}>
                        <Typography variant="h6" gutterBottom>
                          Select Your Path
                        </Typography>
                        <Box display="flex" gap={5}>
                          {products.map((p) => (
                            <Button
                              onClick={() => selectPath(p)}
                              size="large"
                              color="primary"
                              style={{ backgroundColor: '#62F5C868' }}>
                              <Typography variant="h5" component="div">
                                {p.name}
                              </Typography>
                            </Button>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  ) : (
                    <Grid item xs={6}>
                      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ProcessStepTypeInsured onChange={() => null} />
                      </Paper>
                    </Grid>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
