import { Suspense } from "react";
import type { Metadata } from "next";
import { AccountView } from "@/components/account/account-view";

export const metadata: Metadata = {
  title: "My Account — Hülle",
  description: "Manage your orders, addresses, and account settings.",
};

export default function AccountPage() {
  return (
    <Suspense>
      <AccountView />
    </Suspense>
  );
}
