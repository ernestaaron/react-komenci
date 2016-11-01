/*
 * exports the first local IPv4 address found
 */
export const getLocalNetwork = () => {
  const os = require('os');
  const ifaces = os.networkInterfaces();

  const addressList = [];

  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        addressList.push({ name: ifname + ':' + alias, address: iface.address });
      } else {
        // this interface has only one ipv4 adress
        addressList.push({ name: ifname, address: iface.address });
      }
      ++alias;
    });
  });

  if (addressList.length > 0) {
    return addressList[0].address;
  }
  else {
    return;
  }
};
