'use client'

import { useEffect, useState, useContext } from "react"
import FormWrapper from "@/components/ui/form/form-wrapper.component"
import FormInput from "@/components/ui/form/form-input.component"
import FormFile from "@/components/ui/form/form-file/form-file.component"
import FormTextArea from "@/components/ui/form/form-textarea.component"
import PreviewImage from "@/components/ui/add-edit-post/preview-image.component"
import PostFieldWrapper from "@/components/ui/add-edit-post/add-post-field-wrapper.component"
import { Field } from "@/types/PostField"
import AddFieldButtons from "@/components/ui/add-edit-post/add-field-buttons"
import SetSummaryCardWrapper from "@/components/ui/add-edit-post/set-summary-card-wrapper.component"
import RatingTableElement from "@/components/ui/article/rating-table-element.component"
import Button from "@/components/ui/button/button.component"
import { addField } from "@/mixins/addField"
import { updateField } from "@/mixins/updateFields"
import { handleFileSelect, handleDrop } from "@/mixins/handleFileInput"
import { deleteField } from "@/mixins/deleteField"
import { AuthContext } from "@/context/AuthProvider"
import { PostFormData } from "@/types/PostFormData"
import { redirect } from "next/navigation"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import Loading from "./loading"
import SearchBox from "../ui/search-box/search-box.component"
import SelectedGame from "../ui/add-edit-post/selected-game.component"
import { moveFieldDown, moveFieldUp } from "@/mixins/moveField"
import OrderHandler from "../ui/add-edit-post/order-handler.component"
import UploadImage from "../ui/add-edit-post/upload-image.component"
import newsData from '@/staticData/news.json'
import newsRichContent from '@/staticData/news_rich_contents.json'
import newsContent from '@/staticData/news_content.json'
import games from '@/staticData/games.json'
interface GameProps {
    title: string
    id: number
}

const EditPostWrapper = () => {
    const searchParams = useSearchParams()
    const id: number = parseInt(searchParams.get('id')!)
    const user = useContext(AuthContext)?.user
    const news = newsData.content.find((item) => item.id === Number(id))!
    const game = games.find((item) => item.id === Number(news.game_id))!
    const content_id = newsContent.filter(item => item.news_id === Number(id)).map(item => item.content_id)
    const content_post: Field[] = newsRichContent.filter(item => content_id.includes(item.id))
    const [isLoading, setIsLoading] = useState(true)
    const [postAuthorId, setPostAuthorId] = useState<number>(0)
    const [currentPostGameId, setCurrentPostGameId] = useState<number>(0)
    const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(undefined)
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = useState<string | undefined>(undefined)
    const [teaser, setTeaser] = useState<string>("")
    const [content, setContent] = useState<Field[]>([])
    const [reviewTitle, setReviewTitle] = useState("")
    const [score, setScore] = useState(0)
    const [selectedGame, setSelectedGame] = useState<GameProps>({
        title: "Wybierz gre",
        id: 0
    })
    const [summaryTitle, setSummaryTitle] = useState("")
    const [summaryContent, setSummaryContent] = useState("")
    const [plusList, setPlusList] = useState<string[]>([])
    const [plus, setPlus] = useState("")
    const [minusList, setMinusList] = useState<string[]>([])
    const [minus, setMinus] = useState("")
    const [formData] = useState<PostFormData>({
        title: reviewTitle,
        thumbnail: previewThumbnail ?? "",
        teaser: teaser,
        content: content,
        summaryTitle: summaryTitle,
        summaryContent: summaryContent,
        plusList: plusList,
        minusList: minusList,
        score: score,
        publishDate: `${Date.now().toString()}`,
        author_id: user?.id ?? 1,
        game_id: selectedGame.id
    })

    const handleAddField = addField(setContent);
    const handleUpdateField = updateField(setContent);
    const handleDeleteField = deleteField(setContent);
    const handleMoveFieldUp = moveFieldUp(setContent);
    const handleMoveFieldDown = moveFieldDown(setContent);

    const addPlus = () => {
        setPlusList([...plusList, plus])
        setPlus("")
    }

    const removePlus = (id: number) => {
        setPlusList(prevPlusList => prevPlusList.filter((_, index) => index !== id))
    }

    const addMinus = () => {
        setMinusList([...minusList, minus])
        setMinus("")
    }

    const removeMinus = (id: number) => {
        setMinusList(prevMinusList => prevMinusList.filter((_, index) => index !== id))
    }

    const removeGame = () => {
        setSelectedGame({ title: "", id: 0 })
    }

    const chooseGame = (game: string, id?: number) => {
        setSelectedGame({ title: game , id: id ?? 0 })
    }

    const getUpdatedFields = (original: any, updated: any, exclude: string[] = []) => {
        const changed: Record<string, any> = {};
    
        for (const key in updated) {
            if (exclude.includes(key)) continue;
    
            const originalVal = original[key] ?? null;
            const updatedVal = updated[key] ?? null;
    
            if (originalVal !== updatedVal) {
                changed[key] = updatedVal;
            }
        }
    
        return changed;
    };
    
    useEffect(() => {
        const fetchExistingNews = async () => {
            setReviewTitle(news.title)
            setTeaser(news.teaser)
            setContent(content_post)
            setSummaryTitle(news.summary_title)
            setSummaryContent(news.summary_content)
            setPlusList(news.plus_list)
            setMinusList(news.minus_list)
            setScore(news.score)
            setPreviewThumbnailUrl(news.thumbnail)
            setPreviewThumbnail(news.thumbnail)
            setSelectedGame({ title: game.title, id: game.id })
            setCurrentPostGameId(news.game_id)
            setPostAuthorId(news.author_id)
            setIsLoading(false)
        }
        fetchExistingNews()
    },[])

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const updatedFormData = {
            ...formData,
            title: reviewTitle,
            thumbnail: previewThumbnail ?? "",
            teaser: teaser,
            content: content,
            summaryTitle: summaryTitle,
            summaryContent: summaryContent,
            plusList: plusList,
            minusList: minusList,
            score: score,
            publishDate: new Date().toISOString(),
            author_id: user?.id ?? 1,
            game_id: selectedGame.id,
        };
        
        const adjustExistingData = {
            author_id: postAuthorId,
            game_id: currentPostGameId
        }

        const changedData = getUpdatedFields(adjustExistingData, updatedFormData,["publishDate",'author_id']);
        if (Object.keys(changedData).length === 0) {
            toast("Nic nie zmieniono");
            return;
        }

        toast.success("Zaktualizowano pomyślnie")

        setTimeout(() => {
            redirect(`/article/${id}`)
        },500)
    }

    return (
        <>
        {isLoading ? <Loading /> :
            <FormWrapper onSubmit={handleFormSubmit}>
                <FormInput icon="material-symbols:title-rounded" type="text" placeholder="Wpisz tytuł recenzji" name="title" value={reviewTitle} event={(e) => setReviewTitle(e.target.value)} />
                {!previewThumbnail ?
                <UploadImage setPreviewThumbnail={setPreviewThumbnail} previewThumbnailUrl={previewThumbnailUrl} setPreviewThumbnailUrl={setPreviewThumbnailUrl} />
                : <PreviewImage classes="w-[1200px] h-[650px]" previewImage={previewThumbnail} deleteImage={() => setPreviewThumbnail(undefined)}/>}
                <FormTextArea value={teaser} placeholder="Wpisz podtytuł" name="teaser" event={(e) => setTeaser(e.target.value)} />
                {content.map((field,index) => (
                    field.type === 'HEADING' ?
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <div className="flex items-center bg-zinc-900 p-4 rounded-lg">
                            <OrderHandler moveDown={() => handleMoveFieldDown(index)} moveUp={() => handleMoveFieldUp(index)} />
                            <FormInput
                                key={field.id}
                                type="text"
                                placeholder="Wpisz Nagłówek"
                                name={`${field.type}_${field.id}`}
                                value={field.content}
                                icon="material-symbols:title-rounded"
                                event={(e) => handleUpdateField(field.id, e.target.value)}
                            />
                        </div>
                    </PostFieldWrapper>
                    : field.type === 'PARAGRAPH' ?
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <div className="flex items-center bg-zinc-900 p-4 rounded-lg">
                            <OrderHandler moveDown={() => handleMoveFieldDown(index)} moveUp={() => handleMoveFieldUp(index)} />
                            <FormTextArea
                                key={field.id}
                                value={field.content}
                                placeholder="Wpisz treść"
                                name={`${field.type}_${field.id}`}
                                event={(e) => handleUpdateField(field.id, e.target.value)}
                                classes="w-full"
                            />
                        </div>
                    </PostFieldWrapper>
                    :
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <div key={field.id} className="flex p-4 rounded-lg bg-zinc-900">
                            <OrderHandler moveDown={() => handleMoveFieldDown(index)} moveUp={() => handleMoveFieldUp(index)} />
                            <div className="flex flex-col w-full">
                                {!field.content ?
                                <FormFile
                                    icon="material-symbols:upload-rounded"
                                    id={field.id}
                                    name={`${field.type}_${field.id}`}
                                    event={(e) => handleFileSelect(e, undefined, field.id, setContent)}
                                    update={(e) => handleUpdateField(field.id, e.target.value)}
                                    handleDragOver={(e) => e.preventDefault()}
                                    handleDrop={(e) => handleDrop(e, undefined, field.id, setContent)}
                                >
                                    <span className="text-sm text-zinc-400">Lub</span>
                                    <div className="grid grid-cols-[1fr_120px] gap-4 p-4 text-sm">
                                        <FormInput icon="material-symbols:cloud-upload-rounded" type="text" placeholder="Wpisz link do obrazka" name="thumbnail_url" value={previewThumbnailUrl ?? ""} event={(e) => setPreviewThumbnailUrl(e.target.value)} />
                                        <Button type="submit" text="Dodaj" event={[() => handleUpdateField(field.id, previewThumbnailUrl ?? ""), () => setPreviewThumbnailUrl("")]}/>
                                    </div>
                                </FormFile>
                                : 
                                <PreviewImage
                                    previewImage={field.content}
                                    classes="w-full h-[650px] col-span-1"
                                    deleteImage={() => handleUpdateField(field.id, "")}
                                />}
                                <span className="w-full mt-4">
                                    <FormInput
                                        type="text"
                                        placeholder="Dodaj adnotacje"
                                        name={`${field.type}_${field.id}`}
                                        value={field.description ?? ""}
                                        event={(e) => handleUpdateField(field.id, field.content, e.target.value)}
                                    />
                                </span>
                            </div>
                        </div>
                    </PostFieldWrapper>
                ))}
                <AddFieldButtons addField={handleAddField} />
                <SetSummaryCardWrapper score={score} setScore={setScore}>
                    {selectedGame.title ?
                        <SelectedGame text={selectedGame.title} event={removeGame} />
                    : 
                        <SearchBox event={chooseGame} />
                    }
                    <FormInput 
                        icon="material-symbols:title-rounded" 
                        type="text" 
                        placeholder="Wpisz tytuł podsumowania" 
                        name="summary_title" 
                        value={summaryTitle} 
                        event={(e) => setSummaryTitle(e.target.value)} 
                    />
                    <FormTextArea 
                        value={summaryContent} 
                        placeholder="Wpisz podtytuł" 
                        name="summary_content" 
                        event={(e) => setSummaryContent(e.target.value)} 
                    />
                </SetSummaryCardWrapper>
                <div className="flex justify-between gap-8 my-8">
                    <ul className="flex flex-col gap-4 w-full">
                        {plusList.map((plus, index) =>( 
                            <PostFieldWrapper key={index} fieldId={index} deleteField={removePlus} classes="flex items-center flex-row-reverse justify-between gap-2" iconClass="relative top-0 right-0">
                                <RatingTableElement text={plus} icon="ic:round-plus" isPositive />
                            </PostFieldWrapper>
                        ))}
                        <FormInput
                            icon="ic:round-plus"
                            type="text"
                            placeholder="Wpisz plus"
                            name="pluses"
                            value={plus}
                            event={(e) => setPlus(e.target.value)}
                        />
                        {plus && <Button type="button" text="Dodaj" event={() => addPlus()} />}
                    </ul>
                    <ul className="flex flex-col gap-4 w-full">
                        {minusList.map((minus, index) =>(
                            <PostFieldWrapper key={index} fieldId={index} deleteField={removeMinus} classes="flex items-center flex-row-reverse justify-between gap-2" iconClass="relative top-0 right-0">
                                <RatingTableElement text={minus} icon="ic:round-minus" isPositive={false} />
                            </PostFieldWrapper>
                        ))}
                        <FormInput
                            icon="ic:round-minus"
                            type="text"
                            placeholder="Wpisz minus"
                            name="minuses"
                            value={minus}
                            event={(e) => setMinus(e.target.value)}
                        />
                        {minus && <Button type="button" text="Dodaj" event={() => addMinus()} />}
                    </ul>
                </div>
                <Button type="submit" text="Zapisz i opublikuj" backgroundColor="bg-sky-800" />
            </FormWrapper>
        }
        </>
    )
}

export default EditPostWrapper