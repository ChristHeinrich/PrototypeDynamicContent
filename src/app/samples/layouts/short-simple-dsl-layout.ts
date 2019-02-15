import { DslDescription } from '../../types/dsl.interface';
import {Layout} from '../../types/layout';

export const DSL: Layout[] = [
  {
    "apps": [
      {
        "id": "dtb.annualstamp",
        "name": "Jahresmarken",
        "standalone": true,
        "color": "#3A85D1",
        "iconHash": "264597b32dbed1f1a308d7bf878b585b85813b6c",
        "intents": [
          {
            "id": "dtb.annualstamp.OpenLinkAnnualstampSearch",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "OVERLAY"
          }
        ],
        "navigation": {
          "external": [
            {
              "intent": "smartdesign.base.OpenRecord",
              "form": "dtb.annualstamp.Record"
            },
            {
              "intent": "dtb.annualstamp.OpenLinkAnnualstampSearch",
              "form": "dtb.annualstamp.LinkSearch"
            }
          ],
          "internal": [
            {
              "intent": "smartdesign.base.ShowSearch",
              "form": "dtb.annualstamp.Search"
            }
          ],
          "initialization": "smartdesign.base.ShowSearch"
        },
        "commands": [
          {
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
          }
        ],
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
              "actionDefaults": [
                {
                  "command": "smartdesign.base.apply_link",
                  "highlighted": true
                },
                {
                  "group": "smartdesign.base.newLinkedMenu",
                  "contributionPointId": "newLinkedMenu"
                }
              ],
              "viewActionDefaults": [
                {
                  "command": "smartdesign.base.cancel"
                }
              ]
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
                  "children": [
                    {
                      "type": "smartdesign.base.SearchField",
                      "name": "searchField",
                      "hideTargetViewerWhenEmpty": true,
                      "targetViewer": "searchResults",
                      "alignment": "NONE",
                      "widgetsToHide": [
                        "recentlyUsed"
                      ]
                    },
                    {
                      "type": "smartdesign.base.List",
                      "name": "searchResults",
                      "hideNoEntriesFoundCaption": false,
                      "minVisibleItems": 8,
                      "datasource": "searchMassdata"
                    },
                    {
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
                    }
                  ],
                  "ratio": [
                    0,
                    1,
                    1
                  ]
                }
              }
            ]
          },
          {
            "id": "dtb.annualstamp.Record",
            "context": [
              {
                "imported": true,
                "primary": true,
                "optional": false,
                "name": "do",
                "type": "DataObject",
                "objectType": "smartdesign.base.ANNUALSTAMP"
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "dossierMD",
                "type": "DossierMassData"
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "linkListAddress",
                "type": "LinkMassData",
                "linkAttributes": [
                  "ANNUALST_CLUB"
                ],
                "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
                "targetObjectType": "smartdesign.base.ADDRESS",
                "query": {}
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "linkListAddress2",
                "type": "LinkMassData",
                "linkAttributes": [
                  "ANNUALST_GYMN"
                ],
                "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
                "targetObjectType": "smartdesign.base.ADDRESS",
                "query": {}
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "linkListStartinglicence",
                "type": "LinkMassData",
                "linkAttributes": [
                  "ANNUALST_LIC"
                ],
                "sourceObjectType": "smartdesign.base.ANNUALSTAMP",
                "targetObjectType": "smartdesign.base.STARTINGLICENCE",
                "query": {}
              }
            ],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "ALL",
              "title": "Jahresmarke",
              "actions": [
                {
                  "command": "smartdesign.base.appeal_for_rights_on_record",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "smartdesign.base.delete",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "group": "smartdesign.base.linkWithMenu",
                  "contributionPointId": "linkWithMenu",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.annualstamp.linkToAnnualstamp",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.competition.linkToCompetition",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.discipline.linkToDiscipline",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.offeneposten.linkToOffeneposten",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.sepamandat.linkToSepamandat",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "dtb.startinglicence.linkToStartinglicence",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "smartdesign.address.linkToContact",
                  "parentContributionPointId": "linkWithMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "group": "smartdesign.base.linkWithNewMenu",
                  "contributionPointId": "linkWithNewMenu",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "smartdesign.base.print",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                },
                {
                  "command": "smartdesign.base.send_email_to_permissionsowner",
                  "parentContributionPointId": "actionMenu",
                  "context": {
                    "type": "DataObject",
                    "objecttype": "*"
                  }
                }
              ],
              "viewActions": [],
              "actionFavorites": [
                "smartdesign.base.appeal_for_rights_on_record"
              ],
              "viewFavorites": [],
              "actionDefaults": [
                {
                  "command": "smartdesign.base.edit"
                },
                {
                  "command": "smartdesign.base.save",
                  "highlighted": true
                }
              ],
              "viewActionDefaults": [
                {
                  "command": "smartdesign.base.cancel"
                }
              ]
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
                  "children": [
                    {
                      "type": "smartdesign.base.Message",
                      "name": "nachrichtStartrechtTurnPortal2",
                      "level": "INFO",
                      "message": {
                        "inputs": {},
                        "source": "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
                      },
                      "showIcon": true
                    },
                    {
                      "type": "smartdesign.base.ZLayout",
                      "name": "mainLayout",
                      "fixedColumns": false,
                      "children": [
                        {
                          "type": "smartdesign.base.FieldGroup",
                          "name": "allgemein",
                          "children": [
                            {
                              "type": "smartdesign.base.Field",
                              "ref": "STAMPTYPE"
                            }
                          ],
                          "showFieldCaptions": true,
                          "caption": "Allgemeine Informationen"
                        }
                      ],
                      "minimumColumnWidth": 400
                    }
                  ]
                }
              },
              {
                "mode": "edit",
                "height": "CONTAINER",
                "width": "UNDEFINED",
                "padding": "DEFAULT",
                "content": {
                  "type": "smartdesign.base.VerticalLayout",
                  "name": "contentLayout",
                  "children": [
                    {
                      "type": "smartdesign.base.Message",
                      "name": "nachrichtStartrechtTurnPortal",
                      "level": "INFO",
                      "message": {
                        "inputs": {},
                        "source": "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
                      },
                      "showIcon": true
                    },
                    {
                      "type": "smartdesign.base.ZLayout",
                      "name": "mainLayout",
                      "fixedColumns": false,
                      "children": [
                        {
                          "type": "smartdesign.base.FieldGroup",
                          "name": "allgemein",
                          "children": [
                            {
                              "type": "smartdesign.base.Field",
                              "ref": "STAMPTYPE"
                            }
                          ],
                          "showFieldCaptions": true,
                          "caption": "Allgemeine Informationen"
                        }
                      ],
                      "minimumColumnWidth": 400
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": "dtb.annualstamp.Search",
            "context": [
              {
                "imported": false,
                "primary": true,
                "optional": false,
                "name": "searchMassData",
                "type": "DataObjectMassData",
                "table": {
                  "columns": [
                    "CORRESPONDING_GYMNAST",
                    "STAMPTYPE",
                    "CORRESPONDING_CLUB",
                    "STAMPVALIDFROM",
                    "STAMPVALIDUNTIL"
                  ]
                },
                "objectType": "smartdesign.base.ANNUALSTAMP"
              },
              {
                "imported": false,
                "primary": false,
                "optional": false,
                "name": "lastUsedMD",
                "type": "LastUsedMassData",
                "table": {
                  "columns": [
                    "CORRESPONDING_GYMNAST",
                    "STAMPTYPE",
                    "CORRESPONDING_CLUB",
                    "STAMPVALIDFROM",
                    "STAMPVALIDUNTIL"
                  ]
                },
                "objectType": "smartdesign.base.ANNUALSTAMP"
              }
            ],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "NONE",
              "title": "Jahresmarken",
              "actionFavorites": [],
              "viewFavorites": [],
              "actionDefaults": [
                {
                  "group": "smartdesign.base.newMenu",
                  "contributionPointId": "newMenu"
                },
                {
                  "command": "smartdesign.base.new",
                  "parentContributionPointId": "newMenu",
                  "context": {
                    "type": "MassData",
                    "objecttype": "ANNUALSTAMP"
                  }
                }
              ],
              "viewActionDefaults": []
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
                  "children": [
                    {
                      "type": "smartdesign.base.SearchList",
                      "name": "searchListListeErweiterteSuche",
                      "caption": "Alle Jahresmarken",
                      "maxItemsShown": 10,
                      "extendedListEntryCaption": "Extended list",
                      "datasource": "searchMassData",
                      "extendedListEntryMode": "SHOW",
                      "emptyListMessage": "No data records exist",
                      "hideWhenEmpty": true
                    },
                    {
                      "type": "smartdesign.base.EmbeddedList",
                      "name": "recentlyUsedListeZuletztVerwendet",
                      "caption": "Zuletzt Verwendet",
                      "maxItemsShown": 7,
                      "extendedListEntryCaption": "Extended list",
                      "datasource": "lastUsedMD",
                      "extendedListEntryMode": "SHOW",
                      "emptyListMessage": "No data records exist",
                      "hideWhenEmpty": true
                    },
                    {
                      "type": "smartdesign.base.ViewsList",
                      "name": "Annualstamp",
                      "objectTypeViews": "smartdesign.base.ANNUALSTAMP",
                      "caption": "Views"
                    }
                  ]
                }
              }
            ]
          }
        ],
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
          },
          {
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
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
        "id": "smartdesign.base",
        "standalone": false,
        "iconHash": "94e9e8324b04d75d48402a04e653c655874aaf38",
        "intents": [
          {
            "id": "smartdesign.base.NewRecord",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.ShowSearch",
            "pagesToKeep": 1,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.OpenRecord",
            "pagesToKeep": 1,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.OpenRecordWithList",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.ShowTable",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.None",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "DEFAULT"
          },
          {
            "id": "smartdesign.base.ShowPermissionOwner",
            "pagesToKeep": 0,
            "mode": "read",
            "type": "DEFAULT"
          }
        ],
        "navigation": {
          "external": [
            {
              "intent": "smartdesign.base.ShowTable",
              "form": "smartdesign.base.Table"
            },
            {
              "intent": "smartdesign.base.OpenRecordWithList",
              "form": "smartdesign.base.List"
            },
            {
              "intent": "smartdesign.base.NewRecord",
              "form": "smartdesign.base.Empty",
              "auto": {
                "intent": "smartdesign.base.OpenRecord",
                "mode": "edit"
              }
            }
          ],
          "internal": []
        },
        "commands": [
          {
            "id": "smartdesign.base.cancel",
            "isGroup": false,
            "label": "Cancel",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.navigate_to_next_assistant_page",
            "isGroup": false,
            "iconName": "svg_arrow_wizard_right_arrow.svg",
            "label": "Next",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.linkWithNewMenu",
            "isGroup": true,
            "contributionPointId": "linkWithNewMenu",
            "iconName": "svg_toolbar_create_linked_object.svg",
            "label": "Create",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.appeal_for_rights_on_record",
            "isGroup": false,
            "iconName": "svg_toolbar_key_lock_24.svg",
            "label": "Request write rights",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.primaryMenu",
            "isGroup": true,
            "contributionPointId": "primaryMenu",
            "label": "Action menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.save",
            "isGroup": false,
            "label": "Save",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.delete",
            "isGroup": false,
            "iconName": "svg_toolbar_delete.svg",
            "label": "Delete",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.table_switch_to_compressed_view_with_navigation",
            "isGroup": false,
            "iconName": "svg_checkbox_checkbox_off.svg",
            "label": "Close",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.menuitem_show_dossier_of_record",
            "isGroup": false,
            "iconName": "svg_radialmenu_show_dossier.svg",
            "label": "Dossier",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.navigate_to_prev_assistant_page",
            "isGroup": false,
            "iconName": "svg_arrow_wizard_left_arrow.svg",
            "label": "Previous",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.linkTo",
            "isGroup": false,
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.newLinkedMenu",
            "isGroup": true,
            "contributionPointId": "newLinkedMenu",
            "iconName": "svg_toolbar_new.svg",
            "label": "New",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.edit_view_columns",
            "isGroup": false,
            "iconName": "svg_toolbar_edit.svg",
            "label": "Select columns",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.delete_view",
            "isGroup": false,
            "label": "Delete view",
            "inGroupLabel": "Delete",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.save_view",
            "isGroup": false,
            "label": "Save changes",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.table_switch_to_selection",
            "isGroup": false,
            "description": "Select data records",
            "iconName": "svg_checkbox_checkbox_on.svg",
            "label": "Select",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.navigate",
            "isGroup": false,
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.new",
            "isGroup": false,
            "iconName": "svg_toolbar_new.svg",
            "label": "New",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.open_filter_dialog",
            "isGroup": false,
            "iconName": "svg_toolbar_filter.svg",
            "label": "Filter",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.save_view_with_dialog",
            "isGroup": false,
            "label": "View properties",
            "inGroupLabel": "Properties",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.edit",
            "isGroup": false,
            "iconName": "svg_toolbar_edit.svg",
            "label": "Edit",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.newMenu",
            "isGroup": true,
            "contributionPointId": "newMenu",
            "iconName": "svg_toolbar_new.svg",
            "label": "New",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.viewMenu",
            "isGroup": true,
            "contributionPointId": "viewMenu",
            "label": "View menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.viewsMenu",
            "isGroup": true,
            "contributionPointId": "viewsMenu",
            "iconName": "svg_toolbar_show_activities.svg",
            "label": "Edit view",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.edit_tags",
            "isGroup": false,
            "iconName": "svg_toolbar_tag.svg",
            "label": "Edit tags",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.actionMenu",
            "isGroup": true,
            "contributionPointId": "actionMenu",
            "label": "Action menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.new_linked",
            "isGroup": false,
            "iconName": "svg_toolbar_create_linked_object.svg",
            "label": "New",
            "inGroupLabel": "New",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.tableLeftToolbar",
            "isGroup": true,
            "contributionPointId": "tableLeftToolbar",
            "label": "View menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.menuitem_new_tab",
            "isGroup": false,
            "iconName": "svg_radialmenu_open_new_tab.svg",
            "label": "New tab",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.print",
            "isGroup": false,
            "iconName": "svg_toolbar_print.svg",
            "label": "Print",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.export_as_csv",
            "isGroup": false,
            "iconName": "svg_toolbar_export.svg",
            "label": "Export",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.print_list",
            "isGroup": false,
            "iconName": "svg_toolbar_print.svg",
            "label": "Print",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.linkWithMenu",
            "isGroup": true,
            "contributionPointId": "linkWithMenu",
            "iconName": "svg_toolbar_link.svg",
            "label": "Link with",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.table_switch_to_navigation",
            "isGroup": false,
            "description": "Close selection",
            "iconName": "svg_checkbox_checkbox_off.svg",
            "label": "Close",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.tableRightToolbar",
            "isGroup": true,
            "contributionPointId": "tableRightToolbar",
            "label": "Action menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.unlink",
            "isGroup": false,
            "iconName": "svg_toolbar_remove_link.svg",
            "label": "Remove link",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.contextMenu",
            "isGroup": true,
            "contributionPointId": "contextMenu",
            "label": "Context menu",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.delete_multiple_records",
            "isGroup": false,
            "iconName": "svg_toolbar_delete.svg",
            "label": "Delete",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.open_resulting_rights",
            "isGroup": false,
            "iconName": "svg_miscellaneous_expand.svg",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.edit_primary_links",
            "isGroup": false,
            "iconName": "svg_toolbar_edit.svg",
            "label": "Edit parent elements",
            "style": "ICON"
          },
          {
            "id": "smartdesign.base.send_email_to_permissionsowner",
            "isGroup": false,
            "iconName": "svg_toolbar_e_mail.svg",
            "label": "Send e-mail to authorized persons",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.save_view_as",
            "isGroup": false,
            "label": "Save view as",
            "inGroupLabel": "Save as",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.apply_link",
            "isGroup": false,
            "label": "Apply",
            "style": "CAPTION"
          },
          {
            "id": "smartdesign.base.table_switch_to_uncompressed_view_with_selection",
            "isGroup": false,
            "iconName": "svg_checkbox_checkbox_on.svg",
            "label": "Select",
            "style": "ICONCAPTION"
          },
          {
            "id": "smartdesign.base.menuitem_edit_record",
            "isGroup": false,
            "iconName": "svg_radialmenu_edit.svg",
            "label": "Edit",
            "style": "ICONCAPTION"
          }
        ],
        "types": [
          {
            "id": "smartdesign.base.ADDRESS",
            "fields": [
              {
                "type": "STRING",
                "name": "PAYMENT"
              },
              {
                "type": "STRING",
                "name": "COUNTRY1"
              },
              {
                "type": "STRING",
                "name": "COUNTRY3"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "COUNTRY2"
              },
              {
                "type": "STRING",
                "name": "COUNTRY4"
              },
              {
                "type": "STRING",
                "name": "POBOXTOWN1"
              },
              {
                "type": "STRING",
                "name": "ADDRESSTERM"
              },
              {
                "type": "STRING",
                "name": "POBOXTOWN4"
              },
              {
                "type": "STRING",
                "name": "POBOXTOWN2"
              },
              {
                "type": "BOOLEAN",
                "name": "CLUB_ACTIVE"
              },
              {
                "type": "DATETIME",
                "name": "FIRSTCONTACTDATE"
              },
              {
                "type": "STRING",
                "name": "BANKACCOUNTHOLDER"
              },
              {
                "type": "LINK",
                "name": "SMARTDESIGN_ADDRESS_SEPA_GRANTER",
                "caption": "Zugehöriges SEPA-Mandat",
                "linkAttribute": "SEPA_GRANTER",
                "targetObjectType": "smartdesign.base.SEPAMANDATE"
              },
              {
                "type": "STRING",
                "name": "WWWFIELDSTR5"
              },
              {
                "type": "STRING",
                "customType": "CURRENCY",
                "name": "CURRENCYNAT"
              },
              {
                "type": "STRING",
                "name": "TOWN1"
              },
              {
                "type": "STRING",
                "name": "TYPE"
              },
              {
                "type": "STRING",
                "name": "WWWFIELDSTR1"
              },
              {
                "type": "DATETIME",
                "name": "BIRTHDAY"
              },
              {
                "type": "STRING",
                "name": "WWWFIELDSTR0"
              },
              {
                "type": "STRING",
                "name": "TOWN2"
              },
              {
                "type": "STRING",
                "name": "TOWN3"
              },
              {
                "type": "STRING",
                "name": "TOWN4"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "STRING",
                "name": "DEPARTMENT"
              },
              {
                "type": "LINK",
                "name": "LINK_CLUBADMIN",
                "caption": "",
                "linkAttribute": "CLUBADMIN",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "IMAGEPATH"
              },
              {
                "type": "STRING",
                "name": "FUNCTION"
              },
              {
                "type": "STRING",
                "name": "STREET1"
              },
              {
                "type": "BOOLEAN",
                "name": "ISORGANISATION"
              },
              {
                "type": "STRING",
                "name": "STREET2"
              },
              {
                "type": "STRING",
                "name": "RECIPIENT_DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "STREET3"
              },
              {
                "type": "LINK",
                "name": "SMARTDESIGN_ADDRESS_OPENIT_INVCREC",
                "caption": "Zugehörige Gebühren",
                "linkAttribute": "OPENITM_INVCREC",
                "targetObjectType": "smartdesign.base.OPENITEMS"
              },
              {
                "type": "STRING",
                "name": "STREET4"
              },
              {
                "type": "INT",
                "name": "REGIONALID"
              },
              {
                "type": "BOOLEAN",
                "name": "ISDELETED"
              },
              {
                "type": "LINK",
                "name": "LINK_DISTRICTADMIN",
                "caption": "",
                "linkAttribute": "DISTRICTADMIN",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "LINK",
                "name": "LINK_LTVADMIN",
                "caption": "",
                "linkAttribute": "LTVADMIN",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "GWNATIONALITY"
              },
              {
                "type": "GGUID",
                "name": "ADDRESSCHECKEDBY4"
              },
              {
                "type": "INT",
                "name": "GymnetID"
              },
              {
                "type": "STRING",
                "name": "NATIONALITY"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "STRING",
                "name": "GWADDITIONALINFO1"
              },
              {
                "type": "STRING",
                "name": "EBIDSTATUS"
              },
              {
                "type": "STRING",
                "name": "GWADDITIONALINFO2"
              },
              {
                "type": "STRING",
                "name": "GWADDITIONALINFO3"
              },
              {
                "type": "STRING",
                "name": "GWADDITIONALINFO4"
              },
              {
                "type": "STRING",
                "name": "GYMNET_DTB_IDENTIFIER"
              },
              {
                "type": "STRING",
                "name": "DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "name": "MAILFIELDSTR1"
              },
              {
                "type": "STRING",
                "name": "MAILFIELDSTR2"
              },
              {
                "type": "STRING",
                "name": "MAILFIELDSTR3"
              },
              {
                "type": "STRING",
                "name": "MAILFIELDSTR5"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "DECIMAL",
                "name": "TURNOVER"
              },
              {
                "type": "STRING",
                "name": "MASTERADDRESSID4"
              },
              {
                "type": "STRING",
                "name": "MASTERADDRESSID3"
              },
              {
                "type": "STRING",
                "name": "MASTERADDRESSID2"
              },
              {
                "type": "STRING",
                "name": "MASTERADDRESSID1"
              },
              {
                "type": "BOOLEAN",
                "name": "SAVEDATACHECK"
              },
              {
                "type": "STRING",
                "name": "REGISTRATIONCOURT"
              },
              {
                "type": "STRING",
                "name": "ZIP3"
              },
              {
                "type": "STRING",
                "name": "EBIDNUMBER"
              },
              {
                "type": "STRING",
                "name": "ZIP4"
              },
              {
                "type": "STRING",
                "name": "ZIP1"
              },
              {
                "type": "STRING",
                "name": "ZIP2"
              },
              {
                "type": "STRING",
                "name": "CAPTION"
              },
              {
                "type": "STRING",
                "name": "BILLING_COMPANY"
              },
              {
                "type": "TEXT",
                "name": "PERMISSIONS"
              },
              {
                "type": "STRING",
                "name": "FINANCIALINSTITUTE"
              },
              {
                "type": "INT",
                "name": "LINKEDUSERID"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR2"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR3"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR4"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "GGUID",
                "name": "IMAGEGUID"
              },
              {
                "type": "STRING",
                "name": "ADDRESSLETTER"
              },
              {
                "type": "INT",
                "name": "DISTRICTID"
              },
              {
                "type": "DATETIME",
                "name": "CLUBRESOLUTION"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR5"
              },
              {
                "type": "STRING",
                "name": "POBOX4"
              },
              {
                "type": "STRING",
                "name": "POBOXZIP4"
              },
              {
                "type": "STRING",
                "name": "FIRSTCONTACT"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR7"
              },
              {
                "type": "STRING",
                "name": "POBOXZIP2"
              },
              {
                "type": "INT",
                "name": "STANDARDEMAIL"
              },
              {
                "type": "STRING",
                "name": "POBOXZIP1"
              },
              {
                "type": "STRING",
                "name": "POBOX1"
              },
              {
                "type": "STRING",
                "name": "POBOX2"
              },
              {
                "type": "STRING",
                "name": "ACTIVITY_TYPE_PREFERRED"
              },
              {
                "type": "DATETIME",
                "name": "DTBIDAPPLYDATE"
              },
              {
                "type": "BOOLEAN",
                "name": "KEEPFIELDSSYCHRONIZED"
              },
              {
                "type": "INT",
                "name": "STANDARDADDRESS"
              },
              {
                "type": "BOOLEAN",
                "name": "ISTEMPLATE"
              },
              {
                "type": "STRING",
                "name": "IMFIELDSTR6"
              },
              {
                "type": "STRING",
                "name": "DTBID"
              },
              {
                "type": "STRING",
                "name": "TURNOVERTAXID"
              },
              {
                "type": "GGUID",
                "name": "gguid"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "STRING",
                "name": "PHONEFIELDSTR10"
              },
              {
                "type": "STRING",
                "name": "NAME"
              },
              {
                "type": "STRING",
                "name": "FAXFIELDSTR5"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "STRING",
                "name": "FAXFIELDSTR4"
              },
              {
                "type": "GGUID",
                "name": "PRIMARYORGANISATION"
              },
              {
                "type": "STRING",
                "name": "GWADDRESSFORMAT_NAME"
              },
              {
                "type": "DATETIME",
                "name": "ADDRESSCHECKEDON4"
              },
              {
                "type": "LINK",
                "name": "LINK_DTBADMIN",
                "caption": "",
                "linkAttribute": "DTBADMIN",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "GWSTATE3"
              },
              {
                "type": "STRING",
                "name": "GWSTATE4"
              },
              {
                "type": "STRING",
                "name": "GWSTATE1"
              },
              {
                "type": "STRING",
                "name": "GWSTATE2"
              },
              {
                "type": "STRING",
                "name": "FAXFIELDSTR3"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "STRING",
                "name": "FAXFIELDSTR1"
              },
              {
                "type": "STRING",
                "name": "REGISTRATIONNUMBER"
              },
              {
                "type": "STRING",
                "name": "CUSTOMERID"
              },
              {
                "type": "STRING",
                "name": "SUBURB4"
              },
              {
                "type": "STRING",
                "name": "SUBURB3"
              },
              {
                "type": "STRING",
                "name": "SUBURB2"
              },
              {
                "type": "STRING",
                "name": "SUBURB1"
              },
              {
                "type": "INT",
                "name": "STANDARDPHONE2"
              },
              {
                "type": "INT",
                "name": "STANDARDPHONE1"
              },
              {
                "type": "STRING",
                "name": "GENDER"
              },
              {
                "type": "DATETIME",
                "name": "SAVEDATACHECKDATE"
              },
              {
                "type": "DATETIME",
                "name": "DECEASEDON"
              },
              {
                "type": "STRING",
                "name": "BRANCH"
              },
              {
                "type": "STRING",
                "name": "GWIBAN"
              },
              {
                "type": "STRING",
                "name": "ACTIVITY_TYPE_ALLOWED"
              },
              {
                "type": "STRING",
                "name": "CHRISTIANNAME"
              },
              {
                "type": "DATETIME",
                "name": "CHECKEDBYUSERON"
              },
              {
                "type": "DATETIME",
                "name": "REGISTRATIONDATE"
              },
              {
                "type": "STRING",
                "name": "COMPNAME"
              },
              {
                "type": "BOOLEAN",
                "name": "ADR_DEACTIVATED"
              },
              {
                "type": "GGUID",
                "name": "LINKEDUSERGUID"
              },
              {
                "type": "STRING",
                "name": "TITLE"
              },
              {
                "type": "INT",
                "name": "CLUBID"
              },
              {
                "type": "STRING",
                "name": "GWBIC"
              }
            ],
            "summary": {
              "description": "TYPE"
            }
          },
          {
            "id": "smartdesign.base.ANNUALSTAMP",
            "fields": [
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "STRING",
                "name": "CORRESPONDING_CLUB"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "LINKED_CLUB"
              },
              {
                "type": "STRING",
                "name": "STAMPTYPE"
              },
              {
                "type": "LINK",
                "name": "ANNUALSTAMP_GYMNAST_LINKFIELD",
                "caption": "Zugehörige Person",
                "linkAttribute": "ANNUALST_GYMN",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "LINK",
                "name": "ANNUALSTAMP_OPENITEMS_LINKFIELD",
                "caption": "Zugehörige Jahresmarke/Gebühren",
                "linkAttribute": "ANNUALST_OPNITM",
                "targetObjectType": "smartdesign.base.OPENITEMS"
              },
              {
                "type": "LINK",
                "name": "ANNUALSTAMP_CLUB_LINKFIELD",
                "caption": "",
                "linkAttribute": "ANNUALST_CLUB",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "LINKED_GYMNAST"
              },
              {
                "type": "DATETIME",
                "name": "STAMPVALIDFROM"
              },
              {
                "type": "STRING",
                "name": "CORRESPONDING_GYMNAST"
              },
              {
                "type": "DATETIME",
                "name": "STAMPVALIDUNTIL"
              },
              {
                "type": "CURRENCY",
                "name": "STAMPFEE"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              }
            ],
            "summary": {
              "caption": "CORRESPONDING_GYMNAST",
              "description": "CORRESPONDING_CLUB"
            }
          },
          {
            "id": "smartdesign.base.APPOINTMENT",
            "fields": [
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "name": "GISDESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "DATETIME",
                "name": "START_DT"
              },
              {
                "type": "STRING",
                "name": "DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "name": "TIMEZONE"
              },
              {
                "type": "BOOLEAN",
                "name": "WHOLEDAY"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "INT",
                "name": "DAYOFMONTH"
              },
              {
                "type": "BOOLEAN",
                "name": "ISTEMPLATE"
              },
              {
                "type": "BOOLEAN",
                "name": "NOTES2OVERFLOW"
              },
              {
                "type": "STRING",
                "name": "DURATIONSTR"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "DATETIME",
                "name": "START_DT_ORIG"
              },
              {
                "type": "DATETIME",
                "name": "END_DT_ORIG"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "BOOLEAN",
                "name": "ISDELETED"
              },
              {
                "type": "INT",
                "name": "MONTHOFYEAR"
              },
              {
                "type": "STRING",
                "name": "APPTYPE"
              },
              {
                "type": "DATETIME",
                "name": "END_DT"
              },
              {
                "type": "TEXT",
                "name": "PARTICIPANTS"
              },
              {
                "type": "DOUBLE",
                "name": "DURATION"
              },
              {
                "type": "BOOLEAN",
                "name": "CASAWAY"
              }
            ],
            "constraints": [
              {
                "type": "dateTimeInterval",
                "start": "START_DT",
                "end": "END_DT",
                "duration": "WHOLEDAY"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "DESCRIPTION"
            }
          },
          {
            "id": "smartdesign.base.COMPETITION",
            "fields": [
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "DATETIME",
                "name": "CHECK_DATE"
              },
              {
                "type": "DATETIME",
                "name": "YEAR_UNTIL"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "LINK",
                "name": "COMPETITION_DISCIPLINE_LINKFIELD",
                "backingField": "COMPETITIONSPORTTYPE",
                "fieldsToSave": [
                  "SPORTTYPE"
                ],
                "linkAttribute": "COMPET_DISCIP",
                "targetObjectType": "smartdesign.base.DISCIPLINE"
              },
              {
                "type": "STRING",
                "name": "COMPETITIONSPORTTYPE"
              },
              {
                "type": "DATETIME",
                "name": "YEAR_FROM"
              },
              {
                "type": "STRING",
                "name": "GENDER"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "COMPETITION_NAME"
              },
              {
                "type": "DATETIME",
                "name": "COMPETITION_DATE"
              },
              {
                "type": "INT",
                "name": "GYMNET_COMPETITION_ID"
              }
            ],
            "summary": {
              "caption": "COMPETITION_NAME",
              "description": "COMPETITION_DATE"
            }
          },
          {
            "id": "smartdesign.base.DISCIPLINE",
            "fields": [
              {
                "type": "STRING",
                "name": "SPORTTYPE"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "DISCIPLINEMODE"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "STRING",
                "name": "DISCIPLINESTATE"
              }
            ],
            "summary": {
              "caption": "SPORTTYPE",
              "description": "DISCIPLINEMODE"
            }
          },
          {
            "id": "smartdesign.base.DOCUMENT",
            "fields": [
              {
                "type": "DATETIME",
                "name": "DOCDATE"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "CHECKOUTUSERDESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "STRING",
                "name": "EXTERNALLINK"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "BOOLEAN",
                "name": "ISFORMLETTER"
              },
              {
                "type": "RESOURCE",
                "name": "FILERESOURCE"
              },
              {
                "type": "STRING",
                "name": "DOCUMENTTYPEWITHSIZE"
              },
              {
                "type": "STRING",
                "name": "DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "name": "GWFILETYPE"
              },
              {
                "type": "STRING",
                "name": "DOCTYPE"
              },
              {
                "type": "STRING",
                "name": "TYPE"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "RESOURCE",
                "name": "ADDITIONALFILESRESOURCE"
              },
              {
                "type": "BOOLEAN",
                "name": "ISTEMPLATE"
              },
              {
                "type": "BOOLEAN",
                "name": "NOTES2OVERFLOW"
              },
              {
                "type": "STRING",
                "name": "CHECKOUTCLIENTFILENAME"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "INT",
                "name": "GWDOCUMENTSIZE"
              },
              {
                "type": "RESOURCE",
                "name": "CHECKOUTFILERESOURCE"
              },
              {
                "type": "STRING",
                "name": "GWDOCUMENTTYPE"
              },
              {
                "type": "GGUID",
                "name": "CHECKOUTUSERGUID"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "DATETIME",
                "name": "GWVALIDATESTARTDATE"
              },
              {
                "type": "DATETIME",
                "name": "GWVALIDATEENDDATE"
              },
              {
                "type": "STRING",
                "name": "GWDOCUMENTLANGUAGE"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "STRING",
                "name": "ARCHIVEFILE"
              },
              {
                "type": "BOOLEAN",
                "name": "ISDELETED"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "GWFILETYPE"
            }
          },
          {
            "id": "smartdesign.base.EMAILSTORE",
            "fields": [
              {
                "type": "BOOLEAN",
                "name": "ISFORMEMAIL"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "STRING",
                "name": "FORMEMAILSENDERNAME"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "INT",
                "name": "PRIORITY"
              },
              {
                "type": "DATETIME",
                "name": "RECEIVEDATE"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "DATETIME",
                "name": "ANSWERDATE"
              },
              {
                "type": "STRING",
                "name": "XTO"
              },
              {
                "type": "BOOLEAN",
                "name": "HASATTACHMENTS"
              },
              {
                "type": "STRING",
                "name": "DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "name": "TYPE"
              },
              {
                "type": "STRING",
                "name": "INTERNETMESSAGEID"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "XBCC"
              },
              {
                "type": "STRING",
                "name": "EMAILSETTINGS"
              },
              {
                "type": "RESOURCE",
                "name": "BODYHTML"
              },
              {
                "type": "DATETIME",
                "name": "FORMEMAILSENDAT"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "DATETIME",
                "name": "SENDDATE"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "INT",
                "name": "EMAILSIZE"
              },
              {
                "type": "STRING",
                "name": "XCC"
              },
              {
                "type": "STRING",
                "name": "SUBJECT"
              },
              {
                "type": "STRING",
                "name": "XFROM"
              },
              {
                "type": "BOOLEAN",
                "name": "ARCHIVED"
              },
              {
                "type": "TEXT",
                "name": "BODY"
              },
              {
                "type": "STRING",
                "name": "GWMAILMERGESUBJECT"
              },
              {
                "type": "STRING",
                "name": "FORMEMAILSENDERADDRESS"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "DESCRIPTION"
            }
          },
          {
            "id": "smartdesign.base.GWOPPORTUNITY",
            "fields": [
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "LINK",
                "name": "ACCOUNTINFORMATION_LINK",
                "backingField": "ACCOUNTINFORMATION",
                "guidField": "ACCOUNTGUID",
                "linkAttribute": "GWOP_Customer",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "DATETIME",
                "name": "START_DT"
              },
              {
                "type": "STRING",
                "name": "STATUS"
              },
              {
                "type": "STRING",
                "name": "PHASE"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "PERSONINCHARGE"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "customType": "CURRENCY",
                "name": "CURRENCYNAT"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "CURRENCY",
                "customType": "MONEY",
                "name": "RELATIVEAMOUNT"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "ATTORNEYINFACT"
              },
              {
                "type": "GGUID",
                "name": "ACCOUNTGUID"
              },
              {
                "type": "TEXT",
                "name": "NOTES2",
                "timestampAllowed": true,
                "userSensitive": false
              },
              {
                "type": "STRING",
                "name": "PRODUCTPOSITIONSDISPLAY"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "CURRENCY",
                "customType": "MONEY",
                "name": "OPPTOTALAMOUNT"
              },
              {
                "type": "INT",
                "name": "PROBABILITY"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "STRING",
                "name": "SOURCE"
              },
              {
                "type": "STRING",
                "name": "ACCOUNTINFORMATION"
              },
              {
                "type": "DECIMAL",
                "name": "REBATE"
              },
              {
                "type": "DATETIME",
                "name": "END_DT"
              }
            ],
            "constraints": [
              {
                "type": "dateTimeInterval",
                "start": "START_DT",
                "end": "END_DT"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "STATUS"
            }
          },
          {
            "id": "smartdesign.base.GWOPPORTUNITYPOS",
            "fields": [
              {
                "type": "STRING",
                "name": "PRODUCTDESCRIPTION",
                "timestampAllowed": true,
                "userSensitive": false
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "GGUID",
                "name": "OPPORTUNITYGUID"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "STRING",
                "name": "QUANTITY_UNIT"
              },
              {
                "type": "TEXT",
                "name": "POSITIONNOTES",
                "timestampAllowed": true,
                "userSensitive": false
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "DISCOUNTINFO"
              },
              {
                "type": "DOUBLE",
                "name": "QUANTITY"
              },
              {
                "type": "CURRENCY",
                "customType": "MONEY",
                "name": "TOTALPRICE"
              },
              {
                "type": "GGUID",
                "name": "PRODUCTGUID"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "STRING",
                "name": "PRODUCTNAME"
              },
              {
                "type": "STRING",
                "name": "POSITION"
              },
              {
                "type": "CURRENCY",
                "customType": "MONEY",
                "name": "ADJUSTEDPRICE"
              },
              {
                "type": "STRING",
                "name": "QUANTITYINFO"
              },
              {
                "type": "STRING",
                "name": "PRODUCTNUMBER"
              },
              {
                "type": "STRING",
                "name": "TOTALPRICEINFO"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "DECIMAL",
                "name": "REBATE"
              },
              {
                "type": "STRING",
                "customType": "CURRENCY",
                "name": "CURRENCYNAT"
              },
              {
                "type": "CURRENCY",
                "customType": "MONEY",
                "name": "PRODUCTPRICE"
              }
            ],
            "summary": {
              "caption": "INSERTUSER",
              "description": "INSERTTIMESTAMP"
            }
          },
          {
            "id": "smartdesign.base.GWPHONECALL",
            "fields": [
              {
                "type": "INT",
                "name": "URGENCY"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "STATE"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "DATETIME",
                "name": "START_DT"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "PHONECALLUSER"
              },
              {
                "type": "STRING",
                "name": "STATUS"
              },
              {
                "type": "STRING",
                "name": "DESCRIPTION"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "LINK",
                "name": "CUSTOMERSHORTINFO_LINK",
                "backingField": "CUSTOMERSHORTINFO",
                "linkAttribute": "PHC_Partner",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "BOOLEAN",
                "name": "ISTEMPLATE"
              },
              {
                "type": "BOOLEAN",
                "name": "NOTES2OVERFLOW"
              },
              {
                "type": "STRING",
                "name": "DIRECTION"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "CUSTOMSUGGESTVALUES",
                "name": "DIALLEDNUMBERSUGGESTIONS"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "STRING",
                "name": "DIALLEDNUMBER",
                "suggestionsProvidedBy": "DIALLEDNUMBERSUGGESTIONS",
                "timestampAllowed": false,
                "userSensitive": false
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "DATETIME",
                "name": "DUETODATE"
              },
              {
                "type": "BOOLEAN",
                "name": "ISDELETED"
              },
              {
                "type": "STRING",
                "name": "CUSTOMERSHORTINFO"
              },
              {
                "type": "DATETIME",
                "name": "END_DT"
              },
              {
                "type": "DOUBLE",
                "name": "DURATION"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "DESCRIPTION"
            }
          },
          {
            "id": "smartdesign.base.OPENITEMS",
            "fields": [
              {
                "type": "LINK",
                "name": "OFFENEPOSTEN_APP_ADDRESSE_INCVREC",
                "caption": "Rechnungsempfänger",
                "linkAttribute": "OPENITM_INVCREC",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "DIFFERENT_ZIP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "DUE_DATE"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "DIFFERENT_STREET"
              },
              {
                "type": "STRING",
                "name": "INVOICE_RECIPIENT"
              },
              {
                "type": "STRING",
                "name": "DIFFERENT_RECIPIENT"
              },
              {
                "type": "INT",
                "name": "INGYMNET"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "STRING",
                "name": "SEPAMANDATE_LINK"
              },
              {
                "type": "DATETIME",
                "name": "INVOICE_DATE"
              },
              {
                "type": "STRING",
                "name": "DIFFERENT_TOWN"
              },
              {
                "type": "TEXT",
                "name": "POSITIONS"
              },
              {
                "type": "LINK",
                "name": "DTB_OFFENEPOSTEN_APP_SEPAMANDATE",
                "caption": "Kontoinhaber",
                "linkAttribute": "OPNITM2SEPA",
                "targetObjectType": "smartdesign.base.SEPAMANDATE"
              },
              {
                "type": "CURRENCY",
                "name": "AMOUNT"
              },
              {
                "type": "LINK",
                "name": "OFFENEPOSTEN_APP_ADDRESSE_MAILREC",
                "caption": "Besteller",
                "linkAttribute": "OPENITM_MAILREC",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "BUYER"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ORDER_STATUS"
              }
            ],
            "summary": {
              "caption": "INVOICE_RECIPIENT",
              "description": "AMOUNT"
            }
          },
          {
            "id": "smartdesign.base.PROJECT",
            "fields": [
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "DATETIME",
                "name": "STARTDATE"
              },
              {
                "type": "STRING",
                "name": "PROJECTDIRECTORY"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "PROJECTDEPUTY"
              },
              {
                "type": "STRING",
                "name": "PRJSTATUS"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "INT",
                "name": "EDITPERMISSION"
              },
              {
                "type": "STRING",
                "name": "NOTES"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "STRING",
                "customType": "CURRENCY",
                "name": "CURRENCYNAT"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "INT",
                "name": "GWNOTESFORMAT"
              },
              {
                "type": "DECIMAL",
                "customType": "MONEY",
                "name": "CALCULATEDCOSTS"
              },
              {
                "type": "DECIMAL",
                "customType": "MONEY",
                "name": "BUDGET"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "STRING",
                "name": "PRJNUMBER"
              },
              {
                "type": "DATETIME",
                "name": "PLAN_START_DT"
              },
              {
                "type": "INT",
                "name": "OID"
              },
              {
                "type": "TEXT",
                "name": "NOTES2",
                "timestampAllowed": true,
                "userSensitive": false
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "DATETIME",
                "name": "ENDDATE"
              },
              {
                "type": "DATETIME",
                "name": "PLAN_END_DT"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "DATETIME",
                "name": "ENDDATE_PLANNED"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "PROJECTOWNER"
              },
              {
                "type": "DATETIME",
                "name": "CALCULATEDTIMESTAMP"
              },
              {
                "type": "DECIMAL",
                "customType": "MONEY",
                "name": "CALCULATEDBILLINGS"
              }
            ],
            "constraints": [
              {
                "type": "dateTimeInterval",
                "start": "STARTDATE",
                "end": "ENDDATE"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "PRJNUMBER"
            }
          },
          {
            "id": "smartdesign.base.SEPAMANDATE",
            "fields": [
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "STRING",
                "name": "IBAN"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "INT",
                "name": "ACCOUNT_ID"
              },
              {
                "type": "LINK",
                "name": "SEPAMANDAT_APP_DESIGNER_LINK_FIELD",
                "caption": "",
                "linkAttribute": "SEPA_GRANTER",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "STRING",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "DATETIME",
                "name": "SEPAVALIDFROM"
              },
              {
                "type": "DATETIME",
                "name": "SEPAVALIDUNTIL"
              },
              {
                "type": "STRING",
                "name": "SEPABANKACCOUNTHOLDER"
              },
              {
                "type": "STRING",
                "name": "SEPA_TYPE"
              },
              {
                "type": "DATETIME",
                "name": "SEPA_USED"
              },
              {
                "type": "STRING",
                "name": "SEPA_NUMBER"
              },
              {
                "type": "DATETIME",
                "name": "SEPAAGREEMENTDATE"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "BOOLEAN",
                "name": "SEPAAGREEMENT"
              },
              {
                "type": "STRING",
                "name": "SEPA_STATUS"
              }
            ],
            "summary": {
              "caption": "SEPABANKACCOUNTHOLDER",
              "description": "IBAN"
            }
          },
          {
            "id": "smartdesign.base.STARTINGLICENCE",
            "fields": [
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "LICENCEVALIDUNTIL"
              },
              {
                "type": "BOOLEAN",
                "name": "LOCKED"
              },
              {
                "type": "DATETIME",
                "name": "LICENCEVALIDFROM"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "LINK",
                "name": "STARTINGLICENCE_APP_DISCIPLINE",
                "caption": "Zugehörige Sportart",
                "linkAttribute": "DISCIPLINE_LIC",
                "targetObjectType": "smartdesign.base.DISCIPLINE"
              },
              {
                "type": "LINK",
                "name": "STARTINGLICENCE_APP_GYMNAST",
                "caption": "Zugehörige Person",
                "linkAttribute": "LICENCE_GYMNAST",
                "targetObjectType": "smartdesign.base.ADDRESS"
              },
              {
                "type": "BOOLEAN",
                "name": "LOCKED_FIXEDPLAYED"
              },
              {
                "type": "TEXT",
                "name": "NOTES2"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "STRING",
                "name": "LICENCESPORTTYPE"
              },
              {
                "type": "STRING",
                "name": "LICENCESTATE"
              },
              {
                "type": "LINK",
                "name": "STARTINGLICENCE_APP_ANNUALSTAMP",
                "caption": "",
                "linkAttribute": "ANNUALST_LIC",
                "targetObjectType": "smartdesign.base.ANNUALSTAMP"
              },
              {
                "type": "STRING",
                "name": "CORRESPONDING_GYMNAST"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "LINK",
                "name": "STARTINGLICENCE_APP_CLUB",
                "caption": "",
                "linkAttribute": "LICENCE_CLUB",
                "targetObjectType": "smartdesign.base.ADDRESS"
              }
            ],
            "summary": {
              "caption": "CORRESPONDING_GYMNAST",
              "description": "LICENCESPORTTYPE"
            }
          },
          {
            "id": "smartdesign.base.TODO",
            "fields": [
              {
                "type": "STRING",
                "name": "UPDATEUSER"
              },
              {
                "type": "DATETIME",
                "name": "UPDATETIMESTAMP"
              },
              {
                "type": "STRING",
                "name": "KEYWORD"
              },
              {
                "type": "STRING",
                "name": "PRIORITY"
              },
              {
                "type": "STRING",
                "name": "INSERTUSER"
              },
              {
                "type": "INT",
                "name": "FOREIGNEDITPERMISSION"
              },
              {
                "type": "DATETIME",
                "name": "START_DT"
              },
              {
                "type": "STRING",
                "name": "CATEGORY"
              },
              {
                "type": "STRING",
                "customType": "USER",
                "name": "PERSONINCHARGE"
              },
              {
                "type": "GGUID",
                "name": "GGUID"
              },
              {
                "type": "STRING",
                "name": "ICON"
              },
              {
                "type": "DATETIME",
                "name": "INSERTTIMESTAMP"
              },
              {
                "type": "BOOLEAN",
                "name": "ISTEMPLATE"
              },
              {
                "type": "BOOLEAN",
                "name": "NOTES2OVERFLOW"
              },
              {
                "type": "STRING",
                "name": "VIEWICON"
              },
              {
                "type": "STRING",
                "name": "CLASSIFICATION"
              },
              {
                "type": "TEXT",
                "name": "NOTES2",
                "timestampAllowed": true,
                "userSensitive": false
              },
              {
                "type": "DATETIME",
                "name": "START_DT_ORIG"
              },
              {
                "type": "DATETIME",
                "name": "END_DT_ORIG"
              },
              {
                "type": "STRING",
                "name": "OWNERNAME"
              },
              {
                "type": "GGUID",
                "name": "OWNERGUID"
              },
              {
                "type": "BOOLEAN",
                "name": "ISDELETED"
              },
              {
                "type": "STRING",
                "name": "WORKINGSTATUS"
              },
              {
                "type": "INT",
                "name": "WORKINGPERCENT"
              },
              {
                "type": "DOUBLE",
                "name": "WORKINGHOURREAL"
              },
              {
                "type": "DATETIME",
                "name": "END_DT"
              },
              {
                "type": "BOOLEAN",
                "name": "SINGLE_MODIFIED"
              },
              {
                "type": "DOUBLE",
                "name": "DURATION"
              }
            ],
            "constraints": [
              {
                "type": "dateTimeInterval",
                "start": "START_DT",
                "end": "END_DT"
              }
            ],
            "summary": {
              "caption": "KEYWORD",
              "description": "WORKINGSTATUS"
            }
          }
        ],
        "forms": [
          {
            "id": "smartdesign.base.Empty",
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "NONE",
              "title": "",
              "actionFavorites": [],
              "viewFavorites": [],
              "actionDefaults": [],
              "viewActionDefaults": []
            },
            "states": [
              {
                "mode": "read",
                "height": "CONTAINER",
                "width": "UNDEFINED",
                "padding": "DEFAULT",
                "content": {
                  "type": "smartdesign.base.HorizontalLayout",
                  "name": "contentLayout"
                }
              }
            ]
          },
          {
            "id": "smartdesign.base.List",
            "context": [
              {
                "imported": true,
                "primary": true,
                "optional": false,
                "name": "md",
                "type": "MassData"
              }
            ],
            "header": {
              "type": "smartdesign.base.DefaultHeader",
              "contributionType": "NONE",
              "actionFavorites": [],
              "viewFavorites": [],
              "actionDefaults": [],
              "viewActionDefaults": []
            },
            "states": [
              {
                "mode": "read",
                "height": "CONTAINER",
                "width": "UNDEFINED",
                "padding": "DEFAULT",
                "content": {
                  "type": "smartdesign.base.List",
                  "name": "list",
                  "hideNoEntriesFoundCaption": false,
                  "datasource": "md",
                  "entryAction": {
                    "intent": "smartdesign.base.OpenRecord"
                  }
                }
              }
            ]
          },
          {
            "id": "smartdesign.base.Table",
            "context": [
              {
                "imported": true,
                "primary": true,
                "optional": false,
                "name": "tableMD",
                "type": "MassData"
              }
            ],
            "states": [
              {
                "mode": "read",
                "height": "CONTAINER",
                "width": "UNDEFINED",
                "padding": "DEFAULT",
                "header": {
                  "type": "smartdesign.base.DefaultHeader",
                  "contributionType": "ALL",
                  "actions": [
                    {
                      "command": "smartdesign.base.delete_multiple_records",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "DataObjectMassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.edit_tags",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.export_as_csv",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "group": "smartdesign.base.linkWithMenu",
                      "contributionPointId": "linkWithMenu",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.annualstamp.linkToAnnualstamp",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.competition.linkToCompetition",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.discipline.linkToDiscipline",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.offeneposten.linkToOffeneposten",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.sepamandat.linkToSepamandat",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "dtb.startinglicence.linkToStartinglicence",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.address.linkToContact",
                      "parentContributionPointId": "linkWithMenu",
                      "context": {
                        "type": "DataObject",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.print_list",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.unlink",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "DossierMassData"
                      }
                    },
                    {
                      "command": "smartdesign.base.unlink",
                      "parentContributionPointId": "actionMenu",
                      "context": {
                        "type": "LinkMassData",
                        "source": "*",
                        "target": "*"
                      }
                    }
                  ],
                  "viewActions": [
                    {
                      "command": "smartdesign.base.edit_view_columns",
                      "parentContributionPointId": "viewMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "group": "smartdesign.base.viewsMenu",
                      "contributionPointId": "viewsMenu",
                      "parentContributionPointId": "viewMenu",
                      "context": {
                        "type": "DataObjectMassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.save_view_with_dialog",
                      "parentContributionPointId": "viewsMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.save_view_as",
                      "parentContributionPointId": "viewsMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    },
                    {
                      "command": "smartdesign.base.delete_view",
                      "parentContributionPointId": "viewsMenu",
                      "context": {
                        "type": "MassData",
                        "objecttype": "*"
                      }
                    }
                  ],
                  "actionFavorites": [],
                  "viewFavorites": [],
                  "actionDefaults": [
                    {
                      "command": "smartdesign.base.save_view"
                    },
                    {
                      "group": "smartdesign.base.newMenu",
                      "contributionPointId": "newMenu"
                    }
                  ],
                  "viewActionDefaults": [
                    {
                      "command": "smartdesign.base.table_switch_to_selection"
                    },
                    {
                      "command": "smartdesign.base.table_switch_to_navigation"
                    },
                    {
                      "command": "searchfield_placeholder"
                    }
                  ]
                },
                "content": {
                  "type": "smartdesign.base.Table",
                  "name": "bigTable",
                  "datasource": "tableMD"
                }
              }
            ]
          }
        ],
        "translations": [
          {
            "id": "smartdesign.base.ADDITIONAL_INFORMATION",
            "value": "Additional information"
          },
          {
            "id": "smartdesign.base.ANNUALSTAMP_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": ""
          },
          {
            "id": "smartdesign.base.ANNUALSTAMP_APP_DESIGNER_LINK_FIELD_CAPTION_2",
            "value": ""
          },
          {
            "id": "smartdesign.base.ANNUALSTAMP_OPENITEMS_LINK",
            "value": "Zugehörige Jahresmarke/Gebühren"
          },
          {
            "id": "smartdesign.base.CATCHPHRASES",
            "value": "Tags"
          },
          {
            "id": "smartdesign.base.CMD_LBL_APPEAL_FOR_RIGHTS",
            "value": "Request write rights"
          },
          {
            "id": "smartdesign.base.CMD_LBL_APPLY_LINK",
            "value": "Apply"
          },
          {
            "id": "smartdesign.base.CMD_LBL_CANCEL",
            "value": "Cancel"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DELETE",
            "value": "Delete"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DELETE_VIEW",
            "value": "Delete view"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DELETE_VIEW_INGROUP",
            "value": "Delete"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DOCUMENT_CHECKIN",
            "value": "Save changes"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DOCUMENT_EDIT",
            "value": "Edit"
          },
          {
            "id": "smartdesign.base.CMD_LBL_DOCUMENT_VIEW",
            "value": "Display"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EDIT",
            "value": "Edit"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EDIT_PRIMARY_LINKS",
            "value": "Edit parent elements"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EDIT_VIEW",
            "value": "Edit view"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EDIT_VIEW_COLUMNS",
            "value": "Select columns"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EMAIL_TO_PARTICIPANTS",
            "value": "Send e-mail to participants"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EMAIL_TO_PERMISSIONSOWNER",
            "value": "Send e-mail to authorized persons"
          },
          {
            "id": "smartdesign.base.CMD_LBL_EXPORT",
            "value": "Export"
          },
          {
            "id": "smartdesign.base.CMD_LBL_IMPORT",
            "value": "Import data"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NAVIGATE_TO_NEXT_ASSISTANT_PAGE",
            "value": "Next"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NAVIGATE_TO_PREV_ASSISTANT_PAGE",
            "value": "Previous"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NEW",
            "value": "New"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NEW_ARCHIVE_DOCUMENT",
            "value": "New archive document"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NEW_CONTACT_PERSON",
            "value": "Create contact person"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NEW_INGROUP",
            "value": "New"
          },
          {
            "id": "smartdesign.base.CMD_LBL_NEW_MEMO_DOCUMENT",
            "value": "Create short note"
          },
          {
            "id": "smartdesign.base.CMD_LBL_OPEN_FILTER_DIALOG",
            "value": "Filter"
          },
          {
            "id": "smartdesign.base.CMD_LBL_OPEN_REPORT_IN_POPUP",
            "value": "Open in new window"
          },
          {
            "id": "smartdesign.base.CMD_LBL_PRINT",
            "value": "Print"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE",
            "value": "Save"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE_VIEW",
            "value": "Save changes"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE_VIEW_AS",
            "value": "Save view as"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE_VIEW_AS_INGROUP",
            "value": "Save as"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE_VIEW_WITH_DIALOG",
            "value": "View properties"
          },
          {
            "id": "smartdesign.base.CMD_LBL_SAVE_VIEW_WITH_DIALOG_INGROUP",
            "value": "Properties"
          },
          {
            "id": "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_NAVIGATION",
            "value": "Close"
          },
          {
            "id": "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_NAVIGATION_TOOLTIP",
            "value": "Close selection"
          },
          {
            "id": "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_SELECTION",
            "value": "Select"
          },
          {
            "id": "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_SELECTION_TOOLTIP",
            "value": "Select data records"
          },
          {
            "id": "smartdesign.base.CMD_LBL_TAG",
            "value": "Edit tags"
          },
          {
            "id": "smartdesign.base.CMD_LBL_UNDO_CHECKOUT",
            "value": "Discard changes"
          },
          {
            "id": "smartdesign.base.CMD_LBL_UNLINK",
            "value": "Remove link"
          },
          {
            "id": "smartdesign.base.CONTEXT_MENU",
            "value": "Context menu"
          },
          {
            "id": "smartdesign.base.CREATE_LINK",
            "value": "Create link"
          },
          {
            "id": "smartdesign.base.DELETE_LINK",
            "value": "Remove link"
          },
          {
            "id": "smartdesign.base.DOSSIER",
            "value": "Dossier"
          },
          {
            "id": "smartdesign.base.DTB_OFFENEPOSTEN_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": ""
          },
          {
            "id": "smartdesign.base.DTB_STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": "Discipline"
          },
          {
            "id": "smartdesign.base.EMPTY_STRING",
            "value": ""
          },
          {
            "id": "smartdesign.base.EXTENDED_LIST",
            "value": "Extended list"
          },
          {
            "id": "smartdesign.base.FIELDS_ADMINISTRATIVE",
            "value": "Zusätzliche Felder für geschultes Personal"
          },
          {
            "id": "smartdesign.base.GENERAL",
            "value": "General"
          },
          {
            "id": "smartdesign.base.GROUP_ACTION_MENU",
            "value": "Action menu"
          },
          {
            "id": "smartdesign.base.GROUP_VIEW_MENU",
            "value": "View menu"
          },
          {
            "id": "smartdesign.base.INFORMATION",
            "value": "Info"
          },
          {
            "id": "smartdesign.base.KEYWORD",
            "value": "Subject"
          },
          {
            "id": "smartdesign.base.LBL_LINKS_TOOLBAR_BUTTON",
            "value": "Link with..."
          },
          {
            "id": "smartdesign.base.LINKLISTGROUPEDBYROLES_CAPTION_0",
            "value": "Zugehörige Gebühren"
          },
          {
            "id": "smartdesign.base.LINKS",
            "value": "Links"
          },
          {
            "id": "smartdesign.base.LINK_ANNUALSTAMP_GYMNAST",
            "value": "Zugehörige Person"
          },
          {
            "id": "smartdesign.base.LINK_COMPETITION_DISCIPLINE",
            "value": "Zugehörige Disziplin"
          },
          {
            "id": "smartdesign.base.LINK_OPENITMS_ADDRESS_INVCREC",
            "value": "Rechnungsempfänger"
          },
          {
            "id": "smartdesign.base.LINK_OPENITMS_ADRESS_OPENITM2SEPA",
            "value": "Kontoinhaber"
          },
          {
            "id": "smartdesign.base.LINK_SEPAMANDAT_ADDRESS_SEPA_GRANTER",
            "value": ""
          },
          {
            "id": "smartdesign.base.LINK_STARTINGLICENCE_ADDRESS_GYNMAST",
            "value": "Zugehörige Person"
          },
          {
            "id": "smartdesign.base.LINK_STARTINGLICENCE_DISCIPLINE_SPORTTYPE",
            "value": "Zugehörige Sportart"
          },
          {
            "id": "smartdesign.base.LINK_WITH_MENU_CAPTION",
            "value": "Link with"
          },
          {
            "id": "smartdesign.base.LINK_WITH_MENU_NEW_CAPTION",
            "value": "Create"
          },
          {
            "id": "smartdesign.base.LIST_NO_ITEMS",
            "value": "No data records exist"
          },
          {
            "id": "smartdesign.base.MENU_DUPLICATE",
            "value": "Duplicate"
          },
          {
            "id": "smartdesign.base.MENU_EDIT",
            "value": "Edit"
          },
          {
            "id": "smartdesign.base.MENU_NEW_TAB",
            "value": "New tab"
          },
          {
            "id": "smartdesign.base.MENU_SHOW_DOSSIER",
            "value": "Dossier"
          },
          {
            "id": "smartdesign.base.MESSAGE_KNOWWHATYOUDO_COMPETITION",
            "value": "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
          },
          {
            "id": "smartdesign.base.NEW_FIELD_GROUP",
            "value": "New field group"
          },
          {
            "id": "smartdesign.base.NOTES",
            "value": "Notes"
          },
          {
            "id": "smartdesign.base.NO_RECIPIENTS_MESSAGE",
            "value": "No recipients"
          },
          {
            "id": "smartdesign.base.OFFENEPOSTEN_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": ""
          },
          {
            "id": "smartdesign.base.OPENITEMS_MAILRECEIVER",
            "value": "Besteller"
          },
          {
            "id": "smartdesign.base.OPENITM_INVCREC_LINK",
            "value": "Zugehörige Gebühren"
          },
          {
            "id": "smartdesign.base.OVERALL_ELEMENTS",
            "value": "Parent"
          },
          {
            "id": "smartdesign.base.PERMISSION_OWNERS",
            "value": "Authorized persons"
          },
          {
            "id": "smartdesign.base.PRIMARY_MENU_CAPTION",
            "value": "Action menu"
          },
          {
            "id": "smartdesign.base.RECENTLY_USED",
            "value": "Last opened"
          },
          {
            "id": "smartdesign.base.RECIPIENTS",
            "value": "Recipients"
          },
          {
            "id": "smartdesign.base.SEPA_GRANTER_LINK",
            "value": "Zugehöriges SEPA-Mandat"
          },
          {
            "id": "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": ""
          },
          {
            "id": "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_2",
            "value": ""
          },
          {
            "id": "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_3",
            "value": ""
          },
          {
            "id": "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_4",
            "value": ""
          },
          {
            "id": "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION",
            "value": ""
          },
          {
            "id": "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION_2",
            "value": ""
          },
          {
            "id": "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION_3",
            "value": ""
          },
          {
            "id": "smartdesign.base.TABLE_LEFT_TOOLBAR",
            "value": "View menu"
          },
          {
            "id": "smartdesign.base.TABLE_RIGHT_TOOLBAR",
            "value": "Action menu"
          },
          {
            "id": "smartdesign.base.TYPE_STATUS",
            "value": "Type/Status"
          },
          {
            "id": "smartdesign.base.VIEWS",
            "value": "Views"
          }
        ]
      }

    ]
  }];
