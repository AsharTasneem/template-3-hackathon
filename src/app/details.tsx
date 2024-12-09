import { Button } from "@/components/ui/button"
export default function Details() {
    return(
        <div>
            <div className="flex flex-col items-center roboto font-[500] gap-3">
                <h1 className="text-sm">First Look</h1>
                <h1 className="text-[56px]">NIKE AIR MAX PULSE</h1>
                <p className="text-sm">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                —designed to push you past your limits and help you go to the max.</p>
                <div className="flex justify-center gap-2">
                    {/* <button className={buttonVariants({variant:"destructive" })}>Notify Me</button> */}
                    <Button variant="default" className="rounded-full">Notify Me</Button>
                    <Button variant="default" className="rounded-full">Shop Air Max</Button>
                </div>
            </div>
        </div>
    )
}