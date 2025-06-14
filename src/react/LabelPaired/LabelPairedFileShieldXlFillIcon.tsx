import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h7.5v6c0 .844.656 1.5 1.5 1.5h6v2.203l-4.36 1.781c-1.03.375-1.64 1.36-1.64 2.438 0 2.625.844 6.937 4.406 9.75-.422.234-.937.328-1.406.328H3c-1.687 0-3-1.312-3-3zm18 3h-6V6zm1.828 4.594c.235-.094.563-.094.797 0l5.625 2.25c.469.187.75.61.75 1.031 0 3-1.219 7.922-6.328 10.078-.281.094-.61.094-.89 0-5.11-2.156-6.282-7.078-6.282-10.078 0-.422.281-.844.703-1.031zm4.875 4.031-4.453-1.781v8.812c3.188-1.547 4.266-4.64 4.453-7.031' />
    </g>
    <defs>
      <clipPath id='c81954366fd913584acf3f67a071dd44__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldXlFillIcon);
export default ForwardRef;
