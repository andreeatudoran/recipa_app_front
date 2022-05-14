import axios from "axios";
import React, {useState, useEffect} from "react";



function Recipe({onRecipe}) {
    const [recipe, setRecipe] = useState("");
    const [query, setQuery] = useState("");

    const handleGetRecipe = async (e) => {
    const _query = document.getElementById('query').value;
        setQuery(_query)
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/utils/?recipe=${_query}`);
        console.log("Result", result.data);
        setRecipe(result.data);
        onRecipe(result.data)
}

    return (
        <div id="Recipe">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4 font-sans">Search recipe:</h2>
            <form>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-cyan-600 text-xs font-bold mb-2 font-sans">
                        Search recipes
                    </label>
                    <input className="appearance-none block w-full bg-cyan-100 text-cyan-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-sans" id="query" type="text" placeholder="Recipe" />
                </div>
            </form>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded m-2 capitalize font-sans" onClick={handleGetRecipe}>Find Recipe</button>
            <span className="block uppercase tracking-wide text-cyan-600 text-xs font-bold mt-10 font-sans">
                {recipe} 
            </span>
        </div>
    )
}

export default Recipe