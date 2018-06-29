





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-pCRDtdb3GlUU48h+oRJVA8f0GddrLnU97wB7mHQ7q6c40vMbMMZsFdk0IMhkUFRqw1M/y4EkWxtaKwfeFezOkQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-73f533b7cc08a9d040e601cfd38fa585.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-pscKt6TONS3P9zPqdDjngC5prTq2tL4UT8MfWSiqhftwRK8aipsxEuebGlIpobamrDHDV//uvSMkcPXLduUrWw==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-a0a727fb61e0eacfb1f33d2f365272f8.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>puppeteer/api.md at master · GoogleChrome/puppeteer</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/1778935?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="GoogleChrome/puppeteer" /><meta property="og:url" content="https://github.com/GoogleChrome/puppeteer" /><meta property="og:description" content="puppeteer - Headless Chrome Node API" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjkxMjk0MjQxOjc0NjQ0Nzc3NDRmNGJjZWExZmNmNDVmYjJlYzY0YTQ4MGVhZmQ1MTk3MTM4OThmMDc2ZmUzODNjZjkxOTk5MWI=--d355b0ba4e6317be4ff86efde0b66a4d73b682e9">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F14A:61E2:618C3:982B4:5B3676CE" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F14A:61E2:618C3:982B4:5B3676CE" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="6082443" /><meta name="octolytics-actor-login" content="MarkKozel" /><meta name="octolytics-actor-hash" content="99a5b041cc82ce522aa61195c6b73ac5a4ae479b81488fa278595a9528347197" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




<meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="MarkKozel">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MGI0MTMxYTMzZjE1N2Q1OWIzNWYwYzVjYjEwNjQzYTBiYTg0NDNlYjhiYmQwZDMzMGIyYjdhNzM0YmNjYzdlMXx7InJlbW90ZV9hZGRyZXNzIjoiMTczLjIzOS4yMjguNDkiLCJyZXF1ZXN0X2lkIjoiRjE0QTo2MUUyOjYxOEMzOjk4MkI0OjVCMzY3NkNFIiwidGltZXN0YW1wIjoxNTMwMjk2MDI2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SEARCH,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="c24f4a527ef5e56783353831663e648a5a9b27aa">

  <meta http-equiv="x-pjax-version" content="b97cc4d9c54fcaf9b56fd892d62c951a">
  

      <link href="https://github.com/GoogleChrome/puppeteer/commits/master.atom" rel="alternate" title="Recent Commits to puppeteer:master" type="application/atom+xml">

  <meta name="description" content="puppeteer - Headless Chrome Node API">
  <meta name="go-import" content="github.com/GoogleChrome/puppeteer git https://github.com/GoogleChrome/puppeteer.git">

  <meta name="octolytics-dimension-user_id" content="1778935" /><meta name="octolytics-dimension-user_login" content="GoogleChrome" /><meta name="octolytics-dimension-repository_id" content="90796663" /><meta name="octolytics-dimension-repository_nwo" content="GoogleChrome/puppeteer" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="90796663" /><meta name="octolytics-dimension-repository_network_root_nwo" content="GoogleChrome/puppeteer" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="90796663" data-scoped-search-url="/GoogleChrome/puppeteer/search" data-unscoped-search-url="/search" action="/GoogleChrome/puppeteer/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=l53JCdyL+rXuqFHQTHm7RGO4aACcJHWAQdnYfHm5Y+s7/RF7pXteXlPXf9N9bUTb9WvbEfIU6rZyf27LbJhHBg=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li>
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:6082443" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="GoogleChrome/puppeteer">This repository</span>
  </div>
    <a class="dropdown-item" href="/GoogleChrome/puppeteer/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@MarkKozel" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/6082443?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">MarkKozel</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/MarkKozel" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/MarkKozel?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="b8Cvp1WGr4RUqK5AsDTk0xIeX4QDvfTMs/o0m9kcvQkumxnIB/KFfNtR99udyvxnotnn8mUMFxtYBFpABwN14Q==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="A94cUzWy8vwmnwCnTCNbT3/2XshbNueopFyzF/88XD1Chao8Z8bYBKlmWTxh3UP7zzHmvj2HBH9Pot3MISOU1Q==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Tfw/k5PPt5qCEy1te37MlrYa5YN6JbvsgLUOng3MAfQOd8Q/mZX/5YL6yZdWS0zuA7Ix1UIJBpF1vBdbXRxmwA==" />      <input type="hidden" name="repository_id" id="repository_id" value="90796663" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/GoogleChrome/puppeteer/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/GoogleChrome/puppeteer/watchers"
            aria-label="893 users are watching this repository">
            893
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/GoogleChrome/puppeteer/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Cq6yb3ddkDbXgK1Xk6Ptmh4JHYlOzPNuktiXIXBXro86Lvgy48Ahr004UrQFZ+D0JA6PhKblfWP+csJu1qHXbg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar GoogleChrome/puppeteer"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/GoogleChrome/puppeteer/stargazers"
           aria-label="34203 users starred this repository">
          34,203
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/GoogleChrome/puppeteer/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="i3e0lkNvgN9ST8+k+n5k9dvgdcCj2eywmw4dlRVq25RDFTH3NgQwK4Gphr/umOY+x3gmf0Vz2p56XmiAsaSfXQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star GoogleChrome/puppeteer"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/GoogleChrome/puppeteer/stargazers"
           aria-label="34203 users starred this repository">
          34,203
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/GoogleChrome/puppeteer/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="yo7nwGGOlwW3QhupfJOrN8Go7U2n1S5AmKQxLtRbPv/TOlZhsiGmA4iCWNfE2dQjlwhivuEU2ew1zLSBUp/QKw==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of GoogleChrome/puppeteer to your account"
                aria-label="Fork your own copy of GoogleChrome/puppeteer to your account">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/GoogleChrome/puppeteer/network" class="social-count"
       aria-label="2719 users forked this repository">
      2,719
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/GoogleChrome">GoogleChrome</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/GoogleChrome/puppeteer">puppeteer</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /GoogleChrome/puppeteer" href="/GoogleChrome/puppeteer">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /GoogleChrome/puppeteer/issues" href="/GoogleChrome/puppeteer/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">234</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /GoogleChrome/puppeteer/pulls" href="/GoogleChrome/puppeteer/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">10</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /GoogleChrome/puppeteer/pulse" href="/GoogleChrome/puppeteer/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/GoogleChrome/puppeteer/blob/59e7f7ebb61030cd8462d29b8960c93114199540/docs/api.md">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:f1b50bdb1e90620fa32f190281f86e05 -->

  

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/GoogleChrome/puppeteer/blob/aslushnikov-update-api/docs/api.md"
               data-name="aslushnikov-update-api"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                aslushnikov-update-api
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/GoogleChrome/puppeteer/blob/master/docs/api.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.5.0/docs/api.md"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.4.0/docs/api.md"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.3.0/docs/api.md"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.2.0/docs/api.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.1.1/docs/api.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.1.0/docs/api.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.0.0/docs/api.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.13.0/docs/api.md"
              data-name="v0.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.13.0">
                v0.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.12.0/docs/api.md"
              data-name="v0.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.0">
                v0.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.11.0/docs/api.md"
              data-name="v0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.0">
                v0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.2/docs/api.md"
              data-name="v0.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.2">
                v0.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.1/docs/api.md"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.0/docs/api.md"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.9.0/docs/api.md"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/GoogleChrome/puppeteer/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/GoogleChrome/puppeteer"><span>puppeteer</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/GoogleChrome/puppeteer/tree/master/docs"><span>docs</span></a></span><span class="separator">/</span><strong class="final-path">api.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/GoogleChrome/puppeteer/commit/acb89dddba21d4fd5d1be7f4c8dce17d3cbc223f" data-pjax>
          acb89dd
        </a>
        <relative-time datetime="2018-06-29T16:57:03Z">Jun 29, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-user-id="11801260" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kaveet"><img class="avatar" src="https://avatars1.githubusercontent.com/u/11801260?s=40&amp;v=4" width="20" height="20" alt="@kaveet" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-user-id="11801260" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kaveet">kaveet</a>
          <a data-pjax="true" title="docs(api.md): add note on page.pdf() color rendering behavior (#2821)

Adds guidance for producing accurate colors in PDF output. page.pdf() can produce unexpected document colors unless forced to render exact colors.

Fixes #2685" class="message" href="/GoogleChrome/puppeteer/commit/acb89dddba21d4fd5d1be7f4c8dce17d3cbc223f">docs(api.md): add note on page.pdf() color rendering behavior (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="337021992" data-permission-text="Issue title is private" data-url="https://github.com/GoogleChrome/puppeteer/issues/2821" href="https://github.com/GoogleChrome/puppeteer/pull/2821">#2821</a><a data-pjax="true" title="docs(api.md): add note on page.pdf() color rendering behavior (#2821)

Adds guidance for producing accurate colors in PDF output. page.pdf() can produce unexpected document colors unless forced to render exact colors.

Fixes #2685" class="message" href="/GoogleChrome/puppeteer/commit/acb89dddba21d4fd5d1be7f4c8dce17d3cbc223f">)</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>87</strong>
         contributors
      </button>
          <a class="avatar-link" data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=aslushnikov">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/746130?s=40&amp;v=4" width="20" height="20" alt="@aslushnikov" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=JoelEinbinder">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/4624233?s=40&amp;v=4" width="20" height="20" alt="@JoelEinbinder" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=vsemozhetbyt">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/10393198?s=40&amp;v=4" width="20" height="20" alt="@vsemozhetbyt" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1336186" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=yanivefraim">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/1336186?s=40&amp;v=4" width="20" height="20" alt="@yanivefraim" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=ebidel">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/238208?s=40&amp;v=4" width="20" height="20" alt="@ebidel" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="883973" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=pavelfeldman">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/883973?s=40&amp;v=4" width="20" height="20" alt="@pavelfeldman" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="262782" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=alixaxel">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/262782?s=40&amp;v=4" width="20" height="20" alt="@alixaxel" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3001652" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=brutalcrozt">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/3001652?s=40&amp;v=4" width="20" height="20" alt="@brutalcrozt" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2261067" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=yujiosaka">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/2261067?s=40&amp;v=4" width="20" height="20" alt="@yujiosaka" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3526753" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=trentmwillis">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/3526753?s=40&amp;v=4" width="20" height="20" alt="@trentmwillis" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1913805" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=SamVerschueren">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/1913805?s=40&amp;v=4" width="20" height="20" alt="@SamVerschueren" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1119248" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=r3dDoX">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/1119248?s=40&amp;v=4" width="20" height="20" alt="@r3dDoX" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=Glennvd">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/3950497?s=40&amp;v=4" width="20" height="20" alt="@Glennvd" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="436237" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=exKAZUu">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/436237?s=40&amp;v=4" width="20" height="20" alt="@exKAZUu" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2198466" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=kblok">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/2198466?s=40&amp;v=4" width="20" height="20" alt="@kblok" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2099301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=ChristianDavis">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/2099301?s=40&amp;v=4" width="20" height="20" alt="@ChristianDavis" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="263378" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=burningTyger">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/263378?s=40&amp;v=4" width="20" height="20" alt="@burningTyger" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="4353345" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=yotamlaufer">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/4353345?s=40&amp;v=4" width="20" height="20" alt="@yotamlaufer" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="5388533" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=yelisaveta">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/5388533?s=40&amp;v=4" width="20" height="20" alt="@yelisaveta" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="7344640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=wwwillchen">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/7344640?s=40&amp;v=4" width="20" height="20" alt="@wwwillchen" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="8369011" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=xg-wang">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/8369011?s=40&amp;v=4" width="20" height="20" alt="@xg-wang" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="130013" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=anru">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/130013?s=40&amp;v=4" width="20" height="20" alt="@anru" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="12152609" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=Veligura">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/12152609?s=40&amp;v=4" width="20" height="20" alt="@Veligura" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="7695319" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=trnkatomas">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/7695319?s=40&amp;v=4" width="20" height="20" alt="@trnkatomas" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="797187" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=tkdn">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/797187?s=40&amp;v=4" width="20" height="20" alt="@tkdn" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="333051" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/api.md?author=sonyarianto">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/333051?s=40&amp;v=4" width="20" height="20" alt="@sonyarianto" /> 
</a>
    <button type="button" data-facebox="#blob_contributors_box" class="btn-link others-text">and others</button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aslushnikov"><img src="https://avatars0.githubusercontent.com/u/746130?s=48&amp;v=4" width="24" height="24" alt="@aslushnikov" /></a>
            <a data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aslushnikov">aslushnikov</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JoelEinbinder"><img src="https://avatars2.githubusercontent.com/u/4624233?s=48&amp;v=4" width="24" height="24" alt="@JoelEinbinder" /></a>
            <a data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JoelEinbinder">JoelEinbinder</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vsemozhetbyt"><img src="https://avatars2.githubusercontent.com/u/10393198?s=48&amp;v=4" width="24" height="24" alt="@vsemozhetbyt" /></a>
            <a data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vsemozhetbyt">vsemozhetbyt</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1336186" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yanivefraim"><img src="https://avatars2.githubusercontent.com/u/1336186?s=48&amp;v=4" width="24" height="24" alt="@yanivefraim" /></a>
            <a data-hovercard-user-id="1336186" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yanivefraim">yanivefraim</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ebidel"><img src="https://avatars2.githubusercontent.com/u/238208?s=48&amp;v=4" width="24" height="24" alt="@ebidel" /></a>
            <a data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ebidel">ebidel</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="883973" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pavelfeldman"><img src="https://avatars0.githubusercontent.com/u/883973?s=48&amp;v=4" width="24" height="24" alt="@pavelfeldman" /></a>
            <a data-hovercard-user-id="883973" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pavelfeldman">pavelfeldman</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="262782" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/alixaxel"><img src="https://avatars1.githubusercontent.com/u/262782?s=48&amp;v=4" width="24" height="24" alt="@alixaxel" /></a>
            <a data-hovercard-user-id="262782" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/alixaxel">alixaxel</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3001652" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/brutalcrozt"><img src="https://avatars1.githubusercontent.com/u/3001652?s=48&amp;v=4" width="24" height="24" alt="@brutalcrozt" /></a>
            <a data-hovercard-user-id="3001652" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/brutalcrozt">brutalcrozt</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2261067" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yujiosaka"><img src="https://avatars2.githubusercontent.com/u/2261067?s=48&amp;v=4" width="24" height="24" alt="@yujiosaka" /></a>
            <a data-hovercard-user-id="2261067" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yujiosaka">yujiosaka</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3526753" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/trentmwillis"><img src="https://avatars2.githubusercontent.com/u/3526753?s=48&amp;v=4" width="24" height="24" alt="@trentmwillis" /></a>
            <a data-hovercard-user-id="3526753" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/trentmwillis">trentmwillis</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1913805" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SamVerschueren"><img src="https://avatars1.githubusercontent.com/u/1913805?s=48&amp;v=4" width="24" height="24" alt="@SamVerschueren" /></a>
            <a data-hovercard-user-id="1913805" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SamVerschueren">SamVerschueren</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1119248" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/r3dDoX"><img src="https://avatars3.githubusercontent.com/u/1119248?s=48&amp;v=4" width="24" height="24" alt="@r3dDoX" /></a>
            <a data-hovercard-user-id="1119248" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/r3dDoX">r3dDoX</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Glennvd"><img src="https://avatars2.githubusercontent.com/u/3950497?s=48&amp;v=4" width="24" height="24" alt="@Glennvd" /></a>
            <a data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Glennvd">Glennvd</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="436237" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/exKAZUu"><img src="https://avatars0.githubusercontent.com/u/436237?s=48&amp;v=4" width="24" height="24" alt="@exKAZUu" /></a>
            <a data-hovercard-user-id="436237" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/exKAZUu">exKAZUu</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2198466" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kblok"><img src="https://avatars0.githubusercontent.com/u/2198466?s=48&amp;v=4" width="24" height="24" alt="@kblok" /></a>
            <a data-hovercard-user-id="2198466" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kblok">kblok</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2099301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ChristianDavis"><img src="https://avatars0.githubusercontent.com/u/2099301?s=48&amp;v=4" width="24" height="24" alt="@ChristianDavis" /></a>
            <a data-hovercard-user-id="2099301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ChristianDavis">ChristianDavis</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="263378" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/burningTyger"><img src="https://avatars0.githubusercontent.com/u/263378?s=48&amp;v=4" width="24" height="24" alt="@burningTyger" /></a>
            <a data-hovercard-user-id="263378" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/burningTyger">burningTyger</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4353345" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yotamlaufer"><img src="https://avatars2.githubusercontent.com/u/4353345?s=48&amp;v=4" width="24" height="24" alt="@yotamlaufer" /></a>
            <a data-hovercard-user-id="4353345" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yotamlaufer">yotamlaufer</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5388533" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yelisaveta"><img src="https://avatars3.githubusercontent.com/u/5388533?s=48&amp;v=4" width="24" height="24" alt="@yelisaveta" /></a>
            <a data-hovercard-user-id="5388533" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/yelisaveta">yelisaveta</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="7344640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/wwwillchen"><img src="https://avatars2.githubusercontent.com/u/7344640?s=48&amp;v=4" width="24" height="24" alt="@wwwillchen" /></a>
            <a data-hovercard-user-id="7344640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/wwwillchen">wwwillchen</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="8369011" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/xg-wang"><img src="https://avatars3.githubusercontent.com/u/8369011?s=48&amp;v=4" width="24" height="24" alt="@xg-wang" /></a>
            <a data-hovercard-user-id="8369011" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/xg-wang">xg-wang</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="130013" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/anru"><img src="https://avatars2.githubusercontent.com/u/130013?s=48&amp;v=4" width="24" height="24" alt="@anru" /></a>
            <a data-hovercard-user-id="130013" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/anru">anru</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="12152609" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Veligura"><img src="https://avatars0.githubusercontent.com/u/12152609?s=48&amp;v=4" width="24" height="24" alt="@Veligura" /></a>
            <a data-hovercard-user-id="12152609" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Veligura">Veligura</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="7695319" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/trnkatomas"><img src="https://avatars3.githubusercontent.com/u/7695319?s=48&amp;v=4" width="24" height="24" alt="@trnkatomas" /></a>
            <a data-hovercard-user-id="7695319" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/trnkatomas">trnkatomas</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="797187" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tkdn"><img src="https://avatars3.githubusercontent.com/u/797187?s=48&amp;v=4" width="24" height="24" alt="@tkdn" /></a>
            <a data-hovercard-user-id="797187" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tkdn">tkdn</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="333051" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sonyarianto"><img src="https://avatars2.githubusercontent.com/u/333051?s=48&amp;v=4" width="24" height="24" alt="@sonyarianto" /></a>
            <a data-hovercard-user-id="333051" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sonyarianto">sonyarianto</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5823031" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/simone-sanfratello"><img src="https://avatars0.githubusercontent.com/u/5823031?s=48&amp;v=4" width="24" height="24" alt="@simone-sanfratello" /></a>
            <a data-hovercard-user-id="5823031" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/simone-sanfratello">simone-sanfratello</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="292365" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sheerun"><img src="https://avatars3.githubusercontent.com/u/292365?s=48&amp;v=4" width="24" height="24" alt="@sheerun" /></a>
            <a data-hovercard-user-id="292365" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/sheerun">sheerun</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="112809" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/seantanly"><img src="https://avatars3.githubusercontent.com/u/112809?s=48&amp;v=4" width="24" height="24" alt="@seantanly" /></a>
            <a data-hovercard-user-id="112809" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/seantanly">seantanly</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="11082872" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/slohmes"><img src="https://avatars3.githubusercontent.com/u/11082872?s=48&amp;v=4" width="24" height="24" alt="@slohmes" /></a>
            <a data-hovercard-user-id="11082872" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/slohmes">slohmes</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="637874" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robertofrega"><img src="https://avatars0.githubusercontent.com/u/637874?s=48&amp;v=4" width="24" height="24" alt="@robertofrega" /></a>
            <a data-hovercard-user-id="637874" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robertofrega">robertofrega</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2310732" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/r03ert0"><img src="https://avatars2.githubusercontent.com/u/2310732?s=48&amp;v=4" width="24" height="24" alt="@r03ert0" /></a>
            <a data-hovercard-user-id="2310732" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/r03ert0">r03ert0</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4924279" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robertshilston"><img src="https://avatars0.githubusercontent.com/u/4924279?s=48&amp;v=4" width="24" height="24" alt="@robertshilston" /></a>
            <a data-hovercard-user-id="4924279" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/robertshilston">robertshilston</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="12722227" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/raduaron26"><img src="https://avatars3.githubusercontent.com/u/12722227?s=48&amp;v=4" width="24" height="24" alt="@raduaron26" /></a>
            <a data-hovercard-user-id="12722227" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/raduaron26">raduaron26</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2109932" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Janpot"><img src="https://avatars3.githubusercontent.com/u/2109932?s=48&amp;v=4" width="24" height="24" alt="@Janpot" /></a>
            <a data-hovercard-user-id="2109932" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Janpot">Janpot</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="39191" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/paulirish"><img src="https://avatars3.githubusercontent.com/u/39191?s=48&amp;v=4" width="24" height="24" alt="@paulirish" /></a>
            <a data-hovercard-user-id="39191" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/paulirish">paulirish</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3165635" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/oliviertassinari"><img src="https://avatars3.githubusercontent.com/u/3165635?s=48&amp;v=4" width="24" height="24" alt="@oliviertassinari" /></a>
            <a data-hovercard-user-id="3165635" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/oliviertassinari">oliviertassinari</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1344020" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/octasimo"><img src="https://avatars1.githubusercontent.com/u/1344020?s=48&amp;v=4" width="24" height="24" alt="@octasimo" /></a>
            <a data-hovercard-user-id="1344020" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/octasimo">octasimo</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="14840170" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bambooom"><img src="https://avatars0.githubusercontent.com/u/14840170?s=48&amp;v=4" width="24" height="24" alt="@bambooom" /></a>
            <a data-hovercard-user-id="14840170" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bambooom">bambooom</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="892048" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ngryman"><img src="https://avatars0.githubusercontent.com/u/892048?s=48&amp;v=4" width="24" height="24" alt="@ngryman" /></a>
            <a data-hovercard-user-id="892048" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ngryman">ngryman</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="6399" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/neerajdotname"><img src="https://avatars3.githubusercontent.com/u/6399?s=48&amp;v=4" width="24" height="24" alt="@neerajdotname" /></a>
            <a data-hovercard-user-id="6399" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/neerajdotname">neerajdotname</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="51244" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ithinkihaveacat"><img src="https://avatars3.githubusercontent.com/u/51244?s=48&amp;v=4" width="24" height="24" alt="@ithinkihaveacat" /></a>
            <a data-hovercard-user-id="51244" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ithinkihaveacat">ithinkihaveacat</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4224802" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Mickael-van-der-Beek"><img src="https://avatars3.githubusercontent.com/u/4224802?s=48&amp;v=4" width="24" height="24" alt="@Mickael-van-der-Beek" /></a>
            <a data-hovercard-user-id="4224802" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Mickael-van-der-Beek">Mickael-van-der-Beek</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="20781479" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MountainDrew"><img src="https://avatars0.githubusercontent.com/u/20781479?s=48&amp;v=4" width="24" height="24" alt="@MountainDrew" /></a>
            <a data-hovercard-user-id="20781479" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MountainDrew">MountainDrew</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1053327" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ls6"><img src="https://avatars3.githubusercontent.com/u/1053327?s=48&amp;v=4" width="24" height="24" alt="@ls6" /></a>
            <a data-hovercard-user-id="1053327" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ls6">ls6</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1469675" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ksm2"><img src="https://avatars2.githubusercontent.com/u/1469675?s=48&amp;v=4" width="24" height="24" alt="@ksm2" /></a>
            <a data-hovercard-user-id="1469675" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ksm2">ksm2</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="426418" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ak239"><img src="https://avatars2.githubusercontent.com/u/426418?s=48&amp;v=4" width="24" height="24" alt="@ak239" /></a>
            <a data-hovercard-user-id="426418" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ak239">ak239</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="427333" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/LucasHill"><img src="https://avatars2.githubusercontent.com/u/427333?s=48&amp;v=4" width="24" height="24" alt="@LucasHill" /></a>
            <a data-hovercard-user-id="427333" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/LucasHill">LucasHill</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="11801260" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kaveet"><img src="https://avatars0.githubusercontent.com/u/11801260?s=48&amp;v=4" width="24" height="24" alt="@kaveet" /></a>
            <a data-hovercard-user-id="11801260" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kaveet">kaveet</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4310946" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mkamakura"><img src="https://avatars1.githubusercontent.com/u/4310946?s=48&amp;v=4" width="24" height="24" alt="@mkamakura" /></a>
            <a data-hovercard-user-id="4310946" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/mkamakura">mkamakura</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="10199495" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/karlwbrown"><img src="https://avatars1.githubusercontent.com/u/10199495?s=48&amp;v=4" width="24" height="24" alt="@karlwbrown" /></a>
            <a data-hovercard-user-id="10199495" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/karlwbrown">karlwbrown</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="28621046" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jviala-ekino"><img src="https://avatars3.githubusercontent.com/u/28621046?s=48&amp;v=4" width="24" height="24" alt="@jviala-ekino" /></a>
            <a data-hovercard-user-id="28621046" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jviala-ekino">jviala-ekino</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="868301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Garbee"><img src="https://avatars0.githubusercontent.com/u/868301?s=48&amp;v=4" width="24" height="24" alt="@Garbee" /></a>
            <a data-hovercard-user-id="868301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Garbee">Garbee</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1499985" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joelgriffith"><img src="https://avatars3.githubusercontent.com/u/1499985?s=48&amp;v=4" width="24" height="24" alt="@joelgriffith" /></a>
            <a data-hovercard-user-id="1499985" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/joelgriffith">joelgriffith</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1615" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jeresig"><img src="https://avatars0.githubusercontent.com/u/1615?s=48&amp;v=4" width="24" height="24" alt="@jeresig" /></a>
            <a data-hovercard-user-id="1615" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jeresig">jeresig</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="10158759" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Runaider"><img src="https://avatars0.githubusercontent.com/u/10158759?s=48&amp;v=4" width="24" height="24" alt="@Runaider" /></a>
            <a data-hovercard-user-id="10158759" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Runaider">Runaider</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4988871" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Jantwel"><img src="https://avatars1.githubusercontent.com/u/4988871?s=48&amp;v=4" width="24" height="24" alt="@Jantwel" /></a>
            <a data-hovercard-user-id="4988871" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Jantwel">Jantwel</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="453152" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JakeGinnivan"><img src="https://avatars2.githubusercontent.com/u/453152?s=48&amp;v=4" width="24" height="24" alt="@JakeGinnivan" /></a>
            <a data-hovercard-user-id="453152" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JakeGinnivan">JakeGinnivan</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2977329" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ethanlee16"><img src="https://avatars2.githubusercontent.com/u/2977329?s=48&amp;v=4" width="24" height="24" alt="@ethanlee16" /></a>
            <a data-hovercard-user-id="2977329" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ethanlee16">ethanlee16</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4279066" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/gordomium"><img src="https://avatars3.githubusercontent.com/u/4279066?s=48&amp;v=4" width="24" height="24" alt="@gordomium" /></a>
            <a data-hovercard-user-id="4279066" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/gordomium">gordomium</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4330357" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/futpib"><img src="https://avatars3.githubusercontent.com/u/4330357?s=48&amp;v=4" width="24" height="24" alt="@futpib" /></a>
            <a data-hovercard-user-id="4330357" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/futpib">futpib</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="272709" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/fringd"><img src="https://avatars1.githubusercontent.com/u/272709?s=48&amp;v=4" width="24" height="24" alt="@fringd" /></a>
            <a data-hovercard-user-id="272709" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/fringd">fringd</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="10793186" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/suvratjain1995"><img src="https://avatars2.githubusercontent.com/u/10793186?s=48&amp;v=4" width="24" height="24" alt="@suvratjain1995" /></a>
            <a data-hovercard-user-id="10793186" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/suvratjain1995">suvratjain1995</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="8284972" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/entrptaher"><img src="https://avatars0.githubusercontent.com/u/8284972?s=48&amp;v=4" width="24" height="24" alt="@entrptaher" /></a>
            <a data-hovercard-user-id="8284972" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/entrptaher">entrptaher</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1045347" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/elisherer"><img src="https://avatars3.githubusercontent.com/u/1045347?s=48&amp;v=4" width="24" height="24" alt="@elisherer" /></a>
            <a data-hovercard-user-id="1045347" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/elisherer">elisherer</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1740822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MercifulCode"><img src="https://avatars3.githubusercontent.com/u/1740822?s=48&amp;v=4" width="24" height="24" alt="@MercifulCode" /></a>
            <a data-hovercard-user-id="1740822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MercifulCode">MercifulCode</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="14236753" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/crowchirp"><img src="https://avatars1.githubusercontent.com/u/14236753?s=48&amp;v=4" width="24" height="24" alt="@crowchirp" /></a>
            <a data-hovercard-user-id="14236753" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/crowchirp">crowchirp</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="9100299" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/cohesively"><img src="https://avatars3.githubusercontent.com/u/9100299?s=48&amp;v=4" width="24" height="24" alt="@cohesively" /></a>
            <a data-hovercard-user-id="9100299" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/cohesively">cohesively</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="404765" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/cdeutsch"><img src="https://avatars3.githubusercontent.com/u/404765?s=48&amp;v=4" width="24" height="24" alt="@cdeutsch" /></a>
            <a data-hovercard-user-id="404765" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/cdeutsch">cdeutsch</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="118375" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/calderas"><img src="https://avatars2.githubusercontent.com/u/118375?s=48&amp;v=4" width="24" height="24" alt="@calderas" /></a>
            <a data-hovercard-user-id="118375" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/calderas">calderas</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="61787" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/BenoitZugmeyer"><img src="https://avatars0.githubusercontent.com/u/61787?s=48&amp;v=4" width="24" height="24" alt="@BenoitZugmeyer" /></a>
            <a data-hovercard-user-id="61787" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/BenoitZugmeyer">BenoitZugmeyer</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="383212" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/brikou"><img src="https://avatars1.githubusercontent.com/u/383212?s=48&amp;v=4" width="24" height="24" alt="@brikou" /></a>
            <a data-hovercard-user-id="383212" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/brikou">brikou</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="194609" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bcoe"><img src="https://avatars2.githubusercontent.com/u/194609?s=48&amp;v=4" width="24" height="24" alt="@bcoe" /></a>
            <a data-hovercard-user-id="194609" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/bcoe">bcoe</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1213808" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webnard"><img src="https://avatars3.githubusercontent.com/u/1213808?s=48&amp;v=4" width="24" height="24" alt="@webnard" /></a>
            <a data-hovercard-user-id="1213808" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/webnard">webnard</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="66927" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/batiste"><img src="https://avatars2.githubusercontent.com/u/66927?s=48&amp;v=4" width="24" height="24" alt="@batiste" /></a>
            <a data-hovercard-user-id="66927" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/batiste">batiste</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="973269" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/barryvdh"><img src="https://avatars1.githubusercontent.com/u/973269?s=48&amp;v=4" width="24" height="24" alt="@barryvdh" /></a>
            <a data-hovercard-user-id="973269" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/barryvdh">barryvdh</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1849576" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/atabel"><img src="https://avatars0.githubusercontent.com/u/1849576?s=48&amp;v=4" width="24" height="24" alt="@atabel" /></a>
            <a data-hovercard-user-id="1849576" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/atabel">atabel</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="662021" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/arnemart"><img src="https://avatars2.githubusercontent.com/u/662021?s=48&amp;v=4" width="24" height="24" alt="@arnemart" /></a>
            <a data-hovercard-user-id="662021" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/arnemart">arnemart</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="12913401" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/imrobinized"><img src="https://avatars2.githubusercontent.com/u/12913401?s=48&amp;v=4" width="24" height="24" alt="@imrobinized" /></a>
            <a data-hovercard-user-id="12913401" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/imrobinized">imrobinized</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5192288" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/a1ph"><img src="https://avatars2.githubusercontent.com/u/5192288?s=48&amp;v=4" width="24" height="24" alt="@a1ph" /></a>
            <a data-hovercard-user-id="5192288" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/a1ph">a1ph</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="14365879" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/AlexChung1995"><img src="https://avatars3.githubusercontent.com/u/14365879?s=48&amp;v=4" width="24" height="24" alt="@AlexChung1995" /></a>
            <a data-hovercard-user-id="14365879" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/AlexChung1995">AlexChung1995</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2584733" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aj-dev"><img src="https://avatars0.githubusercontent.com/u/2584733?s=48&amp;v=4" width="24" height="24" alt="@aj-dev" /></a>
            <a data-hovercard-user-id="2584733" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aj-dev">aj-dev</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5833391" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/abalone0204"><img src="https://avatars2.githubusercontent.com/u/5833391?s=48&amp;v=4" width="24" height="24" alt="@abalone0204" /></a>
            <a data-hovercard-user-id="5833391" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/abalone0204">abalone0204</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="13357301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Jiang-Xuan"><img src="https://avatars3.githubusercontent.com/u/13357301?s=48&amp;v=4" width="24" height="24" alt="@Jiang-Xuan" /></a>
            <a data-hovercard-user-id="13357301" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Jiang-Xuan">Jiang-Xuan</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="31924884" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/schelkun"><img src="https://avatars0.githubusercontent.com/u/31924884?s=48&amp;v=4" width="24" height="24" alt="@schelkun" /></a>
            <a data-hovercard-user-id="31924884" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/schelkun">schelkun</a>
          </li>
      </ul>
    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/GoogleChrome/puppeteer/raw/master/docs/api.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/GoogleChrome/puppeteer/blame/master/docs/api.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/GoogleChrome/puppeteer/commits/master/docs/api.md">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/GoogleChrome/puppeteer?branch=master&amp;filepath=docs%2Fapi.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/GoogleChrome/puppeteer/edit/master/docs/api.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="jxGSVxAgUCX2DhJbDlDlpkh9HOs/uLXB/3Bl1J1iqyLpksugdwzcsdfQ3apqYV7CUEaMKdWLChF5ra29EpS8Kw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/GoogleChrome/puppeteer/delete/master/docs/api.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="YYcq7S0pDZiXx9/cG78fTxCOJVYf+koyCpjb7oz6f+eK6K/75bUU1XkjUTjKY0ntx2XTvOmf2cyOPI3M7ZoDog==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      3003 lines (2306 sloc)
      <span class="file-info-divider"></span>
    140 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h5><a id="user-content-released-apis-v150--v140--v130--v120--v111--v110--v100--v0130--v0120--v0110--v0102--v0101--v0100--v090" class="anchor" aria-hidden="true" href="#released-apis-v150--v140--v130--v120--v111--v110--v100--v0130--v0120--v0110--v0102--v0101--v0100--v090"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Released APIs: <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md">v1.5.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.4.0/docs/api.md">v1.4.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.3.0/docs/api.md">v1.3.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.2.0/docs/api.md">v1.2.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.1.1/docs/api.md">v1.1.1</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.1.0/docs/api.md">v1.1.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.0.0/docs/api.md">v1.0.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.13.0/docs/api.md">v0.13.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.12.0/docs/api.md">v0.12.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.11.0/docs/api.md">v0.11.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.10.2/docs/api.md">v0.10.2</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.10.1/docs/api.md">v0.10.1</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.10.0/docs/api.md">v0.10.0</a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/v0.9.0/docs/api.md">v0.9.0</a></h5>
<h1><a id="user-content-puppeteer-api-tip-of-tree" class="anchor" aria-hidden="true" href="#puppeteer-api-tip-of-tree"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Puppeteer API Tip-Of-Tree</h1>

<blockquote>
<p>Next Release: <strong>July 12, 2018</strong></p>
</blockquote>

<h5><a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of Contents</h5>

<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#environment-variables">Environment Variables</a></li>
<li><a href="#class-puppeteer">class: Puppeteer</a>
<ul>
<li><a href="#puppeteerconnectoptions">puppeteer.connect(options)</a></li>
<li><a href="#puppeteercreatebrowserfetcheroptions">puppeteer.createBrowserFetcher([options])</a></li>
<li><a href="#puppeteerdefaultargs">puppeteer.defaultArgs()</a></li>
<li><a href="#puppeteerexecutablepath">puppeteer.executablePath()</a></li>
<li><a href="#puppeteerlaunchoptions">puppeteer.launch([options])</a></li>
</ul>
</li>
<li><a href="#class-browserfetcher">class: BrowserFetcher</a>
<ul>
<li><a href="#browserfetchercandownloadrevision">browserFetcher.canDownload(revision)</a></li>
<li><a href="#browserfetcherdownloadrevision-progresscallback">browserFetcher.download(revision[, progressCallback])</a></li>
<li><a href="#browserfetcherlocalrevisions">browserFetcher.localRevisions()</a></li>
<li><a href="#browserfetcherplatform">browserFetcher.platform()</a></li>
<li><a href="#browserfetcherremoverevision">browserFetcher.remove(revision)</a></li>
<li><a href="#browserfetcherrevisioninforevision">browserFetcher.revisionInfo(revision)</a></li>
</ul>
</li>
<li><a href="#class-browser">class: Browser</a>
<ul>
<li><a href="#event-disconnected">event: 'disconnected'</a></li>
<li><a href="#event-targetchanged">event: 'targetchanged'</a></li>
<li><a href="#event-targetcreated">event: 'targetcreated'</a></li>
<li><a href="#event-targetdestroyed">event: 'targetdestroyed'</a></li>
<li><a href="#browserbrowsercontexts">browser.browserContexts()</a></li>
<li><a href="#browserclose">browser.close()</a></li>
<li><a href="#browsercreateincognitobrowsercontext">browser.createIncognitoBrowserContext()</a></li>
<li><a href="#browserdisconnect">browser.disconnect()</a></li>
<li><a href="#browsernewpage">browser.newPage()</a></li>
<li><a href="#browserpages">browser.pages()</a></li>
<li><a href="#browserprocess">browser.process()</a></li>
<li><a href="#browsertargets">browser.targets()</a></li>
<li><a href="#browseruseragent">browser.userAgent()</a></li>
<li><a href="#browserversion">browser.version()</a></li>
<li><a href="#browserwsendpoint">browser.wsEndpoint()</a></li>
</ul>
</li>
<li><a href="#class-browsercontext">class: BrowserContext</a>
<ul>
<li><a href="#event-targetchanged-1">event: 'targetchanged'</a></li>
<li><a href="#event-targetcreated-1">event: 'targetcreated'</a></li>
<li><a href="#event-targetdestroyed-1">event: 'targetdestroyed'</a></li>
<li><a href="#browsercontextbrowser">browserContext.browser()</a></li>
<li><a href="#browsercontextclose">browserContext.close()</a></li>
<li><a href="#browsercontextisincognito">browserContext.isIncognito()</a></li>
<li><a href="#browsercontextnewpage">browserContext.newPage()</a></li>
<li><a href="#browsercontexttargets">browserContext.targets()</a></li>
</ul>
</li>
<li><a href="#class-page">class: Page</a>
<ul>
<li><a href="#event-close">event: 'close'</a></li>
<li><a href="#event-console">event: 'console'</a></li>
<li><a href="#event-dialog">event: 'dialog'</a></li>
<li><a href="#event-domcontentloaded">event: 'domcontentloaded'</a></li>
<li><a href="#event-error">event: 'error'</a></li>
<li><a href="#event-frameattached">event: 'frameattached'</a></li>
<li><a href="#event-framedetached">event: 'framedetached'</a></li>
<li><a href="#event-framenavigated">event: 'framenavigated'</a></li>
<li><a href="#event-load">event: 'load'</a></li>
<li><a href="#event-metrics">event: 'metrics'</a></li>
<li><a href="#event-pageerror">event: 'pageerror'</a></li>
<li><a href="#event-request">event: 'request'</a></li>
<li><a href="#event-requestfailed">event: 'requestfailed'</a></li>
<li><a href="#event-requestfinished">event: 'requestfinished'</a></li>
<li><a href="#event-response">event: 'response'</a></li>
<li><a href="#event-workercreated">event: 'workercreated'</a></li>
<li><a href="#event-workerdestroyed">event: 'workerdestroyed'</a></li>
<li><a href="#pageselector">page.$(selector)</a></li>
<li><a href="#pageselector-1">page.$$(selector)</a></li>
<li><a href="#pageevalselector-pagefunction-args">page.$$eval(selector, pageFunction[, ...args])</a></li>
<li><a href="#pageevalselector-pagefunction-args-1">page.$eval(selector, pageFunction[, ...args])</a></li>
<li><a href="#pagexexpression">page.$x(expression)</a></li>
<li><a href="#pageaddscripttagoptions">page.addScriptTag(options)</a></li>
<li><a href="#pageaddstyletagoptions">page.addStyleTag(options)</a></li>
<li><a href="#pageauthenticatecredentials">page.authenticate(credentials)</a></li>
<li><a href="#pagebringtofront">page.bringToFront()</a></li>
<li><a href="#pagebrowser">page.browser()</a></li>
<li><a href="#pageclickselector-options">page.click(selector[, options])</a></li>
<li><a href="#pagecloseoptions">page.close(options)</a></li>
<li><a href="#pagecontent">page.content()</a></li>
<li><a href="#pagecookiesurls">page.cookies(...urls)</a></li>
<li><a href="#pagecoverage">page.coverage</a></li>
<li><a href="#pagedeletecookiecookies">page.deleteCookie(...cookies)</a></li>
<li><a href="#pageemulateoptions">page.emulate(options)</a></li>
<li><a href="#pageemulatemediamediatype">page.emulateMedia(mediaType)</a></li>
<li><a href="#pageevaluatepagefunction-args">page.evaluate(pageFunction, ...args)</a></li>
<li><a href="#pageevaluatehandlepagefunction-args">page.evaluateHandle(pageFunction, ...args)</a></li>
<li><a href="#pageevaluateonnewdocumentpagefunction-args">page.evaluateOnNewDocument(pageFunction, ...args)</a></li>
<li><a href="#pageexposefunctionname-puppeteerfunction">page.exposeFunction(name, puppeteerFunction)</a></li>
<li><a href="#pagefocusselector">page.focus(selector)</a></li>
<li><a href="#pageframes">page.frames()</a></li>
<li><a href="#pagegobackoptions">page.goBack(options)</a></li>
<li><a href="#pagegoforwardoptions">page.goForward(options)</a></li>
<li><a href="#pagegotourl-options">page.goto(url, options)</a></li>
<li><a href="#pagehoverselector">page.hover(selector)</a></li>
<li><a href="#pageisclosed">page.isClosed()</a></li>
<li><a href="#pagekeyboard">page.keyboard</a></li>
<li><a href="#pagemainframe">page.mainFrame()</a></li>
<li><a href="#pagemetrics">page.metrics()</a></li>
<li><a href="#pagemouse">page.mouse</a></li>
<li><a href="#pagepdfoptions">page.pdf(options)</a></li>
<li><a href="#pagequeryobjectsprototypehandle">page.queryObjects(prototypeHandle)</a></li>
<li><a href="#pagereloadoptions">page.reload(options)</a></li>
<li><a href="#pagescreenshotoptions">page.screenshot([options])</a></li>
<li><a href="#pageselectselector-values">page.select(selector, ...values)</a></li>
<li><a href="#pagesetbypasscspenabled">page.setBypassCSP(enabled)</a></li>
<li><a href="#pagesetcacheenabledenabled">page.setCacheEnabled(enabled)</a></li>
<li><a href="#pagesetcontenthtml">page.setContent(html)</a></li>
<li><a href="#pagesetcookiecookies">page.setCookie(...cookies)</a></li>
<li><a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a></li>
<li><a href="#pagesetextrahttpheadersheaders">page.setExtraHTTPHeaders(headers)</a></li>
<li><a href="#pagesetjavascriptenabledenabled">page.setJavaScriptEnabled(enabled)</a></li>
<li><a href="#pagesetofflinemodeenabled">page.setOfflineMode(enabled)</a></li>
<li><a href="#pagesetrequestinterceptionvalue">page.setRequestInterception(value)</a></li>
<li><a href="#pagesetuseragentuseragent">page.setUserAgent(userAgent)</a></li>
<li><a href="#pagesetviewportviewport">page.setViewport(viewport)</a></li>
<li><a href="#pagetapselector">page.tap(selector)</a></li>
<li><a href="#pagetarget">page.target()</a></li>
<li><a href="#pagetitle">page.title()</a></li>
<li><a href="#pagetouchscreen">page.touchscreen</a></li>
<li><a href="#pagetracing">page.tracing</a></li>
<li><a href="#pagetypeselector-text-options">page.type(selector, text[, options])</a></li>
<li><a href="#pageurl">page.url()</a></li>
<li><a href="#pageviewport">page.viewport()</a></li>
<li><a href="#pagewaitforselectororfunctionortimeout-options-args">page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</a></li>
<li><a href="#pagewaitforfunctionpagefunction-options-args">page.waitForFunction(pageFunction[, options[, ...args]])</a></li>
<li><a href="#pagewaitfornavigationoptions">page.waitForNavigation(options)</a></li>
<li><a href="#pagewaitforselectorselector-options">page.waitForSelector(selector[, options])</a></li>
<li><a href="#pagewaitforxpathxpath-options">page.waitForXPath(xpath[, options])</a></li>
<li><a href="#pageworkers">page.workers()</a></li>
</ul>
</li>
<li><a href="#class-worker">class: Worker</a>
<ul>
<li><a href="#workerevaluatepagefunction-args">worker.evaluate(pageFunction, ...args)</a></li>
<li><a href="#workerevaluatehandlepagefunction-args">worker.evaluateHandle(pageFunction, ...args)</a></li>
<li><a href="#workerexecutioncontext">worker.executionContext()</a></li>
<li><a href="#workerurl">worker.url()</a></li>
</ul>
</li>
<li><a href="#class-keyboard">class: Keyboard</a>
<ul>
<li><a href="#keyboarddownkey-options">keyboard.down(key[, options])</a></li>
<li><a href="#keyboardpresskey-options">keyboard.press(key[, options])</a></li>
<li><a href="#keyboardsendcharacterchar">keyboard.sendCharacter(char)</a></li>
<li><a href="#keyboardtypetext-options">keyboard.type(text, options)</a></li>
<li><a href="#keyboardupkey">keyboard.up(key)</a></li>
</ul>
</li>
<li><a href="#class-mouse">class: Mouse</a>
<ul>
<li><a href="#mouseclickx-y-options">mouse.click(x, y, [options])</a></li>
<li><a href="#mousedownoptions">mouse.down([options])</a></li>
<li><a href="#mousemovex-y-options">mouse.move(x, y, [options])</a></li>
<li><a href="#mouseupoptions">mouse.up([options])</a></li>
</ul>
</li>
<li><a href="#class-touchscreen">class: Touchscreen</a>
<ul>
<li><a href="#touchscreentapx-y">touchscreen.tap(x, y)</a></li>
</ul>
</li>
<li><a href="#class-tracing">class: Tracing</a>
<ul>
<li><a href="#tracingstartoptions">tracing.start(options)</a></li>
<li><a href="#tracingstop">tracing.stop()</a></li>
</ul>
</li>
<li><a href="#class-dialog">class: Dialog</a>
<ul>
<li><a href="#dialogacceptprompttext">dialog.accept([promptText])</a></li>
<li><a href="#dialogdefaultvalue">dialog.defaultValue()</a></li>
<li><a href="#dialogdismiss">dialog.dismiss()</a></li>
<li><a href="#dialogmessage">dialog.message()</a></li>
<li><a href="#dialogtype">dialog.type()</a></li>
</ul>
</li>
<li><a href="#class-consolemessage">class: ConsoleMessage</a>
<ul>
<li><a href="#consolemessageargs">consoleMessage.args()</a></li>
<li><a href="#consolemessagetext">consoleMessage.text()</a></li>
<li><a href="#consolemessagetype">consoleMessage.type()</a></li>
</ul>
</li>
<li><a href="#class-frame">class: Frame</a>
<ul>
<li><a href="#frameselector">frame.$(selector)</a></li>
<li><a href="#frameselector-1">frame.$$(selector)</a></li>
<li><a href="#frameevalselector-pagefunction-args">frame.$$eval(selector, pageFunction[, ...args])</a></li>
<li><a href="#frameevalselector-pagefunction-args-1">frame.$eval(selector, pageFunction[, ...args])</a></li>
<li><a href="#framexexpression">frame.$x(expression)</a></li>
<li><a href="#frameaddscripttagoptions">frame.addScriptTag(options)</a></li>
<li><a href="#frameaddstyletagoptions">frame.addStyleTag(options)</a></li>
<li><a href="#framechildframes">frame.childFrames()</a></li>
<li><a href="#frameclickselector-options">frame.click(selector[, options])</a></li>
<li><a href="#framecontent">frame.content()</a></li>
<li><a href="#frameevaluatepagefunction-args">frame.evaluate(pageFunction, ...args)</a></li>
<li><a href="#frameevaluatehandlepagefunction-args">frame.evaluateHandle(pageFunction, ...args)</a></li>
<li><a href="#frameexecutioncontext">frame.executionContext()</a></li>
<li><a href="#framefocusselector">frame.focus(selector)</a></li>
<li><a href="#framehoverselector">frame.hover(selector)</a></li>
<li><a href="#frameisdetached">frame.isDetached()</a></li>
<li><a href="#framename">frame.name()</a></li>
<li><a href="#frameparentframe">frame.parentFrame()</a></li>
<li><a href="#frameselectselector-values">frame.select(selector, ...values)</a></li>
<li><a href="#framesetcontenthtml">frame.setContent(html)</a></li>
<li><a href="#frametapselector">frame.tap(selector)</a></li>
<li><a href="#frametitle">frame.title()</a></li>
<li><a href="#frametypeselector-text-options">frame.type(selector, text[, options])</a></li>
<li><a href="#frameurl">frame.url()</a></li>
<li><a href="#framewaitforselectororfunctionortimeout-options-args">frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</a></li>
<li><a href="#framewaitforfunctionpagefunction-options-args">frame.waitForFunction(pageFunction[, options[, ...args]])</a></li>
<li><a href="#framewaitforselectorselector-options">frame.waitForSelector(selector[, options])</a></li>
<li><a href="#framewaitforxpathxpath-options">frame.waitForXPath(xpath[, options])</a></li>
</ul>
</li>
<li><a href="#class-executioncontext">class: ExecutionContext</a>
<ul>
<li><a href="#executioncontextevaluatepagefunction-args">executionContext.evaluate(pageFunction, ...args)</a></li>
<li><a href="#executioncontextevaluatehandlepagefunction-args">executionContext.evaluateHandle(pageFunction, ...args)</a></li>
<li><a href="#executioncontextframe">executionContext.frame()</a></li>
<li><a href="#executioncontextqueryobjectsprototypehandle">executionContext.queryObjects(prototypeHandle)</a></li>
</ul>
</li>
<li><a href="#class-jshandle">class: JSHandle</a>
<ul>
<li><a href="#jshandleaselement">jsHandle.asElement()</a></li>
<li><a href="#jshandledispose">jsHandle.dispose()</a></li>
<li><a href="#jshandleexecutioncontext">jsHandle.executionContext()</a></li>
<li><a href="#jshandlegetproperties">jsHandle.getProperties()</a></li>
<li><a href="#jshandlegetpropertypropertyname">jsHandle.getProperty(propertyName)</a></li>
<li><a href="#jshandlejsonvalue">jsHandle.jsonValue()</a></li>
</ul>
</li>
<li><a href="#class-elementhandle">class: ElementHandle</a>
<ul>
<li><a href="#elementhandleselector">elementHandle.$(selector)</a></li>
<li><a href="#elementhandleselector-1">elementHandle.$$(selector)</a></li>
<li><a href="#elementhandleevalselector-pagefunction-args">elementHandle.$$eval(selector, pageFunction, ...args)</a></li>
<li><a href="#elementhandleevalselector-pagefunction-args-1">elementHandle.$eval(selector, pageFunction, ...args)</a></li>
<li><a href="#elementhandlexexpression">elementHandle.$x(expression)</a></li>
<li><a href="#elementhandleaselement">elementHandle.asElement()</a></li>
<li><a href="#elementhandleboundingbox">elementHandle.boundingBox()</a></li>
<li><a href="#elementhandleboxmodel">elementHandle.boxModel()</a></li>
<li><a href="#elementhandleclickoptions">elementHandle.click([options])</a></li>
<li><a href="#elementhandlecontentframe">elementHandle.contentFrame()</a></li>
<li><a href="#elementhandledispose">elementHandle.dispose()</a></li>
<li><a href="#elementhandleexecutioncontext">elementHandle.executionContext()</a></li>
<li><a href="#elementhandlefocus">elementHandle.focus()</a></li>
<li><a href="#elementhandlegetproperties">elementHandle.getProperties()</a></li>
<li><a href="#elementhandlegetpropertypropertyname">elementHandle.getProperty(propertyName)</a></li>
<li><a href="#elementhandlehover">elementHandle.hover()</a></li>
<li><a href="#elementhandlejsonvalue">elementHandle.jsonValue()</a></li>
<li><a href="#elementhandlepresskey-options">elementHandle.press(key[, options])</a></li>
<li><a href="#elementhandlescreenshotoptions">elementHandle.screenshot([options])</a></li>
<li><a href="#elementhandletap">elementHandle.tap()</a></li>
<li><a href="#elementhandletostring">elementHandle.toString()</a></li>
<li><a href="#elementhandletypetext-options">elementHandle.type(text[, options])</a></li>
<li><a href="#elementhandleuploadfilefilepaths">elementHandle.uploadFile(...filePaths)</a></li>
</ul>
</li>
<li><a href="#class-request">class: Request</a>
<ul>
<li><a href="#requestaborterrorcode">request.abort([errorCode])</a></li>
<li><a href="#requestcontinueoverrides">request.continue([overrides])</a></li>
<li><a href="#requestfailure">request.failure()</a></li>
<li><a href="#requestframe">request.frame()</a></li>
<li><a href="#requestheaders">request.headers()</a></li>
<li><a href="#requestisnavigationrequest">request.isNavigationRequest()</a></li>
<li><a href="#requestmethod">request.method()</a></li>
<li><a href="#requestpostdata">request.postData()</a></li>
<li><a href="#requestredirectchain">request.redirectChain()</a></li>
<li><a href="#requestresourcetype">request.resourceType()</a></li>
<li><a href="#requestrespondresponse">request.respond(response)</a></li>
<li><a href="#requestresponse">request.response()</a></li>
<li><a href="#requesturl">request.url()</a></li>
</ul>
</li>
<li><a href="#class-response">class: Response</a>
<ul>
<li><a href="#responsebuffer">response.buffer()</a></li>
<li><a href="#responsefromcache">response.fromCache()</a></li>
<li><a href="#responsefromserviceworker">response.fromServiceWorker()</a></li>
<li><a href="#responseheaders">response.headers()</a></li>
<li><a href="#responsejson">response.json()</a></li>
<li><a href="#responseok">response.ok()</a></li>
<li><a href="#responserequest">response.request()</a></li>
<li><a href="#responsesecuritydetails">response.securityDetails()</a></li>
<li><a href="#responsestatus">response.status()</a></li>
<li><a href="#responsetext">response.text()</a></li>
<li><a href="#responseurl">response.url()</a></li>
</ul>
</li>
<li><a href="#class-securitydetails">class: SecurityDetails</a>
<ul>
<li><a href="#securitydetailsissuer">securityDetails.issuer()</a></li>
<li><a href="#securitydetailsprotocol">securityDetails.protocol()</a></li>
<li><a href="#securitydetailssubjectname">securityDetails.subjectName()</a></li>
<li><a href="#securitydetailsvalidfrom">securityDetails.validFrom()</a></li>
<li><a href="#securitydetailsvalidto">securityDetails.validTo()</a></li>
</ul>
</li>
<li><a href="#class-target">class: Target</a>
<ul>
<li><a href="#targetbrowser">target.browser()</a></li>
<li><a href="#targetbrowsercontext">target.browserContext()</a></li>
<li><a href="#targetcreatecdpsession">target.createCDPSession()</a></li>
<li><a href="#targetopener">target.opener()</a></li>
<li><a href="#targetpage">target.page()</a></li>
<li><a href="#targettype">target.type()</a></li>
<li><a href="#targeturl">target.url()</a></li>
</ul>
</li>
<li><a href="#class-cdpsession">class: CDPSession</a>
<ul>
<li><a href="#cdpsessiondetach">cdpSession.detach()</a></li>
<li><a href="#cdpsessionsendmethod-params">cdpSession.send(method[, params])</a></li>
</ul>
</li>
<li><a href="#class-coverage">class: Coverage</a>
<ul>
<li><a href="#coveragestartcsscoverageoptions">coverage.startCSSCoverage(options)</a></li>
<li><a href="#coveragestartjscoverageoptions">coverage.startJSCoverage(options)</a></li>
<li><a href="#coveragestopcsscoverage">coverage.stopCSSCoverage()</a></li>
<li><a href="#coveragestopjscoverage">coverage.stopJSCoverage()</a></li>
</ul>
</li>
</ul>

<h3><a id="user-content-overview" class="anchor" aria-hidden="true" href="#overview"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h3>
<p>Puppeteer is a Node library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.</p>
<p>The Puppeteer API is hierarchical and mirrors the browser structure.</p>
<blockquote>
<p><strong>NOTE</strong> On the following diagram, faded entities are not currently represented in Puppeteer.</p>
</blockquote>
<p><a target="_blank" href="https://user-images.githubusercontent.com/746130/40333229-5df5480c-5d0c-11e8-83cb-c3e371de7374.png"><img src="https://user-images.githubusercontent.com/746130/40333229-5df5480c-5d0c-11e8-83cb-c3e371de7374.png" alt="puppeteer overview" style="max-width:100%;"></a></p>
<ul>
<li><a href="#class-puppeteer"><code>Puppeteer</code></a> communicates with the browser using <a href="https://chromedevtools.github.io/devtools-protocol/" rel="nofollow">DevTools Protocol</a>.</li>
<li><a href="#class-browser"><code>Browser</code></a> instance can own multiple browser contexts.</li>
<li><a href="#class-browsercontext"><code>BrowserContext</code></a> instance defines a browsing session and can own multiple pages.</li>
<li><a href="#class-page"><code>Page</code></a> has at least one frame: main frame. There might be other frames created by <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" rel="nofollow">iframe</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" rel="nofollow">frame</a> tags.</li>
<li><a href="#class-frame"><code>Frame</code></a> has at least one execution context - the default execution context - where the frame's JavaScript is executed. A Frame might have additional execution contexts that are associated with <a href="https://developer.chrome.com/extensions" rel="nofollow">extensions</a>.</li>
<li><a href="#class-worker"><code>Worker</code></a> has a single execution context and and facilitates interacting with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">WebWorkers</a>.</li>
</ul>
<p>(Diagram source: <a href="https://docs.google.com/drawings/d/1Q_AM6KYs9kbyLZF-Lpp5mtpAWth73Cq8IKCsWYgi8MM/edit?usp=sharing" rel="nofollow">link</a>)</p>
<h3><a id="user-content-environment-variables" class="anchor" aria-hidden="true" href="#environment-variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Environment Variables</h3>
<p>Puppeteer looks for certain <a href="https://en.wikipedia.org/wiki/Environment_variable" rel="nofollow">environment variables</a> to aid its operations.
If puppeteer doesn't find them in environment, lowercased variant of these variables will be used from the <a href="https://docs.npmjs.com/cli/config" rel="nofollow">npm config</a>.</p>
<ul>
<li><code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code>, <code>NO_PROXY</code> - defines HTTP proxy settings that are used to download and run Chromium.</li>
<li><code>PUPPETEER_SKIP_CHROMIUM_DOWNLOAD</code> - do not download bundled Chromium during installation step.</li>
<li><code>PUPPETEER_DOWNLOAD_HOST</code> - overwrite host part of URL that is used to download Chromium</li>
<li><code>PUPPETEER_CHROMIUM_REVISION</code> - specify a certain version of chrome you'd like puppeteer to use during the installation step.</li>
</ul>
<h3><a id="user-content-class-puppeteer" class="anchor" aria-hidden="true" href="#class-puppeteer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Puppeteer</h3>
<p>Puppeteer module provides a method to launch a Chromium instance.
The following is a typical example of using Puppeteer to drive automation:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://www.google.com<span class="pl-pds">'</span></span>);
  <span class="pl-c"><span class="pl-c">//</span> other actions...</span>
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<h4><a id="user-content-puppeteerconnectoptions" class="anchor" aria-hidden="true" href="#puppeteerconnectoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>puppeteer.connect(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>browserWSEndpoint</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; a <a href="#browserwsendpoint">browser websocket endpoint</a> to connect to.</li>
<li><code>ignoreHTTPSErrors</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to ignore HTTPS errors during navigation. Defaults to <code>false</code>.</li>
<li><code>slowMo</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-browser" title="Browser">Browser</a>&gt;&gt;</li>
</ul>
<p>This methods attaches Puppeteer to an existing Chromium instance.</p>
<h4><a id="user-content-puppeteercreatebrowserfetcheroptions" class="anchor" aria-hidden="true" href="#puppeteercreatebrowserfetcheroptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>puppeteer.createBrowserFetcher([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>host</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A download host to be used. Defaults to <code>https://storage.googleapis.com</code>.</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A path for the downloads folder. Defaults to <code>&lt;root&gt;/.local-chromium</code>, where <code>&lt;root&gt;</code> is puppeteer's package root.</li>
<li><code>platform</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Possible values are: <code>mac</code>, <code>win32</code>, <code>win64</code>, <code>linux</code>. Defaults to the current platform.</li>
</ul>
</li>
<li>returns: &lt;<a href="#class-browserfetcher" title="BrowserFetcher">BrowserFetcher</a>&gt;</li>
</ul>
<h4><a id="user-content-puppeteerdefaultargs" class="anchor" aria-hidden="true" href="#puppeteerdefaultargs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>puppeteer.defaultArgs()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; The default flags that Chromium will be launched with.</li>
</ul>
<h4><a id="user-content-puppeteerexecutablepath" class="anchor" aria-hidden="true" href="#puppeteerexecutablepath"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>puppeteer.executablePath()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A path where Puppeteer expects to find bundled Chromium. Chromium might not exist there if the download was skipped with <a href="#environment-variables"><code>PUPPETEER_SKIP_CHROMIUM_DOWNLOAD</code></a>.</li>
</ul>
<h4><a id="user-content-puppeteerlaunchoptions" class="anchor" aria-hidden="true" href="#puppeteerlaunchoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>puppeteer.launch([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;  Set of configurable options to set on the browser. Can have the following fields:
<ul>
<li><code>ignoreHTTPSErrors</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to ignore HTTPS errors during navigation. Defaults to <code>false</code>.</li>
<li><code>headless</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to run browser in <a href="https://developers.google.com/web/updates/2017/04/headless-chrome" rel="nofollow">headless mode</a>. Defaults to <code>true</code> unless the <code>devtools</code> option is <code>true</code>.</li>
<li><code>executablePath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to a Chromium or Chrome executable to run instead of the bundled Chromium. If <code>executablePath</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li><code>slowMo</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.</li>
<li><code>args</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; Additional arguments to pass to the browser instance. The list of Chromium flags can be found <a href="http://peter.sh/experiments/chromium-command-line-switches/" rel="nofollow">here</a>.</li>
<li><code>ignoreDefaultArgs</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Do not use <a href="#puppeteerdefaultargs"><code>puppeteer.defaultArgs()</code></a>. Dangerous option; use with care. Defaults to <code>false</code>.</li>
<li><code>handleSIGINT</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Close the browser process on Ctrl-C. Defaults to <code>true</code>.</li>
<li><code>handleSIGTERM</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Close the browser process on SIGTERM. Defaults to <code>true</code>.</li>
<li><code>handleSIGHUP</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Close the browser process on SIGHUP. Defaults to <code>true</code>.</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum time in milliseconds to wait for the browser instance to start. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
<li><code>dumpio</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to pipe the browser process stdout and stderr into <code>process.stdout</code> and <code>process.stderr</code>. Defaults to <code>false</code>.</li>
<li><code>userDataDir</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to a <a href="https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md" rel="nofollow">User Data Directory</a>.</li>
<li><code>env</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Specify environment variables that will be visible to the browser. Defaults to <code>process.env</code>.</li>
<li><code>devtools</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to auto-open a DevTools panel for each tab. If this option is <code>true</code>, the <code>headless</code> option will be set <code>false</code>.</li>
<li><code>pipe</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Connects to the browser over a pipe instead of a WebSocket. Defaults to <code>false</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-browser" title="Browser">Browser</a>&gt;&gt; Promise which resolves to browser instance.</li>
</ul>
<p>The method launches a browser instance with given arguments. The browser will be closed when the parent node.js process is closed.</p>
<blockquote>
<p><strong>NOTE</strong> Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use <code>executablePath</code> option with extreme caution.</p>
<p>If Google Chrome (rather than Chromium) is preferred, a <a href="https://www.google.com/chrome/browser/canary.html" rel="nofollow">Chrome Canary</a> or <a href="https://www.chromium.org/getting-involved/dev-channel" rel="nofollow">Dev Channel</a> build is suggested.</p>
<p>In <a href="#puppeteerlaunchoptions">puppeteer.launch([options])</a> above, any mention of Chromium also applies to Chrome.</p>
<p>See <a href="https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/" rel="nofollow"><code>this article</code></a> for a description of the differences between Chromium and Chrome. <a href="https://chromium.googlesource.com/chromium/src/+/lkcr/docs/chromium_browser_vs_google_chrome.md" rel="nofollow"><code>This article</code></a> describes some differences for Linux users.</p>
</blockquote>
<h3><a id="user-content-class-browserfetcher" class="anchor" aria-hidden="true" href="#class-browserfetcher"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: BrowserFetcher</h3>
<p>BrowserFetcher can download and manage different versions of Chromium.</p>
<p>BrowserFetcher operates on revision strings that specify a precise version of Chromium, e.g. <code>"533271"</code>. Revision strings can be obtained from <a href="http://omahaproxy.appspot.com/" rel="nofollow">omahaproxy.appspot.com</a>.</p>
<p>Example on how to use BrowserFetcher to download a specific version of Chromium and run
Puppeteer against it:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browserFetcher</span> <span class="pl-k">=</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">createBrowserFetcher</span>();
<span class="pl-k">const</span> <span class="pl-c1">revisionInfo</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browserFetcher</span>.<span class="pl-en">download</span>(<span class="pl-s"><span class="pl-pds">'</span>533271<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>({executablePath<span class="pl-k">:</span> <span class="pl-smi">revisionInfo</span>.<span class="pl-smi">executablePath</span>})</pre></div>
<blockquote>
<p><strong>NOTE</strong> BrowserFetcher is not designed to work concurrently with other
instances of BrowserFetcher that share the same downloads directory.</p>
</blockquote>
<h4><a id="user-content-browserfetchercandownloadrevision" class="anchor" aria-hidden="true" href="#browserfetchercandownloadrevision"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.canDownload(revision)</h4>
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; a revision to check availability.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;&gt;  returns <code>true</code> if the revision could be downloaded from the host.</li>
</ul>
<p>The method initiates a HEAD request to check if the revision is available.</p>
<h4><a id="user-content-browserfetcherdownloadrevision-progresscallback" class="anchor" aria-hidden="true" href="#browserfetcherdownloadrevision-progresscallback"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.download(revision[, progressCallback])</h4>
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; a revision to download.</li>
<li><code>progressCallback</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>)&gt; A function that will be called with two arguments:
<ul>
<li><code>downloadedBytes</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; how many bytes have been downloaded</li>
<li><code>totalBytes</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; how large is the total download.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Resolves with revision information when the revision is downloaded and extracted
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; the revision the info was created from</li>
<li><code>folderPath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; path to the extracted revision folder</li>
<li><code>executablePath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; path to the revision executable</li>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL this revision can be downloaded from</li>
<li><code>local</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; whether the revision is locally available on disk</li>
</ul>
</li>
</ul>
<p>The method initiates a GET request to download the revision from the host.</p>
<h4><a id="user-content-browserfetcherlocalrevisions" class="anchor" aria-hidden="true" href="#browserfetcherlocalrevisions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.localRevisions()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt;&gt; A list of all revisions available locally on disk.</li>
</ul>
<h4><a id="user-content-browserfetcherplatform" class="anchor" aria-hidden="true" href="#browserfetcherplatform"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.platform()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Returns one of <code>mac</code>, <code>linux</code>, <code>win32</code> or <code>win64</code>.</li>
</ul>
<h4><a id="user-content-browserfetcherremoverevision" class="anchor" aria-hidden="true" href="#browserfetcherremoverevision"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.remove(revision)</h4>
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; a revision to remove. The method will throw if the revision has not been downloaded.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Resolves when the revision has been removed.</li>
</ul>
<h4><a id="user-content-browserfetcherrevisioninforevision" class="anchor" aria-hidden="true" href="#browserfetcherrevisioninforevision"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserFetcher.revisionInfo(revision)</h4>
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; a revision to get info for.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>revision</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; the revision the info was created from</li>
<li><code>folderPath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; path to the extracted revision folder</li>
<li><code>executablePath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; path to the revision executable</li>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL this revision can be downloaded from</li>
<li><code>local</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; whether the revision is locally available on disk</li>
</ul>
</li>
</ul>
<h3><a id="user-content-class-browser" class="anchor" aria-hidden="true" href="#class-browser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Browser</h3>
<ul>
<li>extends: <a href="https://nodejs.org/api/events.html#events_class_eventemitter" rel="nofollow"><code>EventEmitter</code></a></li>
</ul>
<p>A Browser is created when Puppeteer connects to a Chromium instance, either through <a href="#puppeteerlaunchoptions"><code>puppeteer.launch</code></a> or <a href="#puppeteerconnectoptions"><code>puppeteer.connect</code></a>.</p>
<p>An example of using a <a href="#class-browser" title="Browser">Browser</a> to create a <a href="#class-page" title="Page">Page</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>An example of disconnecting from and reconnecting to a <a href="#class-browser" title="Browser">Browser</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-c"><span class="pl-c">//</span> Store the endpoint to be able to reconnect to Chromium</span>
  <span class="pl-k">const</span> <span class="pl-c1">browserWSEndpoint</span> <span class="pl-k">=</span> <span class="pl-smi">browser</span>.<span class="pl-en">wsEndpoint</span>();
  <span class="pl-c"><span class="pl-c">//</span> Disconnect puppeteer from Chromium</span>
  <span class="pl-smi">browser</span>.<span class="pl-c1">disconnect</span>();

  <span class="pl-c"><span class="pl-c">//</span> Use the endpoint to reestablish a connection</span>
  <span class="pl-k">const</span> <span class="pl-c1">browser2</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">connect</span>({browserWSEndpoint});
  <span class="pl-c"><span class="pl-c">//</span> Close Chromium</span>
  <span class="pl-k">await</span> <span class="pl-smi">browser2</span>.<span class="pl-c1">close</span>();
});</pre></div>
<h4><a id="user-content-event-disconnected" class="anchor" aria-hidden="true" href="#event-disconnected"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'disconnected'</h4>
<p>Emitted when Puppeteer gets disconnected from the Chromium instance. This might happen because of one of the following:</p>
<ul>
<li>Chromium is closed or crashed</li>
<li>The <a href="#browserdisconnect"><code>browser.disconnect</code></a> method was called</li>
</ul>
<h4><a id="user-content-event-targetchanged" class="anchor" aria-hidden="true" href="#event-targetchanged"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetchanged'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when the url of a target changes.</p>
<blockquote>
<p><strong>NOTE</strong> This includes target changes in incognito browser contexts.</p>
</blockquote>
<h4><a id="user-content-event-targetcreated" class="anchor" aria-hidden="true" href="#event-targetcreated"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetcreated'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when a target is created, for example when a new page is opened by <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open" rel="nofollow"><code>window.open</code></a> or <a href="#browsernewpage"><code>browser.newPage</code></a>.</p>
<blockquote>
<p><strong>NOTE</strong> This includes target creations in incognito browser contexts.</p>
</blockquote>
<h4><a id="user-content-event-targetdestroyed" class="anchor" aria-hidden="true" href="#event-targetdestroyed"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetdestroyed'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when a target is destroyed, for example when a page is closed.</p>
<blockquote>
<p><strong>NOTE</strong> This includes target destructions in incognito browser contexts.</p>
</blockquote>
<h4><a id="user-content-browserbrowsercontexts" class="anchor" aria-hidden="true" href="#browserbrowsercontexts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.browserContexts()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-browsercontext" title="BrowserContext">BrowserContext</a>&gt;&gt;</li>
</ul>
<p>Returns an array of all open browser contexts. In a newly created browser, this will return
a single instance of <a href="#class-browsercontext" title="BrowserContext">BrowserContext</a>.</p>
<h4><a id="user-content-browserclose" class="anchor" aria-hidden="true" href="#browserclose"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.close()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Closes Chromium and all of its pages (if any were opened). The <a href="#class-browser" title="Browser">Browser</a> object itself is considered to be disposed and cannot be used anymore.</p>
<h4><a id="user-content-browsercreateincognitobrowsercontext" class="anchor" aria-hidden="true" href="#browsercreateincognitobrowsercontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.createIncognitoBrowserContext()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-browsercontext" title="BrowserContext">BrowserContext</a>&gt;&gt;</li>
</ul>
<p>Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>();
<span class="pl-c"><span class="pl-c">//</span> Create a new incognito browser context.</span>
<span class="pl-k">const</span> <span class="pl-c1">context</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">createIncognitoBrowserContext</span>();
<span class="pl-c"><span class="pl-c">//</span> Create a new page in a pristine context.</span>
<span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">newPage</span>();
<span class="pl-c"><span class="pl-c">//</span> Do stuff</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);</pre></div>
<h4><a id="user-content-browserdisconnect" class="anchor" aria-hidden="true" href="#browserdisconnect"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.disconnect()</h4>
<p>Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling <code>disconnect</code>, the <a href="#class-browser" title="Browser">Browser</a> object is considered disposed and cannot be used anymore.</p>
<h4><a id="user-content-browsernewpage" class="anchor" aria-hidden="true" href="#browsernewpage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.newPage()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-page" title="Page">Page</a>&gt;&gt;</li>
</ul>
<p>Promise which resolves to a new <a href="#class-page" title="Page">Page</a> object. The <a href="#class-page" title="Page">Page</a> is created in a default browser context.</p>
<h4><a id="user-content-browserpages" class="anchor" aria-hidden="true" href="#browserpages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.pages()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-page" title="Page">Page</a>&gt;&gt;&gt; Promise which resolves to an array of all open pages. Non visible pages, such as <code>"background_page"</code>, will not be listed here. You can find them using <a href="#targetpage">target.page()</a>.</li>
</ul>
<h4><a id="user-content-browserprocess" class="anchor" aria-hidden="true" href="#browserprocess"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.process()</h4>
<ul>
<li>returns: &lt;?<a href="https://nodejs.org/api/child_process.html" title="ChildProcess" rel="nofollow">ChildProcess</a>&gt; Spawned browser process. Returns <code>null</code> if the browser instance was created with <a href="#puppeteerconnectoptions"><code>puppeteer.connect</code></a> method.</li>
</ul>
<h4><a id="user-content-browsertargets" class="anchor" aria-hidden="true" href="#browsertargets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.targets()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-target" title="Target">Target</a>&gt;&gt;</li>
</ul>
<p>An array of all active targets inside the Browser. In case of multiple browser contexts,
the method will return an array with all the targets in all browser contexts.</p>
<h4><a id="user-content-browseruseragent" class="anchor" aria-hidden="true" href="#browseruseragent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.userAgent()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; Promise which resolves to the browser's original user agent.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> Pages can override browser user agent with <a href="#pagesetuseragentuseragent">page.setUserAgent</a></p>
</blockquote>
<h4><a id="user-content-browserversion" class="anchor" aria-hidden="true" href="#browserversion"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.version()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; For headless Chromium, this is similar to <code>HeadlessChrome/61.0.3153.0</code>. For non-headless, this is similar to <code>Chrome/61.0.3153.0</code>.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> the format of browser.version() might change with future releases of Chromium.</p>
</blockquote>
<h4><a id="user-content-browserwsendpoint" class="anchor" aria-hidden="true" href="#browserwsendpoint"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browser.wsEndpoint()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Browser websocket url.</li>
</ul>
<p>Browser websocket endpoint which can be used as an argument to
<a href="#puppeteerconnectoptions">puppeteer.connect</a>. The format is <code>ws://${host}:${port}/devtools/browser/&lt;id&gt;</code></p>
<p>You can find the <code>webSocketDebuggerUrl</code> from <code>http://${host}:${port}/json/version</code>. Learn more about the <a href="https://chromedevtools.github.io/devtools-protocol" rel="nofollow">devtools protocol</a> and the <a href="https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target" rel="nofollow">browser endpoint</a>.</p>
<h3><a id="user-content-class-browsercontext" class="anchor" aria-hidden="true" href="#class-browsercontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: BrowserContext</h3>
<ul>
<li>extends: <a href="https://nodejs.org/api/events.html#events_class_eventemitter" rel="nofollow"><code>EventEmitter</code></a></li>
</ul>
<p>BrowserContexts provide a way to operate multiple independent browser sessions. When a browser is launched, it has
a single BrowserContext used by default. The method <code>browser.newPage()</code> creates a page in the default browser context.</p>
<p>If a page opens another page, e.g. with a <code>window.open</code> call, the popup will belong to the parent page's browser
context.</p>
<p>Puppeteer allows creation of "incognito" browser contexts with <code>browser.createIncognitoBrowserContext()</code> method.
"Incognito" browser contexts don't write any browsing data to disk.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Create a new incognito browser context</span>
<span class="pl-k">const</span> <span class="pl-c1">context</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">createIncognitoBrowserContext</span>();
<span class="pl-c"><span class="pl-c">//</span> Create a new page inside context.</span>
<span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">newPage</span>();
<span class="pl-c"><span class="pl-c">//</span> ... do stuff with page ...</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> Dispose context once it's no longer needed.</span>
<span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-c1">close</span>();</pre></div>
<h4><a id="user-content-event-targetchanged-1" class="anchor" aria-hidden="true" href="#event-targetchanged-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetchanged'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when the url of a target inside the browser context changes.</p>
<h4><a id="user-content-event-targetcreated-1" class="anchor" aria-hidden="true" href="#event-targetcreated-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetcreated'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when a new target is created inside the browser context, for example when a new page is opened by <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open" rel="nofollow"><code>window.open</code></a> or <a href="#browsercontextnewpage"><code>browserContext.newPage</code></a>.</p>
<h4><a id="user-content-event-targetdestroyed-1" class="anchor" aria-hidden="true" href="#event-targetdestroyed-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'targetdestroyed'</h4>
<ul>
<li>&lt;<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Emitted when a target inside the browser context is destroyed, for example when a page is closed.</p>
<h4><a id="user-content-browsercontextbrowser" class="anchor" aria-hidden="true" href="#browsercontextbrowser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserContext.browser()</h4>
<ul>
<li>returns: &lt;<a href="#class-browser" title="Browser">Browser</a>&gt;</li>
</ul>
<p>The browser this browser context belongs to.</p>
<h4><a id="user-content-browsercontextclose" class="anchor" aria-hidden="true" href="#browsercontextclose"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserContext.close()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Closes the browser context. All the targets that belong to the browser context
will be closed.</p>
<blockquote>
<p><strong>NOTE</strong> only incognito browser contexts can be closed.</p>
</blockquote>
<h4><a id="user-content-browsercontextisincognito" class="anchor" aria-hidden="true" href="#browsercontextisincognito"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserContext.isIncognito()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>Returns whether BrowserContext is incognito.
The default browser context is the only non-incognito browser context.</p>
<blockquote>
<p><strong>NOTE</strong> the default browser context cannot be closed.</p>
</blockquote>
<h4><a id="user-content-browsercontextnewpage" class="anchor" aria-hidden="true" href="#browsercontextnewpage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserContext.newPage()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-page" title="Page">Page</a>&gt;&gt;</li>
</ul>
<p>Creates a new page in the browser context.</p>
<h4><a id="user-content-browsercontexttargets" class="anchor" aria-hidden="true" href="#browsercontexttargets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>browserContext.targets()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-target" title="Target">Target</a>&gt;&gt;</li>
</ul>
<p>An array of all active targets inside the browser context.</p>
<h3><a id="user-content-class-page" class="anchor" aria-hidden="true" href="#class-page"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Page</h3>
<ul>
<li>extends: <a href="https://nodejs.org/api/events.html#events_class_eventemitter" rel="nofollow"><code>EventEmitter</code></a></li>
</ul>
<p>Page provides methods to interact with a single tab in Chromium. One <a href="#class-browser" title="Browser">Browser</a> instance might have multiple <a href="#class-page" title="Page">Page</a> instances.</p>
<p>This example creates a page, navigates it to a URL, and then saves a screenshot:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">screenshot</span>({path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>screenshot.png<span class="pl-pds">'</span></span>});
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>The Page class emits various events (described below) which can be handled using any of Node's native <a href="https://nodejs.org/api/events.html#events_class_eventemitter" rel="nofollow"><code>EventEmitter</code></a> methods, such as <code>on</code>, <code>once</code> or <code>removeListener</code>.</p>
<p>This example logs a message for a single page <code>load</code> event:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-en">once</span>(<span class="pl-s"><span class="pl-pds">'</span>load<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Page loaded!<span class="pl-pds">'</span></span>));</pre></div>
<p>To unsubscribe from events use the <code>removeListener</code> method:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">logRequest</span>(<span class="pl-smi">interceptedRequest</span>) {
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>A request was made:<span class="pl-pds">'</span></span>, <span class="pl-smi">interceptedRequest</span>.<span class="pl-en">url</span>());
}
<span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>request<span class="pl-pds">'</span></span>, logRequest);
<span class="pl-c"><span class="pl-c">//</span> Sometime later...</span>
<span class="pl-smi">page</span>.<span class="pl-en">removeListener</span>(<span class="pl-s"><span class="pl-pds">'</span>request<span class="pl-pds">'</span></span>, logRequest);</pre></div>
<h4><a id="user-content-event-close" class="anchor" aria-hidden="true" href="#event-close"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'close'</h4>
<p>Emitted when the page closes.</p>
<h4><a id="user-content-event-console" class="anchor" aria-hidden="true" href="#event-console"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'console'</h4>
<ul>
<li>&lt;<a href="#class-consolemessage" title="ConsoleMessage">ConsoleMessage</a>&gt;</li>
</ul>
<p>Emitted when JavaScript within the page calls one of console API methods, e.g. <code>console.log</code> or <code>console.dir</code>. Also emitted if the page throws an error or a warning.</p>
<p>The arguments passed into <code>console.log</code> appear as arguments on the event handler.</p>
<p>An example of handling <code>console</code> event:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>console<span class="pl-pds">'</span></span>, <span class="pl-smi">msg</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">msg</span>.<span class="pl-en">args</span>().<span class="pl-c1">length</span>; <span class="pl-k">++</span>i)
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span>i<span class="pl-pse">}</span></span>: <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">msg</span>.<span class="pl-en">args</span>()[i]<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);
});
<span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>hello<span class="pl-pds">'</span></span>, <span class="pl-c1">5</span>, {foo<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bar<span class="pl-pds">'</span></span>}));</pre></div>
<h4><a id="user-content-event-dialog" class="anchor" aria-hidden="true" href="#event-dialog"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'dialog'</h4>
<ul>
<li>&lt;<a href="#class-dialog" title="Dialog">Dialog</a>&gt;</li>
</ul>
<p>Emitted when a JavaScript dialog appears, such as <code>alert</code>, <code>prompt</code>, <code>confirm</code> or <code>beforeunload</code>. Puppeteer can respond to the dialog via <a href="#class-dialog" title="Dialog">Dialog</a>'s <a href="#dialogacceptprompttext">accept</a> or <a href="#dialogdismiss">dismiss</a> methods.</p>
<h4><a id="user-content-event-domcontentloaded" class="anchor" aria-hidden="true" href="#event-domcontentloaded"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'domcontentloaded'</h4>
<p>Emitted when the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded" rel="nofollow"><code>DOMContentLoaded</code></a> event is dispatched.</p>
<h4><a id="user-content-event-error" class="anchor" aria-hidden="true" href="#event-error"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'error'</h4>
<ul>
<li>&lt;<a href="https://nodejs.org/api/errors.html#errors_class_error" title="Error" rel="nofollow">Error</a>&gt;</li>
</ul>
<p>Emitted when the page crashes.</p>
<blockquote>
<p><strong>NOTE</strong> <code>error</code> event has a special meaning in Node, see <a href="https://nodejs.org/api/events.html#events_error_events" rel="nofollow">error events</a> for details.</p>
</blockquote>
<h4><a id="user-content-event-frameattached" class="anchor" aria-hidden="true" href="#event-frameattached"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'frameattached'</h4>
<ul>
<li>&lt;<a href="#class-frame" title="Frame">Frame</a>&gt;</li>
</ul>
<p>Emitted when a frame is attached.</p>
<h4><a id="user-content-event-framedetached" class="anchor" aria-hidden="true" href="#event-framedetached"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'framedetached'</h4>
<ul>
<li>&lt;<a href="#class-frame" title="Frame">Frame</a>&gt;</li>
</ul>
<p>Emitted when a frame is detached.</p>
<h4><a id="user-content-event-framenavigated" class="anchor" aria-hidden="true" href="#event-framenavigated"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'framenavigated'</h4>
<ul>
<li>&lt;<a href="#class-frame" title="Frame">Frame</a>&gt;</li>
</ul>
<p>Emitted when a frame is navigated to a new url.</p>
<h4><a id="user-content-event-load" class="anchor" aria-hidden="true" href="#event-load"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'load'</h4>
<p>Emitted when the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/Events/load" rel="nofollow"><code>load</code></a> event is dispatched.</p>
<h4><a id="user-content-event-metrics" class="anchor" aria-hidden="true" href="#event-metrics"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'metrics'</h4>
<ul>
<li>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>title</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; The title passed to <code>console.timeStamp</code>.</li>
<li><code>metrics</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Object containing metrics as key/value pairs. The values
of metrics are of &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; type.</li>
</ul>
</li>
</ul>
<p>Emitted when the JavaScript code makes a call to <code>console.timeStamp</code>. For the list
of metrics see <code>page.metrics</code>.</p>
<h4><a id="user-content-event-pageerror" class="anchor" aria-hidden="true" href="#event-pageerror"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'pageerror'</h4>
<ul>
<li>&lt;<a href="https://nodejs.org/api/errors.html#errors_class_error" title="Error" rel="nofollow">Error</a>&gt; The exception message</li>
</ul>
<p>Emitted when an uncaught exception happens within the page.</p>
<h4><a id="user-content-event-request" class="anchor" aria-hidden="true" href="#event-request"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'request'</h4>
<ul>
<li>&lt;<a href="#class-request" title="Request">Request</a>&gt;</li>
</ul>
<p>Emitted when a page issues a request. The <a href="#class-request" title="Request">request</a> object is read-only.
In order to intercept and mutate requests, see <code>page.setRequestInterception</code>.</p>
<h4><a id="user-content-event-requestfailed" class="anchor" aria-hidden="true" href="#event-requestfailed"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'requestfailed'</h4>
<ul>
<li>&lt;<a href="#class-request" title="Request">Request</a>&gt;</li>
</ul>
<p>Emitted when a request fails, for example by timing out.</p>
<h4><a id="user-content-event-requestfinished" class="anchor" aria-hidden="true" href="#event-requestfinished"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'requestfinished'</h4>
<ul>
<li>&lt;<a href="#class-request" title="Request">Request</a>&gt;</li>
</ul>
<p>Emitted when a request finishes successfully.</p>
<h4><a id="user-content-event-response" class="anchor" aria-hidden="true" href="#event-response"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'response'</h4>
<ul>
<li>&lt;<a href="#class-response" title="Response">Response</a>&gt;</li>
</ul>
<p>Emitted when a <a href="#class-response" title="Response">response</a> is received.</p>
<h4><a id="user-content-event-workercreated" class="anchor" aria-hidden="true" href="#event-workercreated"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'workercreated'</h4>
<ul>
<li>&lt;<a href="#class-worker" title="Worker">Worker</a>&gt;</li>
</ul>
<p>Emitted when a dedicated <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">WebWorker</a> is spawned by the page.</p>
<h4><a id="user-content-event-workerdestroyed" class="anchor" aria-hidden="true" href="#event-workerdestroyed"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>event: 'workerdestroyed'</h4>
<ul>
<li>&lt;<a href="#class-worker" title="Worker">Worker</a>&gt;</li>
</ul>
<p>Emitted when a dedicated <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">WebWorker</a> is terminated.</p>
<h4><a id="user-content-pageselector" class="anchor" aria-hidden="true" href="#pageselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;</li>
</ul>
<p>The method runs <code>document.querySelector</code> within the page. If no element matches the selector, the return value resolve to <code>null</code>.</p>
<p>Shortcut for <a href="#frameselector">page.mainFrame().$(selector)</a>.</p>
<h4><a id="user-content-pageselector-1" class="anchor" aria-hidden="true" href="#pageselector-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.$$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method runs <code>document.querySelectorAll</code> within the page. If no elements match the selector, the return value resolve to <code>[]</code>.</p>
<p>Shortcut for <a href="#frameselector-1">page.mainFrame().$$(selector)</a>.</p>
<h4><a id="user-content-pageevalselector-pagefunction-args" class="anchor" aria-hidden="true" href="#pageevalselector-pagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.$$eval(selector, pageFunction[, ...args])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query frame for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>Array.from(document.querySelectorAll(selector))</code> within the page and passes it as the first argument to <code>pageFunction</code>.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>page.$$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">divsCounts</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>div<span class="pl-pds">'</span></span>, <span class="pl-smi">divs</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">divs</span>.<span class="pl-c1">length</span>);</pre></div>
<h4><a id="user-content-pageevalselector-pagefunction-args-1" class="anchor" aria-hidden="true" href="#pageevalselector-pagefunction-args-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.$eval(selector, pageFunction[, ...args])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>document.querySelector</code> within the page and passes it as the first argument to <code>pageFunction</code>. If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>page.$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">searchValue</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>#search<span class="pl-pds">'</span></span>, <span class="pl-smi">el</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">el</span>.<span class="pl-c1">value</span>);
<span class="pl-k">const</span> <span class="pl-c1">preloadHref</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>link[rel=preload]<span class="pl-pds">'</span></span>, <span class="pl-smi">el</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">el</span>.<span class="pl-c1">href</span>);
<span class="pl-k">const</span> <span class="pl-c1">html</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>.main-container<span class="pl-pds">'</span></span>, <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">e</span>.<span class="pl-smi">outerHTML</span>);</pre></div>
<p>Shortcut for <a href="#frameevalselector-pagefunction-args">page.mainFrame().$eval(selector, pageFunction)</a>.</p>
<h4><a id="user-content-pagexexpression" class="anchor" aria-hidden="true" href="#pagexexpression"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.$x(expression)</h4>
<ul>
<li><code>expression</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Expression to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate" rel="nofollow">evaluate</a>.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method evaluates the XPath expression.</p>
<p>Shortcut for <a href="#framexexpression">page.mainFrame().$x(expression)</a></p>
<h4><a id="user-content-pageaddscripttagoptions" class="anchor" aria-hidden="true" href="#pageaddscripttagoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.addScriptTag(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL of a script to be added.</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to the JavaScript file to be injected into frame. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li><code>content</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Raw JavaScript content to be injected into frame.</li>
<li><code>type</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Script type. Use 'module' in order to load a Javascript ES6 module. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" rel="nofollow">script</a> for more details.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; which resolves to the added tag when the script's onload fires or when the script content was injected into frame.</li>
</ul>
<p>Adds a <code>&lt;script&gt;</code> tag into the page with the desired url or content.</p>
<p>Shortcut for <a href="#frameaddscripttagoptions">page.mainFrame().addScriptTag(options)</a>.</p>
<h4><a id="user-content-pageaddstyletagoptions" class="anchor" aria-hidden="true" href="#pageaddstyletagoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.addStyleTag(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL of the <code>&lt;link&gt;</code> tag.</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to the CSS file to be injected into frame. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li><code>content</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Raw CSS content to be injected into frame.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; which resolves to the added tag when the stylesheet's onload fires or when the CSS content was injected into frame.</li>
</ul>
<p>Adds a <code>&lt;link rel="stylesheet"&gt;</code> tag into the page with the desired url or a <code>&lt;style type="text/css"&gt;</code> tag with the content.</p>
<p>Shortcut for <a href="#frameaddstyletagoptions">page.mainFrame().addStyleTag(options)</a>.</p>
<h4><a id="user-content-pageauthenticatecredentials" class="anchor" aria-hidden="true" href="#pageauthenticatecredentials"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.authenticate(credentials)</h4>
<ul>
<li><code>credentials</code> &lt;?<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>username</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>password</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Provide credentials for <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication" rel="nofollow">http authentication</a>.</p>
<p>To disable authentication, pass <code>null</code>.</p>
<h4><a id="user-content-pagebringtofront" class="anchor" aria-hidden="true" href="#pagebringtofront"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.bringToFront()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Brings page to front (activates tab).</p>
<h4><a id="user-content-pagebrowser" class="anchor" aria-hidden="true" href="#pagebrowser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.browser()</h4>
<ul>
<li>returns: &lt;<a href="#class-browser" title="Browser">Browser</a>&gt;</li>
</ul>
<p>Get the browser the page belongs to.</p>
<h4><a id="user-content-pageclickselector-options" class="anchor" aria-hidden="true" href="#pageclickselector-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.click(selector[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to click. If there are multiple elements satisfying the selector, the first will be clicked.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>mousedown</code> and <code>mouseup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully clicked. The Promise will be rejected if there is no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to click in the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>Bear in mind that if <code>click()</code> triggers a navigation event and there's a separate <code>page.waitForNavigation()</code> promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> [<span class="pl-c1">response</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
  <span class="pl-smi">page</span>.<span class="pl-en">waitForNavigation</span>(waitOptions),
  <span class="pl-smi">page</span>.<span class="pl-c1">click</span>(selector, clickOptions),
]);</pre></div>
<p>Shortcut for <a href="#frameclickselector-options">page.mainFrame().click(selector[, options])</a>.</p>
<h4><a id="user-content-pagecloseoptions" class="anchor" aria-hidden="true" href="#pagecloseoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.close(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>runBeforeUnload</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Defaults to <code>false</code>. Whether to run the
<a href="https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload" rel="nofollow">before unload</a>
page handlers.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>By default, <code>page.close()</code> <strong>does not</strong> run beforeunload handlers.</p>
<blockquote>
<p><strong>NOTE</strong> if <code>runBeforeUnload</code> is passed as true, a <code>beforeunload</code> dialog might be summoned
and should be handled manually via page's <a href="#event-dialog">'dialog'</a> event.</p>
</blockquote>
<h4><a id="user-content-pagecontent" class="anchor" aria-hidden="true" href="#pagecontent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.content()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">String</a>&gt;&gt;</li>
</ul>
<p>Gets the full HTML contents of the page, including the doctype.</p>
<h4><a id="user-content-pagecookiesurls" class="anchor" aria-hidden="true" href="#pagecookiesurls"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.cookies(...urls)</h4>
<ul>
<li><code>...urls</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;&gt;
<ul>
<li><code>name</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>value</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>domain</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>expires</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Unix time in seconds.</li>
<li><code>httpOnly</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
<li><code>secure</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
<li><code>session</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
<li><code>sameSite</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>"Strict"</code> or <code>"Lax"</code>.</li>
</ul>
</li>
</ul>
<p>If no URLs are specified, this method returns cookies for the current page URL.
If URLs are specified, only cookies for those URLs are returned.</p>
<h4><a id="user-content-pagecoverage" class="anchor" aria-hidden="true" href="#pagecoverage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.coverage</h4>
<ul>
<li>returns: &lt;<a href="#class-coverage" title="Coverage">Coverage</a>&gt;</li>
</ul>
<h4><a id="user-content-pagedeletecookiecookies" class="anchor" aria-hidden="true" href="#pagedeletecookiecookies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.deleteCookie(...cookies)</h4>
<ul>
<li><code>...cookies</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>name</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <strong>required</strong></li>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>domain</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>secure</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-pageemulateoptions" class="anchor" aria-hidden="true" href="#pageemulateoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.emulate(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>viewport</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>width</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page width in pixels.</li>
<li><code>height</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page height in pixels.</li>
<li><code>deviceScaleFactor</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Specify device scale factor (can be thought of as dpr). Defaults to <code>1</code>.</li>
<li><code>isMobile</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether the <code>meta viewport</code> tag is taken into account. Defaults to <code>false</code>.</li>
<li><code>hasTouch</code>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport supports touch events. Defaults to <code>false</code></li>
<li><code>isLandscape</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport is in landscape mode. Defaults to <code>false</code>.</li>
</ul>
</li>
<li><code>userAgent</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Emulates given device metrics and user agent. This method is a shortcut for calling two methods:</p>
<ul>
<li><a href="#pagesetuseragentuseragent">page.setUserAgent(userAgent)</a></li>
<li><a href="#pagesetviewportviewport">page.setViewport(viewport)</a></li>
</ul>
<p>To aid emulation, puppeteer provides a list of device descriptors which can be obtained via the <code>require('puppeteer/DeviceDescriptors')</code> command.
Below is an example of emulating an iPhone 6 in puppeteer:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">devices</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer/DeviceDescriptors<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">iPhone</span> <span class="pl-k">=</span> devices[<span class="pl-s"><span class="pl-pds">'</span>iPhone 6<span class="pl-pds">'</span></span>];

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">emulate</span>(iPhone);
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://www.google.com<span class="pl-pds">'</span></span>);
  <span class="pl-c"><span class="pl-c">//</span> other actions...</span>
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>List of all available devices is available in the source code: <a href="https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js">DeviceDescriptors.js</a>.</p>
<h4><a id="user-content-pageemulatemediamediatype" class="anchor" aria-hidden="true" href="#pageemulatemediamediatype"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.emulateMedia(mediaType)</h4>
<ul>
<li><code>mediaType</code> &lt;?<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Changes the CSS media type of the page. The only allowed values are <code>'screen'</code>, <code>'print'</code> and <code>null</code>. Passing <code>null</code> disables media emulation.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-pageevaluatepagefunction-args" class="anchor" aria-hidden="true" href="#pageevaluatepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.evaluate(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the page context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>If the function passed to the <code>page.evaluate</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>page.evaluate</code> would wait for the promise to resolve and return its value.</p>
<p>If the function passed to the <code>page.evaluate</code> returns a non-<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a> value, then <code>page.evaluate</code> resolves to <code>undefined</code>.</p>
<p>Passing arguments to <code>pageFunction</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">result</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>(<span class="pl-c1">8</span> <span class="pl-k">*</span> x);
}, <span class="pl-c1">7</span>);
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(result); <span class="pl-c"><span class="pl-c">//</span> prints "56"</span></pre></div>
<p>A string can also be passed in instead of a function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-s"><span class="pl-pds">'</span>1 + 2<span class="pl-pds">'</span></span>)); <span class="pl-c"><span class="pl-c">//</span> prints "3"</span>
<span class="pl-k">const</span> <span class="pl-c1">x</span> <span class="pl-k">=</span> <span class="pl-c1">10</span>;
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-s"><span class="pl-pds">`</span>1 + <span class="pl-s1"><span class="pl-pse">${</span>x<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>)); <span class="pl-c"><span class="pl-c">//</span> prints "11"</span></pre></div>
<p><a href="#class-elementhandle" title="ElementHandle">ElementHandle</a> instances can be passed as arguments to the <code>page.evaluate</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">bodyHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">html</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-smi">body</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">body</span>.<span class="pl-smi">innerHTML</span>, bodyHandle);
<span class="pl-k">await</span> <span class="pl-smi">bodyHandle</span>.<span class="pl-en">dispose</span>();</pre></div>
<p>Shortcut for <a href="#frameevaluatepagefunction-args">page.mainFrame().evaluate(pageFunction, ...args)</a>.</p>
<h4><a id="user-content-pageevaluatehandlepagefunction-args" class="anchor" aria-hidden="true" href="#pageevaluatehandlepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.evaluateHandle(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the page context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code> as in-page object (JSHandle)</li>
</ul>
<p>The only difference between <code>page.evaluate</code> and <code>page.evaluateHandle</code> is that <code>page.evaluateHandle</code> returns in-page object (JSHandle).</p>
<p>If the function passed to the <code>page.evaluateHandle</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>page.evaluateHandle</code> would wait for the promise to resolve and return its value.</p>
<p>A string can also be passed in instead of a function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-s"><span class="pl-pds">'</span>document<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Handle for the 'document'</span></pre></div>
<p><a href="#class-jshandle" title="JSHandle">JSHandle</a> instances can be passed as arguments to the <code>page.evaluateHandle</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">document</span>.<span class="pl-c1">body</span>);
<span class="pl-k">const</span> <span class="pl-c1">resultHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-smi">body</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">body</span>.<span class="pl-smi">innerHTML</span>, aHandle);
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">jsonValue</span>());
<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">dispose</span>();</pre></div>
<p>Shortcut for <a href="#executioncontextevaluatehandlepagefunction-args">page.mainFrame().executionContext().evaluateHandle(pageFunction, ...args)</a>.</p>
<h4><a id="user-content-pageevaluateonnewdocumentpagefunction-args" class="anchor" aria-hidden="true" href="#pageevaluateonnewdocumentpagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.evaluateOnNewDocument(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Adds a function which would be invoked in one of the following scenarios:</p>
<ul>
<li>whenever the page is navigated</li>
<li>whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame</li>
</ul>
<p>The function is invoked after the document was created but before any of its scripts were run. This is useful to amend  the JavaScript environment, e.g. to seed <code>Math.random</code>.</p>
<p>An example of overriding the navigator.languages property before the page loads:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> preload.js</span>

<span class="pl-c"><span class="pl-c">//</span> overwrite the `languages` property to use a custom getter</span>
<span class="pl-c1">Object</span>.<span class="pl-en">defineProperty</span>(<span class="pl-c1">navigator</span>, <span class="pl-s"><span class="pl-pds">"</span>languages<span class="pl-pds">"</span></span>, {
  <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {
    <span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">"</span>en-US<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>en<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>bn<span class="pl-pds">"</span></span>];
  }
});

<span class="pl-c"><span class="pl-c">//</span> In your puppeteer script, assuming the preload.js file is in same folder of our script</span>
<span class="pl-k">const</span> <span class="pl-c1">preloadFile</span> <span class="pl-k">=</span> <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(<span class="pl-s"><span class="pl-pds">'</span>./preload.js<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>utf8<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateOnNewDocument</span>(preloadFile);</pre></div>
<h4><a id="user-content-pageexposefunctionname-puppeteerfunction" class="anchor" aria-hidden="true" href="#pageexposefunctionname-puppeteerfunction"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.exposeFunction(name, puppeteerFunction)</h4>
<ul>
<li><code>name</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of the function on the window object</li>
<li><code>puppeteerFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Callback function which will be called in Puppeteer's context.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>The method adds a function called <code>name</code> on the page's <code>window</code> object.
When called, the function executes <code>puppeteerFunction</code> in node.js and returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a> which resolves to the return value of <code>puppeteerFunction</code>.</p>
<p>If the <code>puppeteerFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, it will be awaited.</p>
<blockquote>
<p><strong>NOTE</strong> Functions installed via <code>page.exposeFunction</code> survive navigations.</p>
</blockquote>
<p>An example of adding an <code>md5</code> function into the page:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">crypto</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>crypto<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>console<span class="pl-pds">'</span></span>, <span class="pl-smi">msg</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">msg</span>.<span class="pl-c1">text</span>()));
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">exposeFunction</span>(<span class="pl-s"><span class="pl-pds">'</span>md5<span class="pl-pds">'</span></span>, <span class="pl-smi">text</span> <span class="pl-k">=&gt;</span>
    <span class="pl-smi">crypto</span>.<span class="pl-en">createHash</span>(<span class="pl-s"><span class="pl-pds">'</span>md5<span class="pl-pds">'</span></span>).<span class="pl-en">update</span>(text).<span class="pl-en">digest</span>(<span class="pl-s"><span class="pl-pds">'</span>hex<span class="pl-pds">'</span></span>)
  );
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> use window.md5 to compute hashes</span>
    <span class="pl-k">const</span> <span class="pl-c1">myString</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>PUPPETEER<span class="pl-pds">'</span></span>;
    <span class="pl-k">const</span> <span class="pl-c1">myHash</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">window</span>.<span class="pl-en">md5</span>(myString);
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">`</span>md5 of <span class="pl-s1"><span class="pl-pse">${</span>myString<span class="pl-pse">}</span></span> is <span class="pl-s1"><span class="pl-pse">${</span>myHash<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>);
  });
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>An example of adding a <code>window.readfile</code> function into the page:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">fs</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>fs<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>console<span class="pl-pds">'</span></span>, <span class="pl-smi">msg</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">msg</span>.<span class="pl-c1">text</span>()));
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">exposeFunction</span>(<span class="pl-s"><span class="pl-pds">'</span>readfile<span class="pl-pds">'</span></span>, <span class="pl-k">async</span> <span class="pl-smi">filePath</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Promise</span>((<span class="pl-smi">resolve</span>, <span class="pl-smi">reject</span>) <span class="pl-k">=&gt;</span> {
      <span class="pl-smi">fs</span>.<span class="pl-en">readFile</span>(filePath, <span class="pl-s"><span class="pl-pds">'</span>utf8<span class="pl-pds">'</span></span>, (<span class="pl-smi">err</span>, <span class="pl-smi">text</span>) <span class="pl-k">=&gt;</span> {
        <span class="pl-k">if</span> (err)
          <span class="pl-en">reject</span>(err);
        <span class="pl-k">else</span>
          <span class="pl-en">resolve</span>(text);
      });
    });
  });
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-k">async</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-c"><span class="pl-c">//</span> use window.readfile to read contents of a file</span>
    <span class="pl-k">const</span> <span class="pl-c1">content</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">window</span>.<span class="pl-en">readfile</span>(<span class="pl-s"><span class="pl-pds">'</span>/etc/hosts<span class="pl-pds">'</span></span>);
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(content);
  });
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});
</pre></div>
<h4><a id="user-content-pagefocusselector" class="anchor" aria-hidden="true" href="#pagefocusselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.focus(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to focus. If there are multiple elements satisfying the selector, the first will be focused.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully focused. The promise will be rejected if there is no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code> and focuses it.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>Shortcut for <a href="#framefocusselector">page.mainFrame().focus(selector)</a>.</p>
<h4><a id="user-content-pageframes" class="anchor" aria-hidden="true" href="#pageframes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.frames()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-frame" title="Frame">Frame</a>&gt;&gt; An array of all frames attached to the page.</li>
</ul>
<h4><a id="user-content-pagegobackoptions" class="anchor" aria-hidden="true" href="#pagegobackoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.goBack(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Navigation parameters which might have the following properties:
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds, defaults to 30 seconds, pass <code>0</code> to disable timeout. The default value can be changed by using the <a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a> method.</li>
<li><code>waitUntil</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; When to consider navigation succeeded, defaults to <code>load</code>. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
<ul>
<li><code>load</code> - consider navigation to be finished when the <code>load</code> event is fired.</li>
<li><code>domcontentloaded</code> - consider navigation to be finished when the <code>DOMContentLoaded</code> event is fired.</li>
<li><code>networkidle0</code> - consider navigation to be finished when there are no more than 0 network connections for at least <code>500</code> ms.</li>
<li><code>networkidle2</code> - consider navigation to be finished when there are no more than 2 network connections for at least <code>500</code> ms.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-response" title="Response">Response</a>&gt;&gt; Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If
can not go back, resolves to <code>null</code>.</li>
</ul>
<p>Navigate to the previous page in history.</p>
<h4><a id="user-content-pagegoforwardoptions" class="anchor" aria-hidden="true" href="#pagegoforwardoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.goForward(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Navigation parameters which might have the following properties:
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds, defaults to 30 seconds, pass <code>0</code> to disable timeout. The default value can be changed by using the <a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a> method.</li>
<li><code>waitUntil</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; When to consider navigation succeeded, defaults to <code>load</code>. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
<ul>
<li><code>load</code> - consider navigation to be finished when the <code>load</code> event is fired.</li>
<li><code>domcontentloaded</code> - consider navigation to be finished when the <code>DOMContentLoaded</code> event is fired.</li>
<li><code>networkidle0</code> - consider navigation to be finished when there are no more than 0 network connections for at least <code>500</code> ms.</li>
<li><code>networkidle2</code> - consider navigation to be finished when there are no more than 2 network connections for at least <code>500</code> ms.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-response" title="Response">Response</a>&gt;&gt; Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If
can not go forward, resolves to <code>null</code>.</li>
</ul>
<p>Navigate to the next page in history.</p>
<h4><a id="user-content-pagegotourl-options" class="anchor" aria-hidden="true" href="#pagegotourl-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.goto(url, options)</h4>
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL to navigate page to. The url should include scheme, e.g. <code>https://</code>.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Navigation parameters which might have the following properties:
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds, defaults to 30 seconds, pass <code>0</code> to disable timeout. The default value can be changed by using the <a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a> method.</li>
<li><code>waitUntil</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; When to consider navigation succeeded, defaults to <code>load</code>. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
<ul>
<li><code>load</code> - consider navigation to be finished when the <code>load</code> event is fired.</li>
<li><code>domcontentloaded</code> - consider navigation to be finished when the <code>DOMContentLoaded</code> event is fired.</li>
<li><code>networkidle0</code> - consider navigation to be finished when there are no more than 0 network connections for at least <code>500</code> ms.</li>
<li><code>networkidle2</code> - consider navigation to be finished when there are no more than 2 network connections for at least <code>500</code> ms.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-response" title="Response">Response</a>&gt;&gt; Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.</li>
</ul>
<p>The <code>page.goto</code> will throw an error if:</p>
<ul>
<li>there's an SSL error (e.g. in case of self-signed certificates).</li>
<li>target URL is invalid.</li>
<li>the <code>timeout</code> is exceeded during navigation.</li>
<li>the main resource failed to load.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> <code>page.goto</code> either throw or return a main resource response. The only exceptions are navigation to <code>about:blank</code> or navigation to the same URL with a different hash, which would succeed and return <code>null</code>.</p>
</blockquote>
<blockquote>
<p><strong>NOTE</strong> Headless mode doesn't support navigating to a PDF document. See the <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=761295" rel="nofollow">upstream issue</a>.</p>
</blockquote>
<h4><a id="user-content-pagehoverselector" class="anchor" aria-hidden="true" href="#pagehoverselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.hover(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully hovered. Promise gets rejected if there's no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to hover over the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>Shortcut for <a href="#framehoverselector">page.mainFrame().hover(selector)</a>.</p>
<h4><a id="user-content-pageisclosed" class="anchor" aria-hidden="true" href="#pageisclosed"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.isClosed()</h4>
<ul>
<li>returns: boolean</li>
</ul>
<p>Indicates that the page has been closed.</p>
<h4><a id="user-content-pagekeyboard" class="anchor" aria-hidden="true" href="#pagekeyboard"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.keyboard</h4>
<ul>
<li>returns: &lt;<a href="#class-keyboard" title="Keyboard">Keyboard</a>&gt;</li>
</ul>
<h4><a id="user-content-pagemainframe" class="anchor" aria-hidden="true" href="#pagemainframe"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.mainFrame()</h4>
<ul>
<li>returns: &lt;<a href="#class-frame" title="Frame">Frame</a>&gt; returns page's main frame.</li>
</ul>
<p>Page is guaranteed to have a main frame which persists during navigations.</p>
<h4><a id="user-content-pagemetrics" class="anchor" aria-hidden="true" href="#pagemetrics"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.metrics()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Object containing metrics as key/value pairs.
<ul>
<li><code>Timestamp</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; The timestamp when the metrics sample was taken.</li>
<li><code>Documents</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Number of documents in the page.</li>
<li><code>Frames</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Number of frames in the page.</li>
<li><code>JSEventListeners</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Number of events in the page.</li>
<li><code>Nodes</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Number of DOM nodes in the page.</li>
<li><code>LayoutCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Total number of full or partial page layout.</li>
<li><code>RecalcStyleCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Total number of page style recalculations.</li>
<li><code>LayoutDuration</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Combined durations of all page layouts.</li>
<li><code>RecalcStyleDuration</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Combined duration of all page style recalculations.</li>
<li><code>ScriptDuration</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Combined duration of JavaScript execution.</li>
<li><code>TaskDuration</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Combined duration of all tasks performed by the browser.</li>
<li><code>JSHeapUsedSize</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Used JavaScript heap size.</li>
<li><code>JSHeapTotalSize</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Total JavaScript heap size.</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> All timestamps are in monotonic time: monotonically increasing time in seconds since an arbitrary point in the past.</p>
</blockquote>
<h4><a id="user-content-pagemouse" class="anchor" aria-hidden="true" href="#pagemouse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.mouse</h4>
<ul>
<li>returns: &lt;<a href="#class-mouse" title="Mouse">Mouse</a>&gt;</li>
</ul>
<h4><a id="user-content-pagepdfoptions" class="anchor" aria-hidden="true" href="#pagepdfoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.pdf(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Options object which might have the following properties:
<ul>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; The file path to save the PDF to. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>. If no path is provided, the PDF won't be saved to the disk.</li>
<li><code>scale</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Scale of the webpage rendering. Defaults to <code>1</code>.</li>
<li><code>displayHeaderFooter</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Display header and footer. Defaults to <code>false</code>.</li>
<li><code>headerTemplate</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them:
<ul>
<li><code>date</code> formatted print date</li>
<li><code>title</code> document title</li>
<li><code>url</code> document location</li>
<li><code>pageNumber</code> current page number</li>
<li><code>totalPages</code> total pages in the document</li>
</ul>
</li>
<li><code>footerTemplate</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; HTML template for the print footer. Should use the same format as the <code>headerTemplate</code>.</li>
<li><code>printBackground</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Print background graphics. Defaults to <code>false</code>.</li>
<li><code>landscape</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Paper orientation. Defaults to <code>false</code>.</li>
<li><code>pageRanges</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages.</li>
<li><code>format</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Paper format. If set, takes priority over <code>width</code> or <code>height</code> options. Defaults to 'Letter'.</li>
<li><code>width</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Paper width, accepts values labeled with units.</li>
<li><code>height</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Paper height, accepts values labeled with units.</li>
<li><code>margin</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Paper margins, defaults to none.
<ul>
<li><code>top</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Top margin, accepts values labeled with units.</li>
<li><code>right</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Right margin, accepts values labeled with units.</li>
<li><code>bottom</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Bottom margin, accepts values labeled with units.</li>
<li><code>left</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Left margin, accepts values labeled with units.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://nodejs.org/api/buffer.html#buffer_class_buffer" title="Buffer" rel="nofollow">Buffer</a>&gt;&gt; Promise which resolves with PDF buffer.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> Generating a pdf is currently only supported in Chrome headless.</p>
</blockquote>
<p><code>page.pdf()</code> generates a pdf of the page with <code>print</code> css media. To generate a pdf with <code>screen</code> media, call <a href="#pageemulatemediamediatype">page.emulateMedia('screen')</a> before calling <code>page.pdf()</code>:</p>
<blockquote>
<p><strong>NOTE</strong> By default, <code>page.pdf()</code> generates a pdf with modified colors for printing. Use the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust" rel="nofollow"><code>-webkit-print-color-adjust</code></a> property to force rendering of exact colors.</p>
</blockquote>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Generates a PDF with 'screen' media type.</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">emulateMedia</span>(<span class="pl-s"><span class="pl-pds">'</span>screen<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">pdf</span>({path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>page.pdf<span class="pl-pds">'</span></span>});</pre></div>
<p>The <code>width</code>, <code>height</code>, and <code>margin</code> options accept values labeled with units. Unlabeled values are treated as pixels.</p>
<p>A few examples:</p>
<ul>
<li><code>page.pdf({width: 100})</code> - prints with width set to 100 pixels</li>
<li><code>page.pdf({width: '100px'})</code> - prints with width set to 100 pixels</li>
<li><code>page.pdf({width: '10cm'})</code> - prints with width set to 10 centimeters.</li>
</ul>
<p>All possible units are:</p>
<ul>
<li><code>px</code> - pixel</li>
<li><code>in</code> - inch</li>
<li><code>cm</code> - centimeter</li>
<li><code>mm</code> - millimeter</li>
</ul>
<p>The <code>format</code> options are:</p>
<ul>
<li><code>Letter</code>: 8.5in x 11in</li>
<li><code>Legal</code>: 8.5in x 14in</li>
<li><code>Tabloid</code>: 11in x 17in</li>
<li><code>Ledger</code>: 17in x 11in</li>
<li><code>A0</code>: 33.1in x 46.8in</li>
<li><code>A1</code>: 23.4in x 33.1in</li>
<li><code>A2</code>: 16.5in x 23.4in</li>
<li><code>A3</code>: 11.7in x 16.5in</li>
<li><code>A4</code>: 8.27in x 11.7in</li>
<li><code>A5</code>: 5.83in x 8.27in</li>
<li><code>A6</code>: 4.13in x 5.83in</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> <code>headerTemplate</code> and <code>footerTemplate</code> markup have the following limitations:</p>
<ol>
<li>Script tags inside templates are not evaluated.</li>
<li>Page styles are not visible inside templates.</li>
</ol>
</blockquote>
<h4><a id="user-content-pagequeryobjectsprototypehandle" class="anchor" aria-hidden="true" href="#pagequeryobjectsprototypehandle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.queryObjects(prototypeHandle)</h4>
<ul>
<li><code>prototypeHandle</code> &lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; A handle to the object prototype.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to a handle to an array of objects with this prototype.</li>
</ul>
<p>The method iterates the JavaScript heap and finds all the objects with the given prototype.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Create a Map object</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">window</span>.<span class="pl-smi">map</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Map</span>());
<span class="pl-c"><span class="pl-c">//</span> Get a handle to the Map object prototype</span>
<span class="pl-k">const</span> <span class="pl-c1">mapPrototype</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">Map</span>.<span class="pl-c1">prototype</span>);
<span class="pl-c"><span class="pl-c">//</span> Query all map instances into an array</span>
<span class="pl-k">const</span> <span class="pl-c1">mapInstances</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">queryObjects</span>(mapPrototype);
<span class="pl-c"><span class="pl-c">//</span> Count amount of map objects in heap</span>
<span class="pl-k">const</span> <span class="pl-c1">count</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-smi">maps</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">maps</span>.<span class="pl-c1">length</span>, mapInstances);
<span class="pl-k">await</span> <span class="pl-smi">mapInstances</span>.<span class="pl-en">dispose</span>();
<span class="pl-k">await</span> <span class="pl-smi">mapPrototype</span>.<span class="pl-en">dispose</span>();</pre></div>
<p>Shortcut for <a href="#executioncontextqueryobjectsprototypehandle">page.mainFrame().executionContext().queryObjects(prototypeHandle)</a>.</p>
<h4><a id="user-content-pagereloadoptions" class="anchor" aria-hidden="true" href="#pagereloadoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.reload(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Navigation parameters which might have the following properties:
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds, defaults to 30 seconds, pass <code>0</code> to disable timeout. The default value can be changed by using the <a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a> method.</li>
<li><code>waitUntil</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; When to consider navigation succeeded, defaults to <code>load</code>. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
<ul>
<li><code>load</code> - consider navigation to be finished when the <code>load</code> event is fired.</li>
<li><code>domcontentloaded</code> - consider navigation to be finished when the <code>DOMContentLoaded</code> event is fired.</li>
<li><code>networkidle0</code> - consider navigation to be finished when there are no more than 0 network connections for at least <code>500</code> ms.</li>
<li><code>networkidle2</code> - consider navigation to be finished when there are no more than 2 network connections for at least <code>500</code> ms.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-response" title="Response">Response</a>&gt;&gt; Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.</li>
</ul>
<h4><a id="user-content-pagescreenshotoptions" class="anchor" aria-hidden="true" href="#pagescreenshotoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.screenshot([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Options object which might have the following properties:
<ul>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; The file path to save the image to. The screenshot type will be inferred from file extension. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>. If no path is provided, the image won't be saved to the disk.</li>
<li><code>type</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Specify screenshot type, can be either <code>jpeg</code> or <code>png</code>. Defaults to 'png'.</li>
<li><code>quality</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; The quality of the image, between 0-100. Not applicable to <code>png</code> images.</li>
<li><code>fullPage</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; When true, takes a screenshot of the full scrollable page. Defaults to <code>false</code>.</li>
<li><code>clip</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; An object which specifies clipping region of the page. Should have the following fields:
<ul>
<li><code>x</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; x-coordinate of top-left corner of clip area</li>
<li><code>y</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; y-coordinate of top-left corner of clip area</li>
<li><code>width</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; width of clipping area</li>
<li><code>height</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; height of clipping area</li>
</ul>
</li>
<li><code>omitBackground</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Hides default white background and allows capturing screenshots with transparency. Defaults to <code>false</code>.</li>
<li><code>encoding</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; The encoding of the image, can be either <code>base64</code> or <code>binary</code>. Defaults to <code>binary</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;[Buffer|String]&gt;&gt; Promise which resolves to buffer or a base64 string (depending on the value of <code>encoding</code>) with captured screenshot.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> Screenshots take at least 1/6 second on OS X. See <a href="https://crbug.com/741689" rel="nofollow">https://crbug.com/741689</a> for discussion.</p>
</blockquote>
<h4><a id="user-content-pageselectselector-values" class="anchor" aria-hidden="true" href="#pageselectselector-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.select(selector, ...values)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li><code>...values</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Values of options to select. If the <code>&lt;select&gt;</code> has the <code>multiple</code> attribute, all values are considered, otherwise only the first one is taken into account.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt;&gt; Returns an array of option values that have been successfully selected.</li>
</ul>
<p>Triggers a <code>change</code> and <code>input</code> event once all the provided options have been selected.
If there's no <code>&lt;select&gt;</code> element matching <code>selector</code>, the method throws an error.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">'</span>select#colors<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> single selection</span>
<span class="pl-smi">page</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">'</span>select#colors<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>red<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>green<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> multiple selections</span></pre></div>
<p>Shortcut for <a href="#frameselectselector-values">page.mainFrame().select()</a></p>
<h4><a id="user-content-pagesetbypasscspenabled" class="anchor" aria-hidden="true" href="#pagesetbypasscspenabled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setBypassCSP(enabled)</h4>
<ul>
<li><code>enabled</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; sets bypassing of page's Content-Security-Policy.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Toggles bypassing page's Content-Security-Policy.</p>
<blockquote>
<p><strong>NOTE</strong> CSP bypassing happens at the moment of CSP initialization rather then evaluation. Usually this means
that <code>page.setBypassCSP</code> should be called before navigating to the domain.</p>
</blockquote>
<h4><a id="user-content-pagesetcacheenabledenabled" class="anchor" aria-hidden="true" href="#pagesetcacheenabledenabled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setCacheEnabled(enabled)</h4>
<ul>
<li><code>enabled</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; sets the <code>enabled</code> state of the cache.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Toggles ignoring cache for each request based on the enabled state. By default, caching is enabled.</p>
<h4><a id="user-content-pagesetcontenthtml" class="anchor" aria-hidden="true" href="#pagesetcontenthtml"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setContent(html)</h4>
<ul>
<li><code>html</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; HTML markup to assign to the page.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-pagesetcookiecookies" class="anchor" aria-hidden="true" href="#pagesetcookiecookies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setCookie(...cookies)</h4>
<ul>
<li><code>...cookies</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>name</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <strong>required</strong></li>
<li><code>value</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <strong>required</strong></li>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>domain</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
<li><code>expires</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Unix time in seconds.</li>
<li><code>httpOnly</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
<li><code>secure</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
<li><code>sameSite</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>"Strict"</code> or <code>"Lax"</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-pagesetdefaultnavigationtimeouttimeout" class="anchor" aria-hidden="true" href="#pagesetdefaultnavigationtimeouttimeout"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setDefaultNavigationTimeout(timeout)</h4>
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds</li>
</ul>
<p>This setting will change the default maximum navigation time of 30 seconds for the following methods:</p>
<ul>
<li><a href="#pagegotourl-options">page.goto(url, options)</a></li>
<li><a href="#pagegobackoptions">page.goBack(options)</a></li>
<li><a href="#pagegoforwardoptions">page.goForward(options)</a></li>
<li><a href="#pagereloadoptions">page.reload(options)</a></li>
<li><a href="#pagewaitfornavigationoptions">page.waitForNavigation(options)</a></li>
</ul>
<h4><a id="user-content-pagesetextrahttpheadersheaders" class="anchor" aria-hidden="true" href="#pagesetextrahttpheadersheaders"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setExtraHTTPHeaders(headers)</h4>
<ul>
<li><code>headers</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; An object containing additional http headers to be sent with every request. All header values must be strings.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>The extra HTTP headers will be sent with every request the page initiates.</p>
<blockquote>
<p><strong>NOTE</strong> page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests.</p>
</blockquote>
<h4><a id="user-content-pagesetjavascriptenabledenabled" class="anchor" aria-hidden="true" href="#pagesetjavascriptenabledenabled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setJavaScriptEnabled(enabled)</h4>
<ul>
<li><code>enabled</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether or not to enable JavaScript on the page.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> changing this value won't affect scripts that have already been run. It will take full effect on the next <a href="#pagegotourl-options">navigation</a>.</p>
</blockquote>
<h4><a id="user-content-pagesetofflinemodeenabled" class="anchor" aria-hidden="true" href="#pagesetofflinemodeenabled"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setOfflineMode(enabled)</h4>
<ul>
<li><code>enabled</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; When <code>true</code>, enables offline mode for the page.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-pagesetrequestinterceptionvalue" class="anchor" aria-hidden="true" href="#pagesetrequestinterceptionvalue"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setRequestInterception(value)</h4>
<ul>
<li><code>value</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to enable request interception.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Activating request interception enables <code>request.abort</code>, <code>request.continue</code> and
<code>request.respond</code> methods.  This provides the capability to modify network requests that are made by a page.</p>
<p>An example of a naïve request interceptor that aborts all image requests:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">setRequestInterception</span>(<span class="pl-c1">true</span>);
  <span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>request<span class="pl-pds">'</span></span>, <span class="pl-smi">interceptedRequest</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-k">if</span> (<span class="pl-smi">interceptedRequest</span>.<span class="pl-en">url</span>().<span class="pl-en">endsWith</span>(<span class="pl-s"><span class="pl-pds">'</span>.png<span class="pl-pds">'</span></span>) <span class="pl-k">||</span> <span class="pl-smi">interceptedRequest</span>.<span class="pl-en">url</span>().<span class="pl-en">endsWith</span>(<span class="pl-s"><span class="pl-pds">'</span>.jpg<span class="pl-pds">'</span></span>))
      <span class="pl-smi">interceptedRequest</span>.<span class="pl-c1">abort</span>();
    <span class="pl-k">else</span>
      <span class="pl-smi">interceptedRequest</span>.<span class="pl-en">continue</span>();
  });
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<blockquote>
<p><strong>NOTE</strong> Enabling request interception disables page caching.</p>
</blockquote>
<h4><a id="user-content-pagesetuseragentuseragent" class="anchor" aria-hidden="true" href="#pagesetuseragentuseragent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setUserAgent(userAgent)</h4>
<ul>
<li><code>userAgent</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Specific user agent to use in this page</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the user agent is set.</li>
</ul>
<h4><a id="user-content-pagesetviewportviewport" class="anchor" aria-hidden="true" href="#pagesetviewportviewport"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.setViewport(viewport)</h4>
<ul>
<li><code>viewport</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>width</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page width in pixels.</li>
<li><code>height</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page height in pixels.</li>
<li><code>deviceScaleFactor</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Specify device scale factor (can be thought of as dpr). Defaults to <code>1</code>.</li>
<li><code>isMobile</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether the <code>meta viewport</code> tag is taken into account. Defaults to <code>false</code>.</li>
<li><code>hasTouch</code>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport supports touch events. Defaults to <code>false</code></li>
<li><code>isLandscape</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport is in landscape mode. Defaults to <code>false</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> in certain cases, setting viewport will reload the page in order to set the <code>isMobile</code> or <code>hasTouch</code> properties.</p>
</blockquote>
<p>In the case of multiple pages in a single browser, each page can have its own viewport size.</p>
<h4><a id="user-content-pagetapselector" class="anchor" aria-hidden="true" href="#pagetapselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.tap(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to tap. If there are multiple elements satisfying the selector, the first will be tapped.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagetouchscreen">page.touchscreen</a> to tap in the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>Shortcut for <a href="#frametapselector">page.mainFrame().tap(selector)</a>.</p>
<h4><a id="user-content-pagetarget" class="anchor" aria-hidden="true" href="#pagetarget"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.target()</h4>
<ul>
<li>returns: &lt;<a href="#class-target" title="Target">Target</a>&gt; a target this page was created from.</li>
</ul>
<h4><a id="user-content-pagetitle" class="anchor" aria-hidden="true" href="#pagetitle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.title()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; Returns page's title.</li>
</ul>
<p>Shortcut for <a href="#frametitle">page.mainFrame().title()</a>.</p>
<h4><a id="user-content-pagetouchscreen" class="anchor" aria-hidden="true" href="#pagetouchscreen"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.touchscreen</h4>
<ul>
<li>returns: &lt;<a href="#class-touchscreen" title="Touchscreen">Touchscreen</a>&gt;</li>
</ul>
<h4><a id="user-content-pagetracing" class="anchor" aria-hidden="true" href="#pagetracing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.tracing</h4>
<ul>
<li>returns: &lt;<a href="#class-tracing" title="Tracing">Tracing</a>&gt;</li>
</ul>
<h4><a id="user-content-pagetypeselector-text-options" class="anchor" aria-hidden="true" href="#pagetypeselector-text-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.type(selector, text[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to type into. If there are multiple elements satisfying the selector, the first will be used.</li>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A text to type into a focused element.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between key presses in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Sends a <code>keydown</code>, <code>keypress</code>/<code>input</code>, and <code>keyup</code> event for each character in the text.</p>
<p>To press a special key, like <code>Control</code> or <code>ArrowDown</code>, use <a href="#keyboardpresskey-options"><code>keyboard.press</code></a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>#mytextarea<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Hello<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Types instantly</span>
<span class="pl-smi">page</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>#mytextarea<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>World<span class="pl-pds">'</span></span>, {delay<span class="pl-k">:</span> <span class="pl-c1">100</span>}); <span class="pl-c"><span class="pl-c">//</span> Types slower, like a user</span></pre></div>
<p>Shortcut for <a href="#frametypeselector-text-options">page.mainFrame().type(selector, text[, options])</a>.</p>
<h4><a id="user-content-pageurl" class="anchor" aria-hidden="true" href="#pageurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>This is a shortcut for <a href="#frameurl">page.mainFrame().url()</a></p>
<h4><a id="user-content-pageviewport" class="anchor" aria-hidden="true" href="#pageviewport"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.viewport()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>width</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page width in pixels.</li>
<li><code>height</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; page height in pixels.</li>
<li><code>deviceScaleFactor</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Specify device scale factor (can be though of as dpr). Defaults to <code>1</code>.</li>
<li><code>isMobile</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether the <code>meta viewport</code> tag is taken into account. Defaults to <code>false</code>.</li>
<li><code>hasTouch</code>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport supports touch events. Defaults to <code>false</code></li>
<li><code>isLandscape</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Specifies if viewport is in landscape mode. Defaults to <code>false</code>.</li>
</ul>
</li>
</ul>
<h4><a id="user-content-pagewaitforselectororfunctionortimeout-options-args" class="anchor" aria-hidden="true" href="#pagewaitforselectororfunctionortimeout-options-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</h4>
<ul>
<li><code>selectorOrFunctionOrTimeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a>, predicate or timeout to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to  <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to a JSHandle of the success value</li>
</ul>
<p>This method behaves differently with respect to the type of the first parameter:</p>
<ul>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>string</code>, then the first argument is treated as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/XPath" title="xpath" rel="nofollow">xpath</a>, depending on whether or not it starts with '//', and the method is a shortcut for
<a href="#pagewaitforselectorselector-options">page.waitForSelector</a> or <a href="#pagewaitforxpathxpath-options">page.waitForXPath</a></li>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>function</code>, then the first argument is treated as a predicate to wait for and the method is a shortcut for <a href="#pagewaitforfunctionpagefunction-options-args">page.waitForFunction()</a>.</li>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>number</code>, then the first argument is treated as a timeout in milliseconds and the method returns a promise which resolves after the timeout</li>
<li>otherwise, an exception is thrown</li>
</ul>
<p>Shortcut for <a href="#framewaitforselectororfunctionortimeout-options-args">page.mainFrame().waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</a>.</p>
<h4><a id="user-content-pagewaitforfunctionpagefunction-options-args" class="anchor" aria-hidden="true" href="#pagewaitforfunctionpagefunction-options-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.waitForFunction(pageFunction[, options[, ...args]])</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in browser context</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>polling</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; An interval at which the <code>pageFunction</code> is executed, defaults to <code>raf</code>. If <code>polling</code> is a number, then it is treated as an interval in milliseconds at which the function would be executed. If <code>polling</code> is a string, then it can be one of the following values:
<ul>
<li><code>raf</code> - to constantly execute <code>pageFunction</code> in <code>requestAnimationFrame</code> callback. This is the tightest polling mode which is suitable to observe styling changes.</li>
<li><code>mutation</code> - to execute <code>pageFunction</code> on every DOM mutation.</li>
</ul>
</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to  <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves when the <code>pageFunction</code> returns a truthy value. It resolves to a JSHandle of the truthy value.</li>
</ul>
<p>The <code>waitForFunction</code> can be used to observe viewport size change:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">const</span> <span class="pl-c1">watchDog</span> <span class="pl-k">=</span> <span class="pl-smi">page</span>.<span class="pl-en">waitForFunction</span>(<span class="pl-s"><span class="pl-pds">'</span>window.innerWidth &lt; 100<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">setViewport</span>({width<span class="pl-k">:</span> <span class="pl-c1">50</span>, height<span class="pl-k">:</span> <span class="pl-c1">50</span>});
  <span class="pl-k">await</span> watchDog;
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>Shortcut for <a href="#framewaitforfunctionpagefunction-options-args">page.mainFrame().waitForFunction(pageFunction[, options[, ...args]])</a>.</p>
<h4><a id="user-content-pagewaitfornavigationoptions" class="anchor" aria-hidden="true" href="#pagewaitfornavigationoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.waitForNavigation(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Navigation parameters which might have the following properties:
<ul>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Maximum navigation time in milliseconds, defaults to 30 seconds, pass <code>0</code> to disable timeout. The default value can be changed by using the <a href="#pagesetdefaultnavigationtimeouttimeout">page.setDefaultNavigationTimeout(timeout)</a> method.</li>
<li><code>waitUntil</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; When to consider navigation succeeded, defaults to <code>load</code>. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
<ul>
<li><code>load</code> - consider navigation to be finished when the <code>load</code> event is fired.</li>
<li><code>domcontentloaded</code> - consider navigation to be finished when the <code>DOMContentLoaded</code> event is fired.</li>
<li><code>networkidle0</code> - consider navigation to be finished when there are no more than 0 network connections for at least <code>500</code> ms.</li>
<li><code>networkidle2</code> - consider navigation to be finished when there are no more than 2 network connections for at least <code>500</code> ms.</li>
</ul>
</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;[?Response]&gt;&gt; Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with <code>null</code>.</li>
</ul>
<p>This resolves when the page navigates to a new URL or reloads. It is useful for when you run code
which will indirectly cause the page to navigate. Consider this example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">navigationPromise</span> <span class="pl-k">=</span> <span class="pl-smi">page</span>.<span class="pl-en">waitForNavigation</span>();
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">click</span>(<span class="pl-s"><span class="pl-pds">'</span>a.my-link<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Clicking the link will indirectly cause a navigation</span>
<span class="pl-k">await</span> navigationPromise; <span class="pl-c"><span class="pl-c">//</span> The navigationPromise resolves after navigation has finished</span></pre></div>
<p><strong>NOTE</strong> Usage of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" rel="nofollow">History API</a> to change the URL is considered a navigation.</p>
<h4><a id="user-content-pagewaitforselectorselector-options" class="anchor" aria-hidden="true" href="#pagewaitforselectorselector-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.waitForSelector(selector[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>visible</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to be present in DOM and to be visible, i.e. to not have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>hidden</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to not be found in the DOM or to be hidden, i.e. have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; Promise which resolves when element specified by selector string is added to DOM.</li>
</ul>
<p>Wait for the <code>selector</code> to appear in page. If at the moment of calling
the method the <code>selector</code> already exists, the method will return
immediately. If the selector doesn't appear after the <code>timeout</code> milliseconds of waiting, the function will throw.</p>
<p>This method works across navigations:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">let</span> currentURL;
  page
    .<span class="pl-en">waitForSelector</span>(<span class="pl-s"><span class="pl-pds">'</span>img<span class="pl-pds">'</span></span>)
    .<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>First URL with image: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> currentURL));
  <span class="pl-k">for</span> (currentURL <span class="pl-k">of</span> [<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://bbc.com<span class="pl-pds">'</span></span>])
    <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(currentURL);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>Shortcut for <a href="#framewaitforselectorselector-options">page.mainFrame().waitForSelector(selector[, options])</a>.</p>
<h4><a id="user-content-pagewaitforxpathxpath-options" class="anchor" aria-hidden="true" href="#pagewaitforxpathxpath-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.waitForXPath(xpath[, options])</h4>
<ul>
<li><code>xpath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/XPath" title="xpath" rel="nofollow">xpath</a> of an element to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>visible</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to be present in DOM and to be visible, i.e. to not have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>hidden</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to not be found in the DOM or to be hidden, i.e. have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; Promise which resolves when element specified by xpath string is added to DOM.</li>
</ul>
<p>Wait for the <code>xpath</code> to appear in page. If at the moment of calling
the method the <code>xpath</code> already exists, the method will return
immediately. If the xpath doesn't appear after the <code>timeout</code> milliseconds of waiting, the function will throw.</p>
<p>This method works across navigations:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">let</span> currentURL;
  page
    .<span class="pl-en">waitForXPath</span>(<span class="pl-s"><span class="pl-pds">'</span>//img<span class="pl-pds">'</span></span>)
    .<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>First URL with image: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> currentURL));
  <span class="pl-k">for</span> (currentURL <span class="pl-k">of</span> [<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://bbc.com<span class="pl-pds">'</span></span>])
    <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(currentURL);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<p>Shortcut for <a href="#framewaitforxpathxpath-options">page.mainFrame().waitForXPath(xpath[, options])</a>.</p>
<h4><a id="user-content-pageworkers" class="anchor" aria-hidden="true" href="#pageworkers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>page.workers()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-worker" title="Worker">Worker</a>&gt;&gt;
This method returns all of the dedicated <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">WebWorkers</a> associated with the page.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> This does not contain ServiceWorkers</p>
</blockquote>
<h3><a id="user-content-class-worker" class="anchor" aria-hidden="true" href="#class-worker"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Worker</h3>
<p>The Worker class represents a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">WebWorker</a>.
The events <code>workercreated</code> and <code>workerdestroyed</code> are emitted on the page object to signal the worker lifecycle.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>workercreated<span class="pl-pds">'</span></span>, <span class="pl-smi">worker</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Worker created: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">worker</span>.<span class="pl-en">url</span>()));
<span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>workerdestroyed<span class="pl-pds">'</span></span>, <span class="pl-smi">worker</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Worker destroyed: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">worker</span>.<span class="pl-en">url</span>()));

<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Current workers:<span class="pl-pds">'</span></span>);
<span class="pl-k">for</span> (<span class="pl-k">const</span> <span class="pl-c1">worker</span> <span class="pl-k">of</span> <span class="pl-smi">page</span>.<span class="pl-en">workers</span>())
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>  <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">worker</span>.<span class="pl-en">url</span>());</pre></div>
<h4><a id="user-content-workerevaluatepagefunction-args" class="anchor" aria-hidden="true" href="#workerevaluatepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>worker.evaluate(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the worker context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>If the function passed to the <code>worker.evaluate</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>worker.evaluate</code> would wait for the promise to resolve and return its value.</p>
<p>If the function passed to the <code>worker.evaluate</code> returns a non-<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a> value, then <code>worker.evaluate</code> resolves to <code>undefined</code>.</p>
<p>Shortcut for <a href="#executioncontextevaluatepagefunction-args">(await worker.executionContext()).evaluate(pageFunction, ...args)</a>.</p>
<h4><a id="user-content-workerevaluatehandlepagefunction-args" class="anchor" aria-hidden="true" href="#workerevaluatehandlepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>worker.evaluateHandle(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the page context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code> as in-page object (JSHandle)</li>
</ul>
<p>The only difference between <code>worker.evaluate</code> and <code>worker.evaluateHandle</code> is that <code>worker.evaluateHandle</code> returns in-page object (JSHandle).</p>
<p>If the function passed to the <code>worker.evaluateHandle</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>worker.evaluateHandle</code> would wait for the promise to resolve and return its value.</p>
<p>Shortcut for <a href="#executioncontextevaluatehandlepagefunction-args">(await worker.executionContext()).evaluateHandle(pageFunction, ...args)</a>.</p>
<h4><a id="user-content-workerexecutioncontext" class="anchor" aria-hidden="true" href="#workerexecutioncontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>worker.executionContext()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-executioncontext" title="ExecutionContext">ExecutionContext</a>&gt;&gt;</li>
</ul>
<h4><a id="user-content-workerurl" class="anchor" aria-hidden="true" href="#workerurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>worker.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<h3><a id="user-content-class-keyboard" class="anchor" aria-hidden="true" href="#class-keyboard"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Keyboard</h3>
<p>Keyboard provides an api for managing a virtual keyboard. The high level api is <a href="#keyboardtypetext-options"><code>keyboard.type</code></a>, which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.</p>
<p>For finer control, you can use <a href="#keyboarddownkey-options"><code>keyboard.down</code></a>, <a href="#keyboardupkey"><code>keyboard.up</code></a>, and <a href="#keyboardsendcharacterchar"><code>keyboard.sendCharacter</code></a> to manually fire events as if they were generated from a real keyboard.</p>
<p>An example of holding down <code>Shift</code> in order to select and delete some text:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>Hello World!<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">press</span>(<span class="pl-s"><span class="pl-pds">'</span>ArrowLeft<span class="pl-pds">'</span></span>);

<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">down</span>(<span class="pl-s"><span class="pl-pds">'</span>Shift<span class="pl-pds">'</span></span>);
<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-s"><span class="pl-pds">'</span> World<span class="pl-pds">'</span></span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>)
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">press</span>(<span class="pl-s"><span class="pl-pds">'</span>ArrowLeft<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">up</span>(<span class="pl-s"><span class="pl-pds">'</span>Shift<span class="pl-pds">'</span></span>);

<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">press</span>(<span class="pl-s"><span class="pl-pds">'</span>Backspace<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> Result text will end up saying 'Hello!'</span></pre></div>
<p>An example of pressing <code>A</code></p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">down</span>(<span class="pl-s"><span class="pl-pds">'</span>Shift<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">press</span>(<span class="pl-s"><span class="pl-pds">'</span>KeyA<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">up</span>(<span class="pl-s"><span class="pl-pds">'</span>Shift<span class="pl-pds">'</span></span>);</pre></div>
<blockquote>
<p><strong>NOTE</strong> On MacOS, keyboard shortcuts like <code>⌘ A</code> -&gt; Select All do not work. See <a href="https://github.com/GoogleChrome/puppeteer/issues/1313">#1313</a></p>
</blockquote>
<h4><a id="user-content-keyboarddownkey-options" class="anchor" aria-hidden="true" href="#keyboarddownkey-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyboard.down(key[, options])</h4>
<ul>
<li><code>key</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of key to press, such as <code>ArrowLeft</code>. See <a href="/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js" title="USKeyboardLayout">USKeyboardLayout</a> for a list of all key names.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If specified, generates an input event with this text.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>keydown</code> event.</p>
<p>If <code>key</code> is a single character and no modifier keys besides <code>Shift</code> are being held down, a <code>keypress</code>/<code>input</code> event will also generated. The <code>text</code> option can be specified to force an input event to be generated.</p>
<p>If <code>key</code> is a modifier key, <code>Shift</code>, <code>Meta</code>, <code>Control</code>, or <code>Alt</code>, subsequent key presses will be sent with that modifier active. To release the modifier key, use <a href="#keyboardupkey"><code>keyboard.up</code></a>.</p>
<p>After the key is pressed once, subsequent calls to <a href="#keyboarddownkey-options"><code>keyboard.down</code></a> will have <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat" rel="nofollow">repeat</a> set to true. To release the key, use <a href="#keyboardupkey"><code>keyboard.up</code></a>.</p>
<blockquote>
<p><strong>NOTE</strong> Modifier keys DO influence <code>keyboard.down</code>. Holding down <code>Shift</code> will type the text in upper case.</p>
</blockquote>
<h4><a id="user-content-keyboardpresskey-options" class="anchor" aria-hidden="true" href="#keyboardpresskey-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyboard.press(key[, options])</h4>
<ul>
<li><code>key</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of key to press, such as <code>ArrowLeft</code>. See <a href="/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js" title="USKeyboardLayout">USKeyboardLayout</a> for a list of all key names.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If specified, generates an input event with this text.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>keydown</code> and <code>keyup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>If <code>key</code> is a single character and no modifier keys besides <code>Shift</code> are being held down, a <code>keypress</code>/<code>input</code> event will also generated. The <code>text</code> option can be specified to force an input event to be generated.</p>
<blockquote>
<p><strong>NOTE</strong> Modifier keys DO effect <code>keyboard.press</code>. Holding down <code>Shift</code> will type the text in upper case.</p>
</blockquote>
<p>Shortcut for <a href="#keyboarddownkey-options"><code>keyboard.down</code></a> and <a href="#keyboardupkey"><code>keyboard.up</code></a>.</p>
<h4><a id="user-content-keyboardsendcharacterchar" class="anchor" aria-hidden="true" href="#keyboardsendcharacterchar"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyboard.sendCharacter(char)</h4>
<ul>
<li><code>char</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Character to send into the page.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>keypress</code> and <code>input</code> event. This does not send a <code>keydown</code> or <code>keyup</code> event.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-en">sendCharacter</span>(<span class="pl-s"><span class="pl-pds">'</span>嗨<span class="pl-pds">'</span></span>);</pre></div>
<blockquote>
<p><strong>NOTE</strong> Modifier keys DO NOT effect <code>keyboard.sendCharacter</code>. Holding down <code>Shift</code> will not type the text in upper case.</p>
</blockquote>
<h4><a id="user-content-keyboardtypetext-options" class="anchor" aria-hidden="true" href="#keyboardtypetext-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyboard.type(text, options)</h4>
<ul>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A text to type into a focused element.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between key presses in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Sends a <code>keydown</code>, <code>keypress</code>/<code>input</code>, and <code>keyup</code> event for each character in the text.</p>
<p>To press a special key, like <code>Control</code> or <code>ArrowDown</code>, use <a href="#keyboardpresskey-options"><code>keyboard.press</code></a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>Hello<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Types instantly</span>
<span class="pl-smi">page</span>.<span class="pl-smi">keyboard</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>World<span class="pl-pds">'</span></span>, {delay<span class="pl-k">:</span> <span class="pl-c1">100</span>}); <span class="pl-c"><span class="pl-c">//</span> Types slower, like a user</span></pre></div>
<blockquote>
<p><strong>NOTE</strong> Modifier keys DO NOT effect <code>keyboard.type</code>. Holding down <code>Shift</code> will not type the text in upper case.</p>
</blockquote>
<h4><a id="user-content-keyboardupkey" class="anchor" aria-hidden="true" href="#keyboardupkey"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyboard.up(key)</h4>
<ul>
<li><code>key</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of key to release, such as <code>ArrowLeft</code>. See <a href="/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js" title="USKeyboardLayout">USKeyboardLayout</a> for a list of all key names.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>keyup</code> event.</p>
<h3><a id="user-content-class-mouse" class="anchor" aria-hidden="true" href="#class-mouse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Mouse</h3>
<h4><a id="user-content-mouseclickx-y-options" class="anchor" aria-hidden="true" href="#mouseclickx-y-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mouse.click(x, y, [options])</h4>
<ul>
<li><code>x</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li><code>y</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>mousedown</code> and <code>mouseup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Shortcut for <a href="#mousemovex-y-options"><code>mouse.move</code></a>, <a href="#mousedownoptions"><code>mouse.down</code></a> and <a href="#mouseupoptions"><code>mouse.up</code></a>.</p>
<h4><a id="user-content-mousedownoptions" class="anchor" aria-hidden="true" href="#mousedownoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mouse.down([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>mousedown</code> event.</p>
<h4><a id="user-content-mousemovex-y-options" class="anchor" aria-hidden="true" href="#mousemovex-y-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mouse.move(x, y, [options])</h4>
<ul>
<li><code>x</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li><code>y</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>steps</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. Sends intermediate <code>mousemove</code> events.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>mousemove</code> event.</p>
<h4><a id="user-content-mouseupoptions" class="anchor" aria-hidden="true" href="#mouseupoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mouse.up([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>mouseup</code> event.</p>
<h3><a id="user-content-class-touchscreen" class="anchor" aria-hidden="true" href="#class-touchscreen"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Touchscreen</h3>
<h4><a id="user-content-touchscreentapx-y" class="anchor" aria-hidden="true" href="#touchscreentapx-y"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>touchscreen.tap(x, y)</h4>
<ul>
<li><code>x</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li><code>y</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Dispatches a <code>touchstart</code> and <code>touchend</code> event.</p>
<h3><a id="user-content-class-tracing" class="anchor" aria-hidden="true" href="#class-tracing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Tracing</h3>
<p>You can use <a href="#tracingstartoptions"><code>tracing.start</code></a> and <a href="#tracingstop"><code>tracing.stop</code></a> to create a trace file which can be opened in Chrome DevTools or <a href="https://chromedevtools.github.io/timeline-viewer/" rel="nofollow">timeline viewer</a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">tracing</span>.<span class="pl-c1">start</span>({path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>trace.json<span class="pl-pds">'</span></span>});
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://www.google.com<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-smi">tracing</span>.<span class="pl-c1">stop</span>();</pre></div>
<h4><a id="user-content-tracingstartoptions" class="anchor" aria-hidden="true" href="#tracingstartoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>tracing.start(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A path to write the trace file to.</li>
<li><code>screenshots</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; captures screenshots in the trace.</li>
<li><code>categories</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; specify custom categories to use instead of default.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Only one trace can be active at a time per browser.</p>
<h4><a id="user-content-tracingstop" class="anchor" aria-hidden="true" href="#tracingstop"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>tracing.stop()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://nodejs.org/api/buffer.html#buffer_class_buffer" title="Buffer" rel="nofollow">Buffer</a>&gt;&gt; Promise which resolves to buffer with trace data.</li>
</ul>
<h3><a id="user-content-class-dialog" class="anchor" aria-hidden="true" href="#class-dialog"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Dialog</h3>
<p><a href="#class-dialog" title="Dialog">Dialog</a> objects are dispatched by page via the <a href="#event-dialog">'dialog'</a> event.</p>
<p>An example of using <code>Dialog</code> class:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>dialog<span class="pl-pds">'</span></span>, <span class="pl-k">async</span> <span class="pl-smi">dialog</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">dialog</span>.<span class="pl-en">message</span>());
    <span class="pl-k">await</span> <span class="pl-smi">dialog</span>.<span class="pl-en">dismiss</span>();
    <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
  });
  <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">'</span>1<span class="pl-pds">'</span></span>));
});</pre></div>
<h4><a id="user-content-dialogacceptprompttext" class="anchor" aria-hidden="true" href="#dialogacceptprompttext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dialog.accept([promptText])</h4>
<ul>
<li><code>promptText</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A text to enter in prompt. Does not cause any effects if the dialog's <code>type</code> is not prompt.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the dialog has been accepted.</li>
</ul>
<h4><a id="user-content-dialogdefaultvalue" class="anchor" aria-hidden="true" href="#dialogdefaultvalue"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dialog.defaultValue()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If dialog is prompt, returns default prompt value. Otherwise, returns empty string.</li>
</ul>
<h4><a id="user-content-dialogdismiss" class="anchor" aria-hidden="true" href="#dialogdismiss"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dialog.dismiss()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the dialog has been dismissed.</li>
</ul>
<h4><a id="user-content-dialogmessage" class="anchor" aria-hidden="true" href="#dialogmessage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dialog.message()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A message displayed in the dialog.</li>
</ul>
<h4><a id="user-content-dialogtype" class="anchor" aria-hidden="true" href="#dialogtype"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dialog.type()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Dialog's type, can be one of <code>alert</code>, <code>beforeunload</code>, <code>confirm</code> or <code>prompt</code>.</li>
</ul>
<h3><a id="user-content-class-consolemessage" class="anchor" aria-hidden="true" href="#class-consolemessage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: ConsoleMessage</h3>
<p><a href="#class-consolemessage" title="ConsoleMessage">ConsoleMessage</a> objects are dispatched by page via the <a href="#event-console">'console'</a> event.</p>
<h4><a id="user-content-consolemessageargs" class="anchor" aria-hidden="true" href="#consolemessageargs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>consoleMessage.args()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt;</li>
</ul>
<h4><a id="user-content-consolemessagetext" class="anchor" aria-hidden="true" href="#consolemessagetext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>consoleMessage.text()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<h4><a id="user-content-consolemessagetype" class="anchor" aria-hidden="true" href="#consolemessagetype"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>consoleMessage.type()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>One of the following values: <code>'log'</code>, <code>'debug'</code>, <code>'info'</code>, <code>'error'</code>, <code>'warning'</code>, <code>'dir'</code>, <code>'dirxml'</code>, <code>'table'</code>, <code>'trace'</code>, <code>'clear'</code>, <code>'startGroup'</code>, <code>'startGroupCollapsed'</code>, <code>'endGroup'</code>, <code>'assert'</code>, <code>'profile'</code>, <code>'profileEnd'</code>, <code>'count'</code>, <code>'timeEnd'</code>.</p>
<h3><a id="user-content-class-frame" class="anchor" aria-hidden="true" href="#class-frame"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Frame</h3>
<p>At every point of time, page exposes its current frame tree via the <a href="#pagemainframe">page.mainFrame()</a> and <a href="#framechildframes">frame.childFrames()</a> methods.</p>
<p><a href="#class-frame" title="Frame">Frame</a> object's lifecycle is controlled by three events, dispatched on the page object:</p>
<ul>
<li><a href="#event-frameattached">'frameattached'</a> - fired when the frame gets attached to the page. A Frame can be attached to the page only once.</li>
<li><a href="#event-framenavigated">'framenavigated'</a> - fired when the frame commits navigation to a different URL.</li>
<li><a href="#event-framedetached">'framedetached'</a> - fired when the frame gets detached from the page.  A Frame can be detached from the page only once.</li>
</ul>
<p>An example of dumping frame tree:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://www.google.com/chrome/browser/canary.html<span class="pl-pds">'</span></span>);
  <span class="pl-en">dumpFrameTree</span>(<span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>(), <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();

  <span class="pl-k">function</span> <span class="pl-en">dumpFrameTree</span>(<span class="pl-smi">frame</span>, <span class="pl-smi">indent</span>) {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(indent <span class="pl-k">+</span> <span class="pl-smi">frame</span>.<span class="pl-en">url</span>());
    <span class="pl-k">for</span> (<span class="pl-k">let</span> child <span class="pl-k">of</span> <span class="pl-smi">frame</span>.<span class="pl-en">childFrames</span>())
      <span class="pl-en">dumpFrameTree</span>(child, indent <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>  <span class="pl-pds">'</span></span>);
  }
});</pre></div>
<h4><a id="user-content-frameselector" class="anchor" aria-hidden="true" href="#frameselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Selector to query page for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; Promise which resolves to ElementHandle pointing to the frame element.</li>
</ul>
<p>The method queries frame for the selector. If there's no such element within the frame, the method will resolve to <code>null</code>.</p>
<h4><a id="user-content-frameselector-1" class="anchor" aria-hidden="true" href="#frameselector-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.$$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Selector to query page for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt; Promise which resolves to ElementHandles pointing to the frame elements.</li>
</ul>
<p>The method runs <code>document.querySelectorAll</code> within the frame. If no elements match the selector, the return value resolve to <code>[]</code>.</p>
<h4><a id="user-content-frameevalselector-pagefunction-args" class="anchor" aria-hidden="true" href="#frameevalselector-pagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.$$eval(selector, pageFunction[, ...args])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query frame for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>Array.from(document.querySelectorAll(selector))</code> within the frame and passes it as the first argument to <code>pageFunction</code>.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.$$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">divsCounts</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">$$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>div<span class="pl-pds">'</span></span>, <span class="pl-smi">divs</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">divs</span>.<span class="pl-c1">length</span>);</pre></div>
<h4><a id="user-content-frameevalselector-pagefunction-args-1" class="anchor" aria-hidden="true" href="#frameevalselector-pagefunction-args-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.$eval(selector, pageFunction[, ...args])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query frame for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>document.querySelector</code> within the frame and passes it as the first argument to <code>pageFunction</code>. If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">searchValue</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>#search<span class="pl-pds">'</span></span>, <span class="pl-smi">el</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">el</span>.<span class="pl-c1">value</span>);
<span class="pl-k">const</span> <span class="pl-c1">preloadHref</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>link[rel=preload]<span class="pl-pds">'</span></span>, <span class="pl-smi">el</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">el</span>.<span class="pl-c1">href</span>);
<span class="pl-k">const</span> <span class="pl-c1">html</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>.main-container<span class="pl-pds">'</span></span>, <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">e</span>.<span class="pl-smi">outerHTML</span>);</pre></div>
<h4><a id="user-content-framexexpression" class="anchor" aria-hidden="true" href="#framexexpression"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.$x(expression)</h4>
<ul>
<li><code>expression</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Expression to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate" rel="nofollow">evaluate</a>.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method evaluates the XPath expression.</p>
<h4><a id="user-content-frameaddscripttagoptions" class="anchor" aria-hidden="true" href="#frameaddscripttagoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.addScriptTag(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL of a script to be added.</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to the JavaScript file to be injected into frame. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li><code>content</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Raw JavaScript content to be injected into frame.</li>
<li><code>type</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Script type. Use 'module' in order to load a Javascript ES6 module. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" rel="nofollow">script</a> for more details.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; which resolves to the added tag when the script's onload fires or when the script content was injected into frame.</li>
</ul>
<p>Adds a <code>&lt;script&gt;</code> tag into the page with the desired url or content.</p>
<h4><a id="user-content-frameaddstyletagoptions" class="anchor" aria-hidden="true" href="#frameaddstyletagoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.addStyleTag(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL of the <code>&lt;link&gt;</code> tag.</li>
<li><code>path</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Path to the CSS file to be injected into frame. If <code>path</code> is a relative path, then it is resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li><code>content</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Raw CSS content to be injected into frame.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; which resolves to the added tag when the stylesheet's onload fires or when the CSS content was injected into frame.</li>
</ul>
<p>Adds a <code>&lt;link rel="stylesheet"&gt;</code> tag into the page with the desired url or a <code>&lt;style type="text/css"&gt;</code> tag with the content.</p>
<h4><a id="user-content-framechildframes" class="anchor" aria-hidden="true" href="#framechildframes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.childFrames()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-frame" title="Frame">Frame</a>&gt;&gt;</li>
</ul>
<h4><a id="user-content-frameclickselector-options" class="anchor" aria-hidden="true" href="#frameclickselector-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.click(selector[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to click. If there are multiple elements satisfying the selector, the first will be clicked.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>mousedown</code> and <code>mouseup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully clicked. The Promise will be rejected if there is no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to click in the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>Bear in mind that if <code>click()</code> triggers a navigation event and there's a separate <code>page.waitForNavigation()</code> promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> [<span class="pl-c1">response</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
  <span class="pl-smi">page</span>.<span class="pl-en">waitForNavigation</span>(waitOptions),
  <span class="pl-smi">frame</span>.<span class="pl-c1">click</span>(selector, clickOptions),
]);</pre></div>
<h4><a id="user-content-framecontent" class="anchor" aria-hidden="true" href="#framecontent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.content()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">String</a>&gt;&gt;</li>
</ul>
<p>Gets the full HTML contents of the frame, including the doctype.</p>
<h4><a id="user-content-frameevaluatepagefunction-args" class="anchor" aria-hidden="true" href="#frameevaluatepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.evaluate(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to  <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>If the function passed to the <code>frame.evaluate</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.evaluate</code> would wait for the promise to resolve and return its value.</p>
<p>If the function passed to the <code>frame.evaluate</code> returns a non-<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a> value, then <code>frame.evaluate</code> resolves to <code>undefined</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">result</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> {
  <span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>(<span class="pl-c1">8</span> <span class="pl-k">*</span> <span class="pl-c1">7</span>);
});
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(result); <span class="pl-c"><span class="pl-c">//</span> prints "56"</span></pre></div>
<p>A string can also be passed in instead of a function.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-c1">evaluate</span>(<span class="pl-s"><span class="pl-pds">'</span>1 + 2<span class="pl-pds">'</span></span>)); <span class="pl-c"><span class="pl-c">//</span> prints "3"</span></pre></div>
<p><a href="#class-elementhandle" title="ElementHandle">ElementHandle</a> instances can be passed as arguments to the <code>frame.evaluate</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">bodyHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">html</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-c1">evaluate</span>(<span class="pl-smi">body</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">body</span>.<span class="pl-smi">innerHTML</span>, bodyHandle);
<span class="pl-k">await</span> <span class="pl-smi">bodyHandle</span>.<span class="pl-en">dispose</span>();</pre></div>
<h4><a id="user-content-frameevaluatehandlepagefunction-args" class="anchor" aria-hidden="true" href="#frameevaluatehandlepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.evaluateHandle(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the page context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code> as in-page object (JSHandle)</li>
</ul>
<p>The only difference between <code>frame.evaluate</code> and <code>frame.evaluateHandle</code> is that <code>frame.evaluateHandle</code> returns in-page object (JSHandle).</p>
<p>If the function, passed to the <code>frame.evaluateHandle</code>, returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.evaluateHandle</code> would wait for the promise to resolve and return its value.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aWindowHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>(<span class="pl-c1">window</span>));
aWindowHandle; <span class="pl-c"><span class="pl-c">//</span> Handle for the window object.</span></pre></div>
<p>A string can also be passed in instead of a function.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-s"><span class="pl-pds">'</span>document<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Handle for the 'document'.</span></pre></div>
<p><a href="#class-jshandle" title="JSHandle">JSHandle</a> instances can be passed as arguments to the <code>frame.evaluateHandle</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">document</span>.<span class="pl-c1">body</span>);
<span class="pl-k">const</span> <span class="pl-c1">resultHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">frame</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-smi">body</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">body</span>.<span class="pl-smi">innerHTML</span>, aHandle);
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">jsonValue</span>());
<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">dispose</span>();</pre></div>
<h4><a id="user-content-frameexecutioncontext" class="anchor" aria-hidden="true" href="#frameexecutioncontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.executionContext()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-executioncontext" title="ExecutionContext">ExecutionContext</a>&gt;&gt; Execution context associated with this frame.</li>
</ul>
<h4><a id="user-content-framefocusselector" class="anchor" aria-hidden="true" href="#framefocusselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.focus(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to focus. If there are multiple elements satisfying the selector, the first will be focused.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully focused. The promise will be rejected if there is no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code> and focuses it.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<h4><a id="user-content-framehoverselector" class="anchor" aria-hidden="true" href="#framehoverselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.hover(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element matching <code>selector</code> is successfully hovered. Promise gets rejected if there's no element matching <code>selector</code>.</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to hover over the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<h4><a id="user-content-frameisdetached" class="anchor" aria-hidden="true" href="#frameisdetached"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.isDetached()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>Returns <code>true</code> if the frame has been detached, or <code>false</code> otherwise.</p>
<h4><a id="user-content-framename" class="anchor" aria-hidden="true" href="#framename"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.name()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>Returns frame's name attribute as specified in the tag.</p>
<p>If the name is empty, returns the id attribute instead.</p>
<blockquote>
<p><strong>NOTE</strong> This value is calculated once when the frame is created, and will not update if the attribute is changed later.</p>
</blockquote>
<h4><a id="user-content-frameparentframe" class="anchor" aria-hidden="true" href="#frameparentframe"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.parentFrame()</h4>
<ul>
<li>returns: &lt;?<a href="#class-frame" title="Frame">Frame</a>&gt; Returns parent frame, if any. Detached frames and main frames return <code>null</code>.</li>
</ul>
<h4><a id="user-content-frameselectselector-values" class="anchor" aria-hidden="true" href="#frameselectselector-values"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.select(selector, ...values)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query frame for</li>
<li><code>...values</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Values of options to select. If the <code>&lt;select&gt;</code> has the <code>multiple</code> attribute, all values are considered, otherwise only the first one is taken into account.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt;&gt; Returns an array of option values that have been successfully selected.</li>
</ul>
<p>Triggers a <code>change</code> and <code>input</code> event once all the provided options have been selected.
If there's no <code>&lt;select&gt;</code> element matching <code>selector</code>, the method throws an error.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">frame</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">'</span>select#colors<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> single selection</span>
<span class="pl-smi">frame</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">'</span>select#colors<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>red<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>green<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>blue<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> multiple selections</span></pre></div>
<h4><a id="user-content-framesetcontenthtml" class="anchor" aria-hidden="true" href="#framesetcontenthtml"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.setContent(html)</h4>
<ul>
<li><code>html</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; HTML markup to assign to the page.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<h4><a id="user-content-frametapselector" class="anchor" aria-hidden="true" href="#frametapselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.tap(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to search for element to tap. If there are multiple elements satisfying the selector, the first will be tapped.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>This method fetches an element with <code>selector</code>, scrolls it into view if needed, and then uses <a href="#pagetouchscreen">page.touchscreen</a> to tap in the center of the element.
If there's no element matching <code>selector</code>, the method throws an error.</p>
<h4><a id="user-content-frametitle" class="anchor" aria-hidden="true" href="#frametitle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.title()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; Returns page's title.</li>
</ul>
<h4><a id="user-content-frametypeselector-text-options" class="anchor" aria-hidden="true" href="#frametypeselector-text-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.type(selector, text[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to type into. If there are multiple elements satisfying the selector, the first will be used.</li>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A text to type into a focused element.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between key presses in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Sends a <code>keydown</code>, <code>keypress</code>/<code>input</code>, and <code>keyup</code> event for each character in the text.</p>
<p>To press a special key, like <code>Control</code> or <code>ArrowDown</code>, use <a href="#keyboardpresskey-options"><code>keyboard.press</code></a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">frame</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>#mytextarea<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Hello<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Types instantly</span>
<span class="pl-smi">frame</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>#mytextarea<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>World<span class="pl-pds">'</span></span>, {delay<span class="pl-k">:</span> <span class="pl-c1">100</span>}); <span class="pl-c"><span class="pl-c">//</span> Types slower, like a user</span></pre></div>
<h4><a id="user-content-frameurl" class="anchor" aria-hidden="true" href="#frameurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>Returns frame's url.</p>
<h4><a id="user-content-framewaitforselectororfunctionortimeout-options-args" class="anchor" aria-hidden="true" href="#framewaitforselectororfunctionortimeout-options-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</h4>
<ul>
<li><code>selectorOrFunctionOrTimeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a>, predicate or timeout to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to  <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to a JSHandle of the success value</li>
</ul>
<p>This method behaves differently with respect to the type of the first parameter:</p>
<ul>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>string</code>, then the first argument is treated as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/XPath" title="xpath" rel="nofollow">xpath</a>, depending on whether or not it starts with '//', and the method is a shortcut for
<a href="#framewaitforselectorselector-options">frame.waitForSelector</a> or <a href="#framewaitforxpathxpath-options">frame.waitForXPath</a></li>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>function</code>, then the first argument is treated as a predicate to wait for and the method is a shortcut for <a href="#framewaitforfunctionpagefunction-options-args">frame.waitForFunction()</a>.</li>
<li>if <code>selectorOrFunctionOrTimeout</code> is a <code>number</code>, then the first argument is treated as a timeout in milliseconds and the method returns a promise which resolves after the timeout</li>
<li>otherwise, an exception is thrown</li>
</ul>
<h4><a id="user-content-framewaitforfunctionpagefunction-options-args" class="anchor" aria-hidden="true" href="#framewaitforfunctionpagefunction-options-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.waitForFunction(pageFunction[, options[, ...args]])</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in browser context</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>polling</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; An interval at which the <code>pageFunction</code> is executed, defaults to <code>raf</code>. If <code>polling</code> is a number, then it is treated as an interval in milliseconds at which the function would be executed. If <code>polling</code> is a string, then it can be one of the following values:
<ul>
<li><code>raf</code> - to constantly execute <code>pageFunction</code> in <code>requestAnimationFrame</code> callback. This is the tightest polling mode which is suitable to observe styling changes.</li>
<li><code>mutation</code> - to execute <code>pageFunction</code> on every DOM mutation.</li>
</ul>
</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to  <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves when the <code>pageFunction</code> returns a truthy value. It resolves to a JSHandle of the truthy value.</li>
</ul>
<p>The <code>waitForFunction</code> can be used to observe viewport size change:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">const</span> <span class="pl-c1">watchDog</span> <span class="pl-k">=</span> <span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>().<span class="pl-en">waitForFunction</span>(<span class="pl-s"><span class="pl-pds">'</span>window.innerWidth &lt; 100<span class="pl-pds">'</span></span>);
  <span class="pl-smi">page</span>.<span class="pl-en">setViewport</span>({width<span class="pl-k">:</span> <span class="pl-c1">50</span>, height<span class="pl-k">:</span> <span class="pl-c1">50</span>});
  <span class="pl-k">await</span> watchDog;
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<h4><a id="user-content-framewaitforselectorselector-options" class="anchor" aria-hidden="true" href="#framewaitforselectorselector-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.waitForSelector(selector[, options])</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> of an element to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>visible</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to be present in DOM and to be visible, i.e. to not have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>hidden</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to not be found in the DOM or to be hidden, i.e. have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; Promise which resolves when element specified by selector string is added to DOM.</li>
</ul>
<p>Wait for the <code>selector</code> to appear in page. If at the moment of calling
the method the <code>selector</code> already exists, the method will return
immediately. If the selector doesn't appear after the <code>timeout</code> milliseconds of waiting, the function will throw.</p>
<p>This method works across navigations:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">let</span> currentURL;
  <span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>()
    .<span class="pl-en">waitForSelector</span>(<span class="pl-s"><span class="pl-pds">'</span>img<span class="pl-pds">'</span></span>)
    .<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>First URL with image: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> currentURL));
  <span class="pl-k">for</span> (currentURL <span class="pl-k">of</span> [<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://bbc.com<span class="pl-pds">'</span></span>])
    <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(currentURL);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<h4><a id="user-content-framewaitforxpathxpath-options" class="anchor" aria-hidden="true" href="#framewaitforxpathxpath-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frame.waitForXPath(xpath[, options])</h4>
<ul>
<li><code>xpath</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/XPath" title="xpath" rel="nofollow">xpath</a> of an element to wait for</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional waiting parameters
<ul>
<li><code>visible</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to be present in DOM and to be visible, i.e. to not have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>hidden</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; wait for element to not be found in the DOM or to be hidden, i.e. have <code>display: none</code> or <code>visibility: hidden</code> CSS properties. Defaults to <code>false</code>.</li>
<li><code>timeout</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; maximum time to wait for in milliseconds. Defaults to <code>30000</code> (30 seconds). Pass <code>0</code> to disable timeout.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt; Promise which resolves when element specified by xpath string is added to DOM.</li>
</ul>
<p>Wait for the <code>xpath</code> to appear in page. If at the moment of calling
the method the <code>xpath</code> already exists, the method will return
immediately. If the xpath doesn't appear after the <code>timeout</code> milliseconds of waiting, the function will throw.</p>
<p>This method works across navigations:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">let</span> currentURL;
  <span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>()
    .<span class="pl-en">waitForXPath</span>(<span class="pl-s"><span class="pl-pds">'</span>//img<span class="pl-pds">'</span></span>)
    .<span class="pl-c1">then</span>(() <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>First URL with image: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> currentURL));
  <span class="pl-k">for</span> (currentURL <span class="pl-k">of</span> [<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>https://bbc.com<span class="pl-pds">'</span></span>])
    <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(currentURL);
  <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-c1">close</span>();
});</pre></div>
<h3><a id="user-content-class-executioncontext" class="anchor" aria-hidden="true" href="#class-executioncontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: ExecutionContext</h3>
<p>The class represents a context for JavaScript execution. Examples of JavaScript contexts are:</p>
<ul>
<li>each <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" rel="nofollow">frame</a> has a separate execution context</li>
<li>all kind of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" rel="nofollow">workers</a> have their own contexts</li>
</ul>
<h4><a id="user-content-executioncontextevaluatepagefunction-args" class="anchor" aria-hidden="true" href="#executioncontextevaluatepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>executionContext.evaluate(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in <code>executionContext</code></li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>If the function passed to the <code>executionContext.evaluate</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>executionContext.evaluate</code> would wait for the promise to resolve and return its value.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">executionContext</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>().<span class="pl-en">executionContext</span>();
<span class="pl-k">const</span> <span class="pl-c1">result</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">executionContext</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>(<span class="pl-c1">8</span> <span class="pl-k">*</span> <span class="pl-c1">7</span>));
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(result); <span class="pl-c"><span class="pl-c">//</span> prints "56"</span></pre></div>
<p>A string can also be passed in instead of a function.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">executionContext</span>.<span class="pl-c1">evaluate</span>(<span class="pl-s"><span class="pl-pds">'</span>1 + 2<span class="pl-pds">'</span></span>)); <span class="pl-c"><span class="pl-c">//</span> prints "3"</span></pre></div>
<p><a href="#class-jshandle" title="JSHandle">JSHandle</a> instances can be passed as arguments to the <code>executionContext.evaluate</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">oneHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">executionContext</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">1</span>);
<span class="pl-k">const</span> <span class="pl-c1">twoHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">executionContext</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">2</span>);
<span class="pl-k">const</span> <span class="pl-c1">result</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">executionContext</span>.<span class="pl-c1">evaluate</span>((<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) <span class="pl-k">=&gt;</span> a <span class="pl-k">+</span> b, oneHandle, twoHandle);
<span class="pl-k">await</span> <span class="pl-smi">oneHandle</span>.<span class="pl-en">dispose</span>();
<span class="pl-k">await</span> <span class="pl-smi">twoHandle</span>.<span class="pl-en">dispose</span>();
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(result); <span class="pl-c"><span class="pl-c">//</span> prints '3'.</span></pre></div>
<h4><a id="user-content-executioncontextevaluatehandlepagefunction-args" class="anchor" aria-hidden="true" href="#executioncontextevaluatehandlepagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>executionContext.evaluateHandle(pageFunction, ...args)</h4>
<ul>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Function to be evaluated in the <code>executionContext</code></li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code> as in-page object (JSHandle)</li>
</ul>
<p>The only difference between <code>executionContext.evaluate</code> and <code>executionContext.evaluateHandle</code> is that <code>executionContext.evaluateHandle</code> returns in-page object (JSHandle).</p>
<p>If the function passed to the <code>executionContext.evaluateHandle</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>executionContext.evaluateHandle</code> would wait for the promise to resolve and return its value.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">context</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">mainFrame</span>().<span class="pl-en">executionContext</span>();
<span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>(self));
aHandle; <span class="pl-c"><span class="pl-c">//</span> Handle for the global object.</span></pre></div>
<p>A string can also be passed in instead of a function.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-s"><span class="pl-pds">'</span>1 + 2<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Handle for the '3' object.</span></pre></div>
<p><a href="#class-jshandle" title="JSHandle">JSHandle</a> instances can be passed as arguments to the <code>executionContext.evaluateHandle</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">aHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">document</span>.<span class="pl-c1">body</span>);
<span class="pl-k">const</span> <span class="pl-c1">resultHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">context</span>.<span class="pl-en">evaluateHandle</span>(<span class="pl-smi">body</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">body</span>.<span class="pl-smi">innerHTML</span>, aHandle);
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">jsonValue</span>()); <span class="pl-c"><span class="pl-c">//</span> prints body's innerHTML</span>
<span class="pl-k">await</span> <span class="pl-smi">aHandle</span>.<span class="pl-en">dispose</span>();
<span class="pl-k">await</span> <span class="pl-smi">resultHandle</span>.<span class="pl-en">dispose</span>();</pre></div>
<h4><a id="user-content-executioncontextframe" class="anchor" aria-hidden="true" href="#executioncontextframe"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>executionContext.frame()</h4>
<ul>
<li>returns: &lt;?<a href="#class-frame" title="Frame">Frame</a>&gt; Frame associated with this execution context.</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> Not every execution context is associated with a frame. For example, workers and extensions have execution contexts that are not associated with frames.</p>
</blockquote>
<h4><a id="user-content-executioncontextqueryobjectsprototypehandle" class="anchor" aria-hidden="true" href="#executioncontextqueryobjectsprototypehandle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>executionContext.queryObjects(prototypeHandle)</h4>
<ul>
<li><code>prototypeHandle</code> &lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; A handle to the object prototype.</li>
<li>returns: &lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; A handle to an array of objects with this prototype</li>
</ul>
<p>The method iterates the JavaScript heap and finds all the objects with the given prototype.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Create a Map object</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">window</span>.<span class="pl-smi">map</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Map</span>());
<span class="pl-c"><span class="pl-c">//</span> Get a handle to the Map object prototype</span>
<span class="pl-k">const</span> <span class="pl-c1">mapPrototype</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">Map</span>.<span class="pl-c1">prototype</span>);
<span class="pl-c"><span class="pl-c">//</span> Query all map instances into an array</span>
<span class="pl-k">const</span> <span class="pl-c1">mapInstances</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">queryObjects</span>(mapPrototype);
<span class="pl-c"><span class="pl-c">//</span> Count amount of map objects in heap</span>
<span class="pl-k">const</span> <span class="pl-c1">count</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">evaluate</span>(<span class="pl-smi">maps</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">maps</span>.<span class="pl-c1">length</span>, mapInstances);
<span class="pl-k">await</span> <span class="pl-smi">mapInstances</span>.<span class="pl-en">dispose</span>();
<span class="pl-k">await</span> <span class="pl-smi">mapPrototype</span>.<span class="pl-en">dispose</span>();</pre></div>
<h3><a id="user-content-class-jshandle" class="anchor" aria-hidden="true" href="#class-jshandle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: JSHandle</h3>
<p>JSHandle represents an in-page JavaScript object. JSHandles can be created with the <a href="#pageevaluatehandlepagefunction-args">page.evaluateHandle</a> method.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">windowHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">window</span>);
<span class="pl-c"><span class="pl-c">//</span> ...</span></pre></div>
<p>JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is <a href="#jshandledispose">disposed</a>. JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed.</p>
<p>JSHandle instances can be used as arguments in <a href="#pageevalselector-pagefunction-args"><code>page.$eval()</code></a>, <a href="#pageevaluatepagefunction-args"><code>page.evaluate()</code></a> and <a href="#pageevaluatehandlepagefunction-args"><code>page.evaluateHandle</code></a> methods.</p>
<h4><a id="user-content-jshandleaselement" class="anchor" aria-hidden="true" href="#jshandleaselement"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.asElement()</h4>
<ul>
<li>returns: &lt;?<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;</li>
</ul>
<p>Returns either <code>null</code> or the object handle itself, if the object handle is an instance of <a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>.</p>
<h4><a id="user-content-jshandledispose" class="anchor" aria-hidden="true" href="#jshandledispose"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.dispose()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the object handle is successfully disposed.</li>
</ul>
<p>The <code>jsHandle.dispose</code> method stops referencing the element handle.</p>
<h4><a id="user-content-jshandleexecutioncontext" class="anchor" aria-hidden="true" href="#jshandleexecutioncontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.executionContext()</h4>
<ul>
<li>returns: <a href="#class-executioncontext" title="ExecutionContext">ExecutionContext</a></li>
</ul>
<p>Returns execution context the handle belongs to.</p>
<h4><a id="user-content-jshandlegetproperties" class="anchor" aria-hidden="true" href="#jshandlegetproperties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.getProperties()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" title="Map" rel="nofollow">Map</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>, <a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method returns a map with property names as keys and JSHandle instances for the property values.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">handle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> ({<span class="pl-c1">window</span>, <span class="pl-c1">document</span>}));
<span class="pl-k">const</span> <span class="pl-c1">properties</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">handle</span>.<span class="pl-en">getProperties</span>();
<span class="pl-k">const</span> <span class="pl-c1">windowHandle</span> <span class="pl-k">=</span> <span class="pl-smi">properties</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>window<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">documentHandle</span> <span class="pl-k">=</span> <span class="pl-smi">properties</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>document<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">handle</span>.<span class="pl-en">dispose</span>();</pre></div>
<h4><a id="user-content-jshandlegetpropertypropertyname" class="anchor" aria-hidden="true" href="#jshandlegetpropertypropertyname"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.getProperty(propertyName)</h4>
<ul>
<li><code>propertyName</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; property to get</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt;</li>
</ul>
<p>Fetches a single property from the referenced object.</p>
<h4><a id="user-content-jshandlejsonvalue" class="anchor" aria-hidden="true" href="#jshandlejsonvalue"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jsHandle.jsonValue()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;</li>
</ul>
<p>Returns a JSON representation of the object. If the object has a
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior" rel="nofollow"><code>toJSON</code></a>
function, it <strong>will not be called</strong>.</p>
<blockquote>
<p><strong>NOTE</strong> The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.</p>
</blockquote>
<h3><a id="user-content-class-elementhandle" class="anchor" aria-hidden="true" href="#class-elementhandle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: ElementHandle</h3>
<blockquote>
<p><strong>NOTE</strong> Class <a href="#class-elementhandle" title="ElementHandle">ElementHandle</a> extends <a href="#class-jshandle" title="JSHandle">JSHandle</a>.</p>
</blockquote>
<p>ElementHandle represents an in-page DOM element. ElementHandles can be created with the <a href="#pageselector">page.$</a> method.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">puppeteer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>puppeteer<span class="pl-pds">'</span></span>);

<span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>().<span class="pl-c1">then</span>(<span class="pl-k">async</span> <span class="pl-smi">browser</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">page</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">browser</span>.<span class="pl-en">newPage</span>();
  <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>);
  <span class="pl-k">const</span> <span class="pl-c1">inputElement</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>input[type=submit]<span class="pl-pds">'</span></span>);
  <span class="pl-k">await</span> <span class="pl-smi">inputElement</span>.<span class="pl-c1">click</span>();
  <span class="pl-c"><span class="pl-c">//</span> ...</span>
});</pre></div>
<p>ElementHandle prevents DOM element from garbage collection unless the handle is <a href="#elementhandledispose">disposed</a>. ElementHandles are auto-disposed when their origin frame gets navigated.</p>
<p>ElementHandle instances can be used as arguments in <a href="#pageevalselector-pagefunction-args"><code>page.$eval()</code></a> and <a href="#pageevaluatepagefunction-args"><code>page.evaluate()</code></a> methods.</p>
<h4><a id="user-content-elementhandleselector" class="anchor" aria-hidden="true" href="#elementhandleselector"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query element for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;</li>
</ul>
<p>The method runs <code>element.querySelector</code> within the page. If no element matches the selector, the return value resolve to <code>null</code>.</p>
<h4><a id="user-content-elementhandleselector-1" class="anchor" aria-hidden="true" href="#elementhandleselector-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.$$(selector)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query element for</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method runs <code>element.querySelectorAll</code> within the page. If no elements match the selector, the return value resolve to <code>[]</code>.</p>
<h4><a id="user-content-elementhandleevalselector-pagefunction-args" class="anchor" aria-hidden="true" href="#elementhandleevalselector-pagefunction-args"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.$$eval(selector, pageFunction, ...args)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>document.querySelectorAll</code> within the element and passes it as the first argument to <code>pageFunction</code>. If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.$$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>feed<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>tweet<span class="pl-pds">"</span></span>&gt;Hello!&lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>tweet<span class="pl-pds">"</span></span>&gt;Hi!&lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">feedHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.feed<span class="pl-pds">'</span></span>);
<span class="pl-en">expect</span>(<span class="pl-k">await</span> <span class="pl-smi">feedHandle</span>.<span class="pl-en">$$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>.tweet<span class="pl-pds">'</span></span>, <span class="pl-smi">nodes</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">nodes</span>.<span class="pl-en">map</span>(<span class="pl-smi">n</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">n</span>.<span class="pl-smi">innerText</span>)).<span class="pl-en">toEqual</span>([<span class="pl-s"><span class="pl-pds">'</span>Hello!<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Hi!<span class="pl-pds">'</span></span>]);</pre></div>
<h4><a id="user-content-elementhandleevalselector-pagefunction-args-1" class="anchor" aria-hidden="true" href="#elementhandleevalselector-pagefunction-args-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.$eval(selector, pageFunction, ...args)</h4>
<ul>
<li><code>selector</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" title="selector" rel="nofollow">selector</a> to query page for</li>
<li><code>pageFunction</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function" rel="nofollow">function</a>&gt; Function to be evaluated in browser context</li>
<li><code>...args</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>|<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt; Arguments to pass to <code>pageFunction</code></li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description" title="Serializable" rel="nofollow">Serializable</a>&gt;&gt; Promise which resolves to the return value of <code>pageFunction</code></li>
</ul>
<p>This method runs <code>document.querySelector</code> within the element and passes it as the first argument to <code>pageFunction</code>. If there's no element matching <code>selector</code>, the method throws an error.</p>
<p>If <code>pageFunction</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>, then <code>frame.$eval</code> would wait for the promise to resolve and return its value.</p>
<p>Examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">tweetHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.tweet<span class="pl-pds">'</span></span>);
<span class="pl-en">expect</span>(<span class="pl-k">await</span> <span class="pl-smi">tweetHandle</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>.like<span class="pl-pds">'</span></span>, <span class="pl-smi">node</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">node</span>.<span class="pl-smi">innerText</span>)).<span class="pl-en">toBe</span>(<span class="pl-s"><span class="pl-pds">'</span>100<span class="pl-pds">'</span></span>);
<span class="pl-en">expect</span>(<span class="pl-k">await</span> <span class="pl-smi">tweetHandle</span>.<span class="pl-en">$eval</span>(<span class="pl-s"><span class="pl-pds">'</span>.retweets<span class="pl-pds">'</span></span>, <span class="pl-smi">node</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">node</span>.<span class="pl-smi">innerText</span>)).<span class="pl-en">toBe</span>(<span class="pl-s"><span class="pl-pds">'</span>10<span class="pl-pds">'</span></span>);</pre></div>
<h4><a id="user-content-elementhandlexexpression" class="anchor" aria-hidden="true" href="#elementhandlexexpression"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.$x(expression)</h4>
<ul>
<li><code>expression</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Expression to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate" rel="nofollow">evaluate</a>.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-elementhandle" title="ElementHandle">ElementHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method evaluates the XPath expression relative to the elementHandle. If there are no such elements, the method will resolve to an empty array.</p>
<h4><a id="user-content-elementhandleaselement" class="anchor" aria-hidden="true" href="#elementhandleaselement"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.asElement()</h4>
<ul>
<li>returns: &lt;<a href="#class-elementhandle" title="ElementHandle">elementhandle</a>&gt;</li>
</ul>
<h4><a id="user-content-elementhandleboundingbox" class="anchor" aria-hidden="true" href="#elementhandleboundingbox"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.boundingBox()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;
<ul>
<li>x &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; the x coordinate of the element in pixels.</li>
<li>y &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; the y coordinate of the element in pixels.</li>
<li>width &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; the width of the element in pixels.</li>
<li>height &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; the height of the element in pixels.</li>
</ul>
</li>
</ul>
<p>This method returns the bounding box of the element (relative to the main frame), or <code>null</code> if the element is not visible.</p>
<h4><a id="user-content-elementhandleboxmodel" class="anchor" aria-hidden="true" href="#elementhandleboxmodel"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.boxModel()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;
<ul>
<li>content &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Content box, represented as an array of {x, y} points.</li>
<li>padding &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Padding box, represented as an array of {x, y} points.</li>
<li>border &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Border box, represented as an array of {x, y} points.</li>
<li>margin &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Margin box, represented as an array of {x, y} points.</li>
<li>width &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Element's width.</li>
<li>height &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Element's height.</li>
</ul>
</li>
</ul>
<p>This method returns boxes of the element, or <code>null</code> if the element is not visible. Boxes are represented as an array of points; each Point is an object <code>{x, y}</code>. Box points are sorted clock-wise.</p>
<h4><a id="user-content-elementhandleclickoptions" class="anchor" aria-hidden="true" href="#elementhandleclickoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.click([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>button</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; <code>left</code>, <code>right</code>, or <code>middle</code>, defaults to <code>left</code>.</li>
<li><code>clickCount</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; defaults to 1. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail" title="UIEvent.detail" rel="nofollow">UIEvent.detail</a>.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>mousedown</code> and <code>mouseup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element is successfully clicked. Promise gets rejected if the element is detached from DOM.</li>
</ul>
<p>This method scrolls element into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to click in the center of the element.
If the element is detached from DOM, the method throws an error.</p>
<h4><a id="user-content-elementhandlecontentframe" class="anchor" aria-hidden="true" href="#elementhandlecontentframe"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.contentFrame()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-frame" title="Frame">Frame</a>&gt;&gt; Resolves to the content frame for element handles referencing iframe nodes, or null otherwise</li>
</ul>
<h4><a id="user-content-elementhandledispose" class="anchor" aria-hidden="true" href="#elementhandledispose"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.dispose()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element handle is successfully disposed.</li>
</ul>
<p>The <code>elementHandle.dispose</code> method stops referencing the element handle.</p>
<h4><a id="user-content-elementhandleexecutioncontext" class="anchor" aria-hidden="true" href="#elementhandleexecutioncontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.executionContext()</h4>
<ul>
<li>returns: <a href="#class-executioncontext" title="ExecutionContext">ExecutionContext</a></li>
</ul>
<h4><a id="user-content-elementhandlefocus" class="anchor" aria-hidden="true" href="#elementhandlefocus"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.focus()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Calls <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus" rel="nofollow">focus</a> on the element.</p>
<h4><a id="user-content-elementhandlegetproperties" class="anchor" aria-hidden="true" href="#elementhandlegetproperties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.getProperties()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" title="Map" rel="nofollow">Map</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>, <a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt;&gt;</li>
</ul>
<p>The method returns a map with property names as keys and JSHandle instances for the property values.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">listHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">evaluateHandle</span>(() <span class="pl-k">=&gt;</span> <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-smi">children</span>);
<span class="pl-k">const</span> <span class="pl-c1">properties</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">listHandle</span>.<span class="pl-en">getProperties</span>();
<span class="pl-k">const</span> <span class="pl-c1">children</span> <span class="pl-k">=</span> [];
<span class="pl-k">for</span> (<span class="pl-k">const</span> <span class="pl-c1">property</span> <span class="pl-k">of</span> <span class="pl-smi">properties</span>.<span class="pl-c1">values</span>()) {
  <span class="pl-k">const</span> <span class="pl-c1">element</span> <span class="pl-k">=</span> <span class="pl-smi">property</span>.<span class="pl-en">asElement</span>();
  <span class="pl-k">if</span> (element)
    <span class="pl-smi">children</span>.<span class="pl-c1">push</span>(element);
}
children; <span class="pl-c"><span class="pl-c">//</span> holds elementHandles to all children of document.body</span></pre></div>
<h4><a id="user-content-elementhandlegetpropertypropertyname" class="anchor" aria-hidden="true" href="#elementhandlegetpropertypropertyname"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.getProperty(propertyName)</h4>
<ul>
<li><code>propertyName</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; property to get</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-jshandle" title="JSHandle">JSHandle</a>&gt;&gt;</li>
</ul>
<p>Fetches a single property from the objectHandle.</p>
<h4><a id="user-content-elementhandlehover" class="anchor" aria-hidden="true" href="#elementhandlehover"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.hover()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element is successfully hovered.</li>
</ul>
<p>This method scrolls element into view if needed, and then uses <a href="#pagemouse">page.mouse</a> to hover over the center of the element.
If the element is detached from DOM, the method throws an error.</p>
<h4><a id="user-content-elementhandlejsonvalue" class="anchor" aria-hidden="true" href="#elementhandlejsonvalue"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.jsonValue()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;</li>
</ul>
<p>Returns a JSON representation of the object. The JSON is generated by running <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="nofollow"><code>JSON.stringify</code></a> on the object in page and consequent <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" rel="nofollow"><code>JSON.parse</code></a> in puppeteer.</p>
<blockquote>
<p><strong>NOTE</strong> The method will throw if the referenced object is not stringifiable.</p>
</blockquote>
<h4><a id="user-content-elementhandlepresskey-options" class="anchor" aria-hidden="true" href="#elementhandlepresskey-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.press(key[, options])</h4>
<ul>
<li><code>key</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of key to press, such as <code>ArrowLeft</code>. See <a href="/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js" title="USKeyboardLayout">USKeyboardLayout</a> for a list of all key names.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If specified, generates an input event with this text.</li>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between <code>keydown</code> and <code>keyup</code> in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Focuses the element, and then uses <a href="#keyboarddownkey-options"><code>keyboard.down</code></a> and <a href="#keyboardupkey"><code>keyboard.up</code></a>.</p>
<p>If <code>key</code> is a single character and no modifier keys besides <code>Shift</code> are being held down, a <code>keypress</code>/<code>input</code> event will also be generated. The <code>text</code> option can be specified to force an input event to be generated.</p>
<blockquote>
<p><strong>NOTE</strong> Modifier keys DO effect <code>elementHandle.press</code>. Holding down <code>Shift</code> will type the text in upper case.</p>
</blockquote>
<h4><a id="user-content-elementhandlescreenshotoptions" class="anchor" aria-hidden="true" href="#elementhandlescreenshotoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.screenshot([options])</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Same options as in <a href="#pagescreenshotoptions">page.screenshot</a>.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://nodejs.org/api/buffer.html#buffer_class_buffer" title="Buffer" rel="nofollow">Buffer</a>&gt;&gt; Promise which resolves to buffer with captured screenshot.</li>
</ul>
<p>This method scrolls element into view if needed, and then uses <a href="#pagescreenshotoptions">page.screenshot</a> to take a screenshot of the element.
If the element is detached from DOM, the method throws an error.</p>
<h4><a id="user-content-elementhandletap" class="anchor" aria-hidden="true" href="#elementhandletap"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.tap()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise which resolves when the element is successfully tapped. Promise gets rejected if the element is detached from DOM.</li>
</ul>
<p>This method scrolls element into view if needed, and then uses <a href="#touchscreentapx-y">touchscreen.tap</a> to tap in the center of the element.
If the element is detached from DOM, the method throws an error.</p>
<h4><a id="user-content-elementhandletostring" class="anchor" aria-hidden="true" href="#elementhandletostring"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.toString()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<h4><a id="user-content-elementhandletypetext-options" class="anchor" aria-hidden="true" href="#elementhandletypetext-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.type(text[, options])</h4>
<ul>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A text to type into a focused element.</li>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;
<ul>
<li><code>delay</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Time to wait between key presses in milliseconds. Defaults to 0.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Focuses the element, and then sends a <code>keydown</code>, <code>keypress</code>/<code>input</code>, and <code>keyup</code> event for each character in the text.</p>
<p>To press a special key, like <code>Control</code> or <code>ArrowDown</code>, use <a href="#elementhandlepresskey-options"><code>elementHandle.press</code></a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">elementHandle</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>Hello<span class="pl-pds">'</span></span>); <span class="pl-c"><span class="pl-c">//</span> Types instantly</span>
<span class="pl-smi">elementHandle</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>World<span class="pl-pds">'</span></span>, {delay<span class="pl-k">:</span> <span class="pl-c1">100</span>}); <span class="pl-c"><span class="pl-c">//</span> Types slower, like a user</span></pre></div>
<p>An example of typing into a text field and then submitting the form:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">elementHandle</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">elementHandle</span>.<span class="pl-c1">type</span>(<span class="pl-s"><span class="pl-pds">'</span>some text<span class="pl-pds">'</span></span>);
<span class="pl-k">await</span> <span class="pl-smi">elementHandle</span>.<span class="pl-en">press</span>(<span class="pl-s"><span class="pl-pds">'</span>Enter<span class="pl-pds">'</span></span>);</pre></div>
<h4><a id="user-content-elementhandleuploadfilefilepaths" class="anchor" aria-hidden="true" href="#elementhandleuploadfilefilepaths"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>elementHandle.uploadFile(...filePaths)</h4>
<ul>
<li><code>...filePaths</code> &lt;...<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Sets the value of the file input these paths. If some of the  <code>filePaths</code> are relative paths, then they are resolved relative to <a href="https://nodejs.org/api/process.html#process_process_cwd" rel="nofollow">current working directory</a>.</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>This method expects <code>elementHandle</code> to point to an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" rel="nofollow">input element</a>.</p>
<h3><a id="user-content-class-request" class="anchor" aria-hidden="true" href="#class-request"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Request</h3>
<p>Whenever the page sends a request, such as for a network resource, the following events are emitted by puppeteer's page:</p>
<ul>
<li><a href="#event-request">'request'</a> emitted when the request is issued by the page.</li>
<li><a href="#event-response">'response'</a> emitted when/if the response is received for the request.</li>
<li><a href="#event-requestfinished">'requestfinished'</a> emitted when the response body is downloaded and the request is complete.</li>
</ul>
<p>If request fails at some point, then instead of 'requestfinished' event (and possibly instead of 'response' event), the  <a href="#event-requestfailed">'requestfailed'</a> event is emitted.</p>
<p>If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url.</p>
<h4><a id="user-content-requestaborterrorcode" class="anchor" aria-hidden="true" href="#requestaborterrorcode"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.abort([errorCode])</h4>
<ul>
<li><code>errorCode</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Optional error code. Defaults to <code>failed</code>, could be
one of the following:
<ul>
<li><code>aborted</code> - An operation was aborted (due to user action)</li>
<li><code>accessdenied</code> - Permission to access a resource, other than the network, was denied</li>
<li><code>addressunreachable</code> - The IP address is unreachable. This usually means
that there is no route to the specified host or network.</li>
<li><code>blockedbyclient</code> - The client chose to block the request.</li>
<li><code>blockedbyresponse</code> - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance).</li>
<li><code>connectionaborted</code> - A connection timed out as a result of not receiving an ACK for data sent.</li>
<li><code>connectionclosed</code> - A connection was closed (corresponding to a TCP FIN).</li>
<li><code>connectionfailed</code> - A connection attempt failed.</li>
<li><code>connectionrefused</code> - A connection attempt was refused.</li>
<li><code>connectionreset</code> - A connection was reset (corresponding to a TCP RST).</li>
<li><code>internetdisconnected</code> - The Internet connection has been lost.</li>
<li><code>namenotresolved</code> - The host name could not be resolved.</li>
<li><code>timedout</code> - An operation timed out.</li>
<li><code>failed</code> - A generic failure occurred.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Aborts request. To use this, request interception should be enabled with <code>page.setRequestInterception</code>.
Exception is immediately thrown if the request interception is not enabled.</p>
<h4><a id="user-content-requestcontinueoverrides" class="anchor" aria-hidden="true" href="#requestcontinueoverrides"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.continue([overrides])</h4>
<ul>
<li><code>overrides</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional request overwrites, which can be one of the following:
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If set, the request url will be changed</li>
<li><code>method</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If set changes the request method (e.g. <code>GET</code> or <code>POST</code>)</li>
<li><code>postData</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If set changes the post data of request</li>
<li><code>headers</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; If set changes the request HTTP headers</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Continues request with optional request overrides. To use this, request interception should be enabled with <code>page.setRequestInterception</code>.
Exception is immediately thrown if the request interception is not enabled.</p>
<h4><a id="user-content-requestfailure" class="anchor" aria-hidden="true" href="#requestfailure"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.failure()</h4>
<ul>
<li>returns: &lt;?<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Object describing request failure, if any
<ul>
<li><code>errorText</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Human-readable error message, e.g. <code>'net::ERR_FAILED'</code>.</li>
</ul>
</li>
</ul>
<p>The method returns <code>null</code> unless this request was failed, as reported by
<code>requestfailed</code> event.</p>
<p>Example of logging all failed requests:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>requestfailed<span class="pl-pds">'</span></span>, <span class="pl-smi">request</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">request</span>.<span class="pl-en">url</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">request</span>.<span class="pl-en">failure</span>().<span class="pl-smi">errorText</span>);
});</pre></div>
<h4><a id="user-content-requestframe" class="anchor" aria-hidden="true" href="#requestframe"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.frame()</h4>
<ul>
<li>returns: &lt;?<a href="#class-frame" title="Frame">Frame</a>&gt; A matching <a href="#class-frame" title="Frame">Frame</a> object, or <code>null</code> if navigating to error pages.</li>
</ul>
<h4><a id="user-content-requestheaders" class="anchor" aria-hidden="true" href="#requestheaders"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.headers()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; An object with HTTP headers associated with the request. All header names are lower-case.</li>
</ul>
<h4><a id="user-content-requestisnavigationrequest" class="anchor" aria-hidden="true" href="#requestisnavigationrequest"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.isNavigationRequest()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>Whether this request is driving frame's navigation.</p>
<h4><a id="user-content-requestmethod" class="anchor" aria-hidden="true" href="#requestmethod"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.method()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Request's method (GET, POST, etc.)</li>
</ul>
<h4><a id="user-content-requestpostdata" class="anchor" aria-hidden="true" href="#requestpostdata"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.postData()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Request's post body, if any.</li>
</ul>
<h4><a id="user-content-requestredirectchain" class="anchor" aria-hidden="true" href="#requestredirectchain"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.redirectChain()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="#class-request" title="Request">Request</a>&gt;&gt;</li>
</ul>
<p>A <code>redirectChain</code> is a chain of requests initiated to fetch a resource.</p>
<ul>
<li>If there are no redirects and the request was successful, the chain will be empty.</li>
<li>If a server responds with at least a single redirect, then the chain will
contain all the requests that were redirected.</li>
</ul>
<p><code>redirectChain</code> is shared between all the requests of the same chain.</p>
<p>For example, if the website <code>http://example.com</code> has a single redirect to
<code>https://example.com</code>, then the chain will contain one request:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">response</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>http://example.com<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">chain</span> <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-en">request</span>().<span class="pl-en">redirectChain</span>();
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">chain</span>.<span class="pl-c1">length</span>); <span class="pl-c"><span class="pl-c">//</span> 1</span>
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(chain[<span class="pl-c1">0</span>].<span class="pl-en">url</span>()); <span class="pl-c"><span class="pl-c">//</span> 'http://example.com'</span></pre></div>
<p>If the website <code>https://google.com</code> has no redirects, then the chain will be empty:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">response</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">chain</span> <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-en">request</span>().<span class="pl-en">redirectChain</span>();
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">chain</span>.<span class="pl-c1">length</span>); <span class="pl-c"><span class="pl-c">//</span> 0</span></pre></div>
<h4><a id="user-content-requestresourcetype" class="anchor" aria-hidden="true" href="#requestresourcetype"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.resourceType()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>Contains the request's resource type as it was perceived by the rendering engine.
ResourceType will be one of the following: <code>document</code>, <code>stylesheet</code>, <code>image</code>, <code>media</code>, <code>font</code>, <code>script</code>, <code>texttrack</code>, <code>xhr</code>, <code>fetch</code>, <code>eventsource</code>, <code>websocket</code>, <code>manifest</code>, <code>other</code>.</p>
<h4><a id="user-content-requestrespondresponse" class="anchor" aria-hidden="true" href="#requestrespondresponse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.respond(response)</h4>
<ul>
<li><code>response</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Response that will fulfill this request
<ul>
<li><code>status</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; Response status code, defaults to <code>200</code>.</li>
<li><code>headers</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional response headers</li>
<li><code>contentType</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; If set, equals to setting <code>Content-Type</code> response header</li>
<li><code>body</code> &lt;<a href="https://nodejs.org/api/buffer.html#buffer_class_buffer" title="Buffer" rel="nofollow">Buffer</a>|<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Optional response body</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Fulfills request with given response. To use this, request interception should
be enabled with <code>page.setRequestInterception</code>. Exception is thrown if
request interception is not enabled.</p>
<p>An example of fulfilling all requests with 404 responses:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">setRequestInterception</span>(<span class="pl-c1">true</span>);
<span class="pl-smi">page</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>request<span class="pl-pds">'</span></span>, <span class="pl-smi">request</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-smi">request</span>.<span class="pl-en">respond</span>({
    status<span class="pl-k">:</span> <span class="pl-c1">404</span>,
    contentType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>text/plain<span class="pl-pds">'</span></span>,
    body<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Not Found!<span class="pl-pds">'</span></span>
  });
});</pre></div>
<blockquote>
<p><strong>NOTE</strong> Mocking responses for dataURL requests is not supported.
Calling <code>request.respond</code> for a dataURL request is a noop.</p>
</blockquote>
<h4><a id="user-content-requestresponse" class="anchor" aria-hidden="true" href="#requestresponse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.response()</h4>
<ul>
<li>returns: &lt;?<a href="#class-response" title="Response">Response</a>&gt; A matching <a href="#class-response" title="Response">Response</a> object, or <code>null</code> if the response has not been received yet.</li>
</ul>
<h4><a id="user-content-requesturl" class="anchor" aria-hidden="true" href="#requesturl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>request.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; URL of the request.</li>
</ul>
<h3><a id="user-content-class-response" class="anchor" aria-hidden="true" href="#class-response"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Response</h3>
<p><a href="#class-response" title="Response">Response</a> class represents responses which are received by page.</p>
<h4><a id="user-content-responsebuffer" class="anchor" aria-hidden="true" href="#responsebuffer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.buffer()</h4>
<ul>
<li>returns: &lt;Promise&lt;<a href="https://nodejs.org/api/buffer.html#buffer_class_buffer" title="Buffer" rel="nofollow">Buffer</a>&gt;&gt; Promise which resolves to a buffer with response body.</li>
</ul>
<h4><a id="user-content-responsefromcache" class="anchor" aria-hidden="true" href="#responsefromcache"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.fromCache()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>True if the response was served from either the browser's disk cache or memory cache.</p>
<h4><a id="user-content-responsefromserviceworker" class="anchor" aria-hidden="true" href="#responsefromserviceworker"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.fromServiceWorker()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>True if the response was served by a service worker.</p>
<h4><a id="user-content-responseheaders" class="anchor" aria-hidden="true" href="#responseheaders"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.headers()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; An object with HTTP headers associated with the response. All header names are lower-case.</li>
</ul>
<h4><a id="user-content-responsejson" class="anchor" aria-hidden="true" href="#responsejson"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.json()</h4>
<ul>
<li>returns: &lt;Promise&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Promise which resolves to a JSON representation of response body.</li>
</ul>
<p>This method will throw if the response body is not parsable via <code>JSON.parse</code>.</p>
<h4><a id="user-content-responseok" class="anchor" aria-hidden="true" href="#responseok"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.ok()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt;</li>
</ul>
<p>Contains a boolean stating whether the response was successful (status in the range 200-299) or not.</p>
<h4><a id="user-content-responserequest" class="anchor" aria-hidden="true" href="#responserequest"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.request()</h4>
<ul>
<li>returns: &lt;<a href="#class-request" title="Request">Request</a>&gt; A matching <a href="#class-request" title="Request">Request</a> object.</li>
</ul>
<h4><a id="user-content-responsesecuritydetails" class="anchor" aria-hidden="true" href="#responsesecuritydetails"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.securityDetails()</h4>
<ul>
<li>returns: &lt;?<a href="#class-securitydetails" title="SecurityDetails">SecurityDetails</a>&gt; Security details if the response was received over the secure connection, or <code>null</code> otherwise.</li>
</ul>
<h4><a id="user-content-responsestatus" class="anchor" aria-hidden="true" href="#responsestatus"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.status()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt;</li>
</ul>
<p>Contains the status code of the response (e.g., 200 for a success).</p>
<h4><a id="user-content-responsetext" class="anchor" aria-hidden="true" href="#responsetext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.text()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;&gt; Promise which resolves to a text representation of response body.</li>
</ul>
<h4><a id="user-content-responseurl" class="anchor" aria-hidden="true" href="#responseurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>response.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>Contains the URL of the response.</p>
<h3><a id="user-content-class-securitydetails" class="anchor" aria-hidden="true" href="#class-securitydetails"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: SecurityDetails</h3>
<p><a href="#class-securitydetails" title="SecurityDetails">SecurityDetails</a> class represents responses which are received by page.</p>
<h4><a id="user-content-securitydetailsissuer" class="anchor" aria-hidden="true" href="#securitydetailsissuer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>securityDetails.issuer()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; A string with the name of issuer of the certificate.</li>
</ul>
<h4><a id="user-content-securitydetailsprotocol" class="anchor" aria-hidden="true" href="#securitydetailsprotocol"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>securityDetails.protocol()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; String with the security protocol, eg. "TLS 1.2".</li>
</ul>
<h4><a id="user-content-securitydetailssubjectname" class="anchor" aria-hidden="true" href="#securitydetailssubjectname"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>securityDetails.subjectName()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Name of the subject to which the certificate was issued to.</li>
</ul>
<h4><a id="user-content-securitydetailsvalidfrom" class="anchor" aria-hidden="true" href="#securitydetailsvalidfrom"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>securityDetails.validFrom()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; <a href="https://en.wikipedia.org/wiki/Unix_time" title="Unix Time" rel="nofollow">UnixTime</a> stating the start of validity of the certificate.</li>
</ul>
<h4><a id="user-content-securitydetailsvalidto" class="anchor" aria-hidden="true" href="#securitydetailsvalidto"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>securityDetails.validTo()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; <a href="https://en.wikipedia.org/wiki/Unix_time" title="Unix Time" rel="nofollow">UnixTime</a> stating the end of validity of the certificate.</li>
</ul>
<h3><a id="user-content-class-target" class="anchor" aria-hidden="true" href="#class-target"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Target</h3>
<h4><a id="user-content-targetbrowser" class="anchor" aria-hidden="true" href="#targetbrowser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.browser()</h4>
<ul>
<li>returns: &lt;<a href="#class-browser" title="Browser">Browser</a>&gt;</li>
</ul>
<p>Get the browser the target belongs to.</p>
<h4><a id="user-content-targetbrowsercontext" class="anchor" aria-hidden="true" href="#targetbrowsercontext"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.browserContext()</h4>
<ul>
<li>returns: &lt;<a href="#class-browsercontext" title="BrowserContext">BrowserContext</a>&gt;</li>
</ul>
<p>The browser context the target belongs to.</p>
<h4><a id="user-content-targetcreatecdpsession" class="anchor" aria-hidden="true" href="#targetcreatecdpsession"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.createCDPSession()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="#class-cdpsession" title="CDPSession">CDPSession</a>&gt;&gt;</li>
</ul>
<p>Creates a Chrome Devtools Protocol session attached to the target.</p>
<h4><a id="user-content-targetopener" class="anchor" aria-hidden="true" href="#targetopener"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.opener()</h4>
<ul>
<li>returns: &lt;?<a href="#class-target" title="Target">Target</a>&gt;</li>
</ul>
<p>Get the target that opened this target. Top-level targets return <code>null</code>.</p>
<h4><a id="user-content-targetpage" class="anchor" aria-hidden="true" href="#targetpage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.page()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;?<a href="#class-page" title="Page">Page</a>&gt;&gt;</li>
</ul>
<p>If the target is not of type <code>"page"</code> or <code>"background_page"</code>, returns <code>null</code>.</p>
<h4><a id="user-content-targettype" class="anchor" aria-hidden="true" href="#targettype"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.type()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<p>Identifies what kind of target this is. Can be <code>"page"</code>, <a href="https://developer.chrome.com/extensions/background_pages" rel="nofollow"><code>"background_page"</code></a>, <code>"service_worker"</code>, <code>"browser"</code> or <code>"other"</code>.</p>
<h4><a id="user-content-targeturl" class="anchor" aria-hidden="true" href="#targeturl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>target.url()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt;</li>
</ul>
<h3><a id="user-content-class-cdpsession" class="anchor" aria-hidden="true" href="#class-cdpsession"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: CDPSession</h3>
<ul>
<li>extends: <a href="https://nodejs.org/api/events.html#events_class_eventemitter" rel="nofollow"><code>EventEmitter</code></a></li>
</ul>
<p>The <code>CDPSession</code> instances are used to talk raw Chrome Devtools Protocol:</p>
<ul>
<li>protocol methods can be called with <code>session.send</code> method.</li>
<li>protocol events can be subscribed to with <code>session.on</code> method.</li>
</ul>
<p>Documentation on DevTools Protocol can be found here: <a href="https://chromedevtools.github.io/devtools-protocol/" rel="nofollow">DevTools Protocol Viewer</a>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">client</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-c1">target</span>().<span class="pl-en">createCDPSession</span>();
<span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-c1">send</span>(<span class="pl-s"><span class="pl-pds">'</span>Animation.enable<span class="pl-pds">'</span></span>);
<span class="pl-smi">client</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>Animation.animationCreated<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Animation created!<span class="pl-pds">'</span></span>));
<span class="pl-k">const</span> <span class="pl-c1">response</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-c1">send</span>(<span class="pl-s"><span class="pl-pds">'</span>Animation.getPlaybackRate<span class="pl-pds">'</span></span>);
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>playback rate is <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">response</span>.<span class="pl-smi">playbackRate</span>);
<span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-c1">send</span>(<span class="pl-s"><span class="pl-pds">'</span>Animation.setPlaybackRate<span class="pl-pds">'</span></span>, {
  playbackRate<span class="pl-k">:</span> <span class="pl-smi">response</span>.<span class="pl-smi">playbackRate</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>
});</pre></div>
<h4><a id="user-content-cdpsessiondetach" class="anchor" aria-hidden="true" href="#cdpsessiondetach"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cdpSession.detach()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt;</li>
</ul>
<p>Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used
to send messages.</p>
<h4><a id="user-content-cdpsessionsendmethod-params" class="anchor" aria-hidden="true" href="#cdpsessionsendmethod-params"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cdpSession.send(method[, params])</h4>
<ul>
<li><code>method</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; protocol method name</li>
<li><code>params</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt; Optional method parameters</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;</li>
</ul>
<h3><a id="user-content-class-coverage" class="anchor" aria-hidden="true" href="#class-coverage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>class: Coverage</h3>
<p>Coverage gathers information about parts of JavaScript and CSS that were used by the page.</p>
<p>An example of using JavaScript and CSS coverage to get percentage of initially
executed code:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Enable both JavaScript and CSS coverage</span>
<span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
  <span class="pl-smi">page</span>.<span class="pl-smi">coverage</span>.<span class="pl-en">startJSCoverage</span>(),
  <span class="pl-smi">page</span>.<span class="pl-smi">coverage</span>.<span class="pl-en">startCSSCoverage</span>()
]);
<span class="pl-c"><span class="pl-c">//</span> Navigate to page</span>
<span class="pl-k">await</span> <span class="pl-smi">page</span>.<span class="pl-en">goto</span>(<span class="pl-s"><span class="pl-pds">'</span>https://example.com<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> Disable both JavaScript and CSS coverage</span>
<span class="pl-k">const</span> [<span class="pl-c1">jsCoverage</span>, <span class="pl-c1">cssCoverage</span>] <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>([
  <span class="pl-smi">page</span>.<span class="pl-smi">coverage</span>.<span class="pl-en">stopJSCoverage</span>(),
  <span class="pl-smi">page</span>.<span class="pl-smi">coverage</span>.<span class="pl-en">stopCSSCoverage</span>(),
]);
<span class="pl-k">let</span> totalBytes <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-k">let</span> usedBytes <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-k">const</span> <span class="pl-c1">coverage</span> <span class="pl-k">=</span> [<span class="pl-k">...</span>jsCoverage, <span class="pl-k">...</span>cssCoverage];
<span class="pl-k">for</span> (<span class="pl-k">const</span> <span class="pl-c1">entry</span> <span class="pl-k">of</span> coverage) {
  totalBytes <span class="pl-k">+=</span> <span class="pl-smi">entry</span>.<span class="pl-c1">text</span>.<span class="pl-c1">length</span>;
  <span class="pl-k">for</span> (<span class="pl-k">const</span> <span class="pl-c1">range</span> <span class="pl-k">of</span> <span class="pl-smi">entry</span>.<span class="pl-smi">ranges</span>)
    usedBytes <span class="pl-k">+=</span> <span class="pl-smi">range</span>.<span class="pl-smi">end</span> <span class="pl-k">-</span> <span class="pl-smi">range</span>.<span class="pl-c1">start</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;
}
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">`</span>Bytes used: <span class="pl-s1"><span class="pl-pse">${</span>usedBytes <span class="pl-k">/</span> totalBytes <span class="pl-k">*</span> <span class="pl-c1">100</span><span class="pl-pse">}</span></span>%<span class="pl-pds">`</span></span>);</pre></div>
<p><em>To output coverage in a form consumable by <a href="https://github.com/istanbuljs">Istanbul</a>,
see <a href="https://github.com/istanbuljs/puppeteer-to-istanbul">puppeteer-to-istanbul</a>.</em></p>
<h4><a id="user-content-coveragestartcsscoverageoptions" class="anchor" aria-hidden="true" href="#coveragestartcsscoverageoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>coverage.startCSSCoverage(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;  Set of configurable options for coverage
<ul>
<li><code>resetOnNavigation</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to reset coverage on every navigation. Defaults to <code>true</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise that resolves when coverage is started</li>
</ul>
<h4><a id="user-content-coveragestartjscoverageoptions" class="anchor" aria-hidden="true" href="#coveragestartjscoverageoptions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>coverage.startJSCoverage(options)</h4>
<ul>
<li><code>options</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;  Set of configurable options for coverage
<ul>
<li><code>resetOnNavigation</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="Boolean" rel="nofollow">boolean</a>&gt; Whether to reset coverage on every navigation. Defaults to <code>true</code>.</li>
</ul>
</li>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&gt; Promise that resolves when coverage is started</li>
</ul>
<h4><a id="user-content-coveragestopcsscoverage" class="anchor" aria-hidden="true" href="#coveragestopcsscoverage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>coverage.stopCSSCoverage()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;&gt; Promise that resolves to the array of coverage reports for all stylesheets
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; StyleSheet URL</li>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; StyleSheet content</li>
<li><code>ranges</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; StyleSheet ranges that were used. Ranges are sorted and non-overlapping.
<ul>
<li><code>start</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; A start offset in text, inclusive</li>
<li><code>end</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; An end offset in text, exclusive</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> CSS Coverage doesn't include dynamically injected style tags without sourceURLs.</p>
</blockquote>
<h4><a id="user-content-coveragestopjscoverage" class="anchor" aria-hidden="true" href="#coveragestopjscoverage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>coverage.stopJSCoverage()</h4>
<ul>
<li>returns: &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="Promise" rel="nofollow">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt;&gt; Promise that resolves to the array of coverage reports for all non-anonymous scripts
<ul>
<li><code>url</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Script URL</li>
<li><code>text</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="String" rel="nofollow">string</a>&gt; Script content</li>
<li><code>ranges</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array" rel="nofollow">Array</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object" rel="nofollow">Object</a>&gt;&gt; Script ranges that were executed. Ranges are sorted and non-overlapping.
<ul>
<li><code>start</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; A start offset in text, inclusive</li>
<li><code>end</code> &lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="Number" rel="nofollow">number</a>&gt; An end offset in text, exclusive</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>NOTE</strong> JavaScript Coverage doesn't include anonymous scripts. However, scripts with sourceURLs are
reported.</p>
</blockquote>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.43338s from unicorn-79bfdf96b6-pg8v2">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-LB1tzJRQ5uPC9BeR2Mb4TOIBPBxMXSM2p2+WgU7lLEdqAe7TptfwpDfDqfAnWlC2aw7FoJcKQxqDyjulVPpIbw==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-ad697dde9ac7f691157024c54b447026.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-8qkN5nPs48CxqTEdqTT6gOXNwtp3t/A//DFGt0Jpd01OnoSXPbxZWdKRqOsT0apIGG3sIZM26LN/QEfIN4/P3A==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-d67f402c83d6107915407c5ea9d2dceb.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

