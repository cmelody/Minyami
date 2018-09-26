import { ParserOptions, ParserResult } from "./types";
import Logger from '../../utils/log';
let Log = Logger.getInstance();

export default class Parser {
    static parse({
        key = '',
        iv = '',
        options
    }: ParserOptions): ParserResult { 
        if (!options.m3u8Url) {
            Log.error('Missing m3u8 url for openrec.');
        }
        const prefix = options.m3u8Url.match(/^(.+\/)/)[1];
        return {
            key,
            iv,
            prefix: prefix
        }
    }
}