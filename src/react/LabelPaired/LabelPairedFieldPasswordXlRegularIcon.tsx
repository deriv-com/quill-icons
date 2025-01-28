import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 11.25a2.25 2.25 0 0 0-2.25 2.25v9c0 1.266.984 2.25 2.25 2.25h21a2.25 2.25 0 0 0 2.25-2.25v-9c0-1.219-1.031-2.25-2.25-2.25zM.75 13.5c0-2.062 1.64-3.75 3.75-3.75h21a3.76 3.76 0 0 1 3.75 3.75v9c0 2.11-1.687 3.75-3.75 3.75h-21c-2.11 0-3.75-1.64-3.75-3.75zm19.5 9a.74.74 0 0 1-.75-.75v-7.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v7.5c0 .422-.375.75-.75.75M6 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 18m4.5 0c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m4.5 0c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 15 18' />
    </g>
    <defs>
      <clipPath id='01f682bd7af0abac6de45e7d9e351946__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordXlRegularIcon);
export default ForwardRef;
