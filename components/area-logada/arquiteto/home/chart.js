"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
}

export function ChartBarDefault({ data, title }) {
    return (
        <Card className={"p-2 m-2"}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="status"
                            tickLine={true}
                            tickMargin={10}
                            axisLine={false}
                            height={50}
                            tickFormatter={(value) => value.slice(0, 8)}


                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="_count" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>

            </CardContent>

        </Card>
    )
}
