import AvailableJobCard from "@/components/AvailableJobCard"


export default function JobsPage() {
    return (
        <div className="flex flex-col overflow-auto h-[78vh]">
            {[...new Array(6)].map((item, index) => {
                return <AvailableJobCard key={index + 1} isApplied={false} />
            })}
        </div>
    )
}