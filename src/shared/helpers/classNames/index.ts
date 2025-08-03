type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[]): string => {

    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, val]) => Boolean(val))
            .map(([cls, _]) => cls),
        ...additional,
    ].join(' ')
}