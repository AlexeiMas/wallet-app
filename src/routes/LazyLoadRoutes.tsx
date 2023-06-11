import {lazy, Suspense} from "react"
import {ERoutes} from "@/types/pages"
import FlexWrapper from "@/components/FlexWrapper"

export function lazyLoadRoutes(componentName: keyof typeof ERoutes) {
  const LazyElement = lazy(() => import(`../containers/${componentName}/index.tsx`))

  return (
    <Suspense fallback={<FlexWrapper embedLoader />}>
      <LazyElement/>
    </Suspense>
  )
}