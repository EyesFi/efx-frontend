<template>
  <div>
    <canvas class="orb-canvas"></canvas>
    <v-app>
      <div class="pc-container d-none d-md-block">
        <div class="header py-6 px-15 d-flex justify-space-between">
          <div class="d-flex justify-start">
            <a href="/" class="d-block">
              <v-img src="@/assets/images/logo.svg" contain width="146" height="auto" />
            </a>
            <div class="nav-item font-bolditalic d-flex align-center" style="margin: 0 100px 0 200px" @click="glassDialog = true">PASS</div>
            <div class="nav-item font-bolditalic d-flex align-center" @click="downloadDialog = true">DOWNLOAD</div>
          </div>
          <div class="nav-item font-bolditalic d-flex justify-start align-center cursor" @click="showMenu = !showMenu">
            <div>MENU</div>
            <div class="menu ml-3" :class="{'active': showMenu}">
              <div class="menu-item"></div>
              <div class="menu-item"></div>
              <div class="menu-item"></div>
            </div>
          </div>
        </div>
        <div class="content">
          <v-row class="ma-0" style="height:100vh">
            <v-col cols="12" lg="6" md="6" sm="6" xs="6" class="pa-0">
              <div class="d-flex align-center fill-height">
                <div>
                  <div class="page-title font-bolditalic text-nowrap">Like To Earn!</div>
                  <v-list color="list-content pa-0">
                    <v-list-item class="list-item text-nowrap px-0">EyesFi is a {Web 3} Lifestyle App</v-list-item>
                    <v-list-item class="list-item text-nowrap px-0">Based on the Ethereum Metaverse instead of IRL</v-list-item>
                    <v-list-item class="list-item text-nowrap px-0">Users Can Make Fancy Earnings by Simply Curating and Liking NFTs</v-list-item>
                  </v-list>
                  <v-btn class="outline-btn font-bolditalic mt-10" outlined width="282" height="62" color="#2D25FF" @click="downloadDialog = true">Download now</v-btn>
                  <div class="d-flex justify-start align-center mt-8">
                    <a href="https://twitter.com/EyesFi_xyz" target="_blank" class="d-block">
                      <v-img src="@/assets/images/twitter-a.svg" contain width="32"></v-img>
                    </a>
                    <a href="https://discord.gg/eyesfi" target="_blank" class="d-block mx-10">
                      <v-img src="@/assets/images/discord-a.svg" contain width="28"></v-img>
                    </a>
                    <a href="https://medium.com/@eyesfi" target="_blank" class="d-block">
                      <v-img src="@/assets/images/medium-a.svg" contain width="32"></v-img>
                    </a>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" xs="6" class="pa-0">
              <div class="d-flex align-center fill-height">
                <v-img src="@/assets/images/home-img-a.png" contain width="90%" height="auto" max-height="80%" />
              </div>
            </v-col>
          </v-row>
          <v-row style="margin-top: 210px">
            <v-col cols="12" lg="6" md="6" sm="6" xs="6" class="pa-0">
              <div class="d-flex align-center fill-height">
                <div>
                  <div class="subtitle font-bolditalic primary-text">Genesis Members‘ <br />Collection</div>
                  <!-- <div class="desc mt-6">EyesFi is a {Web 3} Lifestyle App<br /> Based on the Ethereum Metaverse</div> -->
                  <v-list color="list-content pa-0 mt-4">
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">200+</span>
                      </v-card>
                      <div>Meebits</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">60+</span>
                      </v-card>
                      <div>Punk</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">50+</span>
                      </v-card>
                      <div>BAYC</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">50+</span>
                      </v-card>
                      <div>MAYC</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">40+</span>
                      </v-card>
                      <div>Azuki</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">200+</span>
                      </v-card>
                      <div>Bluechips</div>
                    </v-list-item>
                    <v-list-item class="list-item d-flex justify-start">
                      <v-card elevation="0" width="110">
                        <span class="pr-4">-</span>
                        <span class="primary-text font-mediumitalic text-num">10,000+</span>
                      </v-card>
                      <div>Artblocks</div>
                    </v-list-item>
                  </v-list>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" xs="6" class="pa-0">
              <div class="d-flex align-center fill-height">
                <v-img src="@/assets/images/home-img-b.png" contain height="400" width="auto"/>
              </div>
            </v-col>
          </v-row>  
          <div class="community-block" style="margin-top: 380px">
            <div class="d-flex justify-space-between">
              <div>
                <div class="subtitle font-bolditalic primary-text">Community</div>
                <!-- <div class="desc mt-6">EyesFi is a {Web 3} Lifestyle App<br />Based on the Ethereum Metaverse instead of IRL<br> Users Can Make Fancy Earnings by</div> -->
              </div>
              <div class="d-flex justify-end">
                <div class="text-center">
                  <div class="img-container d-flex justify-center align-center">
                    <img src="@/assets/images/home-icon-a.png" contain width="90" height="auto"/>
                  </div>
                  <div class="font-bolditalic primary-text community-text">Coming soon</div>
                  <div class="desc">Likes Earned</div>
                </div>
                <v-divider inset vertical class="divider"></v-divider>
                <div class="text-center" style="116px">
                  <div class="img-container d-flex justify-center align-center">
                    <img src="@/assets/images/home-icon-b.png" contain width="82" height="auto"/>
                  </div>
                  <div class="font-bolditalic primary-text community-text">27,479</div>
                  <div class="desc">NFTs Curated</div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-end" style="margin-top: 106px">
              <div class="text-center">
                <div class="img-container d-flex justify-center align-center">
                  <img src="@/assets/images/home-icon-c.png" contain width="94" height="auto"/>
                </div>
                <div class="font-bolditalic primary-text community-text">3,285,474</div>
                <div class="desc">Value Discovered</div>
              </div>
              <v-divider inset vertical class="divider"></v-divider>
              <div class="text-center">
                <div class="img-container d-flex justify-center align-center">
                  <img src="@/assets/images/home-icon-d.png" contain width="82" height="auto"/>
                </div>
                <div class="font-bolditalic primary-text community-text">1,500</div>
                <div class="desc">Discord Members</div>
              </div>
              <v-divider inset vertical class="divider"></v-divider>
              <div class="text-center">
                <div class="img-container d-flex justify-center align-center">
                  <img src="@/assets/images/home-icon-e.png" contain width="94" height="auto"/>
                </div>
                <div class="font-bolditalic primary-text community-text">15,700</div>
                <div class="desc">Twitter Followers</div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-space-between" style="margin-top: 340px">
            <div class="mr-10">
              <div class="subtitle font-bolditalic primary-text">Roadmap</div>
              <!-- <div class="desc mt-6">EyesFi is a {Web 3} Lifestyle App<br />Based on the Ethereum Metaverse instead of IRL</div> -->
            </div>
            <div>
              <v-card class="road-card py-12 px-8 pr" width="700" max-width="90%">
                <div class="card-title font-bolditalic primary-text">2021.</div>
                <div class="d-flex justify-space-between mt-3">
                  <div>
                    <div class="subtitle font-regular">Q2.</div>
                    <div class="text-nowrap">Team Building</div>
                  </div>
                  <v-divider inset vertical class="divider mx-4"></v-divider>
                  <div style="width:200px">
                    <div class="subtitle font-regular">Q3.</div>
                    <div>Web Ver. Launch <br /> NFT Value Discovery & Asset Management System Launch</div>
                  </div>
                  <v-divider inset vertical class="divider mx-4"></v-divider>
                  <div style="width:220px">
                    <div class="subtitle font-regular">Q4.</div>
                    <div>Dynamic Analysis Function <br /> for NFTs on Ethereum Launch</div>
                  </div>
                </div>
                <div class="eth-img-block">
                  <v-img src="@/assets/images/eth-a.png" contain width="236" height="auto" />
                  <div style="position:absolute;right:-10px;bottom:-50px">
                    <v-img src="@/assets/images/home-icon-f.svg" contain width="40"></v-img>
                  </div>
                </div>
              </v-card>
              <v-card class="pr road-card py-12 px-8" width="740"  max-width="90%" style="margin: -30px 0 0 -288px;z-index: 1">
                <div class="card-title font-bolditalic primary-text">2022.</div>
                <div class="d-flex justify-space-between mt-3">
                  <div style="width: 235px">
                    <div class="subtitle font-regular">Q1.</div>
                    <div>Like2Earn Concept Born<br />Economics System Design<br />Mobile Ver. Prototype Design</div>
                  </div>
                  <v-divider inset vertical class="divider mx-4"></v-divider>
                  <div style="width: 235px">
                    <div class="subtitle font-regular">Q2.</div>
                    <div>Android & iOS App Development<br />Community Building</div>
                  </div>
                </div>
                <div class="d-flex justify-space-between mt-3">
                  <div style="width: 235px">
                    <div class="subtitle font-regular">Q3.</div>
                    <div>Alpha Release<br />Layer-2 Intergration Beta Testing</div>
                  </div>
                  <v-divider inset vertical class="divider mx-5"></v-divider>
                  <div style="width: 225px">
                    <div class="subtitle font-regular">Q4.</div>
                    <div>In-App Trade Function Launch<br />Multichain Asset Support</div>
                  </div>
                </div>
                <div class="card-icon-block">+</div>
              </v-card>
              <v-card class="road-card py-12 px-8 pr" width="780" max-width="90%" style="margin: -30px 0 0 -64px">
                <div class="card-title font-bolditalic primary-text">2023.</div>
                <div class="d-flex justify-space-between mt-3">
                  <div>
                    <div class="subtitle font-regular">Q1.</div>
                    <div class="text-nowrap">Task System Launch</div>
                  </div>
                  <v-divider inset vertical class="divider mx-5"></v-divider>
                  <div>
                    <div class="subtitle font-regular">Q2.</div>
                    <div class="text-nowrap">Follow Function Launch</div>
                    <div class="text-nowrap">Comment Function Launch</div>
                    <div>More Scenarios & Items Added IEO/IDO</div>
                  </div>
                  <v-divider inset vertical class="divider mx-5"></v-divider>
                  <div>
                    <div class="subtitle font-regular">Q3.</div>
                    <div class="text-nowrap">Marketplace On-Chain</div>
                  </div>
                </div>
                <i class="circle-icon"></i>
              </v-card>
              <v-card class="road-card pa-12 pr" width="322" style="margin: -50px 0 0 -206px">
                <div class="d-flex justify-space-between mt-3">
                  <div>
                    <div class="subtitle font-regular">Q4.</div>
                    <div>Like & Curate Content On-Chain</div>
                  </div>
                </div>
                <i class="glass-block"></i>
              </v-card>
            </div>
          </div>
          <div class="image-block" style="margin-top: 380px">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Co-founders</div>
              <!-- <div class="desc">EyesFi is a {Web 3} Lifestyle App. Based on the Ethereum Metaverse instead of IRL</div> -->
            </div>
            <div class="d-flex justify-space-between text-center pt-11 mt-10">
              <div>
                <v-img src="@/assets/images/punk-a.png" contain width="220" height="auto"/>
                <div class="font-bolditalic primary-text punk-name mt-10">Punk #2109</div>
                <div class="font-medium subtext">Co-Founder</div>
              </div>
              <div>
                <v-img src="@/assets/images/punk-b.png" contain width="220" height="auto"/>
                <div class="font-bolditalic primary-text punk-name mt-10">Punk #8149</div>
                <div class="font-medium subtext">Co-Founder</div>
              </div>
              <div>
                <v-img src="@/assets/images/punk-c.png" contain width="220" height="auto"/>
                <div class="font-bolditalic primary-text punk-name mt-10">Punk #2211</div>
                <div class="font-medium subtext">Co-Founder</div>
              </div>
            </div>
          </div>
          <div class="image-block" style="margin-top: 320px">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Our Backers</div>
            </div>
            <div class="d-flex justify-space-between text-center" style="margin-top:160px">
              <v-card elevation="0" width="132">
                <img src="@/assets/images/multicoin.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Multicoin</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/puzzle.png" contain height="76" />
                <div class="font-medium subtext mt-9">Puzzle</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/deltafund.png" contain height="76" />
                <div class="font-medium subtext mt-9">Deltafund</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/signum.png" contain height="76" />
                <div class="font-medium subtext mt-9">Signum</div>
              </v-card>
            </div>
            <div class="d-flex justify-space-between text-center mt-15 pt-10">
              <v-card elevation="0" width="132">
                <img src="@/assets/images/arkstream.png" contain height="76" />
                <div class="font-medium subtext mt-9">Arkstream</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/nxgen.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Nxgen</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/genblock.png" contain height="76" />
                <div class="font-medium subtext mt-9">Genblock</div>
              </v-card>
              <v-card elevation="0" width="132">
                <img src="@/assets/images/signal.png" contain height="76" />
                <div class="font-medium subtext mt-9">Signal</div>
              </v-card>
            </div>
          </div>
          <!-- <div class="image-block" style="margin-top: 380px">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Partners</div>
            </div>
            <div class="d-flex justify-space-between text-center" style="margin-top:200px">
              <div>
                <v-img src="@/assets/images/google.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Google</div>
              </div>
              <div>
                <v-img src="@/assets/images/airbnb.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Airbnb</div>
              </div>
              <div>
                <v-img src="@/assets/images/sketch.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Sketch</div>
              </div>
              <div>
                <v-img src="@/assets/images/douban.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Douban</div>
              </div>
              <div>
                <v-img src="@/assets/images/gaode.svg" contain height="76" />
                <div class="font-medium subtext mt-9">Gaode</div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="footer d-flex justify-space-between px-15 py-4">
          <a href="mailto:hi@eyesfi.xyz" class="d-block font-mediumitalic white--text">hi@eyesfi.xyz</a>
          <div class="d-flex jusity-start align-center">
            <a href="https://twitter.com/EyesFi_xyz" target="_blank" class="d-block">
              <v-img src="@/assets/images/twitter.svg" contain width="32"></v-img>
            </a>
            <a href="https://discord.gg/eyesfi" target="_blank" class="d-block mx-15">
              <v-img src="@/assets/images/discord.svg" contain width="28"></v-img>
            </a>
            <a href="https://medium.com/@eyesfi" target="_blank" class="d-block">
              <v-img src="@/assets/images/medium.svg" contain width="32"></v-img>
            </a>
          </div>
          <div class="font-mediumitalic white--text">Powered By SphinxUp 2022</div>
        </div>
      </div>


      <!-- mobile -->
      <div class="mobile-container d-block d-md-none">
        <div class="header py-6 px-4 d-flex justify-space-between">
          <div class="d-flex justify-start align-center">
            <div>
              <v-img src="@/assets/images/logo.svg" contain width="72" height="auto" />
            </div>
          </div>
          <div class="nav-item font-bolditalic d-flex justify-start align-center cursor f16" @click="showMenu = !showMenu">
            <div>MENU</div>
            <div class="menu ml-3" :class="{'active': showMenu}">
              <div class="menu-item"></div>
              <div class="menu-item"></div>
              <div class="menu-item"></div>
            </div>
          </div>
        </div>
        <div class="px-8">
          <div class="text-center" style="padding-top: 120px">
            <!-- <div class="d-flex justify-center font-mediumitalic"><i class="eth-icon d-block"></i><i class="eth-icon d-block mr-1"></i>EyesFI.xyz</div> -->
            <div class="page-title font-bolditalic my-3">Like To Earn!</div>
            <div class="font-helvetica f14">
              EyesFi is a {Web 3} Lifestyle App <br /> Based on the Ethereum Metaverse instead of IRL <br /> Users Can Make Fancy Earnings by <br /> Simply Curating and Liking NFTs
            </div>
            <v-btn class="outline-btn font-bolditalic mt-10" outlined width="168" height="42" color="#2D25FF">Download now</v-btn>
          </div>
          <div style="max-width:500px;margin: 80px auto 0">
            <div class="subtitle font-bolditalic primary-text text-nowrap text-center">Genesis Members‘ Collection</div>
            <div class="d-flex justify-space-between mt-15">
              <v-list color="list-content pa-0">
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">200+</span>
                  </v-card>
                  <div>Meebits</div>
                </v-list-item>
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">60+</span>
                  </v-card>
                  <div>Punk</div>
                </v-list-item>
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">50+</span>
                  </v-card>
                  <div>BAYC</div>
                </v-list-item>
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">50+</span>
                  </v-card>
                  <div>MAYC</div>
                </v-list-item>
              </v-list>
              <v-list color="list-content pa-0">
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">40+</span>
                  </v-card>
                  <div>Azuki</div>
                </v-list-item>
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">200+</span>
                  </v-card>
                  <div>Bluechips</div>
                </v-list-item>
                <v-list-item class="list-item d-flex justify-start px-0">
                  <v-card elevation="0" width="80">
                    <span class="pr-4">-</span>
                    <span class="primary-text font-mediumitalic text-num">10,000+</span>
                  </v-card>
                  <div>Artblocks</div>
                </v-list-item>
              </v-list>
            </div>
            <div class="mt-6">
              <v-img src="@/assets/images/home-img-b.png" contain width="100%" height="auto" />
            </div>
          </div>
          
          <div style="max-width:500px;margin:100px auto 0;">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Community</div>
              <!-- <div class="font-helvetica f14 mt-4">EyesFi is a {Web 3} Lifestyle App<br />Based on the Ethereum Metaverse instead of IRL<br> Users Can Make Fancy Earnings by</div> -->
            </div>
            <div class="mt-15 d-flex justify-center">
              <div class="text-center">
                <img src="@/assets/images/home-icon-a.png" contain height="32"/>
                <div class="font-bolditalic primary-text community-text text-nowrap f18 my-1">Coming soon</div>
                <div class="desc text-nowrap font-helvetica f12">Likes Earned</div>
              </div>
              <v-divider inset vertical class="mx-4">></v-divider>
              <div class="text-center" style="width:116px;">
                <img src="@/assets/images/home-icon-b.png" contain height="32"/>
                <div class="font-bolditalic primary-text community-text text-nowrap f18 my-1">27,479</div>
                <div class="desc text-nowrap font-helvetica f12">NFTs Curated</div>
              </div>
            </div>
            <div class="d-flex justify-space-between" style="margin: 40px -20px 0">
              <div class="text-center">
                <img src="@/assets/images/home-icon-c.png" contain height="32"/>
                <div class="font-bolditalic primary-text community-text text-nowrap f18 my-1">3,285,474</div>
                <div class="desc text-nowrap font-helvetica f12">Value Discovered</div>
              </div>
              <v-divider inset vertical class="mx-4">></v-divider>
              <div class="text-center">
                <img src="@/assets/images/home-icon-d.png" contain height="32"/>
                <div class="font-bolditalic primary-text community-text text-nowrap f18 my-1">1,500</div>
                <div class="desc text-nowrap font-helvetica f12">Discord Members</div>
              </div>
              <v-divider inset vertical class="mx-4"></v-divider>
              <div class="text-center">
                <img src="@/assets/images/home-icon-e.png" contain height="32"/>
                <div class="font-bolditalic primary-text community-text text-nowrap f18 my-1">15,700</div>
                <div class="desc text-nowrap font-helvetica f12">Twitter Followers</div>
              </div>
            </div>
          </div>

          <div style="margin-top:100px">
            <div>
              <div class="subtitle font-bolditalic primary-text text-center">Roadmap</div>
              <!-- <div class="font-helvetica text-center f14 mt-4">EyesFi is a {Web 3} Lifestyle App<br />Based on the Ethereum Metaverse instead of IRL<br> Users Can Make Fancy Earnings by</div> -->
              <div class="mt-15" style="max-width:500px;margin:auto">
                <div class="d-flex justify-end">
                  <v-card class="road-card pa-4 pr" width="90%">
                    <div class="card-title font-bolditalic primary-text">2021.</div>
                    <div class="d-flex justify-space-between mt-3">
                      <div>
                        <div class="font-regular f14">Q2.</div>
                        <div class="f12">Team Building</div>
                      </div>
                      <v-divider inset vertical class="divider mx-2"></v-divider>
                      <div style="max-width:35%">
                        <div class="font-regular f14">Q3.</div>
                        <div class="f12">Web Ver. Launch NFT Value Discovery & Asset Management System Launch</div>
                      </div>
                      <v-divider inset vertical class="divider mx-2"></v-divider>
                      <div>
                        <div class="font-regular f14">Q4.</div>
                        <div class="f12">Dynamic Analysis Function <br />for NFTs on Ethereum Launch</div>
                      </div>
                    </div>
                    <div class="eth-img-block">
                      <v-img src="@/assets/images/eth-a.png" contain width="70" height="auto" />
                    </div>
                  </v-card>
                </div>
                <v-card class="pr road-card pa-4" width="90%" style="margin-top: -10px;z-index: 1">
                  <div class="card-title font-bolditalic primary-text">2022.</div>
                  <div class="d-flex justify-space-between mt-3">
                    <div style="width: 49%">
                      <div class="font-regular f14">Q1.</div>
                      <div class="f12">Like2Earn Concept Born <br /> Economics System Design Mobile Ver. Prototype Design</div>
                    </div>
                    <v-divider inset vertical class="divider mx-2"></v-divider>
                    <div style="width: 49%">
                      <div class="font-regular f14">Q2.</div>
                      <div class="f12">Android & iOS App Development. <br /> Community Building</div>
                    </div>
                  </div>
                  <div class="d-flex justify-space-between mt-3">
                    <div style="width: 49%">
                      <div class="font-regular f14">Q3.</div>
                      <div class="f12">Alpha Release. Layer-2 Intergration Beta Testing</div>
                    </div>
                    <v-divider inset vertical class="divider mx-2"></v-divider>
                    <div style="width: 49%">
                      <div class="sfont-regular f14">Q4.</div>
                      <div class="f12">In-App Trade Function Launch Multichain Asset Support</div>
                    </div>
                  </div>
                  <div style="position:absolute;top:45%;right: -52px;">
                    <v-img src="@/assets/images/home-icon-f.svg" contain width="24"></v-img>
                  </div>
                </v-card>
                <div class="d-flex justify-end" style="margin-top: -10px">
                  <v-card class="road-card pa-4" width="90%">
                    <div class="card-title font-bolditalic primary-text">2023.</div>
                    <div class="d-flex justify-space-between mt-3">
                      <div>
                        <div class="font-regular f14">Q1.</div>
                        <div class="f12">Task System Launch</div>
                      </div>
                      <v-divider inset vertical class="divider mx-2"></v-divider>
                      <div style="max-width:35%">
                        <div class="font-regular f14">Q2.</div>
                        <div class="f12">Follow Function LaunchComment Function Launch More Scenarios & Items Added IEO/IDO</div>
                      </div>
                      <v-divider inset vertical class="divider mx-2"></v-divider>
                      <div>
                        <div class="font-regular f14">Q3.</div>
                        <div class="f12">Marketplace On-Chain</div>
                      </div>
                    </div>
                  </v-card>
                </div>
                <v-card class="road-card pa-4 pr" width="40%" style="margin-top: -10px;margin-left:5%">
                  <div class="d-flex justify-space-between mt-3">
                    <div>
                      <div class="font-regular f14">Q4.</div>
                      <div class="f12">Like & Curate Content On-Chain</div>
                    </div>
                  </div>
                  <i class="glass-block"></i>
                </v-card>
              </div>
            </div>
          </div>

          <div style="max-width:500px;margin:100px auto 0">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Co-founders</div>
              <!-- <div class="font-helvetica f14 mt-4">EyesFi is a {Web 3} Lifestyle App<br />Based on the Ethereum Metaverse instead of IRL</div> -->
              <div class="mt-15 d-flex justify-space-between">
                <div>
                  <v-img src="@/assets/images/punk-a.png" contain width="76" height="auto"/>
                  <div class="font-bolditalic primary-text f14 mt-3 text-no-wrap">Punk #2109</div>
                  <div class="font-medium f12">Co-Founder</div>
                </div>
                <div>
                  <v-img src="@/assets/images/punk-b.png" contain width="76" height="auto"/>
                  <div class="font-bolditalic primary-text f14 mt-3 text-no-wrap">Punk #8149</div>
                  <div class="font-medium f12">Co-Founder</div>
                </div>
                <div>
                  <v-img src="@/assets/images/punk-c.png" contain width="76" height="auto"/>
                  <div class="font-bolditalic primary-text f14 mt-3 text-no-wrap">Punk #2211</div>
                  <div class="font-medium f12">Co-Founder</div>
                </div>
              </div>
            </div>
          </div>

          <div style="max-width: 500px;margin:100px auto 0;">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Our Backers</div>
              <div class="d-flex justify-space-between mt-15">
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/multicoin.svg" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Multicoin</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/puzzle.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Puzzle</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/deltafund.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Deltafund</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/signum.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Signum</div>
                </v-card>
              </div>
              <div class="d-flex justify-space-between" style="margin-top: 60px">
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/arkstream.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Arkstream</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/nxgen.svg" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Nxgen</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/genblock.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Genblock</div>
                </v-card>
                <v-card elevation="0" width="72">
                  <img src="@/assets/images/signal.png" contain height="30" />
                  <div class="font-medium grey-text f14 mt-4">Signal</div>
                </v-card>
              </div>
            </div>
          </div>

          <!-- <div style="margin-top:100px">
            <div class="text-center">
              <div class="subtitle font-bolditalic primary-text">Partners</div>
              <div class="mt-8 d-flex justify-center" style="margin-top: 100px">
                <div>
                  <v-img src="@/assets/images/google.svg" contain height="30" />
                  <div class="font-medium f14 mt-4">Google</div>
                </div>
                <div class="mx-10">
                  <v-img src="@/assets/images/airbnb.svg" contain height="30" />
                  <div class="font-medium f14 mt-4">Airbnb</div>
                </div>
                <div>
                  <v-img src="@/assets/images/sketch.svg" contain height="30" />
                  <div class="font-medium f14 mt-4">Sketch</div>
                </div>
              </div>
              <div class="mt-8 d-flex justify-center" style="margin-top: 80px">
                <div class="mr-10">
                  <v-img src="@/assets/images/douban.svg" contain height="30" />
                  <div class="font-medium f14 mt-4">Douban</div>
                </div>
                <div>
                  <v-img src="@/assets/images/gaode.svg" contain height="30" />
                  <div class="font-medium f14 mt-4">Gaode</div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="footer d-flex justify-space-between pa-3" style="margin-top: 100px">
          <a href="mailto:hi@eyesfi.xyz" class="d-block font-mediumitalic white--text f12">hi@eyesfi.xyz</a>
          <div class="d-flex jusity-start align-center">
            <a href="https://twitter.com/EyesFi_xyz" target="_blank" class="d-block">
              <v-img src="@/assets/images/twitter.svg" contain width="18"></v-img>
            </a>
            <a href="https://discord.gg/eyesfi" target="_blank" class="d-block mx-3">
              <v-img src="@/assets/images/discord.svg" contain width="14"></v-img>
            </a>
            <a href="https://medium.com/@eyesfi" target="_blank" class="d-block">
              <v-img src="@/assets/images/medium.svg" contain width="18"></v-img>
            </a>
          </div>
          <div class="font-mediumitalic white--text f12">Powered By SphinxUp 2022</div>
        </div>
      </div>

      <div class="menu-dialog d-flex align-center justify-center" :class="{'active': showMenu}">
        <div class="d-flex flex-column text-center">
          <div class="link-item">
            <a href="/" class="font-bolditalic">Home</a>
          </div>
          <div class="link-item">
            <router-link to="#" class="font-bolditalic">How to Play</router-link>
          </div>
          <div class="link-item">
            <router-link to="#" class="font-bolditalic">Whitepaper</router-link>
          </div>
          <div class="link-item">
            <router-link to="#" class="font-bolditalic">Litepaper</router-link>
          </div>
          <div class="link-item">
            <a href="https://linktr.ee/eyesfi.xyz" target="_blank" class="font-bolditalic">LinkTree</a>
          </div>
        </div>
        <v-img src="@/assets/images/eth-a.png" contain class="eth-img d-none d-md-block" />
        <img src="@/assets/images/eth-a.png" contain class="eth-img d-block d-md-none" style="width: 120px;bottom: 50px;right: 30px" />
      </div>

      <v-dialog v-model="downloadDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="d-flex justify-center align-center">
          <v-card width="580" max-width="90%" elevation="0" class="dialog-inner-card px-8 px-md-15 py-6 py-md-9 pr">
            <div class="dialog-title font-bolditalic text-center">Download Now</div>
            <div class="d-none d-md-flex justify-md-space-between mt-9">
              <div class="pr">
                <v-btn outlined color="black" height="57" class="d-flex justify-space-between py-2">
                  <div class="mr-3">
                    <img src="@/assets/images/googleplay.svg" alt="efxWeb" width="auto" height="42">
                  </div>
                  <div class="text-left">
                    <div class="f12">GET IN ON</div>
                    <div class="f18 font-weight-bold">Google Play</div>
                  </div>
                </v-btn>
                <div class="button-mask white--text text-center py-3 f18">Coming soon</div>
              </div>
              <div class="pr">
                <v-btn outlined color="black" height="57" class="d-flex justify-start">
                  <div class="mr-3">
                    <img src="@/assets/images/appstore.svg" alt="efxWeb" width="auto" height="42">
                  </div>
                  <div class="text-left">
                    <div class="f12">Download on the</div>
                    <div class="f18 font-weight-bold">App Store</div>
                  </div>
                </v-btn>
                <div class="button-mask white--text text-center py-3 f18">Coming soon</div>
              </div>
              <!-- <v-btn outlined color="black" width="57" min-width="57" height="57">

              </v-btn> -->
            </div>
            <div class="d-block d-md-none mt-9">
              <v-btn outlined color="black" width="100%" height="57" class="d-flex justify-center py-2">
                <div class="mr-3">
                  <img src="@/assets/images/googleplay.svg" alt="efxWeb" width="auto" height="42">
                </div>
                <div class="text-left">
                  <div class="f12">GET IN ON</div>
                  <div class="f18 font-weight-bold">Google Play</div>
                </div>
              </v-btn>
              <v-btn outlined color="black" width="100%" height="57" class="d-flex justify-center my-2">
                <div class="mr-3">
                  <img src="@/assets/images/appstore.svg" alt="efxWeb" width="auto" height="42">
                </div>
                <div class="text-left">
                  <div class="f12">Download on the</div>
                  <div class="f18 font-weight-bold">App Store</div>
                </div>
              </v-btn>
            </div>
            <v-icon color="#899AAE" @click="downloadDialog = false" class="dialog-close-btn">mdi-close</v-icon>
            <img src="@/assets/images/eth-a.png" contain class="eth-img d-none d-md-block" style="top: 100px;right: -300px" />
          </v-card>
          <img src="@/assets/images/eth-a.png" contain class="eth-img d-block d-md-none" style="bottom: 100px;right: 30px" />
        </v-card>
      </v-dialog>

      <v-dialog v-model="glassDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="d-flex justify-center align-center">
          <v-card width="620" max-width="90%" elevation="0" class="dialog-inner-card px-8 px-md-15 py-6 py-md-9 pr">
            <div class="dialog-title font-bolditalic text-center">GlassE Pass</div>
            <div class="dialog-caption font-regular text-center">- Available for Genesis Members -</div>
            <div class="dialog-text font-italic mt-2">“ You could mint your Genesis GlassE with the Pass, and <strong>make fancy earnings by simply curating</strong> and <strong>liking valuable NFTs!</strong>“</div>
            <div class="d-flex justify-center">
              <div class="pr mt-10">
                <v-btn class="outline-btn font-bolditalic d-none d-md-block" outlined width="282" height="62" color="#2D25FF">Connect Wallet</v-btn>
                <div class="button-mask white--text text-center font-weight-bold py-4 f18" style="border-radius:20px">Coming soon</div>
                <v-btn class="outline-btn font-bolditalic d-block d-md-none" outlined width="180" height="50" color="#2D25FF">Connect Wallet</v-btn>
                <div class="button-mask white--text text-center py-3 f18" style="border-radius:10px">Coming soon</div>
              </div>
            </div>
            <v-icon color="#899AAE" @click="glassDialog = false" class="dialog-close-btn">mdi-close</v-icon>
            <img src="@/assets/images/eth-a.png" contain class="eth-img d-none d-md-block" style="top: 200px;left: -300px" />
          </v-card>
          <img src="@/assets/images/eth-a.png" contain class="eth-img d-block d-md-none" style="bottom: 50px;right: 30px" />
        </v-card>
      </v-dialog>

      <v-dialog v-model="warningDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="d-flex justify-center align-center">
          <v-card width="620" max-width="90%" elevation="0" class="dialog-inner-card warning-dialog px-8 px-md-15 py-6 py-md-9 pr">
            <div class="d-flex justify-center align-center">
              <div class="d-none d-md-block mr-2">
                <v-icon size="30" color="#899AAE">mdi-alert-circle</v-icon>
              </div>
              <div class="d-block d-md-none mr-2">
                <v-icon size="24" color="#899AAE">mdi-alert-circle</v-icon>
              </div>
              <div class="dialog-title font-bolditalic">None-eligible</div>
            </div>
            <div class="dialog-caption font-regular text-center">- Sorry, you are not eligible for this round -</div>
            <v-card elevation="0" class="pr px-4 px-md-9 py-3 py-md-7 mt-7">
              Don't Worry! <br />There are still a lot of opportunities to get the Pass in the future.
              Keep contributing to the EyesFi community and being involved in the Ethereum Metaverse.
              See you next round!
            </v-card>

            <div class="text-center mt-3">
              <v-text-field readonly hide-details value="ox12b629bnc63bcsjw268b99na" class="text-center"></v-text-field>
            </div>

            <div class="d-flex justify-center">
              <v-btn class="d-none d-md-block claim-btn font-bolditalic white--text mt-10" depressed width="185" height="62" color="#899aae66">Claim</v-btn>
              <v-btn class="d-block d-md-none claim-btn font-bolditalic white--text mt-5" depressed width="120" height="48" color="#899aae66">Claim</v-btn>
            </div>
            <v-icon color="#899AAE" @click="glassDialog = false" class="dialog-close-btn">mdi-close</v-icon>
            <img src="@/assets/images/eth-a.png" contain class="eth-img d-none d-md-block" style="top: 500px;left: -300px" />
          </v-card>
          <img src="@/assets/images/eth-a.png" contain class="eth-img d-block d-md-none" style="bottom: 60px;right: 30px" />
        </v-card>
      </v-dialog>

      <v-dialog v-model="memberDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="d-flex justify-center align-center">
          <v-card width="620" max-width="90%" elevation="0" class="dialog-inner-card member-dialog px-8 px-md-15 py-6 py-md-9 pr">
            <div class="dialog-title font-bolditalic text-center">Congrats, Genesis Member!</div>
            <div class="dialog-caption font-regular text-center">- You are eligible for claiming the Pass -</div>
            <div class="border-card"></div>

            <div class="text-center">
              <v-text-field readonly hide-details value="ox12b629bnc63bcsjw268b99na" class="text-center"></v-text-field>
            </div>

            <div class="d-flex justify-center">
              <v-btn class="outline-btn font-bolditalic mt-10" outlined width="185" height="62" color="#2D25FF">Claim</v-btn>
            </div>
            <v-icon color="#899AAE" @click="glassDialog = false" class="dialog-close-btn">mdi-close</v-icon>
            <img src="@/assets/images/eth-a.png" contain class="eth-img d-none d-md-block" style="top: 500px;left: -300px" />
          </v-card>
          <img src="@/assets/images/eth-a.png" contain class="eth-img d-block d-md-none" style="bottom: 60px;right: 30px" />
        </v-card>
      </v-dialog>

      <v-dialog v-model="signupDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="d-flex justify-center align-center">
          <v-card width="620" max-width="90%" elevation="0" class="dialog-inner-card px-8 px-md-15 py-6 py-md-9 pr">
            <div class="dialog-title font-bolditalic text-center">Sign Up for Early Access</div>
            <div class="text-center">
              <v-text-field placeholder="xxx@gmail.com" class="text-center"></v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-btn class="outline-btn font-bolditalic mt-10 d-none d-md-block" outlined width="282" height="62" color="#2D25FF">Join Waitlist</v-btn>
              <v-btn class="outline-btn font-bolditalic mt-10 d-block d-md-none" outlined width="160" height="48" color="#2D25FF">Join Waitlist</v-btn>
            </div>
            <v-icon color="#899AAE" @click="glassDialog = false" class="dialog-close-btn">mdi-close</v-icon>
            <img src="@/assets/images/eth-a.png" contain class="eth-img" style="top: 100px;right: -300px" />
          </v-card>
        </v-card>
      </v-dialog>
    </v-app>
  </div>  
</template>

<script>
  import aob from '../assets/js/colorBackground.js'
  export default {
    data: () => ({
      dialog: false,
      downloadDialog: false,
      glassDialog: false,
      warningDialog: false,
      memberDialog: false,
      signupDialog: false,
      showMenu: false,
    }),
    mounted: function() {
      document.title = "EyesFi | Like to Earn";
      aob.AnimateOrbBackground();
    },
    watch: {
    },
    methods: {
    },
  };
</script>

<style lang="scss">
  .v-application, .v-list, .v-card {
    background: transparent!important;
  }

  body {
    min-height: 100vh;
    background: url("../assets/images/home-bg.png") center / cover no-repeat;
  }

  .orb-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  /* Not too many browser support this yet but it's good to add! */
  @media (prefers-contrast: high) {
    .orb-canvas {
      display: none;
    }
  }

  .primary-text {
    color: #2D25FF!important;
  }

  .font-bolditalic {
    font-family: SemiBoldItalic;
  }

  .font-medium {
    font-family: FontMedium;
  }

  .font-regular {
    font-family: PromptRegular;
  }

  .font-mediumitalic {
    font-family: MediumItalic;
  }

  .font-helvetica {
    font-family: Helvetica;
  }

  .font-italic {
    font-family: FontItalic;
  }

  .header {
    position: absolute;
    width: 100%;
    height: 92px;
    top: 0;
    left: 0;
    z-index: 1000;

    .nav-item {
      font-size: 20px;
      color: #899AAE;
      cursor: pointer;

      .menu {
        width: 16px;
        display: flex;
        flex-direction: column;
        transition: all 0.2s linear 0s;
        -webkit-box-pack: justify;
        justify-content: space-between;

        .menu-item {
          display: inline-block;
          width: 100%;
          height: 2px;
          margin: 2px 0;
          transition: all 0.1s linear 0s;
          background: #899AAE;
        }
      }

      .menu.active .menu-item:nth-child(1) {
        transform: translate(0px, 10px) scale(1, 0);
      }

      .menu.active .menu-item:nth-child(3) {
        transform: translate(0px, -10px) scale(1, 0);
      }
    }
  }

  .page-title {
    font-size: 88px;
  }

  .outline-btn {
    border-radius: 20px!important;
    border: 4px solid #2D25FF!important;
    font-size: 22px!important; 
  }

  .road-card {
    background: linear-gradient(130deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.41) 100%)!important;
    border: none;
    color: #899AAE!important;

    .card-title {
      text-decoration: underline;
    }

    .card-icon-block {
      position: absolute;
      font-size: 40px;
      font-weight: 600;
      left: -20%;
      bottom: 40px;
      color: #2D25FF;
    }

    .circle-icon {
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      bottom: -90px;
      right: -30px;
      border: 4px solid #2D25FF;
      border-radius: 30px;
    }

    .glass-block {
      display: block;
      position: absolute;
      background: url("../assets/images/glass.png") center / cover no-repeat;
    }
  }

  .footer {
    background: #2D25FF;
  }

  .v-dialog--fullscreen {
    background: url("../assets/images/menu-bg.png") center / cover no-repeat;
    z-index: 10!important;
  }

  .dialog-inner-card {
    background: rgba(255, 255, 255, 0.87)!important;
    border-radius: 15px!important;  
    color: #899AAE!important;

    .dialog-title {
      font-size: 34px;
    }

    .dialog-caption {
      font-size: 14px;
    }

    .dialog-text {
      font-size: 18px;
    }

    .dialog-close-btn {
      position: absolute!important;
      top: 20px;
      right: 20px;
    }

    .button-mask {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.7);
      border-radius: 4px;
    }

    .v-btn:hover + .button-mask, .button-mask:hover {
      display: block;
    }
  }

  .warning-dialog {
    .v-card {
      background: rgba(212, 218, 225, 0.25)!important;
      border-radius: 9px!important;
      border: 4px dashed #C6CDD7!important;
      color: #2D25FF!important;
    }

    .claim-btn {
      border-radius: 20px!important;
      font-size: 28px!important;
    }
  }

  .warning-dialog .v-card::before, .warning-dialog .v-card::after, .member-dialog .border-card::before, .member-dialog .border-card::after {
    display: block;
    position: absolute;
    content: '';
    background: url("../assets/images/start.svg") center / cover no-repeat;
  }

  .warning-dialog .v-card::before, .member-dialog .border-card::before {
    width: 70px;
    height: 70px;
    top: -60px;
    right: -55px;
  }

  .warning-dialog .v-card::after, .member-dialog .border-card::after {
    width: 50px;
    height: 50px;
    bottom: -40px;
    left: -45px;
  }

  .member-dialog {
    .border-card {
      width: 410px;
      max-width: 100%;
      height: 232px;
      margin: 30px auto;
      border-radius: 9px;
      border: 4px solid #3129FF;
      transform: rotate(-2deg);
    }
  }

  .v-dialog {
    input {
      text-align: center!important;
      color: #899AAE!important;
      font-size: 24px!important;
    }

    .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
      border-color: #899AAE!important;
    }
  }


  .v-dialog, .menu-dialog {
    .eth-img {
      position: absolute;
      width: 186px;
      height: auto;
      right: 80px;
      bottom: 60px;
    }
  }

  .menu-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/menu-bg.png") center / cover no-repeat;
    z-index: 10;
    transition: all 0.2s linear 0s;
    transform: translate(100%, 0px) translateZ(0px);

    .link-item > a {
      position: relative;
      display: inline-block;
      padding: 0 50px;
      font-size: 40px;
      color: #8596AB;
      text-decoration: none;
      border: 6px solid transparent;
    }
  } 

  .menu-dialog div > .link-item:first-child > a:hover, .menu-dialog div > .link-item:last-child > a:hover {
    color: #2D25FF;
    border-radius: 20px;
    border: 6px solid #2D25FF;
  }

  .menu-dialog div > .link-item:nth-child(2) > a::before, .menu-dialog div > .link-item:nth-child(3) > a::before, .menu-dialog div > .link-item:nth-child(4) > a::before {
    position: absolute;
    content: '';
    width: 80px;
    height: 34.16px;
    top: 12px;
    right: -50px;
    background: url("../assets/images/coming-soon.svg") center / cover no-repeat;
  }

  .menu-dialog.active{
    transform: translate(0px, 0px) translateZ(0px)
  }

  .pc-container {

    .content {
      padding: 0 172px 344px;
      max-width: 1680px;
      min-width: 1024px;
      margin: auto;
      .page-title {
        font-size: 88px;
      }

      .subtitle {
        font-size: 54px;
        white-space: nowrap;
      }

      .desc {
        font-size: 18px;
        color: #8596AB;
      }

      .text-num {
        font-size: 20px;
      }
    }

    .list-content {
      .list-item {
        min-height: 32px;
        font-size: 18px;
        color: #8596AB!important;
      }
    }

    .community-block {
      .community-text {
        font-size: 32px;
      }

      .img-container {
        width: 210px;
        height: 106px;
      }

      .divider {
        margin: 0 104px;
      }
    }

    .road-card {
      box-shadow: 3px 2px 15px 5px rgba(122, 181, 214, 0.19)!important;
      border-radius: 28px!important;

      .card-title {
        font-size: 50px;
      }

      .subtitle {
        font-size: 30px;
        font-weight: 400;
      }

      .eth-img-block {
        position: absolute;
        bottom: -165px;
        right: -58px;
      }

      .glass-block {
        width: 232px;
        height: 100px;
        top: -55px;
        left: -110px;
        transform: rotate(-40deg);
      }
    }

    .image-block {
      .punk-name {
        font-size: 34px;
      }

      .subtext {
        font-size: 26px;
        color: #899AAE;
      }
    }

    .footer {
      font-size: 20px;
    }
  }

  .mobile-container {
    color: #8997A9;
    .grey-text {
      color: #8997A9!important;
    }

    .page-title {
      font-size: 35px;
      color: #000;
    }

    .eth-icon {
      width: 18px;
      height: 24px;
      background: url("../assets/images/eth-b.png") center / cover no-repeat;
    }

    .outline-btn {
      border-radius: 10px;
      border: 2px solid #2D25FF; 
      font-size: 14px!important; 
    }

    .subtitle {
      font-size: 22px;
    }

    .list-content {
      .list-item {
        min-height: 18px;
        font-size: 14px;
        color: #8596AB!important;
      }
    }

    .road-card {
      box-shadow: 2px 1px 6px 2px rgba(122, 181, 214, 0.19)!important;
      border-radius: 12px!important;

      .card-title {
        font-size: 20px;
      }

      .eth-img-block {
        position: absolute;
        bottom: -48px;
        right: -15px;
      }

      .glass-block {
        width: 100px;
        height: 43px;
        top: -20px;
        left: -50px;
        transform: rotate(-40deg);
      }
    }
  }

@media screen and (max-width: 1280px) {
  .pc-container {

    .content {
      .page-title {
        font-size: 72px;
      }
    }

    .list-content {
      .list-item {
        font-size: 16px;
      }
    }

    .community-block {
      .divider {
        margin: 0 24px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .menu-dialog {
    .link-item > a {
      display: inline-block;
      padding: 0 20px;
      font-size: 20px;
      border: 3px solid transparent;
    }
  } 

  .menu-dialog div > .link-item:first-child > a:hover, .menu-dialog div > .link-item:last-child > a:hover {
    border-radius: 10px;
    border: 3px solid #2D25FF;
  }

  .menu-dialog div > .link-item:nth-child(2) > a::before, .menu-dialog div > .link-item:nth-child(3) > a::before, .menu-dialog div > .link-item:nth-child(4) > a::before {
    width: 60px;
    height: 26px;
    top: 3px;
    right: -50px;
  }

  .v-dialog { 
    .eth-img {
      position: absolute;
      width: 90px;
      height: auto;
      right: 40px;
      bottom: 30px;
    }
  }

  .dialog-inner-card {
    border-radius: 10px!important;  

    .dialog-title {
      font-size: 26px;
    }

    .dialog-caption {
      font-size: 12px;
    }

    .dialog-text {
      font-size: 14px;
    }

    .dialog-close-btn {
      position: absolute!important;
      top: 12px;
      right: 12px;
    }
  }

  .warning-dialog {
    .v-card {
      border-radius: 6px!important;
      border: 2px dashed #C6CDD7!important;
      color: #2D25FF!important;
    }

    .claim-btn {
      border-radius: 10px!important;
      font-size: 18px!important;
    }
  }

  .warning-dialog .v-card::before, .member-dialog .border-card::before {
    width: 50px;
    height: 50px;
    top: -35px;
    right: -35px;
  }

  .warning-dialog .v-card::after, .member-dialog .border-card::after {
    width: 35px;
    height: 35px;
    bottom: -25px;
    left: -30px;
  }

  .member-dialog {
    .border-card {
      height: 150px;
      margin: 20px auto;
      border-radius: 6px;
      border: 2px solid #3129FF;
      transform: rotate(-2deg);
    }
  }

  .v-dialog {
    input {
      font-size: 18px!important;
    }
  }

  .outline-btn {
    border-radius: 10px!important;
    border: 2px solid #2D25FF!important;
    font-size: 18px!important; 
  }
}
</style>
