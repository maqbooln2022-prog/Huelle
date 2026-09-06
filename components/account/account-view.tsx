"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Package,
  ShieldCheck,
  MapPin,
  CreditCard,
  Mail,
  Plus,
  Trash2,
  QrCode,
  Banknote,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { key: "orders", label: "Your Orders", icon: Package },
  { key: "security", label: "Login & Security", icon: ShieldCheck },
  { key: "addresses", label: "Your Addresses", icon: MapPin },
  { key: "payments", label: "Payment Options", icon: CreditCard },
  { key: "contact", label: "Contact Us", icon: Mail },
] as const;

type TabKey = (typeof tabs)[number]["key"];

type Address = {
  id: string;
  name: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
};

export function AccountView() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as TabKey) || "orders";

  if (status === "loading") {
    return <div className="mx-auto max-w-5xl px-6 py-24" />;
  }

  if (!session) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-medium tracking-tight">
          Sign in to your account
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Manage your orders, addresses, and payment options once you&apos;re
          signed in.
        </p>
        <Button className="mt-8" onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:px-10 lg:py-16">
      <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        My Account
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {session.user?.name} &middot; {session.user?.email}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => router.push(`/account?tab=${key}`)}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                activeTab === key
                  ? "bg-foreground text-background"
                  : "text-foreground/80 hover:bg-card"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </nav>

        <div>
          {activeTab === "orders" && <OrdersPanel />}
          {activeTab === "security" && <SecurityPanel />}
          {activeTab === "addresses" && <AddressesPanel />}
          {activeTab === "payments" && <PaymentsPanel />}
          {activeTab === "contact" && <ContactPanel />}
        </div>
      </div>
    </div>
  );
}

function PanelHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function OrdersPanel() {
  return (
    <div>
      <PanelHeading
        title="Your Orders"
        description="Track, return, or review items you've bought."
      />
      <div className="flex flex-col items-center gap-4 rounded-lg bg-card px-6 py-16 text-center">
        <Package className="h-8 w-8 text-muted-foreground" strokeWidth={1.25} />
        <p className="text-sm text-muted-foreground">
          You haven&apos;t placed any orders yet.
        </p>
        <Link href="/cases">
          <Button size="sm">Start shopping</Button>
        </Link>
      </div>
    </div>
  );
}

function SecurityPanel() {
  const { data: session } = useSession();

  return (
    <div>
      <PanelHeading
        title="Login & Security"
        description="How you sign in to Hülle."
      />
      <div className="flex flex-col gap-4 rounded-lg bg-card p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-sm font-medium">Name</p>
            <p className="text-sm text-muted-foreground">
              {session?.user?.name}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Sign-in method</p>
            <p className="text-sm text-muted-foreground">
              Google account &mdash; managed by Google, not Hülle.
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="mt-6"
        onClick={() => signOut()}
      >
        Sign out
      </Button>
    </div>
  );
}

function AddressesPanel() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const addAddress = () => {
    if (!form.name || !form.line1 || !form.city || !form.pincode) return;
    setAddresses((prev) => [...prev, { id: crypto.randomUUID(), ...form }]);
    setForm({ name: "", line1: "", city: "", state: "", pincode: "", phone: "" });
    setShowForm(false);
  };

  return (
    <div>
      <PanelHeading
        title="Your Addresses"
        description="Saved delivery addresses for faster checkout. Addresses are kept only for this browser session."
      />

      {addresses.length > 0 && (
        <ul className="mb-6 flex flex-col gap-3">
          {addresses.map((addr) => (
            <li
              key={addr.id}
              className="flex items-start justify-between gap-4 rounded-lg bg-card p-4"
            >
              <div className="text-sm">
                <p className="font-medium">{addr.name}</p>
                <p className="mt-1 text-muted-foreground">
                  {addr.line1}, {addr.city}
                  {addr.state ? `, ${addr.state}` : ""} &ndash; {addr.pincode}
                </p>
                {addr.phone && (
                  <p className="mt-1 text-muted-foreground">{addr.phone}</p>
                )}
              </div>
              <button
                type="button"
                aria-label={`Remove address for ${addr.name}`}
                onClick={() =>
                  setAddresses((prev) => prev.filter((a) => a.id !== addr.id))
                }
                className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                <Trash2 className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {showForm ? (
        <div className="flex flex-col gap-3 rounded-lg bg-card p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
            />
            <input
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
            />
          </div>
          <input
            placeholder="Address line"
            value={form.line1}
            onChange={(e) => setForm({ ...form, line1: e.target.value })}
            className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <input
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
            />
            <input
              placeholder="State"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
            />
            <input
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) => setForm({ ...form, pincode: e.target.value })}
              className="h-11 rounded-lg border border-border bg-surface px-4 text-sm"
            />
          </div>
          <div className="mt-2 flex gap-3">
            <Button size="sm" onClick={addAddress}>
              Save address
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-70"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add a new address
        </button>
      )}
    </div>
  );
}

const paymentMethods = [
  {
    key: "upi",
    label: "UPI",
    icon: QrCode,
    description: "Pay instantly via Google Pay, PhonePe, Paytm, or any UPI app.",
  },
  {
    key: "card",
    label: "Debit & Credit Card",
    icon: CreditCard,
    description:
      "Visa, Mastercard, RuPay, and Amex accepted — entered securely through our payment gateway at checkout.",
  },
  {
    key: "cod",
    label: "Cash on Delivery",
    icon: Banknote,
    description: "Pay with cash when your order arrives at your doorstep.",
  },
] as const;

type PaymentKey = (typeof paymentMethods)[number]["key"];

function PaymentsPanel() {
  const [preferred, setPreferred] = useState<PaymentKey>("upi");
  const [upiId, setUpiId] = useState("");
  const [savedUpiId, setSavedUpiId] = useState<string | null>(null);

  return (
    <div>
      <PanelHeading
        title="Payment Options"
        description="Choose how you'd like to pay. These will be available at checkout once it's live."
      />

      <div className="flex flex-col gap-4">
        {paymentMethods.map(({ key, label, icon: Icon, description }) => {
          const isPreferred = preferred === key;
          return (
            <div
              key={key}
              className={`rounded-lg border p-5 transition-colors ${
                isPreferred
                  ? "border-foreground bg-card"
                  : "border-border bg-surface"
              }`}
            >
              <button
                type="button"
                onClick={() => setPreferred(key)}
                className="flex w-full items-start gap-4 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{label}</p>
                    {isPreferred && (
                      <span className="flex items-center gap-1 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-background">
                        <Check className="h-3 w-3" strokeWidth={2} />
                        Preferred
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </button>

              {key === "upi" && (
                <div className="mt-4 border-t border-border pt-4">
                  {savedUpiId ? (
                    <div className="flex items-center justify-between">
                      <p className="text-sm">
                        Saved UPI ID:{" "}
                        <span className="font-medium">{savedUpiId}</span>
                      </p>
                      <button
                        type="button"
                        onClick={() => setSavedUpiId(null)}
                        className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      <input
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className="h-10 min-w-[200px] flex-1 rounded-lg border border-border bg-surface px-4 text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => {
                          if (!upiId.trim()) return;
                          setSavedUpiId(upiId.trim());
                          setUpiId("");
                        }}
                      >
                        Save UPI ID
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div>
      <PanelHeading
        title="Contact Us"
        description="Questions about an order, fit, or returns."
      />
      <div className="rounded-lg bg-card p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Write to{" "}
          <a
            href="mailto:support@huelle.in"
            className="font-medium text-foreground underline underline-offset-4"
          >
            support@huelle.in
          </a>{" "}
          with your order number if you have one &mdash; that&apos;s the
          fastest way to sort out order changes, returns, or a warranty
          claim.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:opacity-70"
        >
          View full contact details
        </Link>
      </div>
    </div>
  );
}
