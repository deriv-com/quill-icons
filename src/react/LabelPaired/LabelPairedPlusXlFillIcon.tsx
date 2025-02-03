import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 9.75v6.75h6.75c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H12v6.75c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V19.5H2.25A1.48 1.48 0 0 1 .75 18c0-.797.656-1.5 1.5-1.5H9V9.75c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='210e0934bc3f2fc170d86b96414027a7__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlFillIcon);
export default ForwardRef;
