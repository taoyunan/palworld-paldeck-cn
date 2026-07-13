// Generated from PalDB construction category pages. Run `npm run import:constructions` to refresh.
export const CONSTRUCTION_CATEGORIES = [
  {
    "id": "production",
    "label": "生产",
    "path": "Production",
    "count": 45
  },
  {
    "id": "pal",
    "label": "帕鲁",
    "path": "Pal",
    "count": 23
  },
  {
    "id": "storage",
    "label": "收纳",
    "path": "Storage",
    "count": 30
  },
  {
    "id": "food",
    "label": "食物",
    "path": "Food",
    "count": 16
  },
  {
    "id": "infrastructure",
    "label": "基础设施",
    "path": "Infrastructure",
    "count": 25
  },
  {
    "id": "lighting",
    "label": "照明",
    "path": "Lighting",
    "count": 22
  },
  {
    "id": "foundations",
    "label": "建筑",
    "path": "Foundations",
    "count": 139
  },
  {
    "id": "defenses",
    "label": "防御",
    "path": "Defenses",
    "count": 19
  },
  {
    "id": "furniture",
    "label": "家具",
    "path": "Furniture",
    "count": 159
  },
  {
    "id": "other",
    "label": "其他",
    "path": "Other",
    "count": 20
  }
];
export const CONSTRUCTIONS = [
  {
    "id": "WorkBench",
    "name": "原始的作业台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WorkBench.webp",
    "description": "用于制作简单物品的原始的作业台。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "1"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "RepairBench",
    "name": "修理台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_RepairBench.webp",
    "description": "可以修理损坏道具的工作台。\n修理需要消耗素材。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WorkBench_SkillUnlock",
    "name": "帕鲁装置制作台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WorkBench_SkillUnlock.webp",
    "description": "制作帕鲁所使用的道具的原始的作业台。\n可制作座垫并骑乘帕鲁，\n或制作枪供帕鲁射击。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      }
    ]
  },
  {
    "id": "StonePit",
    "name": "采石场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_StonePit.webp",
    "description": "用于生产石头的设施。\n挖掘石头非常辛苦，需要体力。\n交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "StationDeforest2",
    "name": "伐木场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_StationDeforest2.webp",
    "description": "用于生产木材的设施。\n砍树非常辛苦，需要体力。\n交给擅长伐木的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      },
      {
        "label": "伐木",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Crusher",
    "name": "粉碎机",
    "category": "production",
    "categoryLabel": "生产",
    "group": "磨粉/粉碎",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Crusher.webp",
    "description": "可以将石头或木材粉碎之后\n转换成其他素材的设施。\n需要有具备「浇水」适应性的帕鲁来使水车转动。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      },
      {
        "label": "浇水",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BlastFurnace",
    "name": "原始的炉子",
    "category": "production",
    "categoryLabel": "生产",
    "group": "精炼",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace.webp",
    "description": "可冶炼金属锭。\n品质不佳，速度慢。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Factory_Hard_01",
    "name": "优质作业台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_01.webp",
    "description": "用于制作物品及护甲的优质作业台。\n操作台比较小，不可快速制作。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "8"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      }
    ]
  },
  {
    "id": "MedicineFacility_01",
    "name": "中世纪制药台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制药",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_01.webp",
    "description": "用于制作帕鲁治疗药的设备。\n只能制作简单的药品。\n交给可制药的帕鲁来操作吧。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      },
      {
        "label": "制药",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "SphereFactory_Black_01",
    "name": "帕鲁球制作台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "帕鲁球",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SphereFactory_Black_01.webp",
    "description": "捕捉帕鲁用的帕鲁球的制作台。\n作业场规模较小，无法迅速制作帕鲁球。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FlourMill",
    "name": "磨粉机",
    "category": "production",
    "categoryLabel": "生产",
    "group": "磨粉/粉碎",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FlourMill.webp",
    "description": "可以将小麦磨碎之后\n生产出的面粉设施。\n需要有具备「浇水」适应性的帕鲁来使水车转动。",
    "stats": [
      {
        "label": "科技",
        "value": "15"
      },
      {
        "label": "浇水",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WeaponFactory_Dirty_01",
    "name": "武器制作台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "武器",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_01.webp",
    "description": "生产武器及弹药的制作台。\n作业场规模较小，无法制作高级武器。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      }
    ]
  },
  {
    "id": "CopperPit",
    "name": "金属采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CopperPit.webp",
    "description": "生产金属矿石的设施。\n挖掘金属矿石的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "24"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "25"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "5"
      }
    ]
  },
  {
    "id": "SphereFactory_Black_02",
    "name": "帕鲁球流水线工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "帕鲁球",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SphereFactory_Black_02.webp",
    "description": "捕捉帕鲁用的帕鲁球的工厂。\n经过分工后，制作速度也有了一定的水准。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Factory_Hard_02",
    "name": "作业流水线工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "生产",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_02.webp",
    "description": "用于制作物品及护甲的工厂。\n通过分工，可用一定速度完成制作。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "29"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "10"
      }
    ]
  },
  {
    "id": "FishingPond1",
    "name": "垂钓池",
    "category": "production",
    "categoryLabel": "生产",
    "group": "垂钓池",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FishingPond1.webp",
    "description": "配备垂钓工具的垂钓池。\n分派帕鲁后，它会悠闲地帮你垂钓。\n需有可手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "31"
      },
      {
        "label": "手工作业",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "3"
      }
    ]
  },
  {
    "id": "WeaponFactory_Dirty_02",
    "name": "武器流水线工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "武器",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_02.webp",
    "description": "生产武器及弹药的工厂。\n经过分工后，能制作的武器种类也更厉害了一点。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "32"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        "name": "优质帕鲁油",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BlastFurnace2",
    "name": "改善后的炉子",
    "category": "production",
    "categoryLabel": "生产",
    "group": "精炼",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace_2.webp",
    "description": "可冶炼精炼金属锭。\n品质稍有提升，但速度仍然不足。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "34"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "5"
      }
    ]
  },
  {
    "id": "SphereFactory_Black_03",
    "name": "帕鲁球流水线工厂II",
    "category": "production",
    "categoryLabel": "生产",
    "group": "帕鲁球",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SphereFactory_Black_03.webp",
    "description": "捕捉帕鲁用的帕鲁球的工厂。\n通过详细分工，可用很快速度制作帕鲁球。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "35"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "400 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "50"
      }
    ]
  },
  {
    "id": "CoalPit",
    "name": "石炭采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoalPit.webp",
    "description": "生产石炭的设施。\n挖掘石炭的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Coal.webp",
        "name": "石炭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "CopperPit_2",
    "name": "金属采矿场Ⅱ",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CopperPit_2.webp",
    "description": "可大量生产金属矿石的设施。\n挖掘金属矿石的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "39"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Factory_Hard_03",
    "name": "作业流水线工厂 II",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_03.webp",
    "description": "用于制作物品及护甲的工厂。\n通过详细分工，可用很快速度完成制作。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "42"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.2"
      },
      {
        "label": "Energy",
        "value": "400 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "5"
      }
    ]
  },
  {
    "id": "MedicineFacility_02",
    "name": "电气制药台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制药",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_02.webp",
    "description": "用于制作帕鲁治疗药的设备。\n需要电力，但可制作高等药品。\n交给可制药的帕鲁来操作吧。",
    "stats": [
      {
        "label": "科技",
        "value": "43"
      },
      {
        "label": "制药",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "50 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        "name": "碳纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "StationDeforest3",
    "name": "伐木场Ⅱ",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_StationDeforest3.webp",
    "description": "用于生产硬木材的设施。\n砍树非常辛苦，且需要体力。\n交给擅长伐木的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "43"
      },
      {
        "label": "伐木",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "5"
      }
    ]
  },
  {
    "id": "BlastFurnace3",
    "name": "电气炉",
    "category": "production",
    "categoryLabel": "生产",
    "group": "精炼",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace3.webp",
    "description": "可冶炼帕鲁金属锭。\n需要电力，但可以更快完成冶炼。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "44"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "500 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "4"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "10"
      }
    ]
  },
  {
    "id": "CompositeDesk",
    "name": "制图桌",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CompositeDesk.webp",
    "description": "通过组合复数设计图，\n可以制成更高等级设计图的设施。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_HighGrade_Processed_Wood.webp",
        "name": "优质木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "30"
      }
    ]
  },
  {
    "id": "SulfurPit",
    "name": "硫磺采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SulfurPit.webp",
    "description": "生产硫磺的设施。\n挖掘硫磺的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Sulfur.webp",
        "name": "硫磺",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WeaponFactory_Dirty_03",
    "name": "武器流水线工厂II",
    "category": "production",
    "categoryLabel": "生产",
    "group": "武器",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_03.webp",
    "description": "用于生产武器及弹药的工厂。\n通过详细分工，可用很快速度制作高等武器。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "47"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.2"
      },
      {
        "label": "Energy",
        "value": "400 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "5"
      }
    ]
  },
  {
    "id": "OilPump",
    "name": "原油提炼机",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_OilPump.webp",
    "description": "从油田提取原油所需的设备。\n它需要大量电能供给才能运行。",
    "stats": [
      {
        "label": "科技",
        "value": "50"
      },
      {
        "label": "Energy",
        "value": "2000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "250"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "50"
      }
    ]
  },
  {
    "id": "OilPump02",
    "name": "原油提炼机 高压型",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_OilPump02.webp",
    "description": "从地下深处开采抽取原油的装置。\n即便在没有油田的地方也能生产原油，但仅能放置在下方没有建筑物的地表。\n相比原油提炼机需要更庞大的电力供应。",
    "stats": [
      {
        "label": "科技",
        "value": "51"
      },
      {
        "label": "Energy",
        "value": "3000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "300"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "QuartzPit",
    "name": "纯水晶采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_QuartzPit.webp",
    "description": "生产纯水晶的设施。\n挖掘纯水晶的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "52"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Quartz.webp",
        "name": "纯水晶",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "IceCrusher",
    "name": "冷冻粉碎机",
    "category": "production",
    "categoryLabel": "生产",
    "group": "磨粉/粉碎",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_IceCrusher.webp",
    "description": "可粉碎金属矿石以转换成其他材料的设施。\n虽然要使其工作需要电力供应，以及有「冷却」适应性的帕鲁，但是效率极佳。",
    "stats": [
      {
        "label": "科技",
        "value": "54"
      },
      {
        "label": "冷却",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "300 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "25"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "20"
      }
    ]
  },
  {
    "id": "SphereFactory_Black_04",
    "name": "高等文明帕鲁球工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "帕鲁球",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SphereFactory_Black_04.webp",
    "description": "捕捉帕鲁用的帕鲁球的工厂。\n引入了高性能机器，可以快速制作帕鲁球。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "58"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "1000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        "name": "六棱晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BlastFurnace4",
    "name": "巨大熔炉",
    "category": "production",
    "categoryLabel": "生产",
    "group": "精炼",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace4.webp",
    "description": "可用来冶炼六棱晶锭。\n扩大了建筑面积让复数帕鲁可以同时进行冶炼。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "58"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.08"
      },
      {
        "label": "Energy",
        "value": "1500 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "150"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "12"
      }
    ]
  },
  {
    "id": "MedicineFacility_03",
    "name": "高等文明制药台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制药",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_03.webp",
    "description": "用于制作帕鲁治疗药的设备。\n透过未来技术，可制作未知的药物。\n交给可制药的帕鲁来操作吧。",
    "stats": [
      {
        "label": "科技",
        "value": "61"
      },
      {
        "label": "制药",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "1000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        "name": "六棱晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "30"
      }
    ]
  },
  {
    "id": "Factory_Hard_04",
    "name": "高等文明作业工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_04.webp",
    "description": "用于制作物品及护甲的工厂。\n引入了高性能机器，可以快速制作。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.2"
      },
      {
        "label": "Energy",
        "value": "1000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ManganeseIngot.webp",
        "name": "珊瑚锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        "name": "六棱晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "20"
      }
    ]
  },
  {
    "id": "CrystalPit",
    "name": "六棱晶矿采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CrystalPit.webp",
    "description": "生产六棱晶矿的设施。\n挖掘六棱晶矿的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_RainbowCrystal.webp",
        "name": "六棱晶矿",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WeaponFactory_Dirty_04",
    "name": "高等文明武器工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "武器",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_04.webp",
    "description": "用于生产武器及弹药的工厂。\n引入了高性能机器，可以快速制作武器。\n需有能进行手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "63"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.2"
      },
      {
        "label": "Energy",
        "value": "1000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ManganeseIngot.webp",
        "name": "珊瑚锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "30"
      }
    ]
  },
  {
    "id": "AncientBlastFurnace",
    "name": "古代文明炉",
    "category": "production",
    "categoryLabel": "生产",
    "group": "精炼",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientBlastFurnace.webp",
    "description": "应用了古代文明技术的特殊火炉，能熔炼所有种类的金属锭。\n用火焰的热度熔化材料，再用冰之力让其快速凝固。\n要使其运作，需要具备高级生火和冷却适应性的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "66"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "3000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ManganeseIngot.webp",
        "name": "珊瑚锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "AncientWorkBench",
    "name": "古代文明工作台",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientWorkBench.webp",
    "description": "帕鲁专用的复合设施，可以在此处制作所有道具。\n玩家无法亲自作业，制作速度也和普通设备无异。\n由于功能复杂，需要具备高级手工作业和制药适应性的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "2000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AIcore.webp",
        "name": "AI核心",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FishingPond2",
    "name": "大型垂钓池",
    "category": "production",
    "categoryLabel": "生产",
    "group": "垂钓池",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FishingPond2.webp",
    "description": "配备垂钓工具的大型垂钓池。\n水域更加广阔，能钓上更大型的帕鲁。\n需有可手工作业的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "69"
      },
      {
        "label": "手工作业",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_HighGrade_Processed_Wood.webp",
        "name": "优质木板",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ManganeseIngot.webp",
        "name": "珊瑚锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        "name": "优质帕鲁油",
        "amount": "20"
      }
    ]
  },
  {
    "id": "SkyIslandOrePit",
    "name": "烈阳金属采矿场",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SkyIslandOrePit.webp",
    "description": "生产烈阳金属的设施。\n烈阳金属挖掘的工作需要大量体力，相当严苛。\n把这些工作交给擅长挖掘的帕鲁吧。",
    "stats": [
      {
        "label": "科技",
        "value": "72"
      },
      {
        "label": "采矿",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyIslandOre.webp",
        "name": "烈阳金属",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Factory_Money",
    "name": "金币制造工厂",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Money.webp",
    "description": "生产金币的工厂。\n因为精神负担大，工作时SAN值会降低。需有能进行手工作业的帕鲁。\n请注意，建造这座建筑可能会引来自卫队执行严厉镇压。",
    "stats": [
      {
        "label": "科技",
        "value": "73"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.5"
      },
      {
        "label": "Energy",
        "value": "200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AIcore.webp",
        "name": "AI核心",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "5"
      }
    ]
  },
  {
    "id": "AncientRelicRecycler",
    "name": "古代文明遗物转换器",
    "category": "production",
    "categoryLabel": "生产",
    "group": "制作/修理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientRelicRecycler.webp",
    "description": "利用失落文明的技术制造出的古代物质转化装置。\n通过破解「古代文明的遗物」中遗留的技术，使之升华为全新的形态。\n是能最大限度发挥遗物的利用价值、极为特殊的设备。",
    "stats": [
      {
        "label": "科技",
        "value": "74"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "800 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_WorldTree.webp",
        "name": "神秘木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "20"
      }
    ]
  },
  {
    "id": "AncientMultiProduct",
    "name": "古代文明物质生成器",
    "category": "production",
    "categoryLabel": "生产",
    "group": "伐木/挖掘",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientMultiProduct.webp",
    "description": "利用世界树之力可以生成各种木材和矿石的古代文明生成器。\n由于构造复杂，只能分派1只帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "78"
      },
      {
        "label": "Energy",
        "value": "800 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "PalBoxV2",
    "name": "帕鲁终端",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PalBoxV2.webp",
    "description": "用来存放抓到的帕鲁的设施。\n箱子里的帕鲁会逐渐回复生命值。\n此设施周围的区域即为据点。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "8"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "SkinChange",
    "name": "帕鲁装扮机",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁其他",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SkinChange.webp",
    "description": "用于改变外观的设施。\n可以为帕鲁更换特别的外观。\n通过游戏外的其他方式获得的外观也能使用。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "GlobalPalStorage",
    "name": "跨界帕鲁终端",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_GlobalPalStorage.webp",
    "description": "具有保存帕鲁的基因序列，\n以及通过基因序列复原帕鲁的功能的设施。\n保存的基因序列能够带到其他世界使用。",
    "stats": [
      {
        "label": "科技",
        "value": "3"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      }
    ]
  },
  {
    "id": "MonsterFarm",
    "name": "家畜牧场",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MonsterFarm.webp",
    "description": "可以放牧羊或鸡等类型帕鲁的牧场。\n如将具备特殊伙伴技能的帕鲁\n分派到牧场，可以自动生产道具。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "牧场",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "30"
      }
    ]
  },
  {
    "id": "BaseCampWorkHard",
    "name": "监控台",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampWorkHard.webp",
    "description": "可对据点内的帕鲁下达工作指示。\n请注意不要让它们劳动过度了。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BuildableGoddessStatue",
    "name": "力量石像",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BuildableGoddessStatue.webp",
    "description": "帕洛斯群岛的传说中提到的石像。\n将翠叶鼠雕像献给石像就可以\n获得不可思议的力量。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      }
    ]
  },
  {
    "id": "HatchingPalEgg",
    "name": "帕鲁蛋孵化器",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_HatchingPalEgg.webp",
    "description": "用于孵化帕鲁蛋的装置。\n放置帕鲁蛋后，经过一定时间可自动孵化。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "2"
      }
    ]
  },
  {
    "id": "CharacterRankUp",
    "name": "帕鲁浓缩机",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CharacterRankUp.webp",
    "description": "可提升帕鲁阶级的设施。\n将提取的帕鲁精华浓缩并注入同种类的帕鲁中，\n可突破肉体极限。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "5"
      }
    ]
  },
  {
    "id": "DisplayCharacter",
    "name": "观赏笼",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁其他",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DisplayCharacter.webp",
    "description": "放置抓来的帕鲁的观赏用笼子。\n在里头的帕鲁无法战斗或进行作业，\n但也不会肚子饿。",
    "stats": [
      {
        "label": "科技",
        "value": "15"
      },
      {
        "label": "Slots",
        "value": "40"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      }
    ]
  },
  {
    "id": "BreedFarm",
    "name": "配种牧场",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BreedFarm.webp",
    "description": "分派♂♀帕鲁各一只，\n即可让它们产下帕鲁蛋。\n需在设施中放入蛋糕才会顺利生蛋。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      },
      {
        "label": "工作适应性",
        "value": "1"
      },
      {
        "label": "Real Time",
        "value": "5 Mins"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "50"
      }
    ]
  },
  {
    "id": "Lab",
    "name": "帕鲁工作研究所",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Lab.webp",
    "description": "对帕鲁的各种工作进行研究的设施。\n在这个设施中让帕鲁工作，\n可以进行研究，获得各种效果。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      }
    ]
  },
  {
    "id": "DimensionPalStorage",
    "name": "帕鲁次元仓库",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DimensionPalStorage.webp",
    "description": "可以大量存放捕获帕鲁的设施。\n只要是公会成员，谁都可以进行帕鲁的存取。\n改为私密锁定时，则只能存放自己的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Expedition",
    "name": "帕鲁远征所",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Expedition.webp",
    "description": "可以派遣帕鲁到地下城等地方远征的设施。\n被派遣的帕鲁会在各地寻找物品或进行战斗，\n并将资源带回据点。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "20"
      }
    ]
  },
  {
    "id": "BaseCampWorkHard02",
    "name": "优质监控台",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampWorkHard02.webp",
    "description": "重新设计材料和结构，使得成品更为凝炼的监控台。\n不但能照常指挥工作分配，还能减缓据点内帕鲁的SAN值下降速度。\n稍微改善一点劳动环境，帕鲁们也就没那么多不满了吧。",
    "stats": [
      {
        "label": "科技",
        "value": "28"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "30"
      }
    ]
  },
  {
    "id": "BaseCampWorkerExtraStation",
    "name": "帕鲁终端控制台",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampWorkerExtraStation.webp",
    "description": "可远程操作帕鲁终端的设备。\n将它配置在你想要部署帕鲁的位置，自由地打造据点吧。",
    "stats": [
      {
        "label": "科技",
        "value": "32"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      }
    ]
  },
  {
    "id": "Altar",
    "name": "召唤的祭坛",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁其他",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Altar.webp",
    "description": "通过献上画着帕鲁的石板，\n就能在据点召唤强大的帕鲁。\n做好充分的战斗准备吧。",
    "stats": [
      {
        "label": "科技",
        "value": "33"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      }
    ]
  },
  {
    "id": "ElectricHatchingPalEgg",
    "name": "电能帕鲁蛋孵化器",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ElectricHatchingPalEgg.webp",
    "description": "用于孵化帕鲁蛋的装置。\n需要电力供应才能运作，\n但可自动将该孵化器的内部保持在最佳温度。",
    "stats": [
      {
        "label": "科技",
        "value": "36"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "2"
      }
    ]
  },
  {
    "id": "OperatingTable",
    "name": "帕鲁手术台",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_OperatingTable.webp",
    "description": "可以对帕鲁进行手术，\n改变帕鲁的性别和被动技能的设施。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      },
      {
        "label": "Healing",
        "value": "2.5"
      },
      {
        "label": "SAN Rate",
        "value": "0.1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "10"
      }
    ]
  },
  {
    "id": "MultiHatchingPalEgg",
    "name": "大型帕鲁蛋孵化器",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MultiHatchingPalEgg.webp",
    "description": "用于孵化帕鲁蛋的装置。\n可自动维持大致适宜的温度，\n并同时孵化多个蛋。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "4"
      }
    ]
  },
  {
    "id": "DismantlingConveyor",
    "name": "帕鲁解体传送带",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁其他",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DismantlingConveyor.webp",
    "description": "能够将放入的帕鲁自动解体的，梦幻般的设备。",
    "stats": [
      {
        "label": "科技",
        "value": "56"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "30"
      }
    ]
  },
  {
    "id": "MultiElectricHatchingPalEgg",
    "name": "大型电能帕鲁蛋孵化器",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MultiElectricHatchingPalEgg.webp",
    "description": "用于孵化帕鲁蛋的装置。\n需要电力供应才能运作，\n但可自动保持内部在最佳温度，并同时孵化多个蛋。",
    "stats": [
      {
        "label": "科技",
        "value": "58"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      },
      {
        "label": "Energy",
        "value": "800 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        "name": "六棱晶锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "20"
      }
    ]
  },
  {
    "id": "BaseCampWorkHard03",
    "name": "古代文明监控台",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁管理",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampWorkHard03.webp",
    "description": "镶嵌红色帕鲁矿的古代科技监视台。\n能通过全息影像界面对整个据点下达指示，同时延缓帕鲁SAN值降低的速度。\n它会发出特殊的波长包裹据点，在严苛的工作环境下也能抚慰帕鲁的心。",
    "stats": [
      {
        "label": "科技",
        "value": "71"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "5"
      }
    ]
  },
  {
    "id": "MultiElectricHatchingPalEggWithBreed",
    "name": "古代文明配种器",
    "category": "pal",
    "categoryLabel": "帕鲁",
    "group": "帕鲁培育",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MultiElectricHatchingPalEggWithBreed.webp",
    "description": "覆盖电子玻璃的古代文明高级配种设施。\n从产蛋到孵化都能全自动高速完成，还能提升稀有技能的遗传率。\n以全息投影监控设施内部的帕鲁，不再需要广大的牧场空间。",
    "stats": [
      {
        "label": "科技",
        "value": "76"
      },
      {
        "label": "工作适应性",
        "value": "1"
      },
      {
        "label": "Energy",
        "value": "1200 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AIcore.webp",
        "name": "AI核心",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "20"
      }
    ]
  },
  {
    "id": "ItemChest",
    "name": "木箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ItemChest.webp",
    "description": "可用于收纳道具。\n以木头制成，相当脆弱。\n拿来存放贵重物品不太让人放心。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Barrel_Wood",
    "name": "木桶",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Barrel_Wood.webp",
    "description": "可以用来收纳道具的木桶。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "Slots",
        "value": "8"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Box_Wood",
    "name": "木制箱子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Box_Wood.webp",
    "description": "可以用来收纳道具的木制箱子。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Shelf_Wood",
    "name": "木制架子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf_Wood.webp",
    "description": "可以用来收纳道具的木制架子。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "Slots",
        "value": "8"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Shelf_Cask_Wood",
    "name": "木制酒桶架",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf_Cask_Wood.webp",
    "description": "可以用来收纳道具的木制酒桶架。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "Slots",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Shelf_Hang01_Wood",
    "name": "木制壁挂式架子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf_Hang01_Wood.webp",
    "description": "可以用来收纳道具的木制架子。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      },
      {
        "label": "Slots",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Shelf01_Stone",
    "name": "古典式书架",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf01_Stone.webp",
    "description": "可以用来收纳道具的古典式书架。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Shelf02_Stone",
    "name": "古典式衣橱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf02_Stone.webp",
    "description": "可以用来收纳道具的古典式衣橱。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "Slots",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Shelf03_Stone",
    "name": "古典式抽屉柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf03_Stone.webp",
    "description": "可以用来收纳道具的古典式抽屉柜。\n上面装饰着帕鲁的照片。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Shelf04_Stone",
    "name": "古典式床头柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf04_Stone.webp",
    "description": "可以用来收纳道具的古典式床头柜。\n上面装饰着帕鲁的照片。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "Slots",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Shelf01_Wall_Iron",
    "name": "铁制壁架",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf01_Wall_Iron.webp",
    "description": "可以用来收纳道具的铁制壁架。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      },
      {
        "label": "Slots",
        "value": "3"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      }
    ]
  },
  {
    "id": "ItemChest_02",
    "name": "金属箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ItemChest_02.webp",
    "description": "可收纳物品。\n用金属加强后有一定强度。\n体积变大后，可收纳的容量也增加了。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "Slots",
        "value": "24"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "CoolerBox",
    "name": "保冷箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoolerBox.webp",
    "description": "小型食物储存库。\n将冰系帕鲁指派到这里工作时，\n可以使里面的食物不会轻易腐败。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "冷却",
        "value": "1"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        "name": "结冰器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Shelf05_Stone",
    "name": "古典式橱柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf05_Stone.webp",
    "description": "可以用来收纳道具的古典式橱柜。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "Slots",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Shelf06_Stone",
    "name": "古典式长型橱柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf06_Stone.webp",
    "description": "可以用来收纳道具的古典式长型橱柜。\n上面装饰着帕鲁的照片。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "Slots",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Shelf07_Stone",
    "name": "古典式大型橱柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf07_Stone.webp",
    "description": "可以用来收纳道具的古典式大型橱柜。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "Slots",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Shelf01_Wall_Stone",
    "name": "古典式壁橱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf01_Wall_Stone.webp",
    "description": "可以用来收纳道具的古典式橱柜。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      },
      {
        "label": "Slots",
        "value": "3"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        "name": "红色野莓",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Shelf01_Iron",
    "name": "铁制架子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf01_Iron.webp",
    "description": "可以用来收纳道具的铁制架子。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "Slots",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Shelf02_Iron",
    "name": "铁制长架",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf02_Iron.webp",
    "description": "可以用来收纳道具的铁制长架。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "Slots",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Shelf03_Iron",
    "name": "橘色储物柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf03_Iron.webp",
    "description": "可以用来收纳道具的橘色储物柜。\n上面贴着帕鲁图案的贴纸。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "Slots",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Shelf04_Iron",
    "name": "储物柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf04_Iron.webp",
    "description": "可以用来收纳道具的储物柜。\n上面贴着帕鲁图案的贴纸。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "Slots",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Container01_Iron",
    "name": "大型收纳箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Container01_Iron.webp",
    "description": "可以用来收纳道具的大型集装箱。\n设计模仿了古代伟大文明的遗物样式。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      },
      {
        "label": "Slots",
        "value": "40"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "100"
      }
    ]
  },
  {
    "id": "Box01_Iron",
    "name": "小型收纳箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Box01_Iron.webp",
    "description": "可以用来收纳道具的铁制箱子。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Box02_Iron",
    "name": "布质收纳箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Box02_Iron.webp",
    "description": "可以用来收纳道具的帆布铁制箱子。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      },
      {
        "label": "Slots",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Refrigerator",
    "name": "冰箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Refrigerator.webp",
    "description": "大型食物储存库。\n将冰系帕鲁指派到这里工作时，\n可以使里面的食物不会轻易腐败。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      },
      {
        "label": "冷却",
        "value": "1"
      },
      {
        "label": "Slots",
        "value": "25"
      },
      {
        "label": "Energy",
        "value": "50 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "5"
      }
    ]
  },
  {
    "id": "ItemChest_03",
    "name": "精炼金属箱",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ItemChest_03.webp",
    "description": "可收纳物品。\n因为是精炼金属制的，非常坚固。\n体积巨大，可作为安全的仓库使用。",
    "stats": [
      {
        "label": "科技",
        "value": "39"
      },
      {
        "label": "Slots",
        "value": "40"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      }
    ]
  },
  {
    "id": "GuildChest",
    "name": "公会箱子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_GuildChest.webp",
    "description": "可以瞬间透过亚空间传送箱子内容的箱子。\n这个箱子内的道具会在各据点之间共享。",
    "stats": [
      {
        "label": "科技",
        "value": "41"
      },
      {
        "label": "Slots",
        "value": "54"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        "name": "古代文明部件",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BaseCampItemDispenser",
    "name": "道具存取机",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampItemDispenser.webp",
    "description": "可以自由取出设置的据点内\n所有箱子中道具的装置。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "4"
      }
    ]
  },
  {
    "id": "Tansu",
    "name": "抽屉柜",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "收纳家具",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Tansu.webp",
    "description": "可以用来收纳道具的抽屉柜。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "ItemChest_04",
    "name": "高等文明箱子",
    "category": "storage",
    "categoryLabel": "收纳",
    "group": "箱子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ItemChest_04.webp",
    "description": "可用于收纳道具。\n非常坚固，存放空间也很大。\n可以当作巨大且安全的仓库使用。",
    "stats": [
      {
        "label": "科技",
        "value": "59"
      },
      {
        "label": "Slots",
        "value": "54"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        "name": "六棱晶锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        "name": "碳纤维",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "2"
      }
    ]
  },
  {
    "id": "CampFire",
    "name": "篝火",
    "category": "food",
    "categoryLabel": "食物",
    "group": "烹饪",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CampFire.webp",
    "description": "烹制食材时的必要设施。\n只能烧制普通食材。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "PalFoodBox",
    "name": "饲料箱",
    "category": "food",
    "categoryLabel": "食物",
    "group": "饲料箱",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PalFoodBox.webp",
    "description": "用于存放帕鲁饲料的箱子。\n肚子饿了的帕鲁会来这裡吃饲料。\n记得随时补充饲料，别让箱子空了。",
    "stats": [
      {
        "label": "科技",
        "value": "4"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FarmBlockV2_Berries",
    "name": "野莓农园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_Berries.webp",
    "description": "可培养红色野莓的农园。\n收获所需的时间较短，但不怎么能饱腹。\n为了收获，需要数只帕鲁进行播种与浇水。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_BerrySeeds.webp",
        "name": "野莓种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "FarmBlockV2_wheet",
    "name": "小麦农园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_wheet.webp",
    "description": "可培养小麦的农园。\n收获所需的时间比较一般。\n为了收获，需要数只帕鲁进行播种与浇水。",
    "stats": [
      {
        "label": "科技",
        "value": "15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WheatSeeds.webp",
        "name": "小麦种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      }
    ]
  },
  {
    "id": "CookingStove",
    "name": "料理锅",
    "category": "food",
    "categoryLabel": "食物",
    "group": "烹饪",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CookingStove.webp",
    "description": "烹制食材时的必要设施。\n使用锅子增加了可烹制范围。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "3"
      }
    ]
  },
  {
    "id": "FarmBlockV2_tomato",
    "name": "番茄农园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_tomato.webp",
    "description": "可培养番茄的农园。\n收获所需的时间较长，但可增加料理的变化。\n为了收获，需要数只帕鲁进行播种与浇水。",
    "stats": [
      {
        "label": "科技",
        "value": "21"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_TomatoSeeds.webp",
        "name": "番茄种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "5"
      }
    ]
  },
  {
    "id": "FarmBlockV2_Lettuce",
    "name": "生菜农园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_Lettuce.webp",
    "description": "可培养生菜的农园。\n收获所需的时间较长，但可增加料理的变化。\n为了收获，需要数只帕鲁进行播种与浇水。",
    "stats": [
      {
        "label": "科技",
        "value": "25"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_LettuceSeeds.webp",
        "name": "生菜种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "10"
      }
    ]
  },
  {
    "id": "FarmBlockV2_Potato",
    "name": "土豆园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_Potato.webp",
    "description": "可培育土豆的农园。\n此作物播种至收成所需时间较长，但可让料理更加丰富多元。\n需有数名帕鲁负责播种、灌溉及收获。",
    "stats": [
      {
        "label": "科技",
        "value": "29"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PotatoSeeds.webp",
        "name": "土豆种薯",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "3"
      }
    ]
  },
  {
    "id": "FarmBlockV2_Carrot",
    "name": "胡萝卜园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_Carrot.webp",
    "description": "可培育胡萝卜的农园。\n此作物播种至收成所需时间较长，但可让料理更加丰富多元。\n需有数名帕鲁负责播种、灌溉及收获。",
    "stats": [
      {
        "label": "科技",
        "value": "32"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarrotSeeds.webp",
        "name": "胡萝卜种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "1"
      }
    ]
  },
  {
    "id": "FarmBlockV2_Onion",
    "name": "洋葱园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FarmBlockV2_Onion.webp",
    "description": "可培育洋葱的农园。\n此作物播种至收成所需时间较长，但可让料理更加丰富多元。\n需有数名帕鲁负责播种、灌溉及收获。",
    "stats": [
      {
        "label": "科技",
        "value": "36"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_OnionSeeds.webp",
        "name": "洋葱种子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "2"
      }
    ]
  },
  {
    "id": "ElectricKitchen",
    "name": "电气厨房",
    "category": "food",
    "categoryLabel": "食物",
    "group": "烹饪",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ElectricKitchen.webp",
    "description": "烹制食材时的必要设施。\n需要电力，但可快速烹制许多食材。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "41"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "50 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "5"
      }
    ]
  },
  {
    "id": "HugeKitchen",
    "name": "大型厨房",
    "category": "food",
    "categoryLabel": "食物",
    "group": "烹饪",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_HugeKitchen.webp",
    "description": "烹制食材时的必要设施。\n扩大了占地面积让复数帕鲁可以同时进行烹调。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_HighGrade_Processed_Wood.webp",
        "name": "优质木板",
        "amount": "25"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "13"
      }
    ]
  },
  {
    "id": "CoolerPalFoodBox",
    "name": "低温保鲜饲料箱",
    "category": "food",
    "categoryLabel": "食物",
    "group": "饲料箱",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoolerPalFoodBox.webp",
    "description": "可以冷冻的饲料箱。\n将冰系帕鲁指派到这里工作时，\n可以使里面的食物不会轻易腐败。",
    "stats": [
      {
        "label": "科技",
        "value": "51"
      },
      {
        "label": "冷却",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        "name": "塑钢",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "15"
      }
    ]
  },
  {
    "id": "AncientCookingStove",
    "name": "古代文明厨房",
    "category": "food",
    "categoryLabel": "食物",
    "group": "烹饪",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientCookingStove.webp",
    "description": "从既有的食谱到未知的新作都能做出来的古代文明厨房。\n先用火焰加热，再手工完成最后的步骤，即可做出各种料理。\n要使其运作，需要具备高级生火和手工作业适应性的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "70"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "80"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Farm_SkillFruits",
    "name": "技能果树园",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Farm_SkillFruits.webp",
    "description": "可以种植技能果实的农园。\n将果实作为原种植入地面，\n就可以收获多个相同种类的果实。",
    "stats": [
      {
        "label": "科技",
        "value": "71"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_WorldTree.webp",
        "name": "神秘木材",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "500"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyIslandOre.webp",
        "name": "烈阳金属",
        "amount": "150"
      }
    ]
  },
  {
    "id": "AncientFarmBlock",
    "name": "古代文明栽培器",
    "category": "food",
    "categoryLabel": "食物",
    "group": "农园",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientFarmBlock.webp",
    "description": "利用世界树之力可以培育帕洛斯群岛各种植物的古代文明栽培器。\n体积比野莓园小很多，能设置在室内，但培育的流程与从前无异。\n要使其运作，需要拥有高级播种、浇水、采集适应性的帕鲁。",
    "stats": [
      {
        "label": "科技",
        "value": "78"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeHolyWater.webp",
        "name": "世界树圣水",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_WorldTree.webp",
        "name": "神秘木材",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "PlayerBed_02",
    "name": "劣质的床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PlayerBed_02.webp",
    "description": "人类用的破床。\n可供人类在受伤时或夜晚睡觉。\n只有在屋顶下才能安心入睡。",
    "stats": [
      {
        "label": "科技",
        "value": "3"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wool.webp",
        "name": "羊毛",
        "amount": "1"
      }
    ]
  },
  {
    "id": "MedicalPalBed_02",
    "name": "稻草帕鲁床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicalPalBed_02.webp",
    "description": "帕鲁用的稻草床。\n可供帕鲁在受伤时或夜晚睡觉。\n虽然很硬，但总比没有强。",
    "stats": [
      {
        "label": "科技",
        "value": "3"
      },
      {
        "label": "Healing",
        "value": "1.5"
      },
      {
        "label": "SAN Rate",
        "value": "0.05"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Spa",
    "name": "温泉",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Spa.webp",
    "description": "供疲惫的据点帕鲁休息的设施。\n不仅可以消除劳动之后的疲劳感，也可以恢复SAN值。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      },
      {
        "label": "SAN Rate",
        "value": "0.5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "7"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Heater",
    "name": "取暖器",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_HeaterMedieval.webp",
    "description": "输送暖风，提升据点温度的装置。\n虽然不是很暖，但可抵御少许寒冷。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Cooler",
    "name": "降温器",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoolerMedieval.webp",
    "description": "输送冷风，降低据点温度的装置。\n虽然不是很凉爽，但可抵御少许炎热。\n需要冰系帕鲁冷却。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      },
      {
        "label": "冷却",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        "name": "结冰器官",
        "amount": "5"
      }
    ]
  },
  {
    "id": "MedicalPalBed_03",
    "name": "松软帕鲁床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicalPalBed_03.webp",
    "description": "帕鲁用的软床，可睡一个好觉。\n可供帕鲁在受伤时或夜晚睡觉。\n松松软软的，帕鲁也一定很开心。",
    "stats": [
      {
        "label": "科技",
        "value": "24"
      },
      {
        "label": "Healing",
        "value": "2.5"
      },
      {
        "label": "SAN Rate",
        "value": "0.1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "PalMedicineBox",
    "name": "药品柜",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PalMedicineBox.webp",
    "description": "用来存放帕鲁的药物的柜子。\n生病的帕鲁会来这里吃药。\n记得随时补充药物，别让柜子空了。",
    "stats": [
      {
        "label": "科技",
        "value": "24"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Clinic",
    "name": "诊疗所",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "基础设施",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Clinic.webp",
    "description": "基础医疗设施，用于管理在据点工作的帕鲁们的健康状态。\n分派擅长制药的帕鲁，就能减缓SAN值下降，降低帕鲁生病受伤的频率。\n它能维持的环境清洁度存在上限，但在初期管理据点卫生时相当重要。",
    "stats": [
      {
        "label": "科技",
        "value": "24"
      },
      {
        "label": "制药",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "15"
      }
    ]
  },
  {
    "id": "ElectricGenerator",
    "name": "发电机",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_EnergyGenerator_Electric.webp",
    "description": "储存雷系帕鲁生产的电的设施。\n没有它的话，电力设施无法运作。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "发电",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Storage",
        "value": "250000"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "20"
      }
    ]
  },
  {
    "id": "ManualElectricGenerator",
    "name": "人力发电机",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ManualElectricGenerator.webp",
    "description": "利用旋转动能转换为电能的设施。\n效率不佳，而且工作的帕鲁会降低SAN值，\n但可以获得经验值。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "工作适应性",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.3"
      },
      {
        "label": "Storage",
        "value": "50000"
      },
      {
        "label": "Rate",
        "value": "x0.2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "5"
      }
    ]
  },
  {
    "id": "PlayerBed_03",
    "name": "优质的床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PlayerBed_03.webp",
    "description": "人类用的软床，可睡一个好觉。\n可供人类在受伤时或夜晚睡觉。\n只有在屋顶下才能安心入睡。",
    "stats": [
      {
        "label": "科技",
        "value": "28"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Spa2",
    "name": "优质温泉",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Spa_2.webp",
    "description": "供疲惫的据点帕鲁休息的设施。\n比一般设施更加舒适，所以SAN值的恢复效果也更加显著。",
    "stats": [
      {
        "label": "科技",
        "value": "31"
      },
      {
        "label": "SAN Rate",
        "value": "0.75"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "10"
      }
    ]
  },
  {
    "id": "MedicalPalBed_04",
    "name": "大型帕鲁床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicalPalBed_04.webp",
    "description": "帕鲁用的大床，可睡一个好觉。\n可供帕鲁在受伤时或夜晚睡觉。\n即使是大型帕鲁也能在这张大床上睡个好觉。",
    "stats": [
      {
        "label": "科技",
        "value": "36"
      },
      {
        "label": "Healing",
        "value": "5"
      },
      {
        "label": "SAN Rate",
        "value": "0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "EnergyStorage_Electric",
    "name": "蓄电器",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_EnergyStorage_Electric.webp",
    "description": "可以储存发电机发电的多余电力的设施。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "5"
      }
    ]
  },
  {
    "id": "ElectricHeater",
    "name": "电气取暖器",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_HeaterElectric.webp",
    "description": "输送暖风，提升据点温度的装置。\n使用电力，可大幅提升温度。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "41"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "100 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "10"
      }
    ]
  },
  {
    "id": "ElectricCooler",
    "name": "电气降温器",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "基础设施",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoolerElectric.webp",
    "description": "输送冷风，降低据点温度的装置。\n使用电力，可大幅降低温度。\n需要冰系帕鲁冷却。",
    "stats": [
      {
        "label": "科技",
        "value": "42"
      },
      {
        "label": "冷却",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Energy",
        "value": "100 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "10"
      }
    ]
  },
  {
    "id": "ElectricGenerator_Large",
    "name": "大型发电机",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ElectricGenerator_Large.webp",
    "description": "储存雷系帕鲁生产的电的设施。\n更加大型，发电效率也更高。",
    "stats": [
      {
        "label": "科技",
        "value": "50"
      },
      {
        "label": "发电",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Storage",
        "value": "1000000"
      },
      {
        "label": "Rate",
        "value": "x3"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "200"
      }
    ]
  },
  {
    "id": "MedicalPalBed_05",
    "name": "高等文明帕鲁胶囊",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicalPalBed_05.webp",
    "description": "帕鲁用的回复胶囊。\n帕鲁在晚上或受伤时可以睡在这里。\n因为技术革新，恢复量提高了。",
    "stats": [
      {
        "label": "科技",
        "value": "56"
      },
      {
        "label": "Healing",
        "value": "10"
      },
      {
        "label": "SAN Rate",
        "value": "0.2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "6"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Spa3",
    "name": "和风温泉",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Spa3.webp",
    "description": "供疲惫的据点帕鲁休息的设施。\n洋溢着浓浓和风的疗愈空间，所以SAN值的恢复效果也更加显著。",
    "stats": [
      {
        "label": "科技",
        "value": "64"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ManganeseIngot.webp",
        "name": "珊瑚锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Ancient_Clinic",
    "name": "古代文明诊疗所",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_Clinic.webp",
    "description": "复现了古代高级医疗技术的顶级医疗设施。\n保护能力远远凌驾于普通的诊所之上。\n只需为其分派熟练的制药帕鲁，即便据点的工作条件非常严苛，也能将卫生等级维持在最高水准。",
    "stats": [
      {
        "label": "科技",
        "value": "73"
      },
      {
        "label": "制药",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeHolyWater.webp",
        "name": "世界树圣水",
        "amount": "45"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Ancient_MedicalPalBed",
    "name": "古代文明帕鲁床",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "床（寝具）",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_MedicalPalBed.webp",
    "description": "在治愈生命的古代胶囊里铺上柔软的衬布，是最高级的帕鲁床。\n在各类帕鲁床中具有最高的SAN值恢复量，能够迅速缓解疲劳。\n尺寸与大型帕鲁床相同，体型较大的帕鲁也能舒适地休息。",
    "stats": [
      {
        "label": "科技",
        "value": "73"
      },
      {
        "label": "Healing",
        "value": "10"
      },
      {
        "label": "SAN Rate",
        "value": "0.5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeHolyWater.webp",
        "name": "世界树圣水",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_WorldTree.webp",
        "name": "神秘木材",
        "amount": "3"
      }
    ]
  },
  {
    "id": "AncientElectricGenerator",
    "name": "古代文明发电机",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "电力",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_AncientElectricGenerator.webp",
    "description": "复现了失落的古代技术制造出的超高效发电机。\n它能制造出庞大的电力，但运作时有过热的风险。\n运作时除了需要有高级发电适应性的帕鲁，还需要具备浇水适应性的帕鲁负责冷却。",
    "stats": [
      {
        "label": "科技",
        "value": "75"
      },
      {
        "label": "发电",
        "value": "6"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      },
      {
        "label": "Storage",
        "value": "2000000"
      },
      {
        "label": "Rate",
        "value": "x20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "200"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        "name": "古代文明核心",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Ancient_Spa",
    "name": "古代文明温泉",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "健康管理",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_Spa.webp",
    "description": "古代科技制造的温泉，能泡到溶有帕鲁矿成分的特殊热水。\n在所有温泉中拥有最高等级的SAN值恢复量，还能一并恢复体力。\n尺寸与旧有的温泉相近，能让受伤的帕鲁享受到极尽疗愈。",
    "stats": [
      {
        "label": "科技",
        "value": "76"
      },
      {
        "label": "SAN Rate",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "100"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeHolyWater.webp",
        "name": "世界树圣水",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FastTravelPoint",
    "name": "巨鹫之像",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "In Develop",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/Icon/T_icon_buildObject_FastTravelPoint.webp",
    "description": "皮皮鸡造型的石碑。\n配置后可进行快速传送。",
    "stats": [
      {
        "label": "SAN",
        "value": "-0.08"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Ancient_AirConditioner",
    "name": "古代文明空调",
    "category": "infrastructure",
    "categoryLabel": "基础设施",
    "group": "In Develop",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_AirConditioner.webp",
    "description": "",
    "stats": [
      {
        "label": "Energy",
        "value": "500 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_WorldTreeIngot.webp",
        "name": "帕鲁树晶锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AIcore.webp",
        "name": "AI核心",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Thermal_Core.webp",
        "name": "超高热核心",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Torch",
    "name": "固定式火把",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TorchStand.webp",
    "description": "可在黑夜照亮据点的光源。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Light_FirePlace01",
    "name": "砖制暖炉",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_FirePlace01.webp",
    "description": "可以当作光源的砖制暖炉。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      }
    ]
  },
  {
    "id": "Light_FirePlace02",
    "name": "暖炉",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_FirePlace02.webp",
    "description": "可以当作光源的暖炉。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "30"
      }
    ]
  },
  {
    "id": "WallTorch",
    "name": "壁挂火把",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "壁挂式",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TorchHang.webp",
    "description": "可在黑夜照亮据点的光源。\n可设置在墙壁上。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      },
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Lamp",
    "name": "固定式电灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LampStand.webp",
    "description": "可在黑夜照亮据点的光源。\n需要电力，但可大范围照明。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Light_FloorLamp01",
    "name": "古典式棕色落地灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_FloorLamp01.webp",
    "description": "可以当作光源的古典式棕色落地灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_FloorLamp02",
    "name": "古典式红色落地灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_FloorLamp02.webp",
    "description": "可以当作光源的古典式红色落地灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_CandleSticks_Top",
    "name": "水晶吊灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "天花板",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_CandleSticks_Top.webp",
    "description": "可以当作光源的水晶吊灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_CandleSticks_Wall",
    "name": "壁灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "壁挂式",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_CandleSticks_Wall.webp",
    "description": "可以当作光源的挂灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "Energy",
        "value": "7 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "2"
      }
    ]
  },
  {
    "id": "CeilingLamp",
    "name": "天花板吊灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "天花板",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LampTop.webp",
    "description": "可在黑夜照亮据点的光源。\n可设置在天花板上。\n需要电力，但可大范围照明。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "LargeLamp",
    "name": "大型固定式灯具",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "照明",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LampStandLarge.webp",
    "description": "可在黑夜照亮据点的光源。\n需要更多的电力，但可更大范围照明。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "Energy",
        "value": "20 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Light_LightPole01",
    "name": "普通路灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_LightPole01.webp",
    "description": "可以当作光源的普通路灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_LightPole02",
    "name": "双臂路灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_LightPole02.webp",
    "description": "可以当作光源的双臂路灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_LightPole03",
    "name": "复古路灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_LightPole03.webp",
    "description": "可以当作光源的复古路灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Light_LightPole04",
    "name": "时髦路灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Light_LightPole04.webp",
    "description": "可以当作光源的时髦路灯。\n需要通电才可以使用。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      },
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "3"
      }
    ]
  },
  {
    "id": "LargeCeilingLamp",
    "name": "大型天花板吊灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "天花板",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LampTopLarge.webp",
    "description": "可在黑夜照亮据点的光源。\n可设置在天花板上。\n需要更多的电力，但可更大范围照明。",
    "stats": [
      {
        "label": "科技",
        "value": "47"
      },
      {
        "label": "Energy",
        "value": "20 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Andon",
    "name": "行灯",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Andon.webp",
    "description": "装饰用的行灯。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "3"
      }
    ]
  },
  {
    "id": "WallTorch02",
    "name": "庄严壁挂火把",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "壁挂式",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WallTorch02.webp",
    "description": "燃烧着永炎同心会所信奉之火的庄严壁挂火把。\n此照明设施可设置在墙壁上。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "CandleStand",
    "name": "庄严烛台",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CandleStand.webp",
    "description": "燃烧着永炎同心会所信奉之火的庄严烛台。\n此照明设施可设置在地板上。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "FireStand",
    "name": "仪式用烛台",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FireStand.webp",
    "description": "燃烧着永炎同心会所信奉之火的仪式用烛台。\n此照明设施可设置在地板上。\n需要火系帕鲁点火。",
    "stats": [
      {
        "label": "生火",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "LanternTop",
    "name": "日式白灯笼",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "天花板",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LanternTop.webp",
    "description": "装饰用的日式白灯笼。",
    "stats": [
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Shrine_Lantern",
    "name": "神社赤灯笼",
    "category": "lighting",
    "categoryLabel": "照明",
    "group": "落地式",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shrine_Lantern.webp",
    "description": "装饰用的神社赤灯笼。",
    "stats": [
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Wooden_foundation",
    "name": "木头地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_wall",
    "name": "木头墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Wall_V2.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wood_WindowWall",
    "name": "木制带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wood_TriangleWall",
    "name": "木制三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_roof",
    "name": "木头屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wood_SlantedRoof",
    "name": "木制斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_SlantedRoof.webp",
    "description": "建在墙壁上，用于抵御风雨的斜屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_stair",
    "name": "木头楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_DoorWall",
    "name": "木门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_DoorWall.webp",
    "description": "建于地基上的门，可作为出入口。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_pillar",
    "name": "木制立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_pillar.webp",
    "description": "用来支撑建筑的立柱。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wood_Fence",
    "name": "木制栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Wooden_TriangleFoundation",
    "name": "木制三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_DiagonalWall",
    "name": "木制对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_TriangleRoof",
    "name": "木制三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_TriangleStairsCorner",
    "name": "木制拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wood_TriangleWallReverse",
    "name": "木制三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_WallGate",
    "name": "木制帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_SlopedRoofCorner",
    "name": "木制三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_PyramidRoof",
    "name": "木制方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_SlopedRoofCornerReverse",
    "name": "木制三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "2"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Wooden_ladder",
    "name": "梯子",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "木材",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wooden_Ladder.webp",
    "description": "可以用来爬上高处的梯子。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Stone_foundation",
    "name": "石头地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_wall",
    "name": "石头墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Wall_V2.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_WindowWall",
    "name": "石制带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_TriangleWall",
    "name": "石制三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_roof",
    "name": "石头屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_SlantedRoof",
    "name": "石制斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_stair",
    "name": "石头楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_DoorWall",
    "name": "石门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_DoorWall.webp",
    "description": "建造在地基上作为入口的门。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_pillar",
    "name": "石制立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_pillar.webp",
    "description": "用来支撑建筑的立柱。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_Fence",
    "name": "石制栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_TriangleFoundation",
    "name": "石制三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_DiagonalWall",
    "name": "石制对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_TriangleRoof",
    "name": "石制三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_TriangleStairsCorner",
    "name": "石制拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_TriangleWallReverse",
    "name": "石制三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_WallGate",
    "name": "石制帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_WallGate.webp",
    "description": "建造在地基上的帕鲁用通道口，可作为出入口。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_SlopedRoofCorner",
    "name": "石制三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_PyramidRoof",
    "name": "石制方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stone_SlopedRoofCornerReverse",
    "name": "石制三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "石材",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Metal_foundation",
    "name": "金属地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_Foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_wall",
    "name": "金属墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_Wall_V2.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_WindowWall",
    "name": "金属带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_TriangleWall",
    "name": "金属三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_roof",
    "name": "金属屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_Roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_SlantedRoof",
    "name": "金属斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_stair",
    "name": "金属楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_Stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_DoorWall",
    "name": "金属门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_DoorWall.webp",
    "description": "建造在地基上作为入口的门。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Metal_pillars",
    "name": "金属立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_pillar.webp",
    "description": "用来支撑建筑的立柱。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_Fence",
    "name": "金属栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Iron_TriangleFoundation",
    "name": "金属三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_DiagonalWall",
    "name": "金属对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_TriangleRoof",
    "name": "金属三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_TriangleStairsCorner",
    "name": "金属拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_TriangleWallReverse",
    "name": "金属三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_WallGate",
    "name": "金属帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_SlopedRoofCorner",
    "name": "金属三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_PyramidRoof",
    "name": "金属方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Iron_SlopedRoofCornerReverse",
    "name": "金属三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "金属",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Iron_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_foundation",
    "name": "玻璃地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_wall",
    "name": "玻璃墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_wall.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_WindowWall",
    "name": "玻璃带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_TriangleWall",
    "name": "玻璃三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_roof",
    "name": "玻璃屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_SlantedRoof",
    "name": "玻璃斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_stair",
    "name": "玻璃楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_DoorWall",
    "name": "玻璃门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_DoorWall.webp",
    "description": "建于地基上的门，可作为出入口。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_pillars",
    "name": "玻璃立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_pillar.webp",
    "description": "用来支撑建筑的立柱。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_Fence",
    "name": "玻璃栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Glass_TriangleFoundation",
    "name": "玻璃三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_DiagonalWall",
    "name": "玻璃对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_TriangleRoof",
    "name": "玻璃三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_TriangleStairsCorner",
    "name": "玻璃拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_TriangleWallReverse",
    "name": "玻璃三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_WallGate",
    "name": "玻璃帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_SlopedRoofCorner",
    "name": "玻璃三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_PyramidRoof",
    "name": "玻璃方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Glass_SlopedRoofCornerReverse",
    "name": "玻璃三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "玻璃",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Glass_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n以钢化玻璃制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "45"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "JapaneseStyle_wall_01",
    "name": "和风墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_wall_01.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_DoorWall_01",
    "name": "和风门A",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_DoorWall_01.webp",
    "description": "建于地基上的门，可作为出入口。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_DoorWall_02",
    "name": "和风门B",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_DoorWall_02.webp",
    "description": "建于地基上的横拉门，可作为出入口。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_roof_01",
    "name": "和风屋顶A",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_roof_01.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n上层由榻榻米组成。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_roof_02",
    "name": "和风屋顶B",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_roof_02.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n上层由瓦片组成。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_SlantedRoof",
    "name": "和风斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleWall",
    "name": "和风三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_WindowWall",
    "name": "和风带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_foundation",
    "name": "和风地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_stair",
    "name": "和风楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_Pillar",
    "name": "和风立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_Pillar.webp",
    "description": "用来支撑建筑的立柱。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_DoorWall_03",
    "name": "和风门C",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_DoorWall_03.webp",
    "description": "建于地基上的纸拉门，可作为出入口。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_Fence",
    "name": "和风栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "5"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleFoundation",
    "name": "和风三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_DiagonalWall",
    "name": "和风对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleRoof_01",
    "name": "和风三角屋顶A",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleRoof_01.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n上层由榻榻米组成。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleRoof_02",
    "name": "和风三角屋顶B",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleRoof_02.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n上层由瓦片组成。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleStairsCorner_01",
    "name": "和风拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleWallReverse",
    "name": "和风三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_WallGate",
    "name": "和风帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_SlopedRoofCorner",
    "name": "和风三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_PyramidRoof",
    "name": "和风方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "JapaneseStyle_SlopedRoofCornerReverse",
    "name": "和风三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "和风",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n可以建造出时尚的日式建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "SF_foundation",
    "name": "简约地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_wall",
    "name": "简约墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_wall.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_WindowWall",
    "name": "简约带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_TriangleWall",
    "name": "简约三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_roof",
    "name": "简约屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_SlantedRoof",
    "name": "简约斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_stair",
    "name": "简约楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_DoorWall",
    "name": "简约门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_DoorWall.webp",
    "description": "建于地基上的门，可作为出入口。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_pillars",
    "name": "简约立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_Pillars.webp",
    "description": "用来支撑建筑的立柱。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_Fence",
    "name": "简约栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "2"
      }
    ]
  },
  {
    "id": "SF_TriangleFoundation",
    "name": "简约三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_DiagonalWall",
    "name": "简约对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_TriangleRoof",
    "name": "简约三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_TriangleStairsCorner",
    "name": "简约拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_TriangleWallReverse",
    "name": "简约三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_WallGate",
    "name": "简约帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_SlopedRoofCorner",
    "name": "简约三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_PyramidRoof",
    "name": "简约方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SF_SlopedRoofCornerReverse",
    "name": "简约三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "简约",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n可以建造出近未来风格的简约建筑。",
    "stats": [
      {
        "label": "科技",
        "value": "62"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Ancient_SlopedRoofCornerReverse",
    "name": "古代文明三角斜屋顶（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_SlopedRoofCornerReverse.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶（反向）。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_foundation",
    "name": "古代文明地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_foundation.webp",
    "description": "用于在上面建造墙壁或设施的地基。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_wall",
    "name": "古代文明墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_wall.webp",
    "description": "建在地基上，用于防止入侵者的墙壁。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_roof",
    "name": "古代文明屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_roof.webp",
    "description": "建在墙壁上，用于遮风避雨的屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_stair",
    "name": "古代文明楼梯",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_stair.webp",
    "description": "放在地基或屋顶下方，用于攀登的楼梯。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_DoorWall",
    "name": "古代文明门",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_DoorWall.webp",
    "description": "建造在地基上作为入口的门。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_TriangleWall",
    "name": "古代文明三角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_TriangleWall.webp",
    "description": "建在地基上的三角墙。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_SlantedRoof",
    "name": "古代文明斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_SlantedRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的斜屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_WindowWall",
    "name": "古代文明带窗墙壁",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_WindowWall.webp",
    "description": "建在地基上，用于防止入侵者的带窗墙壁。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_Pillars",
    "name": "古代文明立柱",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_Pillars.webp",
    "description": "用来支撑建筑的立柱。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_TriangleFoundation",
    "name": "古代文明三角地基",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_TriangleFoundation.webp",
    "description": "用于在上面建造墙壁或设施的三角地基。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_DiagonalWall",
    "name": "古代文明对角墙",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_DiagonalWall.webp",
    "description": "建在三角地基上，用于防止入侵者的对角墙壁。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_TriangleRoof",
    "name": "古代文明三角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_TriangleRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的三角屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_TriangleStairsCorner",
    "name": "古代文明拐角屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_TriangleStairsCorner.webp",
    "description": "建在墙壁上，用于遮风避雨的拐角屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_TriangleWallReverse",
    "name": "古代文明三角墙（反向）",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_TriangleWallReverse.webp",
    "description": "建在地基上的三角墙（反向）。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_WallGate",
    "name": "古代文明帕鲁用通道口",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_WallGate.webp",
    "description": "建于地基上的帕鲁用通道口，可作为出入口。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_SlopedRoofCorner",
    "name": "古代文明三角斜屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_SlopedRoofCorner.webp",
    "description": "建在对角墙上，用于遮风避雨的三角斜屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_PyramidRoof",
    "name": "古代文明方锥屋顶",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_PyramidRoof.webp",
    "description": "建在墙壁上，用于遮风避雨的锥形屋顶。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Ancient_Fence",
    "name": "古代文明栅栏",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "古代文明",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ancient_Fence.webp",
    "description": "建在地基或屋顶上，用于防止坠落的栅栏。\n复现了古代文明的建筑样式。",
    "stats": [
      {
        "label": "科技",
        "value": "67"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_SkyislandIngot.webp",
        "name": "烈阳金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "JapaneseStyle_TriangleStairsCorner_02",
    "name": "JapaneseStyle_TriangleStairsCorner_02",
    "category": "foundations",
    "categoryLabel": "建筑",
    "group": "In Develop",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JapaneseStyle_TriangleStairsCorner.webp",
    "description": "zh_Hans_Text",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "4"
      }
    ]
  },
  {
    "id": "DefenseWait",
    "name": "沙袋",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DefenseWait.webp",
    "description": "保护据点不受敌人攻击的防御设施。\n部署于此的帕鲁不会执行其他工作，\n并总是保持警惕，随时准备好应对可能会发生的战斗。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      },
      {
        "label": "工作适应性",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.02"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "BaseCampBattleDirector",
    "name": "警钟",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BaseCampBattleDirector.webp",
    "description": "用于更改据点内帕鲁警戒状态的钟。\n可随时于「迎击外敌」及「专心工作」之间切换。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      }
    ]
  },
  {
    "id": "DefenseWall_Wood",
    "name": "木制防御墙",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DefenseWall_Wood.webp",
    "description": "防止外敌入侵的巨大防御墙。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Wood_Gate",
    "name": "木制大门",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wood_Gate.webp",
    "description": "稍大体型的帕鲁也能通过的大门。\n以木头制成，相当脆弱。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Trap_Noose",
    "name": "套索陷阱",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_Noose.webp",
    "description": "这种陷阱能抓住途经的帕鲁。\n受困的帕鲁更易被帕鲁球捕获。\n只对小型帕鲁有效。",
    "stats": [
      {
        "label": "科技",
        "value": "8"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Trap_LegHold",
    "name": "捕兽夹（小）",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_LegHold.webp",
    "description": "这种陷阱能让踩到的帕鲁困住。\n受困的帕鲁更易被帕鲁球捕获。\n只对小型帕鲁有效。",
    "stats": [
      {
        "label": "科技",
        "value": "10"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "DefenseWall",
    "name": "防御墙",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DefenseWall.webp",
    "description": "防止外敌入侵的巨大防御墙。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Stone_Gate",
    "name": "石制大门",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stone_Gate.webp",
    "description": "稍大体型的帕鲁也能通过的大门。\n以石头制成，还算坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "19"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Trap_LegHold_Big",
    "name": "捕兽夹（大）",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_LegHold_Big.webp",
    "description": "这种捕兽夹可夹住大型帕鲁，使之无法动弹。\n受困的帕鲁更易被帕鲁球捕获。\n只对大型帕鲁有效，小型帕鲁不会触发机关。",
    "stats": [
      {
        "label": "科技",
        "value": "21"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      }
    ]
  },
  {
    "id": "DefenseBowGun",
    "name": "固定式十字弓",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_efenseBulletLauncher_BowGun.webp",
    "description": "可以部署帕鲁驻守的防御设施。\n将具备「手工作业」适应性的帕鲁分派到这里，\n它就会操控十字弓坚守据点。",
    "stats": [
      {
        "label": "科技",
        "value": "26"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.02"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "5"
      }
    ]
  },
  {
    "id": "DefenseWall_Metal",
    "name": "金属防御墙",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DefenseWall_Metal.webp",
    "description": "防止外敌入侵的巨大防御墙。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Metal_Gate",
    "name": "铁制大门",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御墙",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Metal_Gate.webp",
    "description": "稍大体型的帕鲁也能通过的大门。\n以金属制成，非常坚固。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Trap_MineAttack",
    "name": "地雷",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_MineAttack.webp",
    "description": "这种陷阱被帕鲁踩到便会爆炸，\n并对大范围的目标造成伤害。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Trap_MineElecShock",
    "name": "电击地雷",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_MineElecShock.webp",
    "description": "这种陷阱能让踩到的帕鲁触电。\n触电时的帕鲁更易被帕鲁球捕获。",
    "stats": [
      {
        "label": "科技",
        "value": "33"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Trap_MineFreeze",
    "name": "结冰地雷",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "防御",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Trap_MineFreeze.webp",
    "description": "这种陷阱能让踩到的帕鲁冻结。\n被冻结的帕鲁更易被帕鲁球捕获。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        "name": "结冰器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "DefenseMachinegun",
    "name": "固定式机关枪",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DefenseMachinegun.webp",
    "description": "可以部署帕鲁驻守的防御设施。\n将具备「手工作业」适应性的帕鲁分派到这里，\n它就会操控机关枪坚守据点。",
    "stats": [
      {
        "label": "科技",
        "value": "40"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.02"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "15"
      }
    ]
  },
  {
    "id": "DefenseMissile",
    "name": "固定式导弹发射器",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "迎击设施",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_efenseBulletLauncher_Missile.webp",
    "description": "可以部署帕鲁驻守的防御设施。\n将具备「手工作业」适应性的帕鲁分派到这里，\n它就会操控导弹发射器坚守据点。",
    "stats": [
      {
        "label": "科技",
        "value": "50"
      },
      {
        "label": "手工作业",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.02"
      },
      {
        "label": "Energy",
        "value": "1000 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Computer.webp",
        "name": "电脑",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "30"
      }
    ]
  },
  {
    "id": "Trap_MovingPanel",
    "name": "移动面板",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "In Develop",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "移动面板的说明",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "50"
      }
    ]
  },
  {
    "id": "DefenseMachinegun_AutoTurret",
    "name": "古代文明防御塔",
    "category": "defenses",
    "categoryLabel": "防御",
    "group": "In Develop",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "古代文明的无人防御塔，具备相当于火箭发射器的口径与火力。\n无需配置弹药和帕鲁，只消耗电力就能全自动迎击敌人。\n性能非常强大，但需要庞大的电力维持其运作。",
    "stats": [
      {
        "label": "Energy",
        "value": "10 Per Sec"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "15"
      }
    ]
  },
  {
    "id": "TableSquare_Wood",
    "name": "方桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSquare_Wood.webp",
    "description": "装饰用的方桌。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        "name": "红色野莓",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TableCircular_Wood",
    "name": "圆桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableCircular_Wood.webp",
    "description": "装饰用的圆桌。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        "name": "红色野莓",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Bench_Wood",
    "name": "木制长椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Bench_Wood.webp",
    "description": "装饰用的木制长椅。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Stool_Wood",
    "name": "木制凳子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stool_Wood.webp",
    "description": "装饰用的木制凳子。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Stool_High_Wood",
    "name": "木制高脚凳",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stool_High_Wood.webp",
    "description": "装饰用的木制高脚凳。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "8"
      }
    ]
  },
  {
    "id": "Chair01_Wood",
    "name": "木椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair01_Wood.webp",
    "description": "装饰用的木椅。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Shelf_Hang02_Wood",
    "name": "木制壁挂式装饰架子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shelf_Hang02_Wood.webp",
    "description": "装饰用的木制架子。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Counter_Wood",
    "name": "木制吧台",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Counter_Wood.webp",
    "description": "装饰用的木制吧台。",
    "stats": [
      {
        "label": "科技",
        "value": "5"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Plant01_Plant",
    "name": "观赏植物",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Plant01_Plant.webp",
    "description": "装饰用的观叶植物。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Plant02_Plant",
    "name": "椅子上的观赏植物",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Plant02_Plant.webp",
    "description": "装饰用的椅子上的观叶植物。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Plant03_Plant",
    "name": "桌上观赏植物",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Plant03_Plant.webp",
    "description": "装饰用的桌上观叶植物。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Plant04_Plant",
    "name": "盆栽观赏植物",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Plant04_Plant.webp",
    "description": "装饰用的盆栽观叶植物。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Ivy01",
    "name": "悬挂式大型藤蔓",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ivy01.webp",
    "description": "装饰用的大型藤蔓。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Ivy02",
    "name": "悬挂式小型藤蔓",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ivy02.webp",
    "description": "装饰用的小型藤蔓。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Ivy03",
    "name": "悬挂式长型藤蔓",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ivy03.webp",
    "description": "装饰用的长型藤蔓。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "7"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Rug01_Stone",
    "name": "古典式地毯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "地毯（铺设物）",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Rug01_Stone.webp",
    "description": "装饰用的古典式地毯。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
        "name": "毒腺",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Rug02_Stone",
    "name": "古典式红色地毯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "地毯（铺设物）",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Rug02_Stone.webp",
    "description": "装饰用的古典式红色地毯。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Rug03_Stone",
    "name": "古典式绿色地毯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "地毯（铺设物）",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Rug03_Stone.webp",
    "description": "装饰用的古典式绿色地毯。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        "name": "优质帕鲁油",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Rug04_Stone",
    "name": "古典式长条地毯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "地毯（铺设物）",
    "groupOrder": 4,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Rug04_Stone.webp",
    "description": "装饰用的古典式长条地毯。",
    "stats": [
      {
        "label": "科技",
        "value": "9"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Chair01_Stone",
    "name": "古典式木椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair01_Stone.webp",
    "description": "装饰用的古典式木椅。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Chair02_Stone",
    "name": "古典式绿色木椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair02_Stone.webp",
    "description": "装饰用的古典式绿色木椅。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
        "name": "毒腺",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Stool01_Stone",
    "name": "古典式凳子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stool01_Stone.webp",
    "description": "装饰用的古典式凳子。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Hunter_Flag",
    "name": "盗猎团团旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Hunter_Flag.webp",
    "description": "装饰用的盗猎团团旗。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Hunter_Banner",
    "name": "盗猎团挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Hunter_Banner.webp",
    "description": "装饰用的盗猎团挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "11"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Green",
    "name": "仿真树木A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Green.webp",
    "description": "装饰用的树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Green",
    "name": "仿真树木B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Green.webp",
    "description": "装饰用的树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Green",
    "name": "仿真树木C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Green.webp",
    "description": "装饰用的树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush01_Green",
    "name": "仿真树丛",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush01_Green.webp",
    "description": "装饰用的树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "TableCircular_Wood_None",
    "name": "整洁的圆桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableCircular_Wood_None.webp",
    "description": "装饰用的整洁圆桌。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "TableSquare_Wood_None",
    "name": "整洁的方桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSquare_Wood_None.webp",
    "description": "装饰用的整洁方桌。",
    "stats": [
      {
        "label": "科技",
        "value": "12"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Desk01_Stone",
    "name": "古典式书桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Desk01_Stone.webp",
    "description": "装饰用的古典式书桌。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TableCircular01_Stone",
    "name": "古典式圆桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableCircular01_Stone.webp",
    "description": "装饰用的古典式圆桌。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "2"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Red",
    "name": "仿真红叶树A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Red.webp",
    "description": "装饰用的红叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Red",
    "name": "仿真红叶树B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Red.webp",
    "description": "装饰用的红叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Red",
    "name": "仿真红叶树C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Red.webp",
    "description": "装饰用的红叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureStone01",
    "name": "仿真岩石",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureStone01.webp",
    "description": "装饰用的岩石模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "14"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      }
    ]
  },
  {
    "id": "BathTub_Stone",
    "name": "古典式浴缸",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "家具",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BathTub_Stone.webp",
    "description": "装饰用的古典式浴缸。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Box01_Stone",
    "name": "古典式编织箱",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Box01_Stone.webp",
    "description": "装饰用的古典式编织箱。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Partition_Stone",
    "name": "古典式屏风",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Partition_Stone.webp",
    "description": "装饰用的古典式屏风。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "TowlRack01_Stone",
    "name": "古典式毛巾架",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TowlRack01_Stone.webp",
    "description": "装饰用的古典式毛巾架。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Mirror01_Stone",
    "name": "古典式椭圆镜子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Mirror01_Stone.webp",
    "description": "装饰用的古典式椭圆镜子。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Mirror02_Stone",
    "name": "古典式镜子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Mirror02_Stone.webp",
    "description": "装饰用的古典式镜子。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "8"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Mirror01_Wall_Stone",
    "name": "古典式壁挂镜子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Mirror01_Wall_Stone.webp",
    "description": "装饰用的古典式壁挂镜子。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Yellow",
    "name": "仿真黄叶树A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Yellow.webp",
    "description": "装饰用的黄叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Yellow",
    "name": "仿真黄叶树B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Yellow.webp",
    "description": "装饰用的黄叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Yellow",
    "name": "仿真黄叶树C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Yellow.webp",
    "description": "装饰用的黄叶树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush01_Yellow",
    "name": "仿真黄叶树丛",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush01_Yellow.webp",
    "description": "装饰用的黄叶树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "16"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Piano01_Stone",
    "name": "大钢琴",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Piano01_Stone.webp",
    "description": "装饰用的大钢琴。\n无法用来演奏。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Piano02_Stone",
    "name": "立式钢琴",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Piano02_Stone.webp",
    "description": "装饰用的立式钢琴。\n无法用来演奏。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TableSink01_Stone",
    "name": "古典式洗手台",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSink01_Stone.webp",
    "description": "装饰用的古典式洗手台。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Toilet01_Stone",
    "name": "古典式马桶",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Toilet01_Stone.webp",
    "description": "装饰用的古典式马桶。\n无法在这里如厕。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "ToiletHolder01_Stone",
    "name": "古典式圆筒卫生纸架",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ToiletHolder01_Stone.webp",
    "description": "装饰用的古典式圆筒卫生纸架。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Curtain01_Wall_Stone",
    "name": "古典式窗帘",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Curtain01_Wall_Stone.webp",
    "description": "装饰用的古典式窗帘。\n可以安装在墙上。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Globe01_Stone",
    "name": "古典式地球仪",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Globe01_Stone.webp",
    "description": "装饰用的古典地球仪。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Stove01_Stone",
    "name": "古典式火炉",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stove01_Stone.webp",
    "description": "装饰用的古典式火炉。",
    "stats": [
      {
        "label": "科技",
        "value": "18"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Sofa01_Stone",
    "name": "古典式单人沙发",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Sofa01_Stone.webp",
    "description": "装饰用的古典式单人沙发。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Sofa02_Stone",
    "name": "古典式双人沙发",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Sofa02_Stone.webp",
    "description": "装饰用的古典式双人沙发。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Sofa03_Stone",
    "name": "古典式脚凳",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Sofa03_Stone.webp",
    "description": "装饰用的古典式脚凳。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Believer_Flag",
    "name": "帕鲁保护团体团旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Believer_Flag.webp",
    "description": "装饰用的帕鲁保护团体团旗。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Believer_Banner",
    "name": "帕鲁保护团体挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Believer_Banner.webp",
    "description": "装饰用的帕鲁保护团体挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "TableDresser01_Stone",
    "name": "古典式化妆台",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableDresser01_Stone.webp",
    "description": "装饰用的古典式化妆台。",
    "stats": [
      {
        "label": "科技",
        "value": "21"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "30"
      }
    ]
  },
  {
    "id": "Clock01_Wall_Iron",
    "name": "挂钟",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Clock01_Wall_Iron.webp",
    "description": "装饰用的挂钟。\n坏掉了，所以无法用来确认时间。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Clock01_Stone",
    "name": "古典式座钟",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Clock01_Stone.webp",
    "description": "装饰用的古典式座钟。\n坏掉了，所以无法用来确认时间。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Chair02_Iron",
    "name": "铁制椅子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair02_Iron.webp",
    "description": "装饰用的铁制椅子。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Stool01_Iron",
    "name": "铁制凳子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stool01_Iron.webp",
    "description": "装饰用的铁制凳子。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      }
    ]
  },
  {
    "id": "TableCircular01_Iron",
    "name": "铁制圆桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableCircular01_Iron.webp",
    "description": "装饰用的铁制圆桌。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Desk01_Iron",
    "name": "铁制书桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Desk01_Iron.webp",
    "description": "装饰用的铁制书桌。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "15"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Bamboo",
    "name": "仿真竹子A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Bamboo.webp",
    "description": "装饰用的竹子模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Bamboo",
    "name": "仿真竹子B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Bamboo.webp",
    "description": "装饰用的竹子模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Bamboo",
    "name": "仿真竹子C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Bamboo.webp",
    "description": "装饰用的竹子模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush01_Flower",
    "name": "仿真开花树丛A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush01_Flower.webp",
    "description": "装饰用的开花树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush02_Flower",
    "name": "仿真开花树丛B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush02_Flower.webp",
    "description": "装饰用的开花树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Tropical",
    "name": "仿真热带树木A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Tropical.webp",
    "description": "装饰用的热带树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Tropical",
    "name": "仿真热带树木B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Tropical.webp",
    "description": "装饰用的热带树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Tropical",
    "name": "仿真热带树木C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Tropical.webp",
    "description": "装饰用的热带树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush01_Tropical",
    "name": "仿真热带树丛",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush01_Tropical.webp",
    "description": "装饰用的热带树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "27"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FireCult_Flag",
    "name": "永炎同心会会旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FireCult_Flag.webp",
    "description": "装饰用的永炎同心会会旗。",
    "stats": [
      {
        "label": "科技",
        "value": "28"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FireCult_Banner",
    "name": "永炎同心会挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FireCult_Banner.webp",
    "description": "装饰用的永炎同心会挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "28"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Barrel01_Iron",
    "name": "红色铁桶",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Barrel01_Iron.webp",
    "description": "装饰用的红色铁桶。",
    "stats": [
      {
        "label": "科技",
        "value": "34"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Barrel02_Iron",
    "name": "蓝色铁桶",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Barrel02_Iron.webp",
    "description": "装饰用的蓝色铁桶。",
    "stats": [
      {
        "label": "科技",
        "value": "34"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Barrel03_Iron",
    "name": "绿色铁桶",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Barrel03_Iron.webp",
    "description": "装饰用的绿色铁桶。",
    "stats": [
      {
        "label": "科技",
        "value": "34"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TableSide01_Iron",
    "name": "铁木边桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSide01_Iron.webp",
    "description": "装饰用的铁木边桌。",
    "stats": [
      {
        "label": "科技",
        "value": "35"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "TableSquare01_Iron",
    "name": "铁木桌子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSquare01_Iron.webp",
    "description": "装饰用的铁木桌子。",
    "stats": [
      {
        "label": "科技",
        "value": "35"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        "name": "红色野莓",
        "amount": "2"
      }
    ]
  },
  {
    "id": "TableSquare02_Iron",
    "name": "铁木茶几",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TableSquare02_Iron.webp",
    "description": "装饰用的铁木茶几。",
    "stats": [
      {
        "label": "科技",
        "value": "35"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "CableCoil01_Iron",
    "name": "电缆盘",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CableCoil01_Iron.webp",
    "description": "装饰用的电缆盘。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      }
    ]
  },
  {
    "id": "GarbageBag_Iron",
    "name": "垃圾袋",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_GarbageBag_Iron.webp",
    "description": "装饰用的垃圾袋。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      }
    ]
  },
  {
    "id": "PipeClay01_Iron",
    "name": "陶管",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PipeClay01_Iron.webp",
    "description": "装饰用的陶管。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Tire01_Iron",
    "name": "轮胎",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Tire01_Iron.webp",
    "description": "装饰用的轮胎。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        "name": "优质帕鲁油",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "2"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Desert",
    "name": "仿真沙漠树木A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Desert.webp",
    "description": "装饰用的沙漠树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Desert",
    "name": "仿真沙漠树木B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Desert.webp",
    "description": "装饰用的沙漠树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Desert",
    "name": "仿真沙漠树木C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Desert.webp",
    "description": "装饰用的沙漠树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "37"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Chair01_Iron",
    "name": "皮制椅子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair01_Iron.webp",
    "description": "装饰用的皮制椅子。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        "name": "皮革",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Sofa01_Iron",
    "name": "单人皮制沙发",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Sofa01_Iron.webp",
    "description": "装饰用的单人皮制沙发。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        "name": "皮革",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Sofa02_Iron",
    "name": "双人皮制沙发",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Sofa02_Iron.webp",
    "description": "装饰用的双人皮制沙发。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        "name": "皮革",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Chair01_Pal",
    "name": "青蛙椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Chair01_Pal.webp",
    "description": "装饰用的可爱椅子。",
    "stats": [
      {
        "label": "科技",
        "value": "38"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        "name": "皮革",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Police_Flag",
    "name": "自卫队队旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Police_Flag.webp",
    "description": "装饰用的自卫队队旗。",
    "stats": [
      {
        "label": "科技",
        "value": "39"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Police_Banner",
    "name": "自卫队挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Police_Banner.webp",
    "description": "装饰用的自卫队挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "39"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "GoalSoccer_Iron",
    "name": "足球球门",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_GoalSoccer_Iron.webp",
    "description": "装饰用的足球球门。\n将棉悠悠踢进球门也无法得分。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "MachineGame01_Iron",
    "name": "夹娃娃机",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MachineGame01_Iron.webp",
    "description": "装饰用的夹娃娃机。\n坏掉了，所以无法使用。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "5"
      }
    ]
  },
  {
    "id": "MachineVending01_Iron",
    "name": "可乐自动贩卖机",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MachineVending01_Iron.webp",
    "description": "装饰用的可乐自动贩卖机。\n无法用来购买道具。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        "name": "结冰器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Television01_Iron",
    "name": "老旧电视机",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Television01_Iron.webp",
    "description": "装饰用的老旧电视机。\n古代文明的遗物，但现在就只会播放企丸丸们的影像了。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "1"
      }
    ]
  },
  {
    "id": "ArcadeVideoGame",
    "name": "街机游戏机台",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ArcadeVideoGame.webp",
    "description": "装饰用的街机游戏机台。\n坏掉了，所以不能玩了。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "30"
      }
    ]
  },
  {
    "id": "SignExit_Ceiling_Iron",
    "name": "天花板紧急出口标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SignExit_Ceiling_Iron.webp",
    "description": "装饰用的紧急出口标志。\n可以贴在天花板上。",
    "stats": [
      {
        "label": "科技",
        "value": "47"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "SignExit_Wall_Iron",
    "name": "墙壁紧急出口标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SignExit_Wall_Iron.webp",
    "description": "装饰用的紧急出口标志。\n可以贴在墙壁上。",
    "stats": [
      {
        "label": "科技",
        "value": "47"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TrafficCone01_Iron",
    "name": "三角锥",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficCone01_Iron.webp",
    "description": "装饰用的三角锥。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TrafficCone02_Iron",
    "name": "宽版交通锥",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficCone02_Iron.webp",
    "description": "装饰用的宽版交通锥。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "2"
      }
    ]
  },
  {
    "id": "TrafficCone03_Iron",
    "name": "窄版交通锥",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficCone03_Iron.webp",
    "description": "装饰用的窄版交通锥。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TrafficLight01_Iron",
    "name": "信号灯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficLight01_Iron.webp",
    "description": "装饰用的信号灯。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        "name": "发电器官",
        "amount": "2"
      }
    ]
  },
  {
    "id": "TrafficSign01_Iron",
    "name": "禁止帕鲁通行的道路标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficSign01_Iron.webp",
    "description": "装饰用禁止帕鲁通行的道路标志。\n虽然在古代也有使用，但现在只不过是个摆设。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficSign02_Iron",
    "name": "停下的道路标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficSign02_Iron.webp",
    "description": "装饰用停下的道路标志。\n虽然在古代也有使用，但现在只不过是个摆设。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficSign03_Iron",
    "name": "当心紫霞鹿的标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficSign03_Iron.webp",
    "description": "装饰用当心紫霞鹿的标志。\n据说在古代文明中，紫霞鹿与帕鲁\n的撞击事件频繁发生。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficSign04_Iron",
    "name": "当心森猛犸的标志",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficSign04_Iron.webp",
    "description": "装饰用当心森猛犸的标志。\n据说在古代文明中，因惹怒森猛犸而\n造成的伤亡事件频繁发生。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficBarricade01_Iron",
    "name": "路障",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficBarricade01_Iron.webp",
    "description": "装饰用的路障。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficBarricade02_Iron",
    "name": "橘色路障",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficBarricade02_Iron.webp",
    "description": "装饰用的橘色路障。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TrafficBarricade03_Iron",
    "name": "铁制红色路障",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficBarricade03_Iron.webp",
    "description": "装饰用的铁制红色路障。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "1"
      }
    ]
  },
  {
    "id": "TrafficBarricade04_Iron",
    "name": "铁制白色路障",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficBarricade04_Iron.webp",
    "description": "装饰用的铁制白色路障。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TrafficBarricade05_Iron",
    "name": "铁制篱笆",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TrafficBarricade05_Iron.webp",
    "description": "装饰用的铁制篱笆。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Snow",
    "name": "仿真积雪树木A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Snow.webp",
    "description": "装饰用的积雪树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Snow",
    "name": "仿真积雪树木B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Snow.webp",
    "description": "装饰用的积雪树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Snow",
    "name": "仿真积雪树木C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Snow.webp",
    "description": "装饰用的积雪树木模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureBush01_Snow",
    "name": "仿真白色树丛",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureBush01_Snow.webp",
    "description": "装饰用的白色树丛模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "49"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Scientist_Flag",
    "name": "基因研究部队队旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Scientist_Flag.webp",
    "description": "装饰用的基因研究部队队旗。",
    "stats": [
      {
        "label": "科技",
        "value": "50"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Scientist_Banner",
    "name": "基因研究部队挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Scientist_Banner.webp",
    "description": "装饰用的基因研究部队挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "50"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Byobu",
    "name": "屏风",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Byobu.webp",
    "description": "装饰用的屏风。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Kakejiku",
    "name": "挂轴",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "墙面/天花板装饰",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Kakejiku.webp",
    "description": "装饰用的挂轴。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Zaisu",
    "name": "无腿靠椅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Zaisu.webp",
    "description": "装饰用的无腿椅子。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Zabuton",
    "name": "坐垫",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Zabuton.webp",
    "description": "装饰用的坐垫。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Irori",
    "name": "地炉",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Irori.webp",
    "description": "装饰用的地炉。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Charcoal.webp",
        "name": "木炭",
        "amount": "2"
      }
    ]
  },
  {
    "id": "Toro",
    "name": "石灯笼",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Toro.webp",
    "description": "装饰用的石灯笼。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "15"
      }
    ]
  },
  {
    "id": "Shishiodoshi",
    "name": "鹿威",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Shishiodoshi.webp",
    "description": "装饰用的鹿威。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Bonsai",
    "name": "盆栽",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Bonsai.webp",
    "description": "装饰用的盆栽。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Koro",
    "name": "香炉",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Koro.webp",
    "description": "装饰用的香炉。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "3"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Seika",
    "name": "日式插花",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Seika.webp",
    "description": "装饰用的插花。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
        "name": "美丽花朵",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Fudukue",
    "name": "日式矮桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Fudukue.webp",
    "description": "装饰用的日式矮桌。\n可在建造和风的建筑时配合使用。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Ninja_Flag",
    "name": "月花众团旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ninja_Flag.webp",
    "description": "装饰用的月花众团旗。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "Ninja_Banner",
    "name": "月花众挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Ninja_Banner.webp",
    "description": "装饰用的月花众挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "55"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree01_Cherry",
    "name": "仿真樱花树A",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree01_Cherry.webp",
    "description": "装饰用的樱花树模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "56"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree02_Cherry",
    "name": "仿真樱花树B",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree02_Cherry.webp",
    "description": "装饰用的樱花树模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "56"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "FurnitureTree03_Cherry",
    "name": "仿真樱花树C",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "植物",
    "groupOrder": 3,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FurnitureTree03_Cherry.webp",
    "description": "装饰用的樱花树模型。\n拆除该建筑物无法获得材料。",
    "stats": [
      {
        "label": "科技",
        "value": "56"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood_Fine.webp",
        "name": "硬木材",
        "amount": "20"
      }
    ]
  },
  {
    "id": "DarkIsland_Flag",
    "name": "天坠之民团旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DarkIsland_Flag.webp",
    "description": "装饰用的天坠之民团旗。",
    "stats": [
      {
        "label": "科技",
        "value": "60"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "DarkIsland_Banner",
    "name": "天坠之民挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DarkIsland_Banner.webp",
    "description": "装饰用的天坠之民挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "60"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "IceHorseStatue",
    "name": "唤冬兽雕像",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_IceHorseStatue.webp",
    "description": "装饰用的唤冬兽雕像。",
    "stats": [
      {
        "label": "科技",
        "value": "64"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      }
    ]
  },
  {
    "id": "SkyIsland_Flag",
    "name": "苍天的盟约盟旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SkyIsland_Flag.webp",
    "description": "装饰用的苍天的盟约盟旗。",
    "stats": [
      {
        "label": "科技",
        "value": "71"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "SkyIsland_Banner",
    "name": "苍天的盟约挂旗",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SkyIsland_Banner.webp",
    "description": "装饰用的苍天的盟约挂旗。",
    "stats": [
      {
        "label": "科技",
        "value": "71"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "优质的布",
        "amount": "20"
      }
    ]
  },
  {
    "id": "JetDragonStatue",
    "name": "空涡龙雕像",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_JetDragonStatue.webp",
    "description": "装饰用的空涡龙雕像。",
    "stats": [
      {
        "label": "科技",
        "value": "79"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      }
    ]
  },
  {
    "id": "Decal_PalSticker_PinkCat",
    "name": "tuppanyan贴纸",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "In Develop",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "tuppanyan贴纸",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Rug_Wood",
    "name": "毛皮地毯",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "In Develop",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Rug_Wood.webp",
    "description": "毛皮地毯",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "1"
      }
    ]
  },
  {
    "id": "Wire_Fence",
    "name": "铁丝网围栏",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Wire_Fence.webp",
    "description": "装饰用的铁丝网围栏。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "LilyQueenStatue",
    "name": "百合女王雕像",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_LilyQueenStatue.webp",
    "description": "装饰用的百合女王雕像。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "100"
      }
    ]
  },
  {
    "id": "ConservationGroupBannerA",
    "name": "帕鲁保护团体旗帜",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ConservationGroupBannerA.webp",
    "description": "装饰用的帕鲁保护团体旗帜。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "10"
      }
    ]
  },
  {
    "id": "ConservationGroupBannerB",
    "name": "帕鲁保护团体横幅",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "旗帜",
    "groupOrder": 6,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ConservationGroupBannerB.webp",
    "description": "装饰用的帕鲁保护团体横幅。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Banyan_Big",
    "name": "Banyan_Big",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "In Develop",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Hunter_GangFlag",
    "name": "盗猎团旗帜",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "家具",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Hunter_GangFlag.webp",
    "description": "装饰用的盗猎团旗帜。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "2"
      }
    ]
  },
  {
    "id": "PalCage",
    "name": "空笼子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "In Develop",
    "groupOrder": 7,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PalCage.webp",
    "description": "装饰用的空笼子。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WoodenBarricade",
    "name": "木制路障",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WoodenBarricade.webp",
    "description": "装饰用的木制路障。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "10"
      }
    ]
  },
  {
    "id": "SF_Desk",
    "name": "研究室风格书桌",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "桌子",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_Desk.webp",
    "description": "装饰用的研究室风格书桌。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "15"
      }
    ]
  },
  {
    "id": "SF_Chair",
    "name": "研究室风格椅子",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "椅子",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SF_Chair.webp",
    "description": "装饰用的研究室风格椅子。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        "name": "聚合物",
        "amount": "10"
      }
    ]
  },
  {
    "id": "GuardianDogStatue",
    "name": "八云犬雕像",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "摆件",
    "groupOrder": 5,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_GuardianDogStatue.webp",
    "description": "装饰用的八云犬雕像。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "70"
      }
    ]
  },
  {
    "id": "YakushimaBoss002_Relic",
    "name": "月亮领主雕像",
    "category": "furniture",
    "categoryLabel": "家具",
    "group": "家具",
    "groupOrder": 999,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_YakushimaBoss002_Relic.webp",
    "description": "【泰拉瑞亚联动】\n散发着金色光芒的月亮领主雕像。\n跨越绝望之战后的强者证明。",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_YakushimaIngot001.webp",
        "name": "神圣锭",
        "amount": "100"
      }
    ]
  },
  {
    "id": "Signboard",
    "name": "告示牌",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Signboard.webp",
    "description": "可以输入文字的告示牌。\n用于记录和交流。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "WallSignboard",
    "name": "壁挂看板",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WallSignboard.webp",
    "description": "可以输入文字的告示牌。\n可以悬挂在墙壁上。",
    "stats": [
      {
        "label": "科技",
        "value": "6"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      }
    ]
  },
  {
    "id": "DamagedScarecrow",
    "name": "受损的稻草人",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_DamagedScarecrow.webp",
    "description": "模仿企丸丸制作的训练用稻草人。\n只能放置在较宽敞的地方。",
    "stats": [
      {
        "label": "科技",
        "value": "13"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Headstone",
    "name": "墓碑",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Headstone.webp",
    "description": "可以书写文字的墓碑。\n用作留下记录。",
    "stats": [
      {
        "label": "科技",
        "value": "17"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "10"
      }
    ]
  },
  {
    "id": "ToolBoxV1",
    "name": "大型工具箱",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ToolBoxV1.webp",
    "description": "如配置在据点，\n可以提升「手工作业」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "20"
      },
      {
        "label": "手工作业",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        "name": "钉子",
        "amount": "15"
      }
    ]
  },
  {
    "id": "OlympicCauldron",
    "name": "圣火台",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_OlympicCauldron.webp",
    "description": "如配置在据点，\n可以提升「生火」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "21"
      },
      {
        "label": "生火",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        "name": "喷火器官",
        "amount": "5"
      }
    ]
  },
  {
    "id": "ItemBooth",
    "name": "跳蚤市场（道具）",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_ItemBooth.webp",
    "description": "出售物品的设施。\n可以将物品出售给其他玩家。\n将冰系帕鲁指派到这里工作时，\n可以使里面的食物不会轻易腐败。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      },
      {
        "label": "工作适应性",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "4"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "3"
      }
    ]
  },
  {
    "id": "PalBooth",
    "name": "跳蚤市场（帕鲁）",
    "category": "other",
    "categoryLabel": "其他",
    "group": "其他",
    "groupOrder": 1,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_PalBooth.webp",
    "description": "出售帕鲁的设施。\n可以将帕鲁出售给其他玩家。\n将冰系帕鲁指派到这里工作时，\n可以使里面的食物不会轻易腐败。",
    "stats": [
      {
        "label": "科技",
        "value": "22"
      },
      {
        "label": "工作适应性",
        "value": "1"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Processed_Wood.webp",
        "name": "木板",
        "amount": "4"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "5"
      }
    ]
  },
  {
    "id": "Fountain",
    "name": "喷泉",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Fountain.webp",
    "description": "如配置在据点，\n可以提升「浇水」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "23"
      },
      {
        "label": "浇水",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        "name": "水栖帕鲁的黏液",
        "amount": "8"
      }
    ]
  },
  {
    "id": "FlowerBed",
    "name": "花坛",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FlowerBed.webp",
    "description": "如配置在据点，\n可以提升「采集」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "24"
      },
      {
        "label": "采集",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
        "name": "美丽花朵",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Silo",
    "name": "筒仓",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Silo.webp",
    "description": "如配置在据点，\n可以提升「播种」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "25"
      },
      {
        "label": "播种",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        "name": "水泥",
        "amount": "10"
      }
    ]
  },
  {
    "id": "Stump",
    "name": "树桩和斧头",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Stump.webp",
    "description": "如配置在据点，\n可以提升「采伐」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "28"
      },
      {
        "label": "伐木",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "30"
      }
    ]
  },
  {
    "id": "MiningTool",
    "name": "十字镐和安全帽",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MiningTool.webp",
    "description": "如配置在据点，\n可以提升「挖掘」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "30"
      },
      {
        "label": "采矿",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "50"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "15"
      }
    ]
  },
  {
    "id": "Cauldron",
    "name": "魔女之釜",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Cauldron.webp",
    "description": "如配置在据点，\n可以提升「制药」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "32"
      },
      {
        "label": "制药",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Coolant.webp",
        "name": "极低温冷却介质",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        "name": "优质帕鲁油",
        "amount": "3"
      }
    ]
  },
  {
    "id": "Snowman",
    "name": "雪人",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Snowman.webp",
    "description": "如配置在据点，\n可以提升「冷却」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "33"
      },
      {
        "label": "冷却",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        "name": "结冰器官",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        "name": "布",
        "amount": "5"
      }
    ]
  },
  {
    "id": "SanityDecrease1",
    "name": "α波发生器",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SanityDecrease1.webp",
    "description": "发出α波让帕鲁放松的装置。\n减缓据点内帕鲁的SAN值下降速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "41"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        "name": "精炼金属锭",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Corrosive_Solvent.webp",
        "name": "腐蚀溶剂",
        "amount": "10"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "20"
      }
    ]
  },
  {
    "id": "WorkSpeedIncrease1",
    "name": "β波发生器",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WorkSpeedIncrease1.webp",
    "description": "发出β波让帕鲁活动更活跃的装置。\n提升据点内帕鲁的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "46"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        "name": "帕鲁金属锭",
        "amount": "40"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "30"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "5"
      }
    ]
  },
  {
    "id": "TransmissionTower",
    "name": "输电塔",
    "category": "other",
    "categoryLabel": "其他",
    "group": "效率强化",
    "groupOrder": 0,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_TransmissionTower.webp",
    "description": "如配置在据点，\n可以提升「发电」的工作速度。\n即使配置复数个，其效果也不会叠加。",
    "stats": [
      {
        "label": "科技",
        "value": "48"
      },
      {
        "label": "发电",
        "value": "+20%"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        "name": "金属锭",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bio_Battery.webp",
        "name": "生化电池",
        "amount": "2"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        "name": "电路板",
        "amount": "5"
      }
    ]
  },
  {
    "id": "WoodCreator",
    "name": "WoodCreator",
    "category": "other",
    "categoryLabel": "其他",
    "group": "In Develop",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "zh_Hans_Text",
    "stats": [
      {
        "label": "工作适应性",
        "value": "1"
      },
      {
        "label": "SAN",
        "value": "-0.15"
      }
    ],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "15"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        "name": "石头",
        "amount": "5"
      }
    ]
  },
  {
    "id": "DamagedScarecrow_Test",
    "name": "DamagedScarecrow_Test",
    "category": "other",
    "categoryLabel": "其他",
    "group": "In Develop",
    "groupOrder": 2,
    "image": "https://cdn.paldb.cc/image/Pal/Texture/UI/Main_Menu/T_icon_unknown.webp",
    "description": "",
    "stats": [],
    "materials": [
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        "name": "木材",
        "amount": "20"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        "name": "纤维",
        "amount": "5"
      },
      {
        "image": "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        "name": "帕鲁矿碎块",
        "amount": "5"
      }
    ]
  }
];
