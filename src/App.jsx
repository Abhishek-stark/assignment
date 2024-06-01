import {
  ChakraProvider,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import theme from "./theme";
import ThemeToggle from "./components/ThemeToggle";
import LoginPage from "./components/LoginPage";
import ActiveOrders from "./components/ActiveOrders";
import CompletedOrders from "./components/CompletedOrders";
import { usePersistentState } from "./hooks/usePersistentState";
import MultiSelect from "./components/MultiSelect";
const App = () => {
  const [authenticated, setAuthenticated] = usePersistentState(
    "authenticated",
    false
  );

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/active-orders" element={<ActiveOrders />} />
            <Route path="/allorder" element={<MultiSelect />} />
            <Route
              path="/orders"
              element={
                authenticated ? (
                  <Tabs>
                    <TabList>
                      <Tab>Active Orders</Tab>
                      <Tab>Completed Orders</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <ActiveOrders />
                      </TabPanel>
                      <TabPanel>
                        <CompletedOrders orders={[]} />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
