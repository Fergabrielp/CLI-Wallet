import fs from 'fs'

export const read = (file) => {
    return new Promise((resolve, rejected) => {
        fs.readFile(file, "utf-8", (error, content) => {
            if (error) {
                rejected(error)
            } else {
                resolve(JSON.parse(content))
            }
        })
    })
}

export const write = (file, newData) => {
    return new Promise((resolve, rejected) => {
        fs.writeFile(file, JSON.stringify(newData), (error) => {
            if (error) {
                rejected(error)
            } else {
                resolve("New data added")
            }
        })
    })
}