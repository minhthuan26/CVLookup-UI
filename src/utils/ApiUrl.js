const host = 'http://localhost:3026'
const prefix = '/api/v1'

export const defaultUrl = `${host}${prefix}`

export const hubConnectionUrl = `${host}/notification/hub`

export const authUrl = {
    login: `${host}${prefix}/Auth/login`,
    logout: `${host}${prefix}/Auth/logout`,
    registerCandidate: `${host}${prefix}/Auth/register-candidate`,
    registerEmployer: `${host}${prefix}/Auth/register-employer`,
    renewToken: `${host}${prefix}/Auth/renew-token`,
    restoreRefreshToken: `${host}${prefix}/Auth/restore-refresh-token`,
    activeAccount: `${host}${prefix}/Auth/active-account`
}

export const recruitmentUrl = {
    getNewestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_desc`,
    getOldestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_asc`,
}
