// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name) {
  // [START videostitcher_v1_generated_VideoStitcherService_GetLiveAdTagDetail_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name in the form of
   *  `projects/{project}/locations/{location}/liveSessions/{live_session}/liveAdTagDetails/{live_ad_tag_detail}`.
   */
  // const name = 'abc123'

  // Imports the Stitcher library
  const {VideoStitcherServiceClient} = require('@google-cloud/video-stitcher').v1;

  // Instantiates a client
  const stitcherClient = new VideoStitcherServiceClient();

  async function callGetLiveAdTagDetail() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await stitcherClient.getLiveAdTagDetail(request);
    console.log(response);
  }

  callGetLiveAdTagDetail();
  // [END videostitcher_v1_generated_VideoStitcherService_GetLiveAdTagDetail_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
