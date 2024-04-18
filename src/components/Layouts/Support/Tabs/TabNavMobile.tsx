export const TabNavMobile = ({ tab, index, activeTab }) => {
  return (
    <div
      className={`border-2 border-motion_ime_purple lg:hidden px-4 py-2 rounded-full font-semibold ${
        index === activeTab && "bg-motion_ime_purple text-white"
      }`}
    >
      {tab?.title}
    </div>
  );
};
