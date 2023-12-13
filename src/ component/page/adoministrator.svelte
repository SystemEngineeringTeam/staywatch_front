<script>
</script>

<div class="admini">
  <h1>管理者</h1>
  <div class="page">
    <div class="add">
      <h1>新規登録</h1>

      <input type="text" class="name" placeholder="名前" />

      <input type="text" class="class" placeholder="学年" />

      <input type="text" class="number" placeholder="学籍番号" />

      <input type="text" class="address" placeholder="メールアドレス" />

      <button class="entry">登録</button>
    </div>
    <div class="list">
      <h1>登録者一覧</h1>
      <div class="scroll"></div>
    </div>
  </div>
</div>

<style lang="scss">
  .admini {
    h1 {
      font-size: 40px;
      text-align: center;
      margin-top: 80px;
    }
    .page {
        .add {
          margin-top: 80px;
          margin-left: 5%;
          width: 90%;
          height: 350px;
          border-radius: 20px;
          background-color: #f0f0f0;
          h1 {
            font-size: 30px;
            text-align: center;
            margin-top: 15px;
          }
          .name {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .class {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .number {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .address {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .entry {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 40px;
            border-radius: 10px;
            background-color: #717171;

            color: white;
            font-size: 30px;
          }
        }
        .list {
          margin-top: 80px;
          margin-left: 5%;
          margin-right: 5%;
          margin-bottom: 20px;
          width: 90%;
          height: 350px;
          border-radius: 20px;
          background-color: #f0f0f0;
          h1 {
            font-size: 30px;
            text-align: center;
            margin-top: 15px;
          }
          .scroll {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 250px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
            overflow-y: scroll;
          }
        }
    }
    

    @media (min-width: 900px) {
      .page {
        display: flex;
        .add {
          margin-top: 80px;
          margin-left: 5%;
          width: 90%;
          height: 350px;
          border-radius: 20px;
          background-color: #f0f0f0;
          h1 {
            font-size: 30px;
            text-align: center;
            margin-top: 15px;
          }
          .name {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .class {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .number {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .address {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
          }
          .entry {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 40px;
            border-radius: 10px;
            background-color: #717171;

            color: white;
            font-size: 30px;
          }
        }

        .list {
          margin-top: 80px;
          margin-left: 5%;
          margin-right: 5%;
          margin-bottom: 20px;
          width: 90%;
          height: 350px;
          border-radius: 20px;
          background-color: #f0f0f0;
          h1 {
            font-size: 30px;
            text-align: center;
            margin-top: 15px;
          }
          .scroll {
            margin-top: 20px;
            margin-left: 10%;
            margin-right: auto;
            width: 80%;
            height: 250px;
            border-radius: 10px;
            background-color: white;
            border: solid 3px #717171;
            overflow-y: scroll;
          }
        }
      }
    }
}
    
</style>
