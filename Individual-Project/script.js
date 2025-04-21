// select other class Benz
function showBrand(brand){
    const brands = ['mercedes','amg','maybach']
    brands.forEach(b => {
        document.getElementById(b).classList.add('hidden');
    });
    document.getElementById(brand).classList.remove('hidden')
}
window.onload = () => {
    showBrand("mercedes");
};