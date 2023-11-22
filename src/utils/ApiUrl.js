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
    restoreRefreshToken: `${host}${prefix}/Auth/restore-refresh-token`,
    activeAccount: `${host}${prefix}/Auth/active-account`,
}

export const recruitmentUrl = {
    getNewestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_desc`,
    getOldestJob: `${host}${prefix}/Recruitment/get-recruitment?SortBy=date_asc`,
    getJobDetailById: `${host}${prefix}/Recruitment/get-recruitment-by-id`,
    getAllRecruitment: `${host}${prefix}/Recruitment/get-all-recruitment`,
    addRecruitment: `${host}${prefix}/Recruitment/add-recruitment`,
    deleteRecruitment: `${host}${prefix}/Recruitment/delete`,
    updateRecruitment: `${host}${prefix}/Recruitment/update`,
}

export const CVUrl = {
    getAllCV: `${host}${prefix}/CurriculumVitae/get-all-curriculum-vitae`,
    deleteCV: `${host}${prefix}/CurriculumVitae/delete-curriculum-vitae`,
    downloadCV: `${host}${prefix}/CurriculumVitae/download-curriculum-vitae`,
    getCVbyId: `${host}${prefix}/CurriculumVitae/get-curriculum-vitae-by-id`,
    uploadCV: `${host}${prefix}/CurriculumVitae/upload-curriculum-vitae`,
    getAllCVUploaded: `${host}${prefix}/CurriculumVitae/get-current-user-cv-uploaded`,
}

export const jobFieldUrl = {
    getAll: `${host}${prefix}/JobField/get-all-job-field`,
}

export const jobCareerUrl = {
    getAll: `${host}${prefix}/JobCareer/get-all-job-career`,
}

export const jobAddressUrl = {
    getAllProvince: `${host}${prefix}/JobAddress/get-all-province`,
}

export const experienceUrl = {
    getAllExperience: `${host}${prefix}/Experience/get-all-experience`,
}

export const recruitmentCVUrl = {
    applyCVToRecruitment: `${host}${prefix}/RecruitmentCV/apply-to-recruitment`,
    reApplyCVToRecruitment: `${host}${prefix}/RecruitmentCV/update-applied-cv`,
    getAppliedCV: `${host}${prefix}/RecruitmentCV/get-by-user-and-recruitment-id`,
    getCvByRecruitmentId: `${host}${prefix}/RecruitmentCV/get-by-recruitment-id`,
    updateIsView: `${host}${prefix}/RecruitmentCV/update-isView`,
    toggleIsPass: `${host}${prefix}/RecruitmentCV/toggle-isPass`,
}

export const jobFormUrl = {
    getAll: `${host}${prefix}/JobForm/get-all-job-form`,
}

export const JobPositionUrl = {
    getAll: `${host}${prefix}/JobPosition/get-all-job-position`,
}
