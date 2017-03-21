var models = {
    "MonsciergeIDK.AdBoards.Models.AdBoardModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "orientation": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "beacon_id": {
                "format": "int32",
                "type": "integer"
            },
            "campaign_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.AdminDivision.AdminDivisionCollectionModel": {
        "title": "admin_division_collection",
        "type": "object",
        "properties": {
            "admin_divisions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.AdminDivision.AdminDivisionResourceModel"
                }
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.LinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.AdminDivision.AdminDivisionResourceModel": {
        "title": "admin_division_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "Id of the resource.",
                "default": 100,
                "type": "integer"
            },
            "admin_division_code": {
                "description": "The two-character administrative division (state, province, etc.) code.",
                "default": "OK",
                "type": "string"
            },
            "name": {
                "description": "The name of the administrative division.",
                "default": "Oklahoma",
                "type": "string"
            },
            "country_code": {
                "description": "The ISO 3166-1 Alpha-2 country code.",
                "default": "US",
                "type": "string"
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.AdminDivision.AdminDivisionLinkModel",
                "readOnly": true
            }
        }
    },
    "MonsciergeAPI.Models.LinkModel": {
        "title": "link",
        "type": "object",
        "properties": {
            "self": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.AdminDivision.AdminDivisionLinkModel": {
        "title": "admin_division_link",
        "type": "object",
        "properties": {
            "country": {
                "type": "string"
            },
            "self": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Ads.Models.AdListModel": {
        "type": "object",
        "properties": {
            "ad_id": {
                "format": "int32",
                "type": "integer"
            },
            "location": {
                "enum": [
                    "Home",
                    "HotelInfo",
                    "MapsDirections",
                    "Recommended",
                    "TravelTools",
                    "Weather",
                    "Postcard"
                ],
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "image_path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Ads.Models.AdModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "title": {
                "type": "string"
            },
            "text": {
                "type": "string"
            },
            "url": {
                "type": "string"
            },
            "facebook_url": {
                "type": "string"
            },
            "twitter_url": {
                "type": "string"
            },
            "account_id": {
                "format": "int32",
                "type": "integer"
            },
            "address_one": {
                "type": "string"
            },
            "address_two": {
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "hours": {
                "type": "string"
            },
            "start_date": {
                "format": "date-time",
                "type": "string"
            },
            "end_date": {
                "format": "date-time",
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "jump_to_state": {
                "format": "int32",
                "type": "integer"
            },
            "target_gender": {
                "format": "int32",
                "type": "integer"
            },
            "target_age_range": {
                "format": "int32",
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "landscape_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "ad_board_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Ads.Models.AdImageModel"
                }
            },
            "locations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Ads.Models.DeviceAdMapModel"
                }
            },
            "image": {
                "type": "string"
            },
            "landscape_image": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Ads.Models.AdImageModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ad_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Ads.Models.DeviceAdMapModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ad_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "location": {
                "enum": [
                    "Home",
                    "HotelInfo",
                    "MapsDirections",
                    "Recommended",
                    "TravelTools",
                    "Weather",
                    "Postcard"
                ],
                "type": "string"
            }
        }
    },
    "System.Object": {
        "title": "object",
        "type": "object",
        "properties": {}
    },
    "MonsciergeAPI.Models.Amenities.V2.AmenityResourceModel": {
        "title": "amenity_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "child_features": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Features.Models.ChildAmenityModel"
                }
            },
            "contact_desc": {
                "type": "string"
            },
            "desc": {
                "type": "string"
            },
            "menus": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.Menu.MenuBaseModel"
                }
            },
            "review": {
                "$ref": "MonsciergeIDK.Models.ReviewModel"
            },
            "placemark": {
                "type": "string"
            },
            "schedule_desc": {
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ScheduleModel"
                }
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.AmenityPhoneModel"
                }
            },
            "address": {
                "$ref": "MonsciergeIDK.Locations.Models.LocationModel"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.UriModel"
                }
            },
            "is_active": {
                "type": "boolean"
            },
            "mobile_active": {
                "type": "boolean"
            },
            "has_dining_order": {
                "type": "boolean"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "tv_enabled": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "has_menus": {
                "type": "boolean"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "name": {
                "default": "Pool",
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.Base.BaseUriModel": {
        "title": "base_uri",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the URL.",
                "default": "Homepage",
                "type": "string"
            },
            "uri": {
                "description": "The URL.",
                "default": "http://monscierge.com",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Features.Models.ChildAmenityModel": {
        "type": "object",
        "properties": {
            "child_features": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Features.Models.ChildAmenityModel"
                }
            },
            "description": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "map_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            }
        }
    },
    "MonsciergeIDK.Models.Menu.MenuBaseModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "close_ms": {
                "format": "int64",
                "type": "integer"
            },
            "has_menu_items": {
                "type": "boolean"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "type": "string"
            },
            "open_ms": {
                "format": "int64",
                "type": "integer"
            },
            "map_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Models.ReviewModel": {
        "type": "object",
        "properties": {
            "average_rating": {
                "format": "double",
                "type": "number"
            },
            "reviews": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ReviewSimpleModel"
                }
            }
        }
    },
    "MonsciergeIDK.Models.ScheduleModel": {
        "type": "object",
        "properties": {
            "close_ms": {
                "format": "int64",
                "type": "integer"
            },
            "day_of_week": {
                "type": "string"
            },
            "open_ms": {
                "format": "int64",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Models.AmenityPhoneModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "type": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "type": "integer"
            },
            "number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Locations.Models.LocationModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "f_kcreated_by_user": {
                "format": "int32",
                "type": "integer"
            },
            "f_kupdated_by_user": {
                "format": "int32",
                "type": "integer"
            },
            "sub_premise": {
                "type": "string"
            },
            "premise": {
                "type": "string"
            },
            "street_number": {
                "type": "string"
            },
            "street_address": {
                "type": "string"
            },
            "route": {
                "type": "string"
            },
            "locality": {
                "type": "string"
            },
            "administrative_area": {
                "type": "string"
            },
            "country": {
                "type": "string"
            },
            "postal_code": {
                "type": "string"
            },
            "postal_code_sufix": {
                "type": "string"
            },
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "google_place_id": {
                "type": "string"
            },
            "formatted_address": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.UriModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Unknown",
                    "AdHocEventSyncer",
                    "Booking",
                    "Facebook",
                    "HotSos",
                    "Rewards",
                    "Resource",
                    "ShuttleTracker",
                    "Sponsorship",
                    "Synergey",
                    "Twitter"
                ],
                "type": "string"
            },
            "uri": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.ImageListModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.ReviewSimpleModel": {
        "type": "object",
        "properties": {
            "username": {
                "type": "string"
            },
            "review": {
                "type": "string"
            },
            "rating": {
                "format": "int32",
                "type": "integer"
            },
            "date_of_review": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Amenities.V2.AmenityResourceListModel": {
        "title": "amenity_resource_list",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "has_menus": {
                "type": "boolean"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "name": {
                "default": "Pool",
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.Amenities.V2.AmenityResourceSortedModel": {
        "title": "amenity_resource_sorted",
        "type": "object",
        "properties": {
            "is_category": {
                "type": "boolean"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            }
        }
    },
    "MonsciergeIDK.Features.Models.AmenityListModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "has_menus": {
                "type": "boolean"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "name": {
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.Features.Models.AmenityModel": {
        "type": "object",
        "properties": {
            "child_features": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Features.Models.ChildAmenityModel"
                }
            },
            "contact_desc": {
                "type": "string"
            },
            "desc": {
                "type": "string"
            },
            "menus": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.Menu.MenuBaseModel"
                }
            },
            "review": {
                "$ref": "MonsciergeIDK.Models.ReviewModel"
            },
            "placemark": {
                "type": "string"
            },
            "schedule_desc": {
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ScheduleModel"
                }
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.AmenityPhoneModel"
                }
            },
            "address": {
                "$ref": "MonsciergeIDK.Locations.Models.LocationModel"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.UriModel"
                }
            },
            "is_active": {
                "type": "boolean"
            },
            "mobile_active": {
                "type": "boolean"
            },
            "has_dining_order": {
                "type": "boolean"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "tv_enabled": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "has_menus": {
                "type": "boolean"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "name": {
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.Amenities.V2.AmenityCategoryResourceModel": {
        "title": "amenity_category_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "is_top_level": {
                "type": "boolean"
            },
            "is_active": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Amenity.AmenityModel": {
        "title": "amenity",
        "type": "object",
        "properties": {
            "contact_desc": {
                "type": "string"
            },
            "desc": {
                "description": "A description of the amenity.",
                "type": "string"
            },
            "menus": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.MenuBaseModel"
                }
            },
            "review": {
                "$ref": "MonsciergeAPI.Models.Feedback.ReviewModel"
            },
            "placemark": {
                "type": "string"
            },
            "schedule_desc": {
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.ScheduleModel"
                }
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.AmenityPhoneModel"
                }
            },
            "address": {
                "$ref": "MonsciergeIDK.Locations.Models.LocationModel"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "child_features": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Amenity.ChildAmenityModel"
                }
            },
            "is_active": {
                "type": "boolean"
            },
            "mobile_active": {
                "type": "boolean"
            },
            "has_dining_order": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "tv_enabled": {
                "type": "boolean"
            },
            "has_menus": {
                "description": "Whether or not the amenity has menus. <code>True</code> for has menus, <code>false</code> if not.",
                "type": "boolean"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the amenity.",
                "default": "Pool",
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The amenity ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.MenuBaseModel": {
        "title": "menu_base",
        "type": "object",
        "properties": {
            "close_ms": {
                "format": "int64",
                "description": "The time when the menu closes as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "has_menu_items": {
                "description": "Whether or not the menu has items. <code>True</code> if it does, <code>false</code> if not.",
                "type": "boolean"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the menu.",
                "default": "Breakfast Menu",
                "type": "string"
            },
            "open_ms": {
                "format": "int64",
                "description": "The time when the menu opens as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "map_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The menu ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Feedback.ReviewModel": {
        "title": "review",
        "type": "object",
        "properties": {
            "average_rating": {
                "format": "double",
                "type": "number"
            },
            "reviews": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Feedback.ReviewSimpleModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Base.ScheduleModel": {
        "title": "schedule",
        "type": "object",
        "properties": {
            "close_ms": {
                "format": "int64",
                "description": "The time the schedule closes as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "day_of_week": {
                "description": "The day of the week the schedule will be on.",
                "enum": [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "type": "string"
            },
            "open_ms": {
                "format": "int64",
                "description": "The time the schedule opens as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Base.UriModel": {
        "title": "uri",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "The URL ID.",
                "type": "integer"
            },
            "type": {
                "description": "The type of URL.",
                "enum": [
                    "Unknown",
                    "AdHocEventSyncer",
                    "Booking",
                    "Facebook",
                    "HotSos",
                    "Rewards",
                    "Resource",
                    "ShuttleTracker",
                    "Sponsorship",
                    "Synergey",
                    "Twitter"
                ],
                "type": "string"
            },
            "name": {
                "description": "The name of the URL.",
                "default": "Homepage",
                "type": "string"
            },
            "uri": {
                "description": "The URL.",
                "default": "http://monscierge.com",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Amenity.ChildAmenityModel": {
        "title": "child_amenity",
        "type": "object",
        "properties": {
            "child_features": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Amenity.ChildAmenityModel"
                }
            },
            "description": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "map_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Feedback.ReviewSimpleModel": {
        "title": "review_simple",
        "type": "object",
        "properties": {
            "username": {
                "type": "string"
            },
            "review": {
                "type": "string"
            },
            "rating": {
                "format": "int32",
                "type": "integer"
            },
            "date_of_review": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestOptionValueModel": {
        "title": "request_option_value",
        "type": "object",
        "properties": {
            "option": {
                "$ref": "MonsciergeAPI.Models.Request.Template.Option.RequestTemplateOptionBaseModel"
            },
            "value_ms": {
                "format": "int64",
                "description": "The option's value in milliseconds.",
                "type": "integer"
            },
            "value_number": {
                "format": "int32",
                "description": "The option's value as a number.",
                "type": "integer"
            },
            "value_bool": {
                "type": "boolean"
            },
            "value_text": {
                "description": "The option's value as a string of text.",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.Option.RequestTemplateOptionBaseModel": {
        "title": "request_template_option_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the option.",
                "default": "Email",
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "description": "The Id of the request template",
                "type": "integer"
            },
            "choices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.RequestTemplates.Models.RequestOptionChoicesBaseModel"
                }
            },
            "type": {
                "enum": [
                    "Unknown",
                    "Number",
                    "DateTime",
                    "Text",
                    "Message",
                    "Boolean",
                    "Picklist"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request option ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.RequestTemplates.Models.RequestOptionChoicesBaseModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Default"
                ],
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Request.LastKnown.LastKnownRequestsSubBaseModel": {
        "title": "last_known_requests_sub_base",
        "type": "object",
        "properties": {
            "requests": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestSubBaseModel"
                }
            },
            "last_known_request_action_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestSubBaseModel": {
        "title": "request_sub_base",
        "type": "object",
        "properties": {
            "created_ms": {
                "format": "int64",
                "description": "The time the request was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "eta_ms": {
                "format": "int64",
                "description": "The ETA the request should be completed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "following": {
                "description": "Whether or not the user is following the request. <code>True</code> for following, <code>false</code> if not.",
                "type": "boolean"
            },
            "latest_action_ms": {
                "format": "int64",
                "description": "The time the last action was created on the request as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "requester_user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "status": {
                "description": "The status of the request.",
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
            },
            "unread": {
                "description": "Whether or not the request is unread. <code>True</code> for unread, <code>false</code> if not.",
                "type": "boolean"
            },
            "visible": {
                "description": "Whether or not the request is visible. <code>True</code> for visible, <code>false</code> if not.",
                "type": "boolean"
            },
            "room_number": {
                "description": "The room number for the request",
                "type": "string"
            },
            "requested_for": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel": {
        "title": "request_group_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the group.",
                "default": "Housekeeping",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request group ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.User.UserBaseModel": {
        "title": "user_base",
        "type": "object",
        "properties": {
            "display_name": {
                "description": "The user's display name.",
                "default": "JAppleseed1234",
                "type": "string"
            },
            "first_name": {
                "description": "The user's first name.",
                "default": "Johnny",
                "type": "string"
            },
            "last_name": {
                "description": "The user's last name.",
                "default": "Appleseed",
                "type": "string"
            },
            "image_url": {
                "description": "Url for the user's profile image",
                "default": "https://secure.gravatar.com/bg/1428/e9db3f026b7ce7748e58169cecb4980f",
                "type": "string"
            },
            "primary_email": {
                "description": "The user's primary email.",
                "default": "johnny.appleseed@monscierge.com",
                "type": "string"
            },
            "primary_phone_number": {
                "description": "The user's primary phone number.",
                "default": "(555) 555-5555",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The user ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel": {
        "title": "request_template_base",
        "type": "object",
        "properties": {
            "is_active": {
                "description": "Whether or not the template is active. <code>True</code> for active, <code>false</code> if not.",
                "type": "boolean"
            },
            "group_id": {
                "format": "int32",
                "description": "The group ID the template belongs to.",
                "default": 42,
                "type": "integer"
            },
            "name": {
                "description": "The name of the template.",
                "default": "General",
                "type": "string"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceBaseModel",
                "description": "The place the template belongs to."
            },
            "stock_responses": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.StockResponse.RequestTemplateStockResponseBaseModel"
                }
            },
            "image_url": {
                "description": "The image filename to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "string"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request template ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceBaseModel": {
        "title": "place_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the place.",
                "default": "Sheraton",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.StockResponse.RequestTemplateStockResponseBaseModel": {
        "title": "request_template_stock_response_base",
        "type": "object",
        "properties": {
            "template_id": {
                "format": "int32",
                "description": "Id of the request template.",
                "type": "integer"
            },
            "message": {
                "description": "The body of the response.",
                "type": "string"
            },
            "eta_s": {
                "format": "int32",
                "description": "The estimated time the request should be completed in seconds.",
                "default": 900,
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The request stock response ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Application.ApplicationTokenModel": {
        "title": "application_token",
        "type": "object",
        "properties": {
            "token": {
                "description": "The application token",
                "type": "string"
            },
            "notification_hub": {
                "description": "The iOS notification hub name",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The application token ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Application.Webhook.WebhookModel": {
        "title": "webhook",
        "type": "object",
        "properties": {
            "type": {
                "description": "The type of webhook.",
                "enum": [
                    "Beacon",
                    "Sms"
                ],
                "type": "string"
            },
            "url": {
                "description": "The callback URL which will be sent the webhook payload data.",
                "default": "https://example.com/webhooks/monscierge",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The application webhook ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Application.ApplicationModel": {
        "title": "application",
        "required": [
            "desc",
            "type",
            "name"
        ],
        "type": "object",
        "properties": {
            "client_secret": {
                "description": "The OAuth client secret.",
                "default": "bbc6d0a803ec11e584181697f925ec7b",
                "type": "string"
            },
            "desc": {
                "description": "A description of the application.",
                "default": "Your application description.",
                "type": "string"
            },
            "tokens": {
                "description": "Application tokens",
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Application.ApplicationTokenModel"
                }
            },
            "type": {
                "format": "int32",
                "description": "The application type",
                "default": 0,
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                "type": "integer"
            },
            "redirect_urls": {
                "description": "Carriage return delimited list of allowed redirect urls",
                "type": "string"
            },
            "origins": {
                "description": "Carriage return delimited list of allowed origins",
                "type": "string"
            },
            "client_id": {
                "description": "The application OAuth client ID.",
                "default": "c034f59803ec11e584181697f925ec7b",
                "type": "string"
            },
            "name": {
                "description": "The name of the application.",
                "default": "App Name",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The application ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Application.ApplicationBaseModel": {
        "title": "application_base",
        "required": [
            "name"
        ],
        "type": "object",
        "properties": {
            "client_id": {
                "description": "The application OAuth client ID.",
                "default": "c034f59803ec11e584181697f925ec7b",
                "type": "string"
            },
            "name": {
                "description": "The name of the application.",
                "default": "App Name",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The application ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Beacon.BeaconUserNearbyModel": {
        "title": "beacon_user_nearby",
        "type": "object",
        "properties": {
            "beacon_id": {
                "format": "int32",
                "description": "The ID of the beacon.",
                "default": 42,
                "type": "integer"
            },
            "entered_on_ms": {
                "format": "int64",
                "description": "The time the user entered the range of the beacon as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "range": {
                "enum": [
                    "Unknown",
                    "Far",
                    "Near",
                    "Immediate"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The beacon user ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Beacon.BeaconResponse": {
        "title": "beacon_response",
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "Ok",
                    "Message"
                ],
                "type": "string"
            },
            "value": {
                "$ref": "System.Object"
            }
        }
    },
    "MonsciergeAPI.Models.Brand.BrandBaseModel": {
        "title": "brand_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "Name of the brand.",
                "default": "Travelodge",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The brand ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Brand.BrandModel": {
        "title": "brand",
        "type": "object",
        "properties": {
            "heritage_url": {
                "description": "The URL for the brand.",
                "default": "http://www.monscierge.com",
                "type": "string"
            },
            "mobile_reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "explore_hotels_reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "postcard_hash_tag_list": {
                "type": "string"
            },
            "postcard_footer_html": {
                "type": "string"
            },
            "postcard_email_subject": {
                "type": "string"
            },
            "facebook_page_id": {
                "type": "string"
            },
            "logo_on_black_url": {
                "type": "string"
            },
            "logo_on_color_url": {
                "type": "string"
            },
            "logo_on_white_url": {
                "type": "string"
            },
            "brand_slugs": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Brand.BrandSlugModel"
                }
            },
            "name": {
                "description": "Name of the brand.",
                "default": "Travelodge",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The brand ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Brand.BrandSlugModel": {
        "title": "brand_slug",
        "type": "object",
        "properties": {
            "name": {
                "description": "The brand slug name.",
                "default": "travelodge",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The brand slug ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccountForgotRequest": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "hotel_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.PasswordRecoverResponse": {
        "type": "object",
        "properties": {
            "registration_status": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3
                ],
                "type": "integer"
            },
            "email": {
                "type": "string"
            },
            "token": {
                "type": "string"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccountAuthenticateWifiAuthRequest": {
        "type": "object",
        "properties": {
            "guest_loginid": {
                "type": "string"
            },
            "guest_lastname": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.AuthenticateWifiResult": {
        "type": "object",
        "properties": {
            "result_code": {
                "type": "string"
            },
            "result_description": {
                "type": "string"
            },
            "member_type": {
                "type": "string"
            },
            "member_level": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccountActivateRequest": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "token": {
                "type": "string"
            },
            "property_code": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ActivateMembershipResponse": {
        "type": "object",
        "properties": {
            "activation_result": {
                "type": "string"
            },
            "result_code": {
                "type": "string"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccounteConciergeRegisterRegistrationRequest": {
        "type": "object",
        "properties": {
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "login_id": {
                "type": "string"
            },
            "mobile": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "sex": {
                "type": "string"
            },
            "member_type": {
                "type": "string"
            },
            "date_of_birth": {
                "type": "string"
            },
            "title": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ProfileTokenResponse": {
        "type": "object",
        "properties": {
            "token": {
                "type": "string"
            },
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile": {
        "type": "object",
        "properties": {
            "profile_id": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "address1": {
                "type": "string"
            },
            "address2": {
                "type": "string"
            },
            "zip": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state_code": {
                "type": "string"
            },
            "country_code": {
                "type": "string"
            },
            "date_of_birth": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "fax": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "mobile": {
                "type": "string"
            },
            "login_id": {
                "type": "string"
            },
            "do_not_mail": {
                "type": "boolean"
            },
            "do_not_email": {
                "type": "boolean"
            },
            "do_not_call": {
                "type": "boolean"
            },
            "remarks": {
                "type": "string"
            },
            "member_type": {
                "type": "string"
            },
            "member_id": {
                "type": "string"
            },
            "language": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "company": {
                "type": "string"
            },
            "joined_date": {
                "type": "string"
            },
            "created_source": {
                "type": "string"
            },
            "points_balance": {
                "format": "int32",
                "type": "integer"
            },
            "stays_until_free_night": {
                "format": "int32",
                "type": "integer"
            },
            "vip": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccountLoginRequest": {
        "type": "object",
        "properties": {
            "member_id": {
                "type": "string"
            },
            "login_id": {
                "type": "string"
            },
            "profile_password": {
                "type": "string"
            },
            "profile_email": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ProfileResponse": {
        "type": "object",
        "properties": {
            "guest_preference": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestPreferences"
                }
            },
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestPreferences": {
        "type": "object",
        "properties": {
            "preference_type": {
                "type": "string"
            },
            "preference_code": {
                "type": "string"
            },
            "preference_inactive": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.AccountUpdatePasswordRequest": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "new_password": {
                "type": "string"
            },
            "crm_property_code": {
                "type": "string"
            },
            "old_password": {
                "type": "string"
            },
            "token": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.UpdatingResponse": {
        "type": "object",
        "properties": {
            "result": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "type": "integer"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.AwardsResponse": {
        "type": "object",
        "properties": {
            "returned_rows": {
                "format": "int32",
                "type": "integer"
            },
            "rewards": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynReward"
                }
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynReward": {
        "type": "object",
        "properties": {
            "date_issued": {
                "type": "string"
            },
            "code": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "status": {
                "type": "string"
            },
            "status_description": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "expiration": {
                "type": "string"
            },
            "points": {
                "format": "int32",
                "type": "integer"
            },
            "voucher_number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.MemberProfileSearchRequest": {
        "type": "object",
        "properties": {
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "type": "string"
            },
            "country_code": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "profile_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ProfileLookUpSearchResponse": {
        "type": "object",
        "properties": {
            "profile_data": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.SimpleProfileInfo"
                }
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.SimpleProfileInfo": {
        "type": "object",
        "properties": {
            "salutation": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.StateProv"
            },
            "phone": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "profile_id": {
                "type": "string"
            },
            "birth_date": {
                "type": "string"
            },
            "membership_info": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.SimpleProfileMembershipInfo"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.StateProv": {
        "type": "object",
        "properties": {
            "state_code": {
                "type": "string"
            },
            "state_name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.SimpleProfileMembershipInfo": {
        "type": "object",
        "properties": {
            "program_code": {
                "type": "string"
            },
            "membership_id": {
                "type": "string"
            },
            "loyal_level": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.MemberProfileRegistrationRequest": {
        "type": "object",
        "properties": {
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "login_id": {
                "type": "string"
            },
            "mobile": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "sex": {
                "type": "string"
            },
            "member_type": {
                "type": "string"
            },
            "date_of_birth": {
                "type": "string"
            },
            "title": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.MemberProfileStayResponse": {
        "type": "object",
        "properties": {
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "returned_rows": {
                "format": "int32",
                "type": "integer"
            },
            "stay": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynStay"
                }
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynStay": {
        "type": "object",
        "properties": {
            "arrival": {
                "type": "string"
            },
            "departure": {
                "type": "string"
            },
            "pms_confirmation_number": {
                "type": "string"
            },
            "pms_property_code": {
                "type": "string"
            },
            "pms_property_name": {
                "type": "string"
            },
            "reservation_status": {
                "type": "string"
            },
            "point_value": {
                "format": "int32",
                "type": "integer"
            },
            "room_type_code": {
                "type": "string"
            },
            "room_type_description": {
                "type": "string"
            },
            "room_revenue": {
                "format": "double",
                "type": "number"
            },
            "food_beverage_revenue": {
                "format": "double",
                "type": "number"
            },
            "other_revenue": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.MemberProfileResponse": {
        "type": "object",
        "properties": {
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "guest_preference": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestPreferences"
                }
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.JsonPatchRequest": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.UpdateProfileModel": {
        "type": "object",
        "properties": {
            "guest_profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "guest_preference": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestPreferences"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.NewsletterResponseUnit": {
        "type": "object",
        "properties": {
            "status": {
                "type": "boolean"
            },
            "data": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynSubscription"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynSubscription": {
        "type": "object",
        "properties": {
            "code": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "description": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.SurveyGetResponse": {
        "type": "object",
        "properties": {
            "profile_id": {
                "format": "int32",
                "type": "integer"
            },
            "survey": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.Survey"
                }
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.Survey": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string"
            },
            "answer": {
                "type": "string"
            },
            "answer_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ResponseBase": {
        "type": "object",
        "properties": {
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynSurveyResponseModel": {
        "type": "object",
        "properties": {
            "status": {
                "type": "boolean"
            },
            "data": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynQuestion"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynQuestion": {
        "type": "object",
        "properties": {
            "question_id": {
                "format": "int32",
                "type": "integer"
            },
            "question": {
                "type": "string"
            },
            "responses": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynOptions"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynOptions": {
        "type": "object",
        "properties": {
            "label": {
                "type": "string"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.VoucherRequest": {
        "type": "object",
        "properties": {
            "profile_id": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "voucher_number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.VoucherResponse": {
        "type": "object",
        "properties": {
            "result_code": {
                "type": "string"
            },
            "result_description": {
                "type": "string"
            },
            "date_issued": {
                "type": "string"
            },
            "date_expiry": {
                "type": "string"
            },
            "award_code": {
                "type": "string"
            },
            "voucher_number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.ReinstateVoucherResponse": {
        "type": "object",
        "properties": {
            "result_code": {
                "type": "string"
            },
            "result_description": {
                "type": "string"
            },
            "date_redeemed": {
                "type": "string"
            },
            "reference": {
                "format": "int32",
                "type": "integer"
            },
            "date_issued": {
                "type": "string"
            },
            "date_expiry": {
                "type": "string"
            },
            "award_code": {
                "type": "string"
            },
            "voucher_number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.WhisperScreenResult": {
        "type": "object",
        "properties": {
            "hint1": {
                "type": "string"
            },
            "hint2": {
                "type": "string"
            },
            "hint3": {
                "type": "string"
            },
            "result_code": {
                "type": "string"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Stay.RoomStayModel": {
        "type": "object",
        "properties": {
            "dates": {
                "type": "object",
                "additionalProperties": {
                    "format": "date-time",
                    "type": "string"
                }
            },
            "confirmation": {
                "type": "string"
            },
            "property": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.PropertyModel"
                }
            },
            "status": {
                "type": "string"
            },
            "checkin_status": {
                "enum": [
                    "Unavailable",
                    "Reserved",
                    "CheckinAvailable",
                    "WaitListed",
                    "CheckedIn",
                    "CheckoutAvailable",
                    "CheckedOut",
                    "Canceled",
                    "NoShow"
                ],
                "type": "string"
            },
            "checkin_available": {
                "type": "boolean"
            },
            "checkout_available": {
                "type": "boolean"
            },
            "keys_available": {
                "type": "boolean"
            },
            "room": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Stay.RoomModel"
            },
            "revenue": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.InvoiceModel"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "special_requests": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            },
            "stay_card_image": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.PropertyModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "image": {
                "type": "string"
            },
            "phones": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Stay.RoomModel": {
        "type": "object",
        "properties": {
            "number": {
                "type": "string"
            },
            "room_type": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Stay.RoomTypeModel"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.InvoiceModel": {
        "type": "object",
        "properties": {
            "total": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AmountModel"
            },
            "current_balance": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AmountModel"
            },
            "charges": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.ChargeModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string"
            },
            "value": {
                "$ref": "System.Object"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Stay.RoomTypeModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "description": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.AmountModel": {
        "type": "object",
        "properties": {
            "currency": {
                "type": "string"
            },
            "amount": {
                "format": "double",
                "type": "number"
            },
            "type": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.ChargeModel": {
        "type": "object",
        "properties": {
            "charge": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AmountModel"
            },
            "date": {
                "format": "date-time",
                "type": "string"
            },
            "description": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Profile.ProfileModel": {
        "type": "object",
        "properties": {
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "emails": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "phones": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "dates": {
                "type": "object",
                "additionalProperties": {
                    "format": "date-time",
                    "type": "string"
                }
            },
            "addresses": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Locations.Models.LocationModel"
                }
            },
            "social": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Profile.SocialModel"
                }
            },
            "remarks": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "preferences": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.PreferenceModel"
                }
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            },
            "title": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            },
            "company": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Profile.CompanyModel"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Profile.SocialModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Common.PreferenceModel": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string"
            },
            "value": {
                "$ref": "System.Object"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Profile.CompanyModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "addresses": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Locations.Models.LocationModel"
                }
            },
            "phones": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "emails": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Subscription.SubscriptionModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "questions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyQuestionModel"
                }
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyQuestionModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "question": {
                "type": "string"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyResponseModel"
                }
            },
            "response": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyResponseModel"
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Survey.SurveyResponseModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.MemberProfileNotification": {
        "type": "object",
        "properties": {
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynGuestProfile"
            },
            "stay": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.Cendyn.Models.Response.CendynStay"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.PingRequest": {
        "type": "object",
        "properties": {
            "echo_data": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Cendyn.Models.Response.PingResponse": {
        "type": "object",
        "properties": {
            "echo_data": {
                "type": "string"
            },
            "result_code": {
                "format": "int32",
                "type": "integer"
            },
            "result_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.ChannelConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "config": {
                "$ref": "MonsciergeIDK.LivingStage.Models.ChannelConfig"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.ChannelConfig": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Slideshow",
                    "LiveStream",
                    "LivingStage"
                ],
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "living_stage": {
                "$ref": "MonsciergeIDK.LivingStage.Models.LivingStageChannelConfig"
            },
            "slideshow": {
                "$ref": "MonsciergeIDK.LivingStage.Models.SlideshowChannelConfig"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.LivingStageChannelConfig": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            },
            "background": {
                "type": "string"
            },
            "footer": {
                "type": "string"
            },
            "livestream_url": {
                "type": "string"
            },
            "playlist_url": {
                "type": "string"
            },
            "stage_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.SlideshowChannelConfig": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageModel"
                }
            }
        }
    },
    "MonsciergeIDK.Models.ImageModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "width": {
                "format": "int32",
                "type": "integer"
            },
            "height": {
                "format": "int32",
                "type": "integer"
            },
            "thumbnail_data": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.ClickRequest": {
        "type": "object",
        "properties": {
            "template": {
                "enum": [
                    "Console"
                ],
                "type": "string"
            },
            "scope_type": {
                "enum": [
                    "Place",
                    "Device",
                    "SubDevice",
                    "Hotel"
                ],
                "type": "string"
            },
            "producer": {
                "enum": [
                    "Lobby",
                    "Mobile"
                ],
                "type": "string"
            },
            "producer_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "from_ms": {
                "format": "int64",
                "type": "integer"
            },
            "to_ms": {
                "format": "int64",
                "type": "integer"
            },
            "section_name": {
                "type": "string"
            },
            "sub_section_name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.DeviceClickSection": {
        "type": "object",
        "properties": {
            "agg_name": {
                "type": "string"
            },
            "component_name": {
                "type": "string"
            },
            "console_xaml_binding": {
                "type": "string"
            },
            "data": {
                "$ref": "MonsciergeIDK.Analytics.Models.DeviceClickData"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.DeviceClickData": {
        "type": "object",
        "properties": {
            "_total_hits": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "aggregations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Analytics.Models.DeviceClickAggregation"
                }
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.DeviceClickAggregation": {
        "type": "object",
        "properties": {
            "total_hits": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.ClickHistogramRequest": {
        "type": "object",
        "properties": {
            "template": {
                "enum": [
                    "Console"
                ],
                "type": "string"
            },
            "scope_type": {
                "enum": [
                    "Place",
                    "Device",
                    "SubDevice",
                    "Hotel"
                ],
                "type": "string"
            },
            "producer": {
                "enum": [
                    "Lobby",
                    "Mobile"
                ],
                "type": "string"
            },
            "producer_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "from_ms": {
                "format": "int64",
                "type": "integer"
            },
            "to_ms": {
                "format": "int64",
                "type": "integer"
            },
            "bin_type": {
                "enum": [
                    "Date",
                    "Field"
                ],
                "type": "string"
            },
            "bin_size": {
                "type": "string"
            },
            "field_name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.DeviceHistogramSection": {
        "type": "object",
        "properties": {
            "aggregations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Analytics.Models.DeviceHistogramAggregation"
                }
            },
            "_record_count": {
                "format": "int32",
                "type": "integer"
            },
            "_total_hits": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Analytics.Models.DeviceHistogramAggregation": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "key_as_string": {
                "type": "string"
            },
            "_total_hits": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.ClickTrack.ClickTrackResourceModel": {
        "title": "click_track_resource",
        "type": "object",
        "properties": {
            "event_date": {
                "format": "date-time",
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "action": {
                "enum": [
                    "Click"
                ],
                "type": "string"
            },
            "identifier": {
                "type": "string"
            },
            "value_type": {
                "type": "string"
            },
            "values": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Country.CountryCollectionModel": {
        "title": "country_collection",
        "type": "object",
        "properties": {
            "countries": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Country.CountryResourceModel"
                }
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.LinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.Country.CountryResourceModel": {
        "title": "country_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "default": 1,
                "type": "integer"
            },
            "name": {
                "description": "Name of the country.",
                "default": "United States",
                "type": "string"
            },
            "country_code": {
                "description": "The ISO 3166-1 Alpha-2 country code.",
                "default": "US",
                "type": "string"
            },
            "min_postal_code_length": {
                "format": "int32",
                "description": "The minumum length of postal codes for the country.",
                "default": 5,
                "type": "integer"
            },
            "country_calling_code": {
                "description": "The dialing code used to prefix phone numbers for the country.",
                "default": "1",
                "type": "string"
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.Country.CountryLinkModel",
                "readOnly": true
            }
        }
    },
    "MonsciergeAPI.Models.Country.CountryLinkModel": {
        "title": "country_link",
        "type": "object",
        "properties": {
            "admin_divisions": {
                "type": "string"
            },
            "self": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTCurtainDevice": {
        "type": "object",
        "properties": {
            "state": {
                "enum": [
                    "Open",
                    "Closed",
                    "Toggle"
                ],
                "type": "string"
            },
            "level": {
                "format": "int32",
                "type": "integer"
            },
            "type": {
                "enum": [
                    "Curtain",
                    "Outlet",
                    "Switch",
                    "Thermostat"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.DeviceConfig.Models.DeviceConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "config": {
                "type": "string"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceModel": {
        "type": "object",
        "properties": {
            "ref_id": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "class": {
                "enum": [
                    "Android",
                    "iOS",
                    "Web",
                    "Electron",
                    "SMS",
                    "tvOS",
                    "watchOS"
                ],
                "type": "string"
            },
            "last_seen": {
                "format": "date-time",
                "type": "string"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "links": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "System.Object"
                }
            },
            "data": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceDetailModel"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceDetailModel": {
        "type": "object",
        "properties": {
            "info": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceInfoModel"
            },
            "name": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Base.ExternalTranslatableString"
            },
            "is_active": {
                "type": "boolean"
            },
            "description": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Base.ExternalTranslatableString"
            },
            "fk_phone_number": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceInfoModel": {
        "type": "object",
        "properties": {
            "ip": {
                "type": "string"
            },
            "device": {
                "type": "string"
            },
            "os_version": {
                "type": "string"
            },
            "wifi_ssid": {
                "type": "string"
            },
            "carrier_name": {
                "type": "string"
            },
            "location": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceGeoLocationModel"
            },
            "memory": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceUsageModel"
            },
            "storage": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceUsageModel"
            },
            "battery": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceBatteryModel"
            },
            "locale": {
                "type": "string"
            },
            "screen_size": {
                "$ref": "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceScreenSizeModel"
            },
            "density": {
                "type": "string"
            },
            "orientation": {
                "enum": [
                    "Vertical",
                    "Horizontal"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Base.ExternalTranslatableString": {
        "type": "object",
        "properties": {
            "value": {
                "type": "string"
            },
            "is_dirty": {
                "type": "boolean"
            },
            "language": {
                "type": "string"
            },
            "translate": {
                "type": "boolean"
            },
            "is_machine_translated": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceGeoLocationModel": {
        "type": "object",
        "properties": {
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceUsageModel": {
        "type": "object",
        "properties": {
            "total": {
                "format": "int64",
                "type": "integer"
            },
            "device_usage": {
                "format": "int64",
                "type": "integer"
            },
            "app_usage": {
                "format": "int64",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceBatteryModel": {
        "type": "object",
        "properties": {
            "state": {
                "enum": [
                    "Unknown",
                    "NotCharging",
                    "Charging",
                    "Full"
                ],
                "type": "string"
            },
            "battery_left": {
                "format": "float",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.Devices.Models.ExternalDeviceScreenSizeModel": {
        "type": "object",
        "properties": {
            "width": {
                "format": "int32",
                "type": "integer"
            },
            "height": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Device.Models.DeviceModel": {
        "type": "object",
        "properties": {
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "home_screen_option": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "sent_to_printer_message": {
                "type": "string"
            },
            "theme_color_base": {
                "type": "string"
            },
            "theme_text_color1": {
                "type": "string"
            },
            "theme_text_color2": {
                "type": "string"
            },
            "theme_color1": {
                "type": "string"
            },
            "theme_color2": {
                "type": "string"
            },
            "logo": {
                "type": "string"
            },
            "background": {
                "type": "string"
            },
            "welcome_image": {
                "type": "string"
            },
            "hotel_info_image": {
                "type": "string"
            },
            "recommended_image": {
                "type": "string"
            },
            "maps_directions_image": {
                "type": "string"
            },
            "flights_image": {
                "type": "string"
            },
            "weather_image": {
                "type": "string"
            },
            "postcard_image": {
                "type": "string"
            },
            "default_postcard_message": {
                "type": "string"
            },
            "logo_id": {
                "format": "int32",
                "type": "integer"
            },
            "background_id": {
                "format": "int32",
                "type": "integer"
            },
            "welcome_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_info_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "recommended_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "maps_directions_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "flights_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "weather_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "postcard_image_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.Device.Models.DeviceModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.Device.Models.DeviceModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.Device.Models.DeviceModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.SubDevice.Models.SubDeviceModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.SubDevice.Models.SubDeviceModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.SubDevice.Models.SubDeviceModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.SubDevice.Models.SubDeviceModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Doorlock.DoorLockRegisterModel": {
        "type": "object",
        "properties": {
            "device_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventGroups.EventGroupCollectionModel": {
        "title": "event_group_collection",
        "type": "object",
        "properties": {
            "event_groups": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventGroups.EventGroupResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventGroups.EventGroupResourceModel": {
        "title": "event_group_resource",
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "event_access_code": {
                "type": "string"
            },
            "invite_url": {
                "type": "string"
            },
            "has_events": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventLocations.EventLocationCollectionModel": {
        "title": "event_location_collection",
        "type": "object",
        "properties": {
            "event_locations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventLocations.EventLocationResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventLocations.EventLocationResourceModel": {
        "title": "event_location_resource",
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "is_stage": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "refid": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "has_events": {
                "type": "boolean"
            },
            "description": {
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Images.ImageResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Images.ImageResourceModel": {
        "title": "image_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "path": {
                "type": "string"
            },
            "height": {
                "format": "int32",
                "type": "integer"
            },
            "width": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionAttachmentModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "event_detail_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "blob_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "content_type": {
                "type": "string"
            },
            "file_name": {
                "type": "string"
            },
            "path": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionAttachmentModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionAttachmentModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionAttachmentModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionImageModel": {
        "type": "object",
        "properties": {
            "mapping_id": {
                "format": "int32",
                "type": "integer"
            },
            "event_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "width": {
                "format": "int32",
                "type": "integer"
            },
            "height": {
                "format": "int32",
                "type": "integer"
            },
            "thumbnail_data": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "path": {
                "type": "string"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionImageModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionImageModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionImageModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionSponsorshipModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "website": {
                "type": "string"
            },
            "event_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageModel"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionSponsorshipModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionSponsorshipModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionSponsorshipModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionModel": {
        "type": "object",
        "properties": {
            "event_id": {
                "format": "int32",
                "type": "integer"
            },
            "description": {
                "type": "string"
            },
            "website": {
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionImageModel"
                }
            },
            "attachments": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionAttachmentModel"
                }
            },
            "sponsorships": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventSectionSponsorshipModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "Marvin.JsonPatch.JsonPatchDocument[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionModel]": {
        "type": "object",
        "properties": {
            "operations": {
                "type": "array",
                "items": {
                    "$ref": "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionModel]"
                },
                "readOnly": true
            }
        }
    },
    "Marvin.JsonPatch.Operations.Operation[MonsciergeIDK.MeetingsAndEvents.Models.EventSectionModel]": {
        "type": "object",
        "properties": {
            "value": {
                "$ref": "System.Object"
            },
            "path": {
                "type": "string"
            },
            "op": {
                "type": "string"
            },
            "from": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventDetails.EventCollectionModel": {
        "title": "event_collection",
        "type": "object",
        "properties": {
            "events": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventDetails.EventResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventDetails.EventResourceModel": {
        "title": "event_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "occurrence_id": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "local_start": {
                "format": "date-time",
                "type": "string"
            },
            "local_end": {
                "format": "date-time",
                "type": "string"
            },
            "local_start_ms": {
                "format": "int64",
                "type": "integer"
            },
            "local_end_ms": {
                "format": "int64",
                "type": "integer"
            },
            "allday": {
                "type": "boolean"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_name": {
                "type": "string"
            },
            "location_id": {
                "format": "int32",
                "type": "integer"
            },
            "location_name": {
                "type": "string"
            },
            "is_recurring": {
                "type": "boolean"
            },
            "icalendar_recurrence_rule": {
                "type": "string"
            },
            "staff_only": {
                "type": "boolean"
            },
            "external_system_id": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventDetails.EventExpandedResourceModel": {
        "title": "event_expanded_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "occurrence_id": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "local_start": {
                "format": "date-time",
                "type": "string"
            },
            "local_end": {
                "format": "date-time",
                "type": "string"
            },
            "local_start_ms": {
                "format": "int64",
                "type": "integer"
            },
            "local_end_ms": {
                "format": "int64",
                "type": "integer"
            },
            "allday": {
                "type": "boolean"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_name": {
                "type": "string"
            },
            "location_id": {
                "format": "int32",
                "type": "integer"
            },
            "location_name": {
                "type": "string"
            },
            "is_recurring": {
                "type": "boolean"
            },
            "icalendar_recurrence_rule": {
                "type": "string"
            },
            "staff_only": {
                "type": "boolean"
            },
            "external_system_id": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "website_url": {
                "type": "string"
            },
            "map_image": {
                "$ref": "MonsciergeAPI.Models.Images.ImageResourceModel"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Images.ImageResourceModel"
                }
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventSections.EventSectionResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventSections.EventSectionResourceModel": {
        "title": "event_section_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "website": {
                "type": "string"
            },
            "attachments": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.EventSections.EventSectionAttachmentResourceModel"
                }
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Images.ImageResourceModel"
                }
            },
            "sponsorships": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventSections.EventSectionSponsorshipResourceModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.EventSections.EventSectionAttachmentResourceModel": {
        "title": "event_section_attachment_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "file_name": {
                "type": "string"
            },
            "path": {
                "type": "string"
            },
            "content_type": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventSections.EventSectionSponsorshipResourceModel": {
        "title": "event_section_sponsorship_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "website": {
                "type": "string"
            },
            "event_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "image": {
                "$ref": "MonsciergeAPI.Models.Images.ImageResourceModel"
            }
        }
    },
    "MonsciergeIDK.Carts.Models.CartModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "feature_id": {
                "format": "int32",
                "type": "integer"
            },
            "user_id": {
                "format": "int32",
                "type": "integer"
            },
            "application_id": {
                "format": "int32",
                "type": "integer"
            },
            "items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Carts.Models.CartItemModel"
                }
            },
            "place_name": {
                "type": "string"
            },
            "feature_name": {
                "type": "string"
            },
            "user_first_name": {
                "type": "string"
            },
            "user_last_name": {
                "type": "string"
            },
            "total_price": {
                "format": "double",
                "type": "number",
                "readOnly": true
            },
            "total_price_string": {
                "type": "string",
                "readOnly": true
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.Request.RequestTemplateOption"
                }
            },
            "state": {
                "enum": [
                    "Active",
                    "Processed",
                    "Abandoned"
                ],
                "type": "string"
            },
            "currency": {
                "enum": [
                    "USD",
                    "GBP",
                    "JPY",
                    "EUR"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Carts.Models.CartItemModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "section_id": {
                "format": "int32",
                "type": "integer"
            },
            "item_id": {
                "format": "int32",
                "type": "integer"
            },
            "price_id": {
                "format": "int32",
                "type": "integer"
            },
            "modifiers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Carts.Models.CartItemModifierModel"
                }
            },
            "additional_info": {
                "type": "string"
            },
            "menu_name": {
                "type": "string"
            },
            "section_name": {
                "type": "string"
            },
            "item_name": {
                "type": "string"
            },
            "quantity": {
                "format": "int32",
                "type": "integer"
            },
            "currency": {
                "enum": [
                    "USD",
                    "GBP",
                    "JPY",
                    "EUR"
                ],
                "type": "string"
            },
            "item_price": {
                "format": "double",
                "type": "number",
                "readOnly": true
            },
            "item_price_string": {
                "type": "string",
                "readOnly": true
            },
            "base_price": {
                "format": "double",
                "type": "number"
            },
            "base_price_string": {
                "type": "string",
                "readOnly": true
            },
            "sub_total": {
                "format": "double",
                "type": "number",
                "readOnly": true
            },
            "sub_total_string": {
                "type": "string",
                "readOnly": true
            },
            "additional_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Carts.Models.CartItemModel"
                }
            },
            "parent_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Request.RequestTemplateOption": {
        "type": "object",
        "properties": {
            "default_number": {
                "format": "int32",
                "type": "integer"
            },
            "default_text": {
                "type": "string"
            },
            "max_number": {
                "format": "int32",
                "type": "integer"
            },
            "min_number": {
                "format": "int32",
                "type": "integer"
            },
            "required": {
                "type": "boolean"
            },
            "watermark": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "type": {
                "enum": [
                    "Unknown",
                    "Number",
                    "DateTime",
                    "Text",
                    "Message",
                    "Boolean",
                    "Picklist"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Carts.Models.CartItemModifierModel": {
        "type": "object",
        "properties": {
            "modifier_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "price": {
                "format": "double",
                "type": "number"
            },
            "price_string": {
                "type": "string",
                "readOnly": true
            },
            "currency": {
                "enum": [
                    "USD",
                    "GBP",
                    "JPY",
                    "EUR"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Request.RequestOptionValue": {
        "type": "object",
        "properties": {
            "option": {
                "$ref": "MonsciergeIDK.Models.Request.RequestTemplateOptionBase"
            },
            "value_ms": {
                "format": "int64",
                "type": "integer"
            },
            "value_number": {
                "format": "int32",
                "type": "integer"
            },
            "value_text": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Request.RequestTemplateOptionBase": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "type": {
                "enum": [
                    "Unknown",
                    "Number",
                    "DateTime",
                    "Text",
                    "Message",
                    "Boolean",
                    "Picklist"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Reservation.ReservationModel": {
        "type": "object",
        "properties": {
            "feature_id": {
                "type": "string"
            },
            "user_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "type": "string"
            },
            "image_path": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "salutation": {
                "type": "string"
            },
            "reservation_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "special_request": {
                "type": "string"
            },
            "comments": {
                "type": "string"
            },
            "venue_id": {
                "type": "string"
            },
            "venue_name": {
                "type": "string"
            },
            "country_code": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "party_size": {
                "format": "int32",
                "type": "integer"
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.Models.HeBSLoyaltyProfileObject": {
        "type": "object",
        "properties": {
            "profile": {
                "$ref": "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfile"
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfile": {
        "type": "object",
        "properties": {
            "addresses": {
                "$ref": "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfileAddressGroup"
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfileAddressGroup": {
        "type": "object",
        "properties": {
            "primary": {
                "$ref": "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfileAddress"
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.HeBSLoyaltyProfileAddress": {
        "type": "object",
        "properties": {
            "street1": {
                "type": "string"
            },
            "street2": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "type": "string"
            },
            "zip": {
                "type": "string"
            },
            "country": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.Models.HeBSLoyaltySubscriptionObject": {
        "type": "object",
        "properties": {
            "subscriptions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Integrations.HeBS.Loyalty.Models.HeBSLoyaltySubscription"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.HeBS.Loyalty.Models.HeBSLoyaltySubscription": {
        "type": "object",
        "properties": {
            "code": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MarketingCards.Models.MarketingCardResponse": {
        "type": "object",
        "properties": {
            "top_images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MarketingCards.Models.TopImage"
                }
            }
        }
    },
    "MonsciergeIDK.MarketingCards.Models.TopImage": {
        "type": "object",
        "properties": {
            "link": {
                "type": "string"
            },
            "path": {
                "type": "string"
            },
            "path_retina": {
                "type": "string"
            },
            "title": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Hotel.HotelAirportModel": {
        "title": "hotel_airport",
        "type": "object",
        "properties": {
            "hotel_airport_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "type": "string"
            },
            "airport_code": {
                "type": "string"
            },
            "airport_name": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Configs.Models.BaseConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "permission": {
                "type": "boolean"
            },
            "key": {
                "type": "string"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Configs.Models.ConfigOption"
                }
            },
            "name": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "possible_values": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "description": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Configs.Models.ConfigOption": {
        "type": "object",
        "properties": {
            "permission": {
                "type": "boolean"
            },
            "required": {
                "type": "boolean"
            },
            "default_value": {
                "$ref": "System.Object"
            },
            "name": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "possible_values": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Hotels.Models.HotelConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "f_kcreated_by_user": {
                "format": "int32",
                "type": "integer"
            },
            "f_kupdated_by_user": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "f_khotel": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "key": {
                "enum": [
                    "Cab",
                    "CheckedInNotifications",
                    "BeaconCampaigns",
                    "Wayfinding",
                    "ISACEvents",
                    "Limo",
                    "Shuttle",
                    "Taxi",
                    "Buggy",
                    "AnonUser",
                    "Meridian",
                    "Pms",
                    "GeographyFence",
                    "EventDrivenCheckIn",
                    "DoorLock",
                    "AssaAbloy",
                    "RequestQueue",
                    "RequestTemplate",
                    "Hours",
                    "MobileMore",
                    "TermsConditions",
                    "Postcard",
                    "Channel",
                    "LivingStage",
                    "HotSOS",
                    "Anonymous",
                    "Recommendations",
                    "HomeKit",
                    "StayCard",
                    "DoorLocks",
                    "SaltoConnection"
                ],
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "option": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Hotel.HotelTransportationModel": {
        "title": "hotel_transportation",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "enable_transportation": {
                "type": "boolean"
            },
            "enable_cab": {
                "type": "boolean"
            },
            "cab_email": {
                "type": "string"
            },
            "cab_phone": {
                "type": "string"
            },
            "cab_sms": {
                "type": "string"
            },
            "enable_valet": {
                "type": "boolean"
            },
            "valet_email": {
                "type": "string"
            },
            "valet_phone": {
                "type": "string"
            },
            "valet_sms": {
                "type": "string"
            },
            "enable_shuttle": {
                "type": "boolean"
            },
            "shuttle_email": {
                "type": "string"
            },
            "shuttle_phone": {
                "type": "string"
            },
            "shuttle_sms": {
                "type": "string"
            },
            "enable_limo": {
                "type": "boolean"
            },
            "limo_email": {
                "type": "string"
            },
            "limo_phone": {
                "type": "string"
            },
            "limo_sms": {
                "type": "string"
            },
            "cab_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "limo_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "shuttle_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "valet_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "cab_request_template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateModel"
            },
            "limo_request_template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateModel"
            },
            "shuttle_request_template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateModel"
            },
            "valet_request": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateModel"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.RequestTemplateModel": {
        "title": "request_template",
        "type": "object",
        "properties": {
            "eta_s": {
                "format": "int32",
                "description": "The estimated time the request should be completed in seconds.",
                "default": 900,
                "type": "integer"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.Option.RequestTemplateOptionModel"
                }
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "validation": {
                "description": "Whether or not the template requires validation. <code>True</code> for validation required, <code>false</code> if not.",
                "type": "boolean"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "category": {
                "$ref": "MonsciergeAPI.Models.Request.Category.RequestCategoryBaseModel"
            },
            "staff": {
                "description": "Whether or not the template is for staff users only. <code>True</code> for staff only, <code>false</code> if not.",
                "type": "boolean"
            },
            "voice_number": {
                "type": "string"
            },
            "sms_numbers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestSMSNumber"
                }
            },
            "is_active": {
                "description": "Whether or not the template is active. <code>True</code> for active, <code>false</code> if not.",
                "type": "boolean"
            },
            "group_id": {
                "format": "int32",
                "description": "The group ID the template belongs to.",
                "default": 42,
                "type": "integer"
            },
            "name": {
                "description": "The name of the template.",
                "default": "General",
                "type": "string"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceBaseModel",
                "description": "The place the template belongs to."
            },
            "stock_responses": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.StockResponse.RequestTemplateStockResponseBaseModel"
                }
            },
            "image_url": {
                "description": "The image filename to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "string"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request template ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.Option.RequestTemplateOptionModel": {
        "title": "request_template_option",
        "type": "object",
        "properties": {
            "default_number": {
                "format": "int32",
                "description": "The default value to use for an option as a number.",
                "type": "integer"
            },
            "default_text": {
                "description": "The default value to use for an option as a string of text.",
                "type": "string"
            },
            "max_number": {
                "format": "int32",
                "description": "The maximum number of characters to allow for values.",
                "default": 255,
                "type": "integer"
            },
            "min_number": {
                "format": "int32",
                "description": "The minimum number of characters to require for values.",
                "default": 1,
                "type": "integer"
            },
            "required": {
                "description": "Whether or not the option is required. <code>True</code> for required, <code>false</code> if not.",
                "type": "boolean"
            },
            "watermark": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "description": "The name of the option.",
                "default": "Email",
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "description": "The Id of the request template",
                "type": "integer"
            },
            "choices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.RequestTemplates.Models.RequestOptionChoicesBaseModel"
                }
            },
            "type": {
                "enum": [
                    "Unknown",
                    "Number",
                    "DateTime",
                    "Text",
                    "Message",
                    "Boolean",
                    "Picklist"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request option ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Category.RequestCategoryBaseModel": {
        "title": "request_category_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the category.",
                "default": "Maintenance Issue",
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The request category ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestSMSNumber": {
        "title": "request_smsnumber",
        "type": "object",
        "properties": {
            "number": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Transportation.TransportationModel": {
        "title": "transportation",
        "type": "object",
        "properties": {
            "enabled": {
                "type": "boolean"
            },
            "cab": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "limo": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "shuttle": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "valet": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "name": {
                "type": "string"
            },
            "enable": {
                "type": "boolean"
            },
            "email": {
                "type": "string"
            },
            "sms": {
                "type": "string"
            },
            "enable_request_template": {
                "type": "boolean"
            },
            "request_template_name": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Transportation.Models.TransportationBaseModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "enable": {
                "type": "boolean"
            },
            "email": {
                "type": "string"
            },
            "sms": {
                "type": "string"
            },
            "enable_request_template": {
                "type": "boolean"
            },
            "request_template_name": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Transportation.Models.TransportationModel": {
        "type": "object",
        "properties": {
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "enabled": {
                "type": "boolean"
            },
            "cab": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "limo": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "shuttle": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            },
            "valet": {
                "$ref": "MonsciergeIDK.Transportation.Models.TransportationBaseModel"
            }
        }
    },
    "MonsciergeAPI.Models.Images.ImageCreateResourceModel": {
        "title": "image_create_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "path": {
                "type": "string"
            },
            "height": {
                "format": "int32",
                "type": "integer"
            },
            "width": {
                "format": "int32",
                "type": "integer"
            },
            "account_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.IntegrationMaps.Models.IntegrationMapModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "monscierge_ref_id": {
                "type": "string"
            },
            "integration_id": {
                "type": "string"
            },
            "integration_type": {
                "type": "string"
            },
            "version": {
                "type": "string"
            },
            "integration_name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.PerformanceModel": {
        "type": "object",
        "properties": {
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "description": {
                "type": "string"
            },
            "performer": {
                "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventHostModel"
            },
            "stage": {
                "$ref": "MonsciergeIDK.LivingStage.Models.Stage.StageListModel"
            },
            "featured": {
                "type": "boolean"
            },
            "venue_id": {
                "format": "int32",
                "type": "integer"
            },
            "venue": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "performance_id": {
                "format": "int32",
                "type": "integer"
            },
            "stage_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "performer_id": {
                "type": "string"
            },
            "start_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "end_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "url": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventHostModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "events": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventListModel"
                }
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageModel"
                }
            },
            "links": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventHostLinkMapModel"
                }
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.Stage.StageListModel": {
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "stage_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_name": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventListModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "event_date": {
                "format": "date-time",
                "type": "string"
            },
            "performance_url": {
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventHostLinkMapModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "host_id": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Website",
                    "Twitter",
                    "Facebook",
                    "Phone",
                    "iTunes",
                    "Spotify"
                ],
                "type": "string"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.PerformanceListModel": {
        "type": "object",
        "properties": {
            "featured": {
                "type": "boolean"
            },
            "venue_id": {
                "format": "int32",
                "type": "integer"
            },
            "venue": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "performance_id": {
                "format": "int32",
                "type": "integer"
            },
            "stage_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "performer_id": {
                "type": "string"
            },
            "start_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "end_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageListModel"
                }
            },
            "url": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.Performer": {
        "type": "object",
        "properties": {
            "last_performance": {
                "format": "date-time",
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "events": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventListModel"
                }
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageModel"
                }
            },
            "links": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventHostLinkMapModel"
                }
            }
        }
    },
    "MonsciergeIDK.Enums.DescriptiveEnumModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "value": {
                "type": "string"
            },
            "description": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.PerformerListModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.StageModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "contact": {
                "type": "string"
            },
            "hours": {
                "$ref": "System.Object"
            },
            "address": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "state": {
                "type": "string"
            },
            "postal_code": {
                "type": "string"
            },
            "primary_image": {
                "type": "string"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageModel"
                }
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "stage_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_name": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.LivingStage.Models.LivingStageConfigModel": {
        "type": "object",
        "properties": {
            "terms": {
                "type": "string"
            },
            "featured_performances": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.PerformanceListModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Location.LocationCollectionResourceModel": {
        "title": "location_collection_resource",
        "type": "object",
        "properties": {
            "locations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Location.LocationResourceModel"
                }
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Location.LocationResourceModel": {
        "title": "location_resource",
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "created_on": {
                "format": "int64",
                "type": "integer"
            },
            "updated_on": {
                "format": "int64",
                "type": "integer"
            },
            "sub_premise": {
                "type": "string"
            },
            "premise": {
                "type": "string"
            },
            "street_number": {
                "type": "string"
            },
            "route": {
                "type": "string"
            },
            "locality": {
                "type": "string"
            },
            "administrative_area": {
                "type": "string"
            },
            "country": {
                "type": "string"
            },
            "postal_code": {
                "type": "string"
            },
            "postal_code_sufix": {
                "type": "string"
            },
            "latitude": {
                "format": "float",
                "type": "number"
            },
            "longitude": {
                "format": "float",
                "type": "number"
            },
            "google_place_id": {
                "type": "string"
            },
            "formatted_address": {
                "type": "string"
            },
            "self_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuModel": {
        "type": "object",
        "properties": {
            "close_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "close_ms": {
                "format": "int64",
                "type": "integer"
            },
            "has_menu_items": {
                "type": "boolean"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "localized_name": {
                "type": "string"
            },
            "map_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "open_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "open_ms": {
                "format": "int64",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuSectionListModel"
                }
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuSectionListModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "has_items": {
                "type": "boolean"
            },
            "localized_description": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "parent_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuListItemModel"
                }
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuSectionListModel"
                }
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuListItemModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "price": {
                "format": "double",
                "type": "number"
            },
            "menu_item_id": {
                "format": "int32",
                "type": "integer"
            },
            "price_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuItemModel": {
        "type": "object",
        "properties": {
            "calories": {
                "format": "int32",
                "type": "integer"
            },
            "carb_grams": {
                "format": "int32",
                "type": "integer"
            },
            "cholesterol": {
                "format": "int32",
                "type": "integer"
            },
            "description": {
                "type": "string"
            },
            "fat_grams": {
                "format": "int32",
                "type": "integer"
            },
            "fiber_grams": {
                "format": "int32",
                "type": "integer"
            },
            "info": {
                "type": "string"
            },
            "iron": {
                "format": "int32",
                "type": "integer"
            },
            "localized_description": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "localized_sub_title": {
                "type": "string"
            },
            "menu_item_id": {
                "format": "int32",
                "type": "integer"
            },
            "micros_id": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "potassium": {
                "format": "int32",
                "type": "integer"
            },
            "price": {
                "format": "double",
                "type": "number"
            },
            "protein_grams": {
                "format": "int32",
                "type": "integer"
            },
            "saturated_fat_grams": {
                "format": "int32",
                "type": "integer"
            },
            "subtitle": {
                "type": "string"
            },
            "sugar_grams": {
                "format": "int32",
                "type": "integer"
            },
            "sodium": {
                "format": "int32",
                "type": "integer"
            },
            "vitamin_c": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "allergies": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "characteristics": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.CharacteristicModel"
                }
            },
            "modifiers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuItemModifierModel"
                }
            },
            "pairings": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuListItemModel"
                }
            },
            "prices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuItemPriceModel"
                }
            },
            "upsell_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuListItemModel"
                }
            },
            "menu_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_section_item_map_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.CharacteristicModel": {
        "type": "object",
        "properties": {
            "characteristic_id": {
                "format": "int32",
                "type": "integer"
            },
            "icon": {
                "type": "string"
            },
            "is_allergy": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuItemModifierModel": {
        "type": "object",
        "properties": {
            "menu_item_modifier_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_item_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "values": {
                "type": "string"
            },
            "possible_values": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuItemModifierValueModel"
                }
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuItemPriceModel": {
        "type": "object",
        "properties": {
            "price_id": {
                "format": "int32",
                "type": "integer"
            },
            "description": {
                "type": "string"
            },
            "price": {
                "type": "string"
            },
            "price_decimal": {
                "format": "double",
                "type": "number"
            },
            "icon": {
                "type": "string"
            },
            "micros_id": {
                "format": "int64",
                "type": "integer"
            },
            "micros_price_level": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuItemModifierValueModel": {
        "type": "object",
        "properties": {
            "menu_item_modifier_value_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_item_modifier_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "price": {
                "type": "string"
            },
            "price_decimal": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.MenuItemModel": {
        "title": "menu_item",
        "type": "object",
        "properties": {
            "characteristics": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemCharacteristicModel"
                }
            },
            "desc": {
                "type": "string"
            },
            "nutrition": {
                "$ref": "MonsciergeAPI.Models.Menu.Item.NutritionModel"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemOptionModel"
                }
            },
            "pairings": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemBaseModel"
                }
            },
            "prices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemPriceModel"
                }
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the item.",
                "default": "American Buffet",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The menu item ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.MenuItemCharacteristicModel": {
        "title": "menu_item_characteristic",
        "type": "object",
        "properties": {
            "allergen": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.NutritionModel": {
        "title": "nutrition",
        "type": "object",
        "properties": {
            "calories": {
                "format": "int32",
                "type": "integer"
            },
            "calories_rdv": {
                "format": "float",
                "type": "number"
            },
            "cholesterol": {
                "format": "int32",
                "type": "integer"
            },
            "cholesterol_rdv": {
                "format": "float",
                "type": "number"
            },
            "dietary_fiber_g": {
                "format": "int32",
                "type": "integer"
            },
            "dietary_fiber_rdv": {
                "format": "float",
                "type": "number"
            },
            "protein_g": {
                "format": "int32",
                "type": "integer"
            },
            "protein_rdv": {
                "format": "float",
                "type": "number"
            },
            "saturated_fat_g": {
                "format": "int32",
                "type": "integer"
            },
            "sodium": {
                "format": "int32",
                "type": "integer"
            },
            "sodium_rdv": {
                "format": "float",
                "type": "number"
            },
            "sugars_g": {
                "format": "int32",
                "type": "integer"
            },
            "total_carbohydrates_g": {
                "format": "int32",
                "type": "integer"
            },
            "total_carbohydrates_rdv": {
                "format": "float",
                "type": "number"
            },
            "total_fat_g": {
                "format": "int32",
                "type": "integer"
            },
            "total_fat_rdv": {
                "format": "float",
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.MenuItemOptionModel": {
        "title": "menu_item_option",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "prices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemPriceModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.MenuItemBaseModel": {
        "title": "menu_item_base",
        "type": "object",
        "properties": {
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the item.",
                "default": "American Buffet",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The menu item ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Menu.Item.MenuItemPriceModel": {
        "title": "menu_item_price",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "price": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuSectionModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "localized_description": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "menu_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "micros_id": {
                "format": "int64",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuListItemModel"
                }
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "parent_section_id": {
                "format": "int32",
                "type": "integer"
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuSectionModel"
                }
            }
        }
    },
    "MonsciergeIDK.MobileMenu.Models.MobileHomeScreenButtonModel": {
        "type": "object",
        "properties": {
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "links": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MobileMenu.Models.MobileHomeScreenLinkModel"
                }
            }
        }
    },
    "MonsciergeIDK.MobileMenu.Models.MobileHomeScreenLinkModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "default_name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "visibility": {
                "format": "int32",
                "enum": [
                    1,
                    2
                ],
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "button_type_id": {
                "format": "int32",
                "type": "integer"
            },
            "button_type": {
                "enum": [
                    "HotelInfo",
                    "Directions",
                    "Call",
                    "Reservations",
                    "Transportation",
                    "RoomService",
                    "Events",
                    "Menus",
                    "LocalMaps",
                    "Requests",
                    "Rewards",
                    "MyRequests",
                    "GetMyVehicle",
                    "LocalRecommendations",
                    "Flights",
                    "CheckIn",
                    "Weather",
                    "Postcards",
                    "Buggy",
                    "PropertyInfo",
                    "Url",
                    "More",
                    "Dining",
                    "CheckOut",
                    "Wayfinding",
                    "Explore",
                    "Email",
                    "Home",
                    "Messages",
                    "Profile",
                    "DoorLock",
                    "LiveStream",
                    "ConvenientCare",
                    "Feature",
                    "FeatureCategory",
                    "RequestTemplate",
                    "Event",
                    "HomeKit"
                ],
                "type": "string"
            },
            "url": {
                "type": "string"
            },
            "is_how_can_ihelp": {
                "type": "boolean"
            },
            "feature_type": {
                "enum": [
                    "Feature",
                    "FeatureCategory",
                    "Event",
                    "RequestTemplate",
                    "Url",
                    "Phone"
                ],
                "type": "string"
            },
            "feature_id": {
                "format": "int32",
                "type": "integer"
            },
            "android_image": {
                "type": "string"
            },
            "android_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "ios_image": {
                "type": "string"
            },
            "ios_image_id": {
                "format": "int32",
                "type": "integer"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.MobileMore.MobileMoreBaseModel": {
        "title": "mobile_more_base",
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Phone",
                    "Website",
                    "Feature",
                    "Separator"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "feature_id": {
                "type": "string"
            },
            "feature_key": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavItemPlatformModel": {
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "HotelInfo",
                    "Directions",
                    "Call",
                    "Reservations",
                    "Transportation",
                    "RoomService",
                    "Events",
                    "Menus",
                    "LocalMaps",
                    "Requests",
                    "Rewards",
                    "MyRequests",
                    "GetMyVehicle",
                    "LocalRecommendations",
                    "Flights",
                    "CheckIn",
                    "Weather",
                    "Postcards",
                    "Buggy",
                    "PropertyInfo",
                    "Url",
                    "More",
                    "Dining",
                    "CheckOut",
                    "Wayfinding",
                    "Explore",
                    "Email",
                    "Home",
                    "Messages",
                    "Profile",
                    "DoorLock",
                    "LiveStream",
                    "ConvenientCare",
                    "Feature",
                    "FeatureCategory",
                    "RequestTemplate",
                    "Event",
                    "HomeKit"
                ],
                "type": "string"
            },
            "display_name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "value": {
                "type": "string"
            },
            "condition": {
                "$ref": "MonsciergeIDK.Navigation.Models.NavConditionModel"
            },
            "sub_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Navigation.Models.NavItemPlatformModel"
                }
            },
            "theme": {
                "$ref": "MonsciergeIDK.Navigation.Models.NavThemePlatformModel"
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavConditionModel": {
        "type": "object",
        "properties": {
            "statuses": {
                "enum": [
                    "Always",
                    "WhenLoggedIn",
                    "CheckedIn"
                ],
                "type": "string"
            },
            "condition": {
                "enum": [
                    "Or",
                    "And",
                    "Nor",
                    "Xor"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavThemePlatformModel": {
        "type": "object",
        "properties": {
            "image_path": {
                "type": "string"
            },
            "hex_color": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavMenuModel": {
        "type": "object",
        "properties": {
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "type": {
                "enum": [
                    "Explore",
                    "HowCanIHelp",
                    "Home",
                    "TabBar",
                    "More",
                    "Brand"
                ],
                "type": "string"
            },
            "navigation_models": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Navigation.Models.NavItemModel"
                }
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavItemModel": {
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "HotelInfo",
                    "Directions",
                    "Call",
                    "Reservations",
                    "Transportation",
                    "RoomService",
                    "Events",
                    "Menus",
                    "LocalMaps",
                    "Requests",
                    "Rewards",
                    "MyRequests",
                    "GetMyVehicle",
                    "LocalRecommendations",
                    "Flights",
                    "CheckIn",
                    "Weather",
                    "Postcards",
                    "Buggy",
                    "PropertyInfo",
                    "Url",
                    "More",
                    "Dining",
                    "CheckOut",
                    "Wayfinding",
                    "Explore",
                    "Email",
                    "Home",
                    "Messages",
                    "Profile",
                    "DoorLock",
                    "LiveStream",
                    "ConvenientCare",
                    "Feature",
                    "FeatureCategory",
                    "RequestTemplate",
                    "Event",
                    "HomeKit"
                ],
                "type": "string"
            },
            "display_name": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "value": {
                "type": "string"
            },
            "condition": {
                "$ref": "MonsciergeIDK.Navigation.Models.NavConditionModel"
            },
            "sub_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Navigation.Models.NavItemModel"
                }
            },
            "theme": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Navigation.Models.NavThemeModel"
                }
            }
        }
    },
    "MonsciergeIDK.Navigation.Models.NavThemeModel": {
        "type": "object",
        "properties": {
            "platform_type": {
                "enum": [
                    "Web",
                    "Android",
                    "Ios",
                    "Lobby",
                    "Other",
                    "Tv",
                    "Channel",
                    "DigitalSignage"
                ],
                "type": "string"
            },
            "image_path": {
                "type": "string"
            },
            "hex_color": {
                "type": "string"
            },
            "text_color": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTOutletDevice": {
        "type": "object",
        "properties": {
            "outlet_plugs": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTOutletPlug"
                }
            },
            "type": {
                "enum": [
                    "Curtain",
                    "Outlet",
                    "Switch",
                    "Thermostat"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTOutletPlug": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "current": {
                "format": "double",
                "type": "number"
            },
            "kwh": {
                "format": "double",
                "type": "number"
            },
            "power": {
                "format": "double",
                "type": "number"
            },
            "power_factor": {
                "format": "double",
                "type": "number"
            },
            "power_state": {
                "enum": [
                    "On",
                    "Off"
                ],
                "type": "string"
            },
            "voltage": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.CheckInValidationModel": {
        "type": "object",
        "properties": {
            "confirmation": {
                "type": "string"
            },
            "validations": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "options": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "special_requests": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.CheckinResponseModel": {
        "type": "object",
        "properties": {
            "message": {
                "type": "string"
            },
            "stay": {
                "$ref": "MonsciergeIDK.Integrations.Base.Models.Stay.RoomStayModel"
            },
            "request_id": {
                "type": "string"
            },
            "is_queued": {
                "type": "boolean"
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Room.RoomAvailabilityOptions": {
        "type": "object",
        "properties": {
            "stay_id": {
                "type": "string"
            },
            "confirmation_number": {
                "type": "string"
            },
            "room_type": {
                "type": "string"
            },
            "start_date": {
                "format": "date-time",
                "type": "string"
            },
            "end_date": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.PersonalDevice.PersonalDeviceManufacturerModel": {
        "title": "personal_device_manufacturer",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the manufacturer.",
                "default": "Apple",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The personal device manufacturer ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.PersonalDevice.PersonalDeviceModelModel": {
        "title": "personal_device",
        "type": "object",
        "properties": {
            "manufacturer": {
                "$ref": "MonsciergeAPI.Models.PersonalDevice.PersonalDeviceManufacturerModel"
            },
            "name": {
                "description": "The name of the device.",
                "default": "iPhone 6",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The personal device model ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.TwilioSMS.Models.PhoneNumberQueryModel": {
        "type": "object",
        "properties": {
            "area_code": {
                "type": "string"
            },
            "beta": {
                "type": "boolean"
            },
            "contains": {
                "type": "string"
            },
            "distance": {
                "format": "int32",
                "type": "integer"
            },
            "exclude_all_address_required": {
                "type": "boolean"
            },
            "exclude_foreign_address_required": {
                "type": "boolean"
            },
            "exclude_local_address_required": {
                "type": "boolean"
            },
            "in_lata": {
                "type": "string"
            },
            "in_postal_code": {
                "type": "string"
            },
            "in_rate_center": {
                "type": "string"
            },
            "in_region": {
                "type": "string"
            },
            "mms_enabled": {
                "type": "boolean"
            },
            "near_lat_long": {
                "type": "string"
            },
            "near_number": {
                "type": "string"
            },
            "sms_enabled": {
                "type": "boolean"
            },
            "voice_enabled": {
                "type": "boolean"
            },
            "iso_country_code": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.TwilioSMS.Models.AvailablePhoneNumberModel": {
        "type": "object",
        "properties": {
            "friendly_name": {
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "lata": {
                "type": "string"
            },
            "rate_center": {
                "type": "string"
            },
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "region": {
                "type": "string"
            },
            "postal_code": {
                "type": "string"
            },
            "iso_country": {
                "type": "string"
            },
            "address_requirements": {
                "type": "string"
            },
            "beta": {
                "type": "boolean"
            },
            "capabilities": {
                "$ref": "Twilio.Capabilities"
            },
            "uri": {
                "type": "string"
            }
        }
    },
    "Twilio.Capabilities": {
        "type": "object",
        "properties": {
            "voice": {
                "type": "boolean"
            },
            "s_ms": {
                "type": "boolean"
            },
            "m_ms": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.TwilioSMS.Models.TwilioCountryModel": {
        "type": "object",
        "properties": {
            "iso": {
                "type": "string"
            },
            "country": {
                "type": "string"
            },
            "country_code": {
                "type": "string"
            },
            "number_type": {
                "type": "string"
            },
            "voice_enabled": {
                "type": "boolean"
            },
            "sms_enabled": {
                "type": "boolean"
            },
            "mms_enabled": {
                "type": "boolean"
            },
            "domestic_sms_only": {
                "type": "boolean"
            },
            "price_per_month": {
                "type": "string"
            },
            "inbound_voice_per_min": {
                "type": "string"
            },
            "inbound_sms_per_msg": {
                "type": "string"
            },
            "inbound_mms_per_msg": {
                "type": "string"
            },
            "beta": {
                "type": "boolean"
            },
            "requires_address": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.TwilioSMS.Models.IncomingPhoneNumberModel": {
        "type": "object",
        "properties": {
            "account_sid": {
                "type": "string"
            },
            "address_requirements": {
                "type": "string"
            },
            "api_version": {
                "type": "string"
            },
            "beta": {
                "type": "boolean"
            },
            "capabilities": {
                "$ref": "Twilio.Capabilities"
            },
            "date_created": {
                "format": "date-time",
                "type": "string"
            },
            "date_updated": {
                "format": "date-time",
                "type": "string"
            },
            "friendly_name": {
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "sid": {
                "type": "string"
            },
            "sms_application_sid": {
                "type": "string"
            },
            "sms_fallback_method": {
                "type": "string"
            },
            "sms_fallback_url": {
                "type": "string"
            },
            "sms_method": {
                "type": "string"
            },
            "sms_url": {
                "type": "string"
            },
            "status_callback": {
                "type": "string"
            },
            "status_callback_method": {
                "type": "string"
            },
            "voice_application_sid": {
                "type": "string"
            },
            "voice_caller_id_lookup": {
                "type": "boolean"
            },
            "voice_fallback_method": {
                "type": "string"
            },
            "voice_fallback_url": {
                "type": "string"
            },
            "voice_method": {
                "type": "string"
            },
            "voice_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.TwilioSMS.Models.PhoneNumberOptionsModel": {
        "type": "object",
        "properties": {
            "account_sid": {
                "type": "string"
            },
            "api_version": {
                "type": "string"
            },
            "area_code": {
                "type": "string"
            },
            "friendly_name": {
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "sms_application_sid": {
                "type": "string"
            },
            "sms_fallback_method": {
                "type": "string"
            },
            "sms_fallback_url": {
                "type": "string"
            },
            "sms_method": {
                "type": "string"
            },
            "sms_url": {
                "type": "string"
            },
            "status_callback": {
                "type": "string"
            },
            "status_callback_method": {
                "type": "string"
            },
            "trunk_sid": {
                "type": "string"
            },
            "voice_application_sid": {
                "type": "string"
            },
            "voice_caller_id_lookup": {
                "type": "boolean"
            },
            "voice_fallback_method": {
                "type": "string"
            },
            "voice_fallback_url": {
                "type": "string"
            },
            "voice_method": {
                "type": "string"
            },
            "voice_url": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Amenity.AmenityListModel": {
        "title": "amenity_list",
        "type": "object",
        "properties": {
            "is_category": {
                "type": "boolean"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "translated_name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "has_menus": {
                "type": "boolean"
            },
            "has_features": {
                "type": "boolean"
            },
            "ref_id": {
                "type": "string"
            },
            "mobile_active": {
                "type": "boolean"
            },
            "is_active": {
                "type": "boolean"
            },
            "tv_active": {
                "type": "boolean"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Amenity.AmenityCategoryModel": {
        "title": "amenity_category",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "is_active": {
                "type": "boolean"
            },
            "image_url": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.GeneralStatsModel": {
        "title": "general_stats",
        "type": "object",
        "properties": {
            "total_recommendations": {
                "format": "int32",
                "type": "integer"
            },
            "total_postcards": {
                "format": "int32",
                "type": "integer"
            },
            "check_ins_today": {
                "format": "int32",
                "type": "integer"
            },
            "turn_over_today": {
                "format": "int32",
                "type": "integer"
            },
            "guests_online": {
                "format": "int32",
                "type": "integer"
            },
            "apps_open": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.RequestStatsModel": {
        "title": "request_stats",
        "type": "object",
        "properties": {
            "requests_today": {
                "format": "int32",
                "type": "integer"
            },
            "average_request_time": {
                "type": "string"
            },
            "last24_hours_request_types": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestTypeInfoModel"
                }
            },
            "todays_hourly_request_counts": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Analytic.HourlyRequestCountModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestTypeInfoModel": {
        "title": "request_type_info",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "request_type_name": {
                "type": "string"
            },
            "count": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.HourlyRequestCountModel": {
        "title": "hourly_request_count",
        "type": "object",
        "properties": {
            "utc_milliseconds": {
                "format": "int64",
                "type": "integer"
            },
            "requests": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.ClickStatsModel": {
        "title": "click_stats",
        "type": "object",
        "properties": {
            "combined_click_counts": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Analytic.CombinedClickCountModel"
                }
            },
            "popular_content_click_counts": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Analytic.PopularContentClickModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.CombinedClickCountModel": {
        "title": "combined_click_count",
        "type": "object",
        "properties": {
            "utc_milliseconds": {
                "format": "int64",
                "type": "integer"
            },
            "lobby": {
                "format": "int32",
                "type": "integer"
            },
            "mobile": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.PopularContentClickModel": {
        "title": "popular_content_click",
        "type": "object",
        "properties": {
            "action_name": {
                "type": "string"
            },
            "clicks": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Beacon.BeaconModel": {
        "title": "beacon",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "major": {
                "format": "int32",
                "type": "integer"
            },
            "minor": {
                "format": "int32",
                "type": "integer"
            },
            "uuid": {
                "type": "string"
            },
            "campaign_name": {
                "type": "string"
            },
            "campaign_id": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The beacon ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Beacons.Models.BeaconCampaignBaseModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "hotel": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "default_message": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "created_by": {
                "format": "int32",
                "type": "integer"
            },
            "updated_by": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Beacons.Models.BeaconCampaignModel": {
        "type": "object",
        "properties": {
            "beacons": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Beacons.Models.BeaconClientModel"
                }
            },
            "slots": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Beacons.Models.BeaconCampaignSlotModel"
                }
            },
            "id": {
                "type": "string"
            },
            "hotel": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "default_message": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "created_by": {
                "format": "int32",
                "type": "integer"
            },
            "updated_by": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Beacons.Models.BeaconClientModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "uuid": {
                "type": "string"
            },
            "major": {
                "format": "int32",
                "type": "integer"
            },
            "minor": {
                "format": "int32",
                "type": "integer"
            },
            "description": {
                "type": "string"
            },
            "campaign_name": {
                "type": "string"
            },
            "campaign_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Beacons.Models.BeaconCampaignSlotModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "hotel": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "broadcast_type": {
                "format": "int32",
                "type": "integer"
            },
            "start_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "end_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "is_all_day": {
                "type": "boolean"
            },
            "created_by": {
                "format": "int32",
                "type": "integer"
            },
            "updated_by": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "recurrence_rules": {
                "type": "array",
                "items": {
                    "$ref": "System.Collections.Generic.KeyValuePair[System.String,System.String]"
                }
            },
            "actions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Beacons.Models.BeaconCampaignSlotActionModel"
                }
            }
        }
    },
    "System.Collections.Generic.KeyValuePair[System.String,System.String]": {
        "type": "object",
        "properties": {
            "key": {
                "type": "string",
                "readOnly": true
            },
            "value": {
                "type": "string",
                "readOnly": true
            }
        }
    },
    "MonsciergeIDK.Beacons.Models.BeaconCampaignSlotActionModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "trigger_type": {
                "format": "int32",
                "type": "integer"
            },
            "trigger_range": {
                "format": "int32",
                "type": "integer"
            },
            "trigger_time": {
                "format": "int32",
                "type": "integer"
            },
            "previous_beacon": {
                "format": "int32",
                "type": "integer"
            },
            "action_type": {
                "format": "int32",
                "type": "integer"
            },
            "action_delay": {
                "format": "int32",
                "type": "integer"
            },
            "action_reference": {
                "type": "string"
            },
            "message": {
                "type": "string"
            },
            "created_by": {
                "format": "int32",
                "type": "integer"
            },
            "updated_by": {
                "format": "int32",
                "type": "integer"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            },
            "updated_on": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Platform.Models.PlatformConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "platform_type": {
                "enum": [
                    "Web",
                    "Andriod",
                    "Ios",
                    "Lobby",
                    "Other",
                    "Tv"
                ],
                "type": "string"
            },
            "config": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18
                ],
                "type": "integer"
            },
            "option": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2
                ],
                "type": "integer"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.InsiderTips.InsiderTipModel": {
        "title": "insider_tip",
        "type": "object",
        "properties": {
            "created_ms": {
                "format": "int64",
                "description": "The time the tip was created on the request as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "text": {
                "type": "string"
            },
            "user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The tip ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.InsiderTips.InsiderTipUpdateModel": {
        "title": "insider_tip_update",
        "type": "object",
        "properties": {
            "tip_text": {
                "type": "string"
            },
            "tip_language": {
                "type": "string"
            },
            "tip_ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The tip ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventModel": {
        "title": "event",
        "type": "object",
        "properties": {
            "group_name": {
                "description": "The name of the group.",
                "default": "Company",
                "type": "string"
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventSectionModel"
                }
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "location_id": {
                "format": "int32",
                "type": "integer"
            },
            "end_ms": {
                "format": "int64",
                "description": "The time the event ends as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "place": {
                "description": "The location where the event will take place.",
                "default": "Big Conference Room",
                "type": "string"
            },
            "group": {
                "description": "The group that the event belongs to.",
                "default": "Sprint Planning",
                "type": "string"
            },
            "name": {
                "description": "The name of the event.",
                "default": "Sprint Planning Meeting",
                "type": "string"
            },
            "start_ms": {
                "format": "int64",
                "description": "The time the event starts as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The event ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventSectionModel": {
        "title": "event_section",
        "type": "object",
        "properties": {
            "attachments": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventAttachmentModel"
                }
            },
            "desc": {
                "description": "A description of the section.",
                "default": "This meeting shall allow us to coordinate the team resources for the sprint.",
                "type": "string"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the section.",
                "default": "Meetings",
                "type": "string"
            },
            "sponsorships": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventSponsorshipModel"
                }
            },
            "summary_visible": {
                "description": "Whether or not the summary is visible. <code>True</code> for visible, <code>false</code> if not.",
                "type": "boolean"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventAttachmentModel": {
        "title": "event_attachment",
        "type": "object",
        "properties": {
            "attachment_url": {
                "type": "string"
            },
            "name": {
                "description": "The name of the attachment.",
                "default": "Agenda",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventSponsorshipModel": {
        "title": "event_sponsorship",
        "type": "object",
        "properties": {
            "image_url": {
                "description": "The image filename to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "string"
            },
            "uri": {
                "$ref": "MonsciergeAPI.Models.Base.UriModel",
                "description": "The URL to the sponsorship.",
                "default": "http://monscierge.com"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventBaseModel": {
        "title": "event_base",
        "type": "object",
        "properties": {
            "end_ms": {
                "format": "int64",
                "description": "The time the event ends as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "place": {
                "description": "The location where the event will take place.",
                "default": "Big Conference Room",
                "type": "string"
            },
            "group": {
                "description": "The group that the event belongs to.",
                "default": "Sprint Planning",
                "type": "string"
            },
            "name": {
                "description": "The name of the event.",
                "default": "Sprint Planning Meeting",
                "type": "string"
            },
            "start_ms": {
                "format": "int64",
                "description": "The time the event starts as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The event ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventGroupModel": {
        "title": "event_group",
        "type": "object",
        "properties": {
            "events": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Event.EventBaseModel"
                }
            },
            "name": {
                "description": "The name of the group.",
                "default": "Company",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The event group ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Event.EventUrlModel": {
        "title": "event_url",
        "type": "object",
        "properties": {
            "group_name": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Map.MapModel": {
        "title": "map",
        "type": "object",
        "properties": {
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "type": {
                "description": "The type of map.",
                "enum": [
                    "Unknown",
                    "Bike",
                    "Bus",
                    "Hiking",
                    "Local",
                    "Subway",
                    "Train",
                    "Walking",
                    "Place",
                    "Running"
                ],
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "description": "The name of the map.",
                "default": "Hotel Map",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The map ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Map.MapBaseModel": {
        "title": "map_base",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "The map ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.CartModel": {
        "title": "cart",
        "type": "object",
        "properties": {
            "instructions": {
                "type": "string"
            },
            "items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.PointOfSale.CartItemModel"
                }
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.CartItemModel": {
        "title": "cart_item",
        "type": "object",
        "properties": {
            "instructions": {
                "type": "string"
            },
            "menu_item_id": {
                "format": "int32",
                "type": "integer"
            },
            "modifiers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.PointOfSale.CartItemModifierModel"
                }
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.CartItemModifierModel": {
        "title": "cart_item_modifier",
        "type": "object",
        "properties": {
            "menu_item_modifier_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_item_modifier_value_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.TotalModel": {
        "title": "total",
        "type": "object",
        "properties": {
            "check_header": {
                "$ref": "MonsciergeAPI.Models.PointOfSale.CheckModel"
            },
            "cc_auth_code": {
                "type": "string"
            },
            "message": {
                "type": "string"
            },
            "pms_message": {
                "type": "string"
            },
            "pms_status": {
                "format": "int32",
                "type": "integer"
            },
            "status": {
                "format": "int32",
                "type": "integer"
            },
            "workstation": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.CheckModel": {
        "title": "check",
        "type": "object",
        "properties": {
            "amount_due_total": {
                "format": "double",
                "type": "number"
            },
            "auto_fire_time": {
                "format": "date-time",
                "type": "string"
            },
            "auto_grat_total": {
                "format": "double",
                "type": "number"
            },
            "check_close_time": {
                "format": "date-time",
                "type": "string"
            },
            "check_id": {
                "type": "string"
            },
            "check_open_time": {
                "format": "date-time",
                "type": "string"
            },
            "check_status_bits": {
                "type": "string"
            },
            "detail_line_count": {
                "format": "int32",
                "type": "integer"
            },
            "employee_number": {
                "format": "int32",
                "type": "integer"
            },
            "guest_count": {
                "format": "int32",
                "type": "integer"
            },
            "guest_info": {
                "$ref": "MonsciergeAPI.Models.PointOfSale.UserModel"
            },
            "guid": {
                "type": "string"
            },
            "is_closed": {
                "type": "boolean"
            },
            "number": {
                "format": "int32",
                "type": "integer"
            },
            "other_total": {
                "format": "double",
                "type": "number"
            },
            "order_type": {
                "format": "int32",
                "type": "integer"
            },
            "payment_total": {
                "format": "double",
                "type": "number"
            },
            "sub_total": {
                "format": "double",
                "type": "number"
            },
            "table": {
                "format": "int32",
                "type": "integer"
            },
            "tax_total": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.UserModel": {
        "title": "user",
        "type": "object",
        "properties": {
            "address1": {
                "type": "string"
            },
            "address2": {
                "type": "string"
            },
            "address3": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "guest_info_guid": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "user_text1": {
                "type": "string"
            },
            "user_text2": {
                "type": "string"
            },
            "user_text3": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.PointOfSale.OrderModel": {
        "title": "order",
        "type": "object",
        "properties": {
            "pms_info": {
                "type": "string"
            },
            "position": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Message.Sms.SmsJobModel": {
        "title": "sms_job",
        "type": "object",
        "properties": {
            "callbacks": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Message.Sms.SmsJobCallbackModel"
                }
            },
            "tasks": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Message.Sms.SmsTaskModel"
                }
            },
            "status": {
                "description": "The current status of the job.",
                "enum": [
                    "INCOMPLETE",
                    "COMPLETE"
                ],
                "type": "string"
            },
            "notify_email": {
                "description": "The email to be notified.",
                "default": "johnny.appleseed@monscierge.com",
                "type": "string"
            },
            "name": {
                "description": "The name of the job.",
                "default": "Margarita Party",
                "type": "string"
            },
            "created_on_ms": {
                "format": "int64",
                "description": "The time when the job was created in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "created_by": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Message.Sms.SmsJobCallbackModel": {
        "title": "sms_job_callback",
        "type": "object",
        "properties": {
            "url": {
                "description": "A callback url to send a web hook notification event to.",
                "default": "http://example.com/request/callback",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Message.Sms.SmsTaskModel": {
        "title": "sms_task",
        "type": "object",
        "properties": {
            "recipient_number": {
                "description": "The phone number of the recipient.",
                "default": "+15558765309",
                "type": "string"
            },
            "status_message": {
                "description": "A message for the status of the task.",
                "default": "failed (21614): To number: +5558765309, is not a mobile number",
                "type": "string"
            },
            "last_updated_ms": {
                "format": "int64",
                "description": "The last time the task was updated in milliseconds.",
                "default": 1430490987417,
                "type": "integer"
            },
            "status": {
                "description": "The status of the job.",
                "enum": [
                    "SCHEDULED",
                    "SENDING",
                    "SENT",
                    "FAILED",
                    "SUCCEEDED",
                    "CANCELLED"
                ],
                "type": "string"
            },
            "scheduled_for_ms": {
                "format": "int64",
                "description": "The time message was scheduled to be sent in milliseconds.",
                "default": 1430490987417,
                "type": "integer"
            },
            "message_id": {
                "description": "The ID of the message sent.",
                "type": "string"
            },
            "message": {
                "description": "The body of the message sent.",
                "default": "Come visit our bar today for free margaritas! While supplies last, limit 5 per guest.",
                "type": "string"
            },
            "last_name": {
                "description": "The last name of the person.",
                "default": "Appleseed",
                "type": "string"
            },
            "sender_number": {
                "description": "The number that sent the message.",
                "default": "+15558765309",
                "type": "string"
            },
            "first_name": {
                "description": "The first name of the person.",
                "default": "Johnny",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Message.Sms.SmsStockMessageModel": {
        "title": "sms_stock_message",
        "type": "object",
        "properties": {
            "text": {
                "description": "The message body.",
                "default": "Welcome to Hyatt. We're glad you're here, let us know if you have any questions about your stay.",
                "type": "string"
            },
            "name": {
                "description": "The name of the message.",
                "default": "Welcome",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The Sms Stock Message ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Message.MessageModel": {
        "title": "message",
        "type": "object",
        "properties": {
            "body": {
                "description": "The body of the message formatted in Rich Text (RTF).",
                "default": "{\\rtf\\ansi\\ansicpg1252\\uc1\\deff0\\deflang1033{\\fonttbl{\\f0 Verdana;}}{\\colortbl\\red0\\green0\\blue0 ;\\red255\\green255\\blue255 ;}{\\*\\defchp\\ltrch\\fs24\\i0\\b0\\strike0\\ulnone}{\\*\\defpap\\fs24\\sl240\\slmult1}{\\stylesheet{\\*\\ts2\\tsrowd\\sqformat\\trbrdrt\\brdrs\\brdrw15\\brdrcf0\\trbrdrb\\brdrs\\brdrw15\\brdrcf0\\trbrdrl\\brdrs\\brdrw15\\brdrcf0\\trbrdrr\\brdrs\\brdrw15\\brdrcf0\\trbrdrh\\brdrs\\brdrw15\\brdrcf0\\trbrdrv\\brdrs\\brdrw15\\brdrcf0\\trgaph0\\clpadft3\\clpadt75\\clpadfr3\\clpadr75\\clpadfl3\\clpadl0\\clpadfb3\\clpadb0\\tsvertalt\\ltrch\\i0\\b0\\strike0\\ulnone\\fs24\\sl276\\slmult1\\sa180 TableNormal;}{\\*\\ts3\\tsrowd\\sqformat\\trbrdrt\\brdrs\\brdrw15\\brdrcf0\\trbrdrb\\brdrs\\brdrw15\\brdrcf0\\trbrdrl\\brdrs\\brdrw15\\brdrcf0\\trbrdrr\\brdrs\\brdrw15\\brdrcf0\\trbrdrh\\brdrs\\brdrw15\\brdrcf0\\trbrdrv\\brdrs\\brdrw15\\brdrcf0\\trgaph0\\clpadft3\\clpadt75\\clpadfr3\\clpadr75\\clpadfl3\\clpadl0\\clpadfb3\\clpadb0\\tsvertalt\\ltrch\\i0\\b0\\strike0\\ulnone\\fs24\\sl240\\slmult1 TableGrid;}}\\nouicompat\\viewkind4\\paperw12240\\paperh15840\\margl1425\\margr1425\\margt1425\\margb1425\\deftab720\\sectd\\pgwsxn12240\\pghsxn15840\\marglsxn1425\\margrsxn1425\\margtsxn1425\\margbsxn1425\\headery720\\footery720\\pard\\ltrpar\\fs24\\sl240\\slmult1{\\ltrch\\i0\\b0\\strike0\\ulnone Thank you for choosing to stay at our hotel. Please, let us know if we can assist you with anything. }\\par}",
                "type": "string"
            },
            "created_ms": {
                "format": "int64",
                "description": "The time the message was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "subject": {
                "description": "The subject of the message.",
                "default": "Welcome",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The message ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Enterprise.EnterpriseListResponseModel": {
        "title": "enterprise_list_response",
        "type": "object",
        "properties": {
            "enterprises": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Enterprise.EnterpriseListModel"
                }
            },
            "paging": {
                "$ref": "MonsciergeAPI.Models.Base.PagingResultsModel"
            }
        }
    },
    "MonsciergeAPI.Models.Enterprise.EnterpriseListModel": {
        "title": "enterprise_list",
        "type": "object",
        "properties": {
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "tip_count": {
                "format": "int32",
                "type": "integer"
            },
            "distance_from_property_km": {
                "format": "double",
                "type": "number"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "distance_from_property_mi": {
                "format": "double",
                "type": "number"
            },
            "is_black_listed": {
                "type": "boolean"
            },
            "is_recommended": {
                "type": "boolean"
            },
            "location_count": {
                "format": "int32",
                "type": "integer"
            },
            "dollar_range": {
                "format": "int32",
                "description": "The price range for items to purchase.",
                "type": "integer"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "enterprise_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the enterprise.",
                "default": "Starbucks",
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.ScheduleModel"
                }
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "tag_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "id": {
                "format": "int32",
                "description": "The enterprise ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.PagingResultsModel": {
        "title": "paging_results",
        "type": "object",
        "properties": {
            "page_count": {
                "format": "int32",
                "type": "integer"
            },
            "total_record_count": {
                "format": "int32",
                "type": "integer"
            },
            "page_number": {
                "format": "int32",
                "type": "integer"
            },
            "page_size": {
                "format": "int32",
                "type": "integer"
            },
            "previous_results": {
                "type": "string"
            },
            "next_results": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.AddressModel": {
        "title": "address",
        "type": "object",
        "properties": {
            "city": {
                "description": "The address city.",
                "default": "Oklahoma City",
                "type": "string"
            },
            "country": {
                "description": "The address country.",
                "default": "US",
                "type": "string"
            },
            "state": {
                "description": "The address state.",
                "default": "OK",
                "type": "string"
            },
            "street": {
                "description": "The address street.",
                "default": "1 North Broadway Ave.",
                "type": "string"
            },
            "street2": {
                "description": "The address street (continued).",
                "default": "Suite 123",
                "type": "string"
            },
            "postal": {
                "description": "The address postal code.",
                "default": "73102",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.GeocodeModel": {
        "title": "geocode",
        "type": "object",
        "properties": {
            "latitude": {
                "format": "double",
                "description": "The geographic coordinate point latitude.",
                "default": 35.467079162597649,
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "description": "The geographic coordinate point longitude.",
                "default": -97.515060424804688,
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceOverrideModel": {
        "title": "place_override",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "The place override ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Rating.RatingModel": {
        "title": "rating",
        "type": "object",
        "properties": {
            "created_ms": {
                "format": "int64",
                "description": "The time the rating was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "name": {
                "description": "The name of the rating.",
                "type": "string"
            },
            "review": {
                "description": "The body of the review.",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The rating ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Recommendations.RecommendedCategoryModel": {
        "type": "object",
        "properties": {
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "category_name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "is_active": {
                "type": "boolean"
            },
            "location_count": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Recommendations.Models.RecommendationCategoryDisplayModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "icon": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Models.Recommendations.RecommendedCategoryUpdateModel": {
        "type": "object",
        "properties": {
            "is_active": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeIDK.Recommendations.Models.RecommendationDisplayModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            }
        }
    },
    "MonsciergeAPI.Models.Enterprise.EnterpriseModel": {
        "title": "enterprise",
        "type": "object",
        "properties": {
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "bing_id": {
                "type": "string"
            },
            "is_child_friendly": {
                "type": "boolean"
            },
            "child_friendly_desc": {
                "type": "string"
            },
            "daily_specials_desc": {
                "type": "string"
            },
            "desc": {
                "type": "string"
            },
            "feedbacks": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Feedback.FeedbackModel"
                }
            },
            "google_place_id": {
                "type": "string"
            },
            "group_friendly_desc": {
                "type": "string"
            },
            "foursquare_venue_id": {
                "type": "string"
            },
            "happy_hour_desc": {
                "type": "string"
            },
            "has_daily_specials": {
                "type": "boolean"
            },
            "has_delivery": {
                "type": "boolean"
            },
            "has_happy_hour": {
                "type": "boolean"
            },
            "has_live_music": {
                "type": "boolean"
            },
            "has_sports_bar": {
                "type": "boolean"
            },
            "has_wifi": {
                "type": "boolean"
            },
            "is_local_favorite": {
                "type": "boolean"
            },
            "is_group_friendly": {
                "type": "boolean"
            },
            "has_outdoor_dining": {
                "type": "boolean"
            },
            "live_music_desc": {
                "type": "string"
            },
            "local_favorite_desc": {
                "type": "string"
            },
            "menus": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Menu.MenuBaseModel"
                }
            },
            "open_table_restaurant_id": {
                "format": "int32",
                "type": "integer"
            },
            "open_table_service": {
                "type": "string"
            },
            "outdoor_dining_desc": {
                "type": "string"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "phone_iso_country_code": {
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "schedule_desc": {
                "type": "string"
            },
            "smoking_allowed": {
                "type": "boolean"
            },
            "smoking_desc": {
                "type": "string"
            },
            "sports_bar_desc": {
                "type": "string"
            },
            "takes_reservations": {
                "type": "boolean"
            },
            "time_zone_id": {
                "type": "string"
            },
            "tips": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.InsiderTips.InsiderTipModel"
                }
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "wifi_desc": {
                "type": "string"
            },
            "dollar_range": {
                "format": "int32",
                "description": "The price range for items to purchase.",
                "type": "integer"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "enterprise_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the enterprise.",
                "default": "Starbucks",
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.ScheduleModel"
                }
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "tag_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "id": {
                "format": "int32",
                "description": "The enterprise ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Feedback.FeedbackModel": {
        "title": "feedback",
        "type": "object",
        "properties": {
            "feedback_text": {
                "type": "string"
            },
            "is_approved": {
                "type": "boolean"
            },
            "is_recommendation": {
                "type": "boolean"
            },
            "device_identifier": {
                "type": "string"
            },
            "user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The feedback ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.PhoneModel": {
        "title": "phone",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the phone.",
                "default": "Main",
                "type": "string"
            },
            "phone": {
                "description": "The number for the phone.",
                "default": "1-555-876-5309",
                "type": "string"
            },
            "primary": {
                "description": "Whether or not the phone is the primary one. <code>True</code> for primary, <code>false</code> if not.",
                "type": "boolean"
            },
            "sms": {
                "description": "Whether or not the phone is a mobile phone supporting SMS. <code>True</code> for SMS supported, <code>false</code> if not.",
                "type": "boolean"
            },
            "type": {
                "description": "The type of phone.",
                "enum": [
                    "Unknown",
                    "Cab",
                    "Concierge",
                    "Enterprise",
                    "Limo",
                    "Place",
                    "Shuttle",
                    "Valet",
                    "Reservation"
                ],
                "type": "string"
            },
            "verified": {
                "description": "Whether or not the phone has been verified. <code>True</code> for verified, <code>false</code> if not.",
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The user phone ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.EnterpriseRecommendationModel": {
        "type": "object",
        "properties": {
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.PlainTextEmailModel": {
        "title": "plain_text_email",
        "type": "object",
        "properties": {
            "plain_text_message": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceHackBaseModel": {
        "title": "place_hack_base",
        "type": "object",
        "properties": {
            "amenity": {
                "$ref": "MonsciergeAPI.Models.Amenity.AmenityBaseModel"
            },
            "enterprise": {
                "$ref": "MonsciergeAPI.Models.Enterprise.EnterpriseBaseModel"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceSearchBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Amenity.AmenityBaseModel": {
        "title": "amenity_base",
        "type": "object",
        "properties": {
            "has_menus": {
                "description": "Whether or not the amenity has menus. <code>True</code> for has menus, <code>false</code> if not.",
                "type": "boolean"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the amenity.",
                "default": "Pool",
                "type": "string"
            },
            "reservation_email": {
                "type": "string"
            },
            "reservation_phone": {
                "type": "string"
            },
            "allow_reservations": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The amenity ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Enterprise.EnterpriseBaseModel": {
        "title": "enterprise_base",
        "type": "object",
        "properties": {
            "dollar_range": {
                "format": "int32",
                "description": "The price range for items to purchase.",
                "type": "integer"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "enterprise_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_urls": {
                "description": "A list of image filenames to use with imaging data service to get an image url.",
                "default": "5E6B7584F6BCFFF7F36E1005A71466ECA8E7E701.png",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "description": "The name of the enterprise.",
                "default": "Starbucks",
                "type": "string"
            },
            "schedules": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.ScheduleModel"
                }
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "tag_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "id": {
                "format": "int32",
                "description": "The enterprise ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceSearchBaseModel": {
        "title": "place_search_base",
        "type": "object",
        "properties": {
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "description": {
                "type": "string"
            },
            "default_image": {
                "type": "string"
            },
            "background_image": {
                "type": "string"
            },
            "mobile_background_image": {
                "type": "string"
            },
            "name": {
                "description": "The name of the place.",
                "default": "Sheraton",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.RequestReportItemModel": {
        "title": "request_report_item",
        "type": "object",
        "properties": {
            "message": {
                "type": "string"
            },
            "created_time_ms": {
                "format": "int64",
                "description": "The time the request was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "closed_time_ms": {
                "format": "int64",
                "description": "The time the request was closed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "last_updated_time_ms": {
                "format": "int64",
                "type": "integer"
            },
            "duration": {
                "format": "double",
                "type": "number",
                "readOnly": true
            },
            "eta": {
                "format": "double",
                "type": "number",
                "readOnly": true
            },
            "template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
            },
            "category": {
                "$ref": "MonsciergeAPI.Models.Request.Category.RequestCategoryBaseModel"
            },
            "requester": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel",
                "readOnly": true
            },
            "room_number": {
                "type": "string"
            },
            "closed_by": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel",
                "readOnly": true
            },
            "assignees": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
                }
            },
            "assigned_group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request report item ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.RequestReportModel": {
        "title": "request_report",
        "type": "object",
        "properties": {
            "statuses": {
                "description": "Statuses to include",
                "type": "array",
                "items": {
                    "enum": [
                        "NEW",
                        "ACK",
                        "CLOSED",
                        "ARCHIVED",
                        "DELETED",
                        "PENDING_APPROVAL"
                    ],
                    "type": "string"
                }
            },
            "from_ms": {
                "format": "int64",
                "description": "From datetime in ms since Epoch",
                "type": "integer"
            },
            "to_ms": {
                "format": "int64",
                "description": "To datetime in ms since Epoch",
                "type": "integer"
            },
            "category_id": {
                "format": "int32",
                "description": "Id of Category",
                "type": "integer"
            },
            "template_id": {
                "format": "int32",
                "description": "Id of template",
                "type": "integer"
            },
            "assigned_group_id": {
                "format": "int32",
                "description": "Id of assigned group",
                "type": "integer"
            },
            "assigned_user_id": {
                "format": "int32",
                "description": "Id of assinged user",
                "type": "integer"
            },
            "close_by_user_id": {
                "format": "int32",
                "description": "Id of closed by user",
                "type": "integer"
            },
            "guest_name": {
                "description": "Name of guest",
                "type": "string"
            },
            "room_number": {
                "description": "Room number",
                "type": "string"
            },
            "search_text": {
                "description": "Addional search text",
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "description": "Ordinal of the favorite",
                "default": 0,
                "type": "integer"
            },
            "name": {
                "description": "Name of the favorite",
                "default": "Report Favorite",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The  ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.ReportBaseModel": {
        "title": "report_base",
        "type": "object",
        "properties": {
            "ordinal": {
                "format": "int32",
                "description": "Ordinal of the favorite",
                "default": 0,
                "type": "integer"
            },
            "name": {
                "description": "Name of the favorite",
                "default": "Report Favorite",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Category.RequestCategoryModel": {
        "title": "request_category",
        "type": "object",
        "properties": {
            "templates": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
                }
            },
            "name": {
                "description": "The name of the category.",
                "default": "Maintenance Issue",
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The request category ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Group.RequestGroupModel": {
        "title": "request_group",
        "type": "object",
        "properties": {
            "users": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupUserModel"
                }
            },
            "name": {
                "description": "The name of the group.",
                "default": "Housekeeping",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request group ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Group.RequestGroupUserModel": {
        "title": "request_group_user",
        "type": "object",
        "properties": {
            "notify": {
                "type": "boolean"
            },
            "manager": {
                "type": "boolean"
            },
            "display_name": {
                "description": "The user's display name.",
                "default": "JAppleseed1234",
                "type": "string"
            },
            "first_name": {
                "description": "The user's first name.",
                "default": "Johnny",
                "type": "string"
            },
            "last_name": {
                "description": "The user's last name.",
                "default": "Appleseed",
                "type": "string"
            },
            "image_url": {
                "description": "Url for the user's profile image",
                "default": "https://secure.gravatar.com/bg/1428/e9db3f026b7ce7748e58169cecb4980f",
                "type": "string"
            },
            "primary_email": {
                "description": "The user's primary email.",
                "default": "johnny.appleseed@monscierge.com",
                "type": "string"
            },
            "primary_phone_number": {
                "description": "The user's primary phone number.",
                "default": "(555) 555-5555",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The user ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.EtaAction.RequestTemplateEtaActionModel": {
        "title": "request_template_eta_action",
        "type": "object",
        "properties": {
            "new_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "from_eta_ms": {
                "format": "int64",
                "type": "integer"
            },
            "action": {
                "enum": [
                    "SetNewEta",
                    "NotifyGuest",
                    "NotifyStaff",
                    "AddUser",
                    "ChangeGroup",
                    "EmailStaff"
                ],
                "type": "string"
            },
            "new_eta_ms": {
                "format": "int64",
                "type": "integer"
            },
            "guest_message": {
                "type": "string"
            },
            "guest_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "email": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "resolved_email_subject": {
                "type": "string"
            },
            "email_message": {
                "type": "string"
            },
            "resolved_email_message": {
                "type": "string"
            },
            "staff_message": {
                "type": "string"
            },
            "staff_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The request eta action ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.Trigger.RequestTemplateTriggerModel": {
        "title": "request_template_trigger",
        "type": "object",
        "properties": {
            "trigger": {
                "enum": [
                    "Created",
                    "Validated",
                    "StatusChanged",
                    "EtaChanged",
                    "StaffSentMessage",
                    "GuestSentMessage",
                    "AssignedToGroup",
                    "UserAdded",
                    "UserRemoved",
                    "TemplateChanged"
                ],
                "type": "string"
            },
            "action": {
                "enum": [
                    "NotifyGuest",
                    "NotifyStaff",
                    "SendEmail",
                    "SentToPrinter"
                ],
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "old_status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "new_status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "printer_id": {
                "format": "int32",
                "type": "integer"
            },
            "old_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_request_type": {
                "format": "int32",
                "type": "integer"
            },
            "new_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "staff_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "staff_message": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "email_message": {
                "type": "string"
            },
            "guest_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "guest_message": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request trigger ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.GroupException.RequestTemplateGroupExceptionModel": {
        "title": "request_template_group_exception",
        "type": "object",
        "properties": {
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "end_time_ms": {
                "format": "double",
                "type": "number"
            },
            "start_time_ms": {
                "format": "double",
                "type": "number"
            },
            "id": {
                "format": "int32",
                "description": "The request group exception ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.StockResponse.RequestTemplateStockResponseModel": {
        "title": "request_template_stock_response",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the request template stock response.",
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "description": "Id of the request template.",
                "type": "integer"
            },
            "message": {
                "description": "The body of the response.",
                "type": "string"
            },
            "eta_s": {
                "format": "int32",
                "description": "The estimated time the request should be completed in seconds.",
                "default": 900,
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The request stock response ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.RequestTemplateCommonModel": {
        "title": "request_template_common",
        "type": "object",
        "properties": {
            "category": {
                "$ref": "MonsciergeAPI.Models.Request.Category.RequestCategoryBaseModel"
            },
            "staff": {
                "description": "Whether or not the template is for staff users only. <code>True</code> for staff only, <code>false</code> if not.",
                "type": "boolean"
            },
            "voice_number": {
                "type": "string"
            },
            "sms_numbers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestSMSNumber"
                }
            },
            "is_active": {
                "description": "Whether or not the template is active. <code>True</code> for active, <code>false</code> if not.",
                "type": "boolean"
            },
            "group_id": {
                "format": "int32",
                "description": "The group ID the template belongs to.",
                "default": 42,
                "type": "integer"
            },
            "name": {
                "description": "The name of the template.",
                "default": "General",
                "type": "string"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceBaseModel",
                "description": "The place the template belongs to."
            },
            "stock_responses": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.StockResponse.RequestTemplateStockResponseBaseModel"
                }
            },
            "image_url": {
                "description": "The image filename to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "string"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request template ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.MonsciergeSearch.Models.RequestTypeSearchResult": {
        "type": "object",
        "properties": {
            "results": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.Request.RequestTemplateSearchListModel"
                }
            },
            "count": {
                "format": "int32",
                "type": "integer"
            },
            "scroll_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Request.RequestTemplateSearchListModel": {
        "type": "object",
        "properties": {
            "request_type_refid": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "request_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "request_type_id": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_name": {
                "type": "string"
            },
            "hotel_ref_id": {
                "type": "string"
            },
            "request_type_name": {
                "type": "string"
            },
            "request_group_name": {
                "type": "string"
            },
            "request_group_refid": {
                "type": "string"
            },
            "score": {
                "format": "double",
                "type": "number"
            },
            "image_path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Requests.Models.RequestTemplateSearchResultModel": {
        "type": "object",
        "properties": {
            "count": {
                "format": "int64",
                "type": "integer"
            },
            "results": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Requests.Models.RequestTemplateSearchModel"
                }
            }
        }
    },
    "MonsciergeIDK.Requests.Models.RequestTemplateSearchModel": {
        "type": "object",
        "properties": {
            "template_id": {
                "format": "int64",
                "type": "integer"
            },
            "template_name": {
                "type": "string"
            },
            "place_id": {
                "format": "int64",
                "type": "integer"
            },
            "place_name": {
                "type": "string"
            },
            "group_id": {
                "format": "int64",
                "type": "integer"
            },
            "group_name": {
                "type": "string"
            },
            "image_path": {
                "type": "string"
            },
            "category_name": {
                "type": "string"
            },
            "category_id": {
                "format": "int64",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Template.ViewModels.RequestTemplateCategorySortingModel": {
        "title": "request_template_category_sorting",
        "type": "object",
        "properties": {
            "is_active": {
                "type": "boolean"
            },
            "is_category": {
                "type": "boolean"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "templates": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Template.ViewModels.RequestTemplateCategorySortingModel"
                },
                "readOnly": true
            }
        }
    },
    "MonsciergeIDK.Models.Request.RequestReorderModel": {
        "type": "object",
        "properties": {
            "is_template": {
                "type": "boolean"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.User.UserModel": {
        "title": "user",
        "type": "object",
        "properties": {
            "check_out_ms": {
                "format": "int64",
                "description": "The time when the user is checking out as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "account_id": {
                "format": "int32",
                "type": "integer"
            },
            "account_name": {
                "type": "string"
            },
            "emails": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.EmailModel"
                }
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "room": {
                "description": "The room number the user is checked into.",
                "default": "216",
                "type": "string"
            },
            "default_lang": {
                "description": "The user's default language selection.",
                "default": "en",
                "type": "string"
            },
            "single_place_id": {
                "format": "int32",
                "type": "integer"
            },
            "title": {
                "description": "The user's job title.",
                "default": "Developer",
                "type": "string"
            },
            "default_role": {
                "description": "The user's default role",
                "default": "Admin",
                "type": "string"
            },
            "display_name": {
                "description": "The user's display name.",
                "default": "JAppleseed1234",
                "type": "string"
            },
            "first_name": {
                "description": "The user's first name.",
                "default": "Johnny",
                "type": "string"
            },
            "last_name": {
                "description": "The user's last name.",
                "default": "Appleseed",
                "type": "string"
            },
            "image_url": {
                "description": "Url for the user's profile image",
                "default": "https://secure.gravatar.com/bg/1428/e9db3f026b7ce7748e58169cecb4980f",
                "type": "string"
            },
            "primary_email": {
                "description": "The user's primary email.",
                "default": "johnny.appleseed@monscierge.com",
                "type": "string"
            },
            "primary_phone_number": {
                "description": "The user's primary phone number.",
                "default": "(555) 555-5555",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The user ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.EmailModel": {
        "title": "email",
        "type": "object",
        "properties": {
            "address": {
                "description": "The email address.",
                "default": "johnny.appleseed@monscierge.com",
                "type": "string"
            },
            "primary": {
                "description": "Whether or not the email is the primary one. <code>True</code> for primary, <code>false</code> if not.",
                "type": "boolean"
            },
            "type": {
                "description": "The type of email.",
                "enum": [
                    "Unknown",
                    "Breakfasts2Go",
                    "Cab",
                    "Limo",
                    "RoomService",
                    "Shuttle",
                    "Valet"
                ],
                "type": "string"
            },
            "verified": {
                "description": "Whether or not the email has been verified. <code>True</code> for verified, <code>false</code> if not.",
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The user email ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Stay.StayChargeModel": {
        "type": "object",
        "properties": {
            "amount": {
                "format": "double",
                "type": "number"
            },
            "post_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "short_description": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "confirmation_number": {
                "type": "string"
            },
            "account": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Tags.Models.TagModel": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "account_id": {
                "format": "int32",
                "type": "integer"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceTagModel": {
        "title": "place_tag",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "The place tag ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Images.Models.ImageTagModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "tag": {
                "type": "string"
            },
            "tag_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuModelETL": {
        "type": "object",
        "properties": {
            "images": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "ref_id": {
                "type": "string"
            },
            "name": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "sections": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "fk_request_template": {
                "type": "string"
            },
            "fk_logo": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "welcome_message": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            }
        }
    },
    "MonsciergeIDK.DataTypes.LocalizableString": {
        "type": "object",
        "properties": {
            "is_dirty": {
                "type": "boolean"
            },
            "is_machine_translated": {
                "type": "boolean"
            },
            "language": {
                "type": "string"
            },
            "translate": {
                "type": "boolean"
            },
            "value": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuSectionModelETL": {
        "type": "object",
        "properties": {
            "description": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "ref_id": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuListItemModelETL"
                }
            },
            "sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuSectionModelETL"
                }
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuListItemModelETL": {
        "type": "object",
        "properties": {
            "description": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "images": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "nutrition": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuNutritionETL"
                }
            },
            "allergies": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "price": {
                "$ref": "MonsciergeIDK.Menus.Models.MenuPriceETL"
            },
            "modifiers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuModiferETL"
                }
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuNutritionETL": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string"
            },
            "value": {
                "format": "double",
                "type": "number"
            },
            "label": {
                "type": "string"
            },
            "daily_value": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuPriceETL": {
        "type": "object",
        "properties": {
            "value": {
                "format": "double",
                "type": "number"
            },
            "currency": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuModiferETL": {
        "type": "object",
        "properties": {
            "name": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "description": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "value": {
                "format": "double",
                "type": "number"
            },
            "currency": {
                "type": "string"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Menus.Models.MenuModifierOptionETL"
                }
            }
        }
    },
    "MonsciergeIDK.Menus.Models.MenuModifierOptionETL": {
        "type": "object",
        "properties": {
            "name": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "description": {
                "$ref": "MonsciergeIDK.DataTypes.LocalizableString"
            },
            "value": {
                "format": "double",
                "type": "number"
            },
            "currency": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Hotel.PropertyInfoModel": {
        "title": "property_info",
        "description": "Class PropertyInfoModel.",
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "brief_summary": {
                "type": "string"
            },
            "brand": {
                "$ref": "MonsciergeAPI.Models.Brand.BrandBaseModel"
            },
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "links": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "default_image": {
                "type": "string"
            },
            "background_image": {
                "type": "string"
            },
            "mobile_background_image": {
                "type": "string"
            },
            "check_in_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "check_out_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "wait_time": {
                "format": "double",
                "type": "number"
            },
            "time_zone_model": {
                "$ref": "MonsciergeAPI.Models.Place.TimeZoneModel"
            },
            "operating_hours": {
                "$ref": "System.Object"
            },
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.TimeZoneModel": {
        "title": "time_zone",
        "type": "object",
        "properties": {
            "raw_offset": {
                "format": "int32",
                "type": "integer"
            },
            "time_zone_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceHackModel": {
        "title": "place_hack",
        "type": "object",
        "properties": {
            "amenity": {
                "$ref": "MonsciergeAPI.Models.Amenity.AmenityModel"
            },
            "enterprise": {
                "$ref": "MonsciergeAPI.Models.Enterprise.EnterpriseModel"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceModel"
            },
            "geofence": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.Common.LatLng"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceModel": {
        "title": "place",
        "type": "object",
        "properties": {
            "account_id": {
                "format": "int32",
                "type": "integer"
            },
            "ad_hoc_events_sync_password": {
                "type": "string"
            },
            "ad_hoc_events_sync_place_id": {
                "type": "string"
            },
            "ad_hoc_events_sync_salt": {
                "type": "string"
            },
            "ad_hoc_events_sync_username": {
                "type": "string"
            },
            "airport_radius": {
                "format": "float",
                "type": "number"
            },
            "breakfast2_go_menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "default_lang": {
                "type": "string"
            },
            "desc": {
                "type": "string"
            },
            "desc_lang": {
                "type": "string"
            },
            "desc_translations": {
                "type": "string"
            },
            "dri_property_key": {
                "type": "string"
            },
            "emails": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.EmailModel"
                }
            },
            "enable_amenities": {
                "type": "boolean"
            },
            "enable_amenity_ads": {
                "type": "boolean"
            },
            "enable_amenity_categories": {
                "type": "boolean"
            },
            "enable_booking": {
                "type": "boolean"
            },
            "enable_breakfast2_go": {
                "type": "boolean"
            },
            "enable_call": {
                "type": "boolean"
            },
            "enable_call_concierge": {
                "type": "boolean"
            },
            "enable_directions": {
                "type": "boolean"
            },
            "enable_directory": {
                "type": "boolean"
            },
            "enable_events": {
                "type": "boolean"
            },
            "enable_events_legacy_editor": {
                "type": "boolean"
            },
            "enable_events_refresh": {
                "type": "boolean"
            },
            "enable_flight_ads": {
                "type": "boolean"
            },
            "enable_flights": {
                "type": "boolean"
            },
            "enable_header": {
                "type": "boolean"
            },
            "enable_home_ads": {
                "type": "boolean"
            },
            "enable_hot_sos": {
                "type": "boolean"
            },
            "enable_hot_sos_for_request_authentication": {
                "type": "boolean"
            },
            "enable_lobby": {
                "type": "boolean"
            },
            "enable_map_ads": {
                "type": "boolean"
            },
            "enable_maps": {
                "type": "boolean"
            },
            "enabled_menus": {
                "type": "boolean"
            },
            "enable_messages": {
                "type": "boolean"
            },
            "enable_micros": {
                "type": "boolean"
            },
            "enable_postcard_ads": {
                "type": "boolean"
            },
            "enable_postcards": {
                "type": "boolean"
            },
            "enable_recommendation_ads": {
                "type": "boolean"
            },
            "enable_recommendations": {
                "type": "boolean"
            },
            "enable_rewards": {
                "type": "boolean"
            },
            "enable_shuttle_tracker": {
                "type": "boolean"
            },
            "enable_sales_force_syncer": {
                "type": "boolean"
            },
            "enable_synergy_mms": {
                "type": "boolean"
            },
            "enable_transportation": {
                "type": "boolean"
            },
            "enable_valet": {
                "type": "boolean"
            },
            "enable_weather": {
                "type": "boolean"
            },
            "enable_weather_ads": {
                "type": "boolean"
            },
            "envision_facility_id": {
                "type": "string"
            },
            "envision_last_updated_ms": {
                "format": "int64",
                "type": "integer"
            },
            "events_refresh_timeout_m": {
                "format": "float",
                "type": "number"
            },
            "hot_sos_default_request_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "hot_sos_password": {
                "type": "string"
            },
            "hot_sos_salt": {
                "type": "string"
            },
            "hot_sos_username": {
                "type": "string"
            },
            "image_urls": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "import_file_name": {
                "type": "string"
            },
            "import_unique_id": {
                "type": "string"
            },
            "iso_country_code": {
                "type": "string"
            },
            "is_public": {
                "type": "boolean"
            },
            "is_setup": {
                "type": "boolean"
            },
            "jazz_location_code": {
                "type": "string"
            },
            "jazz_property_code": {
                "type": "string"
            },
            "master_event_access_code": {
                "type": "string"
            },
            "micros_password": {
                "type": "string"
            },
            "micros_salt": {
                "type": "string"
            },
            "primary_brand": {
                "$ref": "MonsciergeAPI.Models.Brand.BrandBaseModel"
            },
            "radius": {
                "format": "int32",
                "type": "integer"
            },
            "rewards_image_url": {
                "type": "string"
            },
            "room_key_code": {
                "type": "string"
            },
            "room_service_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "sales_force_id": {
                "format": "int32",
                "type": "integer"
            },
            "synergey_default_request_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "synergy_password": {
                "type": "string"
            },
            "synergy_property_id": {
                "format": "int32",
                "type": "integer"
            },
            "synergy_salt": {
                "type": "string"
            },
            "synergy_username": {
                "type": "string"
            },
            "theme_color1": {
                "format": "int32",
                "type": "integer"
            },
            "theme_color2": {
                "format": "int32",
                "type": "integer"
            },
            "welcome_sms_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "welcome_sms_message": {
                "type": "string"
            },
            "welcome_sms_message_translations": {
                "type": "string"
            },
            "airport": {
                "$ref": "MonsciergeAPI.Models.Flight.AirportBaseModel"
            },
            "cab_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "check_in_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "check_out_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "concierge_phone_replace": {
                "type": "boolean"
            },
            "last_modified_ms": {
                "format": "int64",
                "type": "integer"
            },
            "limo_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "postcard_hashtags": {
                "type": "string"
            },
            "requests_enabled": {
                "type": "boolean"
            },
            "shuttle_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "style_type": {
                "enum": [
                    "Default",
                    "ButtonStack",
                    "MetroGrid",
                    "CheckInOut"
                ],
                "type": "string"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "valet_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "description": {
                "type": "string"
            },
            "default_image": {
                "type": "string"
            },
            "background_image": {
                "type": "string"
            },
            "mobile_background_image": {
                "type": "string"
            },
            "name": {
                "description": "The name of the place.",
                "default": "Sheraton",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Common.LatLng": {
        "type": "object",
        "properties": {
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "reference": {
                "$ref": "MonsciergeIDK.Models.Common.LatLng"
            }
        }
    },
    "MonsciergeAPI.Models.Flight.AirportBaseModel": {
        "title": "airport_base",
        "type": "object",
        "properties": {
            "id": {
                "description": "The airport code ID.",
                "default": "OKC",
                "type": "string"
            },
            "name": {
                "description": "The name of the airport.",
                "default": "Will Rogers World Airport",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceUiConfigModel": {
        "title": "place_ui_config",
        "type": "object",
        "properties": {
            "amenities_visible": {
                "type": "boolean"
            },
            "cab_enabled": {
                "type": "boolean"
            },
            "concierge_phone_visible": {
                "type": "boolean"
            },
            "default_postcard_message": {
                "type": "string"
            },
            "directions_visible": {
                "type": "boolean"
            },
            "events_visible": {
                "type": "boolean"
            },
            "facebook_page_id": {
                "type": "string"
            },
            "flights_visible": {
                "type": "boolean"
            },
            "has_anon_request_templates": {
                "type": "boolean"
            },
            "has_request_templates": {
                "type": "boolean"
            },
            "layouts": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Place.PlaceLayoutModel"
                }
            },
            "limo_enabled": {
                "type": "boolean"
            },
            "maps_visible": {
                "type": "boolean"
            },
            "messages_visible": {
                "type": "boolean"
            },
            "menus_visible": {
                "type": "boolean"
            },
            "phones_visible": {
                "type": "boolean"
            },
            "postcards_email_subject": {
                "type": "string"
            },
            "postcards_visible": {
                "type": "boolean"
            },
            "recommendations_visible": {
                "type": "boolean"
            },
            "requests_visible": {
                "type": "boolean"
            },
            "shuttle_enabled": {
                "type": "boolean"
            },
            "time_zone_model": {
                "$ref": "MonsciergeAPI.Models.Place.TimeZoneModel"
            },
            "transportation_visible": {
                "type": "boolean"
            },
            "valet_visible": {
                "type": "boolean"
            },
            "weather_visible": {
                "type": "boolean"
            },
            "welcome_send_visible": {
                "type": "boolean"
            },
            "airport": {
                "$ref": "MonsciergeAPI.Models.Flight.AirportBaseModel"
            },
            "cab_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "check_in_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "check_out_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "concierge_phone_replace": {
                "type": "boolean"
            },
            "last_modified_ms": {
                "format": "int64",
                "type": "integer"
            },
            "limo_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "postcard_hashtags": {
                "type": "string"
            },
            "requests_enabled": {
                "type": "boolean"
            },
            "shuttle_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "style_type": {
                "enum": [
                    "Default",
                    "ButtonStack",
                    "MetroGrid",
                    "CheckInOut"
                ],
                "type": "string"
            },
            "uris": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.UriModel"
                }
            },
            "valet_request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "description": {
                "type": "string"
            },
            "default_image": {
                "type": "string"
            },
            "background_image": {
                "type": "string"
            },
            "mobile_background_image": {
                "type": "string"
            },
            "name": {
                "description": "The name of the place.",
                "default": "Sheraton",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceLayoutModel": {
        "title": "place_layout",
        "type": "object",
        "properties": {
            "amenity": {
                "$ref": "MonsciergeAPI.Models.Amenity.AmenityBaseModel"
            },
            "desc": {
                "type": "string"
            },
            "request_template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
            },
            "type": {
                "enum": [
                    "HotelInfo",
                    "Directions",
                    "Call",
                    "Reservations",
                    "Transportation",
                    "RoomService",
                    "Events",
                    "Menus",
                    "LocalMaps",
                    "Requests",
                    "Rewards",
                    "MyRequests",
                    "GetMyVehicle",
                    "LocalRecommendations",
                    "Flights",
                    "CheckIn",
                    "Weather",
                    "Postcards",
                    "Buggy",
                    "AddFeature",
                    "Url",
                    "More",
                    "Dining",
                    "CheckOut",
                    "Wayfinding",
                    "Explore",
                    "Email",
                    "Home",
                    "Messages",
                    "Profile",
                    "DoorLock",
                    "LiveStream",
                    "ConvenientCare"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceExplorerModel": {
        "title": "place_explorer",
        "type": "object",
        "properties": {
            "place_featured_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Place.PlaceFeaturedItemModel"
                }
            },
            "place_explorer_items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Place.PlaceExplorerItemModel"
                }
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceFeaturedItemModel": {
        "title": "place_featured_item",
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "Feature",
                    "Enterprise",
                    "LocalRecommendation",
                    "Event"
                ],
                "type": "string"
            },
            "image_path": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "level": {
                "enum": [
                    "Basic",
                    "Hero",
                    "SuperHero",
                    "Superman"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceExplorerItemModel": {
        "title": "place_explorer_item",
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "Features",
                    "Hyperlink",
                    "Events",
                    "Navigation",
                    "Valet",
                    "Recommendations",
                    "Flights",
                    "Weather",
                    "Maps",
                    "Postcards"
                ],
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "url": {
                "type": "string"
            },
            "image_path": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.Place.PlaceSearchModel": {
        "type": "object",
        "properties": {
            "hotel_count": {
                "format": "int32",
                "type": "integer"
            },
            "reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "parent_reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "reach_groups": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ReachGroup.ReachGroupBaseModel"
                }
            },
            "hotels": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.HotelSearchModel"
                }
            }
        }
    },
    "MonsciergeIDK.Models.ReachGroup.ReachGroupBaseModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "parent_reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "has_children": {
                "type": "boolean"
            },
            "has_multiple_hotels": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Models.HotelSearchModel": {
        "type": "object",
        "properties": {
            "brand_id": {
                "format": "int32",
                "type": "integer"
            },
            "country": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "images": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "type": "string"
            },
            "reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "state": {
                "type": "string"
            },
            "street_address": {
                "type": "string"
            },
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "phone": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "zip": {
                "type": "string"
            },
            "is_lite": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Models.Place.PlaceSearchWaitModel": {
        "type": "object",
        "properties": {
            "wait_time": {
                "format": "double",
                "type": "number"
            },
            "operating_hours": {
                "$ref": "System.Object"
            },
            "brand_id": {
                "format": "int32",
                "type": "integer"
            },
            "country": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "images": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "name": {
                "type": "string"
            },
            "reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "state": {
                "type": "string"
            },
            "street_address": {
                "type": "string"
            },
            "latitude": {
                "format": "double",
                "type": "number"
            },
            "longitude": {
                "format": "double",
                "type": "number"
            },
            "phone": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "zip": {
                "type": "string"
            },
            "is_lite": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeIDK.Models.HeroModel": {
        "type": "object",
        "properties": {
            "image_path": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "feature_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "feature_type": {
                "enum": [
                    "Feature",
                    "Enterprise",
                    "LocalRecommendation",
                    "Event"
                ],
                "type": "string"
            },
            "feature_level": {
                "enum": [
                    "Basic",
                    "Hero",
                    "SuperHero",
                    "Superman"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardCollectionModel": {
        "title": "postcard_collection",
        "type": "object",
        "properties": {
            "postcards": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Postcard.PostcardResourceModel"
                }
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.LinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardResourceModel": {
        "title": "postcard_resource",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "type": "integer"
            },
            "image_url": {
                "type": "string"
            },
            "order": {
                "format": "int32",
                "type": "integer"
            },
            "path": {
                "type": "string"
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.SelfLinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.SelfLinkModel": {
        "title": "self_link",
        "type": "object",
        "properties": {
            "self": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardCreateResourceModel": {
        "title": "postcard_create_resource",
        "required": [
            "place_id",
            "image_id"
        ],
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "maximum": 2147483647,
                "minimum": 0,
                "type": "integer"
            },
            "image_id": {
                "format": "int32",
                "maximum": 2147483647,
                "minimum": 0,
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardActionSendModel": {
        "title": "postcard_action_send",
        "type": "object",
        "properties": {
            "message": {
                "type": "string"
            },
            "culture": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardActionEmailModel": {
        "title": "postcard_action_email",
        "type": "object",
        "properties": {
            "message": {
                "type": "string"
            },
            "email_to": {
                "type": "string"
            },
            "email_from": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "culture": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Postcard.PostcardActionReorderModel": {
        "title": "postcard_action_reorder",
        "type": "object",
        "properties": {
            "ordered_postcard_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            }
        }
    },
    "MonsciergeAPI.Models.Promo.ExceptionModel": {
        "title": "exception",
        "type": "object",
        "properties": {
            "start_ms": {
                "format": "int64",
                "description": "The time the exception will start as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "end_ms": {
                "format": "int64",
                "description": "The time the exception will end as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "scene": {
                "$ref": "MonsciergeAPI.Models.Promo.SceneModel"
            },
            "id": {
                "format": "int32",
                "description": "The Exception ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.SceneModel": {
        "title": "scene",
        "type": "object",
        "properties": {
            "layout": {
                "$ref": "MonsciergeAPI.Models.Promo.PromoLayoutModel"
            },
            "scene_sections": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.SceneSectionModel"
                }
            },
            "permission_tags": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.PermissionTagModel"
                }
            },
            "name": {
                "description": "The name of the scene.",
                "type": "string"
            },
            "description": {
                "description": "A description of the scene.",
                "type": "string"
            },
            "orientation": {
                "enum": [
                    "Portrait",
                    "Landscape"
                ],
                "type": "string"
            },
            "usage": {
                "format": "int32",
                "description": "Number of devices configured to show the scene.",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The Scene ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.PromoLayoutModel": {
        "title": "promo_layout",
        "type": "object",
        "properties": {
            "orientation": {
                "enum": [
                    "Portrait",
                    "Landscape"
                ],
                "type": "string"
            },
            "name": {
                "description": "The name of the layout.",
                "type": "string"
            },
            "section_count": {
                "format": "int32",
                "description": "The total number of sections in the layout.",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The Layout ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.SceneSectionModel": {
        "title": "scene_section",
        "type": "object",
        "properties": {
            "ordinal": {
                "format": "int32",
                "description": "The position the section is at.",
                "type": "integer"
            },
            "transition_duration": {
                "format": "int32",
                "description": "The duration the transition should last in seconds.",
                "default": 15,
                "type": "integer"
            },
            "images": {
                "description": "The image filename to use with imaging data service to get an image url.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "id": {
                "format": "int32",
                "description": "The Scene Section ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.PermissionTagModel": {
        "title": "permission_tag",
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "description": "The ID of the tag.",
                "default": 42,
                "type": "integer"
            },
            "name": {
                "description": "The name of the permission.",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.CampaignModel": {
        "title": "campaign",
        "type": "object",
        "properties": {
            "scene": {
                "$ref": "MonsciergeAPI.Models.Promo.SceneModel"
            },
            "exceptions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.ExceptionModel"
                }
            },
            "welcome_message_background_image": {
                "description": "The background image filename to use with imaging data service to get an image url to show with the message to welcome a user.",
                "default": "84745BF75E3E90BCCBA3C41A4C2BE0FC226B40EE.jpg",
                "type": "string"
            },
            "welcome_message": {
                "description": "The message body to welcome a user.",
                "default": "Hello Derek",
                "type": "string"
            },
            "permission_tags": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.PermissionTagModel"
                }
            },
            "orientation": {
                "enum": [
                    "Portrait",
                    "Landscape"
                ],
                "type": "string"
            },
            "name": {
                "description": "The name of the campaign.",
                "type": "string"
            },
            "description": {
                "description": "A description of the campaign.",
                "type": "string"
            },
            "usage": {
                "format": "int32",
                "description": "Number of devices configured to show the campaign.",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The Campaign ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Place.PlaceBasePromoDisplayModel": {
        "title": "place_base_promo_display",
        "type": "object",
        "properties": {
            "displays": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.PromoDisplayBaseModel"
                }
            },
            "permission_tags": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Promo.PermissionTagModel"
                }
            },
            "address": {
                "$ref": "MonsciergeAPI.Models.Base.AddressModel"
            },
            "geocode": {
                "$ref": "MonsciergeAPI.Models.Base.GeocodeModel"
            },
            "phones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.PhoneModel"
                }
            },
            "description": {
                "type": "string"
            },
            "default_image": {
                "type": "string"
            },
            "background_image": {
                "type": "string"
            },
            "mobile_background_image": {
                "type": "string"
            },
            "name": {
                "description": "The name of the place.",
                "default": "Sheraton",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The place ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.PromoDisplayBaseModel": {
        "title": "promo_display_base",
        "type": "object",
        "properties": {
            "name": {
                "description": "The name of the display.",
                "type": "string"
            },
            "campaign_id": {
                "format": "int32",
                "description": "The campaign ID.",
                "default": 42,
                "type": "integer"
            },
            "status": {
                "description": "The status of the display",
                "default": "Online",
                "enum": [
                    "Online",
                    "Offline",
                    "Mixed"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The Promotional Display ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Promo.PromoDisplayModel": {
        "title": "promo_display",
        "type": "object",
        "properties": {
            "beacon_id": {
                "format": "int32",
                "default": 55,
                "type": "integer"
            },
            "campaign": {
                "$ref": "MonsciergeAPI.Models.Promo.CampaignModel"
            },
            "name": {
                "description": "The name of the display.",
                "type": "string"
            },
            "campaign_id": {
                "format": "int32",
                "description": "The campaign ID.",
                "default": 42,
                "type": "integer"
            },
            "status": {
                "description": "The status of the display",
                "default": "Online",
                "enum": [
                    "Online",
                    "Offline",
                    "Mixed"
                ],
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The Promotional Display ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.PMS.Proxce.Models.API.ProxceRegistration": {
        "type": "object",
        "properties": {
            "username": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "password_confirm": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "profile_id": {
                "type": "string"
            },
            "pim_token": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.PMS.Proxce.Models.API.ProxceConfirmStayBody": {
        "type": "object",
        "properties": {
            "confirmation_number": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Integrations.PMS.Proxce.Models.API.ProxceCreateReservationModel": {
        "type": "object",
        "properties": {
            "amenity_id": {
                "format": "int32",
                "type": "integer"
            },
            "date": {
                "format": "date-time",
                "type": "string"
            },
            "comments": {
                "type": "string"
            },
            "dietary_requirements": {
                "type": "string"
            },
            "party_size": {
                "format": "int32",
                "type": "integer"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "salutation": {
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "profile_id": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "date_string": {
                "type": "string"
            },
            "time_string": {
                "type": "string"
            },
            "pim_token": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Notifications.NotificationModel": {
        "title": "notification",
        "type": "object",
        "properties": {
            "job_type": {
                "type": "string"
            },
            "sub_type": {
                "type": "string"
            },
            "contact_user_name": {
                "type": "string"
            },
            "created_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "job_id": {
                "format": "int32",
                "type": "integer"
            },
            "message": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "status": {
                "type": "string"
            },
            "start_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "updated_date_time": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ReleaseNote.ReleaseNoteModel": {
        "title": "release_note",
        "type": "object",
        "properties": {
            "desc": {
                "description": "The description for the release.",
                "type": "string"
            },
            "release_ms": {
                "format": "int64",
                "description": "The time the release was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "items": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.ReleaseNote.ReleaseNoteItemModel"
                }
            },
            "short_desc": {
                "description": "The shortened description for the release.",
                "type": "string"
            },
            "short_title": {
                "description": "The shortened title of the release.",
                "type": "string"
            },
            "title": {
                "description": "The title of the release.",
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The release note ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ReleaseNote.ReleaseNoteItemModel": {
        "title": "release_note_item",
        "type": "object",
        "properties": {
            "text": {
                "type": "string"
            },
            "url": {
                "type": "string"
            },
            "item_type": {
                "format": "int32",
                "type": "integer"
            },
            "item_type_name": {
                "type": "string",
                "readOnly": true
            },
            "id": {
                "format": "int32",
                "description": "The release note item ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Requests.Models.MercyRequestModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "display_name": {
                "type": "string"
            },
            "origin": {
                "enum": [
                    "Online",
                    "Staff"
                ],
                "type": "string"
            },
            "status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "eta": {
                "format": "date-time",
                "type": "string"
            },
            "created_on": {
                "format": "date-time",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTRoomListModel": {
        "type": "object",
        "properties": {
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTDevice"
                }
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTDevice": {
        "type": "object",
        "properties": {
            "type": {
                "enum": [
                    "Curtain",
                    "Outlet",
                    "Switch",
                    "Thermostat"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTRoom": {
        "type": "object",
        "properties": {
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            },
            "devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTDevice"
                }
            },
            "curtain_devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTCurtainDevice"
                }
            },
            "outlet_devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTOutletDevice"
                }
            },
            "switch_devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTSwitchDevice"
                }
            },
            "thermostat_devices": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.IoT.Models.IoTThermostatDevice"
                }
            },
            "additional_info": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTSwitchDevice": {
        "type": "object",
        "properties": {
            "current": {
                "format": "double",
                "type": "number"
            },
            "kwh": {
                "format": "double",
                "type": "number"
            },
            "power": {
                "format": "double",
                "type": "number"
            },
            "power_factor": {
                "format": "double",
                "type": "number"
            },
            "power_state": {
                "enum": [
                    "On",
                    "Off"
                ],
                "type": "string"
            },
            "voltage": {
                "format": "double",
                "type": "number"
            },
            "type": {
                "enum": [
                    "Curtain",
                    "Outlet",
                    "Switch",
                    "Thermostat"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.IoT.Models.IoTThermostatDevice": {
        "type": "object",
        "properties": {
            "cool_set_point": {
                "format": "double",
                "type": "number"
            },
            "cool_set_point_max": {
                "format": "double",
                "type": "number"
            },
            "cool_set_point_min": {
                "format": "double",
                "type": "number"
            },
            "fan_speed": {
                "enum": [
                    "Auto",
                    "Low",
                    "Medium",
                    "High",
                    "Off"
                ],
                "type": "string"
            },
            "fan_speed_allowed": {
                "type": "array",
                "items": {
                    "enum": [
                        "Auto",
                        "Low",
                        "Medium",
                        "High",
                        "Off"
                    ],
                    "type": "string"
                }
            },
            "fan_speed_state": {
                "enum": [
                    "Auto",
                    "Low",
                    "Medium",
                    "High",
                    "Off"
                ],
                "type": "string"
            },
            "heat_set_point": {
                "format": "double",
                "type": "number"
            },
            "heat_set_point_max": {
                "format": "double",
                "type": "number"
            },
            "heat_set_point_min": {
                "format": "double",
                "type": "number"
            },
            "mode": {
                "enum": [
                    "Heat",
                    "Cool",
                    "Auto",
                    "Off"
                ],
                "type": "string"
            },
            "mode_allowed": {
                "type": "array",
                "items": {
                    "enum": [
                        "Heat",
                        "Cool",
                        "Auto",
                        "Off"
                    ],
                    "type": "string"
                }
            },
            "mode_state": {
                "enum": [
                    "Idle",
                    "CoolPreFan",
                    "Cool",
                    "CoolPostFan",
                    "CoolRefresh",
                    "HeatPreFan",
                    "Heat",
                    "HeatPostFan",
                    "HeatRefresh",
                    "Off"
                ],
                "type": "string"
            },
            "occupied": {
                "type": "boolean"
            },
            "temperature": {
                "format": "double",
                "type": "number"
            },
            "type": {
                "enum": [
                    "Curtain",
                    "Outlet",
                    "Switch",
                    "Thermostat"
                ],
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "ids": {
                "type": "object",
                "additionalProperties": {
                    "type": "string"
                }
            }
        }
    },
    "MonsciergeIDK.Integrations.Microservices.MonsciergeSalto.Models.MobileBinaryResponse": {
        "type": "object",
        "properties": {
            "response": {
                "enum": [
                    "CNMB",
                    "CCMB",
                    "CO",
                    "ES",
                    "NC",
                    "NF",
                    "OV",
                    "EP",
                    "EF",
                    "TD",
                    "ED",
                    "EA",
                    "OS",
                    "EO",
                    "EV",
                    "ER"
                ],
                "type": "string"
            },
            "phone_number": {
                "type": "string"
            },
            "binary_key": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Product.ProductModel": {
        "title": "product",
        "type": "object",
        "properties": {
            "dependent_products": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Product.ProductBaseModel"
                }
            },
            "product_name": {
                "type": "string"
            },
            "product_description": {
                "type": "string"
            },
            "display_name": {
                "type": "string"
            },
            "display_description": {
                "type": "string"
            },
            "requires_product_id": {
                "format": "int32",
                "type": "integer"
            },
            "has_quantity": {
                "type": "boolean"
            },
            "available_quantities": {
                "type": "string"
            },
            "price": {
                "format": "double",
                "type": "number"
            },
            "pricing_interval": {
                "type": "string"
            },
            "iso_currency_code": {
                "type": "string"
            },
            "is_recurring": {
                "type": "boolean"
            },
            "is_hardware": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The product ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Product.ProductBaseModel": {
        "title": "product_base",
        "type": "object",
        "properties": {
            "product_name": {
                "type": "string"
            },
            "product_description": {
                "type": "string"
            },
            "display_name": {
                "type": "string"
            },
            "display_description": {
                "type": "string"
            },
            "requires_product_id": {
                "format": "int32",
                "type": "integer"
            },
            "has_quantity": {
                "type": "boolean"
            },
            "available_quantities": {
                "type": "string"
            },
            "price": {
                "format": "double",
                "type": "number"
            },
            "pricing_interval": {
                "type": "string"
            },
            "iso_currency_code": {
                "type": "string"
            },
            "is_recurring": {
                "type": "boolean"
            },
            "is_hardware": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The product ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ServicePlan.ServicePlanBaseModel": {
        "title": "service_plan_base",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "display_name": {
                "type": "string"
            },
            "display_description": {
                "type": "string"
            },
            "plan_region": {
                "type": "string"
            },
            "monthly_fee": {
                "format": "double",
                "type": "number"
            },
            "iso_currency_code": {
                "type": "string"
            },
            "plan_level": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The service plan ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ServicePlan.ServicePlanModel": {
        "title": "service_plan",
        "type": "object",
        "properties": {
            "trial_period_days": {
                "format": "int32",
                "type": "integer"
            },
            "products": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Product.ProductModel"
                }
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "display_name": {
                "type": "string"
            },
            "display_description": {
                "type": "string"
            },
            "plan_region": {
                "type": "string"
            },
            "monthly_fee": {
                "format": "double",
                "type": "number"
            },
            "iso_currency_code": {
                "type": "string"
            },
            "plan_level": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The service plan ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.SubDeviceConfig.Models.SubDeviceConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "refid": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "admin_pin": {
                "type": "string"
            },
            "desired_software_version": {
                "type": "string"
            },
            "desired_software_last_updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "desired_config_version": {
                "format": "int32",
                "type": "integer"
            },
            "actual_software_version": {
                "type": "string"
            },
            "actual_software_version_last_updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "actual_config_version": {
                "format": "int32",
                "type": "integer"
            },
            "actual_config_last_updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "actual_shell_version": {
                "type": "string"
            },
            "desired_shell_version": {
                "type": "string"
            },
            "actual_shell_version_last_updated_on": {
                "format": "date-time",
                "type": "string"
            },
            "aim_id": {
                "format": "int32",
                "type": "integer"
            },
            "ad_id": {
                "format": "int32",
                "type": "integer"
            },
            "device_type": {
                "type": "string"
            },
            "known_offline": {
                "type": "boolean"
            },
            "event_locations": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.MeetingsAndEvents.Models.EventLocationModel"
                }
            }
        }
    },
    "MonsciergeIDK.MeetingsAndEvents.Models.EventLocationModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "refid": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "device_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "has_events": {
                "type": "boolean"
            },
            "is_stage": {
                "type": "boolean"
            },
            "images": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ImageModel"
                }
            }
        }
    },
    "MonsciergeIDK.Themes.Models.ThemeConfigModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "key": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3
                ],
                "type": "integer"
            },
            "value": {
                "type": "string"
            },
            "option": {
                "type": "string"
            },
            "application_type": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                "type": "integer"
            },
            "fk_hotel": {
                "format": "int32",
                "type": "integer"
            },
            "fk_hotel_brand": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.TimeZone.TimeZoneCollectionModel": {
        "title": "time_zone_collection",
        "type": "object",
        "properties": {
            "time_zones": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.TimeZone.TimeZoneResourceModel"
                }
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.LinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.TimeZone.TimeZoneResourceModel": {
        "title": "time_zone_resource",
        "type": "object",
        "properties": {
            "id": {
                "default": "Central Standard Time",
                "type": "string"
            },
            "display_name": {
                "default": "(UTC-06:00) Central Time (US & Canada)",
                "type": "string"
            },
            "standard_name": {
                "default": "Central Standard Time",
                "type": "string"
            },
            "daylight_name": {
                "default": "Central Daylight Time",
                "type": "string"
            },
            "base_utc_offset": {
                "default": "-06:00:00",
                "type": "string"
            },
            "supports_daylight_savings_time": {
                "default": true,
                "type": "boolean"
            },
            "links": {
                "$ref": "MonsciergeAPI.Models.LinkModel"
            }
        }
    },
    "MonsciergeAPI.Models.Analytic.ClickModel": {
        "title": "click",
        "type": "object",
        "properties": {
            "action": {
                "format": "int32",
                "type": "integer"
            },
            "amenity_id": {
                "format": "int32",
                "type": "integer"
            },
            "click_date_time": {
                "format": "date-time",
                "type": "string"
            },
            "desc": {
                "type": "string"
            },
            "enterprise_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_id": {
                "format": "int32",
                "type": "integer"
            },
            "menu_item_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "platform_type": {
                "format": "int32",
                "enum": [
                    0,
                    1,
                    2,
                    3
                ],
                "type": "integer"
            },
            "session_id": {
                "type": "string"
            },
            "view": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.User.UserCheckInModel": {
        "title": "user_check_in",
        "type": "object",
        "properties": {
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceBaseModel"
            },
            "user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "alias_first_name": {
                "type": "string"
            },
            "alias_last_name": {
                "type": "string"
            },
            "check_in_date": {
                "format": "date-time",
                "type": "string"
            },
            "check_out_date": {
                "format": "date-time",
                "type": "string"
            },
            "check_in_date_ms": {
                "format": "int64",
                "type": "integer"
            },
            "check_out_date_ms": {
                "format": "int64",
                "type": "integer"
            },
            "room_number": {
                "type": "string"
            },
            "status": {
                "enum": [
                    "Unknown",
                    "Pending",
                    "Verified",
                    "CheckedOut"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.User.FavoriteModel": {
        "title": "favorite",
        "type": "object",
        "properties": {
            "menu_item": {
                "$ref": "MonsciergeAPI.Models.Menu.Item.MenuItemBaseModel"
            },
            "place": {
                "$ref": "MonsciergeAPI.Models.Place.PlaceHackBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The favorite ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.User.PersonalDeviceModel": {
        "title": "personal_device",
        "type": "object",
        "properties": {
            "identifier": {
                "type": "string"
            },
            "device_id": {
                "type": "string"
            },
            "model": {
                "$ref": "MonsciergeAPI.Models.PersonalDevice.PersonalDeviceModelModel"
            },
            "validated": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "description": "The personal device ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ReachRole.ReachRoleModel": {
        "title": "reach_role",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "permissions": {
                "$ref": "MonsciergeAPI.Models.ReachRole.ReachRolePermissionsModel"
            },
            "id": {
                "format": "int32",
                "description": "The reach role ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.ReachRole.ReachRolePermissionsModel": {
        "title": "reach_role_permissions",
        "type": "object",
        "properties": {
            "can_invite_new_managers": {
                "type": "boolean"
            },
            "can_edit_logo": {
                "type": "boolean"
            },
            "can_edit_background": {
                "type": "boolean"
            },
            "can_edit_device_content": {
                "type": "boolean"
            },
            "can_change_device_name": {
                "type": "boolean"
            },
            "can_change_device_grouping": {
                "type": "boolean"
            },
            "can_view_analytics": {
                "type": "boolean"
            },
            "can_edit_orbs": {
                "type": "boolean"
            },
            "can_view_all_ads": {
                "type": "boolean"
            },
            "can_manage_sub_devices": {
                "type": "boolean"
            },
            "can_view_all_groups": {
                "type": "boolean"
            },
            "can_set_ad_jump_to_state": {
                "type": "boolean"
            },
            "can_edit_mobile_preview": {
                "type": "boolean"
            },
            "can_edit_configuration": {
                "type": "boolean"
            },
            "merchant_is_visible": {
                "type": "boolean"
            },
            "can_manage_hotel_brands": {
                "type": "boolean"
            },
            "can_manage_assigned_events": {
                "type": "boolean"
            },
            "can_manage_assigned_campaigns": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.User.UserPlaceModel": {
        "title": "user_place",
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "roles": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "last_active_ms": {
                "format": "int64",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "description": "The {0} ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.LastKnown.LastKnownRequestModel": {
        "title": "last_known_request",
        "type": "object",
        "properties": {
            "request": {
                "$ref": "MonsciergeAPI.Models.Request.RequestModel"
            },
            "last_known_request_action_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestModel": {
        "title": "request",
        "type": "object",
        "properties": {
            "actions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Action.RequestActionModel"
                }
            },
            "values": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestOptionValueModel"
                }
            },
            "created_ms": {
                "format": "int64",
                "description": "The time the request was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "eta_ms": {
                "format": "int64",
                "description": "The ETA the request should be completed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "following": {
                "description": "Whether or not the user is following the request. <code>True</code> for following, <code>false</code> if not.",
                "type": "boolean"
            },
            "latest_action_ms": {
                "format": "int64",
                "description": "The time the last action was created on the request as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "requester_user": {
                "$ref": "MonsciergeAPI.Models.User.UserModel"
            },
            "status": {
                "description": "The status of the request.",
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
            },
            "unread": {
                "description": "Whether or not the request is unread. <code>True</code> for unread, <code>false</code> if not.",
                "type": "boolean"
            },
            "visible": {
                "description": "Whether or not the request is visible. <code>True</code> for visible, <code>false</code> if not.",
                "type": "boolean"
            },
            "room_number": {
                "description": "The room number for the request",
                "type": "string"
            },
            "can_send_message": {
                "type": "boolean"
            },
            "requested_for": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Action.RequestActionModel": {
        "title": "request_action",
        "type": "object",
        "properties": {
            "added_follower": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "created_ms": {
                "format": "int64",
                "description": "The time the request action was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "eta_ms": {
                "format": "int64",
                "description": "The estimated time the request should be completed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "message": {
                "description": "The message body for the action.",
                "default": "I would really appreciate some new towels.\r\nI seem to have lost the others...",
                "type": "string"
            },
            "message_private": {
                "description": "Whether or not the message is private. <code>True</code> for private, <code>false</code> if not.",
                "type": "boolean"
            },
            "old_eta_ms": {
                "format": "int64",
                "description": "The previous estimated time the request action should be completed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "old_group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "old_relation": {
                "enum": [
                    "Reciprocal",
                    "ParentOf",
                    "ChildOf"
                ],
                "type": "string"
            },
            "old_status": {
                "description": "The previous status for the request.",
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "related_request_id": {
                "format": "int32",
                "type": "integer"
            },
            "relation": {
                "enum": [
                    "Reciprocal",
                    "ParentOf",
                    "ChildOf"
                ],
                "type": "string"
            },
            "is_staff": {
                "type": "boolean"
            },
            "removed_follower": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "request_id": {
                "format": "int32",
                "description": "The request ID the action belongs to.",
                "type": "integer"
            },
            "status": {
                "description": "The current status of the request.",
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "user": {
                "$ref": "MonsciergeAPI.Models.User.UserBaseModel"
            },
            "id": {
                "format": "int32",
                "description": "The request action ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Request.Action.RequestActionCommonModel": {
        "title": "request_action_common",
        "type": "object",
        "properties": {
            "actions": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.Action.RequestActionModel"
                }
            },
            "additional_info": {
                "type": "string"
            },
            "created_date": {
                "format": "int64",
                "type": "integer"
            },
            "group_name": {
                "type": "string"
            },
            "last_known_action_id": {
                "format": "int32",
                "type": "integer"
            },
            "options": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestOptionValueModel"
                }
            },
            "request_status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "request_template_name": {
                "type": "string"
            },
            "visible": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.Request.RequestCommonModel": {
        "title": "request_common",
        "type": "object",
        "properties": {
            "values": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Request.RequestOptionValueModel"
                }
            },
            "created_ms": {
                "format": "int64",
                "description": "The time the request was created as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "eta_ms": {
                "format": "int64",
                "description": "The ETA the request should be completed as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "group": {
                "$ref": "MonsciergeAPI.Models.Request.Group.RequestGroupBaseModel"
            },
            "following": {
                "description": "Whether or not the user is following the request. <code>True</code> for following, <code>false</code> if not.",
                "type": "boolean"
            },
            "latest_action_ms": {
                "format": "int64",
                "description": "The time the last action was created on the request as a unix timestamp in milliseconds.",
                "default": 1432717500000,
                "type": "integer"
            },
            "requester_user": {
                "$ref": "MonsciergeAPI.Models.User.UserModel"
            },
            "status": {
                "description": "The status of the request.",
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "template": {
                "$ref": "MonsciergeAPI.Models.Request.Template.RequestTemplateBaseModel"
            },
            "unread": {
                "description": "Whether or not the request is unread. <code>True</code> for unread, <code>false</code> if not.",
                "type": "boolean"
            },
            "visible": {
                "description": "Whether or not the request is visible. <code>True</code> for visible, <code>false</code> if not.",
                "type": "boolean"
            },
            "room_number": {
                "description": "The room number for the request",
                "type": "string"
            },
            "can_send_message": {
                "type": "boolean"
            },
            "requested_for": {
                "type": "string"
            },
            "id": {
                "format": "int32",
                "description": "The request ID.",
                "default": 42,
                "type": "integer"
            },
            "r_efid": {
                "default": "7267E21B-E9EE-40E9-98A3-80DC7F05CFCB",
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.Base.CountModel": {
        "title": "count",
        "type": "object",
        "properties": {
            "count": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Models.Place.PlaceStatusModel": {
        "type": "object",
        "properties": {
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "room_number": {
                "type": "string"
            },
            "verified": {
                "type": "boolean"
            },
            "checkin_ms": {
                "format": "int64",
                "type": "integer",
                "readOnly": true
            },
            "checkout_ms": {
                "format": "int64",
                "type": "integer",
                "readOnly": true
            },
            "phone": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Integrations.Base.Models.Password.NewPasswordModel": {
        "type": "object",
        "properties": {
            "old_password": {
                "type": "string"
            },
            "new_password": {
                "type": "string"
            },
            "validations": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "MonsciergeIDK.Integrations.Base.Models.Common.AdditionalInfoModel"
                }
            }
        }
    },
    "MonsciergeIDK.Models.ReachGroup.ReachGroupModel": {
        "type": "object",
        "properties": {
            "parent_id": {
                "format": "int32",
                "type": "integer"
            },
            "role_name": {
                "type": "string"
            },
            "children": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.ReachGroup.ReachGroupModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "image_path": {
                "type": "string"
            },
            "label": {
                "type": "string"
            },
            "parent_reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "has_children": {
                "type": "boolean"
            },
            "has_multiple_hotels": {
                "type": "boolean"
            },
            "ordinal": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.ReachGroup.ReachUserGroupMapModel": {
        "title": "reach_user_group_map",
        "type": "object",
        "properties": {
            "reach_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "reach_group": {
                "type": "string"
            },
            "reach_role_id": {
                "format": "int32",
                "type": "integer"
            },
            "reach_role": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.Models.User.UserReachGroupModel": {
        "type": "object",
        "properties": {
            "total_count": {
                "format": "int32",
                "type": "integer"
            },
            "user_name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "reach_group_role": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.Models.User.ReachGroupAndRoleModel"
                }
            },
            "device_ids": {
                "type": "array",
                "items": {
                    "format": "int32",
                    "type": "integer"
                }
            },
            "contact_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "user_id": {
                "format": "int32",
                "type": "integer"
            },
            "children_count": {
                "format": "int32",
                "type": "integer"
            },
            "last_active_time": {
                "format": "int64",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.Models.User.ReachGroupAndRoleModel": {
        "type": "object",
        "properties": {
            "reach_group": {
                "type": "string"
            },
            "reach_role": {
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestCategoryResourceModel": {
        "title": "request_category_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestTemplateResourceListModel": {
        "title": "request_template_resource_list",
        "type": "object",
        "properties": {
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "localized_description": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestEtaActionResourceModel": {
        "title": "request_eta_action_resource",
        "type": "object",
        "properties": {
            "action": {
                "enum": [
                    "SetNewEta",
                    "NotifyGuest",
                    "NotifyStaff",
                    "AddUser",
                    "ChangeGroup",
                    "EmailStaff"
                ],
                "type": "string"
            },
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "from_eta_ms": {
                "format": "int64",
                "type": "integer"
            },
            "new_eta_ms": {
                "format": "int64",
                "type": "integer"
            },
            "guest_message": {
                "type": "string"
            },
            "guest_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "email": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "resolved_email_subject": {
                "type": "string"
            },
            "email_message": {
                "type": "string"
            },
            "resolved_email_message": {
                "type": "string"
            },
            "staff_message": {
                "type": "string"
            },
            "staff_message_user_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestGroupExceptionResourceModel": {
        "title": "request_group_exception_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "end_time_ms": {
                "format": "double",
                "type": "number"
            },
            "start_time_ms": {
                "format": "double",
                "type": "number"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestOptionChoiceResourceModel": {
        "title": "request_option_choice_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "option_id": {
                "format": "int32",
                "type": "integer"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "type": "string"
            },
            "type": {
                "enum": [
                    "Default"
                ],
                "type": "string"
            },
            "value": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestOptionResourceModel": {
        "title": "request_option_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "default": {
                "type": "string"
            },
            "max": {
                "type": "string"
            },
            "min": {
                "type": "string"
            },
            "required": {
                "type": "boolean"
            },
            "watermark": {
                "type": "string"
            },
            "localized_watermark": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "field_type": {
                "enum": [
                    "Unknown",
                    "Number",
                    "DateTime",
                    "Text",
                    "Message",
                    "Boolean",
                    "Picklist"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestStockResponseResourceModel": {
        "title": "request_stock_response_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "message": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "eta": {
                "format": "int32",
                "type": "integer"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "user_for_accept": {
                "type": "boolean"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestTriggerResourceModel": {
        "title": "request_trigger_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "template_id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "old_status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "new_status": {
                "enum": [
                    "NEW",
                    "ACK",
                    "CLOSED",
                    "ARCHIVED",
                    "DELETED",
                    "PENDING_APPROVAL"
                ],
                "type": "string"
            },
            "printer_id": {
                "format": "int32",
                "type": "integer"
            },
            "old_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "new_request_type": {
                "format": "int32",
                "type": "integer"
            },
            "new_group_id": {
                "format": "int32",
                "type": "integer"
            },
            "staff_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "staff_message": {
                "type": "string"
            },
            "email_subject": {
                "type": "string"
            },
            "email_message": {
                "type": "string"
            },
            "guest_message_user_id": {
                "format": "int32",
                "type": "integer"
            },
            "guest_message": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "trigger": {
                "enum": [
                    "Created",
                    "Validated",
                    "StatusChanged",
                    "EtaChanged",
                    "StaffSentMessage",
                    "GuestSentMessage",
                    "AssignedToGroup",
                    "UserAdded",
                    "UserRemoved",
                    "TemplateChanged"
                ],
                "type": "string"
            },
            "action": {
                "enum": [
                    "NotifyGuest",
                    "NotifyStaff",
                    "SendEmail",
                    "SentToPrinter"
                ],
                "type": "string"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestTemplateResourceModel": {
        "title": "request_template_resource",
        "type": "object",
        "properties": {
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "eta": {
                "format": "int32",
                "type": "integer"
            },
            "validation": {
                "type": "boolean"
            },
            "ref_id": {
                "type": "string"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "category": {
                "$ref": "MonsciergeIDK.RequestTemplates.Models.RequestCategoryModel"
            },
            "sms_numbers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.SmsNumbers.Models.SmsNumberModel"
                }
            },
            "url": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "place": {
                "type": "string"
            },
            "is_staff": {
                "type": "boolean"
            },
            "voice_number": {
                "type": "string"
            },
            "is_deleted": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "localized_description": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.RequestTemplates.Models.RequestCategoryModel": {
        "type": "object",
        "properties": {
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeIDK.SmsNumbers.Models.SmsNumberModel": {
        "type": "object",
        "properties": {
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "phone_number": {
                "type": "string"
            },
            "request_template_id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            }
        }
    },
    "MonsciergeIDK.RequestTemplates.Models.RequestTemplateModel": {
        "type": "object",
        "properties": {
            "group_id": {
                "format": "int32",
                "type": "integer"
            },
            "eta": {
                "format": "int32",
                "type": "integer"
            },
            "validation": {
                "type": "boolean"
            },
            "ref_id": {
                "type": "string"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "category": {
                "$ref": "MonsciergeIDK.RequestTemplates.Models.RequestCategoryModel"
            },
            "sms_numbers": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeIDK.SmsNumbers.Models.SmsNumberModel"
                }
            },
            "url": {
                "type": "string"
            },
            "hotel_id": {
                "format": "int32",
                "type": "integer"
            },
            "place": {
                "type": "string"
            },
            "is_staff": {
                "type": "boolean"
            },
            "voice_number": {
                "type": "string"
            },
            "is_deleted": {
                "type": "boolean"
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "localized_description": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    },
    "MonsciergeAPI.Models.RequestTemplates.RequestTemplateSortingResourceModel": {
        "title": "request_template_sorting_resource",
        "type": "object",
        "properties": {
            "image_path": {
                "type": "string"
            },
            "is_category": {
                "type": "boolean"
            },
            "translated_name": {
                "type": "string"
            },
            "translated_description": {
                "type": "string"
            },
            "category_id": {
                "format": "int32",
                "type": "integer"
            },
            "urls": {
                "type": "array",
                "items": {
                    "$ref": "MonsciergeAPI.Models.Base.BaseUriModel"
                }
            },
            "id": {
                "format": "int32",
                "type": "integer"
            },
            "ref_id": {
                "type": "string"
            },
            "place_id": {
                "format": "int32",
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "localized_name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "localized_description": {
                "type": "string"
            },
            "is_active": {
                "type": "boolean"
            },
            "image": {
                "$ref": "MonsciergeIDK.Models.ImageListModel"
            },
            "template_type": {
                "enum": [
                    "Default",
                    "Private",
                    "Public",
                    "Staff",
                    "Feedback"
                ],
                "type": "string"
            },
            "ordinal": {
                "format": "int32",
                "type": "integer"
            }
        }
    }
};

exports.models = models;