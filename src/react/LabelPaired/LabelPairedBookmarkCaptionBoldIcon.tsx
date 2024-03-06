import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.625q.024-.468.328-.797.329-.304.797-.328v10.335l3.047-2.155a.56.56 0 0 1 .656 0l3.047 2.156V4.625h-6.75V3.5h6.75q.469.024.797.328.304.329.328.797v10.313a.53.53 0 0 1-.305.492.6.6 0 0 1-.586-.024L4.5 12.828.89 15.406a.6.6 0 0 1-.585.024.59.59 0 0 1-.305-.492z' />
    </g>
    <defs>
      <clipPath id='55c54f7fec10e572065bcdd917de8a79__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionBoldIcon);
export default ForwardRef;
