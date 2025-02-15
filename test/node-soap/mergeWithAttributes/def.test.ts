import test from "tape";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../../src";
import { Logger } from "../../../src/utils/logger";

const target = "mergeWithAttributes/def";

test(target, async t => {
    Logger.disabled();

    const input = `./test/resources/${target}.xsd`;
    const outdir = "./test/generated/mergeWithAttributes";

    t.test(`${target} - generate wsdl client`, async t => {
        await parseAndGenerate(input, outdir);
        t.end();
    });

});