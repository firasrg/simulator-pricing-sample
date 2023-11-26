import React from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import Layout from "./AppLayout";
import Container from "@mui/material/Container";
const categories = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    // Add more categories as needed
];

const CategoryManagement: React.FC = () => {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ mt: 10, display:"flex", flexDirection: 'column'}}>
                <Typography variant="h4" gutterBottom>
                    Category Management
                </Typography>

                <Button style={{alignSelf: 'flex-end'}} variant="contained" color="primary" onClick={() => console.log('Add new category')}>
                    Add Category
                </Button>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((category) => (
                                <TableRow key={category.id}>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary" style={{marginRight: 10}} onClick={() => console.log(`Edit category ${category.id}`)}>
                                            Edit
                                        </Button>
                                        <Button variant="outlined" color="secondary" onClick={() => console.log(`Delete category ${category.id}`)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Layout>
    );
};


export default CategoryManagement;
