
export const clearHtmlTags = (originalString: string): string => {
  return originalString.replace(/(<([^>]+)>)/gi, "")
}
