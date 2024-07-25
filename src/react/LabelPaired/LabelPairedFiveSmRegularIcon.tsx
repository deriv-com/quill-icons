import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 4.98c.054-.218.218-.355.437-.355h5.688A.47.47 0 0 1 8 5.063a.45.45 0 0 1-.437.437h-5.36L1.11 9.875h4.266c1.914 0 3.5 1.586 3.5 3.5 0 1.941-1.586 3.5-3.5 3.5H2.422c-.902 0-1.75-.492-2.16-1.312l-.11-.22c-.109-.218 0-.491.192-.6a.45.45 0 0 1 .601.19l.11.247c.273.52.793.847 1.367.847h2.953a2.626 2.626 0 0 0 0-5.25H.563a.47.47 0 0 1-.356-.191.44.44 0 0 1-.082-.356z' />
    </g>
    <defs>
      <clipPath id='39da58832eac1f9e7f8daab795eb28f8__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmRegularIcon);
export default ForwardRef;
