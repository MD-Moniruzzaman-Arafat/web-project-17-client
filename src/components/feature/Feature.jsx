import img1 from '../../assets/images/icons/1.png'
import img2 from '../../assets/images/icons/2.png'
import img3 from '../../assets/images/icons/3.png'
import img4 from '../../assets/images/icons/4.png'
import FeatureItem from './FeatureItem'

export default function Feature() {
  return (
    <>
      <div className="bg-[#ECEAE3]">
        <div className="container mx-auto py-10 text-[#331A15] flex flex-col lg:flex-row items-center lg:gap-20">
          <FeatureItem
            img={img1}
            title={'Awesome Aroma'}
            description={
              'You will definitely be a fan of the design & aroma of your coffee'
            }
          />
          <FeatureItem
            img={img2}
            title={'High Quality'}
            description={
              'We served the coffee to you maintaining the best quality'
            }
          />
          <FeatureItem
            img={img3}
            title={'Pure Grades'}
            description={
              'The coffee is made of the green coffee beans which you will love'
            }
          />
          <FeatureItem
            img={img4}
            title={'Proper Roasting'}
            description={
              'Your coffee is brewed by first roasting the green coffee beans'
            }
          />
        </div>
      </div>
    </>
  )
}
