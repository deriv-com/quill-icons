import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.117 4.625h1.64L7.149 8.773l4.266 5.602H8.086L5.46 10.977l-2.977 3.398H.82l3.868-4.406L.609 4.625h3.422l2.344 3.117zm-.586 8.766h.914L3.54 5.563h-.984z' />
    </g>
    <defs>
      <clipPath id='139b001663cb4675b9b47381b9256653__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterCaptionIcon);
export default ForwardRef;
