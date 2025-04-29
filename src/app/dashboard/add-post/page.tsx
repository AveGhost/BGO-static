import Steps from "@/components/ui/add-edit-post/steps.component"
import AddPostWrapper from "@/components/add-post/add-post-wrapper.component"
import RequireAuth from "@/context/RequireAuth"
import { Roles } from "@/types/RoleTypes"
const AddPost = () => {
    return (
        <RequireAuth role={Roles.ADMINISTRATOR || Roles.EDITOR}>
            <div className="container max-w-[1200px] mx-auto py-6 px-4">
                <Steps />
                <AddPostWrapper />
            </div>
        </RequireAuth>
    )
}

export default AddPost