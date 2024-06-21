import { Entypo, Ionicons, Fontisto, Octicons, FontAwesome, AntDesign, Foundation, FontAwesome5, MaterialIcons, FontAwesome6, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export const quotes = [
    {
        "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "author": "Marilyn Monroe",
        "category": "attributed-no-source, best, life, love, mistakes, out-of-control, truth, worst"
    },
    {
        "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        "author": "William W. Purkey",
        "category": "dance, heaven, hurt, inspirational, life, love, sing"
    },
    {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss",
        "category": "attributed-no-source, dreams, love, reality, sleep"
    },
    {
        "quote": "A friend is someone who knows all about you and still loves you.",
        "author": "Elbert Hubbard",
        "category": "friend, friendship, knowledge, love"
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "author": "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
        "category": "darkness, drive-out, hate, inspirational, light, love, peace"
    },
    {
        "quote": "We accept the love we think we deserve.",
        "author": "Stephen Chbosky, The Perks of Being a Wallflower",
        "category": "inspirational, love"
    },
    {
        "quote": "Only once in your life",
        "author": "I truly believe",
        "category": "you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future"
    }
]

export const GeneralCategory = [
    { id: 1, name: "General", category: "general", subCategory: "general", icon: <Ionicons name="planet" size={25} color="white" /> },
    {
        id: 2, name: "My Favorites", category: "general", subCategory: "favorites", icon: <Fontisto name='favorite' size={25} color='white' />
    },
    { id: 3, name: "Based on your Mood", category: "general", subCategory: "basedOnMood", icon: <MaterialIcons name="mood" size={25} color="white" /> },
    {
        id: 4, name: "My own quotes", category: "general", subCategory: "myOwnQuotes", icon: <Foundation name='clipboard-pencil' size={25} color='white' />
    },
    {
        id: 5, name: "Your collections", category: "general", subCategory: "collections", icon: <Entypo name='bookmarks' size={25} color='white' />
    },
]

export const ForYouCategory = [
    { id: 1, name: "Pride", filterCategoryBy: "pride", icon: <Ionicons name="sparkles-sharp" size={25} color="white" /> },
    {
        id: 2, name: "Handle Failure", filterCategoryBy: "handleFailure", icon: <FontAwesome6 name="chart-gantt" size={25} color="white" />
    },
    { id: 3, name: "Wisdom", filterCategoryBy: "wisdom", icon: <MaterialCommunityIcons name="owl" size={25} color="white" /> },
    {
        id: 4, name: "Life", filterCategoryBy: "life", icon: <FontAwesome6 name="star-of-life" size={25} color="white" />
    },
    {
        id: 5, name: "Spring", filterCategoryBy: "spring", icon: <MaterialCommunityIcons name="square-rounded" size={25} color="white" />
    },
    {
        id: 6, name: "Friendship", filterCategoryBy: "friendship", icon: <FontAwesome5 name="user-friends" size={25} color="white" />
    }, {
        id: 7, name: "Gym", filterCategoryBy: "gym", icon: <MaterialIcons name="sports-gymnastics" size={25} color="white" />
    }, {
        id: 8, name: "Weekend", filterCategoryBy: "weekend", icon: <MaterialIcons name="weekend" size={25} color="white" />
    },
]
export const TopPicksCategory = [
    { id: 1, name: "Bullying", filterCategoryBy: "bullying", icon: <FontAwesome5 name="angry" size={24} color="white" /> },
    {
        id: 2, name: "Honesty", filterCategoryBy: "honesty", icon: <Ionicons name="happy" size={24} color="white" />
    },
    { id: 3, name: "Health", filterCategoryBy: "health", icon: <MaterialIcons name="health-and-safety" size={24} color="white" /> },
    {
        id: 4, name: "Uncertainty", filterCategoryBy: "uncertainty", icon: <MaterialCommunityIcons name="thought-bubble" size={24} color="white" />
    },
    {
        id: 5, name: "Losing a friend", filterCategoryBy: "losingFriend", icon: <FontAwesome5 name="user-friends" size={24} color="white" />
    },
    {
        id: 6, name: "Minimalism", filterCategoryBy: "minimalism", icon: <MaterialIcons name="home-mini" size={24} color="white" />
    },
    {
        id: 7, name: "Distance", filterCategoryBy: "distance", icon: <MaterialIcons name="social-distance" size={24} color="white" />
    },
    {
        id: 8, name: "Self-respect", filterCategoryBy: "selfRespect", icon: <MaterialIcons name="self-improvement" size={24} color="white" />
    },
    // {
    //     id: 9, name: "Parenthood", filterCategoryBy: "parenthood", icon: <FontAwesome6 name="hands-holding-child" size={24} color="white" />
    // }
]

export const MostPopularCategory = [
    { id: 1, name: "Motivation", filterCategoryBy: "motivation", icon: <Entypo name="quote" size={24} color="white" /> },
    {
        id: 2, name: "Affirmations", filterCategoryBy: "affirmations", icon: <FontAwesome5 name="affiliatetheme" size={24} color="white" />
    },
    {
        id: 10, name: "Faith", filterCategoryBy: "faith", icon: <FontAwesome5 name="praying-hands" size={24} color="white" />
    },
    { id: 3, name: "Unfiltered motivation", filterCategoryBy: "motivation", icon: <MaterialCommunityIcons name="comment-quote-outline" size={24} color="white" /> },
    {
        id: 4, name: "Love", filterCategoryBy: "love", icon: <FontAwesome6 name="heart" size={24} color="white" />
    },
    {
        id: 5, name: "Positive Thinking", filterCategoryBy: "positiveThinking", icon: <FontAwesome5 name="think-peaks" size={24} color="white" />
    },
    {
        id: 6, name: "God", filterCategoryBy: "god", icon: <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
    },
    {
        id: 7, name: "Unconditional Love", filterCategoryBy: "love", icon: <FontAwesome name="heartbeat" size={24} color="white" />
    },
    {
        id: 8, name: "Inner peace", filterCategoryBy: "innerPeace", icon: <MaterialCommunityIcons name="peace" size={24} color="white" />
    },
    {
        id: 9, name: "Deep", filterCategoryBy: "deep", icon: <MaterialCommunityIcons name="brain" size={24} color="white" />
    }
]

export const HardTimesCategory = [
    { id: 1, name: "Overthinking", filterCategoryBy: "overthinking", icon: <FontAwesome5 name="brain" size={24} color="white" /> },
    {
        id: 2, name: "Death", filterCategoryBy: "death", icon: <MaterialCommunityIcons name="deathly-hallows" size={24} color="white" />
    },
    { id: 3, name: "Toxic Relationships", filterCategoryBy: "relationship", icon: <MaterialCommunityIcons name="relation-many-to-many" size={24} color="white" /> },
    {
        id: 4, name: "Depression", filterCategoryBy: "depression", icon: <Entypo name="emoji-sad" size={24} color="white" />
    },
    {
        id: 5, name: "Loneliness", filterCategoryBy: "loneliness", icon: <FontAwesome5 name="sad-tear" size={24} color="white" />
    },
    {
        id: 6, name: "Dealing with change", filterCategoryBy: "change", icon: <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
    },
    {
        id: 7, name: "Uncertainty", filterCategoryBy: "uncertainty", icon: <MaterialCommunityIcons name="thought-bubble" size={24} color="white" />
    },
    {
        id: 8, name: "Missing someone", filterCategoryBy: "missingSomeone", icon: <AntDesign name="user" size={24} color="white" />
    },
    {
        id: 9, name: "Dealing with Frustration", filterCategoryBy: "frustration", icon: <MaterialIcons name="cloudy-snowing" size={24} color="white" />
    },
    {
        id: 10, name: "Haters", filterCategoryBy: "haters", icon: <FontAwesome5 name="user-slash" size={24} color="white" />
    },
    {
        id: 11, name: "Heartbroken", filterCategoryBy: "heartbroken", icon: <FontAwesome5 name="heart-broken" size={24} color="white" />
    },
    {
        id: 12, name: "Overcoming fears", filterCategoryBy: "fear", icon: <FontAwesome name="hand-grab-o" size={24} color="white" />
    },
    {
        id: 13, name: "Breakup", filterCategoryBy: "breakup", icon: <FontAwesome6 name="heart-circle-xmark" size={24} color="white" />
    },
    {
        id: 14, name: "Be strong", filterCategoryBy: "strong", icon: <MaterialIcons name="hdr-strong" size={24} color="white" />
    }
]

export const PersonGrowthCategory = [
    { id: 1, name: "Self-esteem", filterCategoryBy: "selfEsteem", icon: <FontAwesome6 name="crown" size={24} color="white" /> },
    {
        id: 2, name: "Start change", filterCategoryBy: "change", icon: <MaterialIcons name="published-with-changes" size={24} color="white" />
    },
    { id: 3, name: "Self-development", filterCategoryBy: "development", icon: <FontAwesome6 name="stairs" size={24} color="white" /> },
    {
        id: 4, name: "Be strong", filterCategoryBy: "strong", icon: <MaterialIcons name="hdr-strong" size={24} color="white" />
    },
    {
        id: 5, name: "Positive thinking", filterCategoryBy: "positiveThinking", icon: <FontAwesome5 name="user-plus" size={24} color="white" />
    },
    {
        id: 6, name: "Happiness", filterCategoryBy: "happiness", icon: <Ionicons name="happy" size={24} color="white" />
    },
    {
        id: 7, name: "Growth", filterCategoryBy: "growth", icon: <MaterialCommunityIcons name="tree" size={24} color="white" />
    },
    {
        id: 8, name: "Self-love", filterCategoryBy: "selfLove", icon: <MaterialCommunityIcons name="account-heart" size={24} color="white" />
    },
    {
        id: 9, name: "New beginnings", filterCategoryBy: "beginnings", icon: <FontAwesome5 name="sun" size={24} color="white" />
    },
    {
        id: 10, name: "Love yourself", filterCategoryBy: "love", icon: <FontAwesome6 name="heart-circle-check" size={24} color="white" />
    },
    {
        id: 11, name: "Gratitude", filterCategoryBy: "gratitude", icon: <FontAwesome6 name="hands-holding" size={24} color="white" />
    },
    // {
    //     id: 12, name: "Moving on", icon: <Ionicons name="person-remove" size={24} color="white" />
    // },
    // {
    //     id: 13, name: "Letting go", icon: <Ionicons name="person-remove" size={24} color="white" />
    // },
    {
        id: 14, name: "Self-respect", filterCategoryBy: "selfRespect", icon: <FontAwesome6 name="plant-wilt" size={24} color="white" />
    },
    {
        id: 15, name: "Be yourself", filterCategoryBy: "self", icon: <MaterialCommunityIcons name="butterfly" size={24} color="white" />
    },
    // {
    //     id: 16, name: "Ego", icon: <FontAwesome name="circle-o" size={24} color="white" />
    // }
]

export const CalmDownCategory = [
    { id: 1, name: "Mindfulness", filterCategoryBy: "minimalism", icon: <MaterialCommunityIcons name="brain" size={24} color="white" /> },
    {
        id: 2, name: "Calm", filterCategoryBy: "calm", icon: <MaterialIcons name="water-drop" size={24} color="white" />
    },
    { id: 3, name: "Enjoy the moment", filterCategoryBy: "enjoy", icon: <Feather name="sunrise" size={24} color="white" /> },
    {
        id: 4, name: "Hope", filterCategoryBy: "hope", icon: <MaterialIcons name="child-care" size={24} color="white" />
    },
    {
        id: 5, name: "Sleep", filterCategoryBy: "sleep", icon: <MaterialCommunityIcons name="sleep" size={24} color="white" />
    },
    {
        id: 6, name: "Inner peace", filterCategoryBy: "innerPeace", icon: <Ionicons name="flower" size={24} color="white" />
    },
    {
        id: 7, name: "Managing anxiety", filterCategoryBy: "anxiety", icon: <MaterialCommunityIcons name="shape-circle-plus" size={24} color="white" />
    },
    {
        id: 8, name: "Patience", filterCategoryBy: "patience", icon: <FontAwesome5 name="hand-peace" size={24} color="white" />
    },
    {
        id: 9, name: "Stress", filterCategoryBy: "stress", icon: <MaterialIcons name="cyclone" size={24} color="white" />
    },
    // {
    //     id: 10, name: "Appreciation",filterCategoryBy: "stress", icon: <FontAwesome5 name="hand-holding-heart" size={24} color="white" />
    // },
    {
        id: 11, name: "Smile", filterCategoryBy: "smile", icon: <Feather name="smile" size={24} color="white" />
    }
]

export const WorkProductiveCategry = [
    { id: 1, name: "Success", filterCategoryBy: "success", icon: <MaterialCommunityIcons name="wifi-star" size={24} color="white" /> },
    {
        id: 2, name: "Money", filterCategoryBy: "money", icon: <MaterialIcons name="attach-money" size={24} color="white" />
    },
    { id: 3, name: "Passion", filterCategoryBy: "passion", icon: <Fontisto name="fire" size={24} color="white" /> },
    {
        id: 4, name: "Business", filterCategoryBy: "business", icon: <FontAwesome5 name="business-time" size={24} color="white" />
    },
    {
        id: 5, name: "Leadership", filterCategoryBy: "leadership", icon: <MaterialIcons name="leaderboard" size={24} color="white" />
    },
    {
        id: 6, name: "Work", filterCategoryBy: "work", icon: <MaterialCommunityIcons name="bag-checked" size={24} color="white" />
    },
    {
        id: 7, name: "Hustling", filterCategoryBy: "hustle", icon: <Octicons name="workflow" size={24} color="white" />
    },
    {
        id: 8, name: "Self-discipline", filterCategoryBy: "selfDiscipline", icon: <MaterialCommunityIcons name="stairs-up" size={24} color="white" />
    },
    // {
    //     id: 9, name: "Routine", icon: <Octicons name="checklist" size={24} color="white" />
    // },
    // {
    //     id: 10, name: "Productivity", icon: <Entypo name="back-in-time" size={24} color="white" />
    // },
    // {
    //     id: 11, name: "Entrepreneurs", icon: <Entypo name="back-in-time" size={24} color="white" />
    // },
    {
        id: 12, name: "Perseverance", filterCategoryBy: "perseverance", icon: <FontAwesome6 name="mountain" size={24} color="white" />
    },
    {
        id: 13, name: "Focus", filterCategoryBy: "focus", icon: <MaterialCommunityIcons name="leaf-circle-outline" size={24} color="white" />
    },
    // {
    //     id: 14, name: "Graduation", icon: <FontAwesome name="graduation-cap" size={24} color="white" />
    // },
    // {
    //     id: 15, name: "College", icon: <FontAwesome6 name="user-graduate" size={24} color="white" />
    // },
    // {
    //     id: 16, name: "Study", icon: <Entypo name="open-book" size={24} color="white" />
    // }
]

export const InspirationCategory = [
    { id: 1, name: "Loving kindness", filterCategoryBy: "kindness", icon: <MaterialCommunityIcons name="flower-pollen-outline" size={24} color="white" /> },
    {
        id: 2, name: "Funny", filterCategoryBy: "funny", icon: <FontAwesome5 name="laugh-beam" size={24} color="white" />
    },
    {
        id: 3, name: "Future", filterCategoryBy: "future", icon: <Entypo name="tree" size={24} color="white" />
    },
    {
        id: 4, name: "Passion", filterCategoryBy: "passion", icon: <Fontisto name="fire" size={24} color="white" />
    },
    {
        id: 5, name: "Beauty", filterCategoryBy: "beauty", icon: <MaterialCommunityIcons name="mirror" size={24} color="white" />
    },
    {
        id: 6, name: "Encouraging words", filterCategoryBy: "words", icon: <FontAwesome6 name="cloud-sun-rain" size={24} color="white" />
    },
    {
        id: 7, name: "Sayings", filterCategoryBy: "sayings", icon: <AntDesign name="message1" size={24} color="white" />
    },
    {
        id: 8, name: "Art", filterCategoryBy: "art", icon: <FontAwesome5 name="paint-brush" size={24} color="white" />
    },
    // {
    //     id: 9, name: "Feeling Blessed", icon: <MaterialCommunityIcons name="weather-sunset" size={24} color="white" />
    // },
    {
        id: 10, name: "Sarcastic", filterCategoryBy: "funny", icon: <Fontisto name="laughing" size={24} color="white" />
    }
]

export const RelationshipsCategory = [
    { id: 1, name: "Forgiveness", filterCategoryBy: "forgiveness", icon: <FontAwesome6 name="user-check" size={24} color="white" /> },
    {
        id: 2, name: "Social anxiety", filterCategoryBy: "anxiety", icon: <FontAwesome5 name="users-slash" size={24} color="white" />
    },
    {
        id: 3, name: "Trust", filterCategoryBy: "trust", icon: <FontAwesome name="hand-pointer-o" size={24} color="white" />
    },
    // {
    //     id: 4, name: "Introvert", icon: <FontAwesome6 name="user-shield" size={24} color="white" />
    // },
    {
        id: 5, name: "Unconditional love", filterCategoryBy: "love", icon: <FontAwesome6 name="user-shield" size={24} color="white" />
    },
    {
        id: 6, name: "Cheating", filterCategoryBy: "lies", icon: <MaterialCommunityIcons name="emoticon-devil" size={24} color="white" />
    },
    {
        id: 7, name: "Marriage", filterCategoryBy: "marriage", icon: <MaterialCommunityIcons name="human-male-female" size={24} color="white" />
    },
    {
        id: 8, name: "Friendship", filterCategoryBy: "friendship", icon: <FontAwesome5 name="user-friends" size={25} color="white" />
    },
    // {
    //     id: 9, name: "Parenthood", icon: <FontAwesome6 name="hands-holding-child" size={24} color="white" />
    // },
    // {
    //     id: 10, name: "Loyalty", filterCategoryBy: "loyalty", icon: <FontAwesome6 name="handshake-simple" size={24} color="white" />
    // },
    {
        id: 11, name: "Being single", filterCategoryBy: "loneliness", icon: <Entypo name="back-in-time" size={24} color="white" />
    },
    {
        id: 12, name: "Distance", filterCategoryBy: "distance", icon: <MaterialIcons name="social-distance" size={24} color="white" />
    },
    // {
    //     id: 13, name: "Falling in love", icon: <MaterialCommunityIcons name="heart-circle-outline" size={24} color="white" />
    // },
    {
        id: 14, name: "Best friend", filterCategoryBy: "friendship", icon: <FontAwesome5 name="user-friends" size={25} color="white" />
    },
    {
        id: 15, name: "Love", filterCategoryBy: "love", icon: <FontAwesome6 name="heart" size={24} color="white" />
    },
    {
        id: 16, name: "Honesty", filterCategoryBy: "honesty", icon: <Ionicons name="happy" size={24} color="white" />
    },
    {
        id: 17, name: "Missing someone", filterCategoryBy: "missingSomeone", icon: <AntDesign name="user" size={24} color="white" />
    },
    // {
    //     id: 18, name: "Fake people", icon: <FontAwesome name="user-secret" size={24} color="white" />
    // },
    {
        id: 19, name: "Relationships", filterCategoryBy: "relationship", icon: <MaterialCommunityIcons name="relation-many-to-many" size={24} color="white" />
    },
    {
        id: 20, name: "Family", filterCategoryBy: "family", icon: <MaterialIcons name="family-restroom" size={24} color="white" />
    },
]

export const SpiritualCategory = [
    { id: 1, name: "Life", filterCategoryBy: "", icon: <FontAwesome6 name="star-of-life" size={25} color="white" /> },
    {
        id: 2, name: "Mindfulness", filterCategoryBy: "minimalism", icon: <MaterialCommunityIcons name="brain" size={24} color="white" />
    },
    // {
    //     id: 3, name: "Karma", icon: <MaterialCommunityIcons name="om" size={24} color="white" />
    // },
    {
        id: 4, name: "Loving kindness", filterCategoryBy: "kindness", icon: <MaterialCommunityIcons name="flower-pollen-outline" size={24} color="white" />
    },
    {
        id: 5, name: "Religion", filterCategoryBy: "religion", icon: <MaterialCommunityIcons name="compass-rose" size={24} color="white" />
    },
    {
        id: 6, name: "Wisdom", filterCategoryBy: "wisdom", icon: <MaterialCommunityIcons name="owl" size={25} color="white" />
    },
    {
        id: 7, name: "God", filterCategoryBy: "god", icon: <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
    },
    {
        id: 8, name: "Hope", filterCategoryBy: "hope", icon: <MaterialIcons name="child-care" size={24} color="white" />
    },
    // {
    //     id: 9, name: "Feeling Blessed", icon: <MaterialCommunityIcons name="weather-sunset" size={24} color="white" />
    // },
    {
        id: 10, name: "Faith", filterCategoryBy: "faith", icon: <FontAwesome5 name="praying-hands" size={24} color="white" />
    },
    {
        id: 11, name: "Philosophy", filterCategoryBy: "philosophy", icon: <FontAwesome5 name="book-reader" size={24} color="white" />
    },
    // {
    //     id: 12, name: "Devotions", icon: <FontAwesome6 name="hands-praying" size={24} color="white" />
    // }
]

export const HealthAndFitnessCategory = [
    { id: 1, name: "Work out", icon: <FontAwesome6 name="star-of-life" size={25} color="white" /> },
    {
        id: 2, name: "Self-discipline", icon: <MaterialCommunityIcons name="brain" size={24} color="white" />
    },
    {
        id: 3, name: "Sport", icon: <MaterialCommunityIcons name="om" size={24} color="white" />
    },
    {
        id: 4, name: "Strength", icon: <MaterialCommunityIcons name="flower-pollen-outline" size={24} color="white" />
    },
    {
        id: 5, name: "Health", icon: <MaterialCommunityIcons name="compass-rose" size={24} color="white" />
    },
    {
        id: 6, name: "Weight loss", icon: <MaterialCommunityIcons name="owl" size={25} color="white" />
    },
    {
        id: 7, name: "Bodybuilding", icon: <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
    },
    {
        id: 8, name: "Gym", icon: <MaterialIcons name="child-care" size={24} color="white" />
    },
    {
        id: 9, name: "Fitness", icon: <MaterialCommunityIcons name="weather-sunset" size={24} color="white" />
    },
    {
        id: 10, name: "Body positivity", icon: <FontAwesome5 name="praying-hands" size={24} color="white" />
    },
    {
        id: 11, name: "No excuses", icon: <FontAwesome5 name="book-reader" size={24} color="white" />
    },
    {
        id: 12, name: "Training", icon: <FontAwesome6 name="hands-praying" size={24} color="white" />
    }
]