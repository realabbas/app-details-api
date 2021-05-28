const logo = document.getElementsByClassName("T75of sHb2Xb")[0].src;
const app_name = document.getElementsByClassName("AHFaub")[0].innerText;
const publisher_name =
  document.getElementsByClassName("hrTbp R8zArc")[0].innerText;
const publisher_account_url =
  document.getElementsByClassName("hrTbp R8zArc")[0].href;
const category = document.getElementsByClassName("hrTbp R8zArc")[1].innerText;
const contains_ads =
  document.getElementsByClassName("bSIuKf")[0].innerText === "Contains Ads"
    ? true
    : false;

const preview_images = [];
let index = 0;
const image_data =
  document.getElementsByClassName("JiLaSd u3EI9e")[0].children[0];
while (index < 7) {
  preview_images.push(image_data.children[index].children[0].src);
  index = index + 1;
}
const description = document.getElementsByClassName("DWPxHb")[0].innerText;

const ratings = document.getElementsByClassName("BHMmbe")[0].ariaLabel;
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
  document.getElementsByClassName("DWPxHb")[1].innerText;

const full_meta_data = document.getElementsByClassName("IxB2fe")[0];

const application_meta_data = {
  app_last_updated_at: full_meta_data.children[0].children[1].innerText,
  app_size: full_meta_data.children[1].children[1].innerText,
  app_installs: full_meta_data.children[2].children[1].innerText,
  app_current_version: full_meta_data.children[3].children[1].innerText,
  app_requires_android: full_meta_data.children[4].children[1].innerText,
  app_content_rating:
    full_meta_data.children[5].children[1].innerText.split("\n")[0],
  app_offered_by: full_meta_data.children[8].children[1].innerText,
  app_website:
    full_meta_data.children[9].children[1].children[0].children[0].children[0]
      .children[0].href,
  app_developer_email:
    full_meta_data.children[9].children[1].children[0].children[0].children[1].children[0].href.split(
      ":"
    )[1],
  app_privacy_policy:
    full_meta_data.children[9].children[1].children[0].children[0].children[2]
      .children[0].href,
};

const app_information = {
  logo,
  app_name,
  preview_images,
  description,
  application_meta_data,
  latest_update_description,
  ratings_data: {
    ratings,
    ratings_distribution,
  },
  category,
  contains_ads,
  publisher_account_url,
  publisher_name,
};

console.log(app_information);
