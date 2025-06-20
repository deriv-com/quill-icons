import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaXlBoldIcon = (
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
      <path d='M2.25 8.625v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125m11.156 7.969L10.5 13.687l-3.75 3.75v4.313h13.5v-3.656l-2.39-2.766-1.313 1.266a2.206 2.206 0 0 1-3.14 0M15 15l1.547-1.547.281-.281c.61-.61 1.64-.563 2.203.094l2.907 3.375c.328.422.562.937.562 1.453V22.5c0 .844-.703 1.5-1.5 1.5H6a1.48 1.48 0 0 1-1.5-1.5v-5.062c0-.563.234-1.172.656-1.594l4.266-4.266c.562-.562 1.547-.562 2.11 0l1.874 1.875z' />
    </g>
    <defs>
      <clipPath id='a446198b9e548eae8184bcbff2a6457c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlBoldIcon);
export default ForwardRef;
