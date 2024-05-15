const Panel = ({ children }) => {
  return (
    <div
      className="flex flex-col gap-3 items-center bg-slate-900 
    w-6/12 rounded-xl p-4 min-w-80"
    >
      {children}
    </div>
  );
};

export default Panel;
