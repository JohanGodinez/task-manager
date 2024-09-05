import { Panel } from "./Panel";

export const PanelGroup = () => {
  return (
    <div className="flex w-full justify-around gap-6 px-4">
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
