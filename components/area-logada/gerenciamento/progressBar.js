'use client'

import getPercentageOfTasks from "@/lib/utilis/percentageTask";

export default function ProgressBar({tasks }) {

    const percentage = getPercentageOfTasks(tasks)

    return (

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-black-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${percentage}%` }}> {percentage}%</div>
        </div>

    )
}