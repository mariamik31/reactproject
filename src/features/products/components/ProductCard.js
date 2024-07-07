import React from "react";
import { Grid, Card, Stack, styled, Box } from "@mui/material";
import { Link, Typography } from "@mui/material";
import { ProductCardActions } from "./ProductCardAction";

export const ProductCard = ({ product }) => {
  const { name, image, brand, category, price, _id } = product;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <StyledCard>
        <Link href={`/products/categories/${category}/${_id}`} underline="none">
          <StyledImage src={image} alt={`${brand}-${name}`} />
        </Link>
        <Stack spacing={1.5} mt={2} mb={2} flexGrow={1}>
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {brand}
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="secondary.third">
            ${price}
          </Typography>
        </Stack>
        <Box
          sx={{
            mt: "auto",
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ProductCardActions product={product} />
        </Box>
      </StyledCard>
    </Grid>
  );
};
