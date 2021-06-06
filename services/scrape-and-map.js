const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const axios = require("axios");

module.exports = (id) =>
  axios({
    method: "get",
    url: `https://play.google.com/store/apps/details?id=${id}`,
  })
    .then((response) => {
      const dom = new JSDOM(`${response.data}`);
      document = dom.window.document;

      const app_url = `https://play.google.com/store/apps/details?id=${id}`;
      const logo = document.getElementsByClassName("T75of sHb2Xb")[0].src;
      const app_name = document.getElementsByClassName("AHFaub")[0].textContent;
      const publisher_name =
        document.getElementsByClassName("hrTbp R8zArc")[0].textContent;
      const publisher_account_url =
        document.getElementsByClassName("hrTbp R8zArc")[0].href;
      const category =
        document.getElementsByClassName("hrTbp R8zArc")[1].textContent;
      const contains_ads = document.getElementsByClassName("bSIuKf")[0]
        ? document.getElementsByClassName("bSIuKf")[0].textContent ===
          "Contains Ads"
          ? true
          : false
        : false;

      const preview_images = [];
      let index = 0;
      const image_data =
        document.getElementsByClassName("JiLaSd u3EI9e")[0].children[0]
          .children;

      while (index < image_data.length) {
        if (!image_data[index].children[0].src.includes("base64"))
          preview_images.push(image_data[index].children[0].src);
        index = index + 1;
      }

      const youtube_trailer = document.getElementsByClassName("MMZjL lgooh")[0]
        ? `https://www.youtube.com/watch?v=${
            new URL(
              document
                .getElementsByClassName("MMZjL lgooh")[0]
                .getAttribute("data-trailer-url")
            ).pathname.split("/")[2]
          }`
        : "N/A";

      const description =
        document.getElementsByClassName("DWPxHb")[0].textContent;

      const ratings = document.getElementsByClassName("BHMmbe")[0].textContent;
      const ratings_data = document.getElementsByClassName("VEF2C")[0];

      const ratings_distribution = [];
      index = 0;

      while (index < 5) {
        ratings_distribution.push({
          rating: 5 - index,
          percentage: ratings_data.children[index].children[1].style.width,
        });
        index = index + 1;
      }

      const latest_update_description =
        document.getElementsByClassName("DWPxHb")[1]?document.getElementsByClassName("DWPxHb")[1].textContent:"N/A";

      let full_meta_data =
        document.getElementsByClassName("IxB2fe")[0].children;
      let initial = 0;
      let application_meta_data = {};
      while (initial < full_meta_data.length - 1) {
        let property = full_meta_data[initial].children[0]
          ? full_meta_data[initial].children[0].textContent
              .split(" ")
              .join("_")
              .toLowerCase()
          : "N/A";
        let value = full_meta_data[initial].children[1]
          ? full_meta_data[initial].children[1].textContent
          : "N/A";
        application_meta_data[property] = value;
        initial = initial + 1;
      }

      const app_developer_website =
        document.getElementsByClassName("hAyfc")[
          document.getElementsByClassName("hAyfc").length - 1
        ].children[1].children[0].children[0].children[0].children[0].href;

      const app_developer_email =
        document.getElementsByClassName("hAyfc")[
          document.getElementsByClassName("hAyfc").length - 1
        ].children[1].children[0].children[0].children[1].children[0].href;

      const app_developer_policy =
        document.getElementsByClassName("hAyfc")[
          document.getElementsByClassName("hAyfc").length - 1
        ].children[1].children[0].children[0].children[2].children[0].href;

      const app_developer_address = document.getElementsByClassName("hAyfc")[
        document.getElementsByClassName("hAyfc").length - 1
      ].children[1].children[0].children[0].children[3]
        ? document.getElementsByClassName("hAyfc")[
            document.getElementsByClassName("hAyfc").length - 1
          ].children[1].children[0].children[0].children[3].textContent
        : "N/A";

      application_meta_data.developer = {
        app_developer_website,
        app_developer_email,
        app_developer_policy,
        app_developer_address,
      };

      const app_information = {
        id,
        logo,
        app_name,
        app_url,
        category,
        contains_ads,
        publisher_account_url,
        publisher_name,
        preview_images,
        youtube_trailer,
        description,
        application_meta_data,
        latest_update_description,
        ratings_data: {
          ratings,
          ratings_distribution,
        },
      };
      console.log("Data received from Google Play Store");
      return app_information;
    })
    .catch((error) => {
      console.log(error);
    });
