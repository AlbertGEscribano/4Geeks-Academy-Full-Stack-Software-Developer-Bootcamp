import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
	const [hoverPosition, setHoverPosition] = useState("null")

	const validateInput = () => {

	if(inputValue === ""){
        alert("Don't be lazy. Add task!");
        setAllOk(false)
        return;
    }

  	if(inputValue && inputValue[0] !== inputValue[0].toUpperCase()){
        alert("First letter have to be a capital one. Grammar is Important!")
        setAllOk(false)
        return;    
	}

	if(inputValue.length === 1 ){
        alert("Minimum 2 character lenght. Don't be indolent!")
        setAllOk(false)
        return;
    }
}

	const addTask = () => {

		if (inputValue !== "") {
			setTask([...task, inputValue]);
			setInputValue("");
		}
	};

	const handleKeyPress = (event) => {

		if(event.key === 'Enter'){
			addTask(), validateInput();
		}
	}

	const deleteTask = (index) => {
		const updatedTask = task.filter((_, i) => i !== index);
		setTask(updatedTask);
	};
	  
	return (
		<div className="text-center">
			<h1 className="mb-3">To Do List</h1>
				<input 
					className="mb-3"
					type="text" 
					onClick={addTask, validateInput} 
					onKeyUp={handleKeyPress} 
					value={inputValue} 
					onChange={(e) => setInputValue(e.target.value)} 
				/>

			{task.length === 0 ? (<p>No pending task, add task. Weekend is near!!!</p>) : (
			<ul style ={{listStyle:'none'}}>
				{task.map((task, index) => (
					<li 
					className = "task-item" 
					onMouseEnter={() => setHoverPosition(index)} 
					onMouseLeave={()=>setHoverPosition(null)} 
					key={index}>
						{task} 
						<button onClick={() => deleteTask(index)}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</li>
					))}
				<span><strong>{[task.length]}</strong> item left</span>
			</ul>
			)}
		</div>
	);
};

export default Home;

