import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1v3.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5zM0 14.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V18h3.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5zM13.5 5c.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6H9.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5zm-.5 9.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13z' />
    </g>
    <defs>
      <clipPath id='926936d95b4b983f7ffea886f9be7f46__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdRegularIcon);
export default ForwardRef;
