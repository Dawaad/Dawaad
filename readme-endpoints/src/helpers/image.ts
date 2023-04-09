import {NextApiResponse} from 'next'

import {
    IMAGE_RESPONSE_HEADERS,
    CACHE_CONTROL_RESPONSE_HEADERS,
} from "../Config/index"

export const convertToImageResponse = (res: NextApiResponse) => {
    res.setHeader(...IMAGE_RESPONSE_HEADERS)
    res.setHeader(...CACHE_CONTROL_RESPONSE_HEADERS)
}

export const getImageData = async (imageURL: string) => {
    if (imageURL) {
        const buff: ArrayBuffer = await (await fetch(imageURL)).arrayBuffer();
        return 'data:image/jpeg;base64,' + Buffer.from(buff).toString('base64');
    }
}