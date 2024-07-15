
export const getQuotesIdsForCurrentUSer = (collections: any) :any => {
  const quoteIds:any = [];
  collections && collections.length > 0 && collections?.forEach((collection:any) => {
    collection?.quotes?.forEach((quote:any) => {
        if(quote?._id){
            quoteIds.push(quote._id)
        }
    })
  })
  return quoteIds;
}

export const checkValidEmail = (email: string ): boolean => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return   re.test(email)  ? true :  false
}

