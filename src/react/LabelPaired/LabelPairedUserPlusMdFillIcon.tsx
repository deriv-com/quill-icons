import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserPlusMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 8c0-1.406.75-2.719 2-3.437 1.219-.72 2.75-.72 4 0 1.219.718 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8M0 19.094C0 16 2.469 13.5 5.563 13.5h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094m15.75-5.344v-2h-2A.72.72 0 0 1 13 11a.74.74 0 0 1 .75-.75h2v-2a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2h2A.76.76 0 0 1 20 11a.74.74 0 0 1-.75.75h-2v2a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='3cde913d4be0070310d0c040ca66676a__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserPlusMdFillIcon);
export default ForwardRef;
