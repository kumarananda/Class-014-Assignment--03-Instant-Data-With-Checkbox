


/* InstantCheck */

// get elements
// const skills = document.querySelectorAll('.skill');
// const get_skill = document.querySelector('.get_skill')

// skills.forEach(skill => {
    
//     skill.addEventListener('change', function () {
//        let all_data = document.querySelectorAll('.skill:checked')
       
//        let skill_arry = [];
//        all_data.forEach(data => {
//         skill_arry.push(data.value)
//        });
       
//        let skill_list = '';
//        skill_arry.map(data => {
//             skill_list += `<div class="list-group-item">${data}</div>`;
//        });
//        get_skill.innerHTML = skill_list;
//     })

// })


const skills = document.querySelectorAll('.skill');
const get_skill = document.querySelector('.get_skill')

skills.forEach(skill => {
    
    skill.addEventListener('change', function () {
        let all_data = document.querySelectorAll('.skill:checked');
        
        let skill_arry = [];
        all_data.forEach(data => {
            skill_arry.push(data.value)
        });
        let skill_list = '';
        skill_arry.map(data => { 
            skill_list += `<div class="list-group-item">${data}</div>`;
        });
        get_skill.innerHTML = skill_list;
    });

    
});

