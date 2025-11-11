import {
    HomeContainerStyled,
    LinkContainerStyled,
    LinksContainerStyled,
    MenuContainerStyled,
    NavbarContainerStyled,
    SpanStyled,
    UserContainerStyled,
    UserNavStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="">
                    <img
                        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
                        alt="Logo"
                    />
                </a>
            </div>
            <LinksContainerStyled>
                <HomeContainerStyled>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}>
                        <a href="">
                            <LinkContainerStyled>
                                <HiHome />
                            </LinkContainerStyled>
                            Home
                        </a>
                    </motion.div>
                </HomeContainerStyled>
                <UserNavStyled>
                    <UserContainerStyled>
                        <SpanStyled>Iniciar sesión</SpanStyled>
                        <FaUser />
                    </UserContainerStyled>
                </UserNavStyled>
                <motion.div whileTap={{ scale: 0.97 }}>
                    <MenuContainerStyled>
                        <AiOutlineMenu />
                    </MenuContainerStyled>
                </motion.div>
            </LinksContainerStyled>
        </NavbarContainerStyled>
    );
};

export default Navbar;
