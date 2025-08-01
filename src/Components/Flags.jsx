export default function GetFlagCode(original_language) {
     if (!original_language) return "placeholder.jpg";
     const langFlag = ["en", "it", "fr", "es", "de", "us", "ja", "ko"];
     const code = langFlag.includes(original_language.toLowerCase())
          ? `${original_language.toLowerCase()}.png`
          : "placeholder.jpg";
     return code;
}
