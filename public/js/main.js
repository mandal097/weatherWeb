const submitBtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityName");

const city_name= document.getElementById("city_name")
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahidden = document.querySelector(".middle_layer");

const getinfo = async(event)=>{
    event.preventDefault()
    let cityVal= cityname.value
    if(cityVal=== ""){
        city_name.innerText= `please write the name of the city `
        datahidden.classList.add('data_hide')
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=99dc59af83ae2460669cea6bae742201`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(arrdata)
            temp_real_val.innerText = arrdata[0].main.temp
            // temp_status.innerText = arrdata[0].weather[0].main
            city_name.innerText =`${arrdata[0].name}, ${arrdata[0].sys.country}`

            const tempmood = arrdata[0].weather[0].main
            console.log(tempmood)
            // condition to check sunny or cloud

            if(tempmood=="clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if(tempmood=="clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }else if(tempmood=="rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahidden.classList.remove('data_hide')
        }catch{
            city_name.innerText = `Plz enter the city name properly`
            datahidden.classList.add('data_hide')
        }
    }
}       
    
    

submitBtn.addEventListener('click',getinfo)

