# 🌤️📰 News & Weather Dashboard 🌦️

## ✨ Overview

A **sleek, responsive React dashboard** that delivers the latest news and real-time weather updates for any city. Users can toggle between **News** and **Weather**, search for specific cities, and enjoy **dark mode** for a premium experience. Smooth animations with **AOS** and sliding transitions make the UI delightful! 🚀

---

## 🌟 Features

* 📰 **News Feed**: Fetch latest news from NewsAPI by city.
* 🌡️ **Weather Updates**: Real-time weather data via OpenWeatherMap API.
* 📱 **Fully Responsive**: Perfect on mobile, tablet & desktop.
* 🌙 **Dark Mode**: Toggle between light & dark themes.
* ✨ **AOS Animations**: Smooth fade/slide effects for cards & sections.
* 🔄 **Sliding Transition**: Animated switch between News & Weather views.
* ⚠️ **Error Handling**: Displays messages for invalid city searches.
* ⏳ **Loading Spinners**: Visual feedback while fetching data.

---

## 🗂️ Folder Structure

```
src/
├── App.jsx
├── MyRoutes.jsx
├── assets/
├── Components/
│   ├── AOS.jsx
│   ├── DarkModeToggle.jsx
│   ├── Navbar.jsx
│   ├── NewsCard.jsx
│   ├── WeatherCard.jsx
│   └── Styles/
│       ├── Navbar.css
│       ├── DarkModeToggle.css
│       ├── News.css
│       ├── NewsCard.css
│       ├── Weather.css
│       └── WeatherCard.css
├── pages/
│   ├── News.jsx
│   └── Weather.jsx
└── main.jsx
```

---

## ⚙️ Setup

1. **Clone the repository**

```bash
git clone <repository_url>
```

2. **Navigate to the project folder**

```bash
cd news-weather-dashboard
```

3. **Install dependencies**

```bash
npm install
```

4. **Create `.env` file** for API keys

```bash
VITE_NEWS_API_KEY=your_news_api_key
VITE_WEATHER_API_KEY=your_weather_api_key
```

5. **Start the development server**

```bash
npm run dev
```

---

## 🖱️ Usage

* Click **News** or **Weather** in the navbar to switch views.
* Enter a **city name** in the search bar and press **Enter** or click **Search**.
* Toggle **Dark Mode** 🌙☀️ using the button in the navbar.
* Scroll to see **animated cards** with AOS effects.

---

## 🛠️ Technologies Used

* React 18 ⚛️
* React Router v6 🧭
* Fetch API 🌐
* AOS (Animate On Scroll) ✨
* CSS3 🎨
* Vite ⚡

---

## 💡 Notes

* Replace demo API keys in `.env` with your own keys from [NewsAPI](https://newsapi.org/) & [OpenWeatherMap](https://openweathermap.org/api).
* Fully responsive design ensures **smooth experience across all devices**.
* AOS animations are customizable via `AOS.jsx`.

---

## 📄 License

MIT License ❤️
