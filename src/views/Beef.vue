<template>
  <div>
    <input @click="getIp" type="button" value="レシピを取得" />
  </div>
  <div class="recipe">
    <div class="no1">
      <div id="rank1"></div>
      <div id="recipeTitle1"></div>
      <img id="img1" src="img1" alt="" />
      <a id="recipeUrl1" href="recipeUrl1"></a>
    </div>
    <div class="no2">
      <div id="rank2"></div>
      <div id="recipeTitle2"></div>
      <img id="img2" src="img2" alt="" />
      <a id="recipeUrl2" href="recipeUrl2"></a>
    </div>
    <div class="no3">
      <div id="rank3"></div>
      <div id="recipeTitle3"></div>
      <img id="img3" src="img3" alt="" />
      <a id="recipeUrl3" href="recipeUrl3"></a>
    </div>
    <div class="no4">
      <div id="rank4"></div>
      <div id="recipeTitle4"></div>
      <img id="img4" src="img4" alt="" />
      <a id="recipeUrl4" href="recipeUrl4"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchIp",
  methods: {
    getIp(params) {
      this.axios
        .get(
          "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=10-275&formatVersion=2&applicationId=1051866580926994357"
        )
        .then((res) => {
          console.log(res.data);
          // １位のレシピ
          document.getElementById("rank1").innerHTML =
            res.data.result[0].rank + "位";
          document.getElementById("recipeTitle1").innerHTML =
            res.data.result[0].recipeTitle;
          document.getElementById("img1").src =
            res.data.result[0].mediumImageUrl;
          document.getElementById("recipeUrl1").href =
            res.data.result[0].recipeUrl;
          document.getElementById("recipeUrl1").innerHTML = "レシピはここ";
          // 2位のレシピ
          document.getElementById("rank2").innerHTML =
            res.data.result[1].rank + "位";
          document.getElementById("recipeTitle2").innerHTML =
            res.data.result[1].recipeTitle;
          document.getElementById("img2").src =
            res.data.result[1].mediumImageUrl;
          document.getElementById("recipeUrl2").href =
            res.data.result[1].recipeUrl;
          document.getElementById("recipeUrl2").innerHTML = "レシピはここ";
          // 3位のレシピ
          document.getElementById("rank3").innerHTML =
            res.data.result[2].rank + "位";
          document.getElementById("recipeTitle3").innerHTML =
            res.data.result[2].recipeTitle;
          document.getElementById("img3").src =
            res.data.result[2].mediumImageUrl;
          document.getElementById("recipeUrl3").href =
            res.data.result[2].recipeUrl;
          document.getElementById("recipeUrl3").innerHTML = "レシピはここ";
          // 4位のレシピ
          document.getElementById("rank4").innerHTML =
            res.data.result[3].rank + "位";
          document.getElementById("recipeTitle4").innerHTML =
            res.data.result[3].recipeTitle;
          document.getElementById("img4").src =
            res.data.result[3].mediumImageUrl;
          document.getElementById("recipeUrl4").href =
            res.data.result[3].recipeUrl;
          document.getElementById("recipeUrl4").innerHTML = "レシピはここ";
        });
    },
  },
};
</script>

<style>
body {
  text-align: center;
  justify-content: center;
}
.recipe {
  text-align: center;
  justify-content: center;
}
@media screen and (max-width: 480px) {
  body {
    font-size: 10px;
  }
}
</style>
