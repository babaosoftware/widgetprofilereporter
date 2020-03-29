export const sortByName = () => ({
    type: 'SORT_BY_NAME',
});

export const sortByCount = () => ({
    type: 'SORT_BY_COUNT',
});

export const sortByTime = () => ({
    type: 'SORT_BY_TIME',
});

// const testResult =
//     { "ibi-ibxCommand": { "count": 43, "time": 25 }, "ibi-ibxHBox": { "count": 140, "time": 42 }, "ibi-dfFrameworkRun": { "count": 1, "time": 1 }, "ibi-ibxVBox": { "count": 225, "time": 54 }, "ibi-ibxButtonSimple": { "count": 28, "time": 14 }, "ibi-ibxMenuItem": { "count": 9, "time": 13 }, "ibi-ibxLabel": { "count": 336, "time": 157 }, "ibi-ibxMenu": { "count": 92, "time": 86 }, "ibi-ibxSplitMenuButton": { "count": 1, "time": 11 }, "ibi-ibxMenuButton": { "count": 91, "time": 132 }, "ibi-ibxCheckMenuItem": { "count": 6, "time": 10 }, "ibi-ibxMenuSeparator": { "count": 5, "time": 3 }, "ibi-ibxRadioGroup": { "count": 43, "time": 22 }, "ibi-ibxRadioMenuItem": { "count": 157, "time": 201 }, "ibi-recordLimitDlgMenuItem": { "count": 1, "time": 3 }, "ibi-ibxButton": { "count": 163, "time": 88 }, "ibi-ibxCheckBoxSimple": { "count": 100, "time": 66 }, "ibi-filterBar": { "count": 1, "time": 10 }, "ibi-pdFilterGrid": { "count": 1, "time": 1 }, "ibi-pdContent": { "count": 9, "time": 11 }, "ibi-pdContainer": { "count": 9, "time": 68 }, "ibi-pdPageSection": { "count": 1, "time": 73 }, "ibi-pdPage": { "count": 1, "time": 109 }, "ibi-ibxWidget": { "count": 39, "time": 15 }, "ibi-ibxVSplitter": { "count": 1, "time": 0 }, "ibi-ibxCarousel": { "count": 1, "time": 28 }, "ibi-ibxAccordionPane": { "count": 1, "time": 2 }, "ibi-ibxWaiting": { "count": 1, "time": 1 }, "ibi-ibxAccordionPage": { "count": 28, "time": 65 }, "ibi-baseCanvas": { "count": 9, "time": 934 }, "ibi-wfcHeading": { "count": 9, "time": 405 }, "ibi-ibxRichEdit": { "count": 18, "time": 18 }, "ibi-wfcFooting": { "count": 9, "time": 458 }, "ibi-mdFieldsPanel": { "count": 1, "time": 104 }, "ibi-ibxTextField": { "count": 1, "time": 2 }, "ibi-mdTree": { "count": 4, "time": 4 }, "ibi-ibxHSplitter": { "count": 1, "time": 0 }, "ibi-ibxTabPage": { "count": 2, "time": 10 }, "ibi-ibxTabButton": { "count": 20, "time": 22 }, "ibi-sysVarTreeNode": { "count": 5, "time": 11 }, "ibi-wfcTreeNode": { "count": 1, "time": 2 }, "ibi-ibxTabPane": { "count": 10, "time": 153 }, "ibi-ibxHTabGroup": { "count": 10, "time": 78 }, "ibi-mdTreeNode": { "count": 3, "time": 8 }, "ibi-tableBuilder": { "count": 9, "time": 204 }, "ibi-bucketPage": { "count": 9, "time": 22 }, "ibi-formatPage": { "count": 9, "time": 16 }, "ibi-bucketPanel": { "count": 9, "time": 657 }, "ibi-bucketToolbar": { "count": 9, "time": 282 }, "ibi-bucketGroup": { "count": 9, "time": 1 }, "ibi-filterBucket": { "count": 9, "time": 38 }, "ibi-contentPane": { "count": 9, "time": 176 }, "ibi-ibxSpinner": { "count": 9, "time": 42 }, "ibi-ibxVButtonGroup": { "count": 9, "time": 5 }, "ibi-ibxVAccordionPane": { "count": 9, "time": 39 }, "ibi-formatPanel": { "count": 9, "time": 99 }, "ibi-ibxSelectItem": { "count": 63, "time": 29 }, "ibi-ibxSelect": { "count": 9, "time": 32 }, "ibi-ibxSelectItemList": { "count": 9, "time": 3 }, "ibi-ibxPopup": { "count": 9, "time": 7 }, "ibi-bucket": { "count": 63, "time": 370 }, "ibi-bucketPill": { "count": 18, "time": 90 }, "ibi-previewTimer": { "count": 9, "time": 37 } };

export const fetchResult = () => {
    return (dispatch) => {
        dispatch(loading());
        const resObj = JSON.parse(localStorage.getItem("widgetCreationProfiling"));
        // const resObj = testResult;
        const result = resObj ? Object.keys(resObj).reduce((prev, current) => {
            prev.push({ name: current, count: resObj[current].count, time: resObj[current].time });
            return prev;
        }, []) :
            [];
        dispatch(loaded(result));
    };
}



export const loading = () => ({ type: 'LOADING' });
export const loaded = (result) => ({ type: 'LOADED', result });