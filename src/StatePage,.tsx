import { useSelector } from "react-redux";
import type { RootState } from "./state/store";

const Element: React.FC<{ property: any }> = ({ property }) => {

    switch (typeof property == "object") {
        case false:
            return `${property}`

        case true:
            if (property.length) {
                return <>
                    {property.map((item: any) => <Element property={item} />)}
                    <br />
                </>
            } else {
                return (
                    <>
                        {Object.keys(property).map(key => <>
                            <br />
                            <span>
                                ----{key}: {<Element property={property[key]} />}
                            </span>
                        </>)}
                        <br />
                    </>
                )
            }
    }
}

const StatePage: React.FC = () => {
    const state = useSelector((state: RootState) => state)
    console.log(state.posts)

    return (
        <div className="text-left">
            {
                Object.keys(state).map(slice => <p key={slice}>
                    {slice}:
                    <br />

                    {
                        Object.keys(state[slice as keyof object]).map(key => <>
                            <span>
                                --{key}: <Element property={state[slice as keyof object][key]} />
                            </span>
                            <br />
                        </>)
                    }

                </p>)
            }
        </ div>
    )
}
export default StatePage;