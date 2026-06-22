function analyzeReel(){

    let text =
    document.getElementById("script").value;

    let hook = 50;
    let engagement = 50;
    let cta = 20;

    if(
        text.includes("?")
    ){
        hook += 20;
    }

    if(
        text.length > 100
    ){
        engagement += 20;
    }

    if(
        text.toLowerCase().includes("comment")
        ||
        text.toLowerCase().includes("follow")
    ){
        cta += 50;
    }

    let viral =
    Math.round(
        (hook+engagement+cta)/3
    );

    document.getElementById("result").innerHTML=
    `
    <h2>Results</h2>

    Hook Score: ${hook}/100 <br>
    Engagement: ${engagement}/100 <br>
    CTA: ${cta}/100 <br>
    Viral Score: ${viral}/100
    `;
}
