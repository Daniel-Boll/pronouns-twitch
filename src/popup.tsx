import { Button } from "~components/ui/button"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center h-16 w-40">
      <div className="flex flex-col gap-2">
        <Button className="w-full" variant="default">
          Yes sir
        </Button>
      </div>
    </div>
  )
}

export default IndexPopup
