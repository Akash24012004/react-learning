import { useSelector,useDispatch} from "react-redux";

const Cart=()=>{

const items=useSelector((state)=>state.array);


  // EMPTY CART
  if (items.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center w-80">
          <h2 className="text-xl font-semibold mb-3">
            Your cart is empty
          </h2>
          <a href="/" className="text-orange-500 font-medium">
            Check your nearest restaurant
          </a>
        </div>
      </div>
    );
  }

  // CART WITH ITEMS
  return (
    <div className="p-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4">
        
        {/* Restaurant Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={restaurant.logo}
            alt="logo"
            className="w-10 h-10 rounded"
          />
          <h2 className="text-lg font-semibold">
            {restaurant.name}
          </h2>
        </div>

        {/* Dish List */}
        <div className="space-y-3">
          {items.map(item => (
            <DishRow key={item.id} dish={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
