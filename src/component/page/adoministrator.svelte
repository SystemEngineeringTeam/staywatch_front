<script lang="ts">
  let grade = '';
  let name = '';
  let number = '';
  let address = '';

  let gradeList: string[] = [];
  let nameList: string[] = [];
  let numberList: string[] = [];
  let addressList: string[] = [];

  $: disabledCreateButton = grade === '' || name === '' || number === '' || address === '';

  // 作成ボタンを押したときの処理
  const handleClickCreateButton = () => {
    gradeList = [...gradeList, grade];
    nameList = [...nameList, name];
    numberList = [...numberList, number];
    addressList = [...addressList, address];
    grade = '';
    name = '';
    number = '';
    address = '';
  };
  // 削除処理
  const completeItem = (index: number) => {
    gradeList = gradeList.filter((_, i) => i !== index);
    nameList = nameList.filter((_, i) => i !== index);
    numberList = numberList.filter((_, i) => i !== index);
    addressList = addressList.filter((_, i) => i !== index);
  };
</script>

<div class="admini">
  <h1>管理人</h1>
  <div class="page">
    <div class="add">
      <h1>新規登録</h1>

      <input type="text" class="name" placeholder="名前" bind:value={name} />

      <input type="text" class="grade" placeholder="学年" bind:value={grade} />

      <input type="text" class="number" placeholder="学籍番号" bind:value={number} />

      <input type="text" class="address" placeholder="MACアドレス" bind:value={address} />

      <button class="entry" disabled={disabledCreateButton} on:click={handleClickCreateButton}
        >登録</button
      >
    </div>
    <div class="list">
      <h1>登録者一覧</h1>
      <table class="listHead">
        <thead>
          <tr>
            <td class="gradeList">学年</td>
            <td class="numberList">学籍番号</td>
            <td class="nameList">名前</td>
          </tr>
        </thead>
      </table>

      <div class="scroll">
        {#if gradeList.length === 0}
          <div>誰も登録されていません</div>
        {:else}
          {#each gradeList as gradeItem, index}
            <table class="entryList">
              <tr>
                <td class="gradeList">{gradeItem}</td>
                <td class="numberList">{numberList[index]}</td>
                <td class="nameList">
                  {nameList[index]}
                  <button class="delete" on:click={() => completeItem(index)}>削除</button>
                </td>
              </tr>
            </table>
          {/each}
        {/if}
      </div>
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
        box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);
        background-color: white;
        margin-top: 80px;
        margin-left: 5%;
        width: 90%;
        height: 350px;
        border-radius: 20px;
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
          border: solid 2px #717171;
        }
        .grade {
          margin-top: 20px;
          margin-left: 10%;
          margin-right: auto;
          width: 80%;
          height: 35px;
          border-radius: 10px;
          background-color: white;
          border: solid 2px #717171;
        }
        .number {
          margin-top: 20px;
          margin-left: 10%;
          margin-right: auto;
          width: 80%;
          height: 35px;
          border-radius: 10px;
          background-color: white;
          border: solid 2px #717171;
        }
        .address {
          margin-top: 20px;
          margin-left: 10%;
          margin-right: auto;
          width: 80%;
          height: 35px;
          border-radius: 10px;
          background-color: white;
          border: solid 2px #717171;
        }
        .entry {
          margin-top: 20px;
          margin-left: 10%;
          margin-right: auto;
          width: 80%;
          height: 40px;
          border-radius: 10px;
          background-color: #a6a6a6;
          color: white;
          font-size: 30px;
        }
        .entry:hover {
          background-color: #787878;
        }
      }
      .list {
        box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);
        margin-top: 80px;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 20px;
        width: 90%;
        height: 350px;
        background-color: #ffffff;
        border-radius: 20px;
        h1 {
          font-size: 30px;
          text-align: center;
          margin-top: 15px;
        }
        .scroll {
          margin-left: 10%;
          margin-right: auto;
          width: 80%;
          height: 240px;
          background-color: white;
          border: solid 2px #c6c4c4;
          overflow-y: scroll;
        }
      }
    }

    @media (min-width: 900px) {
      .page {
        display: flex;
        .add {
          box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);
          margin-top: 80px;
          margin-left: 5%;
          width: 90%;
          height: 350px;
          border-radius: 20px;
          background-color: #ffffff;
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
          .grade {
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
            background-color: #a6a6a6;
            color: white;
            font-size: 30px;
          }
          .entry:hover {
            background-color: #787878;
          }
        }
      }
    }
  }
  .list {
    h1 {
      font-size: 30px;
      text-align: center;
      margin-top: 15px;
    }
    .scroll {
      .list {
        background-color: white;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
      }

      .list li {
        font-size: 10px;
        display: flex;
      }

      .list li > div {
        margin-bottom: 5px;
      }

      .name-item {
        font-weight: 10px;
      }
    }
  }
  .listHead {
    width: 80%;
    font-size: 20px;
    margin-left: 10%;
    background-color: #d4d4d4;
    text-align: center;
    border-radius: 10px 10px 0 0;

    .nameList {
      width: 34%;
    }
    .numberList {
      width: 34%;
    }
    .grade {
      width: 34%;
    }
  }
  .entryList {
    background-color: white;
    width: 100%;
    font-size: 15px;
    text-align: center;
    border-bottom: 1px solid black;
    .nameList {
      width: 34%;
    }
    .numberList {
      width: 34%;
    }
    .grade {
      width: 34%;
    }
  }
</style>
