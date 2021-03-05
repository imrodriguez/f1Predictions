import { Container } from '../Container';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer/>
    </>
);

export { Layout };