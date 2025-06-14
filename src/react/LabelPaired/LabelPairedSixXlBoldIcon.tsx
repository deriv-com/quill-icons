import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 21c0-2.86-2.39-5.25-5.25-5.25a5.16 5.16 0 0 0-3.844 1.688l-.234.28c-.797.938-1.172 2.11-1.172 3.282a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25m-5.953-7.453c.234 0 .469-.047.703-.047 4.125 0 7.5 3.375 7.5 7.5 0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21c0-1.922.703-3.703 1.922-5.016l6.562-8.062c.375-.469 1.079-.563 1.594-.14.469.374.563 1.077.14 1.593z' />
    </g>
    <defs>
      <clipPath id='4889150ac687387c795955b2c141f2a7__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlBoldIcon);
export default ForwardRef;
