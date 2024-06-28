import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.398 9.102c.211.234.211.585 0 .796l-4.5 4.5c-.234.235-.586.235-.796 0a.513.513 0 0 1 0-.773l4.101-4.102-4.101-4.125a.513.513 0 0 1 0-.773.513.513 0 0 1 .773 0z' />
    </g>
    <defs>
      <clipPath id='9f91a499579dc23f632160cc2112908b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionBoldIcon);
export default ForwardRef;
