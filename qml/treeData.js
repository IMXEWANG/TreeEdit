const data = [
               {
                   "name": "建筑",
                   "subType": [
                       {
                           "image": "Type_JianZhu_ZhouBianJianZhu_big.png",
                           "name": "周边建筑",
                           "subType":[
                                {
                                   "name": "民宅"
                               },
                               {
                                   "name": "公寓"
                               },
                               {
                                   "name": "别墅"
                               }
                           ],
                           "paramter": [
                               {
                                   "alignType": "RIGHT",
                                   "name": "用地面积",
                                   "sysName": "Param_YongDiMianJi",
                                   "unit": "m2",
                                   "value": "1000",

                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "建筑面积",
                                   "sysName": "Param_JianZhuMianJi",
                                   "unit": "m2",
                                   "value": "6000"
                               }
                           ],
                           "sysName": "Type_JianZhu_ZhouBianJianZhu"
                       },
                       {
                           "image": "Type_JianZhu_BanGong_big.png",
                           "name": "办公楼",
                           "paramter": [
                               {
                                   "alignType": "RIGHT",
                                   "name": "建筑高度",
                                   "sysName": "Param_JianZhuGaoDu",
                                   "unit": "m",
                                   "value": "50"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "建筑层数",
                                   "sysName": "Param_JianZhuCengShu",
                                   "value": "14"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "占地面积",
                                   "sysName": "Param_ZhanDiMianJi",
                                   "unit": "m2",
                                   "value": "3925"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "建设单位",
                                   "sysName": "Param_JianSheDanWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "设计单位",
                                   "sysName": "Param_SheJiDanWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "施工单位",
                                   "sysName": "Param_ShiGongDanWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "监理单位",
                                   "sysName": "Param_JianLiDanWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "工程造价",
                                   "sysName": "Param_GongChengZaoJia",
                                   "unit": "元",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "物业公司",
                                   "sysName": "Param_WuYeGongSi",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "mianji.png",
                                   "name": "建筑面积",
                                   "sysName": "Param_JianZhuMianJi",
                                   "unit": "m2",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "qiye.png",
                                   "name": "企业数量",
                                   "sysName": "Param_QiYeShuLiang",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "renyuan.png",
                                   "name": "人员数量",
                                   "sysName": "Param_RenYuanShuLiang",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "wuzi.png",
                                   "name": "物资",
                                   "sysName": "Param_WuZi",
                                   "unit": "个",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "nenghao.png",
                                   "name": "能耗",
                                   "sysName": "Param_NengHao",
                                   "unit": "kgce/t",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "wendu.png",
                                   "name": "温度",
                                   "sysName": "Param_WenDu",
                                   "unit": "℃",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "shebei.png",
                                   "name": "设备",
                                   "sysName": "Param_SheBei",
                                   "unit": "台",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "anquan.png",
                                   "name": "安全",
                                   "sysName": "Param_AnQuan",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "jingbao.png",
                                   "name": "警报",
                                   "sysName": "Param_JingBao",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_JianZhu_BanGong"
                       }
                   ],
                   "sysName": "Type_JianZhu"
               },
               {
                   "name": "设施设备",
                   "subType": [
                       {
                           "image": "Type_SheShiSheBei_JKSB_big.png",
                           "name": "监控设备",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "设备图片",
                                   "sysName": "Param_DaTu"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "设备编号",
                                   "sysName": "Param_SBBH",
                                   "value": "001"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "设备型号",
                                   "sysName": "Param_SBXH",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "生产厂商",
                                   "sysName": "Param_SCCS",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "定位设备",
                                   "sysName": "Param_DingWei"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "遥控设备",
                                   "sysName": "Param_YaoKong"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "运行状态",
                                   "sysName": "Param_YXZT"
                               }
                           ],
                           "sysName": "Type_SheShiSheBei_JKSB"
                       },
                       {
                           "image": "Type_SheShiSheBei_ZJ_big.png",
                           "name": "闸机",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "设备图片",
                                   "sysName": "Param_DaTu"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "设备编号",
                                   "sysName": "Param_SBBH",
                                   "value": "001"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "设备型号",
                                   "sysName": "Param_SBXH",
                                   "value": "IW3Z"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "生产厂商",
                                   "sysName": "Param_SCCS",
                                   "value": "海康威视"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "运行状态",
                                   "sysName": "Param_YXZT"
                               }
                           ],
                           "sysName": "Type_SheShiSheBei_ZJ"
                       },
                       {
                           "image": "Type_SheShiSheBei_ChuFengKou_big.png",
                           "name": "出风口",
                           "paramter": [
                               {
                                   "alignType": "RIGHT",
                                   "name": "构件长度",
                                   "sysName": "Param_GouJianChangDu",
                                   "unit": "mm",
                                   "value": "800"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "构件宽度",
                                   "sysName": "Param_GouJianKuanDu",
                                   "unit": "mm",
                                   "value": "400"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "构件厚度",
                                   "sysName": "Param_GouJianHouDu",
                                   "unit": "mm",
                                   "value": "50"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "风口类型",
                                   "sysName": "Param_FengKouLeiXing",
                                   "value": "百叶窗"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "风口材质",
                                   "sysName": "Param_FengKouCaiZhi",
                                   "value": "铝合金"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "单体质量",
                                   "sysName": "Param_DanTiZhiLiang",
                                   "unit": "kg",
                                   "value": "1"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "品牌",
                                   "sysName": "Param_PinPai",
                                   "value": "天道"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "供应商",
                                   "sysName": "Param_GongYingShang",
                                   "value": "上海容华"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "联系人",
                                   "sysName": "Param_LianXiRen",
                                   "value": "张亚"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "联系方式",
                                   "sysName": "Param_LianXiFangShi",
                                   "value": "15902120288"
                               }
                           ],
                           "sysName": "Type_SheShiSheBei_ChuFengKou"
                       },
                       {
                           "image": "Type_SheShiSheBei_ShuiGuan_big.png",
                           "name": "水管",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "管道材质",
                                   "sysName": "Param_GuanDaoCaiZhi",
                                   "value": "镀锌钢管"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "管径规格",
                                   "sysName": "Param_GuanJingGuiGe",
                                   "value": "DN15"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "管道壁厚",
                                   "sysName": "Param_GuanDaoBiHou",
                                   "unit": "mm",
                                   "value": "2.8"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "连接方式",
                                   "sysName": "Param_LianJieFangShi",
                                   "value": "螺纹连接"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "保温材料",
                                   "sysName": "Param_BaoWenCaiLiao",
                                   "value": "玻璃棉"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "保温厚度",
                                   "sysName": "Param_BaoWenHouDu",
                                   "unit": "mm",
                                   "value": "30"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "管道刷油",
                                   "sysName": "Param_GuanDaoShuaYou"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "管道压力",
                                   "sysName": "Param_GuanDaoYaLi",
                                   "unit": "Mpa",
                                   "value": "1.0"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "安装位置",
                                   "sysName": "Param_AnZhuangWeiZhi",
                                   "value": "室内"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "安装方式",
                                   "sysName": "Param_AnZhuangFangShi",
                                   "value": "明装"
                               }
                           ],
                           "sysName": "Type_SheShiSheBei_ShuiGuan"
                       }
                   ],
                   "sysName": "Type_SheShiSheBei"
               },
               {
                   "name": "附属设施",
                   "subType": [
                       {
                           "image": "Type_FuShuSheShi_TingCheWei_big.png",
                           "name": "停车位",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "车位编号",
                                   "sysName": "Param_CheWeiBianHao",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "所属停车区",
                                   "sysName": "Param_SuoShuTingCheQu",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "是否固定车位",
                                   "sysName": "Param_ShiFouGuDingCheWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "固定车牌",
                                   "sysName": "GuDingCheWei"
                               }
                           ],
                           "sysName": "Type_FuShuSheShi_TingCheWei"
                       },
                       {
                           "image": "Type_FuShuSheShi_JingGai_big.png",
                           "name": "井盖",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "井盖编号",
                                   "sysName": "Param_JingGaiBianHao",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "主管部门",
                                   "sysName": "Param_ZhuGuanBuMen",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "系统",
                                   "sysName": "Param_XiTong",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "巡检情况",
                                   "sysName": "Param_XunJianQingKuang",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "维护情况",
                                   "sysName": "Param_WeiHuQingKuang",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_FuShuSheShi_JingGai"
                       }
                   ],
                   "sysName": "Type_FuShuSheShi"
               },
               {
                   "name": "车辆",
                   "subType": [
                       {
                           "image": "Type_CheLiang_XXC_big.png",
                           "name": "小型车",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "类型",
                                   "sysName": "Param_LeiXing",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "分类",
                                   "sysName": "Param_FenLei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "品牌",
                                   "sysName": "Param_PinPai",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "车牌号",
                                   "sysName": "Param_ChePaiHao",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_GuDingCheWei.png",
                                   "name": "固定车位",
                                   "sysName": "Param_GuDingCheWei",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_DW.png",
                                   "name": "定位",
                                   "sysName": "Param_DW",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_ChuRuJiLu.png",
                                   "name": "出入记录",
                                   "sysName": "Param_ChuRuJiLu",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_CheLiang_XXC"
                       },
                       {
                           "image": "Type_CheLiang_ZXC_big.png",
                           "name": "中型车",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "类型",
                                   "sysName": "Param_LeiXing",
                                   "value": "中型车"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "分类",
                                   "sysName": "Param_FenLei",
                                   "value": "中型车"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "品牌",
                                   "sysName": "Param_PinPai",
                                   "value": "雪弗兰"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "车牌号",
                                   "sysName": "Param_ChePaiHao",
                                   "value": "沪A PB112"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_GuDingCheWei.png",
                                   "name": "固定车位",
                                   "sysName": "Param_GuDingCheWei",
                                   "value": "A002"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_DW.png",
                                   "name": "定位",
                                   "sysName": "Param_DW",
                                   "value": "定位"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_ChuRuJiLu.png",
                                   "name": "出入记录",
                                   "sysName": "Param_ChuRuJiLu",
                                   "value": "出入记录"
                               }
                           ],
                           "sysName": "Type_CheLiang_ZXC"
                       },
                       {
                           "image": "Type_CheLiang_DXC_big.png",
                           "name": "大型车",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "类型",
                                   "sysName": "Param_LeiXing",
                                   "value": "大型车"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "分类",
                                   "sysName": "Param_FenLei",
                                   "value": "大型车"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "品牌",
                                   "sysName": "Param_PinPai",
                                   "value": "雪弗兰"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "车牌号",
                                   "sysName": "Param_ChePaiHao",
                                   "value": "沪A PB112"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_GuDingCheWei.png",
                                   "name": "固定车位",
                                   "sysName": "Param_GuDingCheWei",
                                   "value": "A002"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_DW.png",
                                   "name": "定位",
                                   "sysName": "Param_DW",
                                   "value": "定位"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_ChuRuJiLu.png",
                                   "name": "出入记录",
                                   "sysName": "Param_ChuRuJiLu",
                                   "value": "出入记录"
                               }
                           ],
                           "sysName": "Type_CheLiang_DXC"
                       }
                   ],
                   "sysName": "Type_CheLiang"
               },
               {
                   "name": "物资",
                   "subType": [
                       {
                           "image": "Type_WuZi_FangHong_big.png",
                           "name": "物资",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "名称",
                                   "sysName": "Param_MingCheng",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "类型",
                                   "sysName": "Param_LeiXing",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "编号",
                                   "sysName": "Param_BianHao",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "Param_ShuLiang.png",
                                   "name": "数量",
                                   "sysName": "Param_ShuLiang",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_DW.png",
                                   "name": "定位",
                                   "sysName": "Param_DW",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_ChuRuJiLu.png",
                                   "name": "出入记录",
                                   "sysName": "Param_ChuRuJiLu",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_WuZi_FangHong"
                       },
                       {
                           "image": "Type_WuZi_HuoWu_big.png",
                           "name": "货物",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "名称",
                                   "sysName": "Param_MingCheng",
                                   "value": "服装"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "类型",
                                   "sysName": "Param_LeiXing",
                                   "value": "货物"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "编号",
                                   "sysName": "Param_BianHao",
                                   "value": "002"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "cardImage": "Param_ShuLiang.png",
                                   "name": "数量",
                                   "sysName": "Param_ShuLiang",
                                   "value": "30"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_DW.png",
                                   "name": "定位",
                                   "sysName": "Param_DW",
                                   "value": "定位"
                               },
                               {
                                   "alignType": "LEFT",
                                   "cardImage": "Param_ChuRuJiLu.png",
                                   "name": "出入记录",
                                   "sysName": "Param_ChuRuJiLu",
                                   "value": "出入记录"
                               }
                           ],
                           "sysName": "Type_WuZi_HuoWu"
                       }
                   ],
                   "sysName": "Type_WuZi"
               },
               {
                   "name": "绿化",
                   "subType": [
                       {
                           "image": "Type_LvHua_CaoDi_big.png",
                           "name": "草地",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "绿地编号",
                                   "sysName": "Param_LvDiBianHao",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "绿地名称",
                                   "sysName": "Param_LvDiMingCheng",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "绿地面积",
                                   "sysName": "Param_LvDiMianJi",
                                   "unit": "m2",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "植被类型",
                                   "sysName": "Param_ZhiBeiLeiXing",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "覆盖率",
                                   "sysName": "Param_FuGanLv",
                                   "unit": "%",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_LvHua_CaoDi"
                       },
                       {
                           "image": "Type_LvHua_HuaTan_big.png",
                           "name": "花坛",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "绿地编号",
                                   "sysName": "Param_LvDiBianHao",
                                   "value": "002"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "绿地名称",
                                   "sysName": "Param_LvDiMingCheng",
                                   "value": "花坛"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "绿地面积",
                                   "sysName": "Param_LvDiMianJi",
                                   "unit": "m2",
                                   "value": "100"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "植被类型",
                                   "sysName": "Param_ZhiBeiLeiXing",
                                   "value": "花坛"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "覆盖率",
                                   "sysName": "Param_FuGanLv",
                                   "unit": "%",
                                   "value": "30"
                               }
                           ],
                           "sysName": "Type_LvHua_HuaTan"
                       },
                       {
                           "image": "Type_LvHua_GuShuMingMu_big.png",
                           "name": "古树名木",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "植被种类",
                                   "sysName": "Param_ZhiBeiZhongLei",
                                   "value": "樟树"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "植被编号",
                                   "sysName": "Param_ZhiBeiBianHao",
                                   "value": "ZS001"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "树龄",
                                   "sysName": "Param_ShuLing",
                                   "unit": "年",
                                   "value": "30"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "保护等级",
                                   "sysName": "Param_BaoHuDengJi",
                                   "value": "县级"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "养护单位",
                                   "sysName": "Param_YangHuDanWei",
                                   "value": "园区管委会"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "负责人",
                                   "sysName": "Param_FuZeRen",
                                   "value": "张三"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "上次养护时间",
                                   "sysName": "Param_ShangCiYangHuShiJian",
                                   "value": "20180111"
                               }
                           ],
                           "sysName": "Type_LvHua_GuShuMingMu"
                       }
                   ],
                   "sysName": "Type_LvHua"
               },
               {
                   "name": "水体",
                   "subType": [
                       {
                           "image": "Type_ShuiTi_HeLiu_big.png",
                           "name": "河流",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "河流名称",
                                   "sysName": "Param_HeLiuMingCheng"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "水流速",
                                   "sysName": "Param_ShuiLiuSu"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "丰水期水位高度",
                                   "sysName": "Param_FengShuiQiShuiWeiGaoDun",
                                   "unit": "m"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "枯水期水位高度",
                                   "sysName": "Param_KuShuiQiShuiWeiGaoDun",
                                   "unit": "m"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "水质",
                                   "sysName": "Param_ShuiZhi"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "防汛标准",
                                   "sysName": "Param_FangXunBiaoZhun"
                               }
                           ],
                           "sysName": "Type_ShuiTi_HeLiu"
                       }
                   ],
                   "sysName": "Type_ShuiTi"
               },
               {
                   "name": "市政管线",
                   "subType": [
                       {
                           "image": "Type_ShiZhengGuanXian_PaiShui_big.png",
                           "name": "排水管线",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "市政管线编号",
                                   "sysName": "Param_ShiZhengGuanXianBianHao"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "管径",
                                   "sysName": "Param_GuanJing",
                                   "unit": "mm",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "容量",
                                   "sysName": "Param_RongLiang",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "材质",
                                   "sysName": "Param_CaiZhi",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_ShiZhengGuanXian_PaiShui"
                       }
                   ],
                   "sysName": "Type_ShiZhengGuanXian"
               },
               {
                   "name": "地形",
                   "sysName": "Type_DiXing"
               },
               {
                   "name": "道路",
                   "subType": [
                       {
                           "image": "Type_DaoLu_ZhuGanLu_big.png",
                           "name": "公路",
                           "paramter": [
                               {
                                   "alignType": "LEFT",
                                   "name": "道路编号",
                                   "sysName": "Param_DaoLuBianHao"
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "道路名称",
                                   "sysName": "Param_DaoLuMingCheng"
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "红线宽度",
                                   "sysName": "Param_HongXianKuanDu",
                                   "unit": "m",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "人行道宽度",
                                   "sysName": "Param_RenXingDaoKunDu",
                                   "unit": "m",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "绿化带宽度",
                                   "sysName": "Param_LvHuaDaiKuanDu",
                                   "unit": "m",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "分隔带宽度",
                                   "sysName": "Param_FenGeDaiKuanDu",
                                   "unit": "m",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "设计车速",
                                   "sysName": "Param_SheJiCheSu",
                                   "unit": "km/h",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "车流量",
                                   "sysName": "Param_CheLiuLiang",
                                   "value": ""
                               },
                               {
                                   "alignType": "RIGHT",
                                   "name": "荷载",
                                   "sysName": "Param_HeZai",
                                   "value": ""
                               },
                               {
                                   "alignType": "LEFT",
                                   "name": "道路材质",
                                   "sysName": "Param_DaoLuCaiZhi",
                                   "value": ""
                               }
                           ],
                           "sysName": "Type_DaoLu_ZhuGanLu"
                       }
                   ],
                   "sysName": "Type_DaoLu"
               }
           ];


