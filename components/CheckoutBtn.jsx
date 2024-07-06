import { useShoppingCart } from "use-shopping-cart";

export const CheckoutBtn = () => {
  const { redirectToCheckout } = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className="btn btn-primary w-full"
    >
      Proceed to checkout
    </button>
  );
};
