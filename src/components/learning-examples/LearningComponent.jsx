import FirstComponent from './FirstComponent';
import CleverBoy from './SecondComponent'; 
import ThirdComponent from './ThirdComponent';
import LearningJavaScript from './LearningJavaScript'

export default function HostComponent() {
    return (
      <div>
        <FirstComponent></FirstComponent> 
        <CleverBoy></CleverBoy> 
        <ThirdComponent/>
        <LearningJavaScript/>
      </div>
    )
  }