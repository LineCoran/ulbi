type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined | null)[] = []): string => {

    return [
        cls,
        ...Object.entries(mods)
            .filter(([, val]) => Boolean(val))
            .map(([cls]) => cls),
        ...additional.filter(cls => Boolean(cls)),
    ].join(' ').trim()
}