import { setDocumentLang } from "@/util/setDocumentLang";
import { LocaleCode } from "@/const/locale";

describe("setDocumentLang", () => {
  let htmlElement: HTMLElement;

  beforeEach(() => {
    htmlElement = document.documentElement;
    htmlElement.removeAttribute("lang");
    htmlElement.removeAttribute("dir");
  });

  it("should set lang attribute to localeCode", () => {
    setDocumentLang("en-US" as LocaleCode);
    expect(htmlElement.getAttribute("lang")).toBe("en-US");
  });

  it("should not have dir attribute if locale is ltr", () => {
    setDocumentLang("zh-CN" as LocaleCode);
    expect(htmlElement.hasAttribute("dir")).toBe(false);
  });
});
