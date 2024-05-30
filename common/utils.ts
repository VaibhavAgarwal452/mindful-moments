
export const getQuotesIdsForCurrentUSer = (collections: any) :any => {
  const quoteIds:any = [];
  console.log(collections, "collec");
  collections && collections.length > 0 && collections?.forEach((collection:any) => {
    collection?.quotes?.forEach((quote:any) => {
        if(quote?._id){
            quoteIds.push(quote._id)
        }
    })
  })
  return quoteIds;
}