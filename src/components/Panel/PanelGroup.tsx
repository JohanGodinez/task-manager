import { Panel } from "./Panel";

export const PanelGroup = () => {
  return (
    <div className="flex overflow-x-auto w-full gap-6 p-4 scroll-smooth">
      <Panel
        title="To Do"
      />
      <Panel
        title="In Progress"
      />
      <Panel
        title="Testing"
      />
      <Panel
        title="Done"
      />
    </div>
  );
};
