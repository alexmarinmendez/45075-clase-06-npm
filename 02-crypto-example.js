const crypto = require('crypto')

let DB = []

class UserManager {
    getUsers = () => {
        return DB
    }

    insertUser = user => {
        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update((user.password)).digest('hex')
        DB.push(user)
        return user
    }

    validateUser = (username, password) => {
        const user = DB.find(u => u.username == username)
        if (!user) {
            console.log('User not found')
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update((password)).digest('hex')

        if (newHash == user.password) console.log('Logged!')
        else console.log('Invalid password')
    }
}

const manager = new UserManager()
manager.insertUser({
    name: 'Alex',
    lastname: 'Marin Mendez',
    username: 'alexmarinmendez',
    password: 'c0d3r'
})

console.log(manager.getUsers())
manager.validateUser('alexmarinmendez', 'c0d3r')