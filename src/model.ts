export const getFlashcards = () => {
	return [
		{
			id: 1,
			category: "git",
			front: "change GitHub email",
			back: "git config --global user.email \"hans@nnn.com\""
		},
		{
			id: 2,
			category: "javascript",
			front: "count how many items in an array have a property of certain value",
			back: "const numberSelected = this.categories.filter(item => item.selected).length"
		},
		{
			id: 3,
			category: "html",
			front: "create a hyperlink",
			back: "<a href=\"https://www.example.com\">Click here</a>"
		},
		{
			id: 4,
			category: "css",
			front: "center an element horizontally",
			back: "margin: 0 auto;"
		},
		{
			id: 5,
			category: "python",
			front: "open and read a file",
			back: "with open('file.txt', 'r') as file:\n    content = file.read()"
		},
		{
			id: 6,
			category: "javascript",
			front: "remove an item from an array",
			back: "const index = array.indexOf(item);\nif (index > -1) array.splice(index, 1);"
		},
		{
			id: 7,
			category: "sql",
			front: "retrieve records from a database",
			back: "SELECT * FROM tableName WHERE condition;"
		},
		{
			id: 8,
			category: "javascript",
			front: "check if a variable is an array",
			back: "Array.isArray(variable)"
		},
		{
			id: 9,
			category: "sql",
			front: "update data in a database",
			back: "UPDATE tableName SET column1 = value1 WHERE condition;"
		},
		{
			id: 10,
			category: "javascript",
			front: "use map() to transform an array",
			back: "const newArray = array.map(item => item * 2);"
		}
	];
}