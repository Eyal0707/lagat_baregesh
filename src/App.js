import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//css
import "./css/pages/index.css";
//import "./css/pages/direction.css";

//components
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import LangSelector from "./components/langSelector";
import Navbar from "./components/navbar";

//pages
import HomePage from "./pages/homePage";
import GallaryPage from "./pages/gallaryPage";
import ProductPage from "./pages/productPage";
import ArticlesPage from "./pages/ArticlesPage";

const App = () => {
  const [content, setContent] = useState({
    isContent: false,
    homePage: undefined,
    gallaryPage: undefined,
    articlesPage: undefined,
    navBar: undefined,
    contactSection: undefined,
  });
  const [rawWebsiteContent, setRawWebsiteContent] = useState({
    isContent: false,
    data: {},
  });
  const [rawItems, setRawItems] = useState({ isItems: false, items: {} });
  const [items, setItems] = useState({ isItems: false, items: [] });
  const [lang, setLang] = useState("hebrew");

  useEffect(() => {
    console.log("featched");
    fetch("assets/content.json")
      .then((res) => res.json())
      .then((data) => {
        setRawWebsiteContent({ isContent: true, data: data });
      });

    fetch("/assets/gallary-content.json")
      .then((res) => res.json())
      .then((data) => {
        setRawItems({ isItems: true, items: data });
      });
  }, []);

  useEffect(() => {
    if (rawWebsiteContent.isContent) {
      const textData =
        lang === "hebrew"
          ? rawWebsiteContent.data.Hebrew
          : rawWebsiteContent.data.English;
      setContent({
        isContent: true,
        homePage: {
          text: textData.homePage,
          media: rawWebsiteContent.data.Media.homePage,
        },
        gallaryPage: {
          text: textData.gallary,
          media: rawWebsiteContent.data.Media.gallaryPage,
        },
        navBar: {
          items: textData.navItems,
          logo: rawWebsiteContent.data.Media.Logo,
        },
        contactSection: {
          text: textData.contactSection,
          media: rawWebsiteContent.data.Media.contactSection,
        },
        footer: {
          text: textData.footer,
        },
        articlesPage: {
          text: textData.articlesPage,
          media: rawWebsiteContent.data.Media.articlesPage,
        },
      });
    }
    if (rawItems.isItems) {
      setItems({
        isItems: true,
        items:
          lang === "hebrew"
            ? rawItems.items.itemsHebrew
            : rawItems.items.itemsEnglish,
      });
    }
  }, [lang, rawWebsiteContent, rawItems]);

  return (
    <Router>
      {content.isContent ? (
        <Navbar
          content={content.navBar}
          dir={lang === "hebrew" ? "rtl" : "ltr"}
        />
      ) : (
        "loading..."
      )}
      <LangSelector func={setLang} />
      <Switch>
        <Route exact path="/">
          {content.isContent ? (
            <HomePage
              dir={lang === "hebrew" ? "rtl" : "ltr"}
              contentText={content.homePage.text}
              contentMedia={content.homePage.media}
            />
          ) : (
            "loading..."
          )}
        </Route>
        <Route path="/gallary">
          {content.isContent && items.isItems ? (
            <GallaryPage
              dir={lang === "hebrew" ? "rtl" : "ltr"}
              contentText={content.gallaryPage.text}
              contentMedia={content.gallaryPage.media}
              items={items.items}
            />
          ) : (
            "loading..."
          )}
        </Route>
        <Route
          path="/product/:id"
          children={
            items.isItems ? (
              <ProductPage
                dir={lang === "hebrew" ? "rtl" : "ltr"}
                items={items.items}
              />
            ) : (
              "Loading..."
            )
          }
        ></Route>
        <Route path="/articles">
          {content.isContent ? (
            <ArticlesPage
              dir={lang === "hebrew" ? "rtl" : "ltr"}
              contentText={content.articlesPage.text}
              contentMedia={content.articlesPage.media}
            />
          ) : (
            "Loading"
          )}
        </Route>
      </Switch>
      {content.isContent ? (
        <>
          <ContactSection
            dir={lang === "hebrew" ? "rtl" : "ltr"}
            contentText={content.contactSection.text}
            contentMedia={content.contactSection.media}
          />
          <Footer
            dir={lang === "hebrew" ? "rtl" : "ltr"}
            content={content.navBar}
            contentText={content.footer.text}
          />
        </>
      ) : (
        "loading..."
      )}
    </Router>
  );
};

export default App;
