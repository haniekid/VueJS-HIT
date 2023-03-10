<script setup>
import {computed, ref} from "vue"
import users from "./data.js"

const handleDelete = (users, index) => {
    users.splice(index, 1)
}

</script>

<template>
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <select  :selected="Genderrr"> 
                      <option value="#">Gender</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                    </select>
                    <th>Delete</th>
                </tr>
            </thead>
    
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id" :id="user.id">
                    <td v-for="(value, key) in user" >
                        {{ value }}
                    </td>
                    <button @click.prevent="handleDelete(users, index)">Xóa</button>
                </tr>
            </tbody>
    
      </table>

</template>

<style scoped lang="css">

th, td, select, button {
    padding: 0.5rem 1.2rem;
    border: 1px solid #ccc ;
}

button {
    cursor: pointer;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

table{
    margin: 10rem auto;
}

 
</style>