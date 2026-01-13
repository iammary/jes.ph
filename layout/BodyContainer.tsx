import { Scene } from '@/layout/Scene';
import { Details } from '@/layout/Details';

export const BodyContainer = ({ children }: { children: React.ReactNode }) => (
  <div id="root">
    <Scene />
    <div className="absolute top-0 left-0 h-full w-full pointer-events-none *:pointer-events-auto overflow-y-auto">
      <Details />
      {children}
    </div>
  </div>
);
