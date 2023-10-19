import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Create Data
export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let result = await prisma.product.create({
            data: reqBody,
        });
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

//Read Data
export async function GET() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        let result = await prisma.product.findMany();
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Success",
            data: error.toString(),
        });
    }
}

//Update Data
export async function PUT() {
    try {
        const prisma = new PrismaClient();
        let result = await prisma.product.create({
            data: {
                name: reqBody["name"],
                metaTitle: reqBody["metaTitle"],
                slug: reqBody["slug"],
                summary: reqBody["summary"],
                price: reqBody["price"],
                discount: reqBody["discount"],
                userId: reqBody["userId"],
                product_meta: {
                    create: {
                        key: reqBody["key"],
                        content: reqBody["meta_content"],
                    },
                },
                product_review: {
                    create: {
                        title: reqBody["review_title"],
                        ratting: reqBody["ratting"],
                        content: reqBody["review_content"],
                    },
                },
            },
        });
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

//Delete Data
export async function DELETE(req) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        let id = searchParams.get("id");
        let result = await prisma.product.delete({
            where: {
                id: id,
            },
        });
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
