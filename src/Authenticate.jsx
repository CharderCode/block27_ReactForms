
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}
 catch (error) {
    setError(error.message);
}
    }
<input value={username} onChange={(e) => setUsername(e.target.value)} /> {

    return <h2>Authenticate</h2>
    const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
    );
    const result = await response.json();
    console.log(result);
    <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
    </div>

}

<form>
    <label>
        Username: <input />
    </label>
    <label>
        Password: <input />
    </label>
    <button>Submit</button>
</form>
