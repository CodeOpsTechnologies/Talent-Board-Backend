# TalentBoard Backend

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/CodeOpsTechnologies)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/CodeOpsTechnologies) 
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/CodeOpsTechnologies)

This is a community initiative to connect active job seekers with organizations and people who participate in employee referral programs.

Currently, we encourage only job seekers / candidates who lost their jobs in the pandemic scenario. Referrals should be verified via Linkedin profiles. (Click Linkedin Connect-> Save profile as PDF-> Refer). As a community, it will be a win-win situation for all of us if we can support and make the future safe for one another. Help them to resume their career by referring. #refer2resume

## Prerequisite
Your machine must have Node installed in your system.</br>
Your machine should have [serverless](https://www.npmjs.com/package/serverless) installed.

## Tech stack
<li>NodeJs</li>

## Getting Started
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CodeOpsTechnologies/talent-board-be?logo=github)](https://talent.awsug.in/) 
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CodeOpsTechnologies/talent-board-be?color=bluevoilet&logo=github)](https://github.com/CodeOpsTechnologies/talent-board-be/commits/) 
[![GitHub repo size](https://img.shields.io/github/repo-size/CodeOpsTechnologies/talent-board-be?logo=github)](https://talent.awsug.in/)

**1.** Fork this repository and clone into your local machine.
```bash
git clone https://github.com/<your-github-username>/talent-board-be
```
**2.** Navigate to the local project directory.
```bash
cd talent-board-be
```

**3.** Install all associated npm dependencies.
```bash
npm install
```

**4.** You'll need to navigate into */Resources/DatabaseResources* and run:
```bash
# It will provision database resources(VPC, Subnets, RDS Cluster) for the project
serverless deploy
```

**5.** After completion of the step 4, navigate to the root of your project directory and run:
```bash
# It will provision the required API Gateway endpoints & Lambdas for the project
serverless deploy
```

After performing all the steps above, you'll have all the resources provisioned into the cloud.

For the next steps, you will need to create a table named as **"TalentBoard"** into the database provisioned in step 4.

Before you do that you will need to connect to the RDS console query editor.(Use the Secretes Manager ARN to connect to the query editor, you can fetch it from cloudformation stack.)

**6.** To create a table, navigate to *Resources/DatabaseResources/createTable.sql* and paste the script into query editor in RDS console.

By following all the steps above you'll have table in the database to store profile entries into talent board.

## Contribution Guidelines
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/CodeOpsTechnologies/talent-board-be?logo=git&logoColor=white)](https://github.com/CodeOpsTechnologies/talent-board-be/compare) 
[![GitHub contributors](https://img.shields.io/github/contributors/CodeOpsTechnologies/talent-board-be?logo=github)](https://github.com/CodeOpsTechnologies/talent-board-be/graphs/contributors) 
[![Vinit Shahdeo](https://img.shields.io/badge/Author-@iabhishek07-gray.svg?colorA=gray&colorB=dodgerblue&logo=github)](https://github.com/iabhishek07/)
- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- When you make very very minor changes to a PR of yours (like for example fixing a text in button, minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.
- Always create PR to `develop` branch.
- Please read our [Code of Conduct](./CODE_OF_CONDUCT.md).
- Refer [this](https://github.com/CodeOpsTechnologies/talent-board-fe/blob/master/CONTRIBUTING.md) for more.

## Other Useful Links

Frontend Code -> [https://github.com/CodeOpsTechnologies/talent-board-fe](https://github.com/CodeOpsTechnologies/talent-board-fe)
<br>
Deployed URL -> [https://talent.awsug.in/](https://talent.awsug.in/)
<br>
Backend Code -> [https://github.com/CodeOpsTechnologies/talent-board-be](https://github.com/CodeOpsTechnologies/talent-board-be)
<br>
API Docs -> [http://reskill-documentaion.s3-website-ap-southeast-1.amazonaws.com/#api-AWS_UG_Talent_Board](http://reskill-documentaion.s3-website-ap-southeast-1.amazonaws.com/#api-AWS_UG_Talent_Board)

***Glad to see you here! Show some love by [starring](https://github.com/CodeOpsTechnologies/talent-board-fe/) this repo.***

[![Facebook](https://img.shields.io/static/v1.svg?label=connect&message=@CodeOpsTech&color=grey&logo=facebook&style=flat&logoColor=white&colorA=royalblue)](https://www.facebook.com/CodeOpsTech)
[![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@CodeOpsTech&color=grey&logo=linkedin&style=flat&logoColor=white&colorA=royalblue)](https://www.linkedin.com/company/codeops-technologies/)
[![Twitter](https://img.shields.io/static/v1.svg?label=connect&message=@CodeOpsTech&color=grey&logo=twitter&style=flat&logoColor=white&colorA=royalblue)](https://twitter.com/CodeOpsTech)