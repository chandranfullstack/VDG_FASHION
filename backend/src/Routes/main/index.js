import express from "express"
import AdminRouter from "../administration/index.js"
import AuthRouter from "../user-management/authentication/index.js"
import CommerceRouter from "../product-management/index.js"
import SettingsRouter from "../settings/index.js"
import UploadRouter from "../upload/index.js"
import TokenRouter from "../dev/index.js"
import AnalysisRouter from "../dev/analysis.js"
import MeRouter from "../dev/me.js"
import Paymentrouter from "../payment/index.js"
import Ordersrouter from "../product-management/orders/index.js"
import PopularProductRouter from "../dev/popular-products.js"
import WithdrawalsRouter from "../dev/withdrawls.js"
import TaxRouter from "../order-management/admin-operations/tax.js"
import ShippingRouter from "../order-management/admin-operations/shipping.js"
import couponrouter from "../product-management/coupons/index.js"
import SliderRouter from "../marketing-&-promotions/promotions/index.js"
import offerRouter from "../offer/index.js"


const router = express.Router()


router.use("/admin",AdminRouter)
router.use("/auth",AuthRouter)
router.use("/commerce",CommerceRouter)
router.use("/settings",SettingsRouter)
router.use("/upload",UploadRouter)
router.use("/token",TokenRouter)
router.use("/analytics",AnalysisRouter)
router.use("/me",MeRouter)
router.use("/payment", Paymentrouter)
router.use('/orders', Ordersrouter)
router.use("/popular-products",PopularProductRouter)
router.use("/withdraws",WithdrawalsRouter)
router.use("/taxes",TaxRouter)
router.use("/shippings",ShippingRouter)
router.use("/coupons",couponrouter)
router.use("/slider",SliderRouter)
router.use("/offers",offerRouter)

export default router