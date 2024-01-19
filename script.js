const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `invalid height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `invalid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(`U are Under Weight = ${bmi}`));
      result.innerHTML = '';
      result.appendChild(p);
      // const p = document.createElement('p');
      // const textnode = document.createTextNode(`U are Under Weight = ${bmi}`);
      // p.appendChild(textnode);
      // result.innerHTML = '';
      // result.appendChild(p);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Normal = ${bmi}`;
    } else {
      result.innerHTML = `Over = ${bmi}`;
    }
  }
});
