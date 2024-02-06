document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let WADGrade = parseFloat(document.getElementById('WAD').value);
    let CNSGrade = parseFloat(document.getElementById('CNS').value);
    let DSBDAGrade = parseFloat(document.getElementById('DSBDA').value);
    let E2Grade = parseFloat(document.getElementById('E2').value);

    let averageGrade = (WADGrade + CNSGrade + DSBDAGrade + E2Grade) / 4;

    let gradesDisplay = `
        <h2>Grades for ${name}</h2>
        <p>WAD Grade: ${WADGrade}</p>
        <p>CNS Grade: ${CNSGrade}</p>
        <p>DSBDA Grade: ${DSBDAGrade}</p>
        <p>E2 Grade: ${E2Grade}</p>
        <h3>Average Grade: ${averageGrade.toFixed(2)}</h3>
    `;

    document.getElementById('grades').innerHTML = gradesDisplay;
});
