import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.5 4.5v15c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-15c0-.25.219-.5.5-.5.25 0 .5.25.5.5M14 7c.25 0 .5.25.5.5v12c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-12c0-.25.219-.5.5-.5m-3.5 3.5v9c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-9c0-.25.219-.5.5-.5.25 0 .5.25.5.5M6 13c.25 0 .5.25.5.5v6c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-6c0-.25.219-.5.5-.5m-4 3c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='f7b79345de82737ce7783436815e574d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdRegularIcon);
export default ForwardRef;
