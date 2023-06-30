// 子应用repo信息
const getrepositoryUrl = (path) => {
    return `git@gitlab.followme-internal.com:Frontend/dc/${path}.git`
}

const projects = [
    {
        name: 'lib-broker-component'
    },
    {
        name: 'node-static-email'
    },
    {
        name: 'lib-broker-crm'
    },
    {
        name: 'lib-broker-business'
    },
    {
        name: 'ssr-trade'
    },
    {
        name: 'ssr-cms'
    },
    {
        name: 'ssr-broker-main'
    },
    {
        name: 'ssr-broker-hub'
    },
    {
        name: 'ssr-broker-account'
    },
    {
        name: 'ssr-im'
    },
    {
        name: 'ssr-broker-opa'
    },
    {
        name: 'ssr-broker-api'
    },
    {
        name: 'ssr-broker-crm-hub'
    },
    {
        name: 'ssr-broker-crm-content'
    },
    {
        name: 'ssr-broker-crm'
    },
    {
        name: 'ssr-crm-language'
    },
    {
        name: 'ssr-broker-pdf'
    },
    {
        name: 'ssr-broker-content'
    },
    {
        name: 'ssr-oms'
    },
    {
        name: 'ssr-remote'
    },
    {
        name: 'task-sitemap'
    }
].map((item) => {
    return {
        name: item.name,
        repo: getrepositoryUrl(item.name),
        branch: 'master'
    }
})

exports.repoInfos = projects

// 代码下载目录
exports.downloadDir = 'codes';                                        