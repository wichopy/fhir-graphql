export const findByLinkId = (questionnaireResponse, linkId) =>
  questionnaireResponse.item.find(questionnaireResponseItem => {
    return questionnaireResponseItem.linkId === linkId;
  });
