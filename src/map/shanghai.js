export default {
  city: 'shanghai',
  boundary: {
    north: 31.3024,
    south: 31.1436,
    west: 121.3764,
    east: 121.5876
  },
  rivers: [
    /* 黄浦江 */
    {
      width: 10,
      path: [
        [31.3024, 121.5621], // 翔殷路隧道
        [31.2707, 121.5653, -.4], // 军工路隧道
        [31.2550, 121.5454, -.1], // 杨浦大桥
        [31.2467, 121.5200, -.2], // 大连路隧道
        [31.2457, 121.5027, .1], // 新建路隧道
        [31.2418, 121.4945, .1], // 苏州河
        [31.2348, 121.4942, .4], // 延安东路隧道
        [31.2231, 121.5069, -.2], // 复兴东路隧道
        [31.2054, 121.5053, -.4], // 南浦大桥
        [31.1917, 121.4924, -.2], // 西藏南路隧道
        [31.1893, 121.4809, 0], // 卢浦大桥
        [31.1660, 121.4686, .7], // 龙耀路隧道
        [31.1436, 121.4574, -.8], // 上中路隧道
      ]
    },
    /* 苏州河 */
    {
      width: 4,
      path: [
        [31.2418, 121.4945], // 黄浦江
        [31.2413, 121.4629, .2], // 南北高架路桥
        [31.2450, 121.4482, -.6], // 天目西路桥
        [31.2363, 121.4261, 1], // 武宁路桥
        [31.2226, 121.4108, -.4], // 中山北路桥
        [31.2206, 121.3764, -.2], // 真北路桥
      ]
    }
  ],
  sites: []
}
