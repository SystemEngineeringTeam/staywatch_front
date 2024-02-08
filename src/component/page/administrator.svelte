<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_API_URL } from '$env/static/public';

  type User = {
    grade: string;
    name: string;
    number: string;
    address: string;
  };

  type UserWithId = User & {
    id: string;
  };

  let userList: UserWithId[] = [];
  let grade = '';
  let name = '';
  let number = '';
  let address = '';

  $: disabledCreateButton = grade === '' || name === '' || number === '' || address === '';

  const fetchUsers = async () => {
    const url = new URL(PUBLIC_API_URL);
    url.pathname = '/api/users/get';

    await fetch(url.toString())
      .then((res) => res.json())
      .then((data) => (userList = data.users));
  };

  const createUser = async (user: User) => {
    const sendData = {
      user: {
        name: user.name,
        grade: user.grade,
        studentNumber: user.number,
        MACAddress: user.number
      }
    };

    const url = new URL(PUBLIC_API_URL);
    url.pathname = '/api/user/add';

    const res = await fetch(url.toString(), { method: 'POST', body: JSON.stringify(sendData) })
      .then((response) => {
        if (!response.ok) throw new Error('error');
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
    return res;
  };

  const deleteUser = async (user: UserWithId) => {
    const sendData = {
      user: { id: user.id }
    };

    const url = new URL(PUBLIC_API_URL);
    url.pathname = '/api/user/delete';

    const res = await fetch(url.toString(), { method: 'DELETE', body: JSON.stringify(sendData) })
      .then((response) => {
        if (!response.ok) throw new Error('error');
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
    return res;
  };

  // 作成ボタンを押したときの処理
  const handleClickCreateButton = async () => {
    const editUser: User = {
      grade,
      name,
      number,
      address
    };
    const res = await createUser(editUser);
    if (res == null) {
      window.alert('登録に失敗しました');
    } else {
      await fetchUsers();

      grade = '';
      name = '';
      number = '';
      address = '';
    }
  };

  // 削除処理
  const deleteItem = async (index: number) => {
    const res = await deleteUser(userList[index]);
    if (res === null) {
      window.alert('消除に失敗しました');
    } else {
      await fetchUsers();
    }
  };

  onMount(async () => await fetchUsers());
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
        {#if userList.length === 0}
          <div>登録されていません</div>
        {:else}
          {#each userList as user, index}
            <table class="entryList">
              <tr>
                <td class="gradeList">{user.grade}</td>
                <td class="numberList">{user.number}</td>
                <td class="nameList">
                  {user.name}
                  <button class="delete" on:click={() => deleteItem(index)}>削除</button>
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
  }
</style>
