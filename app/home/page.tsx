// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#ff7eb9] to-white min-h-screen">
      <div className="pt-8 pb-16 px-4 text-center">
        <img src="/goose_logo.svg" alt="Goose Logo" className="mx-auto mb-4" />
        <h1 className="text-2xl font-semibold mb-6">Hi Michael, what would you like to protect?</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img src="/Travel@3x.webp" alt="Travel" />
            <p class="text-black">Travel Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Life-Insurance3x.png" alt="Life Insurance" />
            <p class="text-black">Life Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Critical-Illness3x.png" alt="Critical Illness" />
            <p class="text-black">Critical Illness</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/ADD3x.png" alt="AD&D Insurance" />
            <p class="text-black">AD&D Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Kids3x.png" alt="Kids Insurance" />
            <p class="text-black">Kids Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Income-Protection3x.png" alt="Income Protection" />
            <p class="text-black">Income Protection</p>
          </div>
          <div className="bg-white p-4 rounded-lg col-span-2 sm:col-span-1">
            <img src="/Hospital-Cash3x.png" alt="Hospital Cash" />
            <p class="text-black">Hospital Cash</p>
          </div>
        </div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 bg-white py-2">
        <div className="flex justify-around">
          <a href="#" className="flex flex-col items-center text-xs">
            <HomeIcon className="h-6 w-6 text-[#ff7eb9]" />
            <span className="text-[#ff7eb9]">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center text-xs">
            <FileQuestionIcon className="h-6 w-6" />
            <span>Claims</span>
          </a>
          <a href="#" className="flex flex-col items-center text-xs">
            <FlagIcon className="h-6 w-6" />
            <span>My Policies</span>
          </a>
          <a href="#" className="flex flex-col items-center text-xs">
            <ContactIcon className="h-6 w-6" />
            <span>Contact</span>
          </a>
          <a href="#" className="flex flex-col items-center text-xs">
            <UserIcon className="h-6 w-6" />
            <span>Profile</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function FileQuestionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}