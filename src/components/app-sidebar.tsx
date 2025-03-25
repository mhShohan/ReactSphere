'use client';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { sidebar_data } from '@/utils/sidebar_data';
import * as React from 'react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebar_data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain sidebarNavItems={sidebar_data.navMain} />
        <NavProjects projects={sidebar_data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebar_data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
