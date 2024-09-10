import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeMdRegularIcon = (
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
      <path d='M0 5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zm2 0c0-.25.219-.5.5-.5.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zM4.5 5c.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-13c0-.25.219-.5.5-.5m2.5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zM9.5 5c.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-13c0-.25.219-.5.5-.5m2.5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zm3.5-.5c.25 0 .5.25.5.5v13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-13c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='27dd9ea6eb477fed99ae236a6c332655__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeMdRegularIcon);
export default ForwardRef;
