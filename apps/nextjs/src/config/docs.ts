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
          href: "/docs/documentation/basics",
        },
        {
          title: "Migrating your TMS",
          href: "/docs/documentation/migrating-your-tms",
        },
        {
          title: "Customer Portals",
          href: "/docs/documentation/customer-portals",
        },
        {
          title: "Data Protection",
          href: "/docs/documentation/data-protection",
        },
        {
          title: "API & Webhooks",
          href: "/docs/documentation/api-and-webhooks",
        },
      ],
    },
    {
      title: "Accounts",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation/accounts",
          disabled: true,
        },
        {
          title: "Updating your account",
          href: "/docs/documentation/updating-your-account",
          disabled: true,
        },
      ],
    },
    {
      title: "Businesses",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation/businesses",
          disabled: true,
        },
        {
          title: "Creating a business",
          href: "/docs/documentation/creating-a-business",
          disabled: true,
        },
        {
          title: "Joining a business",
          href: "/docs/documentation/joining-a-business",
          disabled: true,
        },
        {
          title: "Modify a subscription",
          href: "/docs/documentation/modify-a-subscription",
          disabled: true,
        },
      ],
    },
    {
      title: "Business Users",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation/business-users",
          disabled: true,
        },
        {
          title: "Inviting a user",
          href: "/docs/documentation/inviting-a-user",
          disabled: true,
        },
        {
          title: "Setting user roles",
          href: "/docs/documentation/setting-user-roles",
          disabled: true,
        },
        {
          title: "Giving customer access",
          href: "/docs/documentation/giving-customer-access",
          disabled: true,
        },
      ],
    },
    {
      title: "Departments",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation/departments",
          disabled: true,
        },
        {
          title: "Creating a department",
          href: "/docs/documentation/creating-a-department",
          disabled: true,
        },
      ],
    },
    {
      title: "Motor Carriers",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation/motor-carriers",
          disabled: true,
        },
        {
          title: "Adding a carrier",
          href: "/docs/documentation/adding-a-carrier",
          disabled: true,
        },
      ],
    },
  ],
};
