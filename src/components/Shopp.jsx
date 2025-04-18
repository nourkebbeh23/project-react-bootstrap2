import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "i'm prodect",
    price: 50,
    image:
      "https://static.wixstatic.com/media/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg",
  },
  {
    id: 2,
    name: "i'm prodect",
    price: 75,
    image:
      "https://static.wixstatic.com/media/c837a6_0c12b986083f43068e9fd609017c2aeb~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0c12b986083f43068e9fd609017c2aeb~mv2.jpg",
  },
  {
    id: 3,
    name: "i'm prodect",
    price: 50,
    image:
      "https://static.wixstatic.com/media/c837a6_d7cac48ffbd549029aae49a90c6a6874~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d7cac48ffbd549029aae49a90c6a6874~mv2.jpg",
  },
  {
    id: 4,
    name: "i'm prodect",
    price: 50,
    image:
      "https://static.wixstatic.com/media/c837a6_68910b0c59d946909095cf1dd6a586ba~mv2.jpg/v1/fill/w_331,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_68910b0c59d946909095cf1dd6a586ba~mv2.jpg",
  },
  {
    id: 5,
    name: "i'm prodect",
    price: 75,
    image:
      "https://static.wixstatic.com/media/c837a6_a8abd89224184c0b9a02fe749151a070~mv2.jpg/v1/fill/w_331,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a8abd89224184c0b9a02fe749151a070~mv2.jpg",
  },
  {
    id: 6,
    name: "i'm prodect",
    price: 50,
    image:
      "https://static.wixstatic.com/media/c837a6_23e6b4ff93b946f0911dbb2b0b40979c~mv2.jpg/v1/fill/w_331,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_23e6b4ff93b946f0911dbb2b0b40979c~mv2.jpg",
  },
];

function Shopp() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const adds = cart.find((item) => item.id === product.id);
    if (adds) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-4">
      <h1 className="text-center color-1 mb-5 ">
        Shop <strong>COTTON</strong>
      </h1>

      <button
        className="add"
        data-bs-toggle="offcanvas"
        data-bs-target="#cartDrawer"
      >
        Cart ({cart.length})
      </button>

      <div className="container">
        <div className="row mb-5 mt-5">
          {products.map((product) => (
            <div className="col-md-4 mb-4 text-center" key={product.id}>
              <img className="text-center img-fluid" src={product.image} />

              <h5>{product.name}</h5>
              <p>{product.price} $</p>
              <button className="addddd" onClick={() => addToCart(product)}>
                add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartDrawer"
        aria-labelledby="cartDrawerLabel"
      >
        <div className="offcanvas-header">
          <h5 id="cartDrawerLabel">Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-3"
                >
                  <div>
                    <h6>{item.name}</h6>
                    <p>
                      {item.price} $ × {item.quantity}
                    </p>
                    <div>
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() => changeQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() => changeQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="adddd "
                        onClick={() => removeFromCart(item.id)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
         
              <h5 >Total: {total} $</h5>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shopp;
