import { Layout } from '../../types/layout';

export const LAYOUT: Layout[] = [
  {
    "apps" : [ {
      "id" : "dtb.annualstamp",
      "standalone" : true,
      "name" : "Jahresmarken",
      "color" : "#3A85D1",
      "iconHash" : "264597b32dbed1f1a308d7bf878b585b85813b6c",
      "intents" : [ {
        "id" : "dtb.annualstamp.OpenLinkAnnualstampSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.annualstamp.Record"
        }, {
          "intent" : "dtb.annualstamp.OpenLinkAnnualstampSearch",
          "form" : "dtb.annualstamp.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.annualstamp.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.annualstamp.linkToAnnualstamp",
        "isGroup" : false,
        "label" : "Jahresmarke",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "ANNUALSTAMP",
          "searchIntent" : "dtb.annualstamp.OpenLinkAnnualstampSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.annualstamp.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.ANNUALSTAMP"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.ANNUALSTAMP"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Titel",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.annualstamp.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.ANNUALSTAMP"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddress",
          "type" : "LinkMassData",
          "linkAttributes" : [ "ANNUALST_CLUB" ],
          "sourceObjectType" : "smartdesign.base.ANNUALSTAMP",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddress2",
          "type" : "LinkMassData",
          "linkAttributes" : [ "ANNUALST_GYMN" ],
          "sourceObjectType" : "smartdesign.base.ANNUALSTAMP",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListStartinglicence",
          "type" : "LinkMassData",
          "linkAttributes" : [ "ANNUALST_LIC" ],
          "sourceObjectType" : "smartdesign.base.ANNUALSTAMP",
          "targetObjectType" : "smartdesign.base.STARTINGLICENCE",
          "query" : { }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Jahresmarke",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtStartrechtTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPTYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CORRESPONDING_GYMNAST"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPVALIDFROM"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPVALIDUNTIL"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "finanzen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPFEE"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Finanzielle Informationen"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "verknuepfungen",
              "children" : [ {
                "type" : "smartdesign.base.LinkField",
                "ref" : "ANNUALSTAMP_CLUB_LINKFIELD"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Verknüpfungen"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "linkstartrechte",
              "caption" : "Verknüpfte Startrechte",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListStartinglicence",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "paymentinfo",
              "children" : [ {
                "type" : "smartdesign.base.LinkField",
                "ref" : "ANNUALSTAMP_OPENITEMS_LINKFIELD"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zugehörige Gebühren"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Anmerkungen"
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtStartrechtTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPTYPE"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "ANNUALSTAMP_GYMNAST_LINKFIELD",
                  "caption" : "Zugehörige Person"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "finanzen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "STAMPFEE"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Finanzielle Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "verknuepfungen",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "ANNUALSTAMP_CLUB_LINKFIELD"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Verknüpfungen"
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "linkstartrechte",
                "datasource" : "linkListStartinglicence",
                "emptyListMessage" : "No data records exist",
                "caption" : "Verknüpfte Startrechte",
                "deleteMessage" : "Remove link",
                "addMessage" : "Create link"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Anmerkungen"
            }, {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtFuerAdministratoren",
              "visibility" : {
                "type" : "script",
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
              },
              "level" : "WARN",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_KNOWWHATYOUDO.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "administrativeFelder",
              "visibility" : {
                "type" : "script",
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
              },
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "STAMPVALIDFROM"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "STAMPVALIDUNTIL"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zusätzliche Felder für geschultes Personal"
            } ]
          }
        } ]
      }, {
        "id" : "dtb.annualstamp.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "CORRESPONDING_GYMNAST", "STAMPTYPE", "CORRESPONDING_CLUB", "STAMPVALIDFROM", "STAMPVALIDUNTIL" ]
          },
          "objectType" : "smartdesign.base.ANNUALSTAMP"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "CORRESPONDING_GYMNAST", "STAMPTYPE", "CORRESPONDING_CLUB", "STAMPVALIDFROM", "STAMPVALIDUNTIL" ]
          },
          "objectType" : "smartdesign.base.ANNUALSTAMP"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Jahresmarken",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ANNUALSTAMP"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchListListeErweiterteSuche",
              "caption" : "Alle Jahresmarken",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsedListeZuletztVerwendet",
              "caption" : "Zuletzt Verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "Annualstamp",
              "objectTypeViews" : "smartdesign.base.ANNUALSTAMP",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.annualstamp.ALLGEMEIN",
        "value" : "Allgemeine Informationen"
      }, {
        "id" : "dtb.annualstamp.ANNUALSTAMP_NOTES",
        "value" : "Anmerkungen"
      }, {
        "id" : "dtb.annualstamp.ANNUALSTAMP_SINGULAR",
        "value" : "Jahresmarke"
      }, {
        "id" : "dtb.annualstamp.APP_NAME",
        "value" : "Jahresmarken"
      }, {
        "id" : "dtb.annualstamp.COMPETITION_CORRESPONDING_GYMNAST",
        "value" : "Zugehörige Person"
      }, {
        "id" : "dtb.annualstamp.DEFAULTTITEL",
        "value" : "Titel"
      }, {
        "id" : "dtb.annualstamp.FIEDLS_ADMINISTRATIVE",
        "value" : "Zusätzliche Felder für geschultes Personal"
      }, {
        "id" : "dtb.annualstamp.FINANCES",
        "value" : "Finanzielle Informationen"
      }, {
        "id" : "dtb.annualstamp.HEADERNEU",
        "value" : "Jahresmarke"
      }, {
        "id" : "dtb.annualstamp.LINKEDAPPS",
        "value" : "Verknüpfungen"
      }, {
        "id" : "dtb.annualstamp.LINK_ANNUALSTAMP_OPENITEMS",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "dtb.annualstamp.LINK_STARTINGLICENCE",
        "value" : "Verknüpfte Startrechte"
      }, {
        "id" : "dtb.annualstamp.LISTCAPTION",
        "value" : "Zuletzt Verwendet"
      }, {
        "id" : "dtb.annualstamp.MESSAGE_ADDRESS_IN_GYMNET",
        "value" : "Adressen für Verbänden können nur in GymNet geändert werden. Die Änderungen werden automatisch in das TURNPORTAL bzw. die SmartWe übertragen."
      }, {
        "id" : "dtb.annualstamp.MESSAGE_ANNUALSTAMP_NOT_IN_SMARTWE",
        "value" : "Jahresmarken können nicht über die SmartWe erstellt werden. Diese werden im TURNPORTAL beim Beantragen der Startrechte generiert."
      }, {
        "id" : "dtb.annualstamp.MESSAGE_KNOWWHATYOUDO",
        "value" : "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
      }, {
        "id" : "dtb.annualstamp.SEARCH",
        "value" : "Alle Jahresmarken"
      }, {
        "id" : "dtb.annualstamp.SEARCHTITEL",
        "value" : "Jahresmarken"
      } ]
    }, {
      "id" : "dtb.competition",
      "standalone" : true,
      "name" : "Wettkämpfe",
      "color" : "#FFCF58",
      "iconHash" : "2ae3806d9a4b7c26be3ea9a7b10dcd05871fdf4d",
      "intents" : [ {
        "id" : "dtb.competition.OpenLinkCompetitionSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.competition.Record"
        }, {
          "intent" : "dtb.competition.OpenLinkCompetitionSearch",
          "form" : "dtb.competition.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.competition.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.competition.linkToCompetition",
        "isGroup" : false,
        "label" : "Wettkampf",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "COMPETITION",
          "searchIntent" : "dtb.competition.OpenLinkCompetitionSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.competition.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.COMPETITION"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.COMPETITION"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Wettkampf",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.competition.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.COMPETITION"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddress",
          "type" : "LinkMassData",
          "linkAttributes" : [ "PARTICIP_GYMN" ],
          "sourceObjectType" : "smartdesign.base.COMPETITION",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Wettkampf",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtWettkaempfeTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_COMPETITION_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "allgemein",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITION_NAME"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITION_DATE"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITIONSPORTTYPE"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "GENDER"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_FROM"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_UNTIL"
              } ],
              "showFieldCaptions" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "turner",
              "caption" : "Zugehörige Person",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListAddress",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Anmerkungen"
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "minimumColumnWidth" : 400
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtWettkaempfeTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_COMPETITION_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "allgemein",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITION_NAME"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITION_DATE",
                "readonly" : {
                  "type" : "script",
                  "inputs" : { },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "COMPETITION_DISCIPLINE_LINKFIELD",
                "readonly" : {
                  "type" : "script",
                  "inputs" : { },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "GENDER",
                "readonly" : {
                  "type" : "script",
                  "inputs" : { },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_FROM",
                "readonly" : {
                  "type" : "script",
                  "inputs" : { },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_UNTIL",
                "readonly" : {
                  "type" : "script",
                  "inputs" : { },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                }
              } ],
              "showFieldCaptions" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "turner",
                "datasource" : "linkListAddress",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Person",
                "deleteMessage" : "Remove link",
                "addMessage" : "Create link"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Anmerkungen"
            }, {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtFuerAdministratoren",
              "level" : "WARN",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_KNOWWHATYOUDO_COMPETITION.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "administrativeFelder",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPETITION_DATE"
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "COMPETITION_DISCIPLINE_LINKFIELD"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "GENDER"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_FROM"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "YEAR_UNTIL"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zusätzliche Felder für geschultes Personal"
            } ]
          }
        } ]
      }, {
        "id" : "dtb.competition.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "COMPETITION_NAME", "COMPETITION_DATE", "COMPETITIONSPORTTYPE", "GENDER", "YEAR_FROM", "YEAR_UNTIL" ]
          },
          "objectType" : "smartdesign.base.COMPETITION"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "COMPETITION_NAME", "COMPETITION_DATE", "COMPETITIONSPORTTYPE", "GENDER", "YEAR_FROM", "YEAR_UNTIL" ]
          },
          "objectType" : "smartdesign.base.COMPETITION"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Wettkämpfe",
          "actions" : [ {
            "command" : "smartdesign.base.delete_multiple_records",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.edit_tags",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.export_as_csv",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print_list",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ {
            "command" : "smartdesign.base.edit_view_columns",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.viewsMenu",
            "contributionPointId" : "viewsMenu",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_with_dialog",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_as",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete_view",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "COMPETITION"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchList",
              "caption" : "Wettkämpfe",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Zuletzt Verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "startinglicenceViews",
              "objectTypeViews" : "smartdesign.base.COMPETITION",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.competition.APP_NAME",
        "value" : "Wettkämpfe"
      }, {
        "id" : "dtb.competition.COMPETITION_NOTES",
        "value" : "Anmerkungen"
      }, {
        "id" : "dtb.competition.COMPETITION_SINGULAR",
        "value" : "Wettkampf"
      }, {
        "id" : "dtb.competition.DEFAULTTITEL",
        "value" : "Wettkampf"
      }, {
        "id" : "dtb.competition.EMBEDDED_LIST",
        "value" : "Zuletzt Verwendet"
      }, {
        "id" : "dtb.competition.HEADER",
        "value" : "Neuer Wettkampf"
      }, {
        "id" : "dtb.competition.HEADER_DETAILLIST",
        "value" : "Wettkampf"
      }, {
        "id" : "dtb.competition.LINKED_TURNER",
        "value" : "Zugehörige Person"
      }, {
        "id" : "dtb.competition.MESSAGE_COMPETITION_NOT_IN_SMARTWE",
        "value" : "Wettkämpfe werden über das TURNPORTAL von den Wettkampforganisatoren angelegt."
      }, {
        "id" : "dtb.competition.SEARCH_Titel",
        "value" : "Wettkämpfe"
      }, {
        "id" : "dtb.competition.TITEL",
        "value" : "Wettkämpfe"
      } ]
    }, {
      "id" : "dtb.discipline",
      "standalone" : true,
      "name" : "Sportarten",
      "color" : "#4AB2FF",
      "iconHash" : "32bb7ceb9297a63629edcb1d4d1f0faed0f44f97",
      "intents" : [ {
        "id" : "dtb.discipline.OpenLinkDisciplineSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.discipline.Record"
        }, {
          "intent" : "dtb.discipline.OpenLinkDisciplineSearch",
          "form" : "dtb.discipline.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.discipline.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.discipline.linkToDiscipline",
        "isGroup" : false,
        "label" : "Sportart",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "DISCIPLINE",
          "searchIntent" : "dtb.discipline.OpenLinkDisciplineSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.discipline.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.DISCIPLINE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.DISCIPLINE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Sportarten",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.discipline.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.DISCIPLINE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListDiscipline",
          "type" : "LinkMassData",
          "linkAttributes" : [ "EXCL_DISCIPLINE" ],
          "sourceObjectType" : "smartdesign.base.DISCIPLINE",
          "targetObjectType" : "smartdesign.base.DISCIPLINE",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddress",
          "type" : "LinkMassData",
          "linkAttributes" : [ "LTV_DISCIPLINE" ],
          "sourceObjectType" : "smartdesign.base.DISCIPLINE",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListStartinglicence",
          "type" : "LinkMassData",
          "linkAttributes" : [ "DISCIPLINE_LIC" ],
          "sourceObjectType" : "smartdesign.base.DISCIPLINE",
          "targetObjectType" : "smartdesign.base.STARTINGLICENCE",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListCompetition",
          "type" : "LinkMassData",
          "linkAttributes" : [ "COMPET_DISCIP" ],
          "sourceObjectType" : "smartdesign.base.DISCIPLINE",
          "targetObjectType" : "smartdesign.base.COMPETITION",
          "query" : { }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Sportart",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SPORTTYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DISCIPLINEMODE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DISCIPLINESTATE"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "notizen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Anmerkungen"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "linkdisziplin",
              "caption" : "Ausschließende Sportarten",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListDiscipline",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "linkadresse",
              "caption" : "Zugehörige LTVs",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListAddress",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "linkstartrecht",
              "caption" : "Genutze Startrechte",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListStartinglicence",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "competition",
              "caption" : "Ausgetragene/Auszutragende Wettkämpfe",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "linkListCompetition",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SPORTTYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DISCIPLINEMODE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DISCIPLINESTATE"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "notizen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Anmerkungen"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "linkdisziplin",
              "datasource" : "linkListDiscipline",
              "emptyListMessage" : "No data records exist",
              "caption" : "Ausschließende Sportarten",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "linkadresse",
              "datasource" : "linkListAddress",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehörige LTVs",
              "deleteMessage" : "Remove link",
              "addMessage" : "Füge einen Landesturnverband hinzu, in welchem die Disziplin gültig sein soll."
            } ]
          }
        } ]
      }, {
        "id" : "dtb.discipline.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "SPORTTYPE", "DISCIPLINEMODE", "DISCIPLINESTATE" ]
          },
          "objectType" : "smartdesign.base.DISCIPLINE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "SPORTTYPE", "DISCIPLINEMODE", "DISCIPLINESTATE" ]
          },
          "objectType" : "smartdesign.base.DISCIPLINE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Sportarten",
          "actions" : [ {
            "command" : "smartdesign.base.delete_multiple_records",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.edit_tags",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.export_as_csv",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print_list",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ {
            "command" : "smartdesign.base.edit_view_columns",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.viewsMenu",
            "contributionPointId" : "viewsMenu",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_with_dialog",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_as",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete_view",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "DISCIPLINE"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchList",
              "caption" : "Alle Sportarten",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Zuletzt Verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "Discipline",
              "objectTypeViews" : "smartdesign.base.DISCIPLINE",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.discipline.ALLGEMEIN",
        "value" : "Allgemeine Informationen"
      }, {
        "id" : "dtb.discipline.APP_NAME",
        "value" : "Sportarten"
      }, {
        "id" : "dtb.discipline.AUSSCHLIESENDEDISZIPLIN",
        "value" : "Ausschließende Sportarten"
      }, {
        "id" : "dtb.discipline.DEFAULTTITEL",
        "value" : "Sportarten"
      }, {
        "id" : "dtb.discipline.DISCIPLINE_NOTES",
        "value" : "Anmerkungen"
      }, {
        "id" : "dtb.discipline.DISCIPLINE_SINGULAR",
        "value" : "Sportart"
      }, {
        "id" : "dtb.discipline.HEADERNEU",
        "value" : "Sportart"
      }, {
        "id" : "dtb.discipline.LASTUSED",
        "value" : "Zuletzt Verwendet"
      }, {
        "id" : "dtb.discipline.LINK_STARTINGLICENCE",
        "value" : "Genutze Startrechte"
      }, {
        "id" : "dtb.discipline.LINK_TO_COMPETITION",
        "value" : "Ausgetragene/Auszutragende Wettkämpfe"
      }, {
        "id" : "dtb.discipline.MESSAGE_ADD_LTV",
        "value" : "Füge einen Landesturnverband hinzu, in welchem die Disziplin gültig sein soll."
      }, {
        "id" : "dtb.discipline.TITELFIRST",
        "value" : "Alle Sportarten"
      }, {
        "id" : "dtb.discipline.ZUGEHOERIGERLTV",
        "value" : "Zugehörige LTVs"
      } ]
    }, {
      "id" : "dtb.offeneposten",
      "standalone" : true,
      "name" : "Gebühren",
      "color" : "#4CB563",
      "iconHash" : "608e3d1fbfc77a2b21aafe0bd0405c7ed9121b50",
      "intents" : [ {
        "id" : "dtb.offeneposten.OpenLinkOffenepostenSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.offeneposten.Record"
        }, {
          "intent" : "dtb.offeneposten.OpenLinkOffenepostenSearch",
          "form" : "dtb.offeneposten.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.offeneposten.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.offeneposten.linkToOffeneposten",
        "isGroup" : false,
        "label" : "Gebühr",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "OPENITEMS",
          "searchIntent" : "dtb.offeneposten.OpenLinkOffenepostenSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.offeneposten.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.OPENITEMS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.OPENITEMS"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Gebühren",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.offeneposten.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.OPENITEMS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Gebühren",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "alreadyInGymnet",
              "visibility" : {
                "type" : "script",
                "inputs" : {
                  "do" : [ "INGYMNET" ]
                },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return $do.INGYMNET.get() >= 1;\r\n})();\r\n"
              },
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ALREADY_IN_GYMNET.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemeineInfos",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INGYMNET"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "BUYER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "ORDER_STATUS"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INVOICE_RECIPIENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_RECIPIENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_STREET"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_ZIP"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_TOWN"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "AMOUNT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INVOICE_DATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DUE_DATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "POSITIONS"
                } ],
                "showFieldCaptions" : true
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "verknuepfungen",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "OFFENEPOSTEN_APP_ADDRESSE_INCVREC"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "DTB_OFFENEPOSTEN_APP_SEPAMANDATE"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Verknüpfungen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "notizen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Notizen"
              } ],
              "minimumColumnWidth" : 400
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemeineInfos",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INGYMNET"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "BUYER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "ORDER_STATUS"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INVOICE_RECIPIENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_RECIPIENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_STREET"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_ZIP"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DIFFERENT_TOWN"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "AMOUNT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "INVOICE_DATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DUE_DATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "POSITIONS"
                } ],
                "showFieldCaptions" : true
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "verknuepfungen",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "OFFENEPOSTEN_APP_ADDRESSE_INCVREC"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "DTB_OFFENEPOSTEN_APP_SEPAMANDATE",
                  "readonly" : {
                    "type" : "script",
                    "inputs" : { },
                    "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                  }
                } ],
                "showFieldCaptions" : true,
                "caption" : "Verknüpfungen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "notizen",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Notizen"
              } ],
              "minimumColumnWidth" : 400
            } ]
          }
        } ]
      }, {
        "id" : "dtb.offeneposten.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "INVOICE_RECIPIENT", "INVOICE_DATE", "AMOUNT", "POSITIONS", "DIFFERENT_RECIPIENT", "DUE_DATE" ]
          },
          "objectType" : "smartdesign.base.OPENITEMS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "INVOICE_RECIPIENT", "INVOICE_DATE", "AMOUNT", "POSITIONS", "DIFFERENT_RECIPIENT", "DUE_DATE" ]
          },
          "objectType" : "smartdesign.base.OPENITEMS"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Gebühren",
          "actions" : [ {
            "command" : "smartdesign.base.delete_multiple_records",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.edit_tags",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.export_as_csv",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print_list",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ {
            "command" : "smartdesign.base.edit_view_columns",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.viewsMenu",
            "contributionPointId" : "viewsMenu",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_with_dialog",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_as",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete_view",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "OPENITEMS"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchList",
              "caption" : "Gebühren",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Zuletzt Verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "Offeneposten",
              "objectTypeViews" : "smartdesign.base.OPENITEMS",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.offeneposten.APP_NAME",
        "value" : "Gebühren"
      }, {
        "id" : "dtb.offeneposten.DEFAULTTITEL",
        "value" : "Gebühren"
      }, {
        "id" : "dtb.offeneposten.EMBEDDED_LIST_CAPTION",
        "value" : "Zuletzt Verwendet"
      }, {
        "id" : "dtb.offeneposten.HEADER",
        "value" : "Gebühren"
      }, {
        "id" : "dtb.offeneposten.HEADERNEU",
        "value" : "Gebühren"
      }, {
        "id" : "dtb.offeneposten.LINK_ADDRESS",
        "value" : "Verknüpfungen"
      }, {
        "id" : "dtb.offeneposten.MESSAGE_ALREADY_IN_GYMNET",
        "value" : "Diese Gebühren wurde bereits in GymNet abgerechnet."
      }, {
        "id" : "dtb.offeneposten.NOTES_OPENITEMS",
        "value" : "Notizen"
      }, {
        "id" : "dtb.offeneposten.OFFENEPOSTEN_SINGULAR",
        "value" : "Gebühr"
      }, {
        "id" : "dtb.offeneposten.SEARCHTITEL",
        "value" : "Gebühren"
      } ]
    }, {
      "id" : "dtb.sepamandat",
      "standalone" : true,
      "name" : "SEPA-Mandate",
      "color" : "#ADD154",
      "iconHash" : "5bc243f64d14d6d2e602dc06f0a629148a3d82d2",
      "intents" : [ {
        "id" : "dtb.sepamandat.OpenLinkSepamandatSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.sepamandat.Record"
        }, {
          "intent" : "dtb.sepamandat.OpenLinkSepamandatSearch",
          "form" : "dtb.sepamandat.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.sepamandat.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.sepamandat.linkToSepamandat",
        "isGroup" : false,
        "label" : "Sepa-Mandat",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "SEPAMANDATE",
          "searchIntent" : "dtb.sepamandat.OpenLinkSepamandatSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.sepamandat.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.SEPAMANDATE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.SEPAMANDATE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "SEPA-Mandat",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.sepamandat.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.SEPAMANDATE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListOpenitems",
          "type" : "LinkMassData",
          "linkAttributes" : [ "OPNITM2SEPA" ],
          "sourceObjectType" : "smartdesign.base.SEPAMANDATE",
          "targetObjectType" : "smartdesign.base.OPENITEMS",
          "query" : { }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "SEPA-Mandat",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtAenderungenInGymnet",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_CHANGEINGYMNET.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPABANKACCOUNTHOLDER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "IBAN"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_TYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_STATUS"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "lastschriftverfahren",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAVALIDFROM"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAVALIDUNTIL"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAAGREEMENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAAGREEMENTDATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_NUMBER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_USED"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Details zum SEPA-Mandat"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "linkadresse",
              "children" : [ {
                "type" : "smartdesign.base.LinkField",
                "ref" : "SEPAMANDAT_APP_DESIGNER_LINK_FIELD"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Verknüpfungen"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "linkedOpenItems",
              "datasource" : "linkListOpenitems",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehörige Gebühren",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Notizen"
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtAenderungenInGymnet",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_CHANGEINGYMNET.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPABANKACCOUNTHOLDER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "IBAN"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_TYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_STATUS"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "sepaLastschriftmandat",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAVALIDFROM"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAVALIDUNTIL"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_USED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAAGREEMENT"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPAAGREEMENTDATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "SEPA_NUMBER"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Details zum SEPA-Mandat"
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "linkedOpenItems",
                "datasource" : "linkListOpenitems",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Gebühren",
                "deleteMessage" : "Remove link",
                "addMessage" : "Create link"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notizen",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Notizen"
            } ]
          }
        } ]
      }, {
        "id" : "dtb.sepamandat.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "SEPABANKACCOUNTHOLDER", "IBAN", "SEPA_TYPE", "SEPAVALIDFROM", "SEPAVALIDUNTIL" ]
          },
          "objectType" : "smartdesign.base.SEPAMANDATE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "SEPABANKACCOUNTHOLDER", "IBAN", "SEPAVALIDFROM", "SEPAVALIDUNTIL", "SEPA_USED" ]
          },
          "objectType" : "smartdesign.base.SEPAMANDATE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "SEPA-Mandat",
          "actions" : [ {
            "command" : "smartdesign.base.delete_multiple_records",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.edit_tags",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.export_as_csv",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print_list",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ {
            "command" : "smartdesign.base.edit_view_columns",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.viewsMenu",
            "contributionPointId" : "viewsMenu",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_with_dialog",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_as",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete_view",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "SEPAMANDATE"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchList",
              "caption" : "SEPA-Mandat",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Zuletzt Verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "Sepamandat",
              "objectTypeViews" : "smartdesign.base.SEPAMANDATE",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.sepamandat.ALLGEMEIN",
        "value" : "Allgemeine Informationen"
      }, {
        "id" : "dtb.sepamandat.APP_NAME",
        "value" : "SEPA-Mandate"
      }, {
        "id" : "dtb.sepamandat.DEFAULTTITEL",
        "value" : "SEPA-Mandat"
      }, {
        "id" : "dtb.sepamandat.EMBEDDE_LIST_CAPTION",
        "value" : "Zuletzt Verwendet"
      }, {
        "id" : "dtb.sepamandat.HEADER",
        "value" : "SEPA-Mandat"
      }, {
        "id" : "dtb.sepamandat.HEADERNEU",
        "value" : "SEPA-Mandat"
      }, {
        "id" : "dtb.sepamandat.LASTSCHRIFTMANDAT",
        "value" : "Details zum SEPA-Mandat"
      }, {
        "id" : "dtb.sepamandat.LINKEDOPENITEMS",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "dtb.sepamandat.LINKLISTGROUPEDBYROLES_CAPTION_0",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "dtb.sepamandat.LINK_ADDRESS",
        "value" : "Verknüpfungen"
      }, {
        "id" : "dtb.sepamandat.MESSAGE_CHANGEINGYMNET",
        "value" : "Änderungen an den Rechnungsinformationen für Vereine, Kreisverbände und Landesturnverbände (IBAN etc.) können nur in GymNet vollzogen werden. Die Änderungen werden automatisch ins TURNPORTAL übertragen."
      }, {
        "id" : "dtb.sepamandat.NOTES_SEPA",
        "value" : "Notizen"
      }, {
        "id" : "dtb.sepamandat.SEARCHTITEL",
        "value" : "SEPA-Mandat"
      }, {
        "id" : "dtb.sepamandat.SEPAMANDAT_SINGULAR",
        "value" : "Sepa-Mandat"
      } ]
    }, {
      "id" : "dtb.startinglicence",
      "standalone" : true,
      "name" : "Startrechte",
      "color" : "#43B4D6",
      "iconHash" : "2b2289bf6d119d8f3b4b3ec17078b830aa92bc90",
      "intents" : [ {
        "id" : "dtb.startinglicence.OpenLinkStartinglicenceSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "dtb.startinglicence.Record"
        }, {
          "intent" : "dtb.startinglicence.OpenLinkStartinglicenceSearch",
          "form" : "dtb.startinglicence.LinkSearch"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "dtb.startinglicence.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "dtb.startinglicence.linkToStartinglicence",
        "isGroup" : false,
        "label" : "Startrecht",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "STARTINGLICENCE",
          "searchIntent" : "dtb.startinglicence.OpenLinkStartinglicenceSearch"
        }
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "dtb.startinglicence.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.STARTINGLICENCE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.STARTINGLICENCE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Startrecht",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "dtb.startinglicence.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.STARTINGLICENCE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkedAnnualstLic",
          "type" : "LinkedDataObject",
          "link" : "STARTINGLICENCE_APP_ANNUALSTAMP",
          "context" : "do"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkedDisciplineLic",
          "type" : "LinkedDataObject",
          "link" : "STARTINGLICENCE_APP_DISCIPLINE",
          "context" : "do"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Startrecht",
          "actions" : [ {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtStartrechtTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_STARTINGLICENCE_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CORRESPONDING_GYMNAST"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCESPORTTYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCESTATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCEVALIDFROM"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCEVALIDUNTIL"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "linkedAnnualstLic.STAMPVALIDFROM",
                  "caption" : "Zugehörige Jahresmarke ist gültig von"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "linkedAnnualstLic.STAMPVALIDUNTIL",
                  "caption" : "Zugehörige Jahresmarks ist gültig bis"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "verknuepfungen",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_ANNUALSTAMP"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_CLUB"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Verknüpfungen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "gesperrt",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LOCKED_FIXEDPLAYED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LOCKED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Informationen zur Sperre"
              } ],
              "minimumColumnWidth" : 400
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtStartrechtTurnPortal",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_STARTINGLICENCE_NOT_IN_SMARTWE.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "allgemein",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_GYMNAST",
                  "caption" : "Zugehöriger Person"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_DISCIPLINE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCESTATE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCEVALIDFROM",
                  "readonly" : {
                    "type" : "script",
                    "inputs" : { },
                    "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                  }
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LICENCEVALIDUNTIL",
                  "readonly" : {
                    "type" : "script",
                    "inputs" : { },
                    "source" : "(function () {\r\n    _monitoring.init();\r\n    return true;\r\n})();\r\n"
                  }
                } ],
                "showFieldCaptions" : true,
                "caption" : "Allgemeine Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "verknuepfungen",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_ANNUALSTAMP",
                  "caption" : "Zugehörige Jahresmarke"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "STARTINGLICENCE_APP_CLUB",
                  "caption" : "Zugehöriger Verein"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Verknüpfungen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "gesperrt",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LOCKED_FIXEDPLAYED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "LOCKED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NOTES2"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Informationen zur Sperre"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtFuerAdministratoren",
              "visibility" : {
                "type" : "script",
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
              },
              "level" : "WARN",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_KNOWWHATYOUDO.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "administrativeFelder",
              "visibility" : {
                "type" : "script",
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return user.isMember(-10);\r\n})();\r\n"
              },
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "LICENCEVALIDFROM"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "LICENCEVALIDUNTIL"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "linkedAnnualstLic.STAMPVALIDFROM",
                "caption" : "Zugehörige Jahresmarke ist gültig von"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "linkedAnnualstLic.STAMPVALIDUNTIL",
                "caption" : "Zugehörige Jahresmarks ist gültig bis"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zusätzliche Felder für geschultes Personal"
            } ]
          }
        } ]
      }, {
        "id" : "dtb.startinglicence.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassData",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "CORRESPONDING_GYMNAST", "LICENCESPORTTYPE", "LICENCESTATE", "LICENCEVALIDUNTIL", "LICENCEVALIDFROM" ]
          },
          "objectType" : "smartdesign.base.STARTINGLICENCE"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "CORRESPONDING_GYMNAST", "LICENCESPORTTYPE", "LICENCESTATE", "LICENCEVALIDUNTIL", "LICENCEVALIDFROM" ]
          },
          "objectType" : "smartdesign.base.STARTINGLICENCE"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Startrecht",
          "actions" : [ {
            "command" : "smartdesign.base.delete_multiple_records",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.edit_tags",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.export_as_csv",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print_list",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ {
            "command" : "smartdesign.base.edit_view_columns",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.viewsMenu",
            "contributionPointId" : "viewsMenu",
            "parentContributionPointId" : "viewMenu",
            "context" : {
              "type" : "DataObjectMassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_with_dialog",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.save_view_as",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete_view",
            "parentContributionPointId" : "viewsMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "*"
            }
          } ],
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.base.new",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "STARTINGLICENCE"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "searchList",
              "caption" : "Startrechte",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMassData",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Zuletzt verwendet",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "startinglicenceViews",
              "objectTypeViews" : "smartdesign.base.STARTINGLICENCE",
              "caption" : "Views"
            } ]
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "dtb.startinglicence.ALLGEMEIN",
        "value" : "Allgemeine Informationen"
      }, {
        "id" : "dtb.startinglicence.ANNUALSTAMP_VALIDFROM",
        "value" : "Zugehörige Jahresmarke ist gültig von"
      }, {
        "id" : "dtb.startinglicence.ANNUALSTAMP_VALIDUNTIL",
        "value" : "Zugehörige Jahresmarks ist gültig bis"
      }, {
        "id" : "dtb.startinglicence.APP_NAME",
        "value" : "Startrechte"
      }, {
        "id" : "dtb.startinglicence.DEFAULTTITEL",
        "value" : "Startrecht"
      }, {
        "id" : "dtb.startinglicence.FIEDLS_ADMINISTRATIVE",
        "value" : "Zusätzliche Felder für geschultes Personal"
      }, {
        "id" : "dtb.startinglicence.HEADER",
        "value" : "Startrecht"
      }, {
        "id" : "dtb.startinglicence.LINKS_STARTINGLICENCE",
        "value" : "Verknüpfungen"
      }, {
        "id" : "dtb.startinglicence.LINKTURNER",
        "value" : "Zugehörige Person"
      }, {
        "id" : "dtb.startinglicence.LINKVEREIN",
        "value" : "Zugehöriger Verein"
      }, {
        "id" : "dtb.startinglicence.LIST_Caption",
        "value" : "Zuletzt verwendet"
      }, {
        "id" : "dtb.startinglicence.MESSAGE_KNOWWHATYOUDO",
        "value" : "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
      }, {
        "id" : "dtb.startinglicence.MESSAGE_STARTINGLICENCE_NOT_IN_SMARTWE",
        "value" : "Startrechte können nicht über die SmartWe angelegt werden, sondern können nur über das TUNRPORTAL beantragt werden."
      }, {
        "id" : "dtb.startinglicence.SEARCHTITEL",
        "value" : "Startrechte"
      }, {
        "id" : "dtb.startinglicence.STARTINGLICENCE_CORRESPONDING_ANNUALSTAMP",
        "value" : "Zugehörige Jahresmarke"
      }, {
        "id" : "dtb.startinglicence.STARTINGLICENCE_CORRESPONDING_CLUB",
        "value" : "Zugehöriger Verein"
      }, {
        "id" : "dtb.startinglicence.STARTINGLICENCE_CORRESPONDING_GYMNAST",
        "value" : "Zugehöriger Person"
      }, {
        "id" : "dtb.startinglicence.STARTINGLICENCE_SINGULAR",
        "value" : "Startrecht"
      }, {
        "id" : "dtb.startinglicence.TITEL",
        "value" : "Startrecht"
      }, {
        "id" : "dtb.startinglicence.VERMERK",
        "value" : "Informationen zur Sperre"
      } ]
    }, {
      "id" : "smartdesign.address",
      "standalone" : true,
      "name" : "Contacts",
      "color" : "#49351A",
      "iconHash" : "ba3010309b40272319ee582478bd0eb12f186282",
      "intents" : [ {
        "id" : "smartdesign.address.OpenCompanyAddressSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      }, {
        "id" : "smartdesign.address.OpenLinkAddressSearch",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "OVERLAY"
      }, {
        "id" : "smartdesign.address.ShowContactPersonTable",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "smartdesign.address.Record"
        }, {
          "intent" : "smartdesign.base.OpenRecord",
          "form" : "smartdesign.address.CompanyRecord"
        }, {
          "intent" : "smartdesign.address.OpenLinkAddressSearch",
          "form" : "smartdesign.address.LinkSearch"
        }, {
          "intent" : "smartdesign.address.OpenCompanyAddressSearch",
          "form" : "smartdesign.address.CompanySearch"
        }, {
          "intent" : "smartdesign.address.ShowContactPersonTable",
          "form" : "smartdesign.address.ContactPersonTable"
        }, {
          "intent" : "smartdesign.base.ShowTable",
          "form" : "smartdesign.address.Table"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.base.ShowSearch",
          "form" : "smartdesign.address.Search"
        } ],
        "initialization" : "smartdesign.base.ShowSearch"
      },
      "commands" : [ {
        "id" : "smartdesign.address.check_duplicates",
        "isGroup" : false,
        "iconName" : "svg_toolbar_duplicate_check.svg",
        "label" : "Execute duplicate check",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.address.new_linked_company",
        "isGroup" : false,
        "iconName" : "svg_toolbar_contact.svg",
        "label" : "Create organization",
        "inGroupLabel" : "Organization",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.vcard_export",
        "isGroup" : false,
        "iconName" : "svg_toolbar_send_vcard.svg",
        "label" : "Send as vCard",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.uvz_connect",
        "isGroup" : false,
        "iconName" : "svg_miscellaneous_uvz.svg",
        "label" : "Connect",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.uvz_disconnect",
        "isGroup" : false,
        "iconName" : "svg_miscellaneous_uvz.svg",
        "label" : "Disconnect",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.menuitem_call",
        "isGroup" : false,
        "iconName" : "svg_radialmenu_phone.svg",
        "label" : "Call",
        "style" : "ICONCAPTION",
        "parameters" : {
          "cantExecuteReason" : "You cannot call as there are no phone numbers."
        }
      }, {
        "id" : "smartdesign.address.uvzMenu",
        "isGroup" : true,
        "contributionPointId" : "uvzMenu",
        "iconName" : "svg_miscellaneous_uvz.svg",
        "label" : "Unternehmensverzeichnis.org",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.linkToContact",
        "isGroup" : false,
        "iconName" : "svg_toolbar_contact.svg",
        "label" : "Link with contact",
        "inGroupLabel" : "Contact",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.linkTo",
        "hasCustomOverride" : false,
        "parameters" : {
          "targetType" : "ADDRESS",
          "searchIntent" : "smartdesign.address.OpenLinkAddressSearch"
        }
      }, {
        "id" : "smartdesign.address.new_contact_person",
        "isGroup" : false,
        "iconName" : "svg_toolbar_new.svg",
        "label" : "Create contact person",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.address.new_from_businesscard",
        "isGroup" : false,
        "label" : "Scan business card",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.add_company_assignment",
        "isGroup" : false,
        "iconName" : "svg_toolbar_company.svg",
        "label" : "Assign organization",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.new_linked_from_businesscard",
        "isGroup" : false,
        "label" : "Scan business card",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.open_address_assistant_dialog",
        "isGroup" : false,
        "iconName" : "svg_toolbar_address_assistant.svg",
        "label" : "Open address wizard",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.address.uvz_update",
        "isGroup" : false,
        "iconName" : "svg_miscellaneous_uvz.svg",
        "label" : "Check if current data is available",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.new_contact",
        "isGroup" : false,
        "iconName" : "svg_toolbar_contact.svg",
        "label" : "Create individual contact",
        "inGroupLabel" : "Individual contact",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.new",
        "hasCustomOverride" : true
      }, {
        "id" : "smartdesign.address.menuitem_email",
        "isGroup" : false,
        "iconName" : "svg_radialmenu_e_mail.svg",
        "label" : "Write e-mail",
        "style" : "ICONCAPTION",
        "parameters" : {
          "cantExecuteReason" : "You cannot write an e-mail as there are no e-mail addresses saved."
        }
      }, {
        "id" : "smartdesign.address.clipboard_export",
        "isGroup" : false,
        "iconName" : "svg_toolbar_copy_to_clipboard.svg",
        "label" : "Copy to clipboard",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.new_company",
        "isGroup" : false,
        "iconName" : "svg_toolbar_company.svg",
        "label" : "Create organization",
        "style" : "ICONCAPTION",
        "delegate" : "smartdesign.base.new",
        "hasCustomOverride" : true
      }, {
        "id" : "smartdesign.address.remove_company_assignment",
        "isGroup" : false,
        "iconName" : "svg_toolbar_remove_assignment.svg",
        "label" : "Remove organization assignment",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.new_linked_contact",
        "isGroup" : false,
        "iconName" : "svg_toolbar_contact.svg",
        "label" : "Create individual contact",
        "inGroupLabel" : "Individual contact",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.address.new_contact_image",
        "isGroup" : false,
        "label" : "Select picture...",
        "style" : "ICONCAPTION"
      } ],
      "types" : [ ],
      "forms" : [ {
        "id" : "smartdesign.address.CompanyRecord",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "constraint" : {
            "type" : "FIELD_MATCH",
            "field" : "ISORGANISATION",
            "operator" : "EQUAL",
            "value" : true,
            "value_type" : "BOOLEAN"
          },
          "objectType" : "smartdesign.base.ADDRESS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "contactPersons",
          "type" : "DataObjectMassData",
          "summary" : {
            "caption" : "CAPTION",
            "description" : "FUNCTION",
            "strict" : false
          },
          "objectType" : "smartdesign.base.ADDRESS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddress",
          "type" : "LinkMassData",
          "linkAttributes" : [ "CLUBADMIN", "DTBADMIN", "LTVADMIN", "DISTRICTADMIN" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddressGymnasts",
          "type" : "LinkMassData",
          "linkAttributes" : [ "CLUBMEMBERSHIP" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListANNUALSTAMP",
          "type" : "LinkMassData",
          "linkAttributes" : [ "ANNUALST_CLUB" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ANNUALSTAMP",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListSTARTINGLICENCE",
          "type" : "LinkMassData",
          "linkAttributes" : [ "LICENCE_CLUB" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.STARTINGLICENCE",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListOPENITEMS",
          "type" : "LinkMassData",
          "linkAttributes" : [ "OPENITM_INVCREC" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.OPENITEMS",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListSEPAMANDATE",
          "type" : "LinkMassData",
          "linkAttributes" : [ "SEPA_GRANTER" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.SEPAMANDATE",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddressDTB",
          "type" : "LinkMassData",
          "linkAttributes" : [ "DTB_HIERARCHY" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "target.TYPE",
              "operator" : "EQUAL",
              "value" : "German_Gymnastics_Association",
              "value_type" : "STRING"
            },
            "ordering" : [ {
              "field" : "target.TYPE",
              "ordering" : "DESCENDING"
            } ]
          }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddressLTV",
          "type" : "LinkMassData",
          "linkAttributes" : [ "DTB_HIERARCHY" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "target.TYPE",
              "operator" : "EQUAL",
              "value" : "Regional_Gymnastics_Association",
              "value_type" : "STRING"
            },
            "ordering" : [ {
              "field" : "target.TYPE",
              "ordering" : "DESCENDING"
            } ]
          }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddressKV",
          "type" : "LinkMassData",
          "linkAttributes" : [ "DTB_HIERARCHY" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "target.TYPE",
              "operator" : "EQUAL",
              "value" : "District_Association",
              "value_type" : "STRING"
            },
            "ordering" : [ {
              "field" : "target.TYPE",
              "ordering" : "DESCENDING"
            } ]
          }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAddressClub",
          "type" : "LinkMassData",
          "linkAttributes" : [ "DTB_HIERARCHY" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "target.TYPE",
              "operator" : "EQUAL",
              "value" : "Club",
              "value_type" : "STRING"
            },
            "ordering" : [ {
              "field" : "target.TYPE",
              "ordering" : "DESCENDING"
            } ]
          }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Organization",
          "actions" : [ {
            "command" : "smartdesign.address.new_contact_person",
            "parentContributionPointId" : "actionMenu"
          }, {
            "command" : "smartdesign.address.check_duplicates",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.clipboard_export",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.open_address_assistant_dialog",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "group" : "smartdesign.address.uvzMenu",
            "contributionPointId" : "uvzMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_connect",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_disconnect",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_update",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.vcard_export",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.linkWithMenu", "smartdesign.address.open_address_assistant_dialog", "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ADDRESS_IN_GYMNET.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.address.BusinessCard",
              "name" : "businessCard",
              "popupContent" : {
                "type" : "smartdesign.base.ZLayout",
                "fixedColumns" : false,
                "children" : [ {
                  "type" : "smartdesign.base.FieldGroup",
                  "name" : "organisation",
                  "children" : [ {
                    "type" : "smartdesign.base.Field",
                    "ref" : "COMPNAME"
                  } ],
                  "showFieldCaptions" : false,
                  "caption" : "Organization"
                }, {
                  "type" : "smartdesign.base.FieldGroup",
                  "name" : "centralContactData",
                  "children" : [ {
                    "type" : "smartdesign.base.Field",
                    "ref" : "PHONEFIELDSTR10"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "MAILFIELDSTR5"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "WWWFIELDSTR1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "FAXFIELDSTR5"
                  } ],
                  "showFieldCaptions" : true,
                  "caption" : "Head office"
                }, {
                  "type" : "smartdesign.base.FieldGroup",
                  "name" : "businessAddress",
                  "children" : [ {
                    "type" : "smartdesign.base.Field",
                    "ref" : "STREET1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "ZIP1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "TOWN1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "SUBURB1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "GWSTATE1"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "COUNTRY1"
                  } ],
                  "showFieldCaptions" : true,
                  "caption" : "Business address"
                } ],
                "minimumColumnWidth" : 400
              }
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "dtbSpezifisch",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "TYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CLUBID"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DISTRICTID"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "REGIONALID"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "GYMNET_DTB_IDENTIFIER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "ADR_DEACTIVATED"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CLUB_ACTIVE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "BILLING_COMPANY"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CLUBRESOLUTION"
                } ],
                "showFieldCaptions" : true,
                "caption" : "DTB spezifische Informationen"
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "caption" : "Zugehöriger Bundesverband",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddressDTB",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "dtbhierarchyltv",
                "caption" : "Zugehöriger Landesturnverband",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddressLTV",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "dtbhierarchykv",
                "caption" : "Zugehöriger Kreisverband/Turngau",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddressKV",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "dtbhierarchyclub",
                "caption" : "Zugehörige Vereine",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddressClub",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "admins",
                "caption" : "Zugehörige Administratoren",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddress",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "gymnasts",
                "caption" : "Zugehörige Personen",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAddressGymnasts",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "jahresmarke",
                "caption" : "Zugehörige Jahresmarken",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListANNUALSTAMP",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "startrechte",
                "caption" : "Zugehörige Startrechte",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListSTARTINGLICENCE",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "offeneposten",
                "caption" : "Zugehörige Gebühren",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListOPENITEMS",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "sepamandate",
                "caption" : "Zugehörige SEPA-Mandate",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListSEPAMANDATE",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notes",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : false,
              "caption" : "Notes"
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Message",
              "level" : "INFO",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_ADDRESS_IN_GYMNET.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.Permissions"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "dtbSpezifisch",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "TYPE"
              } ],
              "showFieldCaptions" : true,
              "caption" : "DTB spezifische Informationen"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "organisation",
              "children" : [ {
                "type" : "smartdesign.address.ContactImage",
                "name" : "contactImage",
                "caption" : "Picture",
                "actions" : [ {
                  "command" : "smartdesign.address.new_contact_image"
                } ]
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "COMPNAME"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "STANDARDADDRESS"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Organization"
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "centralContactData",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "PHONEFIELDSTR10"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "MAILFIELDSTR5"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "WWWFIELDSTR1"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "FAXFIELDSTR5"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Kontaktinformationen"
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "adresse",
                "datasource" : "linkListAddress",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Administratoren",
                "deleteMessage" : "Remove link",
                "addMessage" : "Create link"
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "gymnasts",
                "datasource" : "linkListAddressGymnasts",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Personen",
                "deleteMessage" : "Remove link",
                "addMessage" : "Create link"
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "jahresmarke",
                "datasource" : "linkListANNUALSTAMP",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Jahresmarken",
                "deleteMessage" : "Remove link",
                "addMessage" : "Wähle die zugehörigen Jahresmarken aus."
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "startrecht",
                "datasource" : "linkListSTARTINGLICENCE",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Startrechte",
                "deleteMessage" : "Remove link",
                "addMessage" : "Wähle die zugehörigen Startrechte aus."
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "openitems",
                "datasource" : "linkListOPENITEMS",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige Gebühren",
                "deleteMessage" : "Remove link",
                "addMessage" : "Wähle die zugehörige Gebühr aus."
              }, {
                "type" : "smartdesign.base.LinkListGroupedByRoles",
                "name" : "sepamandate",
                "datasource" : "linkListSEPAMANDATE",
                "emptyListMessage" : "No data records exist",
                "caption" : "Zugehörige SEPA-Mandate",
                "deleteMessage" : "Remove link",
                "addMessage" : "Wähle die zugehörigen SEPA-Mandate aus."
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notes",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : false,
              "caption" : "Notes"
            }, {
              "type" : "smartdesign.base.Message",
              "name" : "nachrichtFuerAdministratoren",
              "level" : "WARN",
              "message" : {
                "inputs" : { },
                "source" : "(function () {\r\n    _monitoring.init();\r\n    return Translation.MESSAGE_KNOWWHATYOUDO.get();\r\n})();\r\n"
              },
              "showIcon" : true
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "administrativeFelder",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "BILLING_COMPANY"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "ADR_DEACTIVATED"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "CLUB_ACTIVE"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "CLUBID"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "DISTRICTID"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "REGIONALID"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "CLUBRESOLUTION"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zusätzliche Felder für geschultes Personal"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "dtbhierarchy",
              "datasource" : "linkListAddressDTB",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehöriger Bundesverband",
              "deleteMessage" : "Remove link",
              "addMessage" : "Wähle den zugehörigen Bundesverband aus."
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "dtbhierarchyltv",
              "datasource" : "linkListAddressLTV",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehöriger Landesturnverband",
              "deleteMessage" : "Remove link",
              "addMessage" : "Wähle den zugehörigen Landesturnverband aus."
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "dtbhierarchykv",
              "datasource" : "linkListAddressKV",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehöriger Kreisverband/Turngau",
              "deleteMessage" : "Remove link",
              "addMessage" : "Wähle den zugehörigen Kreisverband aus."
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "dtbhierarchyclub",
              "datasource" : "linkListAddressClub",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehörige Vereine",
              "deleteMessage" : "Remove link",
              "addMessage" : "Wähle die zugehörigen Vereine aus."
            } ]
          }
        } ]
      }, {
        "id" : "smartdesign.address.CompanySearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "TYPE", "NAME", "CHRISTIANNAME", "DTBID", "COMPNAME", "STREET1", "ZIP1", "TOWN1" ]
          },
          "objectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "ISORGANISATION",
              "operator" : "EQUAL",
              "value" : true,
              "value_type" : "BOOLEAN"
            }
          }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "TYPE", "NAME", "CHRISTIANNAME", "DTBID", "COMPNAME", "STREET1", "ZIP1", "TOWN1" ]
          },
          "objectType" : "smartdesign.base.ADDRESS",
          "query" : {
            "filter" : {
              "type" : "FIELD_COMPARISON",
              "field" : "ISORGANISATION",
              "operator" : "EQUAL",
              "value" : true,
              "value_type" : "BOOLEAN"
            }
          }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Link with contact",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          }, {
            "command" : "smartdesign.address.new_linked_company",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_linked_contact",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_linked_from_businesscard",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "smartdesign.address.ContactPersonTable",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "contactPersonMD",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.ADDRESS"
        } ],
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "header" : {
            "type" : "smartdesign.base.DefaultHeader",
            "contributionType" : "ALL",
            "actions" : [ {
              "command" : "smartdesign.base.delete_multiple_records",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.edit_tags",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.export_as_csv",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.linkWithMenu",
              "contributionPointId" : "linkWithMenu",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.annualstamp.linkToAnnualstamp",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.competition.linkToCompetition",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.discipline.linkToDiscipline",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.offeneposten.linkToOffeneposten",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.sepamandat.linkToSepamandat",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.startinglicence.linkToStartinglicence",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.address.linkToContact",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.print_list",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            } ],
            "viewActions" : [ {
              "command" : "smartdesign.base.edit_view_columns",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.viewsMenu",
              "contributionPointId" : "viewsMenu",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_with_dialog",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_as",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.delete_view",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            } ],
            "actionFavorites" : [ ],
            "viewFavorites" : [ ],
            "actionDefaults" : [ {
              "command" : "smartdesign.address.new_contact_person"
            } ],
            "viewActionDefaults" : [ {
              "command" : "smartdesign.base.table_switch_to_selection"
            }, {
              "command" : "smartdesign.base.table_switch_to_navigation"
            }, {
              "command" : "searchfield_placeholder"
            } ]
          },
          "content" : {
            "type" : "smartdesign.base.Table",
            "name" : "bigTable",
            "datasource" : "contactPersonMD"
          }
        } ]
      }, {
        "id" : "smartdesign.address.LinkSearch",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMassdata",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.ADDRESS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "objectType" : "smartdesign.base.ADDRESS"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Link with contact",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.apply_link",
            "highlighted" : true
          }, {
            "group" : "smartdesign.base.newLinkedMenu",
            "contributionPointId" : "newLinkedMenu"
          }, {
            "command" : "smartdesign.address.new_linked_company",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_linked_contact",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_linked_from_businesscard",
            "parentContributionPointId" : "newLinkedMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchField",
              "name" : "searchField",
              "hideTargetViewerWhenEmpty" : true,
              "targetViewer" : "searchResults",
              "alignment" : "NONE",
              "widgetsToHide" : [ "recentlyUsed" ]
            }, {
              "type" : "smartdesign.base.List",
              "name" : "searchResults",
              "hideNoEntriesFoundCaption" : false,
              "minVisibleItems" : 8,
              "datasource" : "searchMassdata"
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "HIDE",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true,
              "entryAction" : {
                "intent" : "smartdesign.base.None"
              }
            } ],
            "ratio" : [ 0, 1, 1 ]
          }
        } ]
      }, {
        "id" : "smartdesign.address.Record",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "do",
          "type" : "DataObject",
          "objectType" : "smartdesign.base.ADDRESS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "dossierMD",
          "type" : "DossierMassData"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListAnnualstamp",
          "type" : "LinkMassData",
          "linkAttributes" : [ "ANNUALST_GYMN" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ANNUALSTAMP",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListStartinglicence",
          "type" : "LinkMassData",
          "linkAttributes" : [ "LICENCE_GYMNAST" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.STARTINGLICENCE",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListCompetition",
          "type" : "LinkMassData",
          "linkAttributes" : [ "PARTICIP_GYMN" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.COMPETITION",
          "query" : { }
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "linkListClubmembership",
          "type" : "LinkMassData",
          "linkAttributes" : [ "CLUBMEMBERSHIP" ],
          "sourceObjectType" : "smartdesign.base.ADDRESS",
          "targetObjectType" : "smartdesign.base.ADDRESS",
          "query" : { }
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "ALL",
          "title" : "Contact",
          "actions" : [ {
            "command" : "smartdesign.address.remove_company_assignment",
            "parentContributionPointId" : "actionMenu"
          }, {
            "command" : "smartdesign.address.add_company_assignment",
            "parentContributionPointId" : "actionMenu"
          }, {
            "command" : "smartdesign.address.check_duplicates",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.clipboard_export",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.open_address_assistant_dialog",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "group" : "smartdesign.address.uvzMenu",
            "contributionPointId" : "uvzMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_connect",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_disconnect",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.uvz_update",
            "parentContributionPointId" : "uvzMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.vcard_export",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.base.appeal_for_rights_on_record",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.delete",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithMenu",
            "contributionPointId" : "linkWithMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.annualstamp.linkToAnnualstamp",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.competition.linkToCompetition",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.discipline.linkToDiscipline",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.offeneposten.linkToOffeneposten",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.sepamandat.linkToSepamandat",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "dtb.startinglicence.linkToStartinglicence",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.address.linkToContact",
            "parentContributionPointId" : "linkWithMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "group" : "smartdesign.base.linkWithNewMenu",
            "contributionPointId" : "linkWithNewMenu",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.print",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          }, {
            "command" : "smartdesign.base.send_email_to_permissionsowner",
            "parentContributionPointId" : "actionMenu",
            "context" : {
              "type" : "DataObject",
              "objecttype" : "*"
            }
          } ],
          "viewActions" : [ ],
          "actionFavorites" : [ "smartdesign.base.linkWithMenu", "smartdesign.address.open_address_assistant_dialog", "smartdesign.base.appeal_for_rights_on_record" ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "command" : "smartdesign.base.edit"
          }, {
            "command" : "smartdesign.base.save",
            "highlighted" : true
          } ],
          "viewActionDefaults" : [ {
            "command" : "smartdesign.base.cancel"
          } ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.Permissions"
            }, {
              "type" : "smartdesign.address.BusinessCard",
              "name" : "businessCard",
              "popupContent" : {
                "type" : "smartdesign.base.ZLayout",
                "fixedColumns" : false,
                "children" : [ {
                  "type" : "smartdesign.base.FieldGroup",
                  "name" : "person",
                  "children" : [ {
                    "type" : "smartdesign.base.Field",
                    "ref" : "CHRISTIANNAME"
                  }, {
                    "type" : "smartdesign.base.Field",
                    "ref" : "NAME"
                  } ],
                  "showFieldCaptions" : true,
                  "caption" : "Person"
                } ],
                "minimumColumnWidth" : 400
              }
            }, {
              "type" : "smartdesign.base.ZLayout",
              "name" : "mainLayout",
              "fixedColumns" : false,
              "children" : [ {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "weitereDaten",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "BIRTHDAY"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "TITLE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "GENDER"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "NATIONALITY"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Weitere Daten"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "dtbSpezifisch",
                "children" : [ {
                  "type" : "smartdesign.base.Field",
                  "ref" : "TYPE"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "DTBID"
                }, {
                  "type" : "smartdesign.base.Field",
                  "ref" : "CLUBID"
                } ],
                "showFieldCaptions" : true,
                "caption" : "DTB spezifische Informationen"
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "links",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "LINK_CLUBADMIN"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "LINK_DISTRICTADMIN"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "LINK_LTVADMIN"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "LINK_DTBADMIN"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Zugehörige Verknüpfungen"
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "clubmembership",
                "caption" : "Vereinszugehörigkeit",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListClubmembership",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "annualstamp",
                "caption" : "Zugehörige Jahresmarke",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListAnnualstamp",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "startinglicence",
                "caption" : "Zugehörige Startrechte",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListStartinglicence",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.EmbeddedList",
                "name" : "competition",
                "caption" : "Ausgetragene und Auszutragende Wettkämpfe",
                "maxItemsShown" : 7,
                "extendedListEntryCaption" : "Extended list",
                "datasource" : "linkListCompetition",
                "extendedListEntryMode" : "SHOW",
                "emptyListMessage" : "No data records exist",
                "hideWhenEmpty" : true
              }, {
                "type" : "smartdesign.base.FieldGroup",
                "name" : "paymentinfo",
                "children" : [ {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "SMARTDESIGN_ADDRESS_SEPA_GRANTER"
                }, {
                  "type" : "smartdesign.base.LinkField",
                  "ref" : "SMARTDESIGN_ADDRESS_OPENIT_INVCREC"
                } ],
                "showFieldCaptions" : true,
                "caption" : "Zugehöriges SEPA-Mandat"
              } ],
              "minimumColumnWidth" : 400
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notes",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : false,
              "caption" : "Notes"
            } ]
          }
        }, {
          "mode" : "edit",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "dtbSpezifisch",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "TYPE"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "DTBID",
                "visibility" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    var t = $do.TYPE.values.Gymnast;\r\n    return user.isMember(-10) && $do.TYPE.anySelected(t);\r\n})();\r\n"
                }
              } ],
              "showFieldCaptions" : true,
              "caption" : "DTB spezifische Informationen"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "person",
              "children" : [ {
                "type" : "smartdesign.address.ContactImage",
                "name" : "contactImage",
                "caption" : "Picture",
                "actions" : [ {
                  "command" : "smartdesign.address.new_contact_image"
                } ]
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "TITLE"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "CHRISTIANNAME"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "NAME"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "KEEPFIELDSSYCHRONIZED",
                "caption" : "Synchronous field values"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "BIRTHDAY"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "GENDER"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "NATIONALITY"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "STANDARDADDRESS"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Person"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "kontakt",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "MAILFIELDSTR3",
                "readonly" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    return !($do.TYPE.anySelected($do.TYPE.values.Gymnast));\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "STREET3"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "ZIP3"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "TOWN3"
              }, {
                "type" : "smartdesign.base.Field",
                "ref" : "COUNTRY3"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Kontaktinformationen"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "verknuepfungen",
              "children" : [ {
                "type" : "smartdesign.base.LinkField",
                "ref" : "LINK_CLUBADMIN",
                "visibility" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    var t = $do.TYPE.values.Clubadmin;\r\n    return $do.TYPE.anySelected(t);\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "LINK_DISTRICTADMIN",
                "visibility" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    var t = $do.TYPE.values.District_Association_Admin;\r\n    return $do.TYPE.anySelected(t);\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "LINK_LTVADMIN",
                "visibility" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    var t = $do.TYPE.values.Regional_Gymnastics_Association_Admin;\r\n    return $do.TYPE.anySelected(t);\r\n})();\r\n"
                }
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "LINK_DTBADMIN",
                "visibility" : {
                  "type" : "script",
                  "inputs" : {
                    "do" : [ "TYPE" ]
                  },
                  "source" : "(function () {\r\n    _monitoring.init();\r\n    var t = $do.TYPE.values.German_Gymnastics_Association_Admin;\r\n    return $do.TYPE.anySelected(t);\r\n})();\r\n"
                }
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zugehörige Verknüpfungen"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "clubmembership",
              "datasource" : "linkListClubmembership",
              "emptyListMessage" : "No data records exist",
              "caption" : "Vereinszugehörigkeit",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "annualstamp",
              "datasource" : "linkListAnnualstamp",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehörige Jahresmarke",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "startinglicence",
              "datasource" : "linkListStartinglicence",
              "emptyListMessage" : "No data records exist",
              "caption" : "Zugehörige Startrechte",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.LinkListGroupedByRoles",
              "name" : "competition",
              "datasource" : "linkListCompetition",
              "emptyListMessage" : "No data records exist",
              "caption" : "Ausgetragene und Auszutragende Wettkämpfe",
              "deleteMessage" : "Remove link",
              "addMessage" : "Create link"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "paymentinfo",
              "children" : [ {
                "type" : "smartdesign.base.LinkField",
                "ref" : "SMARTDESIGN_ADDRESS_SEPA_GRANTER"
              }, {
                "type" : "smartdesign.base.LinkField",
                "ref" : "SMARTDESIGN_ADDRESS_OPENIT_INVCREC"
              } ],
              "showFieldCaptions" : true,
              "caption" : "Zugehöriges SEPA-Mandat"
            }, {
              "type" : "smartdesign.base.FieldGroup",
              "name" : "notes",
              "children" : [ {
                "type" : "smartdesign.base.Field",
                "ref" : "NOTES2"
              } ],
              "showFieldCaptions" : false,
              "caption" : "Notes"
            } ]
          }
        } ]
      }, {
        "id" : "smartdesign.address.Search",
        "context" : [ {
          "imported" : false,
          "primary" : true,
          "optional" : false,
          "name" : "searchMD",
          "type" : "DataObjectMassData",
          "table" : {
            "columns" : [ "TYPE", "NAME", "CHRISTIANNAME", "DTBID", "COMPNAME", "ZIP1", "ZIP3", "TOWN1", "TOWN3" ]
          },
          "objectType" : "smartdesign.base.ADDRESS"
        }, {
          "imported" : false,
          "primary" : false,
          "optional" : false,
          "name" : "lastUsedMD",
          "type" : "LastUsedMassData",
          "table" : {
            "columns" : [ "TYPE", "NAME", "CHRISTIANNAME", "DTBID", "COMPNAME", "ZIP1", "ZIP3", "TOWN1", "TOWN3" ]
          },
          "objectType" : "smartdesign.base.ADDRESS"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "Contacts",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ {
            "group" : "smartdesign.base.newMenu",
            "contributionPointId" : "newMenu"
          }, {
            "command" : "smartdesign.address.new_company",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_contact",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          }, {
            "command" : "smartdesign.address.new_from_businesscard",
            "parentContributionPointId" : "newMenu",
            "context" : {
              "type" : "MassData",
              "objecttype" : "ADDRESS"
            }
          } ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.VerticalLayout",
            "name" : "contentLayout",
            "children" : [ {
              "type" : "smartdesign.base.SearchList",
              "name" : "contacts",
              "caption" : "Contacts",
              "maxItemsShown" : 10,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "searchMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.EmbeddedList",
              "name" : "recentlyUsed",
              "caption" : "Last opened",
              "maxItemsShown" : 7,
              "extendedListEntryCaption" : "Extended list",
              "datasource" : "lastUsedMD",
              "extendedListEntryMode" : "SHOW",
              "emptyListMessage" : "No data records exist",
              "hideWhenEmpty" : true
            }, {
              "type" : "smartdesign.base.ViewsList",
              "name" : "addressViews",
              "objectTypeViews" : "smartdesign.base.ADDRESS",
              "caption" : "Views"
            } ]
          }
        } ]
      }, {
        "id" : "smartdesign.address.Table",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "tableMD",
          "type" : "DataObjectMassData",
          "objectType" : "smartdesign.base.ADDRESS"
        } ],
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "header" : {
            "type" : "smartdesign.base.DefaultHeader",
            "contributionType" : "ALL",
            "actions" : [ {
              "command" : "smartdesign.base.delete_multiple_records",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.edit_tags",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.export_as_csv",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.linkWithMenu",
              "contributionPointId" : "linkWithMenu",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.annualstamp.linkToAnnualstamp",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.competition.linkToCompetition",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.discipline.linkToDiscipline",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.offeneposten.linkToOffeneposten",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.sepamandat.linkToSepamandat",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.startinglicence.linkToStartinglicence",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.address.linkToContact",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.print_list",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            } ],
            "viewActions" : [ {
              "command" : "smartdesign.base.edit_view_columns",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.viewsMenu",
              "contributionPointId" : "viewsMenu",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_with_dialog",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_as",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.delete_view",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            } ],
            "actionFavorites" : [ ],
            "viewFavorites" : [ ],
            "actionDefaults" : [ {
              "command" : "smartdesign.base.save_view"
            }, {
              "group" : "smartdesign.base.newMenu",
              "contributionPointId" : "newMenu"
            }, {
              "command" : "smartdesign.address.new_company",
              "parentContributionPointId" : "newMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "ADDRESS"
              }
            }, {
              "command" : "smartdesign.address.new_contact",
              "parentContributionPointId" : "newMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "ADDRESS"
              }
            }, {
              "command" : "smartdesign.address.new_from_businesscard",
              "parentContributionPointId" : "newMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "ADDRESS"
              }
            } ],
            "viewActionDefaults" : [ {
              "command" : "smartdesign.base.table_switch_to_selection"
            }, {
              "command" : "smartdesign.base.table_switch_to_navigation"
            }, {
              "command" : "searchfield_placeholder"
            } ]
          },
          "content" : {
            "type" : "smartdesign.base.Table",
            "name" : "bigTable",
            "datasource" : "tableMD"
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "smartdesign.address.ADDITIONAL_INFORMATION",
        "value" : "Additional information"
      }, {
        "id" : "smartdesign.address.ADDRESS_CHECK_SERVICE",
        "value" : "Address service"
      }, {
        "id" : "smartdesign.address.ANSCHRIFT",
        "value" : "Verbandsanschrift"
      }, {
        "id" : "smartdesign.address.BANK_ACCOUNT",
        "value" : "Bank details"
      }, {
        "id" : "smartdesign.address.BUSINESS_ADDRESS",
        "value" : "Business address"
      }, {
        "id" : "smartdesign.address.BUSINESS_DATA",
        "value" : "Business data"
      }, {
        "id" : "smartdesign.address.CENTRAL_CONTACT_DATA",
        "value" : "Head office"
      }, {
        "id" : "smartdesign.address.CMD_LBL_ADD_COMPANY_ASSIGNMENT_GW",
        "value" : "Assign company"
      }, {
        "id" : "smartdesign.address.CMD_LBL_ADD_COMPANY_ASSIGNMENT_OPEN",
        "value" : "Assign organization"
      }, {
        "id" : "smartdesign.address.CMD_LBL_CHECK_DUPLICATES",
        "value" : "Execute duplicate check"
      }, {
        "id" : "smartdesign.address.CMD_LBL_CLIPBOARD_EXPORT",
        "value" : "Copy to clipboard"
      }, {
        "id" : "smartdesign.address.CMD_LBL_DOCUMENT_FROM_TEMPLATE",
        "value" : "Create document from template"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW",
        "value" : "Create contact"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_COMPANY_GW",
        "value" : "Create company"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_COMPANY_OPEN",
        "value" : "Create organization"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_CONTACT",
        "value" : "Create individual contact"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_CONTACT_INGROUP",
        "value" : "Individual contact"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_CONTACT_PERSON",
        "value" : "Create contact person"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_DOCUMENT",
        "value" : "Create document"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_FORMEMAIL",
        "value" : "Create new e-mail merge"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_FROM_BUSINESSCARD",
        "value" : "Scan business card"
      }, {
        "id" : "smartdesign.address.CMD_LBL_NEW_INGROUP",
        "value" : "Contact"
      }, {
        "id" : "smartdesign.address.CMD_LBL_OPEN_ADDRESS_ASSISTANT_DIALOG",
        "value" : "Open address wizard"
      }, {
        "id" : "smartdesign.address.CMD_LBL_REMOVE_COMPANY_ASSIGNMENT_GW",
        "value" : "Remove company assignment"
      }, {
        "id" : "smartdesign.address.CMD_LBL_REMOVE_COMPANY_ASSIGNMENT_OPEN",
        "value" : "Remove organization assignment"
      }, {
        "id" : "smartdesign.address.CMD_LBL_UVZ_CONNECT",
        "value" : "Connect"
      }, {
        "id" : "smartdesign.address.CMD_LBL_UVZ_DISCONNECT",
        "value" : "Disconnect"
      }, {
        "id" : "smartdesign.address.CMD_LBL_UVZ_UPDATE",
        "value" : "Check if current data is available"
      }, {
        "id" : "smartdesign.address.CMD_LBL_VCARD_EXPORT",
        "value" : "Send as vCard"
      }, {
        "id" : "smartdesign.address.COMPANY",
        "value" : "Company"
      }, {
        "id" : "smartdesign.address.COMPANY_ADDRESS",
        "value" : "Company address"
      }, {
        "id" : "smartdesign.address.COMPANY_ADDRESS_BRACKETS",
        "value" : "Address (business)"
      }, {
        "id" : "smartdesign.address.COMPANY_INFORMATION",
        "value" : "Company information"
      }, {
        "id" : "smartdesign.address.COMPANY_REGISTER",
        "value" : "Unternehmensverzeichnis.org"
      }, {
        "id" : "smartdesign.address.CONTACT",
        "value" : "Contact"
      }, {
        "id" : "smartdesign.address.CONTACTS",
        "value" : "Contacts"
      }, {
        "id" : "smartdesign.address.CONTACT_IMAGE",
        "value" : "Picture"
      }, {
        "id" : "smartdesign.address.CONTACT_IMAGE_UPLOAD",
        "value" : "Select picture..."
      }, {
        "id" : "smartdesign.address.CONTACT_INFORMATION",
        "value" : "Contact information"
      }, {
        "id" : "smartdesign.address.CONTACT_PERSON",
        "value" : "Contact person"
      }, {
        "id" : "smartdesign.address.CONTACT_PERSONS",
        "value" : "Contact person"
      }, {
        "id" : "smartdesign.address.DELIVERY_ADDRESS",
        "value" : "Delivery address"
      }, {
        "id" : "smartdesign.address.DTBHIERARCHY",
        "value" : "Zugehöriger Bundesverband"
      }, {
        "id" : "smartdesign.address.DTBHIERARCHYCLUB",
        "value" : "Zugehörige Vereine"
      }, {
        "id" : "smartdesign.address.DTBHIERARCHYKV",
        "value" : "Zugehöriger Kreisverband/Turngau"
      }, {
        "id" : "smartdesign.address.DTBHIERARCHYLTV",
        "value" : "Zugehöriger Landesturnverband"
      }, {
        "id" : "smartdesign.address.DTBSPEZIFISCH",
        "value" : "DTB spezifische Informationen"
      }, {
        "id" : "smartdesign.address.EMAIL",
        "value" : "E-mail"
      }, {
        "id" : "smartdesign.address.FAN_PORTFOLIO",
        "value" : "fan! Portfolio"
      }, {
        "id" : "smartdesign.address.FAX",
        "value" : "Fax"
      }, {
        "id" : "smartdesign.address.FIEDLS_ADMINISTRATIVE",
        "value" : "Zusätzliche Felder für geschultes Personal"
      }, {
        "id" : "smartdesign.address.KONTAKT",
        "value" : "Kontaktinformationen"
      }, {
        "id" : "smartdesign.address.LBL_LINKTO_CONTACT",
        "value" : "Link with contact"
      }, {
        "id" : "smartdesign.address.LINKS_ADMINS",
        "value" : "Zugehörige Administratoren"
      }, {
        "id" : "smartdesign.address.LINKS_ANNUALSTAMP",
        "value" : "Zugehörige Jahresmarken"
      }, {
        "id" : "smartdesign.address.LINKS_GYMNASTS",
        "value" : "Zugehörige Personen"
      }, {
        "id" : "smartdesign.address.LINKS_OPENITEMS",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "smartdesign.address.LINKS_SEPAMANDATE",
        "value" : "Zugehörige SEPA-Mandate"
      }, {
        "id" : "smartdesign.address.LINKS_STARTINGLICENCE",
        "value" : "Zugehörige Startrechte"
      }, {
        "id" : "smartdesign.address.LINKS_VERBAND",
        "value" : "Zugehörige Verknüpfungen"
      }, {
        "id" : "smartdesign.address.LINK_ADDRESS_COMPETITION",
        "value" : "Ausgetragene und Auszutragende Wettkämpfe"
      }, {
        "id" : "smartdesign.address.LINK_ANNUALSTAMP_GYMN",
        "value" : "Zugehörige Jahresmarke"
      }, {
        "id" : "smartdesign.address.LINK_CLUBMEMBERSHIP",
        "value" : "Vereinszugehörigkeit"
      }, {
        "id" : "smartdesign.address.LINK_SEPA_OPENITEMS",
        "value" : "Zugehöriges SEPA-Mandat"
      }, {
        "id" : "smartdesign.address.LINK_STARTINGLICENCE_GYMN",
        "value" : "Zugehörige Startrechte"
      }, {
        "id" : "smartdesign.address.LINK_TEXT_ANNUASTAMP",
        "value" : "Wähle die zugehörige Jahresmarke aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_ANNUST",
        "value" : "Wähle die zugehörigen Jahresmarken aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_COMP",
        "value" : "Wähle die zugehörigen Wettkämpfe aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_DTB",
        "value" : "Wähle den zugehörigen Bundesverband aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_GYMNAST",
        "value" : "Wähle die zugehörigen Personen aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_KV",
        "value" : "Wähle den zugehörigen Kreisverband aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_LTV",
        "value" : "Wähle den zugehörigen Landesturnverband aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_OPENITEM",
        "value" : "Wähle die zugehörige Gebühr aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_SEPAMANDAT",
        "value" : "Wähle die zugehörigen SEPA-Mandate aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_STARTINGLIC",
        "value" : "Wähle die zugehörigen Startrechte aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_STARTLIC",
        "value" : "Wähle die zugehörigen Startrechte aus."
      }, {
        "id" : "smartdesign.address.LINK_TEXT_VEREIN",
        "value" : "Wähle die zugehörigen Vereine aus."
      }, {
        "id" : "smartdesign.address.LINK_WITH_CONTACT",
        "value" : "Link with contact"
      }, {
        "id" : "smartdesign.address.MENU_CALL",
        "value" : "Call"
      }, {
        "id" : "smartdesign.address.MENU_EMAIL",
        "value" : "Write e-mail"
      }, {
        "id" : "smartdesign.address.MESSAGE_ADDRESS_IN_GYMNET",
        "value" : "Vereinsstammdaten können nur über das GymNet geändert werden. Die Änderungen werden automatisch in das TURNPORTAL übertragen."
      }, {
        "id" : "smartdesign.address.MESSAGE_KNOWWHATYOUDO",
        "value" : "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
      }, {
        "id" : "smartdesign.address.MSG_EMPTY_CALL",
        "value" : "You cannot call as there are no phone numbers."
      }, {
        "id" : "smartdesign.address.MSG_EMPTY_MAIL",
        "value" : "You cannot write an e-mail as there are no e-mail addresses saved."
      }, {
        "id" : "smartdesign.address.NAME_COMPANY",
        "value" : "Name and company"
      }, {
        "id" : "smartdesign.address.ORGANISATION",
        "value" : "Organization"
      }, {
        "id" : "smartdesign.address.ORGANISATION_INFORMATION",
        "value" : "Organizational information"
      }, {
        "id" : "smartdesign.address.PERSON",
        "value" : "Person"
      }, {
        "id" : "smartdesign.address.PHONE",
        "value" : "Phone"
      }, {
        "id" : "smartdesign.address.PRIVATE_ADDRESS",
        "value" : "Home address"
      }, {
        "id" : "smartdesign.address.PRIVATE_ADDRESS_BRACKETS",
        "value" : "Address (private)"
      }, {
        "id" : "smartdesign.address.SITE_PLAN",
        "value" : "Area map"
      }, {
        "id" : "smartdesign.address.SYNCHRONIZED_FIELD_VALUES",
        "value" : "Synchronous field values"
      }, {
        "id" : "smartdesign.address.VISITOR_ADDRESS",
        "value" : "Address for visitors"
      }, {
        "id" : "smartdesign.address.VISITOR_ADDRESS_BRACKETS",
        "value" : "Address (visit)"
      }, {
        "id" : "smartdesign.address.WEATHER",
        "value" : "Weather"
      }, {
        "id" : "smartdesign.address.WEBSITE",
        "value" : "Homepage"
      }, {
        "id" : "smartdesign.address.WEITERE_DATEN",
        "value" : "Weitere Daten"
      } ]
    }, {
      "id" : "smartdesign.appselection",
      "standalone" : false,
      "name" : "Apps",
      "iconHash" : "4134a01e0b3834de9e27502ad838464965a8c02a",
      "intents" : [ {
        "id" : "smartdesign.appselection.ShowWelcome",
        "pagesToKeep" : 1,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.appselection.ShowAppselection",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.appselection.ShowAppselection",
          "form" : "smartdesign.appselection.Appselection"
        } ],
        "internal" : [ {
          "intent" : "smartdesign.appselection.ShowWelcome",
          "form" : "smartdesign.appselection.Welcome"
        } ],
        "initialization" : "smartdesign.appselection.ShowAppselection"
      },
      "commands" : [ ],
      "types" : [ ],
      "forms" : [ {
        "id" : "smartdesign.appselection.Appselection",
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "header" : {
            "type" : "smartdesign.base.DefaultHeader",
            "contributionType" : "ALL",
            "title" : "Apps",
            "actions" : [ ],
            "viewActions" : [ ],
            "actionFavorites" : [ ],
            "viewFavorites" : [ ],
            "actionDefaults" : [ ],
            "viewActionDefaults" : [ ]
          },
          "content" : {
            "type" : "smartdesign.appselection.AppSelector",
            "name" : "appSelector"
          }
        } ]
      }, {
        "id" : "smartdesign.appselection.Welcome",
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.HorizontalLayout",
            "name" : "contentLayout"
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "smartdesign.appselection.APPS",
        "value" : "Apps"
      } ]
    }, {
      "id" : "smartdesign.appselection.none",
      "standalone" : false,
      "name" : "App selection",
      "iconHash" : "4134a01e0b3834de9e27502ad838464965a8c02a",
      "intents" : [ {
        "id" : "smartdesign.appselection.none.ShowEmptyForm",
        "pagesToKeep" : 1,
        "mode" : "read",
        "type" : "DEFAULT"
      } ],
      "navigation" : {
        "external" : [ ],
        "internal" : [ {
          "intent" : "smartdesign.appselection.none.ShowEmptyForm",
          "form" : "smartdesign.appselection.none.Empty"
        } ],
        "initialization" : "smartdesign.appselection.none.ShowEmptyForm"
      },
      "commands" : [ ],
      "types" : [ ],
      "forms" : [ {
        "id" : "smartdesign.appselection.none.Empty",
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.HorizontalLayout",
            "name" : "contentLayout"
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "smartdesign.appselection.none.TAB_CAPTION",
        "value" : "App selection"
      } ]
    }, {
      "id" : "smartdesign.base",
      "standalone" : false,
      "iconHash" : "94e9e8324b04d75d48402a04e653c655874aaf38",
      "intents" : [ {
        "id" : "smartdesign.base.NewRecord",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.ShowSearch",
        "pagesToKeep" : 1,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.OpenRecord",
        "pagesToKeep" : 1,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.OpenRecordWithList",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.ShowTable",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.None",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      }, {
        "id" : "smartdesign.base.ShowPermissionOwner",
        "pagesToKeep" : 0,
        "mode" : "read",
        "type" : "DEFAULT"
      } ],
      "navigation" : {
        "external" : [ {
          "intent" : "smartdesign.base.ShowTable",
          "form" : "smartdesign.base.Table"
        }, {
          "intent" : "smartdesign.base.OpenRecordWithList",
          "form" : "smartdesign.base.List"
        }, {
          "intent" : "smartdesign.base.NewRecord",
          "form" : "smartdesign.base.Empty",
          "auto" : {
            "intent" : "smartdesign.base.OpenRecord",
            "mode" : "edit"
          }
        } ],
        "internal" : [ ]
      },
      "commands" : [ {
        "id" : "smartdesign.base.cancel",
        "isGroup" : false,
        "label" : "Cancel",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.navigate_to_next_assistant_page",
        "isGroup" : false,
        "iconName" : "svg_arrow_wizard_right_arrow.svg",
        "label" : "Next",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.linkWithNewMenu",
        "isGroup" : true,
        "contributionPointId" : "linkWithNewMenu",
        "iconName" : "svg_toolbar_create_linked_object.svg",
        "label" : "Create",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.appeal_for_rights_on_record",
        "isGroup" : false,
        "iconName" : "svg_toolbar_key_lock_24.svg",
        "label" : "Request write rights",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.primaryMenu",
        "isGroup" : true,
        "contributionPointId" : "primaryMenu",
        "label" : "Action menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.save",
        "isGroup" : false,
        "label" : "Save",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.delete",
        "isGroup" : false,
        "iconName" : "svg_toolbar_delete.svg",
        "label" : "Delete",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.table_switch_to_compressed_view_with_navigation",
        "isGroup" : false,
        "iconName" : "svg_checkbox_checkbox_off.svg",
        "label" : "Close",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.menuitem_show_dossier_of_record",
        "isGroup" : false,
        "iconName" : "svg_radialmenu_show_dossier.svg",
        "label" : "Dossier",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.navigate_to_prev_assistant_page",
        "isGroup" : false,
        "iconName" : "svg_arrow_wizard_left_arrow.svg",
        "label" : "Previous",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.linkTo",
        "isGroup" : false,
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.newLinkedMenu",
        "isGroup" : true,
        "contributionPointId" : "newLinkedMenu",
        "iconName" : "svg_toolbar_new.svg",
        "label" : "New",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.edit_view_columns",
        "isGroup" : false,
        "iconName" : "svg_toolbar_edit.svg",
        "label" : "Select columns",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.delete_view",
        "isGroup" : false,
        "label" : "Delete view",
        "inGroupLabel" : "Delete",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.save_view",
        "isGroup" : false,
        "label" : "Save changes",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.table_switch_to_selection",
        "isGroup" : false,
        "description" : "Select data records",
        "iconName" : "svg_checkbox_checkbox_on.svg",
        "label" : "Select",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.navigate",
        "isGroup" : false,
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.new",
        "isGroup" : false,
        "iconName" : "svg_toolbar_new.svg",
        "label" : "New",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.open_filter_dialog",
        "isGroup" : false,
        "iconName" : "svg_toolbar_filter.svg",
        "label" : "Filter",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.save_view_with_dialog",
        "isGroup" : false,
        "label" : "View properties",
        "inGroupLabel" : "Properties",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.edit",
        "isGroup" : false,
        "iconName" : "svg_toolbar_edit.svg",
        "label" : "Edit",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.newMenu",
        "isGroup" : true,
        "contributionPointId" : "newMenu",
        "iconName" : "svg_toolbar_new.svg",
        "label" : "New",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.viewMenu",
        "isGroup" : true,
        "contributionPointId" : "viewMenu",
        "label" : "View menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.viewsMenu",
        "isGroup" : true,
        "contributionPointId" : "viewsMenu",
        "iconName" : "svg_toolbar_show_activities.svg",
        "label" : "Edit view",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.edit_tags",
        "isGroup" : false,
        "iconName" : "svg_toolbar_tag.svg",
        "label" : "Edit tags",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.actionMenu",
        "isGroup" : true,
        "contributionPointId" : "actionMenu",
        "label" : "Action menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.new_linked",
        "isGroup" : false,
        "iconName" : "svg_toolbar_create_linked_object.svg",
        "label" : "New",
        "inGroupLabel" : "New",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.tableLeftToolbar",
        "isGroup" : true,
        "contributionPointId" : "tableLeftToolbar",
        "label" : "View menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.menuitem_new_tab",
        "isGroup" : false,
        "iconName" : "svg_radialmenu_open_new_tab.svg",
        "label" : "New tab",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.print",
        "isGroup" : false,
        "iconName" : "svg_toolbar_print.svg",
        "label" : "Print",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.export_as_csv",
        "isGroup" : false,
        "iconName" : "svg_toolbar_export.svg",
        "label" : "Export",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.print_list",
        "isGroup" : false,
        "iconName" : "svg_toolbar_print.svg",
        "label" : "Print",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.linkWithMenu",
        "isGroup" : true,
        "contributionPointId" : "linkWithMenu",
        "iconName" : "svg_toolbar_link.svg",
        "label" : "Link with",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.table_switch_to_navigation",
        "isGroup" : false,
        "description" : "Close selection",
        "iconName" : "svg_checkbox_checkbox_off.svg",
        "label" : "Close",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.tableRightToolbar",
        "isGroup" : true,
        "contributionPointId" : "tableRightToolbar",
        "label" : "Action menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.unlink",
        "isGroup" : false,
        "iconName" : "svg_toolbar_remove_link.svg",
        "label" : "Remove link",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.contextMenu",
        "isGroup" : true,
        "contributionPointId" : "contextMenu",
        "label" : "Context menu",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.delete_multiple_records",
        "isGroup" : false,
        "iconName" : "svg_toolbar_delete.svg",
        "label" : "Delete",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.open_resulting_rights",
        "isGroup" : false,
        "iconName" : "svg_miscellaneous_expand.svg",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.edit_primary_links",
        "isGroup" : false,
        "iconName" : "svg_toolbar_edit.svg",
        "label" : "Edit parent elements",
        "style" : "ICON"
      }, {
        "id" : "smartdesign.base.send_email_to_permissionsowner",
        "isGroup" : false,
        "iconName" : "svg_toolbar_e_mail.svg",
        "label" : "Send e-mail to authorized persons",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.save_view_as",
        "isGroup" : false,
        "label" : "Save view as",
        "inGroupLabel" : "Save as",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.apply_link",
        "isGroup" : false,
        "label" : "Apply",
        "style" : "CAPTION"
      }, {
        "id" : "smartdesign.base.table_switch_to_uncompressed_view_with_selection",
        "isGroup" : false,
        "iconName" : "svg_checkbox_checkbox_on.svg",
        "label" : "Select",
        "style" : "ICONCAPTION"
      }, {
        "id" : "smartdesign.base.menuitem_edit_record",
        "isGroup" : false,
        "iconName" : "svg_radialmenu_edit.svg",
        "label" : "Edit",
        "style" : "ICONCAPTION"
      } ],
      "types" : [ {
        "id" : "smartdesign.base.ADDRESS",
        "fields" : [ {
          "type" : "STRING",
          "name" : "PAYMENT"
        }, {
          "type" : "STRING",
          "name" : "COUNTRY1"
        }, {
          "type" : "STRING",
          "name" : "COUNTRY3"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "COUNTRY2"
        }, {
          "type" : "STRING",
          "name" : "COUNTRY4"
        }, {
          "type" : "STRING",
          "name" : "POBOXTOWN1"
        }, {
          "type" : "STRING",
          "name" : "ADDRESSTERM"
        }, {
          "type" : "STRING",
          "name" : "POBOXTOWN4"
        }, {
          "type" : "STRING",
          "name" : "POBOXTOWN2"
        }, {
          "type" : "BOOLEAN",
          "name" : "CLUB_ACTIVE"
        }, {
          "type" : "DATETIME",
          "name" : "FIRSTCONTACTDATE"
        }, {
          "type" : "STRING",
          "name" : "BANKACCOUNTHOLDER"
        }, {
          "type" : "LINK",
          "name" : "SMARTDESIGN_ADDRESS_SEPA_GRANTER",
          "caption" : "Zugehöriges SEPA-Mandat",
          "linkAttribute" : "SEPA_GRANTER",
          "targetObjectType" : "smartdesign.base.SEPAMANDATE"
        }, {
          "type" : "STRING",
          "name" : "WWWFIELDSTR5"
        }, {
          "type" : "STRING",
          "customType" : "CURRENCY",
          "name" : "CURRENCYNAT"
        }, {
          "type" : "STRING",
          "name" : "TOWN1"
        }, {
          "type" : "STRING",
          "name" : "TYPE"
        }, {
          "type" : "STRING",
          "name" : "WWWFIELDSTR1"
        }, {
          "type" : "DATETIME",
          "name" : "BIRTHDAY"
        }, {
          "type" : "STRING",
          "name" : "WWWFIELDSTR0"
        }, {
          "type" : "STRING",
          "name" : "TOWN2"
        }, {
          "type" : "STRING",
          "name" : "TOWN3"
        }, {
          "type" : "STRING",
          "name" : "TOWN4"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "STRING",
          "name" : "DEPARTMENT"
        }, {
          "type" : "LINK",
          "name" : "LINK_CLUBADMIN",
          "caption" : "",
          "linkAttribute" : "CLUBADMIN",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "IMAGEPATH"
        }, {
          "type" : "STRING",
          "name" : "FUNCTION"
        }, {
          "type" : "STRING",
          "name" : "STREET1"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISORGANISATION"
        }, {
          "type" : "STRING",
          "name" : "STREET2"
        }, {
          "type" : "STRING",
          "name" : "RECIPIENT_DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "STREET3"
        }, {
          "type" : "LINK",
          "name" : "SMARTDESIGN_ADDRESS_OPENIT_INVCREC",
          "caption" : "Zugehörige Gebühren",
          "linkAttribute" : "OPENITM_INVCREC",
          "targetObjectType" : "smartdesign.base.OPENITEMS"
        }, {
          "type" : "STRING",
          "name" : "STREET4"
        }, {
          "type" : "INT",
          "name" : "REGIONALID"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISDELETED"
        }, {
          "type" : "LINK",
          "name" : "LINK_DISTRICTADMIN",
          "caption" : "",
          "linkAttribute" : "DISTRICTADMIN",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "LINK",
          "name" : "LINK_LTVADMIN",
          "caption" : "",
          "linkAttribute" : "LTVADMIN",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "GWNATIONALITY"
        }, {
          "type" : "GGUID",
          "name" : "ADDRESSCHECKEDBY4"
        }, {
          "type" : "INT",
          "name" : "GymnetID"
        }, {
          "type" : "STRING",
          "name" : "NATIONALITY"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "STRING",
          "name" : "GWADDITIONALINFO1"
        }, {
          "type" : "STRING",
          "name" : "EBIDSTATUS"
        }, {
          "type" : "STRING",
          "name" : "GWADDITIONALINFO2"
        }, {
          "type" : "STRING",
          "name" : "GWADDITIONALINFO3"
        }, {
          "type" : "STRING",
          "name" : "GWADDITIONALINFO4"
        }, {
          "type" : "STRING",
          "name" : "GYMNET_DTB_IDENTIFIER"
        }, {
          "type" : "STRING",
          "name" : "DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "name" : "MAILFIELDSTR1"
        }, {
          "type" : "STRING",
          "name" : "MAILFIELDSTR2"
        }, {
          "type" : "STRING",
          "name" : "MAILFIELDSTR3"
        }, {
          "type" : "STRING",
          "name" : "MAILFIELDSTR5"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "DECIMAL",
          "name" : "TURNOVER"
        }, {
          "type" : "STRING",
          "name" : "MASTERADDRESSID4"
        }, {
          "type" : "STRING",
          "name" : "MASTERADDRESSID3"
        }, {
          "type" : "STRING",
          "name" : "MASTERADDRESSID2"
        }, {
          "type" : "STRING",
          "name" : "MASTERADDRESSID1"
        }, {
          "type" : "BOOLEAN",
          "name" : "SAVEDATACHECK"
        }, {
          "type" : "STRING",
          "name" : "REGISTRATIONCOURT"
        }, {
          "type" : "STRING",
          "name" : "ZIP3"
        }, {
          "type" : "STRING",
          "name" : "EBIDNUMBER"
        }, {
          "type" : "STRING",
          "name" : "ZIP4"
        }, {
          "type" : "STRING",
          "name" : "ZIP1"
        }, {
          "type" : "STRING",
          "name" : "ZIP2"
        }, {
          "type" : "STRING",
          "name" : "CAPTION"
        }, {
          "type" : "STRING",
          "name" : "BILLING_COMPANY"
        }, {
          "type" : "TEXT",
          "name" : "PERMISSIONS"
        }, {
          "type" : "STRING",
          "name" : "FINANCIALINSTITUTE"
        }, {
          "type" : "INT",
          "name" : "LINKEDUSERID"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR2"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR3"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR4"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "GGUID",
          "name" : "IMAGEGUID"
        }, {
          "type" : "STRING",
          "name" : "ADDRESSLETTER"
        }, {
          "type" : "INT",
          "name" : "DISTRICTID"
        }, {
          "type" : "DATETIME",
          "name" : "CLUBRESOLUTION"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR5"
        }, {
          "type" : "STRING",
          "name" : "POBOX4"
        }, {
          "type" : "STRING",
          "name" : "POBOXZIP4"
        }, {
          "type" : "STRING",
          "name" : "FIRSTCONTACT"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR7"
        }, {
          "type" : "STRING",
          "name" : "POBOXZIP2"
        }, {
          "type" : "INT",
          "name" : "STANDARDEMAIL"
        }, {
          "type" : "STRING",
          "name" : "POBOXZIP1"
        }, {
          "type" : "STRING",
          "name" : "POBOX1"
        }, {
          "type" : "STRING",
          "name" : "POBOX2"
        }, {
          "type" : "STRING",
          "name" : "ACTIVITY_TYPE_PREFERRED"
        }, {
          "type" : "DATETIME",
          "name" : "DTBIDAPPLYDATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "KEEPFIELDSSYCHRONIZED"
        }, {
          "type" : "INT",
          "name" : "STANDARDADDRESS"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISTEMPLATE"
        }, {
          "type" : "STRING",
          "name" : "IMFIELDSTR6"
        }, {
          "type" : "STRING",
          "name" : "DTBID"
        }, {
          "type" : "STRING",
          "name" : "TURNOVERTAXID"
        }, {
          "type" : "GGUID",
          "name" : "gguid"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "STRING",
          "name" : "PHONEFIELDSTR10"
        }, {
          "type" : "STRING",
          "name" : "NAME"
        }, {
          "type" : "STRING",
          "name" : "FAXFIELDSTR5"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "STRING",
          "name" : "FAXFIELDSTR4"
        }, {
          "type" : "GGUID",
          "name" : "PRIMARYORGANISATION"
        }, {
          "type" : "STRING",
          "name" : "GWADDRESSFORMAT_NAME"
        }, {
          "type" : "DATETIME",
          "name" : "ADDRESSCHECKEDON4"
        }, {
          "type" : "LINK",
          "name" : "LINK_DTBADMIN",
          "caption" : "",
          "linkAttribute" : "DTBADMIN",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "GWSTATE3"
        }, {
          "type" : "STRING",
          "name" : "GWSTATE4"
        }, {
          "type" : "STRING",
          "name" : "GWSTATE1"
        }, {
          "type" : "STRING",
          "name" : "GWSTATE2"
        }, {
          "type" : "STRING",
          "name" : "FAXFIELDSTR3"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "STRING",
          "name" : "FAXFIELDSTR1"
        }, {
          "type" : "STRING",
          "name" : "REGISTRATIONNUMBER"
        }, {
          "type" : "STRING",
          "name" : "CUSTOMERID"
        }, {
          "type" : "STRING",
          "name" : "SUBURB4"
        }, {
          "type" : "STRING",
          "name" : "SUBURB3"
        }, {
          "type" : "STRING",
          "name" : "SUBURB2"
        }, {
          "type" : "STRING",
          "name" : "SUBURB1"
        }, {
          "type" : "INT",
          "name" : "STANDARDPHONE2"
        }, {
          "type" : "INT",
          "name" : "STANDARDPHONE1"
        }, {
          "type" : "STRING",
          "name" : "GENDER"
        }, {
          "type" : "DATETIME",
          "name" : "SAVEDATACHECKDATE"
        }, {
          "type" : "DATETIME",
          "name" : "DECEASEDON"
        }, {
          "type" : "STRING",
          "name" : "BRANCH"
        }, {
          "type" : "STRING",
          "name" : "GWIBAN"
        }, {
          "type" : "STRING",
          "name" : "ACTIVITY_TYPE_ALLOWED"
        }, {
          "type" : "STRING",
          "name" : "CHRISTIANNAME"
        }, {
          "type" : "DATETIME",
          "name" : "CHECKEDBYUSERON"
        }, {
          "type" : "DATETIME",
          "name" : "REGISTRATIONDATE"
        }, {
          "type" : "STRING",
          "name" : "COMPNAME"
        }, {
          "type" : "BOOLEAN",
          "name" : "ADR_DEACTIVATED"
        }, {
          "type" : "GGUID",
          "name" : "LINKEDUSERGUID"
        }, {
          "type" : "STRING",
          "name" : "TITLE"
        }, {
          "type" : "INT",
          "name" : "CLUBID"
        }, {
          "type" : "STRING",
          "name" : "GWBIC"
        } ],
        "summary" : {
          "description" : "TYPE"
        }
      }, {
        "id" : "smartdesign.base.ANNUALSTAMP",
        "fields" : [ {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "STRING",
          "name" : "CORRESPONDING_CLUB"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "LINKED_CLUB"
        }, {
          "type" : "STRING",
          "name" : "STAMPTYPE"
        }, {
          "type" : "LINK",
          "name" : "ANNUALSTAMP_GYMNAST_LINKFIELD",
          "caption" : "Zugehörige Person",
          "linkAttribute" : "ANNUALST_GYMN",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "LINK",
          "name" : "ANNUALSTAMP_OPENITEMS_LINKFIELD",
          "caption" : "Zugehörige Jahresmarke/Gebühren",
          "linkAttribute" : "ANNUALST_OPNITM",
          "targetObjectType" : "smartdesign.base.OPENITEMS"
        }, {
          "type" : "LINK",
          "name" : "ANNUALSTAMP_CLUB_LINKFIELD",
          "caption" : "",
          "linkAttribute" : "ANNUALST_CLUB",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "LINKED_GYMNAST"
        }, {
          "type" : "DATETIME",
          "name" : "STAMPVALIDFROM"
        }, {
          "type" : "STRING",
          "name" : "CORRESPONDING_GYMNAST"
        }, {
          "type" : "DATETIME",
          "name" : "STAMPVALIDUNTIL"
        }, {
          "type" : "CURRENCY",
          "name" : "STAMPFEE"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        } ],
        "summary" : {
          "caption" : "CORRESPONDING_GYMNAST",
          "description" : "CORRESPONDING_CLUB"
        }
      }, {
        "id" : "smartdesign.base.APPOINTMENT",
        "fields" : [ {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "name" : "GISDESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "DATETIME",
          "name" : "START_DT"
        }, {
          "type" : "STRING",
          "name" : "DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "name" : "TIMEZONE"
        }, {
          "type" : "BOOLEAN",
          "name" : "WHOLEDAY"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "INT",
          "name" : "DAYOFMONTH"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISTEMPLATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "NOTES2OVERFLOW"
        }, {
          "type" : "STRING",
          "name" : "DURATIONSTR"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "DATETIME",
          "name" : "START_DT_ORIG"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT_ORIG"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISDELETED"
        }, {
          "type" : "INT",
          "name" : "MONTHOFYEAR"
        }, {
          "type" : "STRING",
          "name" : "APPTYPE"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT"
        }, {
          "type" : "TEXT",
          "name" : "PARTICIPANTS"
        }, {
          "type" : "DOUBLE",
          "name" : "DURATION"
        }, {
          "type" : "BOOLEAN",
          "name" : "CASAWAY"
        } ],
        "constraints" : [ {
          "type" : "dateTimeInterval",
          "start" : "START_DT",
          "end" : "END_DT",
          "duration" : "WHOLEDAY"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "DESCRIPTION"
        }
      }, {
        "id" : "smartdesign.base.COMPETITION",
        "fields" : [ {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "DATETIME",
          "name" : "CHECK_DATE"
        }, {
          "type" : "DATETIME",
          "name" : "YEAR_UNTIL"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "LINK",
          "name" : "COMPETITION_DISCIPLINE_LINKFIELD",
          "backingField" : "COMPETITIONSPORTTYPE",
          "fieldsToSave" : [ "SPORTTYPE" ],
          "linkAttribute" : "COMPET_DISCIP",
          "targetObjectType" : "smartdesign.base.DISCIPLINE"
        }, {
          "type" : "STRING",
          "name" : "COMPETITIONSPORTTYPE"
        }, {
          "type" : "DATETIME",
          "name" : "YEAR_FROM"
        }, {
          "type" : "STRING",
          "name" : "GENDER"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "COMPETITION_NAME"
        }, {
          "type" : "DATETIME",
          "name" : "COMPETITION_DATE"
        }, {
          "type" : "INT",
          "name" : "GYMNET_COMPETITION_ID"
        } ],
        "summary" : {
          "caption" : "COMPETITION_NAME",
          "description" : "COMPETITION_DATE"
        }
      }, {
        "id" : "smartdesign.base.DISCIPLINE",
        "fields" : [ {
          "type" : "STRING",
          "name" : "SPORTTYPE"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "DISCIPLINEMODE"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "STRING",
          "name" : "DISCIPLINESTATE"
        } ],
        "summary" : {
          "caption" : "SPORTTYPE",
          "description" : "DISCIPLINEMODE"
        }
      }, {
        "id" : "smartdesign.base.DOCUMENT",
        "fields" : [ {
          "type" : "DATETIME",
          "name" : "DOCDATE"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "CHECKOUTUSERDESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "STRING",
          "name" : "EXTERNALLINK"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISFORMLETTER"
        }, {
          "type" : "RESOURCE",
          "name" : "FILERESOURCE"
        }, {
          "type" : "STRING",
          "name" : "DOCUMENTTYPEWITHSIZE"
        }, {
          "type" : "STRING",
          "name" : "DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "name" : "GWFILETYPE"
        }, {
          "type" : "STRING",
          "name" : "DOCTYPE"
        }, {
          "type" : "STRING",
          "name" : "TYPE"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "RESOURCE",
          "name" : "ADDITIONALFILESRESOURCE"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISTEMPLATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "NOTES2OVERFLOW"
        }, {
          "type" : "STRING",
          "name" : "CHECKOUTCLIENTFILENAME"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "INT",
          "name" : "GWDOCUMENTSIZE"
        }, {
          "type" : "RESOURCE",
          "name" : "CHECKOUTFILERESOURCE"
        }, {
          "type" : "STRING",
          "name" : "GWDOCUMENTTYPE"
        }, {
          "type" : "GGUID",
          "name" : "CHECKOUTUSERGUID"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "DATETIME",
          "name" : "GWVALIDATESTARTDATE"
        }, {
          "type" : "DATETIME",
          "name" : "GWVALIDATEENDDATE"
        }, {
          "type" : "STRING",
          "name" : "GWDOCUMENTLANGUAGE"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "STRING",
          "name" : "ARCHIVEFILE"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISDELETED"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "GWFILETYPE"
        }
      }, {
        "id" : "smartdesign.base.EMAILSTORE",
        "fields" : [ {
          "type" : "BOOLEAN",
          "name" : "ISFORMEMAIL"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "STRING",
          "name" : "FORMEMAILSENDERNAME"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "INT",
          "name" : "PRIORITY"
        }, {
          "type" : "DATETIME",
          "name" : "RECEIVEDATE"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "DATETIME",
          "name" : "ANSWERDATE"
        }, {
          "type" : "STRING",
          "name" : "XTO"
        }, {
          "type" : "BOOLEAN",
          "name" : "HASATTACHMENTS"
        }, {
          "type" : "STRING",
          "name" : "DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "name" : "TYPE"
        }, {
          "type" : "STRING",
          "name" : "INTERNETMESSAGEID"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "XBCC"
        }, {
          "type" : "STRING",
          "name" : "EMAILSETTINGS"
        }, {
          "type" : "RESOURCE",
          "name" : "BODYHTML"
        }, {
          "type" : "DATETIME",
          "name" : "FORMEMAILSENDAT"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "DATETIME",
          "name" : "SENDDATE"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "INT",
          "name" : "EMAILSIZE"
        }, {
          "type" : "STRING",
          "name" : "XCC"
        }, {
          "type" : "STRING",
          "name" : "SUBJECT"
        }, {
          "type" : "STRING",
          "name" : "XFROM"
        }, {
          "type" : "BOOLEAN",
          "name" : "ARCHIVED"
        }, {
          "type" : "TEXT",
          "name" : "BODY"
        }, {
          "type" : "STRING",
          "name" : "GWMAILMERGESUBJECT"
        }, {
          "type" : "STRING",
          "name" : "FORMEMAILSENDERADDRESS"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "DESCRIPTION"
        }
      }, {
        "id" : "smartdesign.base.GWOPPORTUNITY",
        "fields" : [ {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "LINK",
          "name" : "ACCOUNTINFORMATION_LINK",
          "backingField" : "ACCOUNTINFORMATION",
          "guidField" : "ACCOUNTGUID",
          "linkAttribute" : "GWOP_Customer",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "DATETIME",
          "name" : "START_DT"
        }, {
          "type" : "STRING",
          "name" : "STATUS"
        }, {
          "type" : "STRING",
          "name" : "PHASE"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "PERSONINCHARGE"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "customType" : "CURRENCY",
          "name" : "CURRENCYNAT"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "CURRENCY",
          "customType" : "MONEY",
          "name" : "RELATIVEAMOUNT"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "ATTORNEYINFACT"
        }, {
          "type" : "GGUID",
          "name" : "ACCOUNTGUID"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2",
          "timestampAllowed" : true,
          "userSensitive" : false
        }, {
          "type" : "STRING",
          "name" : "PRODUCTPOSITIONSDISPLAY"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "CURRENCY",
          "customType" : "MONEY",
          "name" : "OPPTOTALAMOUNT"
        }, {
          "type" : "INT",
          "name" : "PROBABILITY"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "STRING",
          "name" : "SOURCE"
        }, {
          "type" : "STRING",
          "name" : "ACCOUNTINFORMATION"
        }, {
          "type" : "DECIMAL",
          "name" : "REBATE"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT"
        } ],
        "constraints" : [ {
          "type" : "dateTimeInterval",
          "start" : "START_DT",
          "end" : "END_DT"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "STATUS"
        }
      }, {
        "id" : "smartdesign.base.GWOPPORTUNITYPOS",
        "fields" : [ {
          "type" : "STRING",
          "name" : "PRODUCTDESCRIPTION",
          "timestampAllowed" : true,
          "userSensitive" : false
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "GGUID",
          "name" : "OPPORTUNITYGUID"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "STRING",
          "name" : "QUANTITY_UNIT"
        }, {
          "type" : "TEXT",
          "name" : "POSITIONNOTES",
          "timestampAllowed" : true,
          "userSensitive" : false
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "DISCOUNTINFO"
        }, {
          "type" : "DOUBLE",
          "name" : "QUANTITY"
        }, {
          "type" : "CURRENCY",
          "customType" : "MONEY",
          "name" : "TOTALPRICE"
        }, {
          "type" : "GGUID",
          "name" : "PRODUCTGUID"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "STRING",
          "name" : "PRODUCTNAME"
        }, {
          "type" : "STRING",
          "name" : "POSITION"
        }, {
          "type" : "CURRENCY",
          "customType" : "MONEY",
          "name" : "ADJUSTEDPRICE"
        }, {
          "type" : "STRING",
          "name" : "QUANTITYINFO"
        }, {
          "type" : "STRING",
          "name" : "PRODUCTNUMBER"
        }, {
          "type" : "STRING",
          "name" : "TOTALPRICEINFO"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "DECIMAL",
          "name" : "REBATE"
        }, {
          "type" : "STRING",
          "customType" : "CURRENCY",
          "name" : "CURRENCYNAT"
        }, {
          "type" : "CURRENCY",
          "customType" : "MONEY",
          "name" : "PRODUCTPRICE"
        } ],
        "summary" : {
          "caption" : "INSERTUSER",
          "description" : "INSERTTIMESTAMP"
        }
      }, {
        "id" : "smartdesign.base.GWPHONECALL",
        "fields" : [ {
          "type" : "INT",
          "name" : "URGENCY"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "STATE"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "DATETIME",
          "name" : "START_DT"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "PHONECALLUSER"
        }, {
          "type" : "STRING",
          "name" : "STATUS"
        }, {
          "type" : "STRING",
          "name" : "DESCRIPTION"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "LINK",
          "name" : "CUSTOMERSHORTINFO_LINK",
          "backingField" : "CUSTOMERSHORTINFO",
          "linkAttribute" : "PHC_Partner",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISTEMPLATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "NOTES2OVERFLOW"
        }, {
          "type" : "STRING",
          "name" : "DIRECTION"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "CUSTOMSUGGESTVALUES",
          "name" : "DIALLEDNUMBERSUGGESTIONS"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "STRING",
          "name" : "DIALLEDNUMBER",
          "suggestionsProvidedBy" : "DIALLEDNUMBERSUGGESTIONS",
          "timestampAllowed" : false,
          "userSensitive" : false
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "DATETIME",
          "name" : "DUETODATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISDELETED"
        }, {
          "type" : "STRING",
          "name" : "CUSTOMERSHORTINFO"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT"
        }, {
          "type" : "DOUBLE",
          "name" : "DURATION"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "DESCRIPTION"
        }
      }, {
        "id" : "smartdesign.base.OPENITEMS",
        "fields" : [ {
          "type" : "LINK",
          "name" : "OFFENEPOSTEN_APP_ADDRESSE_INCVREC",
          "caption" : "Rechnungsempfänger",
          "linkAttribute" : "OPENITM_INVCREC",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "DIFFERENT_ZIP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "DUE_DATE"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "DIFFERENT_STREET"
        }, {
          "type" : "STRING",
          "name" : "INVOICE_RECIPIENT"
        }, {
          "type" : "STRING",
          "name" : "DIFFERENT_RECIPIENT"
        }, {
          "type" : "INT",
          "name" : "INGYMNET"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "STRING",
          "name" : "SEPAMANDATE_LINK"
        }, {
          "type" : "DATETIME",
          "name" : "INVOICE_DATE"
        }, {
          "type" : "STRING",
          "name" : "DIFFERENT_TOWN"
        }, {
          "type" : "TEXT",
          "name" : "POSITIONS"
        }, {
          "type" : "LINK",
          "name" : "DTB_OFFENEPOSTEN_APP_SEPAMANDATE",
          "caption" : "Kontoinhaber",
          "linkAttribute" : "OPNITM2SEPA",
          "targetObjectType" : "smartdesign.base.SEPAMANDATE"
        }, {
          "type" : "CURRENCY",
          "name" : "AMOUNT"
        }, {
          "type" : "LINK",
          "name" : "OFFENEPOSTEN_APP_ADDRESSE_MAILREC",
          "caption" : "Besteller",
          "linkAttribute" : "OPENITM_MAILREC",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "BUYER"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ORDER_STATUS"
        } ],
        "summary" : {
          "caption" : "INVOICE_RECIPIENT",
          "description" : "AMOUNT"
        }
      }, {
        "id" : "smartdesign.base.PROJECT",
        "fields" : [ {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "DATETIME",
          "name" : "STARTDATE"
        }, {
          "type" : "STRING",
          "name" : "PROJECTDIRECTORY"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "PROJECTDEPUTY"
        }, {
          "type" : "STRING",
          "name" : "PRJSTATUS"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "INT",
          "name" : "EDITPERMISSION"
        }, {
          "type" : "STRING",
          "name" : "NOTES"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "STRING",
          "customType" : "CURRENCY",
          "name" : "CURRENCYNAT"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "INT",
          "name" : "GWNOTESFORMAT"
        }, {
          "type" : "DECIMAL",
          "customType" : "MONEY",
          "name" : "CALCULATEDCOSTS"
        }, {
          "type" : "DECIMAL",
          "customType" : "MONEY",
          "name" : "BUDGET"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "STRING",
          "name" : "PRJNUMBER"
        }, {
          "type" : "DATETIME",
          "name" : "PLAN_START_DT"
        }, {
          "type" : "INT",
          "name" : "OID"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2",
          "timestampAllowed" : true,
          "userSensitive" : false
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "DATETIME",
          "name" : "ENDDATE"
        }, {
          "type" : "DATETIME",
          "name" : "PLAN_END_DT"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "DATETIME",
          "name" : "ENDDATE_PLANNED"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "PROJECTOWNER"
        }, {
          "type" : "DATETIME",
          "name" : "CALCULATEDTIMESTAMP"
        }, {
          "type" : "DECIMAL",
          "customType" : "MONEY",
          "name" : "CALCULATEDBILLINGS"
        } ],
        "constraints" : [ {
          "type" : "dateTimeInterval",
          "start" : "STARTDATE",
          "end" : "ENDDATE"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "PRJNUMBER"
        }
      }, {
        "id" : "smartdesign.base.SEPAMANDATE",
        "fields" : [ {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "STRING",
          "name" : "IBAN"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "INT",
          "name" : "ACCOUNT_ID"
        }, {
          "type" : "LINK",
          "name" : "SEPAMANDAT_APP_DESIGNER_LINK_FIELD",
          "caption" : "",
          "linkAttribute" : "SEPA_GRANTER",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "STRING",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "DATETIME",
          "name" : "SEPAVALIDFROM"
        }, {
          "type" : "DATETIME",
          "name" : "SEPAVALIDUNTIL"
        }, {
          "type" : "STRING",
          "name" : "SEPABANKACCOUNTHOLDER"
        }, {
          "type" : "STRING",
          "name" : "SEPA_TYPE"
        }, {
          "type" : "DATETIME",
          "name" : "SEPA_USED"
        }, {
          "type" : "STRING",
          "name" : "SEPA_NUMBER"
        }, {
          "type" : "DATETIME",
          "name" : "SEPAAGREEMENTDATE"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "BOOLEAN",
          "name" : "SEPAAGREEMENT"
        }, {
          "type" : "STRING",
          "name" : "SEPA_STATUS"
        } ],
        "summary" : {
          "caption" : "SEPABANKACCOUNTHOLDER",
          "description" : "IBAN"
        }
      }, {
        "id" : "smartdesign.base.STARTINGLICENCE",
        "fields" : [ {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "LICENCEVALIDUNTIL"
        }, {
          "type" : "BOOLEAN",
          "name" : "LOCKED"
        }, {
          "type" : "DATETIME",
          "name" : "LICENCEVALIDFROM"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "LINK",
          "name" : "STARTINGLICENCE_APP_DISCIPLINE",
          "caption" : "Zugehörige Sportart",
          "linkAttribute" : "DISCIPLINE_LIC",
          "targetObjectType" : "smartdesign.base.DISCIPLINE"
        }, {
          "type" : "LINK",
          "name" : "STARTINGLICENCE_APP_GYMNAST",
          "caption" : "Zugehörige Person",
          "linkAttribute" : "LICENCE_GYMNAST",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        }, {
          "type" : "BOOLEAN",
          "name" : "LOCKED_FIXEDPLAYED"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "STRING",
          "name" : "LICENCESPORTTYPE"
        }, {
          "type" : "STRING",
          "name" : "LICENCESTATE"
        }, {
          "type" : "LINK",
          "name" : "STARTINGLICENCE_APP_ANNUALSTAMP",
          "caption" : "",
          "linkAttribute" : "ANNUALST_LIC",
          "targetObjectType" : "smartdesign.base.ANNUALSTAMP"
        }, {
          "type" : "STRING",
          "name" : "CORRESPONDING_GYMNAST"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "LINK",
          "name" : "STARTINGLICENCE_APP_CLUB",
          "caption" : "",
          "linkAttribute" : "LICENCE_CLUB",
          "targetObjectType" : "smartdesign.base.ADDRESS"
        } ],
        "summary" : {
          "caption" : "CORRESPONDING_GYMNAST",
          "description" : "LICENCESPORTTYPE"
        }
      }, {
        "id" : "smartdesign.base.TODO",
        "fields" : [ {
          "type" : "STRING",
          "name" : "UPDATEUSER"
        }, {
          "type" : "DATETIME",
          "name" : "UPDATETIMESTAMP"
        }, {
          "type" : "STRING",
          "name" : "KEYWORD"
        }, {
          "type" : "STRING",
          "name" : "PRIORITY"
        }, {
          "type" : "STRING",
          "name" : "INSERTUSER"
        }, {
          "type" : "INT",
          "name" : "FOREIGNEDITPERMISSION"
        }, {
          "type" : "DATETIME",
          "name" : "START_DT"
        }, {
          "type" : "STRING",
          "name" : "CATEGORY"
        }, {
          "type" : "STRING",
          "customType" : "USER",
          "name" : "PERSONINCHARGE"
        }, {
          "type" : "GGUID",
          "name" : "GGUID"
        }, {
          "type" : "STRING",
          "name" : "ICON"
        }, {
          "type" : "DATETIME",
          "name" : "INSERTTIMESTAMP"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISTEMPLATE"
        }, {
          "type" : "BOOLEAN",
          "name" : "NOTES2OVERFLOW"
        }, {
          "type" : "STRING",
          "name" : "VIEWICON"
        }, {
          "type" : "STRING",
          "name" : "CLASSIFICATION"
        }, {
          "type" : "TEXT",
          "name" : "NOTES2",
          "timestampAllowed" : true,
          "userSensitive" : false
        }, {
          "type" : "DATETIME",
          "name" : "START_DT_ORIG"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT_ORIG"
        }, {
          "type" : "STRING",
          "name" : "OWNERNAME"
        }, {
          "type" : "GGUID",
          "name" : "OWNERGUID"
        }, {
          "type" : "BOOLEAN",
          "name" : "ISDELETED"
        }, {
          "type" : "STRING",
          "name" : "WORKINGSTATUS"
        }, {
          "type" : "INT",
          "name" : "WORKINGPERCENT"
        }, {
          "type" : "DOUBLE",
          "name" : "WORKINGHOURREAL"
        }, {
          "type" : "DATETIME",
          "name" : "END_DT"
        }, {
          "type" : "BOOLEAN",
          "name" : "SINGLE_MODIFIED"
        }, {
          "type" : "DOUBLE",
          "name" : "DURATION"
        } ],
        "constraints" : [ {
          "type" : "dateTimeInterval",
          "start" : "START_DT",
          "end" : "END_DT"
        } ],
        "summary" : {
          "caption" : "KEYWORD",
          "description" : "WORKINGSTATUS"
        }
      } ],
      "forms" : [ {
        "id" : "smartdesign.base.Empty",
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "title" : "",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.HorizontalLayout",
            "name" : "contentLayout"
          }
        } ]
      }, {
        "id" : "smartdesign.base.List",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "md",
          "type" : "MassData"
        } ],
        "header" : {
          "type" : "smartdesign.base.DefaultHeader",
          "contributionType" : "NONE",
          "actionFavorites" : [ ],
          "viewFavorites" : [ ],
          "actionDefaults" : [ ],
          "viewActionDefaults" : [ ]
        },
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "content" : {
            "type" : "smartdesign.base.List",
            "name" : "list",
            "hideNoEntriesFoundCaption" : false,
            "datasource" : "md",
            "entryAction" : {
              "intent" : "smartdesign.base.OpenRecord"
            }
          }
        } ]
      }, {
        "id" : "smartdesign.base.Table",
        "context" : [ {
          "imported" : true,
          "primary" : true,
          "optional" : false,
          "name" : "tableMD",
          "type" : "MassData"
        } ],
        "states" : [ {
          "mode" : "read",
          "height" : "CONTAINER",
          "width" : "UNDEFINED",
          "padding" : "DEFAULT",
          "header" : {
            "type" : "smartdesign.base.DefaultHeader",
            "contributionType" : "ALL",
            "actions" : [ {
              "command" : "smartdesign.base.delete_multiple_records",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.edit_tags",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.export_as_csv",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.linkWithMenu",
              "contributionPointId" : "linkWithMenu",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.annualstamp.linkToAnnualstamp",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.competition.linkToCompetition",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.discipline.linkToDiscipline",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.offeneposten.linkToOffeneposten",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.sepamandat.linkToSepamandat",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "dtb.startinglicence.linkToStartinglicence",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.address.linkToContact",
              "parentContributionPointId" : "linkWithMenu",
              "context" : {
                "type" : "DataObject",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.print_list",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.unlink",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "DossierMassData"
              }
            }, {
              "command" : "smartdesign.base.unlink",
              "parentContributionPointId" : "actionMenu",
              "context" : {
                "type" : "LinkMassData",
                "source" : "*",
                "target" : "*"
              }
            } ],
            "viewActions" : [ {
              "command" : "smartdesign.base.edit_view_columns",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "group" : "smartdesign.base.viewsMenu",
              "contributionPointId" : "viewsMenu",
              "parentContributionPointId" : "viewMenu",
              "context" : {
                "type" : "DataObjectMassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_with_dialog",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.save_view_as",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            }, {
              "command" : "smartdesign.base.delete_view",
              "parentContributionPointId" : "viewsMenu",
              "context" : {
                "type" : "MassData",
                "objecttype" : "*"
              }
            } ],
            "actionFavorites" : [ ],
            "viewFavorites" : [ ],
            "actionDefaults" : [ {
              "command" : "smartdesign.base.save_view"
            }, {
              "group" : "smartdesign.base.newMenu",
              "contributionPointId" : "newMenu"
            } ],
            "viewActionDefaults" : [ {
              "command" : "smartdesign.base.table_switch_to_selection"
            }, {
              "command" : "smartdesign.base.table_switch_to_navigation"
            }, {
              "command" : "searchfield_placeholder"
            } ]
          },
          "content" : {
            "type" : "smartdesign.base.Table",
            "name" : "bigTable",
            "datasource" : "tableMD"
          }
        } ]
      } ],
      "translations" : [ {
        "id" : "smartdesign.base.ADDITIONAL_INFORMATION",
        "value" : "Additional information"
      }, {
        "id" : "smartdesign.base.ANNUALSTAMP_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : ""
      }, {
        "id" : "smartdesign.base.ANNUALSTAMP_APP_DESIGNER_LINK_FIELD_CAPTION_2",
        "value" : ""
      }, {
        "id" : "smartdesign.base.ANNUALSTAMP_OPENITEMS_LINK",
        "value" : "Zugehörige Jahresmarke/Gebühren"
      }, {
        "id" : "smartdesign.base.CATCHPHRASES",
        "value" : "Tags"
      }, {
        "id" : "smartdesign.base.CMD_LBL_APPEAL_FOR_RIGHTS",
        "value" : "Request write rights"
      }, {
        "id" : "smartdesign.base.CMD_LBL_APPLY_LINK",
        "value" : "Apply"
      }, {
        "id" : "smartdesign.base.CMD_LBL_CANCEL",
        "value" : "Cancel"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DELETE",
        "value" : "Delete"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DELETE_VIEW",
        "value" : "Delete view"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DELETE_VIEW_INGROUP",
        "value" : "Delete"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DOCUMENT_CHECKIN",
        "value" : "Save changes"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DOCUMENT_EDIT",
        "value" : "Edit"
      }, {
        "id" : "smartdesign.base.CMD_LBL_DOCUMENT_VIEW",
        "value" : "Display"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EDIT",
        "value" : "Edit"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EDIT_PRIMARY_LINKS",
        "value" : "Edit parent elements"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EDIT_VIEW",
        "value" : "Edit view"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EDIT_VIEW_COLUMNS",
        "value" : "Select columns"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EMAIL_TO_PARTICIPANTS",
        "value" : "Send e-mail to participants"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EMAIL_TO_PERMISSIONSOWNER",
        "value" : "Send e-mail to authorized persons"
      }, {
        "id" : "smartdesign.base.CMD_LBL_EXPORT",
        "value" : "Export"
      }, {
        "id" : "smartdesign.base.CMD_LBL_IMPORT",
        "value" : "Import data"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NAVIGATE_TO_NEXT_ASSISTANT_PAGE",
        "value" : "Next"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NAVIGATE_TO_PREV_ASSISTANT_PAGE",
        "value" : "Previous"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NEW",
        "value" : "New"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NEW_ARCHIVE_DOCUMENT",
        "value" : "New archive document"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NEW_CONTACT_PERSON",
        "value" : "Create contact person"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NEW_INGROUP",
        "value" : "New"
      }, {
        "id" : "smartdesign.base.CMD_LBL_NEW_MEMO_DOCUMENT",
        "value" : "Create short note"
      }, {
        "id" : "smartdesign.base.CMD_LBL_OPEN_FILTER_DIALOG",
        "value" : "Filter"
      }, {
        "id" : "smartdesign.base.CMD_LBL_OPEN_REPORT_IN_POPUP",
        "value" : "Open in new window"
      }, {
        "id" : "smartdesign.base.CMD_LBL_PRINT",
        "value" : "Print"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE",
        "value" : "Save"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE_VIEW",
        "value" : "Save changes"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE_VIEW_AS",
        "value" : "Save view as"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE_VIEW_AS_INGROUP",
        "value" : "Save as"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE_VIEW_WITH_DIALOG",
        "value" : "View properties"
      }, {
        "id" : "smartdesign.base.CMD_LBL_SAVE_VIEW_WITH_DIALOG_INGROUP",
        "value" : "Properties"
      }, {
        "id" : "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_NAVIGATION",
        "value" : "Close"
      }, {
        "id" : "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_NAVIGATION_TOOLTIP",
        "value" : "Close selection"
      }, {
        "id" : "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_SELECTION",
        "value" : "Select"
      }, {
        "id" : "smartdesign.base.CMD_LBL_TABLE_SWITCH_TO_SELECTION_TOOLTIP",
        "value" : "Select data records"
      }, {
        "id" : "smartdesign.base.CMD_LBL_TAG",
        "value" : "Edit tags"
      }, {
        "id" : "smartdesign.base.CMD_LBL_UNDO_CHECKOUT",
        "value" : "Discard changes"
      }, {
        "id" : "smartdesign.base.CMD_LBL_UNLINK",
        "value" : "Remove link"
      }, {
        "id" : "smartdesign.base.CONTEXT_MENU",
        "value" : "Context menu"
      }, {
        "id" : "smartdesign.base.CREATE_LINK",
        "value" : "Create link"
      }, {
        "id" : "smartdesign.base.DELETE_LINK",
        "value" : "Remove link"
      }, {
        "id" : "smartdesign.base.DOSSIER",
        "value" : "Dossier"
      }, {
        "id" : "smartdesign.base.DTB_OFFENEPOSTEN_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : ""
      }, {
        "id" : "smartdesign.base.DTB_STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : "Discipline"
      }, {
        "id" : "smartdesign.base.EMPTY_STRING",
        "value" : ""
      }, {
        "id" : "smartdesign.base.EXTENDED_LIST",
        "value" : "Extended list"
      }, {
        "id" : "smartdesign.base.FIELDS_ADMINISTRATIVE",
        "value" : "Zusätzliche Felder für geschultes Personal"
      }, {
        "id" : "smartdesign.base.GENERAL",
        "value" : "General"
      }, {
        "id" : "smartdesign.base.GROUP_ACTION_MENU",
        "value" : "Action menu"
      }, {
        "id" : "smartdesign.base.GROUP_VIEW_MENU",
        "value" : "View menu"
      }, {
        "id" : "smartdesign.base.INFORMATION",
        "value" : "Info"
      }, {
        "id" : "smartdesign.base.KEYWORD",
        "value" : "Subject"
      }, {
        "id" : "smartdesign.base.LBL_LINKS_TOOLBAR_BUTTON",
        "value" : "Link with..."
      }, {
        "id" : "smartdesign.base.LINKLISTGROUPEDBYROLES_CAPTION_0",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "smartdesign.base.LINKS",
        "value" : "Links"
      }, {
        "id" : "smartdesign.base.LINK_ANNUALSTAMP_GYMNAST",
        "value" : "Zugehörige Person"
      }, {
        "id" : "smartdesign.base.LINK_COMPETITION_DISCIPLINE",
        "value" : "Zugehörige Disziplin"
      }, {
        "id" : "smartdesign.base.LINK_OPENITMS_ADDRESS_INVCREC",
        "value" : "Rechnungsempfänger"
      }, {
        "id" : "smartdesign.base.LINK_OPENITMS_ADRESS_OPENITM2SEPA",
        "value" : "Kontoinhaber"
      }, {
        "id" : "smartdesign.base.LINK_SEPAMANDAT_ADDRESS_SEPA_GRANTER",
        "value" : ""
      }, {
        "id" : "smartdesign.base.LINK_STARTINGLICENCE_ADDRESS_GYNMAST",
        "value" : "Zugehörige Person"
      }, {
        "id" : "smartdesign.base.LINK_STARTINGLICENCE_DISCIPLINE_SPORTTYPE",
        "value" : "Zugehörige Sportart"
      }, {
        "id" : "smartdesign.base.LINK_WITH_MENU_CAPTION",
        "value" : "Link with"
      }, {
        "id" : "smartdesign.base.LINK_WITH_MENU_NEW_CAPTION",
        "value" : "Create"
      }, {
        "id" : "smartdesign.base.LIST_NO_ITEMS",
        "value" : "No data records exist"
      }, {
        "id" : "smartdesign.base.MENU_DUPLICATE",
        "value" : "Duplicate"
      }, {
        "id" : "smartdesign.base.MENU_EDIT",
        "value" : "Edit"
      }, {
        "id" : "smartdesign.base.MENU_NEW_TAB",
        "value" : "New tab"
      }, {
        "id" : "smartdesign.base.MENU_SHOW_DOSSIER",
        "value" : "Dossier"
      }, {
        "id" : "smartdesign.base.MESSAGE_KNOWWHATYOUDO_COMPETITION",
        "value" : "Achtung: beim Bearbeiten der folgenden Felder können fatale Folgen für das TURNPORTAL sowie für die SmartWe entstehen. Diese Felder sollten nur von Personal bearbeitet werden, die genau wissen, was sie tun."
      }, {
        "id" : "smartdesign.base.NEW_FIELD_GROUP",
        "value" : "New field group"
      }, {
        "id" : "smartdesign.base.NOTES",
        "value" : "Notes"
      }, {
        "id" : "smartdesign.base.NO_RECIPIENTS_MESSAGE",
        "value" : "No recipients"
      }, {
        "id" : "smartdesign.base.OFFENEPOSTEN_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : ""
      }, {
        "id" : "smartdesign.base.OPENITEMS_MAILRECEIVER",
        "value" : "Besteller"
      }, {
        "id" : "smartdesign.base.OPENITM_INVCREC_LINK",
        "value" : "Zugehörige Gebühren"
      }, {
        "id" : "smartdesign.base.OVERALL_ELEMENTS",
        "value" : "Parent"
      }, {
        "id" : "smartdesign.base.PERMISSION_OWNERS",
        "value" : "Authorized persons"
      }, {
        "id" : "smartdesign.base.PRIMARY_MENU_CAPTION",
        "value" : "Action menu"
      }, {
        "id" : "smartdesign.base.RECENTLY_USED",
        "value" : "Last opened"
      }, {
        "id" : "smartdesign.base.RECIPIENTS",
        "value" : "Recipients"
      }, {
        "id" : "smartdesign.base.SEPA_GRANTER_LINK",
        "value" : "Zugehöriges SEPA-Mandat"
      }, {
        "id" : "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : ""
      }, {
        "id" : "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_2",
        "value" : ""
      }, {
        "id" : "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_3",
        "value" : ""
      }, {
        "id" : "smartdesign.base.SMARTDESIGN_ADDRESS_APP_DESIGNER_LINK_FIELD_CAPTION_4",
        "value" : ""
      }, {
        "id" : "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION",
        "value" : ""
      }, {
        "id" : "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION_2",
        "value" : ""
      }, {
        "id" : "smartdesign.base.STARTINGLICENCE_APP_DESIGNER_LINK_FIELD_CAPTION_3",
        "value" : ""
      }, {
        "id" : "smartdesign.base.TABLE_LEFT_TOOLBAR",
        "value" : "View menu"
      }, {
        "id" : "smartdesign.base.TABLE_RIGHT_TOOLBAR",
        "value" : "Action menu"
      }, {
        "id" : "smartdesign.base.TYPE_STATUS",
        "value" : "Type/Status"
      }, {
        "id" : "smartdesign.base.VIEWS",
        "value" : "Views"
      } ]
    } ],
    "appNetwork" : {
      "root" : {
        "id" : "root",
        "initialSelection" : false,
        "displayName" : "appgroupRoot",
        "type" : "group",
        "children" : [ {
          "id" : "dtb.annualstamp",
          "initialSelection" : true,
          "displayName" : "Jahresmarken",
          "type" : "app"
        }, {
          "id" : "dtb.competition",
          "initialSelection" : true,
          "displayName" : "Wettkämpfe",
          "type" : "app"
        }, {
          "id" : "dtb.discipline",
          "initialSelection" : true,
          "displayName" : "Sportarten",
          "type" : "app"
        }, {
          "id" : "dtb.offeneposten",
          "initialSelection" : true,
          "displayName" : "Gebühren",
          "type" : "app"
        }, {
          "id" : "dtb.sepamandat",
          "initialSelection" : true,
          "displayName" : "SEPA-Mandate",
          "type" : "app"
        }, {
          "id" : "dtb.startinglicence",
          "initialSelection" : true,
          "displayName" : "Startrechte",
          "type" : "app"
        }, {
          "id" : "smartdesign.address",
          "initialSelection" : true,
          "displayName" : "Contacts",
          "type" : "app"
        } ]
      },
      "noSelectionApp" : "smartdesign.appselection.none",
      "appForInitialSelection" : "dtb.annualstamp"
    },
    "scripting" : {
      "globalLibraries" : {
        "ref" : "scripts/global",
        "hash" : "102865c155b4c8f86926d9e81da3eb9c297630ed"
      }
    }
  }
];
