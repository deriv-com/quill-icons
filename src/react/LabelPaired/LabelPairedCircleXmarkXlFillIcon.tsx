import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M8.203 14.203c-.469.469-.469 1.172 0 1.594L10.406 18l-2.203 2.203c-.469.469-.469 1.172 0 1.594a1.027 1.027 0 0 0 1.547 0l2.203-2.203 2.203 2.203c.469.469 1.172.469 1.594 0 .469-.422.469-1.125 0-1.594L13.547 18l2.203-2.203c.469-.422.469-1.125 0-1.594-.422-.422-1.125-.422-1.594 0l-2.203 2.203-2.203-2.203a1.103 1.103 0 0 0-1.547 0' />
    </g>
    <defs>
      <clipPath id='103ccce442cb80f477cbf23d15188838__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkXlFillIcon);
export default ForwardRef;
