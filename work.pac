function FindProxyForURL(url, host) {
     //这里填写你们公司的host
    if (dnsDomainIs(host, 'jijindou.com') ||
        dnsDomainIs(host, 'licaigc.com') ||
        dnsDomainIs(host, 'talicai.lcgc.io') ||
        dnsDomainIs(host, 'talicai.com') ||
                dnsDomainIs(host, 'haoguihua.cn') ||
        dnsDomainIs(host, 'guihua.com')
       ) {
     //这里填你自己的局域网ip，端口号是你在Charles里设置的 默认8888
      if (isInNet(myIpAddress(), "192.168.10.0", "255.255.252.0")) {
        return "PROXY 192.168.10.205:8888; DIRECT;";
      } else {
        return "PROXY 192.168.0.110:8888; DIRECT;";
      }
    } else {
        return "DIRECT";
    }
}
