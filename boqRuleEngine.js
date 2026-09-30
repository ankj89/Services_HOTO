/* ===========================================================
   COMMON BOQ RULE ENGINE
=========================================================== */


/* ===========================================================
   GET RULE
=========================================================== */

function getBOQRule(questionId) {

    return BOQ_RULES[questionId] || null;

}


/* ===========================================================
   GET TRADE
=========================================================== */

function getBOQTrade(question) {

    const rule = getBOQRule(question.id);

    if (rule && rule.scope) {

        const parts = rule.scope.split("|");

        return parts[0] || question.trade || "";

    }

    return question.trade || "";

}


/* ===========================================================
   GET CATEGORY
=========================================================== */

function getBOQCategory(question) {

    const rule = getBOQRule(question.id);

    if (rule && rule.scope) {

        const parts = rule.scope.split("|");

        return parts[1] || question.category || "";

    }

    return question.category || "";

}


/* ===========================================================
   GET REQUIREMENT
=========================================================== */

function getBOQRequirement(question) {

    if (!question) {
        return "";
    }

    const rule = getBOQRule(question.id);

    if (rule && rule.requirement) {
        return rule.requirement;
    }

    return question.question || "";

}


/* ===========================================================
   GET BOQ IMPACT
=========================================================== */

function getBOQImpact(questionId) {

    const rule = getBOQRule(questionId);

    if (!rule || !Array.isArray(rule.boq)) {
        return "";
    }

    return rule.boq.join(" + ");

}


/* ===========================================================
   CREATE ACTION SUMMARY ROW
=========================================================== */

function getActionSummaryRow(question, room, scope) {

    if (!question) {
        return null;
    }

    /*
       NO = no LS action required.
       Therefore no Action Summary row.
    */

    if (scope === "No") {
        return null;
    }


    const row = {

        room: room || "",

        trade: getBOQTrade(question),

        category: getBOQCategory(question),

        requirement: getBOQRequirement(question),

        boqImpact: ""

    };


    /*
       Cx scope does not create an LS BOQ item.
    */

    if (scope === "Cx") {

        row.boqImpact = "Coordination with Cx";

    }


    /*
       Yes = LS Scope.
       Apply the question-specific BOQ rule.
    */

    else if (scope === "Yes") {

        row.boqImpact = getBOQImpact(question.id);

    }


    return row;

}
