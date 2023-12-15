import { Container } from '@mui/material';
type Props = {
  children: React.ReactNode;
};
export default function BlContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
