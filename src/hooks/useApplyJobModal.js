import { useContext } from "react"
import ApplyJobModalContext from "~/context/applyJobModalContext"

const useApplyJobModal = () => {
    return useContext(ApplyJobModalContext)
}

export default useApplyJobModal