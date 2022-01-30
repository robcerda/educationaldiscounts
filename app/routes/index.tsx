import { useLoaderData } from "remix";
import { CategoryItems, type CategoryItem } from "~/data/categories";
import resetCSS from "~/styles/css-reset.css";
import normalizeCSS from "~/styles/modern-normalize.css";
import homepageCSS from "~/styles/index.css";
import AppleIcon from "~/components/icons/AppleIcon";

/**
 * @description
 * <link> tags that will be embedded in the <head> for this page.
 */
export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
      integrity:
        "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
    },
    {
      rel: "stylesheet",
      href: resetCSS,
    },
    {
      rel: "stylesheet",
      href: normalizeCSS,
    },
    {
      rel: "stylesheet",
      href: homepageCSS,
    },
  ];
};

/**
 * @description
 * `loader` is a specific term in remix. In here we fetch or return the data we want the component
 * below to  use.
 */
export const loader = () => {
  return CategoryItems;
};

/**
 * @description
 * This component renders the homepage
 */
export default function HomePage() {
  const categoryItems = useLoaderData<CategoryItem[]>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <a
        href="https://github.com/robcerda/educationaldiscounts"
        className="github-corner"
        aria-label="View source on Github"
      >
        <svg viewBox="0 0 250 250">
          <path
            className="octo-triangle"
            d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
          ></path>
          <path
            className="octo-arm"
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          ></path>
          <path
            className="octo-body"
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          ></path>
        </svg>
      </a>
      <nav className="navbar">
        <ul className="navbar-nav navbar-table ml-auto pr-5">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>

      <section className="home-header">
        <AppleIcon />
        <h1>Educational Discounts</h1>
        <p>
          Curated list of websites and services that offer discounts to students
          and educators.
        </p>
      </section>

      <main>
        <ul className="categories-list">
          {categoryItems.map((categoryItem, i) => {
            return (
              <li key={i}>
                <div className="category-item">
                  <i
                    className={`${categoryItem.icon} categories-list-item-icon`}
                  />
                  <p>{categoryItem.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
