const fs = require('fs');

const countStudents = path => {
	try {
		const data = fs.readFileSync(path, 'utf8');
		const dataList = data.split('\n').slice(1);
		const studentsCount = dataList.length;
		console.log(studentsCount);

		const csStudents = dataList
			.filter(row => row.split(',').pop() === 'CS')
			.map(row => row.split(',')[0]);

		console.log(
			`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`
		);
	} catch (error) {
		console.log('Cannot load the database');
	}
};

module.exports = countStudents;
