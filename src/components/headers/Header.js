import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link, Text } from "../atoms";
import { AppBar, Toolbar, Box, Button, Badge } from "@mui/material";
import { IoCart } from "react-icons/io5";
import LanguageSelect from "./LanguageSelect";
import { UserIcon } from "./UserIcon";
import { CartModal } from "./CartModal";
import { useCart } from "../../hooks";
import { ProductCategories } from "./ProductCategories";
import { SearchBar } from "./SearchBar";
import LogoImage from "../../assets/images/Logo.png";
import { useTranslation } from "react-i18next";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: theme.spacing(0, 2),
  width: "100%",
  margin: "0 auto",
  borderRadius: theme.spacing(4),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0.5, 0),
}));

const LogoLink = styled(Link)({
  display: "flex",
  alignItems: "center",
});

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { cartItems } = useCart();
  const cartItemsQuantity =
    cartItems?.reduce((acc, curr) => acc + curr.quantity, 0) || 0;

  return (
    <div>
      <Box>
        <StyledAppBar position="static">
          <StyledToolbar>
            <FlexBox>
              <LogoLink to="/">
                <LogoImg src={LogoImage} alt="logo" />
              </LogoLink>
              <Text
                sx={{
                  fontSize: "30px",
                  maxWidth: "300px",
                  overflow: "hidden",
                }}
              >
                {t("the_best_for_shopping")}
              </Text>
            </FlexBox>
            <FlexBox>
              <SearchBar />
              <Box sx={{ marginLeft: 2 }}>
                <ProductCategories />
              </Box>
            </FlexBox>
            <FlexBox>
              <Button onClick={() => setOpen(true)}>
                <Badge color="secondary" badgeContent={cartItemsQuantity}>
                  <IoCart size={32} color="black" />
                </Badge>
              </Button>
              <UserIcon />
              <LanguageSelect />
            </FlexBox>
          </StyledToolbar>
        </StyledAppBar>
        <CartModal
          open={open}
          setOpen={setOpen}
          cartItems={cartItems}
          totalQuantity={cartItemsQuantity}
        />
      </Box>
    </div>
  );
};
