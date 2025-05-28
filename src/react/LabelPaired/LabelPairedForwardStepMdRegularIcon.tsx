import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 6.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4.219l-5.594 4.531a.87.87 0 0 1-.562.188.84.84 0 0 1-.844-.844V6.875C1 6.406 1.375 6 1.844 6c.218 0 .406.094.562.219L8 10.75zm-6 .656v9.719L7.938 12z' />
    </g>
    <defs>
      <clipPath id='b6593329b96851acb426a688d2ca92cd__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdRegularIcon);
export default ForwardRef;
