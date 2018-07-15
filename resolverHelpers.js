export const findByLinkId = (questionnaireResponse, linkId) => {
  // recursive function to traverse a questionnaire response with multi-nested items.
  const traverseQR = (QRItem) => {
    if (QRItem.linkId === linkId) {
      return QRItem
    }

    if (questionnaireResponse.item) {
      for (let item of QRItem.item) {
        return traverseQR(item)
      }
    }

  }

  return traverseQR(questionnaireResponse)
}
