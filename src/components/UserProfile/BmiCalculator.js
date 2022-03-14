import {React,useState} from 'react'
import { Paper,Button,NumberInput,Space,Group,useMantineTheme,Box, Card } from '@mantine/core';
import { useForm } from '@mantine/form';

function BmiCalculator() {
    const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];
    


    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");  
    const [bmiResult, setBmiResult] = useState(null);
      const [status, setStatus] = useState("");
  
    function calculateBMI() {
      let bmi = (weight / (height / 100) ** 2).toFixed(2);
      setBmiResult(bmi);
  console.log(bmi);

      let bmiStatus = getStatus(bmi);
  
      setStatus(bmiStatus);
      
      console.log(bmiStatus);
  
      
    }
  
    function getStatus(bmi) {
      if (bmi < 18.5) return "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
      else if (bmi >= 25 && bmi < 29.9) return "Overweight";
      else return "Obese";
    }
    
   
  return (
    <div>
    <Paper shadow="xs" p="md">
    <Box sx={{ maxWidth: 300 }} mx="auto">
      
      <NumberInput
      defaultValue={18}
      placeholder="Your Height"
      label="Your Height"
      onChange={(e) => setHeight(e.target.value)}


      required
    /> 
    <NumberInput
    defaultValue={18}
    placeholder="Your Weight"
    label="Your Weight"
    onChange={(e) => setWeight(e.target.value)}


    required
  />

<Group position="right" mt="md">
          <Button type="submit" onClick={calculateBMI}>Submit</Button>
        </Group>
        <Card>
<h1>Your BMI is {bmiResult}</h1>

        </Card>
    </Box>
</Paper>
    </div>
  )
}

export default BmiCalculator