import SubscriptionForm from '@/components/SubscriptionForm';

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Choose Your Plan</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Premium Plan</h2>
        <SubscriptionForm priceId={`${process.env.STRIPE_PRICE_ID}`} />
      </div>
    </div>
  );
}
