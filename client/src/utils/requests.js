export function fetchData(drugname, setVariable, setError, setLoading) {
    fetch(`http://localhost:9000/testAPI/${drugname}`).then((res) => res.json()).then((data) => {

        setVariable(data);
        console.log(data);
        setLoading(false);
    }).catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
    });
};