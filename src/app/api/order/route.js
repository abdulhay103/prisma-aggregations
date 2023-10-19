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
        let result = await prisma.order.create({
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
        let result = await prisma.order.findMany();
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
        let result = await prisma.order.update({
            where: {
                id: 2,
            },
            data: {
                title: "Nature",
                metaTitle: "Bangladesh and its Nature",
                slug: "amet consectetur adipisicing elit.",
                content: " Lorem ipsum dolor sit",
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
        let result = await prisma.order.delete({
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
