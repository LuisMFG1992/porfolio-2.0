import SnapshotTimeline from './SnapshotTimeline'

const Experience = () => {
  const snapshotsTimeline = [
    {
      id: 1,
      date: 'December 2022 - Februery 2023',
      title: 'Freelancer',
      description:
        'Create components and features according to customer specifications.',
    },
    {
      id: 2,
      date: 'June 2022 - August 2022',
      title: 'Freelancer',
      description:
        'Add and make changes to an existing e-commerce site according to customer requirements.',
    },
    {
      id: 3,
      date: 'Jamuary 2022 - March 2022',
      title: 'Freelancer',
      description:
        'Develop a web app for managing the electrical blueprints of medium voltage equipment in power substations using React and Firebase as the backend.',
    },
  ]

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-15 relative"
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
