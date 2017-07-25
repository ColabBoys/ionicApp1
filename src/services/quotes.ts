import { Quote } from "../data/quote.interface";

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);

        // to check if it adds to the array log it
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote){
        // find index takes a JS function
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        // remove one element at position matching
        this.favoriteQuotes.splice(position, 1);

        // to check if it is removed from the array log it
        console.log(this.favoriteQuotes);
    }

    getFavoriteQuotes(){
        // returns a copy of the array of quotes so not to access the direct array bc its private
        return this.favoriteQuotes.slice();
    }
}