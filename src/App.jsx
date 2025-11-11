import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
            </Layout>
        </>
    );
}

export default App;
