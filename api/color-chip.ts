import { createCanvas } from "@napi-rs/canvas";

/**
 * @param req {Request}
 * @param res {Response}
 */

export default async (req, res) => {
  let { hex } = req.query;
  let width = req.query?.w ? parseInt(req.query.w, 10) || 100 : 100;
  let height = req.query?.h ? parseInt(req.query.h, 10) || 100 : 100;

  if(!hex) {
    return res.status(400).send("Please provide a hex color code");
  }
  let canvas = createCanvas(width, height);
  let context = canvas.getContext('2d');
  context.fillStyle = `#${hex}`;
  context.fillRect(0, 0, width, height);
  const format = "jpeg";
  res.setHeader("content-type", `image/${format}`);
  res.send(await canvas.encode(format, 80));
};
