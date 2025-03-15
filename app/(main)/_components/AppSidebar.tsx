"use client";
import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuthContext } from "@/context/auth-provider";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Secretariat",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Caisse",
          url: "#",
        },
        {
          title: "Demandes",
          url: "#",
        },
        {
          title: "Devis",
          url: "/devis",
        },
      ],
    },
    {
      title: "Achat",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Bon de commande",
          url: "#",
        },
        {
          title: "Bon de livraison",
          url: "#",
        },
        {
          title: "Clients",
          url: "#",
        },
        {
          title: "Fournisseurs",
          url: "#",
        },
        {
          title: "Stock",
          url: "#",
        },
      ],
    },
    {
      title: "Comptabilité",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Factures",
          url: "#",
        },
        {
          title: "clients",
          url: "#",
        },
        {
          title: "fournisseurs",
          url: "#",
        },
        {
          title: "Techniciens",
          url: "#",
        },
        {
          title: "Compte bancaire",
          url: "#",
        },
      ],
    },
    {
      title: "Ressources Humaines",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Employées",
          url: "#",
        },
        {
          title: "Techniciens externes",
          url: "#",
        },
        {
          title: "Missions",
          url: "#",
        },
        {
          title: "Véhicule de services",
          url: "#",
        },
        {
          title: "Salaires",
          url: "#",
        },
      ],
    },
  ],

  navMain2: [
    {
      title: "Projets",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Projets en cours",
          url: "#",
        },
        {
          title: "Demandes",
          url: "#",
        },
        {
          title: " Nouveau projet",
          url: "#",
        },
      ],
    },
    {
      title: "Cpanel",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Utilisateurs",
          url: "/users",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthContext();
  const userInfo = {
    name: user?.fullname,
    email: user?.email,
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navMain2} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser users={userInfo} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
