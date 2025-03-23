import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex w-full items-center justify-between gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <ModeToggle />
          </div>
        </header>

        {/* Children */}
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='p-4'>{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
