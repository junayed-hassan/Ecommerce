{
    "total": 78,
    "message": "Success",
    "description": "Success",
    "data": {
        "status": "completed",
        "progress": 100,
        "filters": {
            "price_range": {
                "title": "Price Range",
                "min": 257.7,
                "max": 1105.6,
                "currency": "USD",
                "type": "range"
            },
            "commission_range": {
                "title": "Commission Range",
                "min": 46.74,
                "max": 59.15,
                "currency": "USD",
                "type": "range"
            },
            "stops": {
                "title": "Stops",
                "value": [
                    {
                        "name": "Direct",
                        "value": 0
                    },
                    {
                        "name": "1 Stop",
                        "value": 1
                    }
                ],
                "type": "checkbox"
            },
            "baggage": {
                "title": "Baggage",
                "value": [
                    {
                        "name": "No Baggage",
                        "value": 0
                    },
                    {
                        "name": "1 PC",
                        "value": 1
                    },
                    {
                        "name": "2 PC",
                        "value": 2
                    },
                    {
                        "name": "15 KG",
                        "value": 15
                    },
                    {
                        "name": "20 KG",
                        "value": 20
                    },
                    {
                        "name": "25 KG",
                        "value": 25
                    },
                    {
                        "name": "30 KG",
                        "value": 30
                    }
                ],
                "type": "checkbox"
            },
            "airlines": {
                "title": "Airlines",
                "value": [
                    {
                        "code": "EK",
                        "name": "Emirates",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/EK.png",
                        "number": 30
                    },
                    {
                        "code": "QR",
                        "name": "Qatar Airways",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/QR.png",
                        "number": 20
                    },
                    {
                        "code": "MS",
                        "name": "Egyptair",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/MS.png",
                        "number": 9
                    },
                    {
                        "code": "IA",
                        "name": "Iraqi Airways",
                        "logo": "https://mateen-core-prod.nbg1.your-objectstorage.com/airlines/uQjqrCW312rxp1kIQfwlSF0m9DvsrAjrOQMAoUHw.png",
                        "number": 6
                    },
                    {
                        "code": "RJ",
                        "name": "Royal Jordanian",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png",
                        "number": 6
                    },
                    {
                        "code": "VF",
                        "name": "Ajet",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/VF.png",
                        "number": 2
                    },
                    {
                        "code": "TK",
                        "name": "Turkish Airlines",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/TK.png",
                        "number": 1
                    },
                    {
                        "code": "PC",
                        "name": "Pegasus Airlines",
                        "logo": "https://www.gstatic.com/flights/airline_logos/70px/PC.png",
                        "number": 1
                    }
                ],
                "type": "checkbox"
            },
            "departure_time": {
                "title": "Departure Time",
                "value": [
                    {
                        "name": "Morning",
                        "from": "00:00",
                        "to": "06:00",
                        "value": "morning"
                    },
                    {
                        "name": "Afternoon",
                        "from": "06:00",
                        "to": "12:00",
                        "value": "afternoon"
                    },
                    {
                        "name": "Evening",
                        "from": "12:00",
                        "to": "18:00",
                        "value": "evening"
                    },
                    {
                        "name": "Night",
                        "from": "18:00",
                        "to": "00:00",
                        "value": "night"
                    }
                ],
                "type": "checkbox"
            },
            "arrival_time": {
                "title": "Arrival Time",
                "value": [
                    {
                        "name": "Morning",
                        "from": "00:00",
                        "to": "06:00",
                        "value": "morning"
                    },
                    {
                        "name": "Afternoon",
                        "from": "06:00",
                        "to": "12:00",
                        "value": "afternoon"
                    },
                    {
                        "name": "Evening",
                        "from": "12:00",
                        "to": "18:00",
                        "value": "evening"
                    },
                    {
                        "name": "Night",
                        "from": "18:00",
                        "to": "00:00",
                        "value": "night"
                    }
                ],
                "type": "checkbox"
            },
            "flight_duration": {
                "title": "Flight Duration",
                "min": 165,
                "max": 450,
                "type": "checkbox"
            },
            "transiting_time": {
                "title": "Transiting Time",
                "min": 45,
                "max": 1390,
                "type": "checkbox"
            },
            "outbound_airports": {
                "title": "Outbound Airports",
                "out_departure_airport": {
                    "title": "Departure Airport",
                    "value": [
                        {
                            "name": "Baghdad International Airport",
                            "code": "BGW",
                            "number": 75
                        }
                    ],
                    "type": "checkbox"
                },
                "out_arrival_airport": {
                    "title": "Arrival Airport",
                    "value": [
                        {
                            "name": "Istanbul Airport",
                            "code": "IST",
                            "number": 61
                        },
                        {
                            "name": "Istanbul Sabiha Gökçen International Airport",
                            "code": "SAW",
                            "number": 14
                        }
                    ],
                    "type": "checkbox"
                }
            },
            "inbound_airports": {
                "title": "Inbound Airports",
                "in_departure_airport": {
                    "title": "Departure Airport",
                    "value": [
                        {
                            "name": "Istanbul Airport",
                            "code": "IST",
                            "number": 50
                        },
                        {
                            "name": "Istanbul Sabiha Gökçen International Airport",
                            "code": "SAW",
                            "number": 25
                        }
                    ],
                    "type": "checkbox"
                },
                "in_arrival_airport": {
                    "title": "Arrival Airport",
                    "value": [
                        {
                            "name": "Baghdad International Airport",
                            "code": "BGW",
                            "number": 75
                        }
                    ],
                    "type": "checkbox"
                }
            }
        },
        "sorts": {
            "price": {
                "title": "Price",
                "Value": [
                    {
                        "name": "Total Lowest to Highest",
                        "value": "t_asc"
                    },
                    {
                        "name": "Total Highest to Lowest",
                        "value": "t_desc"
                    },
                    {
                        "name": "Base Lowest to Highest",
                        "value": "b_asc"
                    },
                    {
                        "name": "Base Highest to Lowest",
                        "value": "b_desc"
                    },
                    {
                        "name": "Tax Lowest to Highest",
                        "value": "x_asc"
                    },
                    {
                        "name": "Tax Highest to Lowest",
                        "value": "x_desc"
                    }
                ]
            },
            "commission": {
                "title": "Commission",
                "Value": [
                    {
                        "name": "Lowest to Highest",
                        "value": "asc"
                    },
                    {
                        "name": "Highest to Lowest",
                        "value": "desc"
                    }
                ]
            },
            "departure_time": {
                "title": "Departure Time",
                "Value": [
                    {
                        "name": "Earliest to Latest",
                        "value": "asc"
                    },
                    {
                        "name": "Latest to Earliest",
                        "value": "desc"
                    }
                ]
            },
            "arrival_time": {
                "title": "Arrival Time",
                "Value": [
                    {
                        "name": "Earliest to Latest",
                        "value": "asc"
                    },
                    {
                        "name": "Latest to Earliest",
                        "value": "desc"
                    }
                ]
            },
            "flight_duration": {
                "title": "Flight Duration",
                "Value": [
                    {
                        "name": "Shortest to Longest",
                        "value": "asc"
                    },
                    {
                        "name": "Longest to Shortest",
                        "value": "desc"
                    }
                ]
            },
            "transiting_time": {
                "title": "Transiting Time",
                "Value": [
                    {
                        "name": "Shortest to Longest",
                        "value": "asc"
                    },
                    {
                        "name": "Longest to Shortest",
                        "value": "desc"
                    }
                ]
            }
        },
        "search_flight": [
            {
                "trace_id": "Tiw3tVCIDpE3rvCg",
                "search_id": "f30ed479-f4b9-4967-978b-d409eb49091f",
                "result_id": "8fab0251-d470-4651-b2e1-01ded95348fc",
                "universal_key": null,
                "direct_issue": true,
                "is_fast": false,
                "is_best": false,
                "has_baggage": false,
                "supply_provider": "3",
                "group_id_key": "00000000-0000-0000-0000-000000000000",
                "result_type": 1,
                "search_type": "",
                "keys": null,
                "price": {
                    "total": 436,
                    "base": 205,
                    "taxes": 231,
                    "currency": "USD"
                },
                "commission": {
                    "type": "Excluded",
                    "amount": 0,
                    "currency": "USD",
                    "ref": 27,
                    "ref_value": ""
                },
                "service_charge": [
                    0
                ],
                "plating_carrier": {
                    "code": "RJ",
                    "name": "Royal Jordanian",
                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                },
                "class": {
                    "service": "Economy",
                    "booking": "Q",
                    "seats_available": 9,
                    "fare_basis": ""
                },
                "price_solution_key": "arpEbUVAuDKAJX1n0uAAAA==",
                "directions": [
                    {
                        "from": {
                            "code": "BGW",
                            "name": "Baghdad International Airport",
                            "is_main": false,
                            "city_code": "",
                            "city_name": "Baghdad",
                            "country_name": "Iraq",
                            "longitude": "44.23285",
                            "latitude": "33.2585",
                            "utc": "+03:00",
                            "timezone": "Asia/Baghdad",
                            "type": "airport"
                        },
                        "to": {
                            "code": "IST",
                            "name": "Istanbul Airport",
                            "is_main": false,
                            "city_code": "IST",
                            "city_name": "Istanbul",
                            "country_name": "Turkey",
                            "longitude": "28.74113893066408",
                            "latitude": "41.275873982430916",
                            "utc": "+03:00",
                            "timezone": "Europe/Istanbul",
                            "type": "airport"
                        },
                        "plating_carrier": {
                            "code": "RJ",
                            "name": "Royal Jordanian",
                            "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                        },
                        "departure": {
                            "formated_time": "2025-03-09 20:35:00",
                            "timestamp": 1741541700,
                            "original": "2025-03-09T20:35:00.000+03:00"
                        },
                        "arrival": {
                            "formated_time": "2025-03-10 13:05:00",
                            "timestamp": 1741601100,
                            "original": "2025-03-10T13:05:00.000+03:00"
                        },
                        "duration": 270,
                        "stops": 1,
                        "flying_time": {
                            "amount": 270,
                            "type": "m"
                        },
                        "transiting_time": [
                            {
                                "amount": 720,
                                "type": "m"
                            }
                        ],
                        "distance": {
                            "amount": 1247,
                            "type": "km"
                        },
                        "price_key": "arpEbUVAuDKAJX1n0uAAAA==",
                        "has_baggage": true,
                        "connections": [
                            0,
                            2
                        ],
                        "commission_key": "",
                        "commission_value_key": -1,
                        "segments_keys": [
                            "arpEbUVAuDKAgW1n0uAAAA==",
                            "arpEbUVAuDKAjW1n0uAAAA=="
                        ],
                        "private_fare": true,
                        "segments": [
                            {
                                "from": {
                                    "code": "BGW",
                                    "name": "Baghdad International Airport",
                                    "is_main": false,
                                    "city_code": "",
                                    "city_name": "Baghdad",
                                    "country_name": "Iraq",
                                    "longitude": "44.23285",
                                    "latitude": "33.2585",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Baghdad",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "group": 0,
                                "connection": -1,
                                "departure": {
                                    "formated_time": "2025-03-09 20:35:00",
                                    "timestamp": 1741541700,
                                    "original": "2025-03-09T20:35:00.000+03:00"
                                },
                                "arrival": {
                                    "formated_time": "2025-03-09 22:25:00",
                                    "timestamp": 1741548300,
                                    "original": "2025-03-09T22:25:00.000+03:00"
                                },
                                "flight_time": "110",
                                "flight_number": "815",
                                "distance": "492",
                                "eTicketability": "Yes",
                                "equipment": "788",
                                "change_of_plane": false,
                                "participant_level": "Secure Sell",
                                "link_availability": "true",
                                "polled_availability_option": "Cached status used. Polled avail exists",
                                "optional_services_indicator": "false",
                                "availability_source": "P",
                                "availability_display_type": "Fare Shop/Optimal Shop",
                                "terminal": "",
                                "provider_code": "3",
                                "uapi_segment_ref": "arpEbUVAuDKAgW1n0uAAAA==",
                                "plane": "788",
                                "duration": 110,
                                "airline": {
                                    "code": "RJ",
                                    "name": "Royal Jordanian",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "code_share": null,
                                "class": {
                                    "service": "Economy",
                                    "booking": "Q",
                                    "seats_available": 9,
                                    "fare_basis": ""
                                },
                                "fare_info": [
                                    {
                                        "Key": "arpEbUVAuDKAVW1n0uAAAA==",
                                        "FareBasis": "QANEQ",
                                        "PassengerTypeCode": "ADT",
                                        "Origin": "BGW",
                                        "Destination": "IST",
                                        "EffectiveDate": "2025-03-06T02:17:00.000+03:00",
                                        "DepartureDate": "2025-03-09",
                                        "Amount": "USD103.00",
                                        "NegotiatedFare": "false",
                                        "NotValidBefore": "2025-03-09",
                                        "NotValidAfter": "2025-03-09",
                                        "BaggageAllowance": {
                                            "Text": "",
                                            "NumberOfPieces": "",
                                            "MaxWeight": ""
                                        },
                                        "FareRuleKey": {
                                            "Text": "gws-eJxNT8sSwiAM/JjO3sNL4Aa2HcU6zFCrTi/+/2cYaOuYQAgk7G5CCJKkIUUm/Fs331IBVnacL+97QoYAB6W1M1oBQs/1ToJb4jReURNuRY7D8lKeVJpLJJLEZry3J1JWk3Q/iIrANQEmQ372FU7yTo8FoopqkCtIOYsS81iwa/X8mtmPWPuIej94PjC4XmylalhzXnNTxlwNdiPFp0NN+QeOhMdAG2DTrnmZOO1FsmChX6gnQt8=",
                                            "FareInfoRef": "arpEbUVAuDKAVW1n0uAAAA==",
                                            "ProviderCode": "1G"
                                        },
                                        "Brand": {
                                            "Key": "",
                                            "BrandID": "",
                                            "Name": "",
                                            "BrandedDetailsAvailable": "",
                                            "Carrier": "",
                                            "Title": null,
                                            "Text": null,
                                            "ImageLocation": null
                                        }
                                    }
                                ],
                                "baggage": {
                                    "units": "",
                                    "amount": 0
                                }
                            },
                            {
                                "from": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "IST",
                                    "name": "Istanbul Airport",
                                    "is_main": false,
                                    "city_code": "IST",
                                    "city_name": "Istanbul",
                                    "country_name": "Turkey",
                                    "longitude": "28.74113893066408",
                                    "latitude": "41.275873982430916",
                                    "utc": "+03:00",
                                    "timezone": "Europe/Istanbul",
                                    "type": "airport"
                                },
                                "group": 0,
                                "connection": -1,
                                "departure": {
                                    "formated_time": "2025-03-10 10:25:00",
                                    "timestamp": 1741591500,
                                    "original": "2025-03-10T10:25:00.000+03:00"
                                },
                                "arrival": {
                                    "formated_time": "2025-03-10 13:05:00",
                                    "timestamp": 1741601100,
                                    "original": "2025-03-10T13:05:00.000+03:00"
                                },
                                "flight_time": "160",
                                "flight_number": "165",
                                "distance": "755",
                                "eTicketability": "Yes",
                                "equipment": "E75",
                                "change_of_plane": false,
                                "participant_level": "Secure Sell",
                                "link_availability": "true",
                                "polled_availability_option": "Cached status used. Polled avail exists",
                                "optional_services_indicator": "false",
                                "availability_source": "P",
                                "availability_display_type": "Fare Shop/Optimal Shop",
                                "terminal": "",
                                "provider_code": "3",
                                "uapi_segment_ref": "arpEbUVAuDKAjW1n0uAAAA==",
                                "plane": "E75",
                                "duration": 160,
                                "airline": {
                                    "code": "RJ",
                                    "name": "Royal Jordanian",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "code_share": null,
                                "class": {
                                    "service": "Economy",
                                    "booking": "Q",
                                    "seats_available": 9,
                                    "fare_basis": ""
                                },
                                "fare_info": [
                                    {
                                        "Key": "arpEbUVAuDKAVW1n0uAAAA==",
                                        "FareBasis": "QANEQ",
                                        "PassengerTypeCode": "ADT",
                                        "Origin": "BGW",
                                        "Destination": "IST",
                                        "EffectiveDate": "2025-03-06T02:17:00.000+03:00",
                                        "DepartureDate": "2025-03-09",
                                        "Amount": "USD103.00",
                                        "NegotiatedFare": "false",
                                        "NotValidBefore": "2025-03-09",
                                        "NotValidAfter": "2025-03-09",
                                        "BaggageAllowance": {
                                            "Text": "",
                                            "NumberOfPieces": "",
                                            "MaxWeight": ""
                                        },
                                        "FareRuleKey": {
                                            "Text": "gws-eJxNT8sSwiAM/JjO3sNL4Aa2HcU6zFCrTi/+/2cYaOuYQAgk7G5CCJKkIUUm/Fs331IBVnacL+97QoYAB6W1M1oBQs/1ToJb4jReURNuRY7D8lKeVJpLJJLEZry3J1JWk3Q/iIrANQEmQ372FU7yTo8FoopqkCtIOYsS81iwa/X8mtmPWPuIej94PjC4XmylalhzXnNTxlwNdiPFp0NN+QeOhMdAG2DTrnmZOO1FsmChX6gnQt8=",
                                            "FareInfoRef": "arpEbUVAuDKAVW1n0uAAAA==",
                                            "ProviderCode": "1G"
                                        },
                                        "Brand": {
                                            "Key": "",
                                            "BrandID": "",
                                            "Name": "",
                                            "BrandedDetailsAvailable": "",
                                            "Carrier": "",
                                            "Title": null,
                                            "Text": null,
                                            "ImageLocation": null
                                        }
                                    }
                                ],
                                "baggage": {
                                    "units": "",
                                    "amount": 0
                                }
                            }
                        ]
                    },
                    {
                        "from": {
                            "code": "IST",
                            "name": "Istanbul Airport",
                            "is_main": false,
                            "city_code": "IST",
                            "city_name": "Istanbul",
                            "country_name": "Turkey",
                            "longitude": "28.74113893066408",
                            "latitude": "41.275873982430916",
                            "utc": "+03:00",
                            "timezone": "Europe/Istanbul",
                            "type": "airport"
                        },
                        "to": {
                            "code": "BGW",
                            "name": "Baghdad International Airport",
                            "is_main": false,
                            "city_code": "",
                            "city_name": "Baghdad",
                            "country_name": "Iraq",
                            "longitude": "44.23285",
                            "latitude": "33.2585",
                            "utc": "+03:00",
                            "timezone": "Asia/Baghdad",
                            "type": "airport"
                        },
                        "plating_carrier": {
                            "code": "RJ",
                            "name": "Royal Jordanian",
                            "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                        },
                        "departure": {
                            "formated_time": "2025-03-13 20:55:00",
                            "timestamp": 1741888500,
                            "original": "2025-03-13T20:55:00.000+03:00"
                        },
                        "arrival": {
                            "formated_time": "2025-03-14 12:25:00",
                            "timestamp": 1741944300,
                            "original": "2025-03-14T12:25:00.000+03:00"
                        },
                        "duration": 240,
                        "stops": 1,
                        "flying_time": {
                            "amount": 240,
                            "type": "m"
                        },
                        "transiting_time": [
                            {
                                "amount": 690,
                                "type": "m"
                            }
                        ],
                        "distance": {
                            "amount": 1247,
                            "type": "km"
                        },
                        "price_key": "arpEbUVAuDKAJX1n0uAAAA==",
                        "has_baggage": true,
                        "connections": [
                            0,
                            2
                        ],
                        "commission_key": "",
                        "commission_value_key": -1,
                        "segments_keys": [
                            "arpEbUVAuDKAJW1n0uAAAA==",
                            "arpEbUVAuDKA7W1n0uAAAA=="
                        ],
                        "private_fare": true,
                        "segments": [
                            {
                                "from": {
                                    "code": "IST",
                                    "name": "Istanbul Airport",
                                    "is_main": false,
                                    "city_code": "IST",
                                    "city_name": "Istanbul",
                                    "country_name": "Turkey",
                                    "longitude": "28.74113893066408",
                                    "latitude": "41.275873982430916",
                                    "utc": "+03:00",
                                    "timezone": "Europe/Istanbul",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "group": 1,
                                "connection": -1,
                                "departure": {
                                    "formated_time": "2025-03-13 20:55:00",
                                    "timestamp": 1741888500,
                                    "original": "2025-03-13T20:55:00.000+03:00"
                                },
                                "arrival": {
                                    "formated_time": "2025-03-13 23:20:00",
                                    "timestamp": 1741897200,
                                    "original": "2025-03-13T23:20:00.000+03:00"
                                },
                                "flight_time": "145",
                                "flight_number": "168",
                                "distance": "755",
                                "eTicketability": "Yes",
                                "equipment": "290",
                                "change_of_plane": false,
                                "participant_level": "Secure Sell",
                                "link_availability": "true",
                                "polled_availability_option": "Cached status used. Polled avail exists",
                                "optional_services_indicator": "false",
                                "availability_source": "P",
                                "availability_display_type": "Fare Shop/Optimal Shop",
                                "terminal": "",
                                "provider_code": "3",
                                "uapi_segment_ref": "arpEbUVAuDKAJW1n0uAAAA==",
                                "plane": "290",
                                "duration": 145,
                                "airline": {
                                    "code": "RJ",
                                    "name": "Royal Jordanian",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "code_share": null,
                                "class": {
                                    "service": "Economy",
                                    "booking": "Q",
                                    "seats_available": 9,
                                    "fare_basis": ""
                                },
                                "fare_info": [
                                    {
                                        "Key": "arpEbUVAuDKAVW1n0uAAAA==",
                                        "FareBasis": "QANEQ",
                                        "PassengerTypeCode": "ADT",
                                        "Origin": "BGW",
                                        "Destination": "IST",
                                        "EffectiveDate": "2025-03-06T02:17:00.000+03:00",
                                        "DepartureDate": "2025-03-09",
                                        "Amount": "USD103.00",
                                        "NegotiatedFare": "false",
                                        "NotValidBefore": "2025-03-09",
                                        "NotValidAfter": "2025-03-09",
                                        "BaggageAllowance": {
                                            "Text": "",
                                            "NumberOfPieces": "",
                                            "MaxWeight": ""
                                        },
                                        "FareRuleKey": {
                                            "Text": "gws-eJxNT8sSwiAM/JjO3sNL4Aa2HcU6zFCrTi/+/2cYaOuYQAgk7G5CCJKkIUUm/Fs331IBVnacL+97QoYAB6W1M1oBQs/1ToJb4jReURNuRY7D8lKeVJpLJJLEZry3J1JWk3Q/iIrANQEmQ372FU7yTo8FoopqkCtIOYsS81iwa/X8mtmPWPuIej94PjC4XmylalhzXnNTxlwNdiPFp0NN+QeOhMdAG2DTrnmZOO1FsmChX6gnQt8=",
                                            "FareInfoRef": "arpEbUVAuDKAVW1n0uAAAA==",
                                            "ProviderCode": "1G"
                                        },
                                        "Brand": {
                                            "Key": "",
                                            "BrandID": "",
                                            "Name": "",
                                            "BrandedDetailsAvailable": "",
                                            "Carrier": "",
                                            "Title": null,
                                            "Text": null,
                                            "ImageLocation": null
                                        }
                                    }
                                ],
                                "baggage": {
                                    "units": "",
                                    "amount": 0
                                }
                            },
                            {
                                "from": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "BGW",
                                    "name": "Baghdad International Airport",
                                    "is_main": false,
                                    "city_code": "",
                                    "city_name": "Baghdad",
                                    "country_name": "Iraq",
                                    "longitude": "44.23285",
                                    "latitude": "33.2585",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Baghdad",
                                    "type": "airport"
                                },
                                "group": 1,
                                "connection": -1,
                                "departure": {
                                    "formated_time": "2025-03-14 10:50:00",
                                    "timestamp": 1741938600,
                                    "original": "2025-03-14T10:50:00.000+03:00"
                                },
                                "arrival": {
                                    "formated_time": "2025-03-14 12:25:00",
                                    "timestamp": 1741944300,
                                    "original": "2025-03-14T12:25:00.000+03:00"
                                },
                                "flight_time": "95",
                                "flight_number": "812",
                                "distance": "492",
                                "eTicketability": "Yes",
                                "equipment": "320",
                                "change_of_plane": false,
                                "participant_level": "Secure Sell",
                                "link_availability": "true",
                                "polled_availability_option": "Cached status used. Polled avail exists",
                                "optional_services_indicator": "false",
                                "availability_source": "P",
                                "availability_display_type": "Fare Shop/Optimal Shop",
                                "terminal": "",
                                "provider_code": "3",
                                "uapi_segment_ref": "arpEbUVAuDKA7W1n0uAAAA==",
                                "plane": "320",
                                "duration": 95,
                                "airline": {
                                    "code": "RJ",
                                    "name": "Royal Jordanian",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "code_share": null,
                                "class": {
                                    "service": "Economy",
                                    "booking": "Q",
                                    "seats_available": 9,
                                    "fare_basis": ""
                                },
                                "fare_info": [
                                    {
                                        "Key": "arpEbUVAuDKAVW1n0uAAAA==",
                                        "FareBasis": "QANEQ",
                                        "PassengerTypeCode": "ADT",
                                        "Origin": "BGW",
                                        "Destination": "IST",
                                        "EffectiveDate": "2025-03-06T02:17:00.000+03:00",
                                        "DepartureDate": "2025-03-09",
                                        "Amount": "USD103.00",
                                        "NegotiatedFare": "false",
                                        "NotValidBefore": "2025-03-09",
                                        "NotValidAfter": "2025-03-09",
                                        "BaggageAllowance": {
                                            "Text": "",
                                            "NumberOfPieces": "",
                                            "MaxWeight": ""
                                        },
                                        "FareRuleKey": {
                                            "Text": "gws-eJxNT8sSwiAM/JjO3sNL4Aa2HcU6zFCrTi/+/2cYaOuYQAgk7G5CCJKkIUUm/Fs331IBVnacL+97QoYAB6W1M1oBQs/1ToJb4jReURNuRY7D8lKeVJpLJJLEZry3J1JWk3Q/iIrANQEmQ372FU7yTo8FoopqkCtIOYsS81iwa/X8mtmPWPuIej94PjC4XmylalhzXnNTxlwNdiPFp0NN+QeOhMdAG2DTrnmZOO1FsmChX6gnQt8=",
                                            "FareInfoRef": "arpEbUVAuDKAVW1n0uAAAA==",
                                            "ProviderCode": "1G"
                                        },
                                        "Brand": {
                                            "Key": "",
                                            "BrandID": "",
                                            "Name": "",
                                            "BrandedDetailsAvailable": "",
                                            "Carrier": "",
                                            "Title": null,
                                            "Text": null,
                                            "ImageLocation": null
                                        }
                                    }
                                ],
                                "baggage": {
                                    "units": "",
                                    "amount": 0
                                }
                            }
                        ]
                    }
                ],
                "passengerFares": {
                    "ADT": {
                        "total": 436,
                        "base": 205,
                        "taxes": 231,
                        "currency": "USD"
                    },
                    "CHD": {
                        "total": 0,
                        "base": 0,
                        "taxes": 0,
                        "currency": "USD"
                    },
                    "INF": {
                        "total": 0,
                        "base": 0,
                        "taxes": 0,
                        "currency": "USD"
                    }
                },
                "passengerCounts": {
                    "ADT": 1,
                    "CHD": 0,
                    "INF": 0
                },
                "unique_key": "",
                "group": 0,
                "brand_fares": null,
                "brands_id": null,
                "baggage_allowance": [
                    {
                        "passenger_type": "ADT",
                        "passenger_friendly": "Adult 1",
                        "baggage_allowance": [
                            {
                                "traveler_type": "ADT",
                                "from": {
                                    "code": "BGW",
                                    "name": "Baghdad International Airport",
                                    "is_main": false,
                                    "city_code": "",
                                    "city_name": "Baghdad",
                                    "country_name": "Iraq",
                                    "longitude": "44.23285",
                                    "latitude": "33.2585",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Baghdad",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "airline": {
                                    "code": "RJ",
                                    "name": "RJ",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "url_info": "",
                                "text_info": null,
                                "bag_details": {
                                    "unit": "PC",
                                    "amount": 1,
                                    "details_baggage": null
                                }
                            },
                            {
                                "traveler_type": "ADT",
                                "from": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "IST",
                                    "name": "Istanbul Airport",
                                    "is_main": false,
                                    "city_code": "IST",
                                    "city_name": "Istanbul",
                                    "country_name": "Turkey",
                                    "longitude": "28.74113893066408",
                                    "latitude": "41.275873982430916",
                                    "utc": "+03:00",
                                    "timezone": "Europe/Istanbul",
                                    "type": "airport"
                                },
                                "airline": {
                                    "code": "RJ",
                                    "name": "RJ",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "url_info": "",
                                "text_info": null,
                                "bag_details": {
                                    "unit": "PC",
                                    "amount": 1,
                                    "details_baggage": null
                                }
                            },
                            {
                                "traveler_type": "ADT",
                                "from": {
                                    "code": "IST",
                                    "name": "Istanbul Airport",
                                    "is_main": false,
                                    "city_code": "IST",
                                    "city_name": "Istanbul",
                                    "country_name": "Turkey",
                                    "longitude": "28.74113893066408",
                                    "latitude": "41.275873982430916",
                                    "utc": "+03:00",
                                    "timezone": "Europe/Istanbul",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "airline": {
                                    "code": "RJ",
                                    "name": "RJ",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "url_info": "",
                                "text_info": null,
                                "bag_details": {
                                    "unit": "PC",
                                    "amount": 1,
                                    "details_baggage": null
                                }
                            },
                            {
                                "traveler_type": "ADT",
                                "from": {
                                    "code": "AMM",
                                    "name": "Amman International Airport",
                                    "is_main": false,
                                    "city_code": "AMM",
                                    "city_name": "Amman",
                                    "country_name": "Jordan",
                                    "longitude": "35.99321",
                                    "latitude": "31.72256",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Amman",
                                    "type": "airport"
                                },
                                "to": {
                                    "code": "BGW",
                                    "name": "Baghdad International Airport",
                                    "is_main": false,
                                    "city_code": "",
                                    "city_name": "Baghdad",
                                    "country_name": "Iraq",
                                    "longitude": "44.23285",
                                    "latitude": "33.2585",
                                    "utc": "+03:00",
                                    "timezone": "Asia/Baghdad",
                                    "type": "airport"
                                },
                                "airline": {
                                    "code": "RJ",
                                    "name": "RJ",
                                    "logo": "https://www.gstatic.com/flights/airline_logos/70px/RJ.png"
                                },
                                "url_info": "",
                                "text_info": null,
                                "bag_details": {
                                    "unit": "PC",
                                    "amount": 1,
                                    "details_baggage": null
                                }
                            }
                        ]
                    }
                ],
                "private_fare": true,
                "ref_key_id": "e1db7fcb-2e7b-45a2-b323-25d2fd7f1c1f"
            }
        ]
    }
}