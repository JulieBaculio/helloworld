import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createUser() {
    await prisma.user.create({
        data: {
            firstName: "Julie",
            email: "julieanne@test.com",
            lastName: "Baculio",
            password: "hello",
        },
    })

}
createUser()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


async function retrieveUser() {
    const user = await prisma.user.findFirst({
        where: {
            email: "julieanne@test.com",
            password: "hello",
        },
    })

}
retrieveUser()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


