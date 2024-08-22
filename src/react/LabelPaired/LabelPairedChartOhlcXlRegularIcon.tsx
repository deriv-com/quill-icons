import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcXlRegularIcon = (
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
      <path d='M15 6c.375 0 .75.375.75.75V9H18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.25v15.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V24H12a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.25V6.75c0-.375.328-.75.75-.75m9.75 3c.375 0 .75.375.75.75v9.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H25.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V13.5h-2.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H24V9.75c0-.375.328-.75.75-.75m-19.5 6c.375 0 .75.375.75.75v9.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H6v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V19.5H2.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H4.5v-2.25c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='66c38c9f59c39166d8aedd96f90f401e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcXlRegularIcon);
export default ForwardRef;
