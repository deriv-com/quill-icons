import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpXlFillIcon = (
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
      <path d='m8.531 7.969 6 6c.422.422.563 1.078.328 1.64-.234.563-.796.938-1.359.938h-12c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64l6-6a1.445 1.445 0 0 1 2.11 0' />
    </g>
    <defs>
      <clipPath id='476e06ed2f9bcfddad37a8450394345d__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlFillIcon);
export default ForwardRef;
