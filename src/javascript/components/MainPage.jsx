import React, {useState} from 'react';
import Header from './Header';
import MessagesList from './MessagesList';
import MessagesSubmit from './MessagesSubmit';
import Recipe from './Recipe';

function MainPage(props) {
    const [recipe, setRecipe] = useState("");
    const handleRecipe = (data) => {
        setRecipe(data);
        console.log("Recipe",recipe);
    }
    return ( 
    <div id="MainPage">
        <Header title={'Recipe app'} />
        <div className="flex max-w-7xl m-auto px-14 py-24">
            <div className="w-1/2 pr-20">
                <Recipe onRecipe={handleRecipe}/>
            </div>
            <div className="w-1/2 pl-20">
                <MessagesSubmit recipe={recipe}/>
            </div>  
        </div>
        <div className="flex max-w-7xl m-auto px-14 justify-center">
                <MessagesList/>
            </div>
    </div>
    );
}

export default MainPage;