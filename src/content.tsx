import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { Button } from "~components/ui/button"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-32 right-8">
      <div className="flex flex-col gap-2">
        <Button className="w-full" variant="default">
          Yes sir
        </Button>
      </div>
    </div>
  )
}

export default PlasmoOverlay
