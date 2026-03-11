// ============================================================
//  src/config.js — Wedding card configuration
//  Edit values here or use .env (VITE_ prefix required).
// ============================================================

// ── Couple ───────────────────────────────────────────────────
export const GROOM = import.meta.env.VITE_GROOM_NAME ?? 'Quốc Tuấn'
export const BRIDE = import.meta.env.VITE_BRIDE_NAME ?? 'Ái Kiều'

// ── Wedding date ─────────────────────────────────────────────
export const DATE_ISO   = import.meta.env.VITE_WEDDING_DATE         ?? '2026-04-26T11:00:00'
export const DATE_FULL  = import.meta.env.VITE_WEDDING_DATE_DISPLAY ?? 'Chủ nhật ngày 26 tháng 04 năm 2026'
export const DATE_SHORT = import.meta.env.VITE_WEDDING_DATE_SHORT   ?? '26 · 04 · 2026'

// ── Lunar date ───────────────────────────────────────────────
export const LUNAR_DATE = import.meta.env.VITE_LUNAR_DATE ?? 'Ngày 10 tháng 03 âm lịch'

// ── Hashtag & city ───────────────────────────────────────────
export const HASHTAG = import.meta.env.VITE_HASHTAG ?? 'QuốcTuấnÁiKiều2026'
export const CITY    = import.meta.env.VITE_CITY    ?? ''

// ── Restaurant ───────────────────────────────────────────────
export const RESTAURANT_NAME    = import.meta.env.VITE_RESTAURANT_NAME    ?? 'Nhà Hàng Tiệc Cưới Tấn Chương'
export const RESTAURANT_ADDRESS = import.meta.env.VITE_RESTAURANT_ADDRESS ?? ''
export const RESTAURANT_MAP     = import.meta.env.VITE_RESTAURANT_MAP     ?? ''
export const RESTAURANT_MAP_LINK = import.meta.env.VITE_RESTAURANT_MAP_LINK ?? RESTAURANT_MAP

// ── Bride's family home ──────────────────────────────────────
export const BRIDE_HOME_ADDRESS  = import.meta.env.VITE_BRIDE_HOME_ADDRESS  ?? ''
export const BRIDE_HOME_MAP      = import.meta.env.VITE_BRIDE_HOME_MAP      ?? ''
export const BRIDE_HOME_MAP_LINK = import.meta.env.VITE_BRIDE_HOME_MAP_LINK ?? BRIDE_HOME_MAP

// ── Tiệc Cúng Ông Bà ────────────────────────────────────────
export const CUNG_ONG_BA_DATE_DISPLAY = import.meta.env.VITE_CUNG_ONG_BA_DATE_DISPLAY ?? ''

// ── Event time ───────────────────────────────────────────────
export const TIME_CEREMONY  = import.meta.env.VITE_TIME_CEREMONY  ?? '11:00'
export const TIME_VU_QUY    = import.meta.env.VITE_TIME_VU_QUY    ?? '17:00'
export const TIME_RECEPTION = import.meta.env.VITE_TIME_RECEPTION ?? '17:00'
