// =========================================================
// CHRISTIAN MOVIE GUIDE — shared site behaviour
// NOTE: Sign In is handled in auth.js, Subscribe/Paystack
// checkout is handled in subscription.js (both Firebase Auth).
// =========================================================

/* =========================================================
   MOVIE LIBRARY — edit this list to manage your catalog
   =========================================================
   Each movie needs:
     title      - the movie title shown on the card
     topics     - an ARRAY of one or more topics, each MUST exactly match
                  a shelf's data-topic attribute in index.html / movies.html
                  (e.g. ["Family", "Hope"] — a movie can appear on
                  multiple shelves this way)
     youtubeUrl - the full YouTube link, e.g.
                  "https://www.youtube.com/watch?v=XXXXXXXXXXX"
                  (youtu.be links also work)
     duration   - shown under the title, e.g. "1h 38m"
     locked     - true = subscribers only (shows lock + opens Subscribe modal)
                  false = free preview (thumbnail links straight to YouTube)

   Thumbnails are pulled automatically from YouTube using the video ID,
   so you don't need to upload or link images separately.

   To add a movie: copy one of the objects below, paste it into the
   array, and fill in your own title / topics / link / duration.
   To add a brand-new topic: add movies with that topic in their
   topics array here, AND add a matching shelf (with the same
   data-topic value) to the HTML.
   ========================================================= */
/* =========================================================
   CONTACT INFO — edit these two lines whenever you're ready
   =========================================================
   whatsappNumber: your number in international format,
     digits only — no "+", spaces, or leading 0.
     e.g. Nigeria 080 123 4567 -> "2348012345678"
   email: the address you want suggestions sent to.
   ========================================================= */
const CONTACT_INFO = {
  whatsappNumber: "2347014613682", // e.g. "2348012345678"
  email: "christianmovieguide@gmail.com",
};

const MOVIES = [
  // ----- Deliverance/Spiritual Warfare -----
  { title: "Manasseh (The Movie)", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/d639zLPZ1Io?si=Pzx2mxcB2q3l4H_w", duration: "2h 19m" },
  { title: "The Casualty", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/2t5qegv3Q5M?si=rXkKyhKqrVJiLlbn", duration: "2h 7m" },
  { title: "Irubo Eje 1", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/fuhsh4uRgEw?si=oM9pSefHxMLbGp4R", duration: "1h 6m" },
  { title: "Irubo Eje 2", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/3ZlpRQ3C4fw?si=mpHoBe71BKu1T5dE", duration: "1h 14m" },
  { title: "Abomination", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/USk26i6xmSw?si=GQmxJyzm3thEfpKF", duration: "50m" },
  { title: "Akobi Laaroye1", topics: ["Redemption", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/y6cBHiQcLjI?si=NbNnODDDaFwAV6wa", duration: "1h 35m" },
  { title: "Akobi Laaroye2", topics: ["Redemption", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/RBjf0VZSqWw?si=xqqeTjNycKhTtgvD", duration: "1h 31m" },
  { title: "Alaseju", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/xRBOr867M6Q?si=yhaHGygEc0_UJIe9", duration: "1h 23m" },
  { title: "Arewa", topics: ["Faith", "Purpose Fulfilment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/-gXivpu6U5U?si=C5nYTgBvVsCgYAJm", duration: "1h 44m" },
  { title: "Ayaba", topics: ["Redemption", "Faith", "Spiritual Enlightenment", "Hope", "Purpose Fulfilment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/sFav5yMqfnY?si=roiFpG7mkyNW6glj", duration: "2h 39m" },
  { title: "Battle Field", topics: ["Deliverance/Spiritual Warfare", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/lin9l_ydqJo?si=0i_cmLHuAte1efP9", duration: "1h 45m" },
  { title: "Beyond Altars", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/36WiZrwYWGg?si=ftwIdVLpV7YE9S60", duration: "1h 20m" },
  { title: "Dark Corner", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/2CyJ-vr0_Fg?si=6-a6S5XV3UVarzoV", duration: "3h 4m" },
  { title: "Divided Blood", topics: ["Faith", "Deliverance/Spiritual Warfare", "Family", "Parents"], youtubeUrl: "https://youtu.be/EumLXIKvLs8?si=OB6FGyWPk9o2mOeN", duration: "2h 26m" },
  { title: "Dr. Albert", topics: ["Deliverance/Spiritual Warfare", "Couples"], youtubeUrl: "https://youtu.be/bkAw9PLetog?si=A-eApmvYN_rHrrrx", duration: "1h 44m" },
  { title: "Drop Off", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/MyZDOcEzahs?si=Nwu9L7v5CGOgnvWh", duration: "1h 12m" },
  { title: "Eru Eleru", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/1o2PAQDheis?si=Orm8Hl5ay4zsLYa-", duration: "2h 10m" },
  { title: "Faceless", topics: ["Forgiveness/Reconciliation", "Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/hp9PWbu3NlM?si=ferNGHsfcjuN33_J", duration: "20m" },
  { title: "Fleeting Hurdles 1", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Parents"], youtubeUrl: "https://youtu.be/Od-pVYFUgRs?si=9JuBa-4NHIB1zTsX", duration: "50m" },
  { title: "Fleeting Hurdles 2", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Parents"], youtubeUrl: "https://youtu.be/nnXGuS5wtMY?si=g11kzhZfE_FM2Xyv", duration: "52m" },
  { title: "Fleeting Hurdles 3", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Parents"], youtubeUrl: "https://youtu.be/VmrdM_F2aOY?si=63H0_Rwt4VPsFRmD", duration: "1h 18m" },
  { title: "Hell Razer", topics: ["Redemption", "Deliverance/Spiritual Warfare", "Family", "Parents"], youtubeUrl: "https://youtu.be/oFUeWCyCkqU?si=cSSiqM804rE3ED-8", duration: "1h 55m" },
  { title: "Hot Seat", topics: ["Deliverance/Spiritual Warfare", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/v_C7mSmif1Q?si=uumI3M8hiUFQDEiG", duration: "15m" },
  { title: "I Am The Mother", topics: ["Deliverance/Spiritual Warfare", "Parents"], youtubeUrl: "https://youtu.be/RLQlKpJzl50?si=LBvZilYw0mBmyrxY", duration: "1h 6m" },
  { title: "Illegal Union", topics: ["Deliverance/Spiritual Warfare", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/Uv2aytCeHII?si=qdyGpqb5HNygiZFR", duration: "57m" },
  { title: "Inferno", topics: ["Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/C7SROXkWFjQ?si=1J_dwcC4Aw6FYcXT", duration: "1h 47m" },
  { title: "Into the den", topics: ["Redemption", "Faith", "Brotherly Love", "Deliverance/Spiritual Warfare", "Addictions", "Evangelism", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/D355ECnJBRg?si=KGML-bpqboW2uZgF", duration: "1h 46m" },
  { title: "Land of fury", topics: ["Redemption", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/0ynZew6Y1xA?si=89rEZ7Vd7asFHfIk", duration: "1h 19m" },
  { title: "Lawful Captive", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/AfU9uRzjHWI?si=95hAGAi1Ot5lIG06", duration: "2h 3m" },
  { title: "Liberty", topics: ["Faith", "Hope", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/ZG0koZo-Dok?si=z3yVDME8Gai9dIsQ", duration: "2h 18m" },
  { title: "Manasseh Ep1", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/P_PGU2c03Js?si=0Wv9QAB0hKRBwHua", duration: "48m" },
  { title: "Manasseh Ep2", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/bCkaZ10x-QE?si=ehJLeItHhtYIlpK_", duration: "50m" },
  { title: "Manasseh Ep3", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/QS3LAVlpfA4?si=WvWmKOARKDTN_JE_", duration: "43m" },
  { title: "Manasseh Ep4", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/uzHT1_ro59o?si=UE5JascBUdigb8J_", duration: "45m" },
  { title: "Manasseh Ep5", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/oV_AtECuens?si=-25kaUqx4sXlfE_c", duration: "46m" },
  { title: "Manasseh Ep6", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/-Mnu0s0dpmM?si=3_rOB3y6iHoohtGD", duration: "50m" },
  { title: "Mohuru Season One and Two", topics: ["Redemption", "Repentance/Restoration", "Deliverance/Spiritual Warfare", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/F-vnUw9ri6o?si=SWz717ZsZ8Y5LzFr", duration: "5h 16m" },
  { title: "Omiran Idile 1", topics: ["Deliverance/Spiritual Warfare", "Family"], youtubeUrl: "https://youtu.be/McWsvaYf8aY?si=tk09Jan4GRSFeIFr", duration: "1h 17m" },
  { title: "Omiran Idile2", topics: ["Forgiveness/Reconciliation", "Faith", "Deliverance/Spiritual Warfare", "Family"], youtubeUrl: "https://youtu.be/Ilh4JjM4HVI?si=ZNO2NTnTtKGNCA9g", duration: "1h 19m" },
  { title: "Oosa1", topics: ["Redemption", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/k7kHi6tc70M?si=Z_IOWhTnyxGYHre2", duration: "1h 1m" },
  { title: "Oosa2", topics: ["Redemption", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/1zjH0J9zENc?si=9nsMfjfJXpzTP7td", duration: "1h 2m" },
  { title: "Oruko Nla", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/8A54AUwtyGE?si=mXhart9qE-gdLfhB", duration: "57m" },
  { title: "Praey", topics: ["Redemption", "Faith", "Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/hsG4HU6cgWY?si=1m4UmSAbx_I9ajGP", duration: "2h 39m" },
  { title: "Private War", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Family", "Ministers"], youtubeUrl: "https://youtu.be/S51sKe2z9JQ?si=lRLPOsh0-9-2hba0", duration: "50m" },
  { title: "Prognosis 1", topics: ["Deliverance/Spiritual Warfare", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/8Q-qU6ikJcw?si=FJjEQnG0FS2RhQfq", duration: "1h 3m" },
  { title: "Prognosis 2", topics: ["Deliverance/Spiritual Warfare", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/Oc8S5FvZ9O0?si=nzAlTaRA_eJLEJnf", duration: "1h 20m" },
  { title: "Shackles 1", topics: ["Redemption", "Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Family", "Couples"], youtubeUrl: "https://youtu.be/MgppSpDIzgc?si=KlcOD5UfxtGdk2a7", duration: "1h 52m" },
  { title: "Shackles 2", topics: ["Redemption", "Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Family", "Couples"], youtubeUrl: "https://youtu.be/kXf5XCD6B08?si=tGCoYyIzxxjYHYFa", duration: "1h 41m" },
  { title: "Sheol", topics: ["Deliverance/Spiritual Warfare", "Couples"], youtubeUrl: "https://youtu.be/aZHVS-t0EHM?si=suDd4aykBx0TojnO", duration: "1h 56m" },
  { title: "Sleeping Prophecy", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/1N6AmUZ6v3k?si=fudjv0a2pq7ljvWw", duration: "1h 10m" },
  { title: "Sour Grapes", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/GFEh-Ena_Sc?si=LGd1eXoEVvZjkbO4", duration: "30m" },
  { title: "Spirit of Infirmity", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/rz2GgEcylJo?si=rAU1-hU6BeGroqmT", duration: "1h 21m" },
  { title: "Spirituals 1", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/wbexvRPd0Go?si=azdJqcA_tzkraVKp", duration: "1h 40m" },
  { title: "Spirituals 2", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/QafCUG04yGs?si=jJKkeMNfbthiHw7U", duration: "1h 44m" },
  { title: "Spirituals 3", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/pRPFMJXefv0?si=D06JCJbYh3E7HcDx", duration: "1h 24m" },
  { title: "Spirituals 4", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/y41jI31M-3Y?si=W84k4vjRhJB8vJFJ", duration: "1h 36m" },
  { title: "The Conspiracy", topics: ["Deliverance/Spiritual Warfare", "Couples"], youtubeUrl: "https://youtu.be/wb1qBSP6QQA?si=i9kn9UJaISLuzan-", duration: "1h 16m" },
  { title: "The gods Are Dead", topics: ["Salvation", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/E_8cFo_MXpU?si=5rhI6azeb1u_-IWK", duration: "2h" },
  { title: "The Negotiator 1", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/-fd0fhl45fo?si=pyLcPSklPqTyvT51", duration: "1h 8m" },
  { title: "The Negotiator 2", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/tfjWSH76gVU?si=kF4rWA9Uz_ubbsy1", duration: "55m" },
  { title: "The Negotiator 3", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/Dbep_5C16KA?si=YgqA_txkE6try1dW", duration: "50m" },
  { title: "The Overcomers", topics: ["Hope", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/jJC4Jw3lUdQ?si=umfhoFqXiu7D3eVT", duration: "1h 36m" },
  { title: "The Power", topics: ["Redemption", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/9SsWiBbpyb8?si=zmkDfH8yqBwQlqlX", duration: "58m" },
  { title: "The valley of decision", topics: ["Redemption", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/mgr1F3IAFR0?si=cR6IkEInhCdlex4J", duration: "1h 22m" },
  { title: "Thorny Thicket", topics: ["Repentance/Restoration", "Deliverance/Spiritual Warfare", "Ministers"], youtubeUrl: "https://youtu.be/JshEfXTVMO0?si=HeTLiAL7Fym6YVTl", duration: "1h 4m" },
  { title: "Uncle White", topics: ["Redemption", "Spiritual Enlightenment", "Consecration", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/8Eij-NLI7II?si=k1PVvylgwVsyGeIL", duration: "1h 33m" },
  { title: "Under Arrest", topics: ["Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/r4Bp5oLjfX4?si=8sKhYJWMptK-HoG5", duration: "1h 32m" },
  { title: "Underlock", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/VE7kFYoFZFs?si=tww3piZT4Qw8qB2b", duration: "1h 49m" },
  { title: "Underseige", topics: ["Redemption", "Spiritual Enlightenment", "Consecration", "Deliverance/Spiritual Warfare", "Family", "Young Adults", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/11FQQv81hDw?si=PO47tA0Kj4HyPFNu", duration: "2h 7m" },
  { title: "Waterless clouds", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Young Adults"], youtubeUrl: "https://youtu.be/0rYZV06Qh5E?si=RNtt7FinUXVwf4dF", duration: "1h 32m" },
  { title: "Where is God", topics: ["Faith", "Hope", "Deliverance/Spiritual Warfare"], youtubeUrl: "https://youtu.be/1Ac6Z4KfZUw?si=888Yjj4UyCRf5pMd", duration: "1h 42m" },
  { title: "Wild Gift", topics: ["Spiritual Enlightenment", "Deliverance/Spiritual Warfare", "Family", "Children", "Young Adults", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/o5CvPaaZUac?si=Vx17edytXNqis9O-", duration: "35m" },
  { title: "Winds of my Will 1", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Family", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/2aP4vvcjRm0?si=3vxOFrLHo0LIzMj2", duration: "1h 26m" },
  { title: "Winds of my Will 2", topics: ["Deliverance/Spiritual Warfare", "Relationship", "Family", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/Xc0jchKtYxI?si=iA9JGYSD7XeHXAvj", duration: "1h 25m" },

  // ----- Young Adults -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mother's Shadow", topics: ["Redemption", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/xuxepHMTYTE?si=6uMnwhsObORqe0yD", duration: "1h 1m" },
  { title: "Free indeed", topics: ["Young Adults", "Addictions"], youtubeUrl: "https://youtu.be/EgVGnkH7wXY?si=K3xy1KYYdzZUvx82", duration: "21m" },
  { title: "Good Intentions", topics: ["Young Adults", "Family", "Repentance/Restoration"], youtubeUrl: "https://youtu.be/b3zFE10I_go?si=KV6TTfo2CWTaC1P8", duration: "1h 21m" },
  { title: "The Blot", topics: ["Redemption", "Young Adults", "Relationship"], youtubeUrl: "https://youtu.be/gItkfWKhK-s?si=asSF5FCe9jsZEr-1", duration: "26m" },
  { title: "Abigail Mirror", topics: ["Relationship", "Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/c2AX7fOHe3I?si=XtAqnCcNI9Pc8uJp", duration: "1h 51m" },
  { title: "Tunmise", topics: ["Young Adults", "Purpose Fulfilment"], youtubeUrl: "https://youtu.be/LAHMFrziJcs?si=ciHhgW4fc6ZKorHh", duration: "1h 59m" },
  { title: "Twinkle", topics: ["Young Adults", "Redemption"], youtubeUrl: "https://youtu.be/hHoXiJr29Mc?si=PgrRevDCEoweD1Ge", duration: "1h 4m" },
  { title: "Love left behind", topics: ["Young Adults", "Relationship"], youtubeUrl: "https://youtu.be/9Bcn38676i4?si=phNlPe7jHc2q91PV", duration: "17m" },
  { title: "Three Sisters", topics: ["Young Adults", "Brotherly Love"], youtubeUrl: "https://youtu.be/BuOKcQqPJZA?si=LBGThSdA5CETsbVG", duration: "19m" },
  { title: "Lust Game", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/j2IYd5BbKXU?si=KBZuK16bqWnmUXSC", duration: "1h 4m" },
  { title: "Dying Empty", topics: ["Young Adults", "Faith"], youtubeUrl: "https://youtu.be/Wl2q_tkOuUM?si=6oT_j-igeSyk68NN", duration: "27m" },
  { title: "30 Days 1", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/pgHDHu-mZfk?si=xTaaZOEfYZki0t8j", duration: "1h 36m" },
  { title: "30 Days 2", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/h4sPJu_0pSc?si=B7tEnFPCj209cn_L", duration: "1h 33m" },
  { title: "30 Pieces", topics: ["Redemption", "Faith", "Young Adults"], youtubeUrl: "https://youtu.be/JEXm0YN70MQ?si=3ixzFUbRk-crTMV-", duration: "1h 40m" },
  { title: "A day at Christmas", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/pacIJ91-qdQ?si=mOlAb4y0-iMpOCuV", duration: "58m" },
  { title: "A little folding of hands", topics: ["Spiritual Enlightenment", "Consecration", "Young Adults", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/dxGz_YjRwx4?si=Xouov9s5E8iUM9J-", duration: "10m" },
  { title: "A Love Like Raymond", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/EbM0v7IwPOc?si=BtPt5Cf38nns3MZJ", duration: "1h 54m" },
  { title: "A Mile for Ten", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/hvp2pRtkzDA?si=YxESis38lgomiFSC", duration: "36m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Afopina", topics: ["Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/WwzB7QWEqWA?si=jWMnY8aPbpAji47w", duration: "2h 8m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Apoti Eri", topics: ["Redemption", "Forgiveness/Reconciliation", "Repentance/Restoration", "Faith", "Spiritual Enlightenment", "Hope", "Family", "Children", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/3Caali7DTN8?si=dqVD2gPbOHxgYE4V", duration: "1h 33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "At all cost", topics: ["Redemption", "Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/GrYIQDmZ-4A?si=WWqvNttNM0fQ21fQ", duration: "32m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Baba Eri", topics: ["Young Adults", "Parents"], youtubeUrl: "https://youtu.be/JXDBMzpctrg?si=vdXAlCe0qewT_YR4", duration: "1h 50m" },
  { title: "Backstage 1", topics: ["Spiritual Enlightenment", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/sFOr06QEOe4?si=BGNeL9WhtQMfD-1L", duration: "43m" },
  { title: "Backstage 2", topics: ["Spiritual Enlightenment", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/bJYQd9vvEc4?si=vsgTUe0CzWS2bTYR", duration: "37m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Battle of the Gates 1", topics: ["Redemption", "Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/X1R7hSqelsU?si=PtlS511b4FCtMh8G", duration: "1h 36m" },
  { title: "Battle of the Gates 2", topics: ["Redemption", "Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/hZptfk6UEwM?si=tEeShlUFvw6M4ka7", duration: "1h 19m" },
  { title: "Blood Language", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/AyG0catDIjA?si=nP-i2HXBDlmgoe_Q", duration: "1h 56m" },
  { title: "Blueprint", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/Wr1_bjZu-v8?si=vd_LboWmGeimJZiP", duration: "1h 58m" },
  { title: "Broken Courtship", topics: ["Forgiveness/Reconciliation", "Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/yWDu-MDbMIc?si=k0gLHkiYLKXZMs9m", duration: "1h 27m" },
  { title: "Bros", topics: ["Redemption", "Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/Ix0c44trd1w?si=KtVmelRLyEaAMSBJ", duration: "1h 26m" },
  { title: "Burning Coles", topics: ["Redemption", "Forgiveness/Reconciliation", "Repentance/Restoration", "Relationship", "Children", "Young Adults", "Couples", "Parents"], youtubeUrl: "https://youtu.be/qAg8y-4ZQFU?si=EKOO2UHuc-HyDWcX", duration: "2h 1m" },
  { title: "Caged", topics: ["Relationship", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/vwCwCy28nJQ?si=AR74KKjc2I0HvqWX", duration: "1h 20m" },
  { title: "Cancelled", topics: ["Spiritual Enlightenment", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/ymjxSwK2dI4?si=kBKjJUIF35gT5Be_", duration: "18m" },
  { title: "Class Party", topics: ["Relationship", "Children", "Young Adults"], youtubeUrl: "https://youtu.be/vN4dSfKMEd4?si=LMaR6VZxWuLAVlyo", duration: "1h 37m" },
  { title: "Courting Couple 1", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/WxDn-C74s_4?si=GCOMoZ1VKtIbwYxP", duration: "24m" },
  { title: "Courting Couple 2", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/2SzesO7lsCk?si=yQT4_cGbmX1ZRE_7", duration: "30m" },
  { title: "Courting Couple 3", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/yZh4waqXxMU?si=QqZ3shZaOE9CFQsr", duration: "33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Dear Dreamer", topics: ["Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/-qTrqLcGNHo?si=BoseiVn_iVPEheys", duration: "32m" },
  { title: "Demons of Sexual Addiction", topics: ["Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/QDxR8D6Wxmc?si=kBvHlYcD_c4tTi72", duration: "47m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Egbere", topics: ["Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/935HbLsLtng?si=vK-YrU5fU6MxvLyM", duration: "2h 50m" },
  { title: "Enoch", topics: ["Faith", "Spiritual Enlightenment", "Purpose Fulfilment", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/7TxD3cxUQcc?si=rkF5anZOFcy97aUO", duration: "1h 58m" },
  { title: "Exposed", topics: ["Addictions", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/zp0xo4d1DN0?si=v2RLnHhmBLdzsCNp", duration: "1h 51m" },
  { title: "Eye Candy", topics: ["Consecration", "Addictions", "Children", "Young Adults"], youtubeUrl: "https://youtu.be/kzhOIkD76Ic?si=_qKCy8e-vSlWamg9", duration: "1h 58m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Family Next Door 3", topics: ["Family", "Children", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/14WYhldpp-s?si=7TtfugwXHlXuNmmI", duration: "1h 14m" },
  { title: "Far Amiss 1&2", topics: ["Spiritual Enlightenment", "Relationship", "Young Adults", "Couples", "Parents"], youtubeUrl: "https://youtu.be/PYJhAiuc9pI?si=ionEWKHuydX9SW2X", duration: "2h 23m" },
  { title: "Finding Me", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/KPkWe8nag-g?si=4_YJhkvja7wa-6–", duration: "42m" },
  { title: "Finding Me 2", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/wsxVnLPFz2k?si=gnk4L79xTnLkxiJj", duration: "1h 14m" },
  { title: "Flags", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/vh6Ct_xWfiU?si=QbCMsGgEdBi2z-c4", duration: "32m" },
  { title: "Four Years", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/QpJlBnn7_sk?si=9LM_l10F0OwTF5m0", duration: "1h 34m" },
  { title: "Fourth Man", topics: ["Young Adults", "Parents"], youtubeUrl: "https://youtu.be/u_Ty-eu4cfo?si=ZOs1gwb5u5V5v6PP", duration: "19m" },
  { title: "Framed", topics: ["Spiritual Enlightenment", "Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/AdtFByUIZbM?si=jizrcglyT7CFXbCB", duration: "19m" },
  { title: "From Ashes", topics: ["Brotherly Love", "Evangelism", "Children", "Young Adults"], youtubeUrl: "https://youtu.be/KRiAb51o-iw?si=Q7lsPfLgGa-nvAAC", duration: "1h 13m" },
  { title: "Games Episode 1-6 Season 1", topics: ["Redemption", "Family", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/Z_oeSJNsCJQ?si=sXkFdL44jd6y22Jn", duration: "2h 33m" },
  { title: "Gbemi 2 Ep1", topics: ["Forgiveness/Reconciliation", "Faith", "Hope", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/L7prClEQfEg?si=4mkULlfFl6Row8zq", duration: "1h 5m" },
  { title: "Gbemi 2 Ep2", topics: ["Forgiveness/Reconciliation", "Faith", "Hope", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/NLNoB5rYIo0?si=eGI2cvzOOd6Y1deQ", duration: "1h 5m" },
  { title: "Gone back Home", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/MGg6C4XwNXs?si=OH3itBhVz5oZLv-2", duration: "1h 40m" },
  { title: "Grifters Fate", topics: ["Redemption", "Spiritual Enlightenment", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/oHu56ifNUCs?si=JBSTBSdMflDtnw-s", duration: "1h 14m" },
  { title: "Harmony Deal", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/ylx5b1Q7Sg4?si=MUTgIcYULNiibXi7", duration: "1h 16m" },
  { title: "Hatima", topics: ["Redemption", "Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/tVI_S4NxIJw?si=H6jsDHyAaXWgPNXV", duration: "2h 15m" },
  { title: "Haunted", topics: ["Redemption", "Brotherly Love", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/S3k65f2Zjdc?si=6mSza4DieNEY40tr", duration: "50m" },
  { title: "Holy Blackmail", topics: ["Relationship", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/QWsS6LR-sEk?si=1P_wFuRwUIjchW_r", duration: "57m" },
  { title: "Holy Distraction", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/BHZ9H4t7Sd4?si=Y0RSRRsgwKHmnl0d", duration: "20m" },
  { title: "Holy Harlot", topics: ["Consecration", "Young Adults"], youtubeUrl: "https://youtu.be/U9jTMwLeMnE?si=Ll9fHPebxEVqbj3u", duration: "33m" },
  { title: "Holy Scamtrimony", topics: ["Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/G0xp4BhVJ38?si=7OUTm-Q6rAinrXOe", duration: "1h 52m" },
  { title: "Hope", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/blAB4UcfzY8?si=omGGW8YP24BFTSYG", duration: "10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Husband Of My Wife", topics: ["Relationship", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/8no3uLCTIB4?si=OXdneXf8c4OmiX8Z", duration: "36m" },
  { title: "I dare say no", topics: ["Consecration", "Children", "Young Adults"], youtubeUrl: "https://youtu.be/qUDHqsuh-cA?si=KzV_pTdfrVuFccsY", duration: "2h 6m" },
  { title: "I Received Him", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/7qHFEV1_bwM?si=E2pJuNaECBJXdEpO", duration: "14m" },
  { title: "Ignition", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/qvw1zBfkrH0?si=W7uh2ZMv9iCrqAvU", duration: "1h 33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Impossible Love", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/7tqEDgz-ikI?si=HfVatWQzlbYj1me1", duration: "1h 59m" },
  { title: "In Love with the Dead", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/m_gSyOBKNqs?si=e_rFPje9L3oN2wZ6", duration: "22m" },
  { title: "In the gap", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/09qPBX6n5g0?si=VCEwEwGyn542yyR4", duration: "1h 37m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Inner Beauty", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/eOhRcD3-EqM?si=W29yPKgG1ZMT7r06", duration: "1h 3m" },
  { title: "Insignia", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/cPXN8Wd1Ymc?si=usM79Ev5-mk6irW9", duration: "48m" },
  { title: "Intercept", topics: ["Redemption", "Brotherly Love", "Young Adults"], youtubeUrl: "https://youtu.be/Ie4kuK_hJ6g?si=wcxsxegB2iY8Hwwe", duration: "2h 4m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Irin Ajo Elege", topics: ["Spiritual Enlightenment", "Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/qaEn8PMAxso?si=g3cTTob8IyZ3_OIR", duration: "15m" },
  { title: "It doesn't have to get to this", topics: ["Redemption", "Young Adults"], youtubeUrl: "https://youtu.be/amZIavVHbGg?si=0Kp48JYpTt_k7QYu", duration: "55m" },
  { title: "Journey In A Circle", topics: ["Forgiveness/Reconciliation", "Repentance/Restoration", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/AM-7H2NIpAw?si=OhQBsdx3fTiZyfSA", duration: "1h 35m" },
  { title: "Kainos", topics: ["Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/TA-V1TjSbws?si=XP3mrJ6Fo8bNIVnZ", duration: "2h 38m" },
  { title: "Lagos to Gomorrah", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/AvzyBgOvgic?si=59lJme_TQbNIL9YR", duration: "2h 3m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Last Hour", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/UjDIQi4-kuc?si=4iUkcwCLuLxCsEGn", duration: "48m" },
  { title: "Last man standing", topics: ["Redemption", "Forgiveness/Reconciliation", "Family", "Addictions", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/tkcAte_kDrg?si=l1IPuEwTAQZmHWrv", duration: "1h" },
  { title: "Last Ride", topics: ["Young Adults", "Parents"], youtubeUrl: "https://youtu.be/B252jsL2EyU?si=DwgWaLD5NWQ2mP2z", duration: "16m" },
  { title: "Love Bait", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/Kk7VAOW17SE?si=VgzOfBoPgAJk9OQb", duration: "2h 35m" },
  { title: "Love in one night", topics: ["Redemption", "Forgiveness/Reconciliation", "Young Adults"], youtubeUrl: "https://youtu.be/YVDvHZ1lDJo?si=ef09bNae1BR_FJRS", duration: "28m" },
  { title: "Love over Mere Lust", topics: ["Spiritual Enlightenment", "Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/QjzZpJwVWxs?si=y5l-TnyazUsyXjrX", duration: "1h 12m" },
  { title: "Love Uncut", topics: ["Forgiveness/Reconciliation", "Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/sAmUbaALHG0?si=QCiVLKLlxaO00iSg", duration: "1h 34m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "ManDown", topics: ["Brotherly Love", "Relationship", "Young Adults", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/rVNQ-BEZZyQ?si=4FehEKveV--cjdc0", duration: "1h 50m" },
  { title: "Marred Pot", topics: ["Family", "Children", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/4lAMGfbSNFc?si=R5M-XivGXA-nRPlp", duration: "1h 10m" },
  { title: "Marriage Committee", topics: ["Repentance/Restoration", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/AEASzQf68Ig?si=04xGnHaUs8jmdAtH", duration: "36m" },
  { title: "Marry Me", topics: ["Relationship", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/WGBUEMEB5Vg?si=s0W9rJ8pr9lXrzFj", duration: "17m" },
  { title: "Minister Praise", topics: ["Spiritual Enlightenment", "Purpose Fulfilment", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/PVzNPl4xPMo?si=2UPNgk2iQTywLK8K", duration: "1h 7m" },
  { title: "Mirror Diary", topics: ["Redemption", "Spiritual Enlightenment", "Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/XtFxJsjrvQ8?si=0llr2e1_G1cbR6kX", duration: "11m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mom's Design", topics: ["Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/4FBNGHZW4II?si=lJ_yydJz44IafwrT", duration: "1h 57m" },
  { title: "Mr Wrong", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/N5kGleKXNVA?si=sxiAr42G0E2uI7Gj", duration: "10m" },
  { title: "My Dream 1", topics: ["Purpose Fulfilment", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/cpzR5flVeps?si=ePvopECs3JOEsXqW", duration: "1h 24m" },
  { title: "My Dream 2", topics: ["Spiritual Enlightenment", "Purpose Fulfilment", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/_SG0zMTAyW0?si=Pkmak4S3IO2Qwwq-", duration: "1h 30m" },
  { title: "My Dream 3", topics: ["Relationship", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/-fSCCBmum4E?si=_RGLKzdYzHD4p4He", duration: "1h 17m" },
  { title: "My First Love", topics: ["Repentance/Restoration", "Relationship", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/2XlAHS1aU9Y?si=2oqZTWPGSAdT9oTI", duration: "1h 45m" },
  { title: "My Name Is Benard", topics: ["Purpose Fulfilment", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/iaMJwLTr_Ag?si=h34087-RSybyR9-V", duration: "23m" },
  { title: "O N SISE", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/AOR6Fg0dx1w?si=WRrYYcXGoH9zKBh-", duration: "31m" },
  { title: "Olukoya 1", topics: ["Faith", "Purpose Fulfilment", "Evangelism", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/AZWXoWxrpds?si=J5yYshavEVNfy5QO", duration: "1h 55m" },
  { title: "Olukoya 2", topics: ["Faith", "Purpose Fulfilment", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/KZf1VyCKRJY?si=6Q6GZa8Cg6JgnyHV", duration: "1h 30m" },
  { title: "One Day", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/dIduuhmtCdQ?si=--7JaI2le0L_fy3H", duration: "16m" },
  { title: "One masked night", topics: ["Redemption", "Faith", "Young Adults"], youtubeUrl: "https://youtu.be/0Ax4mB11lFo?si=enuqRTVFuQ3lIZos", duration: "51m" },
  { title: "Overwhelmed", topics: ["Hope", "Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/Te47HHt6OxU?si=-4tC64XZnevlVacQ", duration: "1h 6m" },
  { title: "Perfect Prison", topics: ["Relationship", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/lz3woSjwtFM?si=Yr6H13gSRv2dSHFv", duration: "1h 49m" },
  { title: "Pieces made whole", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/X5c6HWkMfHw?si=PnC9IbqG3XUPJV4M", duration: "44m" },
  { title: "Power Couple", topics: ["Relationship", "Young Adults", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/f1zaVcHna2o?si=ZkaTpGkrbztRAyBR", duration: "2h 23m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Rebranded", topics: ["Redemption", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/hpGPSA_pwlE?si=86Jxhj0MATYdpjYi", duration: "30m" },
  { title: "Recitation", topics: ["Faith", "Hope", "Children", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/0FzSG3eyMnU?si=-N_Rdz1B2hJ9Z9lv", duration: "1h 29m" },
  { title: "Rhythm of Destiny", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/-OydJvjvTFs?si=DBD_6GRSO_N9258-", duration: "50m" },
  { title: "Riddles of Hope", topics: ["Redemption", "Faith", "Hope", "Young Adults"], youtubeUrl: "https://youtu.be/zcHKItIiJxA?si=CtFaelNa9a22G3C9", duration: "9h 1m" },
  { title: "Scientist", topics: ["Redemption", "Brotherly Love", "Young Adults"], youtubeUrl: "https://youtu.be/HzdpA9Bs4zw?si=Bomq53kNiRM9-jLd", duration: "1h 32m" },
  { title: "Should we kiss", topics: ["Relationship", "Children", "Young Adults"], youtubeUrl: "https://youtu.be/v4-b2mE4-Hc?si=xtRL_UV59TAT_La1", duration: "2h 36m" },
  { title: "Sold", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/mtc8MAIbsf0?si=Mtbdhqkl-WbwEiXZ", duration: "2h 8m" },
  { title: "Stale", topics: ["Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/WXJqX9l53BQ?si=dF6J8254NfnEiM-z", duration: "1h 1m" },
  { title: "Stalker", topics: ["Forgiveness/Reconciliation", "Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/Y0ZA7JIDOQA?si=Olc62YTzajBtwZV6", duration: "59m" },
  { title: "Sweet Lies", topics: ["Spiritual Enlightenment", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/blvEh6QYpsM?si=9Zx8dM9eWj2esOEh", duration: "45m" },
  { title: "Sweet Lies 2", topics: ["Spiritual Enlightenment", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/m7bP3IDGslQ?si=AOevzm7H3HrJQ71H", duration: "1h 1m" },
  { title: "Tainted Hearts", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/mdMKlAXs9jo?si=1Zhf4tlV6U2YZiVE", duration: "2h 38m" },
  { title: "Taker", topics: ["Forgiveness/Reconciliation", "Repentance/Restoration", "Brotherly Love", "Young Adults"], youtubeUrl: "https://youtu.be/i30MRTv1ngw?si=KSFT3_otlEO9ycld", duration: "1h 11m" },
  { title: "Teni", topics: ["Relationship", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/sjSOwxgxQGA?si=1B8nkYb4VD-wecM0", duration: "16m" },
  { title: "The Accountant", topics: ["Faith", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/g35L_yMEJXA?si=y4qUKtTEWuQbSgs9", duration: "1h" },
  { title: "The Bond", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/AmSGu9shGPQ?si=kKL0i42lL3nTeXUf", duration: "1h 15m" },
  { title: "The Carrier", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/YF8tpcZq0vo?si=1WM3ZyTAiKz7FW0n", duration: "1h 4m" },
  { title: "The Cruise", topics: ["Forgiveness/Reconciliation", "Spiritual Enlightenment", "Brotherly Love", "Family", "Young Adults", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/5zWzUUS7g2Y?si=9l4gz5LpcNu3QxrK", duration: "37m" },
  { title: "The Dark Side Of Sexual Addiction", topics: ["Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/7uLf1UbCxEY?si=7LpR8dnVMCE9aY-x", duration: "33m" },
  { title: "The Devil in Me", topics: ["Spiritual Enlightenment", "Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/WbspJhelWCI?si=eXaOMubQb6jBfGKa", duration: "33m" },
  { title: "The Finest Wine", topics: ["Family", "Evangelism", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/GGupMNYzuts?si=qMuPFADF9kAVHuls", duration: "1h 46m" },
  { title: "The Game", topics: ["Redemption", "Spiritual Enlightenment", "Consecration", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/GlClICpWM7E?si=cn4pngg7yVMXl0IB", duration: "2h 31m" },
  { title: "The Good Guy", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/tcvZoGxkLLk?si=LXTlK0NXZDOHd0tI", duration: "13m" },
  { title: "The Good Guy 2", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/TS7-frkDp_8?si=yBNk-bbPZ4y5FTLI", duration: "29m" },
  { title: "The Living Christ", topics: ["Redemption", "Spiritual Enlightenment", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/yoonHSG6Xxo?si=le70Kg6AovSF6QtW", duration: "1h 47m" },
  { title: "The Map", topics: ["Spiritual Enlightenment", "Purpose Fulfilment", "Young Adults"], youtubeUrl: "https://youtu.be/Qr9YHL_vjVw?si=Pw0hwARXYowZ827b", duration: "1h 30m" },
  { title: "The One I Love", topics: ["Relationship", "Young Adults", "Ministers"], youtubeUrl: "https://youtu.be/ko6yz5OGAVc?si=iv7eo1UTYaGM3Hyp", duration: "2h 13m" },
  { title: "The Oracles", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/KjE7E2zuzNk?si=1slO5aUuaGmHRdlB", duration: "1h 37m" },
  { title: "The Peep", topics: ["Addictions", "Young Adults"], youtubeUrl: "https://youtu.be/YXFsJWHVSc8?si=3Er4_Kg1X50UxCva", duration: "56m" },
  { title: "The Plug", topics: ["Young Adults", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/DP64omwWjAQ?si=5mV-JyCrxonJ75yE", duration: "2h 3m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Prodigals", topics: ["Repentance/Restoration", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/vhC8H5yghfQ?si=tFczQnRI7Ymvo8c6", duration: "1h 22m" },
  { title: "The Son of Bokaji Part 1", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/Ogbz7RDGNlU?si=mUnYmZ23C3A5ivfH", duration: "1h 18m" },
  { title: "The Son of Bokaji Part 2", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/lxPi3xgg4q8?si=88Vaxxz7w2wdEM7A", duration: "1h 27m" },
  { title: "The Unqualified", topics: ["Faith", "Hope", "Young Adults"], youtubeUrl: "https://youtu.be/gh8xc6BVn84?si=rsFP0RmsmWcdYmKX", duration: "10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Unhealed", topics: ["Relationship", "Family", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/4PcLcV9fAhw?si=TOpHYikxMOprNnBs", duration: "3h 11m" },
  { title: "Unmoved", topics: ["Faith", "Hope", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/jqM3qPko1zE?si=I2oGmYWYjwhNyVh9", duration: "13m" },
  { title: "Valentine Breakfast", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/Ui1OckjkN84?si=gFFKP6HLxoie6egg", duration: "8m" },
  { title: "Wait", topics: ["Repentance/Restoration", "Hope", "Young Adults", "Couples"], youtubeUrl: "https://youtu.be/fZ-fAv-fgpY?si=w4LY36-HbOCY224s", duration: "48m" },
  { title: "Waiting for Sarah", topics: ["Faith", "Hope", "Young Adults"], youtubeUrl: "https://youtu.be/zAOQH-X_N8o?si=TOGOAIp8AjZqsFtD", duration: "2h 36m" },
  { title: "Waiting for the Prince", topics: ["Spiritual Enlightenment", "Young Adults"], youtubeUrl: "https://youtu.be/kn67lYN4z_o?si=z2WO3-agHB2kXwXI", duration: "1h 39m" },
  { title: "Waiting Wars", topics: ["Faith", "Hope", "Family", "Young Adults", "Parents"], youtubeUrl: "https://youtu.be/JAPOtjg_5Us?si=1ghFJbEgS-II-Ka9", duration: "1h 20m" },
  { title: "Watchman", topics: ["Spiritual Enlightenment", "Family", "Young Adults"], youtubeUrl: "https://youtu.be/NF4YBboX5pk?si=trwZBISdCGc3hClx", duration: "1h 22m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Wedding Weekend 1", topics: ["Redemption", "Forgiveness/Reconciliation", "Repentance/Restoration", "Spiritual Enlightenment", "Brotherly Love", "Relationship", "Young Adults", "Couples", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/YjyTss1fyIg?si=lPMVJIn14meuqhc-", duration: "1h 13m" },
  { title: "While Waiting", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/irfPzJxMgb4?si=TPnlLyx3tXEw-WxH", duration: "54m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Will you be my wife", topics: ["Relationship", "Young Adults"], youtubeUrl: "https://youtu.be/x58IR_NlxZw?si=7km12Bfi-q_XPZoK", duration: "1h 30m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Youthful Lust", topics: ["Young Adults"], youtubeUrl: "https://youtu.be/IN4bW8tj004?si=WXQFI45bxPDdHjQz", duration: "1h 37m" },
  { title: "Corpers' Lodge", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLcJSLelhBz4cfFIx1CNJNzjrZOHOPzCKI&si=gQjr38V8OiOsU5Ma", duration: "Series" },
  { title: "Spoken", topics: ["Series", "Young Adults", "Couples"], youtubeUrl: "https://youtube.com/playlist?list=PL8yYLuZBv87TqrOEo0NCR9h9bBieFowgw&si=TAkYbuL2UyzG6Wxm", duration: "Series" },
  { title: "Gbemi", topics: ["Series", "Young Adults", "Couples"], youtubeUrl: "https://youtube.com/playlist?list=PL8mUP_K_Ak4D5h4x_hQevi2DmMhlv52x2&si=VtUQyl2C5HAuJ2kK", duration: "Series" },
  { title: "JUST US GIRLS", topics: ["Series", "Young Adults", "Relationship"], youtubeUrl: "https://youtube.com/playlist?list=PLjtl8K504z7JOwDQ_1mwxuQZRpMIBFInJ&si=7jMPcdQxQEmGQjZj", duration: "Series" },
  { title: "Him, Her & I (Season 1)", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayOLsfk2DA7AkZCeVjCYXFRy&si=bMyQxPvsM_7LUZD5", duration: "Series" },
  { title: "Him, Her & I (Season 2)", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayM3SMr3zay6yYBzTum0JfZN&si=bn7UNz9loXb23HMw", duration: "Series" },
  { title: "Him, Her & I (Season 3)", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayPjbs4nGIP9r4wtlPqc7FyY&si=9DVvCg67OPNkrFyK", duration: "Series" },
  { title: "Him, Her & I (Season 4)", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayORxYpKAsbowOwsFgD3AK1D&si=PJJ1xNTI1LQ2iElK", duration: "Series" },
  { title: "Stepping into Maggie's Shoes", topics: ["Series", "Young Adults"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayOgboqaRiVd9Gn6I7kSShaj&si=p1iXSQ_RHNsxsR0j", duration: "Series" },

  // ----- Ministers -----
  { title: "The Unhealed Prophet", topics: ["Ministers"], youtubeUrl: "https://youtu.be/A2CubclB_Po?si=FV9lcnBf4M6m1GkP", duration: "1h 27m" },
  { title: "Prophet Suddenly 4", topics: ["Ministers", "Children", "Parents"], youtubeUrl: "https://youtu.be/UjlbcOR7CfI?si=6Qq-k4G4tk-f-NBN", duration: "2h 54m" },
  { title: "The price on the Altar", topics: ["Ministers"], youtubeUrl: "https://youtu.be/LLo8pmOVk4Y?si=-iFbJr5vS29lCFqN", duration: "2h 42m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "A Little Shift", topics: ["Ministers"], youtubeUrl: "https://youtu.be/ObKJPZtxHaQ?si=k5MjRZnLFuF-Fgqc", duration: "1h 33m" },
  { title: "A phase in time", topics: ["Redemption", "Spiritual Enlightenment", "Family", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/lm8Qt-LmeJs?si=Iu44Xr0Ou2xMl06v", duration: "1h 21m" },
  { title: "Back Up", topics: ["Couples", "Ministers"], youtubeUrl: "https://youtu.be/lo5adKRWRLs?si=R7DO0t2_lYSnMmZ", duration: "1h 16m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Goodbye Church", topics: ["Repentance/Restoration", "Ministers"], youtubeUrl: "https://youtu.be/Pjt0c0hbSBM?si=m_R38rxTtQD0NMgb", duration: "1h 53m" },
  { title: "Heart Pain", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Family", "Couples", "Parents", "Ministers"], youtubeUrl: "https://youtu.be/yzR4SoStlUs?si=zsRQbOApeyLB4dpt", duration: "1h 10m" },
  { title: "I Want To Blow", topics: ["Ministers"], youtubeUrl: "https://youtu.be/82ubziNKIkA?si=RjO9XKvnF0ih1hVO", duration: "1h 14m" },
  { title: "Ile Asiri", topics: ["Family", "Ministers"], youtubeUrl: "https://youtu.be/AbpwBZEzO9w?si=yGUTUA_-hDMiPpZ0", duration: "1h 5m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Just After Wedding", topics: ["Couples", "Ministers"], youtubeUrl: "https://youtu.be/0GTwyBKH5js?si=weh1f32yG_1XOZ92", duration: "1h 42m" },
  { title: "Knotted", topics: ["Family", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/J4NWL-j93kM?si=FK5CjoH2h2lPDclu", duration: "1h 15m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mummy GO", topics: ["Couples", "Ministers"], youtubeUrl: "https://youtu.be/Bk0w5jbiv68?si=Kn4G4MFDkN3CCxnr", duration: "1h 40m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Paul And Silas", topics: ["Ministers"], youtubeUrl: "https://youtu.be/pHrvPHNonsI?si=j_K2JDfJ85jUIaxS", duration: "1h 14m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Pressed", topics: ["Ministers"], youtubeUrl: "https://youtu.be/PD4th0Oo-s8?si=WtnVaWsCMW5w4Y2j", duration: "33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Prophet Suddenly 1", topics: ["Ministers"], youtubeUrl: "https://youtu.be/QIoUmnSkOXE?si=LwJclVRUfurVk382", duration: "1h 48m" },
  { title: "Prophet Suddenly 2", topics: ["Ministers"], youtubeUrl: "https://youtu.be/lb9YjxjWOyU?si=6QUh9xvq-jIN-JVQ", duration: "2h 3m" },
  { title: "Prophet Suddenly 2 French", topics: ["Ministers"], youtubeUrl: "https://youtu.be/em_DzTf9rNg?si=uyVJSKNYc5z6NhOe", duration: "2h 3m" },
  { title: "Prophet Suddenly 3", topics: ["Ministers"], youtubeUrl: "https://youtu.be/m2BNiZWbV50?si=iKwhHMspl8wREBs6", duration: "2h 21m" },
  { title: "Smoke Without Fire", topics: ["Ministers"], youtubeUrl: "https://youtu.be/JUwsSBWt820?si=95EP4Rhwkh0ZYW4a", duration: "1h 9m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Evil In Me", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Ministers"], youtubeUrl: "https://youtu.be/_bQLdL_j_Gs?si=wyiCmz5eFE2niPI5", duration: "1h 42m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Foundation", topics: ["Redemption", "Forgiveness/Reconciliation", "Repentance/Restoration", "Spiritual Enlightenment", "Brotherly Love", "Family", "Ministers"], youtubeUrl: "https://youtu.be/ikN4woHWrBg?si=-LN6g9i85Yo8JKiV", duration: "1h 13m" },
  { title: "The Letter 1", topics: ["Spiritual Enlightenment", "Family", "Ministers"], youtubeUrl: "https://youtu.be/raS-zfy708E?si=D1Oqg_zaMLZFtYz5", duration: "1h 18m" },
  { title: "The Letter 2", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Family", "Ministers"], youtubeUrl: "https://youtu.be/T3D9MiupmnA?si=EXflAw0jdFHOInCS", duration: "1h 3m" },
  { title: "The Mandate", topics: ["Faith", "Purpose Fulfilment", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/UIBxSlXXgNE?si=8oVtIb_flbpoqi6Q", duration: "2h 10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Trampled 1", topics: ["Brotherly Love", "Family", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/eBHTA5xzJns?si=AkJ8k017Y5b1ZyZm", duration: "2h 19m" },
  { title: "Trampled 2", topics: ["Brotherly Love", "Family", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/4-XwYXa7VYA?si=NT_6fe2diKI8K7Y6", duration: "1h 36m" },
  { title: "Trampled 3", topics: ["Brotherly Love", "Family", "Couples", "Ministers"], youtubeUrl: "https://youtu.be/Km_GP4sDm7k?si=o4JUgJ4uGTYMdzDQ", duration: "2h 30m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Couples -----
  { title: "Reel or Real", topics: ["Couples"], youtubeUrl: "https://youtu.be/bm8Kw1sCbwQ?si=tiUMl6mR7KpVxYPJ", duration: "22m" },
  { title: "Rivers then fire", topics: ["Couples"], youtubeUrl: "https://youtu.be/jTlXXm9HdUY?si=ER-_9Lapqq0_aMnR", duration: "55m" },
  { title: "Before the Altar", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/P_SW3kYZ7AY?si=xG8YHHb6bwGGTToY", duration: "15m" },
  { title: "Before the Altar 2", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/3LFMK6QFHSE?si=DwQr5JXpGJEDd86r", duration: "15m" },
  { title: "Before the Altar 3", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/o6Wat9Q-bVc?si=yptEN_7YTm9HD2DW", duration: "11m" },
  { title: "Before the Altar 4", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/pC_OEv8vZew?si=n08SUfpJ8JronDzg", duration: "13m" },
  { title: "Crucible", topics: ["Couples", "Faith", "Redemption"], youtubeUrl: "https://youtu.be/Nqdh6ob3JwE?si=xT-kGVyiwagCmRBu", duration: "1h 19m" },
  { title: "Miracles in the mess", topics: ["Couples", "Repentance/Restoration"], youtubeUrl: "https://youtu.be/ktAqZfGUsUM?si=XhYamFMcekzkTBg6", duration: "1h 59m" },
  { title: "Amos 3:3", topics: ["Couples"], youtubeUrl: "https://youtu.be/GG2Qgu3xkfo?si=b-8iuijNvaHM2cJc", duration: "1h 2m" },
  { title: "Anchor", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/TTIYbccZvM4?si=86k6IwHxrbuN2Ajc", duration: "1h 14m" },
  { title: "Baby Girl", topics: ["Couples"], youtubeUrl: "https://youtu.be/xOfOveo0tTc?si=uzIoYU4eslYQ4Iaz", duration: "1h 23m" },
  { title: "Back to Eden2", topics: ["Redemption", "Family", "Couples"], youtubeUrl: "https://youtu.be/Xy1VT9iOXlI?si=qq27l2WydpK7TlKw", duration: "1h 25m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Beloved", topics: ["Redemption", "Faith", "Spiritual Enlightenment", "Couples"], youtubeUrl: "https://youtu.be/QNDG28qKftg?si=4szc7kVm1bXp4ZO9", duration: "2h 9m" },
  { title: "Black Marriage", topics: ["Couples"], youtubeUrl: "https://youtu.be/kMno3P0irlM?si=K8Osww48AQlod46b", duration: "1h 38m" },
  { title: "Bosom Fire", topics: ["Couples"], youtubeUrl: "https://youtu.be/i2MqfDPcixw?si=dI8i2LoeTaKO_wsj", duration: "1h 4m" },
  { title: "Broken Piece", topics: ["Couples"], youtubeUrl: "https://youtu.be/IOvZ928iDLQ?si=RiY_DtXVevVeUZvP", duration: "1h" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Cloak of Secrecy", topics: ["Forgiveness/Reconciliation", "Relationship", "Couples"], youtubeUrl: "https://youtu.be/k9sEB8SK9rA?si=JjVWVvL4LVS7jaLh", duration: "28m" },
  { title: "Couples in His Presence", topics: ["Couples"], youtubeUrl: "https://youtu.be/aaEtrGW93_w?si=r8Tdgk7n0MFLN0Z2", duration: "1h 34m" },
  { title: "Crack in the Wall", topics: ["Family", "Couples"], youtubeUrl: "https://youtu.be/-9CWib2c-Rs?si=pv5m4GzbqRjA2NfI", duration: "2h 35m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Ego", topics: ["Couples"], youtubeUrl: "https://youtu.be/cxuEYzujrvI?si=gCDxctA5avinZ3o6", duration: "1h 38m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Faithful Promises", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/pklZXRDhyPo?si=3rKjjgkak4vKxtmm", duration: "1h 17m" },
  { title: "Family riot", topics: ["Redemption", "Forgiveness/Reconciliation", "Repentance/Restoration", "Family", "Children", "Couples", "Parents"], youtubeUrl: "https://youtu.be/9kdNwgurF68?si=IfMQQm4aFgSZsG1q", duration: "1h 6m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Fire in the house S1", topics: ["Family", "Couples"], youtubeUrl: "https://youtu.be/pluzk0P2LOg?si=lOvKBJg_lyEIraqm", duration: "3h 10m" },
  { title: "Fire in the house S2", topics: ["Family", "Couples"], youtubeUrl: "https://youtu.be/DIzU3yq7XDc?si=xrfYULWsDmjRgOZw", duration: "3h 32m" },
  { title: "Fix Us", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/q8ye8LjuumU?si=n01mOHiIrmzGRp8N", duration: "1h 9m" },
  { title: "Flowers and Spikes", topics: ["Couples"], youtubeUrl: "https://youtu.be/aCeeoTeDWyE?si=j_Pd2CR_IIHSd90h", duration: "2h 23m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Glitters", topics: ["Couples"], youtubeUrl: "https://youtu.be/6kxTpNBRbQw?si=mofW03CaMTGn9t8P", duration: "1h 21m" },
  { title: "Gracious Couple", topics: ["Couples"], youtubeUrl: "https://youtu.be/1OiUp90s5_s?si=U0jLjfyQQ9G0ueJ5", duration: "1h 50m" },
  { title: "Haunting Vows", topics: ["Couples"], youtubeUrl: "https://youtu.be/fcZhcPdmBXY?si=yhRG3bwrQGrNTVoG", duration: "2h 26m" },
  { title: "Head Cover", topics: ["Spiritual Enlightenment", "Family", "Couples"], youtubeUrl: "https://youtu.be/jUp0x_Quo5c?si=MMVu4rfGeTcobsQs", duration: "29m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "House 57", topics: ["Couples"], youtubeUrl: "https://youtu.be/er8uyKTv0es?si=02l7GloKehztrHHS", duration: "1h 10m" },
  { title: "Ina Abe Aso", topics: ["Couples"], youtubeUrl: "https://youtu.be/lQSFm1GMn5o?si=3KHZdNfpY8Nt8_8o", duration: "1h 8m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Legal Affliction", topics: ["Couples"], youtubeUrl: "https://youtu.be/YSzzRJLFYng?si=uUI54TR8p5apD4aO", duration: "3h 2m" },
  { title: "Life of the Billows", topics: ["Family", "Couples"], youtubeUrl: "https://youtu.be/yGzdzBKwTC0?si=tX_HcrHx8f2VFcBK", duration: "1h 17m" },
  { title: "Love in the Guestroom", topics: ["Couples"], youtubeUrl: "https://youtu.be/FKe3cVTo4Fs?si=k-pwPHrBiI18dBXV", duration: "1h 39m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Miracle next Door", topics: ["Hope", "Family", "Couples"], youtubeUrl: "https://youtu.be/npKQx1KMDdE?si=eW7VQ2W-LhysGjB-", duration: "1h 45m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Neema", topics: ["Forgiveness/Reconciliation", "Family", "Couples"], youtubeUrl: "https://youtu.be/Bz4luJzigj0?si=-LHACZIHZqS-xLrp", duration: "2h 13m" },
  { title: "Not my Spouse", topics: ["Couples"], youtubeUrl: "https://youtu.be/ZZp4TCz09aA?si=uoXKgFllWL-_OnIn", duration: "1h 24m" },
  { title: "Off track", topics: ["Forgiveness/Reconciliation", "Repentance/Restoration", "Family", "Couples"], youtubeUrl: "https://youtu.be/4kWAmFGZjoc?si=TCgj-rBOpZ3noOgM", duration: "2h 33m" },
  { title: "Open Heaven", topics: ["Spiritual Enlightenment", "Couples"], youtubeUrl: "https://youtu.be/61DJZZxXL_g?si=8RmbyacnDgG4Fhix", duration: "1h 21m" },
  { title: "Pique", topics: ["Forgiveness/Reconciliation", "Family", "Couples"], youtubeUrl: "https://youtu.be/g-GjwHpXlVs?si=ZNsLG_9L9lIy6XJa", duration: "1h 18m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Project Steve", topics: ["Family", "Couples"], youtubeUrl: "https://youtu.be/GXIgBgqV3e8?si=ii04G4zHF5ruym66", duration: "1h 48m" },
  { title: "Quiet Crack", topics: ["Couples"], youtubeUrl: "https://youtu.be/Zdr-qYXgyUg?si=UHvEVmeBXj1lFxCr", duration: "1h 16m" },
  { title: "Rot", topics: ["Couples"], youtubeUrl: "https://youtu.be/33pVBlFAKE0?si=RwtFUq2qLDMs30wF", duration: "1h 28m" },
  { title: "Second Vow", topics: ["Couples"], youtubeUrl: "https://youtu.be/lwFM9LBkywQ?si=2PxGiZMzp_L3TrVS", duration: "1h 31m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "She Build", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/cN6Odh9rg6w?si=ybYt0uWviVcnHvGW", duration: "19m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Smoke And Mirrors", topics: ["Spiritual Enlightenment", "Couples"], youtubeUrl: "https://youtu.be/HDo6yHGl_YE?si=epEkTPZIQ-lFzwXA", duration: "39m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Bleeding Heart", topics: ["Couples"], youtubeUrl: "https://youtu.be/OzK3gChm57s?si=Vi3XL6NRyGpzwvRe", duration: "2h 12m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Encounter", topics: ["Forgiveness/Reconciliation", "Couples"], youtubeUrl: "https://youtu.be/T9k8fqtAEH8?si=Xt9xCYvZN8rx_3oA", duration: "1h 27m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Godly Couple", topics: ["Relationship", "Couples"], youtubeUrl: "https://youtu.be/lCjnLKOT2VQ?si=puoAwp36uE5jGec7", duration: "2h 29m" },
  { title: "The Gracious Couple", topics: ["Children", "Couples", "Parents"], youtubeUrl: "https://youtu.be/1OiUp90s5_s?si=XR-RGJ0-dutLCz9C", duration: "1h 50m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Mummy Boy", topics: ["Spiritual Enlightenment", "Family", "Couples"], youtubeUrl: "https://youtu.be/SchLBE6MCNU?si=FhU6FWr2BiAGMJPL", duration: "2h 35m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Repair Room", topics: ["Couples"], youtubeUrl: "https://youtu.be/QQ3CFEwRDcs?si=YS-sy3bd1AOaL4-e", duration: "1h 27m" },
  { title: "The Waiter", topics: ["Spiritual Enlightenment", "Couples"], youtubeUrl: "https://youtu.be/5DTG_9ETCq4?si=7Ri8U1JM1Q_OOPMy", duration: "1h 42m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Twelve Forty Five", topics: ["Couples"], youtubeUrl: "https://youtu.be/egXtAwSlTK8?si=O1VYm2nZtSd2iQhi", duration: "1h 10m" },
  { title: "Unclear", topics: ["Couples"], youtubeUrl: "https://youtu.be/OLH9mm4dOPY?si=xH0FBH6qN3ePDo7z", duration: "13m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Waiting on Ice", topics: ["Couples"], youtubeUrl: "https://youtu.be/Q3symI5Uh1c?si=VAJVqFjyF3d4m_08", duration: "1h 20m" },
  { title: "Walking on Water", topics: ["Purpose Fulfilment", "Couples"], youtubeUrl: "https://youtu.be/QvXaNZ8twGk?si=zizvHdNtdO8r6LFS", duration: "1h 27m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Wedding Weekend 2", topics: ["Redemption", "Faith", "Spiritual Enlightenment", "Brotherly Love", "Relationship", "Couples"], youtubeUrl: "https://youtu.be/ZO0TwAH_Q8c?si=QgO1Im_HhFtDx-ze", duration: "2h 14m" },
  { title: "Were Meji", topics: ["Couples"], youtubeUrl: "https://youtu.be/vkJZHLg6lao?si=r1vhu2vZQh6B4l8o", duration: "10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Stranded", topics: ["Series", "Couples"], youtubeUrl: "https://youtube.com/playlist?list=PLcJSLelhBz4dlJTcdh9lUCj__ziemESdX&si=52Xl0qa-tw5Ol9v-", duration: "Series" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "He is all that matters", topics: ["Series", "Couples"], youtubeUrl: "https://youtube.com/playlist?list=PL8yYLuZBv87RNT57JPvZAa-sFhACem7tl&si=3IpsMNQXFF_N9QDP", duration: "Series" },
  { title: "Husband and Wife", topics: ["Series", "Couples"], youtubeUrl: "https://youtube.com/playlist?list=PLi7v8rgaSO0MgtiIBiAhvjj976EIcnAa4&si=rOuCCREao4eazgsr", duration: "Series" },

  // ----- Redemption -----
  { title: "Slave at fifty", topics: ["Redemption", "Forgiveness/Reconciliation"], youtubeUrl: "https://youtu.be/6Be3PZJs5vg?si=ViNF3KB4RI1IeClT", duration: "2h" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Are", topics: ["Redemption", "Repentance/Restoration"], youtubeUrl: "https://youtu.be/aO8DnpFqlLw?si=3nL48koOwlfRogtq", duration: "22m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "By my record", topics: ["Redemption", "Forgiveness/Reconciliation"], youtubeUrl: "https://youtu.be/BeECDrIXwk8?si=hy3zaDm00rAjF4Ae", duration: "1h 35m" },
  { title: "D Wedding Dress", topics: ["Salvation", "Redemption"], youtubeUrl: "https://youtu.be/Jxp2l0LrQeA?si=9gaZUc66WYE4Q49cD", duration: "1h 50m" },
  { title: "Dead Life", topics: ["Redemption"], youtubeUrl: "https://youtu.be/jUutsEXI3Dg?si=smWmEC3BVZh_UNtF", duration: "1h 32m" },
  { title: "Death Sentence", topics: ["Salvation", "Redemption", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/nEMQPFuUiUo?si=j4LosJ-ePp8uXU0Y", duration: "1h 20m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Ferocious - Arijagba", topics: ["Redemption", "Family"], youtubeUrl: "https://youtu.be/iyf6UsuNQFQ?si=ST24YR1HQTeP7gdg", duration: "1h 17m" },
  { title: "Finest Wine", topics: ["Redemption"], youtubeUrl: "https://youtu.be/GGupMNYzuts?si=FpbNlNhNCUlyjCLZ", duration: "1h 46m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Hidden Treasure", topics: ["Redemption", "Faith", "Hope"], youtubeUrl: "https://youtu.be/nCZWt3GwPPg?si=XTDy6eXQ-LFnQWLv", duration: "50m" },
  { title: "Idajo Iku", topics: ["Salvation", "Redemption", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/CWFI46UhKuI?si=aNf-Rq8tCPtKYdiQ", duration: "1h 20m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Jesus DNA", topics: ["Redemption", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/Y2jPZW4gUqo?si=8hqwbY0XrldBHrFZ", duration: "24m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mercy Seat", topics: ["Redemption", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/3rwbfVOqd00?si=CLznvwzVo8B_-CfP", duration: "1h 10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Reset", topics: ["Redemption"], youtubeUrl: "https://youtu.be/XZ39lNxzv8Q?si=SOsCrVddVzoWxKbw", duration: "1h 53m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Rupanta", topics: ["Redemption", "Faith", "Family"], youtubeUrl: "https://youtu.be/P11mKgy8Mqw?si=f_UQJUIPF43Mr_hd", duration: "1h 36m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Victory over sin", topics: ["Redemption"], youtubeUrl: "https://youtu.be/n1IVn6HIuig?si=QdlIAurwHuBLzQUx", duration: "1h 49m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Forgiveness/Reconciliation -----
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "A friend of God", topics: ["Forgiveness/Reconciliation", "Spiritual Enlightenment", "Brotherly Love"], youtubeUrl: "https://youtu.be/K-QctMGWiFE?si=77mEj0b3EPYZ-Dau", duration: "1h 4m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Parents -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mum Said So", topics: ["Family", "Children", "Parents"], youtubeUrl: "https://youtu.be/FUn7HrUz01A?si=WzKoP3tCqKkU3_9O", duration: "15m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mother Or Murderer", topics: ["Parents"], youtubeUrl: "https://youtu.be/XrrslTYTzY4?si=uzRXORsWIwgi5mdB", duration: "1h 57m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "My Mummy Hates Me", topics: ["Family", "Children", "Parents"], youtubeUrl: "https://youtu.be/f3hTbEHn1fw?si=1OvHS9H4JN7X9dbk", duration: "1h 4m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Parents Fight 1", topics: ["Children", "Parents"], youtubeUrl: "https://youtu.be/X8u1jvKLGjc?si=PJCq7gG5n1eFP6BK", duration: "14m" },
  { title: "Parents Fight 2", topics: ["Children", "Parents"], youtubeUrl: "https://youtu.be/lsx_5JyPl2w?si=JEUie-x5qHtKE8AG", duration: "12m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Addictions -----
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Beautiful Pit", topics: ["Addictions"], youtubeUrl: "https://youtu.be/5RtFZppOS6o?si=jA7LcX-TAJxwt9Fo", duration: "51m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Relationship -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Masked Lady", topics: ["Relationship"], youtubeUrl: "https://youtu.be/_8JVSLe0UmM?si=DuRM_l2PYMXPt1ZA", duration: "1h 24m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Family -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Back To Bethel", topics: ["Spiritual Enlightenment", "Family"], youtubeUrl: "https://youtu.be/DqUB0sSzIjY?si=FwdRYmAyjkBPHbnx", duration: "1h 22m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Beyond the Crack", topics: ["Family"], youtubeUrl: "https://youtu.be/gP2_glNIgxw?si=4zPKuOdXvm04w4B7", duration: "1h 1m" },
  { title: "Cold", topics: ["Spiritual Enlightenment", "Family"], youtubeUrl: "https://youtu.be/YYPIeX_Yaac?si=sjllb1VGRZT_ZNp7", duration: "52m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Jonah", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Purpose Fulfilment", "Family"], youtubeUrl: "https://youtu.be/PLfzYuq_8l4?si=AuWihiHkt58uVokn", duration: "1h 52m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Shadows", topics: ["Repentance/Restoration", "Spiritual Enlightenment", "Family"], youtubeUrl: "https://youtu.be/zS8xCFzVGEc?si=ubopQLPnIeyWyOEt", duration: "1h 38m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Manager", topics: ["Faith", "Hope", "Family"], youtubeUrl: "https://youtu.be/_6hVtOajjZI?si=K7dzXjgqnlF1viOA", duration: "1h 10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "House on fire", topics: ["Series", "Family"], youtubeUrl: "https://youtube.com/playlist?list=PLcJSLelhBz4fG9coYDaFnuNhAHZI-XL44&si=Lhhk_6KiVBSdJXoj", duration: "Series" },
  { title: "The Bensons", topics: ["Series", "Family"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayPeuqcEyaj_Unw3w2MxwWJr&si=EDjXEKeFl1d3rn06", duration: "Series" },

  // ----- Repentance/Restoration -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Borrowed Time", topics: ["Repentance/Restoration"], youtubeUrl: "https://youtu.be/Ydga9Jf6B80?si=HtDbtAm4idfvHe_C", duration: "40m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Shutdown", topics: ["Repentance/Restoration", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/wwxp0oqECZY?si=EyT4Om2nt1sV7RZy", duration: "1h 40m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Spiritual Enlightenment -----
  { title: "Faith that moves mountains", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/jhioSiVp_WY?si=KFlJm3guAuY_8pW4", duration: "10m" },
  { title: "A fi koo ku", topics: ["Faith", "Spiritual Enlightenment", "Hope"], youtubeUrl: "https://youtu.be/Dcpuhf13ulU?si=JDumz6UGKKlyaB1F", duration: "1h 13m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "After Amen", topics: ["Faith", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/JxIl567nJ7Q?si=8I1jlMCSmbTQdZH8", duration: "1h 48m" },
  { title: "Amidst Affliction", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/ln3myUUjif0?si=anQRqhdqLT1Se_dh", duration: "49m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Bro Julius", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/APagAhws-ok?si=7plM62lAFZ6IJn8b", duration: "22m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Cold Coal", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/xn1cBY1qNic?si=A4BsWTE0MrZz95hT", duration: "1h 46m" },
  { title: "Dead", topics: ["Faith", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/zrDuZyPwGmc?si=kWB658MzXFmtnZNj", duration: "20m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mura Ile", topics: ["Spiritual Enlightenment", "Hope"], youtubeUrl: "https://youtu.be/1QmpoZR_0x0?si=IaYH0Hrhq54iZKlm", duration: "1h 5m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Delivery Men", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/GguS995RtA8?si=Rr7k2DE7PrUEYIt8", duration: "34m" },
  { title: "The Delivery Men 2", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/XP3EUTOZw0c?si=dJLl-M0YTeNqAj2Y", duration: "1h 8m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Password", topics: ["Faith", "Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/UFXS0UtmU0I?si=WffzTWmk3SR8bpyL", duration: "1h 31m" },
  { title: "The Players", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/ha7HUIihXEk?si=sGnz-U-hAvHapTi8", duration: "1h 7m" },
  { title: "The Reneger", topics: ["Spiritual Enlightenment", "Consecration"], youtubeUrl: "https://youtu.be/lsF9X0rq_Do?si=56-xhPn_d15HHkCU", duration: "1h 33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "When God Becomes Stingy", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/AXDSGfQkdbk?si=jlm6uivxhej6qHk2", duration: "1h 31m" },
  { title: "Why The Vacuum", topics: ["Spiritual Enlightenment"], youtubeUrl: "https://youtu.be/a61My4s4-zQ?si=qMrdpHRtoKsVKqKm", duration: "11m" },
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Purpose Fulfilment -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Iranse Oba", topics: ["Purpose Fulfilment"], youtubeUrl: "https://youtu.be/XIUzys61bbo?si=wGrlXn80-g5UG4To", duration: "59m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Blueprint", topics: ["Purpose Fulfilment"], youtubeUrl: "https://youtu.be/Wr1_bjZu-v8?si=3Us8XDp-ZSNmBW4f", duration: "1h 58m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Children -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Arrows N Quivers S1", topics: ["Children"], youtubeUrl: "https://youtu.be/XtvC1oL3wUA?si=UsaqjizrxjKEunwZ", duration: "11m" },
  { title: "Arrows N Quivers S2", topics: ["Children"], youtubeUrl: "https://youtu.be/enaTfqAxj2s?si=KNJE_DDgiT9WRnvi", duration: "38m" },
  { title: "Arrows N Quivers S3", topics: ["Children"], youtubeUrl: "https://youtu.be/KibU5zgZaac?si=qD1VtzenwZXUoQS8", duration: "47m" },
  { title: "Arrows N Quivers S4", topics: ["Children"], youtubeUrl: "https://youtu.be/LAa7TtU71IQ?si=MlStroNeWRm494N8", duration: "43m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Conspiracy", topics: ["Children"], youtubeUrl: "https://youtu.be/ru6d0ZRC_Tw?si=U-YbUcS5wXXbGM8f", duration: "11m" },
  { title: "Devotion", topics: ["Children"], youtubeUrl: "https://youtu.be/8ofvGMDiBzU?si=acyNPPCXU8NT1hM4", duration: "9m" },
  { title: "Disobedience", topics: ["Children"], youtubeUrl: "https://youtu.be/dtWEvfUz4nM?si=4-QPUzAAF3Cw3a6y", duration: "10m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Full Package", topics: ["Children"], youtubeUrl: "https://youtu.be/SANsyBzqhes?si=Fi5lJ6qdK15Q7SHa", duration: "19m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Mum's need", topics: ["Children"], youtubeUrl: "https://youtu.be/7XMSWL28Lhc?si=X1e-PSI8K-Jk_Ujt", duration: "8m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Papa Peter", topics: ["Children"], youtubeUrl: "https://youtu.be/rPSdy5Mve8U?si=YPcHkUSxzOP1OFk8", duration: "33m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Read And Pray", topics: ["Children"], youtubeUrl: "https://youtu.be/BdzZ-gtrnRM?si=XYgJltUbccVNFSW9", duration: "15m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Specific Assignment", topics: ["Children"], youtubeUrl: "https://youtu.be/ppKAiK1LDZM?si=1PYY9UTXtn2dB3ug", duration: "11m" },
  { title: "The Bully", topics: ["Children"], youtubeUrl: "https://youtu.be/gNzr-9U6BpU?si=pzOWP7TRZbZu1nDZ", duration: "6m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The princes and the princesses 1", topics: ["Children"], youtubeUrl: "https://youtu.be/CRAIJxd4opg?si=1hxRxCqu_kRO6fdm", duration: "18m" },
  { title: "The Young Missioners 1", topics: ["Children"], youtubeUrl: "https://youtu.be/70YfoSM4SbI?si=7wxBZ9JX4uPeFIjv", duration: "1h 16m" },
  { title: "The Young Missioners 2", topics: ["Children"], youtubeUrl: "https://youtu.be/-23gyAXPN1I?si=KYkBEYUIXXi6Y8ye", duration: "1h 6m" },
  { title: "When Mum Is Sick", topics: ["Children"], youtubeUrl: "https://youtu.be/RXXXSkvmXZQ?si=pRGSsbZ-PunW6BoB", duration: "9m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Deep Thots Children Movies", topics: ["Series", "Children"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayPixGfkepF-NCpU-N10wcI-&si=iQPO7TmY-buqHPQM", duration: "Series" },
  { title: "The Book of Revelation", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/pMD0qYm082M?si=NYkoLbBWp-eiIX8w", duration: "1h 20m" },
  { title: "God with us", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/1EH34j00B2M?si=sEK4X5_gIqWD0gpK", duration: "1h 28m" },
  { title: "The Lion of Judah", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/CrlxoCU7Yh4?si=tWSRDSEwhC87r_E4", duration: "1h 27m" },
  { title: "The Prodigal Son", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/HbrTbDTXXM8?si=urqnJKgICaf6qbGQ", duration: "30m" },
  { title: "Samson", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/vzR6AvjmS3A?si=CDmZ9yY0IFC2PmC5", duration: "37m" },
  { title: "Saul", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/z5qdvmg--9o?si=-0I16uSqieSH_fj6", duration: "31m" },
  { title: "Gideon", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/Ie4qHFw7EKY?si=Gu1xNSVdVpaecuCS", duration: "28m" },
  { title: "Noah", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/jV2CX7O01rw?si=ZvHZwdy51vc0vd2A", duration: "35m" },
  { title: "Moses", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/8nUF1tuIJYU?si=3Gy2G5TW8dy77TOR", duration: "24m" },
  { title: "The Pilgrim's Progress", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/ksu-zTG9HHg?si=yUuG6K3t_mria2iS", duration: "1h 53m" },
  { title: "Joseph", topics: ["Animations", "Children"], youtubeUrl: "https://youtu.be/Aqk-5gvyHCM?si=TGNhqQvVUd5Dd7gM", duration: "1h 30m" },

  // ----- Faith -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Eva", topics: ["Faith", "Hope"], youtubeUrl: "https://youtu.be/4xdqeStiXP0?si=3KZhDos_whJ8Dz7F", duration: "1h 8m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "My Conclusion", topics: ["Faith"], youtubeUrl: "https://youtu.be/e-hlKjQpE2s?si=myr1RaCdoxk87WLW", duration: "1h 27m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Train", topics: ["Faith"], youtubeUrl: "https://youtu.be/5mFvb62VMkc?si=fDzlHKB7ffuqzqg0", duration: "2h 44m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "When God is silent", topics: ["Faith", "Hope"], youtubeUrl: "https://youtu.be/E4HdiMNLh0w?si=lk-MJIBLuekHNNXY", duration: "1h 58m" },
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Brotherly Love -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Two sons", topics: ["Brotherly Love"], youtubeUrl: "https://youtu.be/voYIai9XriA?si=V03rWx5cfRZwriWU", duration: "1h 14m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Hope -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Consecration -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Son of Bokaji 1", topics: ["Consecration"], youtubeUrl: "https://youtu.be/Ogbz7RDGNlU?si=oA7wN0FjZCrGrAQg", duration: "1h 18m" },
  { title: "Son of Bokaji 2", topics: ["Consecration"], youtubeUrl: "https://youtu.be/lxPi3xgg4q8?si=o0uAjpXTvCWj8D4-", duration: "1h 27m" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Salvation -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Emi Fun Emi", topics: ["Salvation"], youtubeUrl: "https://youtu.be/-amO5OpTHEo?si=UnovT2fuS98IxPDU", duration: "1h 23m" },
  { title: "Esin Ajoji", topics: ["Salvation"], youtubeUrl: "https://youtu.be/QrQVzDTa5Bc?si=iBP46_XpVbxTrHeJ", duration: "1h 52m" },
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "O To Ge", topics: ["Salvation"], youtubeUrl: "https://youtu.be/fT2yTFlvLsI?si=qOIX-3-lZ7_Igokl", duration: "1h 46m" },
  { title: "Olugbala Gbami", topics: ["Salvation"], youtubeUrl: "https://youtu.be/kNLHVPxmkdg?si=YpBFwZcXgwZf-B4d", duration: "1h 27m" },
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Evangelism -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "The Ambassador", topics: ["Evangelism"], youtubeUrl: "https://youtu.be/4IkX-u9-E9c?si=fBJN7NqjcnHtUowv", duration: "23m" },
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Old Classics -----
  { title: "Twelve Forty-Five", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/egXtAwSlTK8?si=oVEebyreU2PsfQhH", duration: "1h 10m" },
  { title: "Oruko Nla", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/8A54AUwtyGE?si=uNPM1UoIY2ncNjda", duration: "57m" },
  { title: "Amos 3:3", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/GG2Qgu3xkfo?si=R-HeQsf0_sVmFtAu", duration: "1h 2m" },
  { title: "Tribulation Night", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/PC8h5XkwL6Q?si=VoQ-HcOx9cDHCCas", duration: "1h 43m" },
  { title: "Ignition", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/qvw1zBfkrH0?si=f5J-PVRGuyhoAgKZ", duration: "1h 33m" },
  { title: "The Valley of Decision", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/mgr1F3IAFR0?si=JzyiNE2zCMG1VkmA", duration: "1h 22m" },
  { title: "Agbara Ajoji", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/szPPLhEVckU?si=XGXlb1uhwSrRM_aq", duration: "1h 17m" },
  { title: "Ija Ominira", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/d_kbM3jSdgc?si=hHkjbbDSteHKmDCc", duration: "1h 33m" },
  { title: "Victory over sin", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/n1IVn6HIuig?si=G51JwwIePgih-Bj7", duration: "1h 49m" },
  { title: "The Foundation", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/ikN4woHWrBg?si=M9fY7xQrMWrcgbmx", duration: "1h 13m" },
  { title: "All for nothing", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/zgBtf1_0vk0?si=P4cnYWeRVO8qIbij", duration: "1h 28m" },
  { title: "Destiny for Sale", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/IZS1n9wIWvM?si=4buzQw-OX6pHbNDK", duration: "1h 29m" },
  { title: "Dirty Mirror", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/RGGx4EcEvzE?si=L9y2EU54pVcym1fE", duration: "1h 15m" },
  { title: "My Conclusion", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/e-hlKjQpE2s?si=mUQGu-oomd__pk8n", duration: "1h 27m" },
  { title: "Waiting for Time", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/oMcUfPkX2iY?si=FyLmWTaMrJRE06L2", duration: "1h 50m" },
  { title: "Gone back home", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/MGg6C4XwNXs?si=gdWinMffZ_aFa6Rb", duration: "1h 40m" },
  { title: "O to gee", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/fT2yTFlvLsI?si=5-a0c4FHNqPKk577", duration: "1h 46m" },
  { title: "Too much for God", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/1TnzBj0rPA0?si=CT3cS7zI-qgwwQwg", duration: "1h 50m" },
  { title: "Olori Ota", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/V_VlHt8CeNE?si=kA2vlkmUtzRZOhHq", duration: "1h 52m" },
  { title: "Fire Extinguisher", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/pFHanM8hp64?si=QWqJmFFlSAET-12R", duration: "1h 16m" },
  { title: "Once upon a time", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/bLHdO0TO6wE?si=Y1JEfsB_WUxs1zkO", duration: "1h 41m" },
  { title: "Unknown Curse", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/WVpbMPyIJuA?si=8HLJTtYGD351jmkG", duration: "1h 41m" },
  { title: "On Strike", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/DJ508kts1Bw?si=ms-pEqg6b3TlyyRQ", duration: "1h 25m" },
  { title: "Omije Kikoro Ep1", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/NRw0QGvrLm8?si=D6I1Y7mVtSV-LuFs", duration: "47m" },
  { title: "Omije Kikoro Ep2", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/tQjs4WLJ4G4?si=jpUK0Yz51Ra0Gr5F", duration: "46m" },
  { title: "Yipada (Omije Kikoro Ep3)", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/edU3dJK9rSo?si=ABFHHzxaRmn-bNWN", duration: "45m" },
  { title: "Yipada (Omije Kikoro Ep4)", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/r_Mhssr4x5Y?si=HVY7RWORkDS6hMcR", duration: "44m" },
  { title: "Akowe Oro", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/mBamW-HvgBY?si=4Va2_cwyNbXIA-b0", duration: "1h 24m" },
  { title: "My Birthright", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/kJGrXFTYY6o?si=lOwdjXmp3zsXAE6R", duration: "1h 25m" },
  { title: "Olugbala Gbami", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/kNLHVPxmkdg?si=yorH-T7qHkg1zQ59", duration: "1h 27m" },
  { title: "Iwe Ase", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/XWWu59DXxfM?si=1u9iug1uVaSDMPQF", duration: "1h 18m" },
  { title: "Ogun Ibi mi", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/DKKCFhVU6l0?si=yp7cqa02jyTjx8vM", duration: "1h 26m" },
  { title: "Emi fun emi", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/-amO5OpTHEo?si=9I8penlvhqVjXvAx", duration: "1h 23m" },
  { title: "The Missing Link", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/Szh6eX_1AUs?si=CwngNtyHH0SKRwAg", duration: "1h 15m" },
  { title: "Egun Aimo", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/r5dnzqgKkMU?si=Mp4PSZqayr3A7b-8", duration: "1h 24m" },
  { title: "Ibidamipe", topics: ["Old Classics"], youtubeUrl: "https://youtu.be/pKN-wyTH5Oo?si=jr_CRW5UPF5BZFxH", duration: "2h 23m" },
  { title: "Mount Zion Classics", topics: ["Old Classics"], youtubeUrl: "https://youtube.com/playlist?list=PLcJSLelhBz4cOTyxaAXzUrHHwADyDRumY&si=qJpFS0gy3FK-mX2l", duration: "Series" },

  // ----- Series -----
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Abattoir", topics: ["Series"], youtubeUrl: "https://youtube.com/playlist?list=PL8mUP_K_Ak4DeQ60LI5uWj8NJ7k9OgFkc&si=pDJRhtkbkcnjLR1S", duration: "Series" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "Abejoye", topics: ["Series"], youtubeUrl: "https://youtube.com/playlist?list=PLcJSLelhBz4fAZmh0dEIb-Gyx-TqQOTMl&si=iAEib9SlJoep7gef", duration: "Series" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  { title: "3 is a Crowd", topics: ["Series"], youtubeUrl: "https://youtube.com/playlist?list=PLK6Mk0Q9FayO5V0pzVKr0S-oIKwmjcTu3&si=A_8BfbuJXC14fVUJ", duration: "Series" },
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Animations -----
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)
  // (already listed above — appears on multiple shelves via its topics array)

  // ----- Newly found -----
  { title: "When Past Knocks", topics: ["Newly found"], youtubeUrl: "https://youtu.be/NrirQtwLUio?si=E7SYylzU1RxwpI3g", duration: "57m" },
  { title: "The Last Witness", topics: ["Newly found"], youtubeUrl: "https://youtu.be/pnVk5UFjBrs?si=n4yOU37F3_rbeYjE", duration: "1h 15m" },
  { title: "Behind Her", topics: ["Newly found"], youtubeUrl: "https://youtu.be/C4UnPAhSyUs?si=yFtONKqkxp2z85B-", duration: "1h 35m" },
  { title: "When Love fails", topics: ["Newly found"], youtubeUrl: "https://youtu.be/ANEpEqXHzNs?si=m5MTcQgB-D4Pry4Z", duration: "2h 6m" },
  { title: "God in the room", topics: ["Newly found"], youtubeUrl: "https://youtu.be/M2mJQH-luxw?si=wR_qhF2bgILDS3Ty", duration: "1h 22m" },
  { title: "Hamtoria", topics: ["Newly found"], youtubeUrl: "https://youtu.be/JOsrX_FY_8M?si=sfkZ_QZbUEX0atHq", duration: "1h 17m" },
  { title: "The Baby Christian", topics: ["Newly found"], youtubeUrl: "https://youtu.be/ZNebZZGjCO4?si=0G5IExi7YsOKSBYA", duration: "1h 30m" },
  { title: "The Voice I rejected", topics: ["Newly found"], youtubeUrl: "https://youtu.be/8BTixsGW54c?si=W1DdxaTvFOze43bb", duration: "1h 4m" },
  { title: "Captured", topics: ["Newly found"], youtubeUrl: "https://youtu.be/JtphIb6IHUs?si=FqLcDNKOOuVTwiFH", duration: "1h 23m" },
  { title: "Double faced", topics: ["Newly found"], youtubeUrl: "https://youtu.be/DXLYbmrTWiE?si=8O8dPVKu7saTVf_3", duration: "2h 12m" },
  { title: "Through the flames (Series)", topics: ["Newly found"], youtubeUrl: "https://youtube.com/playlist?list=PLFLufDmNZtJo&si=KDPjWqdpBEgovtKm", duration: "Series" },

  // ----- New Releases -----
  { title: "In-Between", topics: ["New Releases"], youtubeUrl: "https://youtu.be/8skydzCRvVU?si=0nVs1sS9775qI5tr", duration: "1h 32m" },
  { title: "The Follow-up Coordinator", topics: ["New Releases"], youtubeUrl: "https://youtu.be/iyAeVpMEb1c?si=2-0Mxs4UJZoip2eP", duration: "52m" },
  { title: "The Corridor", topics: ["New Releases"], youtubeUrl: "https://youtu.be/BYlv-xS4RnA?si=FpPYoecl_VyV8E60", duration: "1h 1m" },
  { title: "Indelible", topics: ["New Releases"], youtubeUrl: "https://youtu.be/sqCkbuvQS9g?si=rhTjUszHp7OoHiG5", duration: "1h 54m" },
  { title: "Nora", topics: ["New Releases"], youtubeUrl: "https://youtu.be/KCpWrmUFRnM?si=1vw0ae29E8mMpLND", duration: "1h 37m" },
  { title: "The Evangelist", topics: ["New Releases"], youtubeUrl: "https://youtu.be/owFodw12DeE?si=7Rxurpl0G3XoqBa0", duration: "1h 58m" },
  { title: "Home Coming", topics: ["New Releases"], youtubeUrl: "https://youtu.be/Awjb2VlYbcE?si=LjN1D0CBj1c9S3jg", duration: "1h 9m" },
  { title: "Miracle in the Mess 2 (Part 1)", topics: ["New Releases"], youtubeUrl: "https://youtu.be/VRUc_yLMVOg?si=uxpRyYOVVHPzB3Lg", duration: "41m" },
  { title: "Access Granted", topics: ["New Releases"], youtubeUrl: "https://youtu.be/hyS1FRVJG1k?si=1x0E7psKm2o8NHVT", duration: "1h 47m" },
  { title: "Empty", topics: ["New Releases"], youtubeUrl: "https://youtu.be/Gi3iPYWbcZM?si=Hryfr7Q8KJ1nIDUN", duration: "1h 51m" },
];
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  initMobileNav();
  initShelfArrows();
  initModal();
  initContactLinks();
});

// Exposed so subscription.js can re-render cards the instant
// subscription status changes (no page refresh needed).
window.renderMovies = renderMovies;

/* ---------- Build the WhatsApp + email suggestion links ---------- */
function initContactLinks() {
  const whatsappMessage = "Hi! I'd like to suggest a movie or a topic for Christian Movie Guide.";
  const emailSubject = "Movie/topic suggestion for Christian Movie Guide";

  document.querySelectorAll('[data-contact="whatsapp"]').forEach((el) => {
    el.href = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  });

  document.querySelectorAll('[data-contact="email"]').forEach((el) => {
    el.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(emailSubject)}`;
  });
}

/* ---------- Pull the YouTube video ID out of a full URL ---------- */
function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/* ---------- Basic HTML escaping for injected text ---------- */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Build a single card's HTML ---------- */
function renderCard(movie) {
  const ytId = getYouTubeId(movie.youtubeUrl);
  const thumb = ytId
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    : `https://placehold.co/400x225/141414/E50914?text=${encodeURIComponent(movie.title)}`;
  const title = escapeHtml(movie.title);
  // window.isUserSubscribed is kept up to date by subscription.js
  const isLocked = movie.locked && !window.isUserSubscribed;

  if (isLocked) {
    return `
      <div class="card locked">
        <div class="card-thumb">
          <img src="${thumb}" alt="${title}" loading="lazy">
          <div class="card-lock-overlay">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
            <span>Subscribe to unlock</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">${title}</p>
          <p class="card-meta">Movie · ${escapeHtml(movie.duration)}</p>
        </div>
      </div>`;
  }

  return `
    <a href="${movie.youtubeUrl}" class="card" target="_blank" rel="noopener noreferrer">
      <div class="card-thumb">
        <img src="${thumb}" alt="${title}" loading="lazy">
        <div class="card-play"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#FFFFFF" opacity="0.9"/><path d="M9.5 8L16 12L9.5 16V8Z" fill="#141414"/></svg></div>
      </div>
      <div class="card-body">
        <p class="card-title">${title}</p>
        <p class="card-meta">Movie · ${escapeHtml(movie.duration)}</p>
      </div>
    </a>`;
}

/* ---------- Fill every shelf on the page from MOVIES ---------- */
function renderMovies() {
  document.querySelectorAll('.shelf-track[data-topic]').forEach((track) => {
    const topic = track.dataset.topic;
    const items = MOVIES.filter((m) => Array.isArray(m.topics) && m.topics.includes(topic));

    track.innerHTML = items.length
      ? items.map(renderCard).join('')
      : `<p class="shelf-empty">More titles coming soon.</p>`;
  });

  initLockedCards();
}

/* ---------- Mobile nav toggle ---------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

/* ---------- Shelf left/right arrow scrolling ---------- */
function initShelfArrows() {
  document.querySelectorAll('.shelf-section').forEach((section) => {
    const track = section.querySelector('.shelf-track');
    const prevBtn = section.querySelector('.shelf-arrow.prev');
    const nextBtn = section.querySelector('.shelf-arrow.next');
    if (!track) return;

    const scrollAmount = () => track.clientWidth * 0.8;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      });
    }
  });
}

/* ---------- Locked card click -> subscribe modal ---------- */
function initLockedCards() {
  document.querySelectorAll('.card.locked').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
}

/* ---------- Subscribe modal open/close ---------- */
function initModal() {
  const backdrop = document.getElementById('subscribe-modal');
  if (!backdrop) return;

  const closeEls = backdrop.querySelectorAll('[data-close-modal]');
  closeEls.forEach((el) => el.addEventListener('click', closeModal));

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal() {
  const backdrop = document.getElementById('subscribe-modal');
  if (backdrop) backdrop.classList.add('open');
}

function closeModal() {
  const backdrop = document.getElementById('subscribe-modal');
  if (backdrop) backdrop.classList.remove('open');
}

/* ---------- Subscribe header/footer/CTA buttons ---------- */
/* NOTE: Handled by subscription.js (starts real Paystack checkout). */
/* Sign In is handled separately by auth.js (Firebase Authentication). */
