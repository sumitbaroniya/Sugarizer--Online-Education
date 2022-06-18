// Tutorial component based on bootstrap tour
var Tutorial = {
  template: '<div/>',
  data: function() {
    return {
      showPiece: false,
      visuals: "",
      l10n: {
        stringPrevShort: '',
        stringNextShort: '',
        stringEndShort: '',
        stringTutoWelcomeTitle: '',
        stringTutoWelcomeContent: '',
        stringTutoBoardTitle: '',
        stringTutoBoardContent: '',
        stringTutoPlayerClockTitle: '',
        stringTutoPlayerClockContent: '',
        stringTutoOpponentClockTitle: '',
        stringTutoOpponentClockContent: '',
        stringTutoFlagTitle: '',
        stringTutoFlagContent: '',
        stringTutoMovesTitle: '',
        stringTutoMovesContent: '',
        stringTutoNetworkTitle: '',
        stringTutoNetworkContent: '',
        stringTutoComputerLevelTitle: '',
        stringTutoComputerLevelContent: '',
        stringTutoClockTitle: '',
        stringTutoClockContent: '',
        stringTutoUndoTitle: '',
        stringTutoUndoContent: '',
        stringTutoRestartTitle: '',
        stringTutoRestartContent: '',
        stringTutoColorChangeTitle: '',
        stringTutoColorChangeContent: '',
        stringTutoBasicTitle: '',
        stringTutoBasicContent: '',
        stringTutoAimTitle: '',
        stringTutoAimContent: '',
        stringTutoPawnTitle: '',
        stringTutoPawnContent: '',
        stringTutoKnightTitle: '',
        stringTutoKnightContent: '',
        stringTutoBishopTitle: '',
        stringTutoBishopContent: '',
        stringTutoRookTitle: '',
        stringTutoRookContent: '',
        stringTutoQueenTitle: '',
        stringTutoQueenContent: '',
        stringTutoKingTitle: '',
        stringTutoKingContent: '',
        stringTutoPawnPromotionTitle: '',
        stringTutoPawnPromotionContent: '',
        stringTutoCastlingTitle: '',
        stringTutoCastlingContent: '',
        stringTutoDrawTitle: '',
        stringTutoDrawContent: '',
      }
    }
  },
  methods: {
    localized: function(localization) {
      localization.localize(this.l10n);
    },

    showPieces: function(i, step) {
      switch (i) {
        case 14:
          this.visuals = "<div class='wP tutPiece'></div>"
          break;
        case 15:
          this.visuals = "<div class='wN tutPiece'></div>"
          break;
        case 16:
          this.visuals = "<div class='wB tutPiece'></div>"
          break;
        case 17:
          this.visuals = "<div class='wR tutPiece'></div>"
          break;
        case 18:
          this.visuals = "<div class='wQ tutPiece'></div>"
          break;
        case 19:
          this.visuals = "<div class='wK tutPiece'></div>"
          break;
        default:
          this.visuals = ""
      }
      return "\
      <div class='popover tour'>\
        <div class='arrow'></div>\
        <h3 class='popover-title tutorial-title'></h3>\
        <div class='popover-content'></div>"
        + this.visuals +
        "<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\
          <div class='tutorial-prev-icon tutorial-icon-button' data-role='prev'>\
            <div class='tutorial-prev-icon1 web-activity'>\
              <div class='tutorial-prev-icon2 web-activity-icon'></div>\
              <div class='tutorial-prev-icon3 web-activity-disable'></div>\
            </div>\
            <div class='tutorial-icon-text'>" + this.l10n.stringPrevShort + "</div>\
          </div>\
          <span data-role='separator' style='margin: 4px'>|</span>\
          <div class='tutorial-next-icon tutorial-icon-button' data-role='next'>\
            <div class='tutorial-next-icon1 web-activity'>\
              <div class='tutorial-next-icon2 web-activity-icon'></div>\
              <div class='tutorial-next-icon3 web-activity-disable'></div>\
            </div>\
            <div class='tutorial-icon-text'>" + this.l10n.stringNextShort + "</div>\
          </div>\
          <div class='tutorial-end-icon tutorial-icon-button' data-role='end'>\
            <div class='tutorial-end-icon1 web-activity'>\
              <div class='tutorial-end-icon2 web-activity-icon'></div>\
              <div class='tutorial-end-icon3 web-activity-disable'></div>\
            </div>\
            <div class='tutorial-icon-text'>" + this.l10n.stringEndShort + "</div>\
          </div>\
        </div>\
      </div>";
    },

    show: function() {
      let vm = this;
      var steps = [];
      steps = steps.concat([{
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoWelcomeTitle,
          content: this.l10n.stringTutoWelcomeContent
        },
        {
          element: "#board",
          placement: "right",
          title: this.l10n.stringTutoBoardTitle,
          content: this.l10n.stringTutoBoardContent
        },
        {
          element: "#player-clock",
          placement: "left",
          title: this.l10n.stringTutoPlayerClockTitle,
          content: this.l10n.stringTutoPlayerClockContent
        },
        {
          element: "#opponent-clock",
          placement: "left",
          title: this.l10n.stringTutoOpponentClockTitle,
          content: this.l10n.stringTutoOpponentClockContent
        },
        {
          element: "#flagDiv",
          placement: "left",
          title: this.l10n.stringTutoFlagTitle,
          content: this.l10n.stringTutoFlagContent
        },
        {
          element: "#moves-container",
          placement: "top",
          title: this.l10n.stringTutoMovesTitle,
          content: this.l10n.stringTutoMovesContent
        },
        {
          element: "#network-button",
          placement: "bottom",
          title: this.l10n.stringTutoNetworkTitle,
          content: this.l10n.stringTutoNetworkContent
        },
        {
          element: "#new-button",
          placement: "bottom",
          title: this.l10n.stringTutoRestartTitle,
          content: this.l10n.stringTutoRestartContent
        },
        {
          element: "#undo-button",
          placement: "bottom",
          title: this.l10n.stringTutoUndoTitle,
          content: this.l10n.stringTutoUndoContent
        },
        {
          element: "#level-button",
          placement: "bottom",
          title: this.l10n.stringTutoComputerLevelTitle,
          content: this.l10n.stringTutoComputerLevelContent
        },
        {
          element: "#clock-button",
          placement: "bottom",
          title: this.l10n.stringTutoClockTitle,
          content: this.l10n.stringTutoClockContent
        },
        {
          element: "#color-button",
          placement: "bottom",
          title: this.l10n.stringTutoColorChangeTitle,
          content: this.l10n.stringTutoColorChangeContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoBasicTitle,
          content: this.l10n.stringTutoBasicContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoAimTitle,
          content: this.l10n.stringTutoAimContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoPawnTitle,
          content: this.l10n.stringTutoPawnContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoKnightTitle,
          content: this.l10n.stringTutoKnightContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoBishopTitle,
          content: this.l10n.stringTutoBishopContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoRookTitle,
          content: this.l10n.stringTutoRookContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoQueenTitle,
          content: this.l10n.stringTutoQueenContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoKingTitle,
          content: this.l10n.stringTutoKingContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoPawnPromotionTitle,
          content: this.l10n.stringTutoPawnPromotionContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoCastlingTitle,
          content: this.l10n.stringTutoCastlingContent
        },
        {
          element: "",
          orphan: true,
          placement: "bottom",
          title: this.l10n.stringTutoDrawTitle,
          content: this.l10n.stringTutoDrawContent
        },

      ]);

      var tour = new Tour({
        template: this.showPieces,
        storage: false,
        backdrop: true,
        steps: steps,
      });
      tour.init();
      tour.start(true);
    }
  }
}
