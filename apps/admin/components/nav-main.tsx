/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";

import { Button } from "@workspace/ui/components/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <Link
              href={`${item.url}`}
              key={`${item.title} - ${item.url}`}
              className=""
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`${
                    pathname === item.url
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:text-primary-foreground link-active"
                      : "noo-active"
                  } `}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
