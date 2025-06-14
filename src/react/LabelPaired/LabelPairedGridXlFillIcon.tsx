import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.375A1.85 1.85 0 0 1 1.875 7.5h2.25A1.88 1.88 0 0 1 6 9.375v2.25A1.85 1.85 0 0 1 4.125 13.5h-2.25C.797 13.5 0 12.703 0 11.625zm0 7.5A1.85 1.85 0 0 1 1.875 15h2.25A1.88 1.88 0 0 1 6 16.875v2.25A1.85 1.85 0 0 1 4.125 21h-2.25C.797 21 0 20.203 0 19.125zm6 7.5v2.25A1.85 1.85 0 0 1 4.125 28.5h-2.25C.797 28.5 0 27.703 0 26.625v-2.25A1.85 1.85 0 0 1 1.875 22.5h2.25A1.88 1.88 0 0 1 6 24.375m1.5-15A1.85 1.85 0 0 1 9.375 7.5h2.25A1.88 1.88 0 0 1 13.5 9.375v2.25a1.85 1.85 0 0 1-1.875 1.875h-2.25c-1.078 0-1.875-.797-1.875-1.875zm6 7.5v2.25A1.85 1.85 0 0 1 11.625 21h-2.25C8.297 21 7.5 20.203 7.5 19.125v-2.25C7.5 15.844 8.297 15 9.375 15h2.25a1.88 1.88 0 0 1 1.875 1.875m-6 7.5c0-1.031.797-1.875 1.875-1.875h2.25a1.88 1.88 0 0 1 1.875 1.875v2.25a1.85 1.85 0 0 1-1.875 1.875h-2.25c-1.078 0-1.875-.797-1.875-1.875zm13.5-15v2.25a1.85 1.85 0 0 1-1.875 1.875h-2.25c-1.078 0-1.875-.797-1.875-1.875v-2.25A1.85 1.85 0 0 1 16.875 7.5h2.25A1.88 1.88 0 0 1 21 9.375m-6 7.5c0-1.031.797-1.875 1.875-1.875h2.25A1.88 1.88 0 0 1 21 16.875v2.25A1.85 1.85 0 0 1 19.125 21h-2.25C15.797 21 15 20.203 15 19.125zm6 7.5v2.25a1.85 1.85 0 0 1-1.875 1.875h-2.25c-1.078 0-1.875-.797-1.875-1.875v-2.25c0-1.031.797-1.875 1.875-1.875h2.25A1.88 1.88 0 0 1 21 24.375' />
    </g>
    <defs>
      <clipPath id='74c4c408f798b736ccdeedeee91cf227__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridXlFillIcon);
export default ForwardRef;
