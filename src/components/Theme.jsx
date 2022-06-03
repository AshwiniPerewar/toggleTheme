import '../App.css';
import {useContext} from 'react'
import {Button,Flex,Slider,SliderFilledTrack,SliderTrack,SliderThumb } from '@chakra-ui/react'
import { ThemeContext } from '../context/ThemeContext';
const Theme = () => {
    const {toggleTheme}=useContext(ThemeContext);
    const{ isDarkMode }=useContext(ThemeContext);
  return (
      <div>
    <Flex direction="row" justify="flex-start" gap="30"><h2>My Dashboard</h2><Button onClick={toggleTheme} className={`button ${isDarkMode ? "btndark":"btnlight"}`}>{isDarkMode?"Dark Mode":"Light Mode"}</Button></Flex>
    
    <div className={`box ${isDarkMode ? "boxdark":"boxlight"}`}><h3>Active Users</h3>
    <p>Nrupul Dev</p>
    <Slider aria-label='slider-ex-1' defaultValue={80} colorScheme='teal'>
  <SliderTrack marginBottom="20px">
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<p>Devil</p>
    <Slider aria-label='slider-ex-1' defaultValue={30} colorScheme='blue'>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<p>Elon Musk</p>
    <Slider aria-label='slider-ex-1' defaultValue={40} colorScheme='pink'>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<p>Robert</p>
    <Slider aria-label='slider-ex-1' defaultValue={40} colorScheme='red'>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
    </div>
    </div>
  )
}

export default Theme