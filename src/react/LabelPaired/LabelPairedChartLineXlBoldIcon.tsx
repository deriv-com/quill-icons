import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 8.625v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125m19.922 5.297-6.422 6.375a1.027 1.027 0 0 1-1.547 0L10.5 16.594l-3.703 3.703c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l4.5-4.5c.188-.234.469-.328.797-.328.281 0 .563.094.797.328L15 17.953l5.578-5.578c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547' />
    </g>
    <defs>
      <clipPath id='72450cdb31ea6a36a4f6cb510278a90e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlBoldIcon);
export default ForwardRef;
