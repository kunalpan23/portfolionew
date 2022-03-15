import Social from "../social"

export default function () {
    return (
    <header className="main--header flex">
        <div className="md:container md:mx-auto box-border px-2.5 py-4 flex flex-1">
            <div className="main--header__logo flex-none">
                KP
            </div>
            <div className="flex flex-1 main--header__social justify-end">
                <Social />
            </div>
        </div>
    </header>
  )
}
