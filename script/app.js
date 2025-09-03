const navigation = document.querySelector('.nav-links');
const navBurguricon = document.querySelector('.nav-burguricon');

navBurguricon.addEventListener('click', function(){
    navigation.classList.toggle('hedden-992')
    console.log('click')
})