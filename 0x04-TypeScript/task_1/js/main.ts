interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[attribute: string]: any;
}

const teacherA: Teacher = {
	firstName: 'Ali',
	lastName: 'Moussa',
	fullTimeEmployee: true,
	yearsOfExperience: 5,
	location: 'tanger',
};

const teacherB: Teacher = {
	firstName: 'Ali',
	lastName: 'Moussa',
	fullTimeEmployee: true,
	// removing optional attr
	location: 'tanger',
	// adding custom attr
	isGoodAtJob: true,
};

console.log(teacherA);
console.log(teacherB);
