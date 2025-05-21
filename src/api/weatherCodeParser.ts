// Define WMO codes with keys for internationalization
const WMOCodeKeys: Record<number, { mainKey: string; descriptionKey: string }> = {
  0: { mainKey: "weather.clear", descriptionKey: "weather.clear.description" },
  1: { mainKey: "weather.mainlyClear", descriptionKey: "weather.mainlyClear.description" },
  2: { mainKey: "weather.partlyCloudy", descriptionKey: "weather.partlyCloudy.description" },
  3: { mainKey: "weather.overcast", descriptionKey: "weather.overcast.description" },
  45: { mainKey: "weather.fog", descriptionKey: "weather.fog.description" },
  48: { mainKey: "weather.rimeFog", descriptionKey: "weather.rimeFog.description" },
  51: { mainKey: "weather.drizzle.light", descriptionKey: "weather.drizzle.light.description" },
  53: { mainKey: "weather.drizzle.moderate", descriptionKey: "weather.drizzle.moderate.description" },
  55: { mainKey: "weather.drizzle.dense", descriptionKey: "weather.drizzle.dense.description" },
  61: { mainKey: "weather.rain.slight", descriptionKey: "weather.rain.slight.description" },
  63: { mainKey: "weather.rain.moderate", descriptionKey: "weather.rain.moderate.description" },
  65: { mainKey: "weather.rain.heavy", descriptionKey: "weather.rain.heavy.description" },
  71: { mainKey: "weather.snowfall.slight", descriptionKey: "weather.snowfall.slight.description" },
  73: { mainKey: "weather.snowfall.moderate", descriptionKey: "weather.snowfall.moderate.description" },
  75: { mainKey: "weather.snowfall.heavy", descriptionKey: "weather.snowfall.heavy.description" },
  80: { mainKey: "weather.rainShowers.slight", descriptionKey: "weather.rainShowers.slight.description" },
  81: { mainKey: "weather.rainShowers.moderate", descriptionKey: "weather.rainShowers.moderate.description" },
  82: { mainKey: "weather.rainShowers.violent", descriptionKey: "weather.rainShowers.violent.description" },
  95: { mainKey: "weather.thunderstorm", descriptionKey: "weather.thunderstorm.description" },
  96: { mainKey: "weather.thunderstorm.slightHail", descriptionKey: "weather.thunderstorm.slightHail.description" },
  99: { mainKey: "weather.thunderstorm.heavyHail", descriptionKey: "weather.thunderstorm.heavyHail.description" },
};

/**
 * Parses a WMO code into a human-readable, localized weather description.
 * @param code - The WMO code.
 * @returns An object containing `main` and `description` strings translated to the current locale.
 */
export const parseWMOCode = (code: number): { main: string; description: string } => {
  const keys = WMOCodeKeys[code];
  if (!keys) {
    return {
      main: "weather.unknown",
      description: "weather.unknown.description",
    };
  }
  
  return {
    main: keys.mainKey,
    description: keys.descriptionKey,
  };
};