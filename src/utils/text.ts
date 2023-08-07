// Function help to detect url in string
export const textSegments = (text: string) => {
  const urlRegex = /((?:https?|ftp|localhost|mailto|data|tel|sms):(\/\/|\+|info)[^\s/$.?#].[^\s]*)/g
  const segments = []
  let match
  let lastIndex = 0

  while ((match = urlRegex.exec(text))) {
    const url = match[0]
    const startIndex = match.index
    const endIndex = urlRegex.lastIndex - 1

    if (startIndex > lastIndex) {
      const textSegment = text.substring(lastIndex, startIndex)
      segments.push({ content: textSegment, isUrl: false })
    }

    segments.push({ content: url, isUrl: true })

    lastIndex = endIndex + 1
  }

  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex)
    segments.push({ content: remainingText, isUrl: false })
  }

  return segments
}

export const formattedMessageText = (content: string) => {
  return content.split('\n')
}