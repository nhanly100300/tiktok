import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/Component/Layout/DefaultLayout/index.js';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((item, index) => {
                        let Layout = DefaultLayout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
