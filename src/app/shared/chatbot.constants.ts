export const CHATBOT_DAY = "day";
export const CHATBOT_TIME = "time";
export const CHATBOT_WEATHER = "weather";
export const CHATBOT_HIDDEN_KEY = "_";
export const CHATBOT_BYE_BYE = "bye bye";
export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const WEATHER_API_KEY = "72d157134435124d748a86d61206cd93";
export const WEATHER_API = {
    url: (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
};
      