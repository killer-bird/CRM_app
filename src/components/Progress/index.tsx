export const Progress = ({ tasks, completedTasks }: { tasks: number, completedTasks: number }) => {
  const segments = Array.from({ length: tasks }, (_, index) => index + 1);
  const isAllCompleted = completedTasks === tasks;


  const getColor = (index: number) => {
    if (isAllCompleted) {
      return '#02D148';
    } else if (index < completedTasks) {
      return '#7065EF';
    } else {
      return '#ffff';
    }
  }
  const getBorderRadius = (index: number) => {
    if (segments.length === 1) {
      return '10px';
    } else if (index === 0) {
      return '10px 0 0 10px';
    } else if (index === tasks - 1) {
      return '0 10px 10px 0';
    } else {
      return '0px';
    }
  };

  const getWidth = () => {
    if (tasks === 1) {
      return '195px';
    } else if (tasks === 2) {
      return '95px';
    } else if (tasks === 3) {
      return '63px';
    } else if (tasks === 4) {
      return '45px';
    } else if (tasks === 5) {
      return '37px';
    }
  }
  return (
    <div className="flex gap-[6px] items-center">
      <div className="text-[#97979A] text-[10px] font-medium">
        {completedTasks}/{tasks}
      </div>
      <div className="flex items-center gap-[2px]">
        {segments.map((segment, index) => (
          <div
            key={segment}
            style={{
              height: '6px',
              width: getWidth(),
              flexGrow: 1,
              borderRadius: getBorderRadius(index),
              backgroundColor: getColor(index),
            }}
          />
        ))}
      </div>
    </div>
  )
}
