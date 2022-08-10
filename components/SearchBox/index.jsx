import React from "react";
import Keyword from "../Keyword";
import "./SearchBox.css";

function SearchBox(props) {
  const {
    cloudServiceKeywords,
    searchAgain,
    companySuggests1,
    scalableStorageInThCloudService1,
    analyticsForTheFinancialServices1,
    analyticsForEcomme1,
    mobilePushNotifications1,
    noResultsFound,
    searchSowftareServicesAndMore,
    search,
    popularSearch,
    workManagment,
    stableStorageCloud,
    cloudStorageService,
    accessSalary,
    simpleStorageService,
    companySuggests2,
    scalableStorageInThCloudService2,
    analyticsForTheFinancialServices2,
    analyticsForEcomme2,
    mobilePushNotifications2,
    keyword1Props,
    keyword2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-box screen">
        <div className="overlap-group-container">
          <div className="overlap-group2-10">
            <div className="search-input-bg"></div>
            <div className="cloud-service-keywords roboto-medium-black-18px">{cloudServiceKeywords}</div>
            <div className="search-again roboto-medium-black-18px">{searchAgain}</div>
            <div className="rectangle-53"></div>
            <div className="rectangle-54"></div>
            <div className="suggests">
              <div className="flex-col-34">
                <img className="star" src="/img/star@2x.svg" />
                <div className="company-suggests roboto-regular-normal-black-18px">{companySuggests1}</div>
                <div className="brand">
                  <div className="overlap-group1-14">
                    <img className="x-logo" src="/img/dribbble--logo-@2x.svg" />
                  </div>
                  <div className="service-container">
                    <p className="scalable-storage-in-th-cloud-service valign-text-bottom roboto-medium-black-16px">
                      {scalableStorageInThCloudService1}
                    </p>
                    <p className="analytics-for-the-financial-services roboto-regular-normal-black-13px">
                      {analyticsForTheFinancialServices1}
                    </p>
                  </div>
                </div>
              </div>
              <div className="brand-1">
                <div className="overlap-group-18">
                  <img className="x-logo" src="/img/reddit--logo-@2x.svg" />
                </div>
                <div className="flex-col-35">
                  <img className="star-1" src="/img/star-1@2x.svg" />
                  <p className="analytics-for-ecomme roboto-semi-bold-black-16px">{analyticsForEcomme1}</p>
                  <div className="mobile-push-notifications roboto-regular-normal-black-14px">
                    {mobilePushNotifications1}
                  </div>
                </div>
              </div>
            </div>
            <div className="no-result">
              <div className="no-results-found">{noResultsFound}</div>
              <img className="search-not-found-1" src="/img/search-not-found-1@2x.svg" />
            </div>
          </div>
          <div className="overlap-group3-10">
            <div className="search-input-bg-1"></div>
            <div className="search-sowftare-services-and-more roboto-regular-normal-black-18px">
              {searchSowftareServicesAndMore}
            </div>
            <div className="search roboto-medium-black-18px">{search}</div>
            <div className="rectangle-53-1"></div>
            <div className="rectangle-54-1"></div>
            <div className="popular-search">
              <div className="popular-search-1 roboto-regular-normal-black-18px">{popularSearch}</div>
              <div className="flex-row-51 roboto-regular-normal-scarpa-flow-15px">
                <Keyword>{keyword1Props.children}</Keyword>
                <div className="keyword border-1px-bon-jour">
                  <div className="work-managment">{workManagment}</div>
                </div>
                <div className="keyword-container">
                  <div className="keyword-1 border-1px-bon-jour">
                    <div className="stable-storage-cloud">{stableStorageCloud}</div>
                  </div>
                  <Keyword className={keyword2Props.className}>{keyword2Props.children}</Keyword>
                </div>
              </div>
              <div className="flex-row-52">
                <div className="keyword-2 border-1px-bon-jour">
                  <div className="cloud-storage-service roboto-regular-normal-scarpa-flow-15px">
                    {cloudStorageService}
                  </div>
                </div>
                <div className="keyword-container-1">
                  <div className="keyword-3 border-1px-bon-jour">
                    <div className="access-salary roboto-regular-normal-scarpa-flow-15px">{accessSalary}</div>
                  </div>
                  <div className="keyword-4 border-1px-bon-jour">
                    <div className="simple-storage-service roboto-regular-normal-scarpa-flow-15px">
                      {simpleStorageService}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suggests-1">
              <div className="flex-col-36">
                <img className="star" src="/img/star-2@2x.svg" />
                <div className="company-suggests-1 roboto-regular-normal-black-18px">{companySuggests2}</div>
                <div className="brand">
                  <div className="overlap-group1-14">
                    <img className="x-logo" src="/img/dribbble--logo--1@2x.svg" />
                  </div>
                  <div className="service-container">
                    <p className="scalable-storage-in-th-cloud-service valign-text-bottom roboto-medium-black-16px">
                      {scalableStorageInThCloudService2}
                    </p>
                    <p className="analytics-for-the-financial-services roboto-regular-normal-black-13px">
                      {analyticsForTheFinancialServices2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="brand-2">
                <div className="overlap-group-18">
                  <img className="x-logo" src="/img/reddit--logo--1@2x.svg" />
                </div>
                <div className="flex-col-37">
                  <img className="star-1" src="/img/star-3@2x.svg" />
                  <p className="analytics-for-ecomme-1 roboto-semi-bold-black-16px">{analyticsForEcomme2}</p>
                  <div className="mobile-push-notifications roboto-regular-normal-black-14px">
                    {mobilePushNotifications2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
