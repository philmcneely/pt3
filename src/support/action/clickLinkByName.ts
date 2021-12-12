import { Selector } from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given link by text
 * @param  {String}   action  The action to perform (click)
 * @param  {String}   type    Type of the element (link)
 * @param  {String}   linkText link text
 */
export default async (
    action: 'click',
    type: 'link',
    linkText: Selector
) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = (type === 'link');

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click');

    await checkIfElementExists(selector2);

    await $(selector2)[method]();
};
