import { prisma } from "../db/prisma";

export default async function stringForSlug(string: string): Promise<string> {



    const today = new Date()
    const first = string
    .normalize("NFD") ///para separar letra de acento
    .replace(/[\u0300-\u036f]/g, '') //retirar acento
    .toLowerCase()
    .trim()
    .replace(/\s/g, "-");//trocar espacos por -
    const second = first + "-" + today.getFullYear();
    const third = crypto.randomUUID()

    const arrayForTest = [first, second, third]

    let choosen: string = third; // Default to 'third' if no unique slug is found

    for (let i = 0; i < arrayForTest.length; i++) {
        const response = await prisma.project.findUnique({ where: { slug: arrayForTest[i] } })
        if (!response) {
            choosen = arrayForTest[i];
            break;
        }

    }

    return choosen;

}

