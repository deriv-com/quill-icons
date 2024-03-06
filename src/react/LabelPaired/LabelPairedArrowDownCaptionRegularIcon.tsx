import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownCaptionRegularIcon = (
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
      <path d='M4.242 14.633.117 10.508q-.234-.258 0-.516.258-.234.516 0l3.492 3.469V4.625q.023-.352.375-.375.352.023.375.375v8.836l3.492-3.469q.258-.234.516 0 .234.258 0 .516l-4.125 4.125q-.258.234-.516 0' />
    </g>
    <defs>
      <clipPath id='31671d76df69879dc59f5b6f4e77bb91__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionRegularIcon);
export default ForwardRef;
