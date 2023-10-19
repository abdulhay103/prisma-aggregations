import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Create Data
export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();

        const createUser = prisma.user.create({
            data: {
                firstName: "firstName",
                middleName: "middleName",
                lastName: "lastName",
                mobile: "mobile2",
                email: "email2",
                admin: 1,
                password: "password",
            },
        });
        const createCategory = prisma.category.create({
            data: {
                title: "title",
                metaTitle: "metaTitle",
                slug: "slug",
                content: "content",
            },
        });

        const result = await prisma.$transaction([createUser, createCategory]);

        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
