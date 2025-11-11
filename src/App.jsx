import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Categories from "./components/Categories/Categories.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <Categories></Categories>
            </Layout>
        </>
    );
}

export default App;
