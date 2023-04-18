import { type DocsConfig } from "~/types";

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Basics",
      items: [
        {
          title: "Introduction",
          href: "/docs/basics",
        },
        {
          title: "Migrating your TMS",
          href: "/docs/migrating-your-tms",
        },
        {
          title: "Customer Portals",
          href: "/docs/customer-portals",
        },
        {
          title: "Data Protection",
          href: "/docs/data-protection",
        },
        {
          title: "API & Webhooks",
          href: "/docs/api-and-webhooks",
        },
      ],
    },
    {
      title: "Accounts",
      items: [
        {
          title: "Introduction",
          href: "/docs/accounts",
          disabled: true,
        },
        {
          title: "Updating your account",
          href: "/docs/updating-your-account",
          disabled: true,
        },
      ],
    },
    {
      title: "Businesses",
      items: [
        {
          title: "Introduction",
          href: "/docs/businesses",
          disabled: true,
        },
        {
          title: "Creating a business",
          href: "/docs/creating-a-business",
          disabled: true,
        },
        {
          title: "Joining a business",
          href: "/docs/joining-a-business",
          disabled: true,
        },
        {
          title: "Modify a subscription",
          href: "/docs/modify-a-subscription",
          disabled: true,
        },
      ],
    },
    {
      title: "Business Users",
      items: [
        {
          title: "Introduction",
          href: "/docs/business-users",
          disabled: true,
        },
        {
          title: "Inviting a user",
          href: "/docs/inviting-a-user",
          disabled: true,
        },
        {
          title: "Setting user roles",
          href: "/docs/setting-user-roles",
          disabled: true,
        },
        {
          title: "Giving customer access",
          href: "/docs/giving-customer-access",
          disabled: true,
        },
      ],
    },
    {
      title: "Departments",
      items: [
        {
          title: "Introduction",
          href: "/docs/departments",
          disabled: true,
        },
        {
          title: "Creating a department",
          href: "/docs/creating-a-department",
          disabled: true,
        },
      ],
    },
    {
      title: "Motor Carriers",
      items: [
        {
          title: "Introduction",
          href: "/docs/motor-carriers",
          disabled: true,
        },
        {
          title: "Adding a carrier",
          href: "/docs/adding-a-carrier",
          disabled: true,
        },
      ],
    },
  ],
};
