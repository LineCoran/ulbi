type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined | null)[] = []): string => {

    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, val]) => Boolean(val))
            .map(([cls, _]) => cls),
        ...additional.filter(cls => Boolean(cls)),
    ].join(' ')
}