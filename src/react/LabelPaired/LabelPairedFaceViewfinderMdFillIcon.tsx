import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 4h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.246.246 0 0 0-.25.25v2.5A.74.74 0 0 1 .75 9 .72.72 0 0 1 0 8.25v-2.5C0 4.813.781 4 1.75 4m10 0h2.5c.938 0 1.75.813 1.75 1.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5a.27.27 0 0 0-.25-.25h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M1.5 15.75v2.5c0 .156.094.25.25.25h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5C.781 20 0 19.219 0 18.25v-2.5A.74.74 0 0 1 .75 15a.76.76 0 0 1 .75.75m14.5 0v2.5c0 .969-.812 1.75-1.75 1.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5c.125 0 .25-.094.25-.25v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75M3 12c0-1.781.938-3.406 2.5-4.312a4.94 4.94 0 0 1 5 0c1.531.906 2.5 2.53 2.5 4.312 0 1.813-.969 3.438-2.5 4.344a4.94 4.94 0 0 1-5 0A4.97 4.97 0 0 1 3 12m4-1.25a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75m2.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m-4.469 1.656c-.187.188-.187.5 0 .719A3.85 3.85 0 0 0 8 15c1.063 0 2-.437 2.688-1.125.187-.219.187-.531 0-.719-.22-.187-.532-.187-.72 0-.5.531-1.187.844-1.968.844s-1.5-.312-2-.844c-.187-.187-.5-.187-.719 0' />
    </g>
    <defs>
      <clipPath id='36d16e4b4bb1cbb3346b835640534c64__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdFillIcon);
export default ForwardRef;
