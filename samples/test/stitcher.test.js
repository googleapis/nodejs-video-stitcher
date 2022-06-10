/**
 * Copyright 2022, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const assert = require('assert');
const {v4: uuidv4} = require('uuid');
const {execSync} = require('child_process');
const {describe, it, before, after} = require('mocha');

const uniqueId = uuidv4().split('-')[0];
const bucketName = 'cloud-samples-data/media';
const vodFileName = 'hls-vod/manifest.m3u8';

const projectId = process.env.GCLOUD_PROJECT;
const location = 'us-central1';
const slateId = `nodejs-test-stitcher-slate-${uniqueId}`;
const slateUri = `https://storage.googleapis.com/${bucketName}/ForBiggerEscapes.mp4`;
const slateName = `/locations/${location}/slates/${slateId}`;

const akamaiCdnKeyId = `nodejs-test-stitcher-akamai-key-${uniqueId}`;
const akamaiCdnKeyName = `/locations/${location}/cdnKeys/${akamaiCdnKeyId}`;
const googleCdnKeyId = `nodejs-test-stitcher-google-key-${uniqueId}`;
const googleCdnKeyName = `/locations/${location}/cdnKeys/${googleCdnKeyId}`;

const hostname = 'cdn.example.com';
const gCdnKeyname = 'gcdn-test-key';
const gCdnPrivateKey = 'VGhpcyBpcyBhIHRlc3Qgc3RyaW5nLg==';
const akamaiTokenKey = 'VGhpcyBpcyBhIHRlc3Qgc3RyaW5nLg==';

const vodUri = `https://storage.googleapis.com/${bucketName}/${vodFileName}`;
// VMAP Pre-roll (https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags)
const adTagUri = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=';
const vodSessionName = `/locations/${location}/vodSessions/`;

const cwd = path.join(__dirname, '..');

before(async () => {
  // Delete the slate if it already exists
  try {
    execSync(`node deleteSlate.js ${projectId} ${location} ${slateId}`, {
      cwd,
    });
  } catch (err) {
    // Ignore not found error
  }
  // Delete the Akamai CDN key if it already exists
  try {
    execSync(
      `node deleteCdnKey.js ${projectId} ${location} ${akamaiCdnKeyId}`,
      {
        cwd,
      }
    );
  } catch (err) {
    // Ignore not found error
  }
  // Delete the Google CDN key if it already exists
  try {
    execSync(
      `node deleteCdnKey.js ${projectId} ${location} ${googleCdnKeyId}`,
      {
        cwd,
      }
    );
  } catch (err) {
    // Ignore not found error
  }
});

after(async () => {});

describe('Slate functions', () => {
  it('should create a slate', () => {
    const output = execSync(
      `node createSlate.js ${projectId} ${location} ${slateId} ${slateUri}`,
      {cwd}
    );
    assert.ok(output.includes(slateName));
  });

  it('should show a list of slates', () => {
    const output = execSync(`node listSlates.js ${projectId} ${location}`, {
      cwd,
    });
    assert.ok(output.includes(slateName));
  });

  it('should update a slate', () => {
    const output = execSync(
      `node updateSlate.js ${projectId} ${location} ${slateId} ${slateUri}`,
      {cwd}
    );
    assert.ok(output.includes(slateName));
  });

  it('should get a slate', () => {
    const output = execSync(
      `node getSlate.js ${projectId} ${location} ${slateId}`,
      {cwd}
    );
    assert.ok(output.includes(slateName));
  });

  it('should delete a slate', () => {
    const output = execSync(
      `node deleteSlate.js ${projectId} ${location} ${slateId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted slate'));
  });
});

describe('CDN key functions', () => {
  // Google CDN

  it('should create a Google CDN key', () => {
    const output = execSync(
      `node createCdnKey.js ${projectId} ${location} ${googleCdnKeyId} ${hostname} ${gCdnKeyname} ${gCdnPrivateKey} ''`,
      {cwd}
    );
    assert.ok(output.includes(googleCdnKeyName));
  });

  it('should show a list of CDN keys', () => {
    const output = execSync(`node listCdnKeys.js ${projectId} ${location}`, {
      cwd,
    });
    assert.ok(output.includes(googleCdnKeyName));
  });

  it('should update a Google CDN key', () => {
    const output = execSync(
      `node updateCdnKey.js ${projectId} ${location} ${googleCdnKeyId} ${hostname} ${gCdnKeyname} ${gCdnPrivateKey} ''`,
      {cwd}
    );
    assert.ok(output.includes(googleCdnKeyName));
  });

  it('should get a Google CDN key', () => {
    const output = execSync(
      `node getCdnKey.js ${projectId} ${location} ${googleCdnKeyId}`,
      {cwd}
    );
    assert.ok(output.includes(googleCdnKeyName));
  });

  it('should delete a Google CDN key', () => {
    const output = execSync(
      `node deleteCdnKey.js ${projectId} ${location} ${googleCdnKeyId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted CDN key'));
  });

  // Akamai CDN

  it('should create an Akamai CDN key', () => {
    const output = execSync(
      `node createCdnKey.js ${projectId} ${location} ${akamaiCdnKeyId} ${hostname} '' '' ${akamaiTokenKey}`,
      {cwd}
    );
    assert.ok(output.includes(akamaiCdnKeyName));
  });

  it('should show a list of CDN keys', () => {
    const output = execSync(`node listCdnKeys.js ${projectId} ${location}`, {
      cwd,
    });
    assert.ok(output.includes(akamaiCdnKeyName));
  });

  it('should update an Akamai CDN key', () => {
    const output = execSync(
      `node updateCdnKey.js ${projectId} ${location} ${akamaiCdnKeyId} ${hostname} '' '' ${akamaiTokenKey}`,
      {cwd}
    );
    assert.ok(output.includes(akamaiCdnKeyName));
  });

  it('should get an Akamai CDN key', () => {
    const output = execSync(
      `node getCdnKey.js ${projectId} ${location} ${akamaiCdnKeyId}`,
      {cwd}
    );
    assert.ok(output.includes(akamaiCdnKeyName));
  });

  it('should delete an Akamai CDN key', () => {
    const output = execSync(
      `node deleteCdnKey.js ${projectId} ${location} ${akamaiCdnKeyId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted CDN key'));
  });
});

describe('VOD session functions', () => {
  it('should create a VOD session', () => {
    const output = execSync(
      `node createVodSession.js ${projectId} ${location} ${vodUri} ${adTagUri}`,
      {cwd}
    );
    assert.ok(output.includes(vodSessionName));
    this.vodSessionId = output.toString().split('/').pop();
  });

  it('should get a VOD session', () => {
    const output = execSync(
      `node getVodSession.js ${projectId} ${location} ${this.vodSessionId}`,
      {cwd}
    );
    assert.ok(output.includes(vodSessionName));
  });

  // No list or delete methods for VOD sessions

  // Ad tag details

  // it('should delete a slate', () => {
  //   const output = execSync(
  //     `node deleteSlate.js ${projectId} ${location} ${slateId}`,
  //     {cwd}
  //   );
  //   assert.ok(output.includes('Deleted slate'));
  // });
});
