import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkCaptionBoldIcon = (
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
      <path d='M8.086 6.71 5.273 9.524l2.79 2.79a.513.513 0 0 1 0 .773.513.513 0 0 1-.774 0l-2.812-2.79-2.79 2.79a.513.513 0 0 1-.773 0c-.234-.211-.234-.563 0-.797L3.704 9.5.913 6.71c-.234-.21-.234-.562 0-.796.211-.21.563-.21.797 0L4.5 8.727l2.79-2.79c.21-.234.562-.234.796 0 .21.211.21.563 0 .774' />
    </g>
    <defs>
      <clipPath id='c685790e258711c669cd17591256e579__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionBoldIcon);
export default ForwardRef;
