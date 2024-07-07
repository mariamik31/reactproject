import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers/utils";
import { Stack, styled, Button } from "@mui/material";
import { Text } from "../../../components/atoms";
import { useDispatch } from "react-redux";
import { deleteProduct, setSelectProduct } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const ProductCardActions = ({ product }) => {
  const { userData } = useUser();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isUserAdmin(userData)) {
    return (
      <Stack spacing={1}>
        <StyledButton
          variant="contained"
          onClick={() => {
            dispatch(setSelectProduct(product));
            navigate(`/products/${product._id}/edit`);
          }}
        >
          {t("edit")}
        </StyledButton>
        <StyledButton
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(deleteProduct({ id: product._id }));
          }}
        >
          {t("delete")}
        </StyledButton>
      </Stack>
    );
  }
  return (
    <StyledButton
      variant="contained"
      onClick={() => {
        dispatch(addToCart(product));
      }}
    >
      <FaPlus color="white" style={{ marginRight: 4 }} />
      <Text color="#FFFFFF"> {t("add_to_cart")}</Text>
    </StyledButton>
  );
};
