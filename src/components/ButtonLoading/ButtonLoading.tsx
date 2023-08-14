import './ButtonLoading.css'
interface IButtonLoading {
  width?: number
  height?: number
  firstColor?: string
  secondColor?: string
  thirdColor?: string
}

export default function ButtonLoading({ width = 30, height = 30, firstColor = 'lightblue', secondColor = 'lightcoral', thirdColor = 'lightgreen' }: IButtonLoading) {
  return <div className="spinner" style={{width: width, height: height}}>
    <div className="spinner-sector spinner-sector-red" style={{borderTopColor: firstColor}}></div>
    <div className="spinner-sector spinner-sector-blue" style={{borderTopColor: secondColor}}></div>
    <div className="spinner-sector spinner-sector-green" style={{borderTopColor: thirdColor}}></div>
    <div className="spinner-text"></div>
  </div>
}