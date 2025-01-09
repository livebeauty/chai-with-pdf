import {BrainCogIcon,EyeIcon,GlobeIcon,MonitorSmartphoneIcon, ServerCogIcon,ZapIcon} from "lucide-react"

const feature = [
  {
    name: "Store your PDF Documents",
    description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon
  },
  {
    name: "Blazing Fast Responses",
    description: "Experience lighting-fast answer to your queries, ensuring you get the information you need instantly",
    icon: ZapIcon 
  },
  {
    name: "Chat Memorisation",
    description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
    icon:  BrainCogIcon
  },
  {
    name: "Interactive PDF viewer",
    description: "Enagge with your PDFs like never before using our intuitive and interactive viewer",
    icon:  EyeIcon
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your documents are safely backend up on the cloud, protected from loss or damage",
    icon:  ServerCogIcon
  },
  {
    name: "Responsive Across Device",
    description: "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone",
    icon:  MonitorSmartphoneIcon
  }
]


export default function Home() {
  return (
   
      <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
         <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
           <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 lg:px-8">
             <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Interactive Document Companion</h2>
             </div>
         </div>
       </div> 
      </main>

  );
}
