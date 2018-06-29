





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
  
  <title>puppeteer/troubleshooting.md at master · GoogleChrome/puppeteer</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/1778935?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="GoogleChrome/puppeteer" /><meta property="og:url" content="https://github.com/GoogleChrome/puppeteer" /><meta property="og:description" content="puppeteer - Headless Chrome Node API" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjkxMjk0MjQxOjI3OThmZjgxOWQzZjQ3YTIxYzA3YjUzYTA2M2Q5NDExN2Y2NGI3NzI2YmRlNDMzM2YyMGI1ZGM1NmFhN2IzYzk=--7585237f24ff5e9627ff8af2f260f4fd90bc3bee">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F14A:61E2:626C4:99A21:5B3676F9" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F14A:61E2:626C4:99A21:5B3676F9" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="6082443" /><meta name="octolytics-actor-login" content="MarkKozel" /><meta name="octolytics-actor-hash" content="99a5b041cc82ce522aa61195c6b73ac5a4ae479b81488fa278595a9528347197" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




<meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="MarkKozel">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MTNkYWVkNTQ5OTJkYjk2Y2MxODEzZGRhZDdhZjE3ZDY4MGYxMTJiZWViYTYxN2JhMTY5NWE1MjE5YTRiYzE2MHx7InJlbW90ZV9hZGRyZXNzIjoiMTczLjIzOS4yMjguNDkiLCJyZXF1ZXN0X2lkIjoiRjE0QTo2MUUyOjYyNkM0Ojk5QTIxOjVCMzY3NkY5IiwidGltZXN0YW1wIjoxNTMwMjk2MDY0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SEARCH,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="c24f4a527ef5e56783353831663e648a5a9b27aa">

  <meta http-equiv="x-pjax-version" content="b97cc4d9c54fcaf9b56fd892d62c951a">
  

      <link href="https://github.com/GoogleChrome/puppeteer/commits/master.atom" rel="alternate" title="Recent Commits to puppeteer:master" type="application/atom+xml">

  <meta name="description" content="puppeteer - Headless Chrome Node API">
  <meta name="go-import" content="github.com/GoogleChrome/puppeteer git https://github.com/GoogleChrome/puppeteer.git">

  <meta name="octolytics-dimension-user_id" content="1778935" /><meta name="octolytics-dimension-user_login" content="GoogleChrome" /><meta name="octolytics-dimension-repository_id" content="90796663" /><meta name="octolytics-dimension-repository_nwo" content="GoogleChrome/puppeteer" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="90796663" /><meta name="octolytics-dimension-repository_network_root_nwo" content="GoogleChrome/puppeteer" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md" data-pjax-transient>


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
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=FfDOfb3bBEUieNL6pVTpJ7z022mwlxSQDrI/8zKraAu5kBYPxCugrp8H/PmUQBa4KidoeN6ni6Y9FIlEJ4pM5g=="
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="qgdiNWXBa+FqAiV3eNuc0WJ2dM5H7QHf50/GqHRvkbnrXNRaN7VBGeX7fOxVJYRl0rHMuCFc4ggMsahzqnBZUQ==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="M4Vc7T7HbJ4328vcVWmrgsFuLkhXvZSBNtrv1w4XdKNy3uqCbLNGZrgikkd4l7M2camWPjEMd1bdJIEM0Ai8Sw==" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="y0Y2AWyvs2uktjz5AerT6BuMZl860rTY5c3QfkwQZtiIzc2tZvX7FKRf2AMs31OQriSyCQL+CaUQxMm7HMAB7A==" />      <input type="hidden" name="repository_id" id="repository_id" value="90796663" class="form-control" />

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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/GoogleChrome/puppeteer/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="xAU8xg3scn44163Q4eKsay0ptKxhWY6BHVZdxq5OZRn0hXabmXHD56JvUjN3JqEFFy4moYlwAIxx/AiJCLgc+A==" />
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/GoogleChrome/puppeteer/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="TZ/E9NqRK7q4jbtzsczTgZQtA95/29a5c35j6pyyW2WF/UGVr/qbTmtr8milKlFKiLVQYZlx4JeSLhb/OHwfrA==" />
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
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/GoogleChrome/puppeteer/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="lxxH5Bm8xG/C53bdA2ZgRSyZuc5KqfDikMLpA31/jA+OqPZFyhP1af0nNaO7LB9Rejk2PQxoB049qmys+7ti2w==" />
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

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/GoogleChrome/puppeteer/blob/59e7f7ebb61030cd8462d29b8960c93114199540/docs/troubleshooting.md">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:3c0c0046f5736b0f669afd464adb19a0 -->

  

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
               href="/GoogleChrome/puppeteer/blob/aslushnikov-update-api/docs/troubleshooting.md"
               data-name="aslushnikov-update-api"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                aslushnikov-update-api
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md"
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
              href="/GoogleChrome/puppeteer/tree/v1.5.0/docs/troubleshooting.md"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.4.0/docs/troubleshooting.md"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.3.0/docs/troubleshooting.md"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.2.0/docs/troubleshooting.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.1.1/docs/troubleshooting.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.1.0/docs/troubleshooting.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v1.0.0/docs/troubleshooting.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.13.0/docs/troubleshooting.md"
              data-name="v0.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.13.0">
                v0.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.12.0/docs/troubleshooting.md"
              data-name="v0.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.0">
                v0.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.11.0/docs/troubleshooting.md"
              data-name="v0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.0">
                v0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.2/docs/troubleshooting.md"
              data-name="v0.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.2">
                v0.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.1/docs/troubleshooting.md"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.10.0/docs/troubleshooting.md"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/GoogleChrome/puppeteer/tree/v0.9.0/docs/troubleshooting.md"
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
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/GoogleChrome/puppeteer"><span>puppeteer</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/GoogleChrome/puppeteer/tree/master/docs"><span>docs</span></a></span><span class="separator">/</span><strong class="final-path">troubleshooting.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/GoogleChrome/puppeteer/commit/de82b87cfa1c637787a09b90266318905ae16f42" data-pjax>
          de82b87
        </a>
        <relative-time datetime="2018-05-16T21:55:27Z">May 16, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-user-id="24255804" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MatejMecka"><img class="avatar" src="https://avatars2.githubusercontent.com/u/24255804?s=40&amp;v=4" width="20" height="20" alt="@MatejMecka" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-user-id="24255804" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MatejMecka">MatejMecka</a>
          <a data-pjax="true" title="docs(documentation) capitalize and end sentences (#2537)" class="message" href="/GoogleChrome/puppeteer/commit/de82b87cfa1c637787a09b90266318905ae16f42">docs(documentation) capitalize and end sentences (</a><a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="322414153" data-permission-text="Issue title is private" data-url="https://github.com/GoogleChrome/puppeteer/issues/2537" href="https://github.com/GoogleChrome/puppeteer/pull/2537">#2537</a><a data-pjax="true" title="docs(documentation) capitalize and end sentences (#2537)" class="message" href="/GoogleChrome/puppeteer/commit/de82b87cfa1c637787a09b90266318905ae16f42">)</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>15</strong>
         contributors
      </button>
          <a class="avatar-link" data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=ebidel">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/238208?s=40&amp;v=4" width="20" height="20" alt="@ebidel" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=aslushnikov">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/746130?s=40&amp;v=4" width="20" height="20" alt="@aslushnikov" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=vsemozhetbyt">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/10393198?s=40&amp;v=4" width="20" height="20" alt="@vsemozhetbyt" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="686101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=tlenclos">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/686101?s=40&amp;v=4" width="20" height="20" alt="@tlenclos" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1711910" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=timleland">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/1711910?s=40&amp;v=4" width="20" height="20" alt="@timleland" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="5096640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=paulshibanov">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/5096640?s=40&amp;v=4" width="20" height="20" alt="@paulshibanov" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="139760" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=gauntface">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/139760?s=40&amp;v=4" width="20" height="20" alt="@gauntface" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="24255804" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=MatejMecka">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/24255804?s=40&amp;v=4" width="20" height="20" alt="@MatejMecka" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2096101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=Kikobeats">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/2096101?s=40&amp;v=4" width="20" height="20" alt="@Kikobeats" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3970573" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=jontewks">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/3970573?s=40&amp;v=4" width="20" height="20" alt="@jontewks" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="8836231" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=jonknapp">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/8836231?s=40&amp;v=4" width="20" height="20" alt="@jonknapp" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=JoelEinbinder">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/4624233?s=40&amp;v=4" width="20" height="20" alt="@JoelEinbinder" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=Glennvd">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/3950497?s=40&amp;v=4" width="20" height="20" alt="@Glennvd" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1740822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=MercifulCode">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/1740822?s=40&amp;v=4" width="20" height="20" alt="@MercifulCode" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="2193706" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md?author=andy2046">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/2193706?s=40&amp;v=4" width="20" height="20" alt="@andy2046" /> 
</a>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ebidel"><img src="https://avatars2.githubusercontent.com/u/238208?s=48&amp;v=4" width="24" height="24" alt="@ebidel" /></a>
            <a data-hovercard-user-id="238208" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ebidel">ebidel</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aslushnikov"><img src="https://avatars0.githubusercontent.com/u/746130?s=48&amp;v=4" width="24" height="24" alt="@aslushnikov" /></a>
            <a data-hovercard-user-id="746130" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/aslushnikov">aslushnikov</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vsemozhetbyt"><img src="https://avatars2.githubusercontent.com/u/10393198?s=48&amp;v=4" width="24" height="24" alt="@vsemozhetbyt" /></a>
            <a data-hovercard-user-id="10393198" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vsemozhetbyt">vsemozhetbyt</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="686101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tlenclos"><img src="https://avatars2.githubusercontent.com/u/686101?s=48&amp;v=4" width="24" height="24" alt="@tlenclos" /></a>
            <a data-hovercard-user-id="686101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/tlenclos">tlenclos</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1711910" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/timleland"><img src="https://avatars0.githubusercontent.com/u/1711910?s=48&amp;v=4" width="24" height="24" alt="@timleland" /></a>
            <a data-hovercard-user-id="1711910" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/timleland">timleland</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5096640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/paulshibanov"><img src="https://avatars0.githubusercontent.com/u/5096640?s=48&amp;v=4" width="24" height="24" alt="@paulshibanov" /></a>
            <a data-hovercard-user-id="5096640" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/paulshibanov">paulshibanov</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="139760" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/gauntface"><img src="https://avatars1.githubusercontent.com/u/139760?s=48&amp;v=4" width="24" height="24" alt="@gauntface" /></a>
            <a data-hovercard-user-id="139760" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/gauntface">gauntface</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="24255804" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MatejMecka"><img src="https://avatars3.githubusercontent.com/u/24255804?s=48&amp;v=4" width="24" height="24" alt="@MatejMecka" /></a>
            <a data-hovercard-user-id="24255804" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MatejMecka">MatejMecka</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2096101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Kikobeats"><img src="https://avatars2.githubusercontent.com/u/2096101?s=48&amp;v=4" width="24" height="24" alt="@Kikobeats" /></a>
            <a data-hovercard-user-id="2096101" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Kikobeats">Kikobeats</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3970573" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jontewks"><img src="https://avatars0.githubusercontent.com/u/3970573?s=48&amp;v=4" width="24" height="24" alt="@jontewks" /></a>
            <a data-hovercard-user-id="3970573" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jontewks">jontewks</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="8836231" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jonknapp"><img src="https://avatars3.githubusercontent.com/u/8836231?s=48&amp;v=4" width="24" height="24" alt="@jonknapp" /></a>
            <a data-hovercard-user-id="8836231" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jonknapp">jonknapp</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JoelEinbinder"><img src="https://avatars2.githubusercontent.com/u/4624233?s=48&amp;v=4" width="24" height="24" alt="@JoelEinbinder" /></a>
            <a data-hovercard-user-id="4624233" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/JoelEinbinder">JoelEinbinder</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Glennvd"><img src="https://avatars2.githubusercontent.com/u/3950497?s=48&amp;v=4" width="24" height="24" alt="@Glennvd" /></a>
            <a data-hovercard-user-id="3950497" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Glennvd">Glennvd</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1740822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MercifulCode"><img src="https://avatars3.githubusercontent.com/u/1740822?s=48&amp;v=4" width="24" height="24" alt="@MercifulCode" /></a>
            <a data-hovercard-user-id="1740822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/MercifulCode">MercifulCode</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="2193706" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/andy2046"><img src="https://avatars0.githubusercontent.com/u/2193706?s=48&amp;v=4" width="24" height="24" alt="@andy2046" /></a>
            <a data-hovercard-user-id="2193706" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/andy2046">andy2046</a>
          </li>
      </ul>
    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/GoogleChrome/puppeteer/raw/master/docs/troubleshooting.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/GoogleChrome/puppeteer/blame/master/docs/troubleshooting.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/GoogleChrome/puppeteer/commits/master/docs/troubleshooting.md">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/GoogleChrome/puppeteer?branch=master&amp;filepath=docs%2Ftroubleshooting.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/GoogleChrome/puppeteer/edit/master/docs/troubleshooting.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="yNQLfyKRGD+WkAkRzRHspueer7N+W0plSUMz/lSFVXGWjQxdYXqDN05AEAf4jswlTF7X4qzL09au/h4nJ2/dyg==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/GoogleChrome/puppeteer/delete/master/docs/troubleshooting.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="iSkyBujraUYGLszUwj+258NrNtjPLqlqqn3HTLF3jEDJ9DHgLMwZWWb3YikREKZjZM3kQNaSJn8aSSuOdEX74A==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      262 lines (204 sloc)
      <span class="file-info-divider"></span>
    8.65 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-troubleshooting" class="anchor" aria-hidden="true" href="#troubleshooting"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h1>
<h2><a id="user-content-chrome-headless-doesnt-launch" class="anchor" aria-hidden="true" href="#chrome-headless-doesnt-launch"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chrome headless doesn't launch</h2>
<p>Make sure all the necessary dependencies are installed. You can run <code>ldd chrome | grep not</code> on a Linux
machine to check which dependencies are missing. The common ones are provided below.</p>
<details>
<summary>Debian (e.g. Ubuntu) Dependencies</summary>
<pre><code>gconf-service
libasound2
libatk1.0-0
libc6
libcairo2
libcups2
libdbus-1-3
libexpat1
libfontconfig1
libgcc1
libgconf-2-4
libgdk-pixbuf2.0-0
libglib2.0-0
libgtk-3-0
libnspr4
libpango-1.0-0
libpangocairo-1.0-0
libstdc++6
libx11-6
libx11-xcb1
libxcb1
libxcomposite1
libxcursor1
libxdamage1
libxext6
libxfixes3
libxi6
libxrandr2
libxrender1
libxss1
libxtst6
ca-certificates
fonts-liberation
libappindicator1
libnss3
lsb-release
xdg-utils
wget
</code></pre>
</details>
<details>
<summary>CentOS Dependencies</summary>
<pre><code>pango.x86_64
libXcomposite.x86_64
libXcursor.x86_64
libXdamage.x86_64
libXext.x86_64
libXi.x86_64
libXtst.x86_64
cups-libs.x86_64
libXScrnSaver.x86_64
libXrandr.x86_64
GConf2.x86_64
alsa-lib.x86_64
atk.x86_64
gtk3.x86_64
ipa-gothic-fonts
xorg-x11-fonts-100dpi
xorg-x11-fonts-75dpi
xorg-x11-utils
xorg-x11-fonts-cyrillic
xorg-x11-fonts-Type1
xorg-x11-fonts-misc
</code></pre>
</details>
<ul>
<li>Check out discussions:
<ul>
<li><a href="https://github.com/GoogleChrome/puppeteer/issues/290">#290</a> - Debian troubleshooting</li>
<li><a href="https://github.com/GoogleChrome/puppeteer/issues/391">#391</a> - CentOS troubleshooting</li>
<li><a href="https://github.com/GoogleChrome/puppeteer/issues/379">#379</a> - Alpine troubleshooting</li>
</ul>
</li>
</ul>
<h2><a id="user-content-chrome-headless-fails-due-to-sandbox-issues" class="anchor" aria-hidden="true" href="#chrome-headless-fails-due-to-sandbox-issues"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chrome Headless fails due to sandbox issues</h2>
<ul>
<li>Make sure kernel version is up-to-date.</li>
<li>Read about linux sandbox here: <a href="https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md" rel="nofollow">https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md</a></li>
<li>Try running without the sandbox (<strong>Note: running without the sandbox is not recommended due to security reasons!</strong>)</li>
</ul>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>({args<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>--no-sandbox<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>--disable-setuid-sandbox<span class="pl-pds">'</span></span>]});</pre></div>
<h2><a id="user-content-running-puppeteer-on-travis-ci" class="anchor" aria-hidden="true" href="#running-puppeteer-on-travis-ci"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Puppeteer on Travis CI</h2>
<p>To run headless Chrome on Travis, you <em>must</em> call <code>launch()</code> with flags to disable Chrome's sandbox, like so:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>({args<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>--no-sandbox<span class="pl-pds">'</span></span>]});</pre></div>
<h2><a id="user-content-running-puppeteer-in-docker" class="anchor" aria-hidden="true" href="#running-puppeteer-in-docker"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Puppeteer in Docker</h2>
<p>Getting headless Chrome up and running in Docker can be tricky.
The bundled Chromium that Puppeteer installs is missing the necessary
shared library dependencies.</p>
<p>To fix, you'll need to install the missing dependencies and the
latest Chromium package in your Dockerfile:</p>
<div class="highlight highlight-source-dockerfile"><pre><span class="pl-k">FROM</span> node:8-slim

<span class="pl-c"><span class="pl-c">#</span> See https://crbug.com/795759</span>
<span class="pl-k">RUN</span> apt-get update &amp;&amp; apt-get install -yq libgconf-2-4

<span class="pl-c"><span class="pl-c">#</span> Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)</span>
<span class="pl-c"><span class="pl-c">#</span> Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer</span>
<span class="pl-c"><span class="pl-c">#</span> installs, work.</span>
<span class="pl-k">RUN</span> apt-get update &amp;&amp; apt-get install -y wget --no-install-recommends \
    &amp;&amp; wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    &amp;&amp; sh -c <span class="pl-s">'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" &gt;&gt; /etc/apt/sources.list.d/google.list'</span> \
    &amp;&amp; apt-get update \
    &amp;&amp; apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    &amp;&amp; rm -rf /var/lib/apt/lists/* \
    &amp;&amp; apt-get purge --auto-remove -y curl \
    &amp;&amp; rm -rf /src/*.deb

<span class="pl-c"><span class="pl-c">#</span> It's a good idea to use dumb-init to help prevent zombie chrome processes.</span>
<span class="pl-k">ADD</span> https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
<span class="pl-k">RUN</span> chmod +x /usr/local/bin/dumb-init

<span class="pl-c"><span class="pl-c">#</span> Uncomment to skip the chromium download when installing puppeteer. If you do,</span>
<span class="pl-c"><span class="pl-c">#</span> you'll need to launch puppeteer with:</span>
<span class="pl-c"><span class="pl-c">#</span>     browser.launch({executablePath: 'google-chrome-unstable'})</span>
<span class="pl-c"><span class="pl-c">#</span> ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true</span>

<span class="pl-c"><span class="pl-c">#</span> Install puppeteer so it's available in the container.</span>
<span class="pl-k">RUN</span> npm i puppeteer

<span class="pl-c"><span class="pl-c">#</span> Add user so we don't need --no-sandbox.</span>
<span class="pl-k">RUN</span> groupadd -r pptruser &amp;&amp; useradd -r -g pptruser -G audio,video pptruser \
    &amp;&amp; mkdir -p /home/pptruser/Downloads \
    &amp;&amp; chown -R pptruser:pptruser /home/pptruser \
    &amp;&amp; chown -R pptruser:pptruser /node_modules

<span class="pl-c"><span class="pl-c">#</span> Run everything after as non-privileged user.</span>
<span class="pl-k">USER</span> pptruser

<span class="pl-k">ENTRYPOINT</span> [<span class="pl-s">"dumb-init"</span>, <span class="pl-s">"--"</span>]
<span class="pl-k">CMD</span> [<span class="pl-s">"google-chrome-unstable"</span>]</pre></div>
<p>Build the container:</p>
<div class="highlight highlight-source-shell"><pre>docker build -t puppeteer-chrome-linux <span class="pl-c1">.</span></pre></div>
<p>Run the container by passing <code>node -e "&lt;yourscript.js content as a string&gt;</code> as the command:</p>
<div class="highlight highlight-source-shell"><pre> docker run -i --rm --cap-add=SYS_ADMIN \
   --name puppeteer-chrome puppeteer-chrome-linux \
   node -e <span class="pl-s"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">`</span>cat yourscript.js<span class="pl-pds">`</span></span><span class="pl-pds">"</span></span></pre></div>
<p>There's a full example at <a href="https://github.com/ebidel/try-puppeteer">https://github.com/ebidel/try-puppeteer</a> that shows
how to run this Dockerfile from a webserver running on App Engine Flex (Node).</p>
<h3><a id="user-content-running-on-alpine" class="anchor" aria-hidden="true" href="#running-on-alpine"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running on Alpine</h3>
<p>The <a href="https://pkgs.alpinelinux.org/package/edge/community/x86_64/chromium" rel="nofollow">newest Chromium package</a> supported on Alpine is 64, which was corresponding to <a href="https://github.com/GoogleChrome/puppeteer/releases/tag/v0.13.0">Puppeteer v0.13.0</a>.</p>
<p>Example Dockerfile:</p>
<div class="highlight highlight-source-dockerfile"><pre><span class="pl-k">FROM</span> node:9-alpine

<span class="pl-c"><span class="pl-c">#</span> Installs latest Chromium (64) package.</span>
<span class="pl-k">RUN</span> apk update &amp;&amp; apk upgrade &amp;&amp; \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community &gt;&gt; /etc/apk/repositories &amp;&amp; \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main &gt;&gt; /etc/apk/repositories &amp;&amp; \
    apk add --no-cache \
      chromium@edge \
      nss@edge

...

<span class="pl-c"><span class="pl-c">#</span> Tell Puppeteer to skip installing Chrome. We'll be using the installed package.</span>
<span class="pl-k">ENV</span> PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

<span class="pl-c"><span class="pl-c">#</span> Puppeteer v0.13.0 works with Chromium 64.</span>
<span class="pl-k">RUN</span> yarn add puppeteer@0.13.0

<span class="pl-c"><span class="pl-c">#</span> Add user so we don't need --no-sandbox.</span>
<span class="pl-k">RUN</span> addgroup -S pptruser &amp;&amp; adduser -S -g pptruser pptruser \
    &amp;&amp; mkdir -p /home/pptruser/Downloads \
    &amp;&amp; chown -R pptruser:pptruser /home/pptruser \
    &amp;&amp; chown -R pptruser:pptruser /app

<span class="pl-c"><span class="pl-c">#</span> Run everything after as non-privileged user.</span>
<span class="pl-k">USER</span> pptruser

...</pre></div>
<p>And when launching Chrome, be sure to use the <code>chromium-browser</code> executable:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>({
  executablePath<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/usr/bin/chromium-browser<span class="pl-pds">'</span></span>
});</pre></div>
<h4><a id="user-content-tips" class="anchor" aria-hidden="true" href="#tips"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips</h4>
<p>By default, Docker runs a container with a <code>/dev/shm</code> shared memory space 64MB.
This is <a href="https://github.com/c0b/chrome-in-docker/issues/1">typically too small</a> for Chrome
and will cause Chrome to crash when rendering large pages. To fix, run the container with
<code>docker run --shm-size=1gb</code> to increase the size of <code>/dev/shm</code>. Since Chrome 65, this is no
longer necessary. Instead, launch the browser with the <code>--disable-dev-shm-usage</code> flag:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">browser</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">puppeteer</span>.<span class="pl-en">launch</span>({
  args<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>--disable-dev-shm-usage<span class="pl-pds">'</span></span>]
});</pre></div>
<p>This will write shared memory files into <code>/tmp</code> instead of <code>/dev/shm</code>. See <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=736452" rel="nofollow">crbug.com/736452</a> for more details.</p>
<p>Seeing other weird errors when launching Chrome? Try running your container
with <code>docker run --cap-add=SYS_ADMIN</code> when developing locally. Since the Dockerfile
adds a <code>pptr</code> user as a non-privileged user, it may not have all the necessary privileges.</p>
<p><a href="https://github.com/Yelp/dumb-init">dumb-init</a> is worth checking out if you're
experiencing a lot of zombies Chrome processes sticking around. There's special
treatment for processes with PID=1, which makes it hard to terminate Chrome
properly in some cases (e.g. in Docker).</p>
<h2><a id="user-content-running-puppeteer-on-heroku" class="anchor" aria-hidden="true" href="#running-puppeteer-on-heroku"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Puppeteer on Heroku</h2>
<p>Running Puppeteer on Heroku requires some additional dependencies that aren't included on the Linux box that Heroku spins up for you. To add the dependencies on deploy, add the Puppeteer Heroku buildpack to the list of buildpacks for your app under Settings &gt; Buildpacks.</p>
<p>The url for the buildpack is <a href="https://github.com/jontewks/puppeteer-heroku-buildpack">https://github.com/jontewks/puppeteer-heroku-buildpack</a></p>
<p>When you click add buildpack, simply paste that url into the input, and click save. On the next deploy, your app will also install the dependencies that Puppeteer needs to run.</p>
<p>If you need to render Chinese, Japanese, or Korean characters you may need to use a buildpack with additional font files like <a href="https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack">https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack</a></p>
<p>There's also another <a href="https://timleland.com/headless-chrome-on-heroku/" rel="nofollow">simple guide</a> from @timleland that includes a sample project: <a href="https://timleland.com/headless-chrome-on-heroku/" rel="nofollow">https://timleland.com/headless-chrome-on-heroku/</a>.</p>
<h2><a id="user-content-running-puppeteer-on-aws-lambda" class="anchor" aria-hidden="true" href="#running-puppeteer-on-aws-lambda"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Puppeteer on AWS Lambda</h2>
<p>AWS Lambda <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html" rel="nofollow">limits</a> deployment package sizes to ~50MB. This presents challenges for running headless Chrome (and therefore Puppeteer) on Lambda. The community has put together a few resources that work around the issues:</p>
<ul>
<li><a href="https://github.com/adieuadieu/serverless-chrome/blob/master/docs/chrome.md">https://github.com/adieuadieu/serverless-chrome/blob/master/docs/chrome.md</a> (tracks the latest Chromium snapshots)</li>
<li><a href="https://github.com/universalbasket/aws-lambda-chrome">https://github.com/universalbasket/aws-lambda-chrome</a></li>
<li><a href="https://github.com/Kikobeats/aws-lambda-chrome">https://github.com/Kikobeats/aws-lambda-chrome</a></li>
</ul>
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
      <li class="mr-3">&copy; 2018 <span title="0.56707s from unicorn-79bfdf96b6-qvnkg">GitHub</span>, Inc.</li>
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

