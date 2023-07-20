const forms=document.getElementById('signup')
const fnames=document.getElementById('fname')
const lnames=document.getElementById('lname')
const bemails=document.getElementById('bemail')
const companys=document.getElementById('company')
const jobs=document.getElementById('job')
const sos=document.getElementById('so')
const countrys=document.getElementById('country')

forms.addEventListener('submit',a=>{
  a.preventDefault()
  validateForm()
})
function validateForm(){
  const fname=fnames.value.trim()
  const lname=lnames.value.trim()
  const bemail=bemails.value.trim()
  const job=jobs.value.trim()
  const so=sos.value.trim()
  const company=companys.value.trim()
  const country=countrys.value.trim()
  if(fname ===''){
    setError(fnames,'enter first name','fname-error')
  }
  if(lname ===''){
    setError(lnames,'enter last name','lname-error')
  }
  if(bemail ===''){
    setError(bemails,'enter bussines email','bemail-error')
  }
  if(company ===''){
    setError(companys,'enter company name','company-error')
  }
  if(job ===''){
    setError(jobs,'enter job','job-error')
  }
  if(so ===''){
    setError(sos,'enter ','so-error')
  }
  if(country ===''){
    setError(countrys,'enter country name','country-error')
  }
}
function setError(input,inputerror,errorid){
  const errorElement=document.getElementById(errorid)
  errorElement.innerHTML=inputerror

}































// $(document).ready(function() {
//     $("#sign-upfoam").validate({
//       rules: {
//         fname: {
//           required: true,
//           minlength: 4
//         }
//       },
//       messages: {
//         fname: {
//           required: "Please enter your first name.",
//           minlength: "Please enter ."
//         }
//       }
//     });
//   });
  