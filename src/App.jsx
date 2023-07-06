import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
    // здесь мы используем селекторы inline. То есть описываем функцию которая возвращает требуещееся нам значение прямо в компоненте. по официальным рекомендациям можно так прописывать селектора сразу в слайсе,например selectCartItems = (state) => state.cart.cartItems и в компоненте просто импортировать selectCartItems. store и state разные названия одного и того же, просто Джону Смилге больше нравится store
    const { cartItems, isLoading } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <main>
            {isOpen && <Modal />}

            <Navbar />
            <CartContainer />
        </main>
    );
}
export default App;
