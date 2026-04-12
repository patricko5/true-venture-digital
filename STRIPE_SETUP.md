# 💳 Stripe Setup Guide

To enable live payments for the **Starter Website Package**, follow these steps to configure your environment.

## 1. Get Your API Keys
1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to **Developers > API keys**.
3. Copy your **Secret key** (starts with `sk_...`).
4. Copy your **Publishable key** (starts with `pk_...`).

## 2. Create the Product & Price
1. Go to **Product Catalog** and click **+ Add Product**.
2. **Name**: `Starter Website Package`.
3. **Description**: `5-7 Page Professional Website + Local SEO Setup`.
4. **Price**: `1000.00`
5. **Currency**: `CAD` (or your preferred currency).
6. **Billing Period**: `One-time`.
7. Click **Save Product**.
8. After saving, look for the **API ID** under the "Pricing" section. It starts with `price_...`. Copy this ID.

## 3. Configure `.env.local`
Open the `.env.local` file in the root of your project and replace the placeholder values:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_your_real_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_real_publishable_key_here

# Product ID
STRIPE_PRICE_ID=price_your_real_price_id_here

# App URL (Change this to your real domain when deploying)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4. Test the Integration
1. Restart your development server (`npm run dev`).
2. Go to the [Checkout Page](http://localhost:3000/checkout).
3. Click "Proceed to Payment".
4. You should be redirected to a Stripe-hosted checkout page.
5. Use a Stripe test card (e.g., `4242 4242 4242 4242`) to complete a test purchase.
6. After success, you will be redirected back to the animated success page.

> [!NOTE]
> When you are ready to go live, use your **Live Mode** keys and create a live product in Stripe.
