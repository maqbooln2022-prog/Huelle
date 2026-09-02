import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Contact Us — Hülle",
  description: "Questions about fit, shipping, returns, or warranty — reach the Hülle team.",
};

export default function ContactPage() {
  return (
    <PolicyPage
      title="Contact Us"
      intro="Questions about fit, compatibility, an order, or a return — we answer everything ourselves, usually within one business day."
      sections={[
        {
          heading: "Email",
          body: [
            "Write to support@huelle.in with your order number if you have one. That is the fastest route for order changes, returns, and warranty claims.",
          ],
        },
        {
          heading: "Before you buy",
          body: [
            "Not sure a case fits your iPhone model, or whether it works with your MagSafe accessories? Ask — we would rather answer twice than have you order the wrong one.",
          ],
        },
      ]}
    />
  );
}
