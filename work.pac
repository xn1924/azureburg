function FindProxyForURL(url, host) {
               //这里填写你们公司的host
    if (dnsDomainIs(host, 'jijindou.com') ||
 dnsDomainIs(host, 'licaigc.com')) {
               //这里填你自己的局域网ip，端口号是你在Charles里设置的 默认8888
        return "PROXY 192.168.0.110:8888; DIRECT;";
    } else {
        return "DIRECT";
    }
}
