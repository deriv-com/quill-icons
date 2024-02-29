import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.25q.047-.703.75-.75h13.5q.422 0 .656.375.188.375 0 .75l-12 19.5q-.422.563-1.031.281-.562-.422-.234-1.031L12.89 9H.75Q.047 8.953 0 8.25' />
    </g>
    <defs>
      <clipPath id='987ace1c18ccd9a06a162307ac03ca31__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlRegularIcon);
export default ForwardRef;
