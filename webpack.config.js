const path = require("path");
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

app.use(express.static(path.join(__dirname, "dist")));

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/aboutUs", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "aboutUs.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "checkout.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/contacts", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "contacts.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/delivery", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "delivery.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "menu.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/orders", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "orders.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/policy", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "policy.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/socialMedia", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "socialMedia.html"));
});

app.get("https://Galkevich-Natalia.github.io/Taste_Vista/dist/workingHours", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "workingHours.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  mode: "production",
  entry: {
    navigationMenu: "./src/components/navigation-menu/navigation-menu.js",
    styles: "./src/styles/index.scss",
    checkout: "./src/components/checkout/checkout.js",
    card: "./src/components/card/card.js",
    orders: "./src/components/orders/orders.js",
    addMinHeightForPage: "./src/utils/addMinHeightForPage.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundler.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: [ "styles", "navigationMenu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/aboutUs.html",
      filename: "aboutUs.html",
      chunks: ["styles", "navigationMenu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/checkout.html",
      filename: "checkout.html",
      chunks: ["styles", "navigationMenu", "checkout"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contacts.html",
      filename: "contacts.html",
      chunks: ["styles", "navigationMenu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/delivery.html",
      filename: "delivery.html",
      chunks: ["styles", "navigationMenu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/menu.html",
      filename: "menu.html",
      chunks: ["styles", "navigationMenu", "card"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/orders.html",
      filename: "orders.html",
      chunks: ["styles", "navigationMenu", "addMinHeightForPage"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/policy.html",
      filename: "policy.html",
      chunks: ["styles", "navigationMenu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/socialMedia.html",
      filename: "socialMedia.html",
      chunks: ["styles", "navigationMenu", "addMinHeightForPage"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/workingHours.html",
      filename: "/workingHours.html",
      chunks: ["styles", "navigationMenu", "addMinHeightForPage"],
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};