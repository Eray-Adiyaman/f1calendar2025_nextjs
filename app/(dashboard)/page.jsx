import { parseISO, format } from "date-fns"

/* date format tests for accordions*/
export default function HomePage() {
  const date1 = parseISO("2024-03-01T12:30:00+0000")
  return (
    <>
    <div>HomePage</div>
    <div>{format(date1,"LLLL d, EEEE h:m a")}</div>
    </>

  )
}
