import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Shipping & Returns — Hülle",
  description:
    "How Hülle orders ship, and how the 30-day return window works.",
};

export default function ReturnsPage() {
  return (
    <PolicyPage
      title="Shipping & Returns"
      intro="Every order ships within 1–2 business days, and every case comes with 30 days to change your mind."
      sections={[
        {
          heading: "Shipping",
          body: [
            "Orders are dispatched within 1–2 business days of payment. Shipping is free on orders of ₹999 and above; below that, the delivery charge is shown at checkout before you pay.",
            "You will receive a confirmation email with tracking details as soon as your order is handed to the courier.",
          ],
        },
        {
          heading: "30-day returns",
          body: [
            "You have 30 days from delivery to return an unused case for a full refund — no questions, no restocking fee.",
            "To start a return, write to us via the contact page with your order number. We will send you the return instructions, and issue the refund to your original payment method once the case reaches us and passes a quick inspection.",
          ],
        },
        {
          heading: "Exchanges",
          body: [
            "Want a different shade or a different device size? Start a return the same way and mention the swap — we will ship the replacement as soon as the original is on its way back.",
          ],
        },
      ]}
    />
  );
}
