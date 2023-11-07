import { snapshotsTimeline } from '../constants/snapshotsTimeline'
import SnapshotTimeline from './SnapshotTimeline'

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center gap-8 py-20 p-4 xs:px-10 md:px-15 relative"
    >
      <h2 className="text-5xl font-bold text-center">
        <span className="text-primary">My</span> Experience
      </h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {snapshotsTimeline.map((element) => (
          <SnapshotTimeline
            key={element.id}
            date={element.date}
            title={element.title}
            description={element.description}
          />
        ))}
      </ol>
    </section>
  )
}

export default Experience
