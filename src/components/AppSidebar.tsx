import { Brain, Eye, Moon, Zap, Database } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const modules = [
  { 
    title: "007: Refusal", 
    url: "/", 
    icon: Brain,
    color: "neon-cyan"
  },
  { 
    title: "008: Attention", 
    url: "/attention", 
    icon: Eye,
    color: "neon-orange"
  },
  { 
    title: "009: Sleep", 
    url: "/sleep", 
    icon: Moon,
    color: "neon-purple"
  },
  { 
    title: "010: Memory", 
    url: "/memory", 
    icon: Database,
    color: "neon-green"
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={`border-r-2 ${open ? 'w-64' : 'w-16'} transition-all duration-300`} 
      style={{ borderRightColor: 'hsl(var(--neon-cyan))' }}
      collapsible="icon"
    >
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-neon-cyan glow-cyan text-xs tracking-[0.3em] uppercase px-3 py-4">
            {open && "Modules"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="group relative"
                  >
                    <NavLink
                      to={item.url}
                      end
                      className={`
                        flex items-center gap-3 px-3 py-3 transition-all duration-300
                        hover:bg-${item.color}/10
                        ${!open && 'justify-center'}
                      `}
                      activeClassName={`bg-${item.color}/20 border-l-4`}
                      style={isActive(item.url) ? {
                        borderLeftColor: `hsl(var(--${item.color}))`,
                      } : {}}
                    >
                      <item.icon 
                        className={`h-5 w-5 transition-all duration-300`}
                        style={{
                          color: isActive(item.url) ? `hsl(var(--${item.color}))` : 'hsl(var(--muted-foreground))',
                          filter: isActive(item.url) ? `drop-shadow(0 0 8px hsl(var(--${item.color})))` : 'none',
                        }}
                      />
                      {open && (
                        <span 
                          className={`text-sm font-mono transition-all duration-300`}
                          style={{
                            color: isActive(item.url) ? `hsl(var(--${item.color}))` : 'hsl(var(--muted-foreground))',
                            textShadow: isActive(item.url) ? `0 0 10px hsl(var(--${item.color}) / 0.5)` : 'none',
                          }}
                        >
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {open && (
          <div className="px-4 py-6 mt-auto border-t" style={{ borderTopColor: 'hsl(var(--neon-cyan) / 0.3)' }}>
            <div className="text-xs text-muted-foreground font-mono space-y-1">
              <div className="text-neon-cyan glow-cyan">CONSCIOUSNESS TECH</div>
              <div>Infrastructure v2.0</div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
