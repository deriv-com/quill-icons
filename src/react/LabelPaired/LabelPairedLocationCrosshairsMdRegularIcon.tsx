import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsMdRegularIcon = (
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
      <path d='M8 4c.25 0 .5.25.5.5v1.531a6.01 6.01 0 0 1 5.469 5.469H15.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1.531A6.015 6.015 0 0 1 8.5 18v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V18A6.02 6.02 0 0 1 2 12.5H.5A.494.494 0 0 1 0 12c0-.25.219-.5.5-.5H2a6.015 6.015 0 0 1 5.5-5.469V4.5c0-.25.219-.5.5-.5m-5 8c0 1.813.938 3.438 2.5 4.344a4.94 4.94 0 0 0 5 0C12.031 15.437 13 13.812 13 12c0-1.781-.969-3.406-2.5-4.312a4.94 4.94 0 0 0-5 0A4.96 4.96 0 0 0 3 12m7 0c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 6 12c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75m-5 0c0-1.062.563-2.031 1.5-2.594.906-.531 2.063-.531 3 0C10.406 9.97 11 10.937 11 12c0 1.094-.594 2.063-1.5 2.625-.937.531-2.094.531-3 0A3.03 3.03 0 0 1 5 12' />
    </g>
    <defs>
      <clipPath id='b03a7e65c468c7007a4b74495506db78__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsMdRegularIcon);
export default ForwardRef;
