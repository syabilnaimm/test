function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");
  const unit = document.getElementById("unit").value;
  const targetWeightInput = document.getElementById("targetweight");
  const resultDiv = document.getElementById("result");
  const goal = document.getElementById("goal").value;

  let weight = weightInput.value;
  let height = heightInput.value;
  let age = ageInput.value;
  let targetWeight = targetWeightInput.value;
  let name = nameInput.value;

  if (
    weight === "" ||
    height === "" ||
    age === "" ||
    targetWeight === "" ||
    name === ""
  ) {
    resultDiv.innerHTML =
      "<span style='color: red;'>Please fill the empty field.</span>";
    progressBarFill.style.backgroundColor = "#ccc";
    progressBarFill.style.width = "0%";
    return;
  }
  if (weight > 500 || height > 251 || targetWeight > 500) {
    resultDiv.innerHTML = "Put a Valid Value.";
    return;
  }

  if (unit === "imperial") {
    weight = weight * 0.45359237; // convert to kg
    height = height * 2.54000508; // convert to cm
    targetWeight = targetWeight * 0.45359237; // convert to kg
  }

  const bmi = weight / ((height / 100) * (height / 100));
  const difference = targetWeight - weight;
  // Calculate progress bar width
  let progress = bmi / 60;
  if (progress > 1) {
    progress = 1;
  }

  const progressBarFill = document.getElementById("progress-bar-fill");
  const recommendationDiv = document.getElementById("recommendation");
  progressBarFill.style.width = `${progress * 100}%`;

  let category = "";
  let color = "";
  let recommendation = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "blue";
    recommendation = `
    <h3 style=color:blue;>You are underweight. It's important to focus on gaining weight in a healthy way. Since your goal is ${goal}:</h3> `;
    if (goal === "weight loss") {
      recommendation += ` <ol>
      <li>Calorie Reduction: Create a calorie deficit by consuming fewer calories than your body burns. Focus on portion control, choosing nutritious foods, and reducing intake of high-calorie, unhealthy foods.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, combining both cardio exercises and strength training, to support weight loss and improve overall fitness.</li><br>
      <li>Behavioral Changes: Adopt healthy habits and make sustainable lifestyle changes, such as incorporating stress management techniques and getting enough sleep.</li>
    </ol>
    
    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
  `;
    } else if (goal === "mantain weight") {
      recommendation += ` <ol>
      <li>Balanced Diet: Focus on consuming a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, such as cardio exercises, strength training, or recreational activities, to maintain overall fitness and well-being.</li><br>
      <li>Hydration: Drink an adequate amount of water daily to stay hydrated and support bodily functions.</li>
    </ol>

    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
    `;
    } else if (goal === "weight gain") {
      recommendation += ` <ol>
      <li>Increase Caloric Intake: Focus on consuming more calories than your body burns in a day. Gradually increase portion sizes and include calorie-dense foods in your meals and snacks.</li><br>
      <li>Regular Eating Schedule: Establish a regular eating schedule with consistent meal and snack times. This helps maintain a steady calorie intake and prevents skipping meals or going long periods without eating.</li><br>
      <li>Resistance Training: Engage in regular strength training exercises to build muscle mass. Incorporate exercises such as weightlifting, bodyweight exercises, or resistance band workouts into your routine.</li>
    </ol>  
    <p>*Remember to consult a healthcare professional or a registered dietitian for personalized guidance and to address any specific concerns or underlying health issues.
    `;
    }
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
    color = "green";
    recommendation = `
    <h3 style="color: green;">Your weight is within the normal range.You are in a ideal BMI so it better to mantain your weight. Since your goal is ${goal}:</h3> `;

    if (goal === "weight loss") {
      recommendation += ` <ol>
      <li>Calorie Reduction: Create a calorie deficit by consuming fewer calories than your body burns. Focus on portion control, choosing nutritious foods, and reducing intake of high-calorie, unhealthy foods.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, combining both cardio exercises and strength training, to support weight loss and improve overall fitness.</li><br>
      <li>Behavioral Changes: Adopt healthy habits and make sustainable lifestyle changes, such as incorporating stress management techniques and getting enough sleep.</li>
    </ol>
    
    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
  `;
    } else if (goal === "mantain weight") {
      recommendation += ` <ol>
      <li>Balanced Diet: Focus on consuming a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, such as cardio exercises, strength training, or recreational activities, to maintain overall fitness and well-being.</li><br>
      <li>Hydration: Drink an adequate amount of water daily to stay hydrated and support bodily functions.</li>
    </ol>

    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
    `;
    } else if (goal === "weight gain") {
      recommendation += ` <ol>
      <li>Increase Caloric Intake: Focus on consuming more calories than your body burns in a day. Gradually increase portion sizes and include calorie-dense foods in your meals and snacks.</li><br>
      <li>Regular Eating Schedule: Establish a regular eating schedule with consistent meal and snack times. This helps maintain a steady calorie intake and prevents skipping meals or going long periods without eating.</li><br>
      <li>Resistance Training: Engage in regular strength training exercises to build muscle mass. Incorporate exercises such as weightlifting, bodyweight exercises, or resistance band workouts into your routine.</li>
    </ol>  
    <p>*Remember to consult a healthcare professional or a registered dietitian for personalized guidance and to address any specific concerns or underlying health issues.`;
    }
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    color = "purple";
    recommendation = `
    <h3 style="color: purple;">You are overweight.You can lose some weight to reach healthier weight. Since your goal is ${goal}:</h3> `;

    if (goal === "weight loss") {
      recommendation += ` <ol>
      <li>Calorie Reduction: Create a calorie deficit by consuming fewer calories than your body burns. Focus on portion control, choosing nutritious foods, and reducing intake of high-calorie, unhealthy foods.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, combining both cardio exercises and strength training, to support weight loss and improve overall fitness.</li><br>
      <li>Behavioral Changes: Adopt healthy habits and make sustainable lifestyle changes, such as incorporating stress management techniques and getting enough sleep.</li>
    </ol>
    
    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
  `;
    } else if (goal === "mantain weight") {
      recommendation += ` <ol>
      <li>Balanced Diet: Focus on consuming a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, such as cardio exercises, strength training, or recreational activities, to maintain overall fitness and well-being.</li><br>
      <li>Hydration: Drink an adequate amount of water daily to stay hydrated and support bodily functions.</li>
    </ol>

    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
    `;
    } else if (goal === "weight gain") {
      recommendation += ` <ol>
      <li>Increase Caloric Intake: Focus on consuming more calories than your body burns in a day. Gradually increase portion sizes and include calorie-dense foods in your meals and snacks.</li><br>
      <li>Regular Eating Schedule: Establish a regular eating schedule with consistent meal and snack times. This helps maintain a steady calorie intake and prevents skipping meals or going long periods without eating.</li><br>
      <li>Resistance Training: Engage in regular strength training exercises to build muscle mass. Incorporate exercises such as weightlifting, bodyweight exercises, or resistance band workouts into your routine.</li>
    </ol>  
    <p>*Remember to consult a healthcare professional or a registered dietitian for personalized guidance and to address any specific concerns or underlying health issues.`;
    }
  } else if (bmi >= 30 && bmi < 34.9) {
    category = "Obese";
    color = "orange";
    recommendation = `
    <h3 style="color: orange;">You are obese. It's important to focus on weight management for your health. Since your goal is ${goal}:</h3> `;

    if (goal === "weight loss") {
      recommendation += ` <ol>
      <li>Calorie Reduction: Create a calorie deficit by consuming fewer calories than your body burns. Focus on portion control, choosing nutritious foods, and reducing intake of high-calorie, unhealthy foods.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, combining both cardio exercises and strength training, to support weight loss and improve overall fitness.</li><br>
      <li>Behavioral Changes: Adopt healthy habits and make sustainable lifestyle changes, such as incorporating stress management techniques and getting enough sleep.</li>
    </ol>
    
    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
  `;
    } else if (goal === "mantain weight") {
      recommendation += ` <ol>
      <li>Balanced Diet: Focus on consuming a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, such as cardio exercises, strength training, or recreational activities, to maintain overall fitness and well-being.</li><br>
      <li>Hydration: Drink an adequate amount of water daily to stay hydrated and support bodily functions.</li>
    </ol>

    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
    `;
    } else if (goal === "weight gain") {
      recommendation += ` <ol>
      <li>Increase Caloric Intake: Focus on consuming more calories than your body burns in a day. Gradually increase portion sizes and include calorie-dense foods in your meals and snacks.</li><br>
      <li>Regular Eating Schedule: Establish a regular eating schedule with consistent meal and snack times. This helps maintain a steady calorie intake and prevents skipping meals or going long periods without eating.</li><br>
      <li>Resistance Training: Engage in regular strength training exercises to build muscle mass. Incorporate exercises such as weightlifting, bodyweight exercises, or resistance band workouts into your routine.</li>
    </ol>  
    <p>*Remember to consult a healthcare professional or a registered dietitian for personalized guidance and to address any specific concerns or underlying health issues.`;
    }
  } else {
    category = "Extremely Obese";
    color = "red";
    recommendation = `
    <h3 style="color: red;">You are extremely obese. It's crucial to prioritize your health and seek professional guidance. Since your goal is ${goal}:</h3> `;

    if (goal === "weight loss") {
      recommendation += ` <ol>
      <li>Calorie Reduction: Create a calorie deficit by consuming fewer calories than your body burns. Focus on portion control, choosing nutritious foods, and reducing intake of high-calorie, unhealthy foods.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, combining both cardio exercises and strength training, to support weight loss and improve overall fitness.</li><br>
      <li>Behavioral Changes: Adopt healthy habits and make sustainable lifestyle changes, such as incorporating stress management techniques and getting enough sleep.</li>
    </ol>
    
    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
  `;
    } else if (goal === "mantain weight") {
      recommendation += ` <ol>
      <li>Balanced Diet: Focus on consuming a variety of nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.</li><br>
      <li>Regular Exercise: Engage in regular physical activity, such as cardio exercises, strength training, or recreational activities, to maintain overall fitness and well-being.</li><br>
      <li>Hydration: Drink an adequate amount of water daily to stay hydrated and support bodily functions.</li>
    </ol>

    <p>*Consult a healthcare professional or a registered dietitian for personalized guidance and support.</p>
    `;
    } else if (goal === "weight gain") {
      recommendation += ` <ol>
      <li>Increase Caloric Intake: Focus on consuming more calories than your body burns in a day. Gradually increase portion sizes and include calorie-dense foods in your meals and snacks.</li><br>
      <li>Regular Eating Schedule: Establish a regular eating schedule with consistent meal and snack times. This helps maintain a steady calorie intake and prevents skipping meals or going long periods without eating.</li><br>
      <li>Resistance Training: Engage in regular strength training exercises to build muscle mass. Incorporate exercises such as weightlifting, bodyweight exercises, or resistance band workouts into your routine.</li>
    </ol>  
    <p>*Remember to consult a healthcare professional or a registered dietitian for personalized guidance and to address any specific concerns or underlying health issues.`;
    }
  }

  // Adjust the wording if the difference is negative
  let differenceText = "";
  if (difference >= 0) {
    differenceText = `<span style="color: ${color};">${difference.toFixed(
      2
    )}</span> kg`;
  } else {
    differenceText = `<span style="color: ${color};">${Math.abs(
      difference
    ).toFixed(2)}</span> kg`;
  }

  resultDiv.innerHTML = `Hi ${name}, Your BMI is ${bmi.toFixed(
    2
  )}, you are in <span style="color: ${color};">${category}</span> category, and you need to ${
    difference >= 0 ? "gain" : "lose"
  } ${differenceText} to achieve your target weight.`;

  progressBarFill.style.backgroundColor = color;
  recommendationDiv.innerHTML = recommendation;
}
