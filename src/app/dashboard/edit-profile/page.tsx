import EditProfileWrapper from "@/components/edit-profile/edit-profile-wrapper.component"
import RequireAuth from "@/context/RequireAuth"
const EditProfile = () => {
    return (
        <RequireAuth>
            <div className="container mx-auto flex flex-col items-center justify-center grow px-4">
                <EditProfileWrapper />
            </div>
        </RequireAuth>
    )
}

export default EditProfile