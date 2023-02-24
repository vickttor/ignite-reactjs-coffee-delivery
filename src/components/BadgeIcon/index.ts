import styled from "styled-components";

import { motion } from "framer-motion";

interface BadIconContainerProps {
  color: string;
}

export const BadgeIconContainer = styled(motion.span)<BadIconContainerProps>`
  padding: 0.5rem;
  border-radius: 999px;
  background: ${(props)=>props.color};
  line-height: 0;
`;