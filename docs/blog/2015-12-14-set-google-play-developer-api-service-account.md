---
date: "2015-12-14 17:23"
categories: Skycarpenter
tags: [PHP, 'Google Play', 'In App Purchase', 'Google Developer Console', 'Google Play Developer Console']
---
# 設定 Google Play Developer API Service Account

<http://stackoverflow.com/questions/25481207/why-getting-error-the-project-id-used-to-call-the-google-play-developer-api-has>

## Google Developer Console

<https://console.developers.google.com>

* 然後 選擇 奇幻射擊2 中文版 的專案
* 進去以後 先在左側的 API 和驗證 底下的 API 點一下
* 然後搜尋 Google Play Android Developer API
* 幫我啟用
* 然後再到 API 和驗證 底下的 憑證 點一下
* 建立一個新的用戶端 ID
* 應用程式類型 要點 服務帳戶
* 最後按下建立用戶端 ID

## Google Play Developer Console

<https://play.google.com/apps/publish>

1. `Google Play Developer Console` > `Settings` > subcategory `API access`.
2. Make a link to your `Linked Project`.
3. `Service Account` place maybe already showing ur `Service account` CLIENT ID which made `google developer console`.


Default this account gray showing and isn't active. So must activate and set authority manually.

You should now get a correct response from the API.

Good luck.

## 給予 Service Account 驗證 IAP 的權限

* You must to connect your API with your app.
* You must go to your [Google Play publish page](https://play.google.com/apps/publish) and invite a user with the service account email in `Settings` -> `User account & rights` -> `Invite new user`
* give it the privileges of `View financial reports`.

## 程式範例

<http://stackoverflow.com/questions/25054919/get-android-subscription-status-failed-with-403/25825907#25825907>

```php
<?php
    set_include_path("../src/" . PATH_SEPARATOR . get_include_path());
    require_once 'Google/Client.php';
    require_once 'Google/Service/AndroidPublisher.php';

    $client_id = ''; //Your client id
    $service_account_name = ''; //Your service account email
    $key_file_location = ''; //Your p12 file (key.p12)

    $client = new Google_Client();
    $client->setApplicationName(""); //This is the name of the linked application
    $service = new Google_Service_AndroidPublisher($client);

    $key = file_get_contents($key_file_location);
    $cred = new Google_Auth_AssertionCredentials(
        $service_account_name,
        array('https://www.googleapis.com/auth/androidpublisher'),
        $key
    );
    $client->setAssertionCredentials($cred);
    if($client->getAuth()->isAccessTokenExpired()) {
        $client->getAuth()->refreshTokenWithAssertion($cred);
    }
    $apiKey = ""; //Your API key
    $client->setDeveloperKey($apiKey);

    $package_name = ""; //Your package name (com.example...)
    $subscriptionId = "";   //SKU of your subscription item

    //Token returned to the app after the purchase
    $token = "";

    $service = new Google_Service_AndroidPublisher($client);
    $results = $service->purchases_subscriptions->get($package_name,$subscriptionId,$token,array());

    print_r ($results); //This object has all the data about the subscription
    echo "expiration: " . $results->expiryTimeMillis;
    exit;
?>
```
