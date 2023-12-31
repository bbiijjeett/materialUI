import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumbs'>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumbs' separator='-'>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumbs' separator={<NavigateNextIcon fontSize='small' />}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs maxItems={3} itemsAfterCollapse={2} aria-label='breadcrumbs' separator={<NavigateNextIcon fontSize='small' />}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs maxItems={3} itemsBeforeCollapse={2} aria-label='breadcrumbs' separator={<NavigateNextIcon fontSize='small' />}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;