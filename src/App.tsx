import { MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced";

const projectId: string = 'e7143ea6-51b3-49ad-b973-e78dc6f89ebd'
const userName: string = 't.denmark@outlook.com'
const secret: string = 'PsEttb6Y5Yjq9F5'

function App() {
    const chatProps = useMultiChatLogic(projectId, userName, secret)
    return <div>
        <MultiChatWindow {...chatProps} style={{ height:'100vh'}} />  
        </div>
}

export default App;