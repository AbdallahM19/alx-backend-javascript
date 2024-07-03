// Interfaces
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Unique identifier
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Unique identifier
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

// Example usage
const subject1Major: MajorCredits = { credits: 30, brand: 'MajorCredits' };
const subject2Major: MajorCredits = { credits: 25, brand: 'MajorCredits' };

const subject1Minor: MinorCredits = { credits: 15, brand: 'MinorCredits' };
const subject2Minor: MinorCredits = { credits: 10, brand: 'MinorCredits' };

const resultMajor = sumMajorCredits(subject1Major, subject2Major);
const resultMinor = sumMinorCredits(subject1Minor, subject2Minor);

console.log(resultMajor); // Output: { credits: 55, brand: 'MajorCredits' }
console.log(resultMinor); // Output: { credits: 25, brand: 'MinorCredits' }

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
