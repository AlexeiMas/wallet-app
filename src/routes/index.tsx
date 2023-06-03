import {createBrowserRouter} from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import {ERoutes} from "@/types/pages"
import {lazyLoadRoutes} from "@/routes/LazyLoadRoutes"


const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: ERoutes.TransactionsList,
        element: lazyLoadRoutes("TransactionsList")
      },
      {
        path: ERoutes.TransactionDetail,
        element: lazyLoadRoutes("TransactionDetail")
      },
    ]
  }
])

export default router