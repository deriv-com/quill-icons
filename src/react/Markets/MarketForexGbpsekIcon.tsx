import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexGbpsekIcon = (
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
      d='M0 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M0 6a2 2 0 0 1 2-2h1.606L10 8.263V4h4v4.263L20.395 4H22a2 2 0 0 1 2 2v.404L18.606 10H24v4h-5.394L24 17.596V18a2 2 0 0 1-2 2h-1.606L14 15.737V20h-4v-4.263L3.606 20H2a2 2 0 0 1-2-2v-.404L5.394 14H0v-4h5.394L0 6.404z'
    />
    <path fill='#F44336' d='M10.759 4v6.726H0v2.522h10.759V20h2.482v-6.752H24v-2.522H13.241V4z' />
    <path
      fill='#F44336'
      d='M22.764 4.151 14.07 9.885h1.52l7.906-5.213c-.2-.225-.449-.404-.73-.52M23.72 19.023l-7.483-4.934h-1.52l8.423 5.554c.235-.163.433-.375.58-.62M1.198 19.833l8.71-5.744h-1.52L.482 19.302c.194.227.439.41.716.53M.243 5.044l7.34 4.841h1.52l-8.31-5.48a2.01 2.01 0 0 0-.55.64'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M30 12H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2'
    />
    <path
      fill='#006AA7'
      d='M30 12H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2'
    />
    <path fill='#FECC00' d='M32 18.5H18V12h-3v6.5H8v3h7V28h3v-6.5h14z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketForexGbpsekIcon);
export default ForwardRef;
