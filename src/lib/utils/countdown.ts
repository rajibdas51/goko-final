export const calculateTimeLeft = (
    targetDate: Date,
): {
    days: number
    hours: number
    minutes: number
    seconds: number
} => {
    const difference = +targetDate - +new Date()

    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

export const formatTimeUnit = (value: number): string => {
    return value.toString().padStart(2, "0")
}
