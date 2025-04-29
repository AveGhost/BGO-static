import AddGameWrapper from "@/components/add-game/add-game-wrapper.component"
import Steps from "@/components/ui/add-edit-post/steps.component"
import TableListWrapper from "@/components/ui/table-list/table-list-wrapper.component"
import RequireAuth from "@/context/RequireAuth"
import { Roles } from "@/types/RoleTypes"
const AddGame = () => {
    return (
        <RequireAuth role={Roles.ADMINISTRATOR || Roles.EDITOR}>
            <div className="container mx-auto gap-4 md:grid md:grid-cols-2 xl:flex xl:flex-col justify-center place-items-center grow relative py-6 px-4">
                <div className="flex flex-col w-full xl:w-auto">
                    <Steps />
                    <div className="form w-full min-h-[350px] p-4">
                        <div className="flex flex-col gap-4 justify-center items-center h-full">
                            <h1 className="text-2xl text-center mb-6">Dodaj recenzowaną grę</h1>
                            <AddGameWrapper />
                        </div>
                    </div>
                </div>
                <TableListWrapper />
            </div>
        </RequireAuth>
    )
}

export default AddGame