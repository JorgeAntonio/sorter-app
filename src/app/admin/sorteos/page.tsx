import SorterPage from "@/modules/admin/pages/sorter-page";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SorterPage />
    </Suspense>
  )
}
