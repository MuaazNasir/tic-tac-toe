import ModeButton from '@/components/common/ModeButton'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mt-40 gap-10">
        <ModeButton title={"Play Offline"} href='/offline'/>
        {/* <ModeButton title={"Play Online"} href='/online'/> */}
      </div>
    </>
  )
}
