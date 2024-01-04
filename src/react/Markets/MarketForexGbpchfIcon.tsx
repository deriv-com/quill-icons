import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexGbpchfIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#0D47A1'
      d='M0 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Z'
    />
    <path
      fill='#fff'
      d='M0 6a2 2 0 0 1 2-2h1.606L10 8.263V4h4v4.263L20.395 4H22a2 2 0 0 1 2 2v.404L18.606 10H24v4h-5.394L24 17.596V18a2 2 0 0 1-2 2h-1.606L14 15.737V20h-4v-4.263L3.606 20H2a2 2 0 0 1-2-2v-.404L5.394 14H0v-4h5.394L0 6.404V6Z'
    />
    <path
      fill='#F44336'
      d='M10.759 4v6.726H0v2.522h10.759V20h2.482v-6.752H24v-2.522H13.241V4H10.76Z'
    />
    <path
      fill='#F44336'
      d='M22.764 4.151 14.07 9.885h1.52l7.906-5.213c-.2-.225-.449-.404-.73-.52ZM23.72 19.023l-7.483-4.934h-1.52l8.423 5.554c.235-.163.433-.375.58-.62ZM1.198 19.833l8.71-5.744h-1.52L.482 19.302c.194.227.439.41.716.53ZM.243 5.044l7.34 4.841h1.52l-8.31-5.48a2.01 2.01 0 0 0-.55.64Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#F44336'
      fillRule='evenodd'
      d='M10 12h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Zm11.655 6.319h2.897c.228 0 .414.188.414.42v2.522c0 .232-.186.42-.414.42h-2.897v2.943c0 .232-.185.42-.414.42H18.76a.417.417 0 0 1-.414-.42v-2.942h-2.897a.417.417 0 0 1-.414-.42v-2.523c0-.232.186-.42.414-.42h2.897v-2.943c0-.232.185-.42.414-.42h2.482c.229 0 .414.188.414.42v2.943Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M24.552 18.319h-2.897v-2.943a.417.417 0 0 0-.414-.42H18.76a.417.417 0 0 0-.414.42v2.943h-2.897a.417.417 0 0 0-.414.42v2.522c0 .232.186.42.414.42h2.897v2.943c0 .232.185.42.414.42h2.482a.417.417 0 0 0 .414-.42v-2.943h2.897a.417.417 0 0 0 .414-.42v-2.522a.417.417 0 0 0-.414-.42Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1Zm-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H10Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketForexGbpchfIcon);
export default ForwardRef;
