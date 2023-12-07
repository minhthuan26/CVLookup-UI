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
    getAllRecruitmentByEmployer: `${host}${prefix}/Recruitment/get-all-recruitment-by-employer`,
    addRecruitment: `${host}${prefix}/Recruitment/add-recruitment`,
    deleteRecruitment: `${host}${prefix}/Recruitment/delete`,
    updateRecruitment: `${host}${prefix}/Recruitment/update`,
    getAll: `${host}${prefix}/Recruitment/get-all-recruitment`,
    searchRecruitment: `${host}${prefix}/Recruitment/get-recruitment`,
}

export const CVUrl = {
    getAllCV: `${host}${prefix}/CurriculumVitae/get-all-curriculum-vitae`,
    getAllCVbyCandidateId: `${host}${prefix}/CurriculumVitae/get-curriculum-vitae-by-candidateId`,
    deleteCV: `${host}${prefix}/CurriculumVitae/delete-curriculum-vitae`,
    downloadCV: `${host}${prefix}/CurriculumVitae/download-curriculum-vitae`,
    getCVbyId: `${host}${prefix}/CurriculumVitae/get-curriculum-vitae-by-id`,
    uploadCV: `${host}${prefix}/CurriculumVitae/upload-curriculum-vitae`,
    getAllCVUploaded: `${host}${prefix}/CurriculumVitae/get-current-user-cv-uploaded`,
}

export const jobFieldUrl = {
    getAll: `${host}${prefix}/JobField/get-all-job-field`,
    getById: `${host}${prefix}/JobField/get-job-field-by-id`,
    addField: `${host}${prefix}/JobField/add-job-field`,
    updateField: `${host}${prefix}/JobField/update`,
    deleteField: `${host}${prefix}/JobField/delete`,
}

export const jobCareerUrl = {
    getAll: `${host}${prefix}/JobCareer/get-all-job-career`,
    getById: `${host}${prefix}/JobCareer/get-job-career-by-id`,
    addCareer: `${host}${prefix}/JobCareer/add-job-career`,
    updateCareer: `${host}${prefix}/JobCareer/update`,
    deleteCareer: `${host}${prefix}/JobCareer/delete`,
}

export const jobAddressUrl = {
    getAllProvince: `${host}${prefix}/JobAddress/get-all-province`,
}

export const experienceUrl = {
    getAllExperience: `${host}${prefix}/Experience/get-all-experience`,
    deleteExperience: `${host}${prefix}/Experience/delete`,
    updateExperience: `${host}${prefix}/Experience/update`,
    addExperience: `${host}${prefix}/Experience/add-experience`,
    getById: `${host}${prefix}/Experience/get-experience-by-id`,
}

export const recruitmentCVUrl = {
    applyCVToRecruitment: `${host}${prefix}/RecruitmentCV/apply-to-recruitment`,
    reApplyCVToRecruitment: `${host}${prefix}/RecruitmentCV/update-applied-cv`,
    getAppliedCV: `${host}${prefix}/RecruitmentCV/get-all-cv-applied`,
    getCvByRecruitmentId: `${host}${prefix}/RecruitmentCV/get-by-recruitment-id`,
    getCvByIsPass: `${host}${prefix}/RecruitmentCV/get-by-isPass`,
    updateIsView: `${host}${prefix}/RecruitmentCV/update-isView`,
    toggleIsPass: `${host}${prefix}/RecruitmentCV/toggle-isPass`,
    getBy_CvId_And_RecruitmentId: `${host}${prefix}/RecruitmentCV/get-by-cv-and-recruitment-id`,
}

export const jobFormUrl = {
    getAll: `${host}${prefix}/JobForm/get-all-job-form`,
    getById: `${host}${prefix}/JobForm/get-job-form-by-id`,
    addForm: `${host}${prefix}/JobForm/add-job-form`,
    updateForm: `${host}${prefix}/JobForm/update`,
    deleteForm: `${host}${prefix}/JobForm/delete`,
}

export const JobPositionUrl = {
    getAll: `${host}${prefix}/JobPosition/get-all-job-position`,
    getById: `${host}${prefix}/JobPosition/get-job-position-by-id`,
    addPosition: `${host}${prefix}/JobPosition/add-job-position`,
    updatePosition: `${host}${prefix}/JobPosition/update`,
    deletePosition: `${host}${prefix}/JobPosition/delete`,
}

export const AccountUserUrl = {
    getAccountUserByRoleName: `${host}${prefix}/AccountUser/get-account-user-by-role-name`,
    deleteAccountUser: `${host}${prefix}/AccountUser/delete-account-user`,
    getByUserId: `${host}${prefix}/AccountUser/get-by-user-id`,
    getAllAccountUser: `${host}${prefix}/AccountUser/get-all-account-users`,
}

export const notificationUrl = {
    getNotificationByUserId: `${host}${prefix}/notification/get-notification-by-user-id`,
    updateViewStatus: `${host}${prefix}/notification/update-view-status`,
}
