
export const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/launchers")
        if (!res.ok) {
            throw new Error("Failed to load data");
        }
        const { rockets } = await res.json()
        return rockets
    } catch (error) {
        throw new Error("Erorr", error.message)
    }
}
