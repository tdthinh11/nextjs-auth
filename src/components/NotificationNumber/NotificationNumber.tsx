interface INotificationNumber {
  notifyNumber?: number
  width?: number
  height?: number
  backgroundColor?: string
  color?: string
  fontSize?: number
}
export default function NotificationNumber({ notifyNumber = 0, width = 18, height = 18, backgroundColor = 'red', color = 'white', fontSize = 13 }: INotificationNumber) {
  return <div>
    {notifyNumber > 0 && <div
      className="absolute flex items-center justify-center rounded-full pb-[2px]"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize
      }}
    >{notifyNumber}</div>}
  </div>
}