const SkillCard = ({ name, icon, invert }) => (
    
    
    <div className="text-center p-4 bg-[var(--color-background)] rounded-lg transition-all duration-300 hover:bg-[#3B82F6] hover:scale-105 border border-[#3B82F6]">
        <img
            src={icon}
            className="h-16 w-16 mx-auto mb-3 transition-transform duration-300"
            alt={`${name} Icon`}
            style={{ filter: invert ? 'invert(1)' : 'none' }}
        />
        <p className="font-semibold text-[var(--color-text)]">{name}</p>
    </div>
);
export default SkillCard;

