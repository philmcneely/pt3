/**
 * Perform a key press
 * @param  {String}   text  The link text to find and click
 */
export default async (text: string | string[]) => {
    const linktext = '='+text;
    console.log(linktext);
    const link = await $('=MANGOCADOS');
    console.log(await link.getText()); // outputs: "Mangocados"
    console.log(await link.getAttribute('href')); // outputs: "market"
    await link.click();
};
