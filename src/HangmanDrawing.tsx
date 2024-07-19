const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }}></div>
)

const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0,
    }}></div>
)

const RIGHT_ARMY = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-88px",
        rotate: "-35deg",
        msTransformOrigin: "left bottom"
    }}></div>
)

const LEFT_ARMY = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-2px",
        rotate: "35deg",
        msTransformOrigin: "right bottom"
    }}></div>
)

const RIGHT_LEG= (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "255px",
        right: "-69px",
        rotate: "60deg",
        msTransformOrigin: "left bottom"
    }}></div>
)

const LEFT_LEG= (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "255px",
        right: "-20px",
        rotate: "-60deg",
        msTransformOrigin: "right bottom"
    }}></div>
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS = [ HEAD,
    BODY,
    RIGHT_ARMY,
    LEFT_ARMY,
    RIGHT_LEG,
    LEFT_LEG]

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
        }}
        />

        <div style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px"
        }}
        />

        <div style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px"
        }}
        />
        <div style={{ height: "10px", width: "250px", background: "black" }}></div>
    </div>
}