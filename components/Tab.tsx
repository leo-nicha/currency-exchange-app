interface TabProps {
    label: string
    active: boolean
    onClick: () => void
}

const Tab = ({ label, active, onClick }: TabProps) => (
    <div
        onClick={onClick}
        className={`flex-1 text-center p-4 cursor-pointer font-bold 
      ${active ? 'bg-amber-200 rounded-t-lg' : 'bg-white rounded-t-lg'}`}>
        {label}
    </div>
);

export default Tab;