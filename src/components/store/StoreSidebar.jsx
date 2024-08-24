const Sidebar = (props) => {
  const backpackTypes = ['Duffel', 'Hiking', 'Rucksack']

  const handleClick = (selected) => {
    return () => {
      props.changeType(selected)
    }
  }
  return (
    <>
      <ul className="flex flex-row md:flex-col text-start">
        {backpackTypes.map((item) => (
          <li key={item}>
            <button
              onClick={handleClick(item)}
              className={`w-full font-semibold text-xs text-left px-4 py-2 rounded-md ${
                item === props.selectedType ? 'bg-sky-200' : ''
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Sidebar
