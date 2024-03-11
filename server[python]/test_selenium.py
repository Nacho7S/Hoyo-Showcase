import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager


URL="https://account.hoyolab.com/login-platform/index.html?st=https%3A%2F%2Fwww.hoyolab.com%2Fhome&token_type=6&client_type=4&app_id=c9oqaq3s3gu8&game_biz-bbs_oversea&lang=en-us&theme-dark-hoyolab&ux_mode=popup&iframe_level-1#/password-login"
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get(URL)
time.sleep(5)

logged_in = False

while not logged_in:
  ltuid_v2 = driver.get_cookie("ltuid_v2")

  if ltuid_v2: 
    print(logged_in)
    print(ltuid_v2["value"])
    logged_in = True
    driver.quit()
  else:
    print("not logged in")
    time.sleep(1)