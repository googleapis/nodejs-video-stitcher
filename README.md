**_THIS REPOSITORY IS DEPRECATED. ALL OF ITS CONTENT AND HISTORY HAS BEEN MOVED TO [GOOGLE-CLOUD-NODE](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-video-stitcher)_**

[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Video Stitcher API: Node.js Client](https://github.com/googleapis/nodejs-video-stitcher)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/video-stitcher.svg)](https://www.npmjs.org/package/@google-cloud/video-stitcher)




stitcher client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-video-stitcher/blob/main/CHANGELOG.md).

* [Video Stitcher API Node.js Client API Reference][client-docs]
* [Video Stitcher API Documentation][product-docs]
* [github.com/googleapis/nodejs-video-stitcher](https://github.com/googleapis/nodejs-video-stitcher)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Video Stitcher API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/video-stitcher
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-video-stitcher/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Cdn Key | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/createCdnKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/createCdnKey.js,samples/README.md) |
| Create Live Session | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/createLiveSession.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/createLiveSession.js,samples/README.md) |
| Create Slate | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/createSlate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/createSlate.js,samples/README.md) |
| Create Vod Session | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/createVodSession.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/createVodSession.js,samples/README.md) |
| Delete Cdn Key | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/deleteCdnKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/deleteCdnKey.js,samples/README.md) |
| Delete Slate | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/deleteSlate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/deleteSlate.js,samples/README.md) |
| Get Cdn Key | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getCdnKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getCdnKey.js,samples/README.md) |
| Get Live Ad Tag Detail | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getLiveAdTagDetail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getLiveAdTagDetail.js,samples/README.md) |
| Get Live Session | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getLiveSession.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getLiveSession.js,samples/README.md) |
| Get Slate | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getSlate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getSlate.js,samples/README.md) |
| Get Vod Ad Tag Detail | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getVodAdTagDetail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getVodAdTagDetail.js,samples/README.md) |
| Get Vod Session | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getVodSession.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getVodSession.js,samples/README.md) |
| Get Vod Stitch Detail | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/getVodStitchDetail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/getVodStitchDetail.js,samples/README.md) |
| List Cdn Keys | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/listCdnKeys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/listCdnKeys.js,samples/README.md) |
| List Live Ad Tag Details | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/listLiveAdTagDetails.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/listLiveAdTagDetails.js,samples/README.md) |
| List Slates | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/listSlates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/listSlates.js,samples/README.md) |
| List Vod Ad Tag Details | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/listVodAdTagDetails.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/listVodAdTagDetails.js,samples/README.md) |
| List Vod Stitch Details | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/listVodStitchDetails.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/listVodStitchDetails.js,samples/README.md) |
| Update Cdn Key | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/updateCdnKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/updateCdnKey.js,samples/README.md) |
| Update Slate | [source code](https://github.com/googleapis/nodejs-video-stitcher/blob/main/samples/updateSlate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-stitcher&page=editor&open_in_editor=samples/updateSlate.js,samples/README.md) |



The [Video Stitcher API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/video-stitcher@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-video-stitcher/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-video-stitcher/blob/main/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/videostitcher/latest/
[product-docs]: https://cloud.google.com/video-stitcher/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=stitcher.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
