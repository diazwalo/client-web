function base_url(protocol, hostname, port) {
    const default_port = 8080
    return port === "" ? `${protocol}//${hostname}` : `${protocol}//${hostname}:${default_port}`
}

module.exports = base_url;
