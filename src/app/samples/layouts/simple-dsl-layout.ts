import { DslDescription } from '../../types/dsl.interface';

export const DSL: DslDescription[] = [
  {
    "apps": [
      {
        "id": "dtb.annualstamp",
        "name": "Jahresmarken",
        "standalone": true,
        "color": "#3A85D1",
        "iconHash": "264597b32dbed1f1a308d7bf878b585b85813b6c",
        "intents": [{
          "id": "dtb.annualstamp.OpenLinkAnnualstampSearch",
          "pagesToKeep": 0,
          "mode": "read",
          "type": "OVERLAY"
        }],
        "navigation": {
          "external": [{
            "intent": "smartdesign.base.OpenRecord",
            "form": "dtb.annualstamp.Record"
          }, {
            "intent": "dtb.annualstamp.OpenLinkAnnualstampSearch",
            "form": "dtb.annualstamp.LinkSearch"
          }],
          "internal": [{
            "intent": "smartdesign.base.ShowSearch",
            "form": "dtb.annualstamp.Search"
          }],
          "initialization": "smartdesign.base.ShowSearch"
        },
        "commands": [{
          "id": "dtb.annualstamp.linkToAnnualstamp",
          "isGroup": false,
          "label": "Jahresmarke",
          "style": "ICONCAPTION",
          "delegate": "smartdesign.base.linkTo",
          "hasCustomOverride": false,
          "parameters": {
            "targetType": "ANNUALSTAMP",
            "searchIntent": "dtb.annualstamp.OpenLinkAnnualstampSearch"
          }
        }],
        "types": [],
        "forms": [
          {
            "id": "dtb.annualstamp.LinkSearch",
            "context": [
              {
                "imported": false,
                "primary": true,
                "optional": false,
                "name": "searchMassdata",
                "type": "DataObjectMassData",
                "objectType": "smartdesign.base.ANNUALSTAMP"
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "lastUsedMD",
                "type": "LastUsedMassData",
                "objectType": "smartdesign.base.ANNUALSTAMP"
              }
            ],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "NONE",
              "title": "Titel",
              "actionFavorites": [],
              "viewFavorites": [],
              "actionDefaults": [{
                "command": "smartdesign.base.apply_link",
                "highlighted": true
              },
                {
                  "group": "smartdesign.base.newLinkedMenu",
                  "contributionPointId": "newLinkedMenu"
                }
              ],
              "viewActionDefaults": [{
                "command": "smartdesign.base.cancel"
              }]
            },
            "states": [
              {
              "mode": "read",
              "height": "CONTAINER",
              "width": "UNDEFINED",
              "padding": "DEFAULT",
              "content": {
                "type": "smartdesign.base.VerticalLayout",
                "name": "contentLayout",
                "children": [{
                  "type": "smartdesign.base.SearchField",
                  "name": "searchField",
                  "hideTargetViewerWhenEmpty": true,
                  "targetViewer": "searchResults",
                  "alignment": "NONE",
                  "widgetsToHide": ["recentlyUsed"]
                }, {
                  "type": "smartdesign.base.List",
                  "name": "searchResults",
                  "hideNoEntriesFoundCaption": false,
                  "minVisibleItems": 8,
                  "datasource": "searchMassdata"
                }, {
                  "type": "smartdesign.base.EmbeddedList",
                  "name": "recentlyUsed",
                  "caption": "Last opened",
                  "maxItemsShown": 7,
                  "extendedListEntryCaption": "Extended list",
                  "datasource": "lastUsedMD",
                  "extendedListEntryMode": "HIDE",
                  "emptyListMessage": "No data records exist",
                  "hideWhenEmpty": true,
                  "entryAction": {
                    "intent": "smartdesign.base.None"
                  }
                }],
                "ratio": [0, 1, 1]
              }
            }]
          },
          {
            "id": "dtb.annualstamp.Record",
            "context": [{
              "imported": true,
              "primary": true,
              "optional": false,
              "name": "do",
              "type": "DataObject",
              "objectType": "smartdesign.base.ANNUALSTAMP"
            }, {
              "imported": false,
              "primary": false,
              "optional": false,
              "name": "dossierMD",
              "type": "DossierMassData"
            }, {
              "imported": false,
              "primary": false,
              "optional": false,
              "name": "linkListAddress",
              "type": "LinkMassData",
              "linkAttributes": ["ANNUALST_CLUB"],
              "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
              "targetObjectType": "smartdesign.base.ADDRESS",
              "query": {}
            }, {
              "imported": false,
              "primary": false,
              "optional": false,
              "name": "linkListAddress2",
              "type": "LinkMassData",
              "linkAttributes": ["ANNUALST_GYMN"],
              "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
              "targetObjectType": "smartdesign.base.ADDRESS",
              "query": {}
            }, {
              "imported": false,
              "primary": false,
              "optional": false,
              "name": "linkListStartinglicence",
              "type": "LinkMassData",
              "linkAttributes": ["ANNUALST_LIC"],
              "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
              "targetObjectType": "smartdesign.base.STARTINGLICENCE",
              "query": {}
            }],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "ALL",
              "title": "Jahresmarke",
              "actions": [{
                "command": "smartdesign.base.appeal_for_rights_on_record",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "smartdesign.base.delete",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "group": "smartdesign.base.linkWithMenu",
                "contributionPointId": "linkWithMenu",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.annualstamp.linkToAnnualstamp",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.competition.linkToCompetition",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.discipline.linkToDiscipline",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.offeneposten.linkToOffeneposten",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.sepamandat.linkToSepamandat",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "dtb.startinglicence.linkToStartinglicence",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "smartdesign.address.linkToContact",
                "parentContributionPointId": "linkWithMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "group": "smartdesign.base.linkWithNewMenu",
                "contributionPointId": "linkWithNewMenu",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "smartdesign.base.print",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }, {
                "command": "smartdesign.base.send_email_to_permissionsowner",
                "parentContributionPointId": "actionMenu",
                "context": {
                  "type": "DataObject",
                  "objecttype": "*"
                }
              }],
              "viewActions": [],
              "actionFavorites": ["smartdesign.base.appeal_for_rights_on_record"],
              "viewFavorites": [],
              "actionDefaults": [{
                "command": "smartdesign.base.edit"
              }, {
                "command": "smartdesign.base.save",
                "highlighted": true
              }],
              "viewActionDefaults": [{
                "command": "smartdesign.base.cancel"
              }]
            },
            "states": [{
              "mode": "read",
              "height": "CONTAINER",
              "width": "UNDEFINED",
              "padding": "DEFAULT",
              "content": {
                "type": "smartdesign.base.VerticalLayout",
                "name": "contentLayout",
                "children": [{
                  "type": "smartdesign.base.Message",
                  "name": "nachrichtStartrechtTurnPortal",
                  "level": "INFO",
                  "message": {
                    "inputs": {},
                    "source": "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
                  },
                  "showIcon": true
                }, {
                  "type": "smartdesign.base.ZLayout",
                  "name": "mainLayout",
                  "fixedColumns": false,
                  "children": [{
                    "type": "smartdesign.base.FieldGroup",
                    "name": "allgemein",
                    "children": [{
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPTYPE"
                    }, {
                      "type": "smartdesign.base.Field",
                      "ref": "CORRESPONDING_GYMNAST"
                    }, {
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPVALIDFROM"
                    }, {
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPVALIDUNTIL"
                    }],
                    "showFieldCaptions": true,
                    "caption": "Allgemeine Informationen"
                  }, {
                    "type": "smartdesign.base.FieldGroup",
                    "name": "finanzen",
                    "children": [{
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPFEE"
                    }],
                    "showFieldCaptions": true,
                    "caption": "Finanzielle Informationen"
                  }],
                  "minimumColumnWidth": 400
                }, {
                  "type": "smartdesign.base.FieldGroup",
                  "name": "verknuepfungen",
                  "children": [{
                    "type": "smartdesign.base.LinkField",
                    "ref": "ANNUALSTAMP_CLUB_LINKFIELD"
                  }],
                  "showFieldCaptions": true,
                  "caption": "Verknüpfungen"
                }, {
                  "type": "smartdesign.base.EmbeddedList",
                  "name": "linkstartrechte",
                  "caption": "Verknüpfte Startrechte",
                  "maxItemsShown": 7,
                  "extendedListEntryCaption": "Extended list",
                  "datasource": "linkListStartinglicence",
                  "extendedListEntryMode": "SHOW",
                  "emptyListMessage": "No data records exist",
                  "hideWhenEmpty": true
                }, {
                  "type": "smartdesign.base.FieldGroup",
                  "name": "paymentinfo",
                  "children": [{
                    "type": "smartdesign.base.LinkField",
                    "ref": "ANNUALSTAMP_OPENITEMS_LINKFIELD"
                  }],
                  "showFieldCaptions": true,
                  "caption": "Zugehörige Gebühren"
                }, {
                  "type": "smartdesign.base.FieldGroup",
                  "name": "notizen",
                  "children": [{
                    "type": "smartdesign.base.Field",
                    "ref": "NOTES2"
                  }],
                  "showFieldCaptions": true,
                  "caption": "Anmerkungen"
                }]
              }
            }, {
              "mode": "edit",
              "height": "CONTAINER",
              "width": "UNDEFINED",
              "padding": "DEFAULT",
              "content": {
                "type": "smartdesign.base.VerticalLayout",
                "name": "contentLayout",
                "children": [{
                  "type": "smartdesign.base.Message",
                  "name": "nachrichtStartrechtTurnPortal",
                  "level": "INFO",
                  "message": {
                    "inputs": {},
                    "source": "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
                  },
                  "showIcon": true
                }, {
                  "type": "smartdesign.base.ZLayout",
                  "name": "mainLayout",
                  "fixedColumns": false,
                  "children": [{
                    "type": "smartdesign.base.FieldGroup",
                    "name": "allgemein",
                    "children": [{
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPTYPE"
                    }, {
                      "type": "smartdesign.base.LinkField",
                      "ref": "ANNUALSTAMP_GYMNAST_LINKFIELD",
                      "caption": "Zugehörige Person"
                    }],
                    "showFieldCaptions": true,
                    "caption": "Allgemeine Informationen"
                  }, {
                    "type": "smartdesign.base.FieldGroup",
                    "name": "finanzen",
                    "children": [{
                      "type": "smartdesign.base.Field",
                      "ref": "STAMPFEE"
                    }],
                    "showFieldCaptions": true,
                    "caption": "Finanzielle Informationen"
                  }, {
                    "type": "smartdesign.base.FieldGroup",
                    "name": "verknuepfungen",
                    "children": [{
                      "type": "smartdesign.base.LinkField",
                      "ref": "ANNUALSTAMP_CLUB_LINKFIELD"
                    }],
                    "showFieldCaptions": true,
                    "caption": "Verknüpfungen"
                  }, {
                    "type": "smartdesign.base.LinkListGroupedByRoles",
                    "name": "linkstartrechte",
                    "datasource": "linkListStartinglicence",
                    "emptyListMessage": "No data records exist",
                    "caption": "Verknüpfte Startrechte",
                    "deleteMessage": "Remove link",
                    "addMessage": "Create link"
                  }],
                  "minimumColumnWidth": 400
                }, {
                  "type": "smartdesign.base.FieldGroup",
                  "name": "notizen",
                  "children": [{
                    "type": "smartdesign.base.Field",
                    "ref": "NOTES2"
                  }],
                  "showFieldCaptions": true,
                  "caption": "Anmerkungen"
                }, {
                  "type": "smartdesign.base.Message",
                  "name": "nachrichtFuerAdministratoren",
                  "visibility": {
                    "type": "script",
                    "inputs": {},
                    "source": "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
                  },
                  "level": "WARN",
                  "message": {
                    "inputs": {},
                    "source": "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_KNOWWHATYOUDO.get();\r\n})();\r\n"
                  },
                  "showIcon": true
                }, {
                  "type": "smartdesign.base.FieldGroup",
                  "name": "administrativeFelder",
                  "visibility": {
                    "type": "script",
                    "inputs": {},
                    "source": "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
                  },
                  "children": [{
                    "type": "smartdesign.base.Field",
                    "ref": "STAMPVALIDFROM"
                  }, {
                    "type": "smartdesign.base.Field",
                    "ref": "STAMPVALIDUNTIL"
                  }],
                  "showFieldCaptions": true,
                  "caption": "Zusätzliche Felder für geschultes Personal"
                }]
              }
            }]
          }, {
            "id": "dtb.annualstamp.Search",
            "context": [{
              "imported": false,
              "primary": true,
              "optional": false,
              "name": "searchMassData",
              "type": "DataObjectMassData",
              "table": {
                "columns": ["CORRESPONDING_GYMNAST", "STAMPTYPE", "CORRESPONDING_CLUB", "STAMPVALIDFROM", "STAMPVALIDUNTIL"]
              },
              "objectType": "smartdesign.base.ANNUALSTAMP"
            }, {
              "imported": false,
              "primary": false,
              "optional": false,
              "name": "lastUsedMD",
              "type": "LastUsedMassData",
              "table": {
                "columns": ["CORRESPONDING_GYMNAST", "STAMPTYPE", "CORRESPONDING_CLUB", "STAMPVALIDFROM", "STAMPVALIDUNTIL"]
              },
              "objectType": "smartdesign.base.ANNUALSTAMP"
            }],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "NONE",
              "title": "Jahresmarken",
              "actionFavorites": [],
              "viewFavorites": [],
              "actionDefaults": [{
                "group": "smartdesign.base.newMenu",
                "contributionPointId": "newMenu"
              }, {
                "command": "smartdesign.base.new",
                "parentContributionPointId": "newMenu",
                "context": {
                  "type": "MassData",
                  "objecttype": "ANNUALSTAMP"
                }
              }],
              "viewActionDefaults": []
            },
            "states": [{
              "mode": "read",
              "height": "CONTAINER",
              "width": "UNDEFINED",
              "padding": "DEFAULT",
              "content": {
                "type": "smartdesign.base.VerticalLayout",
                "name": "contentLayout",
                "children": [{
                  "type": "smartdesign.base.SearchList",
                  "name": "searchListListeErweiterteSuche",
                  "caption": "Alle Jahresmarken",
                  "maxItemsShown": 10,
                  "extendedListEntryCaption": "Extended list",
                  "datasource": "searchMassData",
                  "extendedListEntryMode": "SHOW",
                  "emptyListMessage": "No data records exist",
                  "hideWhenEmpty": true
                }, {
                  "type": "smartdesign.base.EmbeddedList",
                  "name": "recentlyUsedListeZuletztVerwendet",
                  "caption": "Zuletzt Verwendet",
                  "maxItemsShown": 7,
                  "extendedListEntryCaption": "Extended list",
                  "datasource": "lastUsedMD",
                  "extendedListEntryMode": "SHOW",
                  "emptyListMessage": "No data records exist",
                  "hideWhenEmpty": true
                }, {
                  "type": "smartdesign.base.ViewsList",
                  "name": "Annualstamp",
                  "objectTypeViews": "smartdesign.base.ANNUALSTAMP",
                  "caption": "Views"
                }]
              }
            }]
          }],
        "translations": [
          {
            "id": "dtb.annualstamp.ALLGEMEIN",
            "value": "Allgemeine Informationen"
          },
          {
            "id": "dtb.annualstamp.ANNUALSTAMP_NOTES",
            "value": "Anmerkungen"
          },
          {
            "id": "dtb.annualstamp.ANNUALSTAMP_SINGULAR",
            "value": "Jahresmarke"
          },
          {
            "id": "dtb.annualstamp.APP_NAME",
            "value": "Jahresmarken"
          }, {
            "id": "dtb.annualstamp.COMPETITION_CORRESPONDING_GYMNAST",
            "value": "Zugehörige Person"
          },
          {
            "id": "dtb.annualstamp.DEFAULTTITEL",
            "value": "Titel"
          },
          {
            "id": "dtb.annualstamp.FIEDLS_ADMINISTRATIVE",
            "value": "Zusätzliche Felder für geschultes Personal"
          },
          {
            "id": "dtb.annualstamp.FINANCES",
            "value": "Finanzielle Informationen"
          },
          {
            "id": "dtb.annualstamp.HEADERNEU",
            "value": "Jahresmarke"
          },
          {
            "id": "dtb.annualstamp.LINKEDAPPS",
            "value": "Verknüpfungen"
          },
          {
            "id": "dtb.annualstamp.LINK_ANNUALSTAMP_OPENITEMS",
            "value": "Zugehörige Gebühren"
          },
          {
            "id": "dtb.annualstamp.LINK_STARTINGLICENCE",
            "value": "Verknüpfte Startrechte"
          },
          {
            "id": "dtb.annualstamp.LISTCAPTION",
            "value": "Zuletzt Verwendet"
          },
          {
            "id": "dtb.annualstamp.MESSAGE_ADDRESS_IN_GYMNET",
            "value": "Adressen für Verbänden können nur in GymNet geändert werden. Die Änderungen werden automatisch in das TURNPORTAL bzw. die SmartWe übertragen."
          },
          {
            "id": "dtb.annualstamp.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE",
            "value": "Jahresmarken können nicht über die SmartWe erstellt werden. Diese werden im TURNPORTAL beim Beantragen der Startrechte generiert."
          },
          {
            "id": "dtb.annualstamp.MESSAGE_KNOWWHATYOUDO",
            "value": "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
          },
          {
            "id": "dtb.annualstamp.SEARCH",
            "value": "Alle Jahresmarken"
          },
          {
            "id": "dtb.annualstamp.SEARCHTITEL",
            "value": "Jahresmarken"
          }
        ]
      }

    ]
}];
