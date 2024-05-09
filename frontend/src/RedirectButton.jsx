import { useNavigate } from "react-router-dom";

function RedirectButton() {
    const navigate = useNavigate();

    const redirectToCreatePage = () => {
        navigate("/create-product"); // Assuming "/create-product" is the path you want to navigate to
    };

    return <button onClick={redirectToCreatePage}>Go to Create Page</button>;
}

export default RedirectButton;
