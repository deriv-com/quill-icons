import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordMdRegularIcon = (
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
      <path d='M3 7.5A1.5 1.5 0 0 0 1.5 9v6c0 .844.656 1.5 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V9c0-.812-.687-1.5-1.5-1.5zM.5 9C.5 7.625 1.594 6.5 3 6.5h14c1.375 0 2.5 1.125 2.5 2.5v6c0 1.406-1.125 2.5-2.5 2.5H3A2.47 2.47 0 0 1 .5 15zm13 6a.494.494 0 0 1-.5-.5v-5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v5c0 .281-.25.5-.5.5M4 12c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1m3 0c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1m3 0c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='0f78ed69f96fc3a3b2065d91efd5c7da__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordMdRegularIcon);
export default ForwardRef;
