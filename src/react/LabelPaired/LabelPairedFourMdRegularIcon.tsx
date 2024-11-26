import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.438 5.75 1.28 14H9V8.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V14h1.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H10v3.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3.469H.469a.49.49 0 0 1-.406-.25.57.57 0 0 1-.032-.5l4.5-9a.513.513 0 0 1 .688-.218c.25.125.343.437.218.687' />
    </g>
    <defs>
      <clipPath id='1e1f0f30cc9cb5dba205faedf9994ba0__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourMdRegularIcon);
export default ForwardRef;
