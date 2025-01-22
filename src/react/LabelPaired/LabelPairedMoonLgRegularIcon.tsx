import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.422 8.117A7.51 7.51 0 0 0 1.25 15.5c0 4.18 3.32 7.5 7.46 7.5a7.77 7.77 0 0 0 3.673-.937c-4.14-.352-7.422-3.868-7.422-8.125 0-2.266.937-4.336 2.46-5.82M10 7.297a.56.56 0 0 1-.273.664 6.85 6.85 0 0 0-3.516 5.977 6.86 6.86 0 0 0 6.875 6.874c.39 0 .781 0 1.172-.078.273-.039.547.078.664.313.117.273.078.547-.117.742A8.7 8.7 0 0 1 8.71 24.25C3.906 24.25 0 20.344 0 15.5c0-4.805 3.906-8.75 8.71-8.75.235 0 .509.04.743.04.274.038.508.233.547.507' />
    </g>
    <defs>
      <clipPath id='b2663b9ea7e647bc22f4ab48dda4d19e__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgRegularIcon);
export default ForwardRef;
