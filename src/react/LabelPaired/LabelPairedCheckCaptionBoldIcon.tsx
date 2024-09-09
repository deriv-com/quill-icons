import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.586 5.914c.21.234.21.586 0 .797l-6.188 6.187c-.234.235-.585.235-.796 0L.414 9.711a.513.513 0 0 1 0-.774.513.513 0 0 1 .774 0l2.789 2.79 5.812-5.813c.211-.21.563-.21.774 0z' />
    </g>
    <defs>
      <clipPath id='f27c7b0bf69432951dc27e9e85790c7e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionBoldIcon);
export default ForwardRef;
