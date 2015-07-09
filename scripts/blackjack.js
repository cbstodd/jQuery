/**
 * Created by cstodd on 7/8/15.
 */

//var myCountry = {
//  getCapital: function () {
//    console.log(this.myCapital);
//  },
//
//  myName: 'USA',
//  myCapital: 'Washington DC'
//};
//
//myCountry.getCapital();


function card(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
}

var card1 = new card("Black", "Hearts", 7);

console.log("You have " + card1.name + " " + card1.suit + " " + card1.value + ". Its a nice card.");

var deck = [
  <!-- *-------===== Ace =====-------* -->
  new card('Ace', 'Clubs', 11),
  new card('Ace', 'Dimonds', 11),
  new card('Ace', 'Hearts', 11),
  new card('Ace', 'Spades', 11),

  <!-- *-------===== Two =====-------* -->
  new card('Two', 'Clubs', 2 ),
  new card('Two', 'Dimonds', 2 ),
  new card('Two', 'Hearts', 2 ),
  new card('Two', 'Spades', 2 ),

  <!-- *-------===== Three =====-------* -->
  new card('Three', 'Clubs', 3),
  new card('Three', 'Dimonds', 3),
  new card('Three', 'Hearts', 3),
  new card('Three', 'Spades', 3),

  <!-- *-------===== Four =====-------* -->
  new card('Four', 'Clubs', 4),
  new card('Four', 'Dimonds', 4),
  new card('Four', 'Hearts', 4),
  new card('Four', 'Spades', 4),

  <!-- *-------===== Five =====-------* -->
  new card('Five', 'Clubs', 5),
  new card('Five', 'Dimonds', 5),
  new card('Five', 'Hearts', 5),
  new card('Five', 'Spades', 5),

  <!-- *-------===== Six =====-------* -->
  new card('Six', 'Clubs', 6),
  new card('Six', 'Dimonds', 6),
  new card('Six', 'Hearts', 6),
  new card('Six', 'Spades', 6),

  <!-- *-------===== Seven =====-------* -->
  new card('Seven', 'Clubs', 7),
  new card('Seven', 'Dimonds', 7),
  new card('Seven', 'Hearts', 7),
  new card('Seven', 'Spades', 7),

  <!-- *-------===== Eight =====-------* -->
  new card('Eight', 'Clubs', 8),
  new card('Eight', 'Dimonds', 8),
  new card('Eight', 'Hearts', 8),
  new card('Eight', 'Spades', 8),

  <!-- *-------===== Nine =====-------* -->
  new card('Nine', 'Clubs', 9),
  new card('Nine', 'Dimonds', 9),
  new card('Nine', 'Hearts', 9),
  new card('Nine', 'Spades', 9),

  <!-- *-------===== Ten =====-------* -->
  new card('Ten', 'Clubs', 10),
  new card('Ten', 'Dimonds', 10),
  new card('Ten', 'Hearts', 10),
  new card('Ten', 'Spades', 10),

  <!-- *-------===== Jacks =====-------* -->
  new card('Jack', 'Clubs', 10),
  new card('Jack', 'Dimonds', 10),
  new card('Jack', 'Hearts', 10),
  new card('Jack', 'Spades', 10),

  <!-- *-------===== Queen =====-------* -->
  new card('Queen', 'Clubs', 10),
  new card('Queen', 'Dimonds', 10),
  new card('Queen', 'Hearts', 10),
  new card('Queen', 'Spades', 10),

  <!-- *-------===== Kings =====-------* -->
  new card('King', 'Clubs', 10),
  new card('King', 'Dimonds', 10),
  new card('King', 'Hearts', 10),
  new card('King', 'Spades', 10),
];
