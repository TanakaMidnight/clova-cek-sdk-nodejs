import express from 'express';
declare namespace Clova {
    interface ClovaMessage {
        requestBody: RequestBody;
        responseBody: ResponseBody;
    }
    interface RequestBody {
        context: Context;
        request: Request;
        session: Session;
        version: string;
    }
    type Context = {
        AudioPlayer?: {
            offsetInMilliseconds?: number;
            playerActivity: string;
            stream?: any;
            totalInMilliseconds?: number;
        };
        System: {
            application: {
                applicationId: string;
            };
            device: {
                deviceId: string;
                display: {
                    contentLayer?: {
                        width: number;
                        height: number;
                    };
                    dpi?: number;
                    orientation?: string;
                    size: string;
                };
            };
            user: {
                userId: string;
                accessToken: string;
            };
        };
    };
    type Request = LaunchRequest | IntentRequest | EventRequest | SessionEndedRequest;
    type LaunchRequest = {
        type: 'LaunchRequest';
    };
    type IntentRequest = {
        type: 'IntentRequest';
        intent: {
            name: string;
            slots: {
                [key: string]: {
                    name: string;
                    value: SlotValue;
                    valueType?: SlotValueType;
                };
            };
        };
    };
    type EventRequest = {
        type: 'EventRequest';
        requestId: string;
        timestamp: string;
        locale: string;
        extensionId: string;
        event: clovaSkill.SkillEnabled | clovaSkill.SkillDisabled | audioPlayer.PlayFinished | audioPlayer.PlayPaused | audioPlayer.PlayResumed | audioPlayer.PlayStarted | audioPlayer.PlayStopped | audioPlayer.ProgressReportDelayPassed | audioPlayer.ProgressReportIntervalPassed | audioPlayer.ProgressReportPositionPassed | audioPlayer.StreamRequested;
    };
    type SessionEndedRequest = {
        type: 'SessionEndedRequest';
    };
    type Session = {
        new: boolean;
        sessionAttributes: object;
        sessionId: string;
        user: {
            userId: string;
            accessToken?: string;
        };
    };
    type User = {
        userId: string;
        accessToken?: string;
    };
    interface ResponseBody {
        response: Response;
        sessionAttributes: object;
        version: string;
    }
    interface Response {
        card: Card;
        directives: Directive[];
        outputSpeech: OutputSpeech;
        reprompt?: {
            outputSpeech: OutputSpeech;
        };
        shouldEndSession: boolean;
    }
    type Card = {};
    type Directive = {
        header: {
            messageId: string;
            name: string;
            namespace: string;
        };
        payload: object;
    };
    type OutputSpeech = OutputSpeechSimple | OutputSpeechList | OutputSpeechSet | {};
    type OutputSpeechSimple = {
        brief?: SpeechInfoObject;
        type: 'SimpleSpeech';
        values: SpeechInfoObject;
        verbose?: OutputSpeechVerbose;
    };
    type OutputSpeechList = {
        brief?: SpeechInfoObject;
        type: 'SpeechList';
        values: SpeechInfoObject[];
        verbose?: OutputSpeechVerbose;
    };
    type OutputSpeechSet = {
        brief: SpeechInfoObject;
        type: 'SpeechSet';
        values?: SpeechInfoObject;
        verbose: OutputSpeechVerbose;
    };
    type OutputSpeechVerbose = OutputSpeechSimpleVerbose | OutputSpeechListVerbose;
    type OutputSpeechSimpleVerbose = {
        type: 'SimpleSpeech';
        values: SpeechInfoObject;
    };
    type OutputSpeechListVerbose = {
        type: 'SpeechList';
        values: SpeechInfoObject[];
    };
    type SpeechInfoObject = SpeechInfoText | SpeechInfoUrl;
    type SpeechInfoText = {
        lang: SpeechLang;
        type: 'PlainText';
        value: string;
    };
    type SpeechInfoUrl = {
        lang: '';
        type: 'URL';
        value: string;
    };
    type SlotValue = string | number | null;
    type SpeechLang = 'ja' | 'ko' | 'en';
    type OutputSpeechType = 'SimpleSpeech' | 'SpeechList' | 'SpeechSet';
    type SlotValueType = 'DATE' | 'DATE.INTERVAL' | 'TIME' | 'TIME.INTERVAL';
    interface SkillConfigurator {
        config: {
            requestHandlers: {
                [index: string]: Function;
            };
        };
        on(requestType: string, requestHandler: Function): SkillConfigurator;
        onLaunchRequest(requestHandler: Function): SkillConfigurator;
        onIntentRequest(requestHandler: Function): SkillConfigurator;
        onSessionEndedRequest(requestHandler: Function): SkillConfigurator;
        handle(): Function;
    }
    interface MiddlewareOptions {
        applicationId: string;
    }
    interface ClientContext {
        requestObject: RequestBody;
        responseObject: ResponseBody;
        endSession(): void;
        getSessionId(): string;
        getIntentName(): string | null;
        getSlots(): {
            [key: string]: SlotValue;
        };
        getSlot(slotName: string): SlotValue;
        getUser(): User;
        setOutputSpeech(outputSpeech: OutputSpeech, reprompt?: boolean): void;
        setSimpleSpeech(speechInfo: SpeechInfoObject, reprompt?: boolean): this;
        setSpeechList(speechInfo: SpeechInfoObject[], reprompt?: boolean): this;
        setSpeechSet(speechInfoBrief: SpeechInfoObject, speechInfoVerbose: OutputSpeechVerbose, reprompt?: boolean): this;
        getSessionAttributes(): object;
        setSessionAttributes(sessionAttributes: object): void;
        setReprompt(outputSpeech: OutputSpeech): void;
    }
    type Middleware = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    namespace audioPlayer {
        interface PlayFinished {
            namespace: 'AudioPlayer';
            name: 'PlayFinished';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface PlayPaused {
            namespace: 'AudioPlayer';
            name: 'PlayPaused';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface PlayResumed {
            namespace: 'AudioPlayer';
            name: 'PlayResumed';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface PlayStarted {
            namespace: 'AudioPlayer';
            name: 'PlayStarted';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface PlayStopped {
            namespace: 'AudioPlayer';
            name: 'PlayStopped';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface ProgressReportDelayPassed {
            namespace: 'AudioPlayer';
            name: 'ProgressReportDelayPassed';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface ProgressReportIntervalPassed {
            namespace: 'AudioPlayer';
            name: 'ProgressReportIntervalPassed';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface ProgressReportPositionPassed {
            namespace: 'AudioPlayer';
            name: 'ProgressReportPositionPassed';
            payload: {
                offsetInMilliseconds: number;
                token: string;
            };
        }
        interface StreamRequested {
            namespace: 'AudioPlayer';
            name: 'StreamRequested';
            payload: any;
        }
    }
    namespace clovaSkill {
        interface SkillEnabled {
            namespace: 'ClovaSkill';
            name: 'SkillEnabled';
            payload: null;
        }
        interface SkillDisabled {
            namespace: 'ClovaSkill';
            name: 'SkillDisabled';
            payload: null;
        }
    }
}
export default Clova;
