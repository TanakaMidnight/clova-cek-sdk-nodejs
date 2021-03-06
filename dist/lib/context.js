"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/fn/object/values");
/**
 * Create Context for clova response.
 *
 * @class ClientContext
 */
var Context = /** @class */ (function () {
    function Context(req) {
        this.requestObject = req;
        this.responseObject = {
            response: {
                card: {},
                directives: [],
                outputSpeech: {},
                shouldEndSession: false,
            },
            sessionAttributes: req.session.sessionAttributes,
            version: req.version,
        };
    }
    /**
     * Set session end attributes for clova response.
     *
     * @memberOf Context
     */
    Context.prototype.endSession = function () {
        this.responseObject.response.shouldEndSession = true;
        this.responseObject.sessionAttributes = {};
    };
    /**
     * Get sessionId from clova request
     *
     * @memberOf Context
     */
    Context.prototype.getSessionId = function () {
        return this.requestObject.session.sessionId;
    };
    /**
     * Get intent name from clova IntentRequest
     *
     * @memberOf Context
     */
    Context.prototype.getIntentName = function () {
        var request = this.requestObject.request;
        return request.intent ? request.intent.name : null;
    };
    /**
     * Get slots key-value pair from clova IntentRequest.
     *
     * @memberOf Context
     */
    Context.prototype.getSlots = function () {
        var request = this.requestObject.request;
        if (!request.intent || !request.intent.slots) {
            return {};
        }
        return Object.values(request.intent.slots).reduce(function (acc, curr) {
            var _a;
            return Object.assign({}, acc, (_a = {}, _a[curr.name] = curr.value, _a));
        }, {});
    };
    /**
     * Get slot value for particular slot name from clova IntentRequest.
     *
     * @param {string} slotName
     * @memberOf Context
     */
    Context.prototype.getSlot = function (slotName) {
        return this.getSlots()[slotName] || null;
    };
    /**
     * Get {Clova.User} from clova request
     *
     * @memberOf Context
     */
    Context.prototype.getUser = function () {
        return this.requestObject.session.user;
    };
    /**
     * Set outputSpeech content
     *
     * @param {Clova.OutputSpeech} outputSpeech
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setOutputSpeech = function (outputSpeech, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        if (reprompt) {
            this.responseObject.response.reprompt = { outputSpeech: outputSpeech };
        }
        else {
            this.responseObject.response.outputSpeech = outputSpeech;
        }
    };
    /**
     * Set reprompt content
     *
     * @param {Clova.OutputSpeech} outputSpeech
     * @memberOf Context
     */
    Context.prototype.setReprompt = function (outputSpeech) {
        this.responseObject.response.reprompt = { outputSpeech: outputSpeech };
    };
    /**
     * Set SimpleSpeech object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject} speechInfo
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSimpleSpeech = function (speechInfo, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            type: 'SimpleSpeech',
            values: speechInfo,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Set SpeechList object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject[]} speechInfo
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSpeechList = function (speechInfo, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            type: 'SpeechList',
            values: speechInfo,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Set SpeechSet object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject} speechInfoBrief
     * @param {Clova.OutputSpeechListVerbose} speechInfoVerbose
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSpeechSet = function (speechInfoBrief, speechInfoVerbose, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            brief: speechInfoBrief,
            type: 'SpeechSet',
            verbose: speechInfoVerbose,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Get sessionAttributes from clova request.
     *
     * @memberOf Context
     */
    Context.prototype.getSessionAttributes = function () {
        return this.requestObject.session.sessionAttributes;
    };
    /**
     * Set sessionAttributes for clova response.
     *
     * @memberOf Context
     */
    Context.prototype.setSessionAttributes = function (sessionAttributes) {
        this.responseObject.sessionAttributes = sessionAttributes;
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map