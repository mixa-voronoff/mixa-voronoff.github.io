// toggle в problem
let problems = document.querySelectorAll('.problem__item');
for (let index = 0; index < problems.length; index++) {
    const problem = problems[index];    
    problem.addEventListener('click', function(e) {
        if (problem.classList.contains('inactive')) {
            problem.classList.remove('inactive');        
            let previousAll = problem.parentElement.querySelectorAll('.active');
            for (let index = 0; index < previousAll.length; index++) {
                const previous = previousAll[index];
                previous.classList.remove('active');
                previous.classList.add('inactive');
            }        
            problem.classList.add('active');        
            e.preventDefault();
        }
    });
};