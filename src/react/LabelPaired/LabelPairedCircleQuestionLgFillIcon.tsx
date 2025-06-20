import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M6.602 11.984v.04a.976.976 0 0 0 .585 1.21c.47.157 1.016-.078 1.172-.586l.04-.039a.29.29 0 0 1 .273-.195h2.265c.352 0 .626.234.626.586a.61.61 0 0 1-.313.508l-1.719.976c-.312.157-.469.47-.469.82v.508c0 .547.391.938.938.938.508 0 .898-.39.938-.898l1.25-.743c.742-.43 1.25-1.25 1.25-2.109 0-1.367-1.133-2.5-2.5-2.5H8.672c-.938 0-1.758.586-2.07 1.484M8.75 19.25c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='724597e322a4d904575dcaa8d7a0a8e0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionLgFillIcon);
export default ForwardRef;
