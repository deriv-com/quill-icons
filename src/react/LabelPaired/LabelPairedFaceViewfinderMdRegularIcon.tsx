import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdRegularIcon = (
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
      <path d='M1.5 4h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3c-.281 0-.5.25-.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3A1.5 1.5 0 0 1 1.5 4m13 0c.813 0 1.5.688 1.5 1.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25-.25-.5-.5-.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5zM0 18.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281.219.5.5.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3A1.48 1.48 0 0 1 0 18.5M14.5 20h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3c.25 0 .5-.219.5-.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3a1.5 1.5 0 0 1-1.5 1.5m-7-9.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m1.75.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75M8 8c-1.437 0-2.75.781-3.469 2-.718 1.25-.718 2.781 0 4C5.25 15.25 6.563 16 8 16c1.406 0 2.719-.75 3.438-2 .718-1.219.718-2.75 0-4C10.718 8.781 9.406 8 8 8m0 9a4.97 4.97 0 0 1-4.344-2.5 4.94 4.94 0 0 1 0-5C4.562 7.969 6.188 7 8 7c1.781 0 3.406.969 4.313 2.5a4.94 4.94 0 0 1 0 5A4.96 4.96 0 0 1 8 17m-1.312-4.25c.25.469.75.75 1.312.75.531 0 1.031-.281 1.281-.75.156-.219.438-.312.688-.156.25.125.312.437.187.687-.437.719-1.25 1.25-2.156 1.25-.937 0-1.75-.531-2.187-1.25-.125-.25-.063-.562.187-.687a.494.494 0 0 1 .688.156' />
    </g>
    <defs>
      <clipPath id='4ab6ae3e85e35ab810b43da6e8b82622__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdRegularIcon);
export default ForwardRef;
