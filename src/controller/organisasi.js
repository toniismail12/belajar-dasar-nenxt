import { apiSatu } from "@/api";

async function GetOrg(pages, limits, text, code, org_code, report_to, level, status, uid_parent) {

    const config = {
        params: { 
            page: pages,
            limit: limits,
            text: text,
            code: code,
            org_code: org_code,
            code_parent: report_to,
            level: level,
            status: status,
            uid_parent: uid_parent,
        },
    }

    try {
        const res = await apiSatu.get("/api/organization", config);
        // console.log('Response:', res;
        return res

    } catch (error) {
        console.error('Error:', error);
        return "error"
    }

    // return "error"

}

export default GetOrg
export { GetOrg }
