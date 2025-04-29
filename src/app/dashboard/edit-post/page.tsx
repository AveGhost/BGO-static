import EditPostWrapper from "@/components/edit-post/edit-post-wrapper.component"
import RequireAuth from "@/context/RequireAuth"
import { Roles } from "@/types/RoleTypes"
const EditPost = () => {
    return (
        <RequireAuth role={Roles.ADMINISTRATOR || Roles.EDITOR}>
            <div className="container max-w-[1200px] mx-auto py-6">
                <EditPostWrapper />
            </div>
        </RequireAuth>
    )
}

export default EditPost