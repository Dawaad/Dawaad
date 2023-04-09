import { NextApiRequest, NextApiResponse } from "next";

import { renderToString } from "react-dom/server";

import { convertToImageResponse } from "../helpers/image";
import { SKILL_KEYS } from "../Config/index";
import {Skills} from "../Components/skills/Skills";
export default async function (

    req: NextApiRequest,
    res: NextApiResponse
) {
  convertToImageResponse(res);

  const text: string = renderToString(
    Skills({skills: SKILL_KEYS})
    
  )
  return res.send(text)
}
