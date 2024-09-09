import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftMdFillIcon = (
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
      <path d='M1 16V9c0-.531.438-1 1-1 .531 0 1 .469 1 1v4.594l6.281-6.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L4.408 15H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='cf1f46be4f715e47d9bf6e65e96cd75c__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftMdFillIcon);
export default ForwardRef;
