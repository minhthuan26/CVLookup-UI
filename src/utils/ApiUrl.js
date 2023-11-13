export const host = 'http://localhost:3026'
const prefix = '/api/v1'

export const defaultUrl = `${host}${prefix}`

export const hubConnectionUrl = `${host}/notification/hub`

export const authUrl = {
    login: `${host}${prefix}/Auth/login`,
    logout: `${host}${prefix}/Auth/logout`,
    registerCandidate: `${host}${prefix}/Auth/register-candidate`,
    registerEmployer: `${host}${prefix}/Auth/register-employer`,
    renewToken: `${host}${prefix}/Auth/renew-token`,
    restoreRefreshToken: `${host}${prefix}/Auth/restore-refresh-token?userId=`,
}

export const recruitmentUrl = {
    getNewestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_desc`,
    getOldestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_asc`,
}

export const CVUrl = {
    getAllCV: `${host}${prefix}/CurriculumVitae/get-all-curriculum-vitae`,
    deleteCV: `${host}${prefix}/CurriculumVitae/delete-curriculum-vitae`,
    downloadCV: `${host}${prefix}/CurriculumVitae/download-curriculum-vitae`,
    getCVbyId: `${host}${prefix}/CurriculumVitae/get-curriculum-vitae-by-id`,
    addCV: `${host}${prefix}/CurriculumVitae/add-curriculum-vitae`,
}
