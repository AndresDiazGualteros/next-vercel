// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { FC } from "react";

type Data = {
  name:string;
}

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
