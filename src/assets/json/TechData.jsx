import {
    htmlSvg, cssSvg, scssSvg, jsSvg, reactSvg, reactbitSvg, tailwindSvg,
    bootstrapSvg, flowbiteSvg, materialuiSvg, daisyuiSvg, coreuiSvg,
    phpSvg, laravelSvg, pythonSvg, nodejsSvg, expressjsSvg, composerSvg,
    mysqlSvg, postgresqlSvg, mongodbSvg, sqlliteSvg, xamppSvg,
    vscodeSvg, gitSvg, githubSvg, viteSvg, npmSvg,
    figmaSvg, canvaSvg, codepenSvg, postmanSvg
} from "../../components/path/svgPath";

import {
    aboutImg, contactImg, formalImg, homeImg, lanyardImg, beachImg, portfolioImg, resumeImg,
    servicesImg, skillsImg, togaTransShadeImg, togaTransImg, togaImg, witiLogoCircleImg, witiImg,

    googlefontsImg, magicuiImg, uiverseImg, devslokauiImg, fontawesomeImg
} from "../../components/path/imagesPath";

const techData = {
    frontend: [
        { stack: "HTML", path: htmlSvg, bg_color: "#E34F26" },
        { stack: "CSS", path: cssSvg, bg_color: "#1572B6" },
        { stack: "SCSS", path: scssSvg, bg_color: "#CD6799" },
        { stack: "JavaScript", path: jsSvg, bg_color: "#F7DF1E" },
        { stack: "React", path: reactSvg, bg_color: "#61DAFB" },
        { stack: "React Bits", path: reactbitSvg, bg_color: "#61DAFB" },
        { stack: "Tailwind", path: tailwindSvg, bg_color: "#06B6D4" },
        { stack: "Bootstrap", path: bootstrapSvg, bg_color: "#7952B3" },
        { stack: "Flowbite", path: flowbiteSvg, bg_color: "#1E40AF" },
        { stack: "Material UI", path: materialuiSvg, bg_color: "#0081CB" },
        { stack: "DaisyUI", path: daisyuiSvg, bg_color: "#F9A825" },
        { stack: "CoreUI", path: coreuiSvg, bg_color: "#3E4095" }
    ],
    backend: [
        { stack: "PHP", path: phpSvg, bg_color: "#777BB4" },
        { stack: "Laravel", path: laravelSvg, bg_color: "#FF2D20" },
        { stack: "Python", path: pythonSvg, bg_color: "#3776AB" },
        { stack: "Node.js", path: nodejsSvg, bg_color: "#339933" },
        { stack: "Express.js", path: expressjsSvg, bg_color: "#000000" },
        { stack: "Composer", path: composerSvg, bg_color: "#885630" }
    ],
    database_server: [
        { stack: "MySQL", path: mysqlSvg, bg_color: "#4479A1" },
        { stack: "PostgreSQL", path: postgresqlSvg, bg_color: "#336791" },
        { stack: "MongoDB", path: mongodbSvg, bg_color: "#47A248" },
        { stack: "SQLite", path: sqlliteSvg, bg_color: "#003B57" },
        { stack: "XAMPP", path: xamppSvg, bg_color: "#FF9A00" }
    ],
    tools: [
        { stack: "VSCode", path: vscodeSvg, bg_color: "#007ACC" },
        { stack: "Git", path: gitSvg, bg_color: "#F05032" },
        { stack: "GitHub", path: githubSvg, bg_color: "#181717" },
        { stack: "Vite", path: viteSvg, bg_color: "#646CFF" },
        { stack: "NPM", path: npmSvg, bg_color: "#CB3837" },
        { stack: "Postman", path: postmanSvg, bg_color: "#EF5B25" }
    ],
    template_design: [
        { stack: "Figma", path: figmaSvg, bg_color: "#F24E1E" },
        { stack: "Canva", path: canvaSvg, bg_color: "#00C4CC" },
        { stack: "CodePen", path: codepenSvg, bg_color: "#000000" },
        { stack: "Google Fonts", path: googlefontsImg, bg_color: "#4285F4" },
        { stack: "Magic UI", path: magicuiImg, bg_color: "#FF4C00" },
        { stack: "UI Verse", path: uiverseImg, bg_color: "#1D1D1F" },
        { stack: "Devsloka UI", path: devslokauiImg, bg_color: "#FF6600" },
        { stack: "Font Awesome", path: fontawesomeImg, bg_color: "#528DD4" }
    ]
};

export default techData;