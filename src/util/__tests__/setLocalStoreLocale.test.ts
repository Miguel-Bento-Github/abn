import { setLocalStorageLocale } from "@/util/setLocalStorageLocale";
import { LocaleCode } from "@/const/locale";

describe("setLocalStorageLocale", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set locale in localStorage to provided localeCode", () => {
    setLocalStorageLocale(LocaleCode.ZH_CN);
    expect(localStorage.locale).toBe(LocaleCode.ZH_CN);
  });

  it("should set locale in localStorage to fallbackLocale if localeCode is not provided", () => {
    setLocalStorageLocale(undefined, LocaleCode.EN_US);
    expect(localStorage.locale).toBe(LocaleCode.EN_US);
  });

  it("should set locale in localStorage to default (LocaleCode.EN_US) if neither localeCode nor fallbackLocale is provided", () => {
    setLocalStorageLocale(undefined, undefined);
    expect(localStorage.locale).toBe(LocaleCode.EN_US);
  });

  it("should return the set locale from localStorage", () => {
    const result = setLocalStorageLocale(LocaleCode.ZH_CN);
    expect(result).toBe(LocaleCode.ZH_CN);
  });

  it("should correctly prioritize localeCode over fallbackLocale", () => {
    const result = setLocalStorageLocale(LocaleCode.ZH_CN, LocaleCode.EN_US);
    expect(result).toBe(LocaleCode.ZH_CN);
    expect(localStorage.locale).toBe(LocaleCode.ZH_CN);
  });
});
