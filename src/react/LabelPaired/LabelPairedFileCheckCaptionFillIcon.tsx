import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckCaptionFillIcon = (
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
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zm1.148 6.586h-.023c.234-.211.234-.563 0-.797a.55.55 0 0 0-.773 0l-2.625 2.625-1.102-1.101a.513.513 0 0 0-.773 0 .513.513 0 0 0 0 .773l1.5 1.5c.21.234.562.234.796 0z' />
    </g>
    <defs>
      <clipPath id='f4edab29849f23f1273924ef9de3f9a4__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckCaptionFillIcon);
export default ForwardRef;
